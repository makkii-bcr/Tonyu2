requirejs(["fs/ROMk","fs/ROMd","fs/ROMs", "FS","Wiki","Shell","copySample","NewProjectDialog","UI","Sync"],
  function (romk, romd, roms,           FS, Wiki,   sh,      copySample,  NPD,           UI, Sync) {
$(function () {
    copySample();
    var home=FS.get("/Tonyu/");
    var projects=home.rel("Projects/");
    sh.cd(projects);
    var curDir=projects;
    function ls() {
        $("#prjItemList").empty();
        curDir.ls(FS.orderByNumberedName).forEach(function (name) {
            var f=curDir.rel(name);
            UI("li", {"class":"file"}, ["a", {href:"project.html?dir="+f.path()}, name]).appendTo("#prjItemList");
            //$("#fileItem").tmpl({name: name, href:"project.html?dir="+f.path()}).appendTo("#prjItemList");
        });
    }
    $("#newPrj").click(function (){
    	NPD.show(projects, function (prjDir) {
            prjDir.mkdir();
            document.location.href="project.html?dir="+prjDir.path();
    	});
    	/*
        var n=prompt("新しいプロジェクトの名前","");
        if (!n) return;
        n+="/";
        var prjDir=projects.rel(n);
        prjDir.mkdir();
        document.location.href="project.html?dir="+prjDir.path();
        */
    });
    ls();
    var w=Wiki($("#wikiViewArea"), FS.get("/Tonyu/doc/"));
    w.show("index");
    SplashScreen.hide();
});
});
