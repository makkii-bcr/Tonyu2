define(["exportAsScriptTags"], function (east) {
    var dir=Util.getQueryString("dir", "/Tonyu/Projects/1_Animation/");
    dir=FS.get(dir);
    $("#prog").val(east(dir,{
        excludes:{"js/concat.js":1,"js/concat.js.map":1},
         includeJSScript:true
     }));
});
