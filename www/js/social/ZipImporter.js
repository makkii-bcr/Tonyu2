define(["Klass","FS","Util","DragDrop","DeferredUtil","UI"],
function (Klass,FS,Util,DD,DU,UI) {
    FS.mount("/ram/","ram");
    var zip=FS.zip;
    var tmpDir=FS.get("/ram/");
    var ZipImporter=Klass.define({
        $: function (dir, elem, options) {
            var t=this;
            t.elem=elem;
            t.dir=dir;
            t.tmpDir=tmpDir.rel(dir.name());
            options=options||{};
            t.onComplete=options.onComplete;
            if (t.elem) t.prepareDragDrop();
        },
        prepareDragDrop: function () {
            var t=this;
            DD.accept(t.elem, t.tmpDir, {
                onComplete: function (status) {
                    t.showDialog();
                    var ctx={imported:0, from:"dragDrop"};
                    t.acceptDrag(status,ctx).then(function () {
                        t.closeDialog();
                        if (t.onComplete) t.onComplete(ctx);
                    },function (e) {
                        t.closeDialog();
                        console.error(e);
                        alert(e);
                    });
                }
            });
        },
        acceptDrag: function (status,ctx) {
            var t=this;
            return DU.each(status,function(k,s) {
                //s.file;
                //s.status;
                if (s.status==="uploaded" && s.file.ext()===".zip") {
                    return t.unzip(s.file,ctx);
                }
            });
        },
        showDialog: function (mesg) {
            var t=this;
            mesg=mesg||"ZIPからインポート中です...";
            if (!t.dialog) {
                t.dialog=UI("div",{title:"Zipからインポート"},
                    ["span",{$var:"mesg"}, mesg]
                );
                t.mesg=t.dialog.$vars.mesg;
            } else {
                t.mesg.text(mesg);
            }
            if (!t.dialogOpened) {
                t.dialog.dialog({modal:true});
            }
            t.dialogOpened=true;
        },
        closeDialog: function () {
            var t=this;
            if (t.dialog) {
                t.dialog.dialog("close");
                t.dialogOpened=false;
            }
        },
        unzip: function (file,ctx) {
            // ctx.dstDir is set when fromPrjB, /Tonyu/Project/prjfile_0.00/
            var t=this;
            t.showDialog(file.name()+"を展開中...");
            var zipexdir=t.tmpDir.rel(file.truncExt()+"/");
            return FS.zip.unzip(file, zipexdir ).then(function () {
                return t.traverse(zipexdir,ctx);
            }).then(function (ctx) {
                if (ctx.from==="prjB" && ctx.imported===0) throw new Error(
                    file.name()+
                    "にはTonyu2の編集可能なプロジェクトが含まれていません.");
            });
        },
        traverse: function (zipexdir,ctx) {
            var t=this;
            var ctx=ctx||{};
            ctx.imported=ctx.imported||0;
            return zipexdir.each(function (f) {
                t.showDialog(f.name()+"をチェック中...");
                console.log("traverse",f.path());
                if (f.isDir()) {
                    return t.traverse(f,ctx);
                } else if (f.name()==="options.json") {
                    ctx.imported++;
                    return t.importFrom(f.up(),ctx);
                }
            }).then(function (){
                return ctx;
            });
        },
        importFrom: function (src,ctx) {
            var t=this;
            var dst;
            if (ctx.dstDir) {
                dst=ctx.dstDir;
            } else {
                var dstParent=t.dir;
                var nameT=FS.PathUtil.truncSEP(src.name());
                if (nameT==="src") {
                    nameT=FS.PathUtil.truncSEP(src.up().name());
                }
                var name=nameT+"/";
                dst=dstParent.rel(name);
                var i=2;
                while (dst.exists()) {
                    name=nameT+i+"/";
                    i++;
                    dst=dstParent.rel(name);
                }
            }
            t.showDialog(src.name()+ "から"+ dst.name()+"にコピー");
            console.log("importFrom",src.path(), "to", dst.path());
            return src.copyTo(dst).then(function () {
                if (t.prjID) {
                    var options=dst.rel("options.json");
                    if (options.exists()) {
                        var optobj=options.obj();
                        optobj.info=optobj.info||{};
                        optobj.info.prjID=t.prjID;
                        options.obj(optobj);
                    }
                }
            });
        },
        checkFromPrjB: function () {
            var t=this;
            var file=Util.getQueryString("fromPrjB");
            var prjID=Util.getQueryString("prjID");
            t.prjID=prjID;
            console.log("checkFromPrjB",file);
            if (file) {
                var dstDir=t.dir.rel(file.replace(/\.zip$/i,"/"));
                if (dstDir.exists() ){
                    console.log(dstDir+" already exists ");
                    return 0;
                }
                FS.mount("http://edit.tonyu.jp/","web");
                var ctx={from:"prjB", imported:0, dstDir:dstDir};
                return t.fromPrjB(file,ctx).then(function (r) {
                    t.closeDialog();
                    if (t.onComplete) t.onComplete(ctx);
                    return r;
                },function (e) {
                    t.closeDialog();
                    alert(e);
                    console.error(e);
                });
            }
        },
        fromPrjB: function (fileName,ctx) {
            var t=this;
            var f=FS.get("http://edit.tonyu.jp/cgi-bin/dl.cgi?file="+fileName);
            var tmp=FS.get("/ram/").rel(fileName);
            t.showDialog("プロジェクトボードから"+fileName+"をダウンロード....");
            return f.copyTo(tmp).then(function (r) {
                return t.unzip(tmp,ctx);
            });
        }
    });
    return ZipImporter;
});