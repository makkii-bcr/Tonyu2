define(["fs/ROM","FS","Tonyu.Project","Shell","Sprites","ImageList"],
        function (rom,FS,Tonyu_Project, sh, Sprites, ImageList) {
    $(function () {
        Tonyu.defaultResource={
                images:[
                        //base
                        {url: "http://jsrun.it/assets/6/F/y/3/6Fy3B.png", pwidth:32, pheight:32},
                        //sample
                        {url: "data:image/png;base64,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"},
                        //{url: "http://jsrun.it/assets/s/V/S/l/sVSlZ.png"},
                        //neko
                        {url: "http://jsrun.it/assets/j/D/9/q/jD9qQ.png", pwidth:32, pheight:32}
                ],
                sounds:[]
        };

        var w=$(window).width()-20;
        var h=$(window).height()-20;
        $("<canvas>").attr({width: w, height:h}).appendTo("body");
        var scrs=$("script");
        var curProjectDir=FS.get("/Tonyu/runscript/");
        if (curProjectDir.exists()) sh.rm(curProjectDir,{r:1});
        var name="Main";
        scrs.each(function (){
            var s=this;
            //console.log(s.type, s.dataset.filename);
            if (s.type=="text/tonyu") {
                var fn=$(s).data("filename");
                if (fn) {
                    var f=curProjectDir.rel(fn);
                    //console.log(f);
                    f.text(s.innerHTML);
                    if ($(s).data("main")) {
                        name=f.truncExt(".tonyu");
                    }
                }
            }
        });
        var kernelDir=FS.get("/Tonyu/Kernel/");
        var curPrj=Tonyu_Project(curProjectDir, kernelDir);
        curPrj.env.options.compiler.defaultSuperClass="Actor";
        curPrj.run(name);

    });
});
