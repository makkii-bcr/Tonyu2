define(["Tonyu","Tonyu.Compiler.JSGenerator","Tonyu.Compiler.Semantics","Tonyu.TraceTbl","FS"],
        function (Tonyu,JSGenerator,Semantics, ttb,FS) {
var TPRC=function (dir) {
    if (!dir.rel) throw new Error("projectCompiler: "+dir+" is not dir obj");
     var TPR={env:{}};
     var traceTbl=Tonyu.TraceTbl();
     var env=TPR.env;
     env.traceTbl=traceTbl;
     TPR.EXT=".tonyu";
     TPR.getOptionsFile=function () {
         var resFile=dir.rel("options.json");
         return resFile;
     };
     TPR.getOptions=function () {
         env.options=null;
         var resFile=TPR.getOptionsFile();
         if (resFile.exists()) env.options=resFile.obj();
         if (env.options && !env.options.run && Tonyu.defaultOptions) env.options=null;
         if (!env.options) {
             env.options=Tonyu.defaultOptions;
         }
         TPR.fixOptions(env.options);
         return env.options;
     };
     TPR.fixOptions=function (opt) {
         if (!opt.compiler) opt.compiler={};
         //if (!opt.srcPath) opt.srcPath={"user": "."};
         //opt.compiler.commentLastPos=TPR.runScriptMode || StackTrace.isAvailable();
         //opt.run.mainClass=TPR.fixClassName(opt.run.mainClass);
         //opt.run.bootClass=TPR.fixClassName(opt.run.bootClass);
     };
     TPR.resolve=function (rdir){
         if (rdir instanceof Array) {
             var res=[];
             rdir.forEach(function (e) {
                 res.push(TPR.resolve(e));
             });
             return res;
         }
         if (typeof rdir=="string") {
             return FS.resolve(rdir, dir.path());
         }
         if (!rdir || !rdir.isDir) throw new Error("Cannot TPR.resolve: "+rdir);
         return rdir;
     };
     TPR.shouldCompile=function () {
         var outF=TPR.getOutputFile();
         if (!outF.exists()) {
             return true;
         }
         if (outF.isReadOnly()) return false;
         var outLast=outF.lastUpdate();
         //console.log("Outf last="+new Date(outLast));
         var sf=TPR.sourceFiles();
         for (var i in sf) {
             var f=sf[i];
             var l=f.lastUpdate();
             //console.log(f.name()+" last="+new Date(l));
             if (l>outLast) {
                 return true;
             }
         }
         var resFile=TPR.getOptionsFile();
         if (resFile.exists() && resFile.lastUpdate()>outLast) {
             return true;
         }
         return false;
     };
     TPR.getNamespace=function () {
         var opt=TPR.getOptions();
         return opt.compiler.namespace;
     };
     TPR.getOutputFile=function (lang) {
         var opt=TPR.getOptions();
         var outF=TPR.resolve(opt.compiler.outputFile);
         if (outF.isDir()) {
             throw new Error("out: directory style not supported");
         }
         return outF;
     };
     // Difference of ctx and env:  env is of THIS project. ctx is of cross-project
     TPR.loadClasses=function (ctx/*or options(For external call)*/) {
         console.log("LoadClasses: "+dir.path());
         ctx=initCtx(ctx);
         var visited=ctx.visited||{};
         var classes=ctx.classes||{};
         if (visited[TPR.path()]) return;
         visited[TPR.path()]=true;
         var myNsp=TPR.getNamespace();
         TPR.getDependingProjects().forEach(function (p) {
             if (p.getNamespace()==myNsp) return;
             p.loadClasses(ctx);
         });
         if (TPR.shouldCompile()) {
             TPR.compile(ctx);
         } else {
             var outF=TPR.getOutputFile("js");
             evalFile(outF);
             var ns=TPR.getNamespace();
             var cls=Tonyu.classes;
             ns.split(".").forEach(function (c) {
                 cls=cls[c];
                 if (!cls) throw new Error("namespace Not found :"+ns);
             });
             for (var cln in cls) {
                 var cl=cls[cln];
                 var m=Tonyu.klass.getMeta(cl);
                 classes[m.fullName]=m;
             }
         }
     };
     function initCtx(ctx) {
         if (!ctx) ctx={};
         if (!ctx.visited) {
             ctx={visited:{}, classes:(env.classes=env.classes||{}),options:ctx};
         }
         return ctx;
     }
     TPR.compile=function (ctx/*or options(For external call)*/) {
         console.log("Compile: "+dir.path());
         ctx=initCtx(ctx);
         var dp=TPR.getDependingProjects();
         var myNsp=TPR.getNamespace();
         dp.forEach(function (dprj) {
             var nsp=dprj.getNamespace();
             if (nsp!=myNsp) {
                 dprj.loadClasses(ctx);
             }
         });
         var dirs=TPR.sourceDirs();
         TPR.compileDir(myNsp ,dirs, ctx);
     };
     TPR.compileDir=function (nsp ,dirs, ctx) {
         var baseClasses=ctx.classes;
         var ctxOpt=ctx.options;
         dirs=TPR.resolve(dirs);
         Tonyu.runMode=false;
         env.aliases={};
         for (var n in baseClasses) {
             var cl=baseClasses[n];
             env.aliases[ cl.shortName] = cl.fullName;
         }
         var newClasses={};
         //Tonyu.currentProject=TPR;
         //Tonyu.globals.$currentProject=TPR;
         //console.log(dirs);
         var sf=TPR.sourceFiles(nsp,dirs);
         for (var shortCn in sf) {
             var f=sf[shortCn];
             var fullCn=nsp+"."+shortCn;
             newClasses[fullCn]=baseClasses[fullCn]={
                     fullName: fullCn,
                     shortName: shortCn,
                     namespace:nsp,
                     src:{
                         tonyu: f
                     }
             };
             env.aliases[shortCn]=fullCn;
         }
         for (var n in newClasses) {
             console.log("initClassDecl: "+n);
             Semantics.initClassDecls(newClasses[n], env);/*ENVC*/
         }
         var ord=orderByInheritance(newClasses);/*ENVC*/
         ord.forEach(function (c) {
             console.log("annotate :"+c.fullName);
             Semantics.annotate(c, env);
         });
         TPR.concatJS(ord);
     };
     TPR.concatJS=function (ord) {
         var cbuf="";
         ord.forEach(function (c) {
             console.log("concatJS :"+c.fullName);
             JSGenerator.genJS(c, env);
             cbuf+=c.src.js+"\n";
         });
         var outf=TPR.getOutputFile();
         outf.text(cbuf);
         evalFile(outf);
     };
     TPR.getDependingProjects=function () {
         var opt=TPR.getOptions();
         var dp=opt.compiler.dependingProjects || [];
         return dp.map(function (dprj) {
             var prjDir=TPR.resolve(dprj);
             return TPRC(prjDir);
         });
     };
     TPR.dir=dir;
     TPR.path=function () {return dir.path();};

     TPR.sourceFiles=function (nsp,dirs) {
         nsp=nsp || TPR.getNamespace();
         dirs=dirs || TPR.sourceDirs();
         var res={};
         for (var i=dirs.length-1; i>=0 ; i--) {
             dirs[i].recursive(collect);
         }
         function collect(f) {
             if (f.endsWith(TPR.EXT)) {
                 var nb=f.truncExt(TPR.EXT);
                 res[nb]=f;
             }
         }
         return res;
     };
     TPR.sourceDirs=function () {
         var dp=TPR.getDependingProjects();
         var myNsp=TPR.getNamespace();
         var dirs=[dir];
         dp.forEach(function (dprj) {
             var nsp=dprj.getNamespace();
             if (nsp==myNsp) {
                 dirs.push(dprj.dir);
             }
         });
         return dirs;
     };
    function orderByInheritance(classes) {/*ENVC*/
        var added={};
        var res=[];
        var ccnt=0;
        for (var n in classes) {/*ENVC*/
            added[n]=false;
            ccnt++;
        }
        while (res.length<ccnt) {
            var p=res.length;
            for (var n in classes) {/*ENVC*/
                if (added[n]) continue;
                var c=classes[n];/*ENVC*/
                var spc=c.superClass;
                var deps=[spc];
                var ready=true;
                if (c.includes) deps=deps.concat(c.includes);
                deps.forEach(function (cl) {
                    ready=ready && (
                       !cl || !classes[cl.fullName] || cl.builtin || added[cl.fullName]
                    );
                });
                if (ready) {
                    res.push(c);
                    added[n]=true;
                }
            }
            if (res.length==p) throw TError( "クラスの循環参照があります", "不明" ,0);
        }
        return res;
    }
    function evalFile(f) {
        console.log("loading: "+f.path());
        if (typeof require=="function") return require(f.path());
        else return new Function(f.text())();
    }
    return TPR;
}
return TPRC;
});

