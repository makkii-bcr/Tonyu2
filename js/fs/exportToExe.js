requirejs(["Auth","Util","exportAsScriptTags","requestFragment","Blob","Tonyu.Project","FS"],
        function (Auth,Util,east,rf,Blob,TPR,FS){
$(function () {
   var dir=Util.getQueryString("dir", "/Tonyu/Projects/1_Animation/");
   dir=FS.get(dir);
   var prj=TPR(dir,FS.get("/Tonyu/Kernel/"));
   //var dirs=dir.split("/");
   //dirs.pop();
   var name=prj.getName(); //dirs.pop();
   var error=function () {
       var a=[];
       for (var i=0;i<arguments.length;i++) a[i]=arguments[i];
       alert("Error "+JSON.stringify(a));
   };
   $("#prjNameSpan").text(name);
   $("#prjName").val(name);
   Auth.assertLogin({complete:function(res) {
       $(".on-logged-out").hide();
       $(".on-logged-in").show();
       $("#prog").val(east(dir));
       $.ajax({ type:"get", //redirectTo:"tonyuexe",
           url:"../../edit/get-project-info",
           data:{pathInfo:"/get-project-info", project:name},
           success:function (res) {
               console.log("get-prj",res);
               var data=JSON.parse(res);
               if (data.license!="null") $("#license").val(data.license);
               if (data.title!="null") $("#prjTitle").val(data.title);
               else $("#prjTitle").val(data.name);
               if (data.description!="null") $("#desc").val(data.description);
               $("#allowFork").attr("checked",data.allowFork!="false");
               $("#publishToList").attr("checked",data.publishToList!="false");
               $(".submit-wait").hide();
               var button=$("<button>").text("公開する").click(bClk);
               function bClk(e) {
                   //alert("bckl");
                   $(".submit-wait").show();
                   Blob.uploadToExe(prj, {complete:afterUpBlob,error:error,progress:progress});
                   e.preventDefault();
                   return false;
               }
               function progress() {
                   //alert("pgr");
                   $(".submit-wait").append("...");
               }
               function afterUpBlob() {
                   progress();
                   //alert("aft");
                   button.hide();
                   var data={pathInfo:"/upload-project"};
                   function setData() {
                       var t=$(this);
                       data[t.attr("name")]=t.val();
                   }
                   $("#theForm input").each(setData);
                   $("#theForm select").each(setData);
                   $("#theForm textarea").each(setData);
                   console.log("upload-project data",data);
                   $.ajax({type:"post", redirectTo:"tonyuexe",
                       url:"../../edit/upload-project",
                       data:data,
                       success:function (res) {
                           console.log("upload-prj",res);
                           res=JSON.parse(res);
                           $("#complete").show();
                           $("#url").attr("href",res.url);
                           $(".submit-wait").hide();
                       },error: error
                   });
               }
               $("#theForm").append(button);
           },
           error: error
       });
       $(".wait-loggin").hide();

   },showLoginLink: function () {
       $(".wait-loggin").hide();
       $(".on-logged-out").show();
   }});
});
});