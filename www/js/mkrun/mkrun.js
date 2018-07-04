define(["FS","Util","assert","WebSite","plugins","Shell","Tonyu"],
        function (FS,Util,assert,WebSite,plugins,sh,Tonyu) {
    var MkRun={};
    sh.mkrun=function (dest) {
        return MkRun.run( Tonyu.currentProject, FS.get(dest));
    };
    MkRun.run2=function (prj,type,options) {
        // type: zip , prj, dir
        // when type=="dir" , options.dest is required
        var destZip;
        switch(type) {
            case "prj":
            destZip=this.tmpDir().rel("prj.zip");
            case "zip":
            dest=this.tmpDir().rel(prj.getDir().name());
            break;
            case "dir":
            dest=options.dest;
        }
        assert(dest,"dest is not set");
        console.log("mkrun2",dest,destZip);
        return MkRun.run(prj,dest,options).then(function () {
            switch(type) {
                case "zip":
                return FS.zip.zip(dest,options).finally(function () {
                    return dest.rm({r:1});
                });
                case "prj":
                return FS.zip.zip(dest,destZip,options).then(function () {
                    return destZip.getContent(function (c) {
                        var f=new FormData();
                        var url=WebSite.uploadTmpUrl;
                        f.append( "content" , new Blob( [c.toBin(ArrayBuffer)], {type:c.contentType} ) , destZip.name() );
                        return $.ajax({url:url,method:"POST",data:f,processData: false, contentType: false});
                    });
                }).then(function (r) {
                    console.log(r);
                    if (!r.match(/^[\w\d\.]+\.zip$/)) {
                        //alert("アップロード失敗: "+r);
                        throw new Error("アップロード失敗: "+r);
                    }
                    //alert(r);
                    return {tmpFileName:r};
                }).finally(function (r) {
                    return dest.rm({r:1}).then(function () {
                        destZip.rm();
                    }).then(function () {return r;});
                });
            }
        });
    };
    MkRun.tmpDir=function () {
        var mkramPath="/mkram/";
        if (!MkRun.mounted) FS.mount(mkramPath, FS.LSFS.ramDisk() );
        MkRun.mounted=true;
        var mkram=FS.get(mkramPath);
        if (mkram.exists()) mkram.rm({r:1});
        return mkram;
    };
    MkRun.run=function (prj,dest,options) {
        options=options||{};
        var prjDir=prj.getDir();
        var resc=prj.getResource();
        var opt=prj.getOptions();
        var loadFilesBuf="function loadFiles(dir){\n"+
        "   if (WebSite.isNW) return;\n";
        var wwwDir=FS.get(WebSite.wwwDir);
        var jsDir=wwwDir.rel("js/");
        console.log("jsDir",jsDir);
        //var sampleImgDir=wwwDir.rel("images/");
        if (options.copySrc) copySrc();
        return $.when(
                copySampleImages(),
                convertLSURL(resc.images),
                convertLSURL(resc.sounds),
                genFilesJS(),
                copyScripts(),
                copyPlugins(),
                copyLibs(),
                copyResources("images/"),
                copyResources("sounds/"),
                copyIndexHtml(),
                genReadme()
        );

        function genReadme() {
            dest.rel("Readme.txt").text(
                    "このフォルダは、Webサーバにアップロードしないと正常に動作しない可能性があります。\n"+
                    "詳しくは\nhttps://www.tonyu.jp/tonyu2/runtime.html\nを御覧ください。\n"
            );
        }
        function copyResources(dir) {
            var src=prjDir.rel(dir);
            if (src.exists()) src.copyTo(dest.rel(dir));
        }
        function genFilesJS(){
            addFileToLoadFiles("res.json",resc);
            addFileToLoadFiles("options.json",opt);
            var mapd=prjDir.rel("maps/");
            if (mapd.exists()) {
                mapd.recursive(function (mf) {
                    addFileToLoadFiles( mf.relPath(prjDir), mf.obj());
                });
            }
            var staticd=prjDir.rel("static/");
            if (staticd.exists()) {
                staticd.recursive(function (mf) {
                    addFileToLoadFiles( mf.relPath(prjDir));
                });
            }
            dest.rel("js/files.js").text(loadFilesBuf+"}");
        }
        function copyIndexHtml() {
            var htmlfile=wwwDir.rel("html/runtimes/index.html");
            return htmlfile.text(function (htmlcont) {
                htmlcont=htmlcont.replace(/TONYU_APP_VERSION/g,Math.floor(Math.random()*100000));
                return dest.rel(htmlfile.name()).text(htmlcont);
            });
        }
        function copyScripts() {
            var usrjs=prjDir.rel("js/concat.js");
            var usrjsmap=prjDir.rel("js/concat.js.map");
            //TODO async...
            //dest.rel("js/concat.js").text(usrjs.text()+"\n//# sourceMappingURL=concat.js.map");// js/ is needed??
            var kerjs=FS.get(WebSite.kernelDir).rel("js/concat.js");
            var runScr2=jsDir.rel("gen/runScript2_concat.js");
            return $.when(
                usrjsmap.exists() && usrjsmap.copyTo(dest.rel("js/concat.js.map")),
                usrjs.copyTo(dest.rel("js/concat.js")),
                kerjs.copyTo(dest.rel("js/kernel.js")),
                runScr2.copyTo(dest.rel("js/runScript2_concat.js"))
            );
        }
        function copyPlugins() {
            var pluginDir=jsDir.rel("plugins/");
            if (!opt.plugins) return;
            // TODO opt.plugins is now hash, but array is preferrable....
            var args=[];
            for (var n in opt.plugins) {
                // TODO if src not found, do not copy and use src directory(maybe http://....)
                var pf=pluginDir.rel(plugins.installed[n].src);
                args.push( pf.copyTo(dest.rel("js/plugins/")) );
            }
            return $.when.apply($,args);
        }
        function copyLibs() {
            return $.when(
                    jsDir.rel("lib/jquery-1.10.1.js").copyTo(dest.rel("js/lib/")),
                    jsDir.rel("lib/require.js").copyTo(dest.rel("js/lib/"))
            );
        }
        function addFileToLoadFiles(name, data) {
            if (data==null) {
                var file=prjDir.rel(name);
                if (file.ext()===".json") {
                    data=file.obj();
                } else if (file.isText()) {
                    //file.copyTo(dest.rel(name));
                    data=file.text();
                    loadFilesBuf+="\tdir.rel('"+name+"').text("+JSON.stringify(data)+");\n";
                    return;
                } else {
                    //file.copyTo(dest.rel(name));
                    data=file.dataURL();
                    loadFilesBuf+="\tdir.rel('"+name+"').dataURL("+JSON.stringify(data)+");\n";
                    return;
                }
            }
            //dest.rel(name).obj(data);
            loadFilesBuf+="\tdir.rel('"+name+"').obj("+JSON.stringify(data)+");\n";
        }
        function convertLSURL(r) {
            for (var k in r) {
                var url=r[k].url;
                if (Util.startsWith(url,"ls:")) {
                    var rel=url.substring("ls:".length);
                    r[k].url=rel;
                }
            }
        }
        function copySampleImages() {
            var urlAliases= {
                "images/Ball.png":1,
                "images/base.png":1,
                "images/Sample.png":"../../images/Sample.png",
                "images/neko.png":"../../images/neko.png",
                "images/mapchip.png":"../../images/mapchip.png",
                "images/sound.png":"../../images/sound.png",
                "images/sound_ogg.png":"../../images/sound_ogg.png",
                "images/sound_mp3.png":"../../images/sound_mp3.png",
                "images/sound_mp4.png":"../../images/sound_mp4.png",
                "images/sound_m4a.png":"../../images/sound_m4a.png",
                "images/sound_mid.png":"../../images/sound_mid.png",
                "images/sound_wav.png":"../../images/sound_wav.png",
                    "images/ecl.png":"../../images/ecl.png"
            };
            var args=[];
            for (var k in resc.images) {
                var u= resc.images[k].url;
                if (urlAliases[u] && !prjDir.rel(u).exists()) {
                    var imgf=wwwDir.rel(u);
                    if (imgf.exists()) {
                        args.push( imgf.copyTo(dest.rel(u)) );
                    } else {
                        sh.echo(imgf+" not exists!");
                    }
                }
            }
            return $.when.apply($,args);
        }
        function copySrc() {
            prjDir.copyTo(dest.rel("src/"));
        }
    };
    return MkRun;
});
