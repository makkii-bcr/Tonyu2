//"var reqConf="+JSON.stringify( getReq.genConf({base:"http://localhost:3002/js/", baseUrl:"js"})+";"
var reqConf={
        "shim": {
            TextEditor: {
                exports: "TextEditor"
            },
/*            FileMenu: {
                exports: "FileMenu"
            },*/
            difflib: {
            	exports: "difflib"
            },
            diffview: {
            	exports: "diffview"
            },
            timbre: {
                exports: "T"
            },
            "disp": {
                "deps": ["IndentBuffer"],
                "exports": "disp"
            },
            "Util": {
                "exports": "Util"
            },
            "Profiler": {
                "exports": "Profiler"
            },
            "TextUtil": {
                "exports": "TextUtil"
            },
            "ObjectMatcher": {
                "exports": "ObjectMatcher"
            },
            "Arrow": {
                "exports": "Arrow"
            },
            "context": {
                "exports": "context"
            },
            "IndentBuffer": {
                "exports": "IndentBuffer"
            },
            "ExpressionParser": {
                "deps": ["Parser"],
                "exports": "ExpressionParser"
            },
            "Grammar": {
                "deps": ["Parser"],
                "exports": "Grammar"
            },
            "Parser": {
                "deps": ["disp"],
                "exports": "Parser"
            },
            "TonyuLang": {
                "deps": ["Grammar", "XMLBuffer", "IndentBuffer", "disp", "Parser", "ExpressionParser", "TError"],
                "exports": "TonyuLang"
            },
            "Visitor": {
                "exports": "Visitor"
            },
            "XMLBuffer": {
                "deps": ["Parser"],
                "exports": "XMLBuffer"
            },
            "Tonyu": {
                "exports": "Tonyu"
            },
            "Tonyu.Compiler": {
                "deps": ["Tonyu", "Tonyu.Iterator", "TonyuLang", "ObjectMatcher", "TError", "IndentBuffer", "context", "Visitor"],
                "exports": "Tonyu.Compiler"
            },
            "fixIndent": {
                "deps": ["TonyuLang", "Visitor", "Grammar"],
                "exports": "fixIndent"
            },
            "Tonyu.TraceTbl": {
                "deps": ["Tonyu", "FS", "TError"],
                "exports": "Tonyu.TraceTbl"
            },
            /*"Sprites": {
                "deps": ["fukidashi", "Tonyu"],
                "exports": "Sprites"
            },*/
            "Key": {
                "exports": "Key"
            },
            "TextRect": {
                "exports": "TextRect"
            },
            "fukidashi": {
                "deps": ["TextRect"],
                "exports": "fukidashi"
            },
            "FS": {
                "exports": "FS"
            },
            "showErrorPos": {
            	deps:[ "WebSite"],
                "exports": "showErrorPos"
            },
            "TError": {
                "exports": "TError"
            },
            "fs/ROMk": {
                "deps": ["FS","WebSite"]
            },
            "fs/ROMd": {
                "deps": ["FS","WebSite"]
            },
            "fs/ROMs": {
                "deps": ["FS","WebSite"]
            },
            "FileList": {
                "deps": ["FS"],
                "exports": "FileList"
            },
            "HttpHelper": {
                "exports": "HttpHelper"
            },
            "Wiki": {
                "deps": ["HttpHelper", "Arrow", "Util","WebSite"],
                "exports": "Wiki"
            },
            "ace": {
                "exports": "ace"
            },
            "fs/import": {
                deps: ["FS"]
            },
            "fs/export": {
                deps: ["Shell","FS"]
            }
            /*"ide/selProject": {
                deps: ["fs/ROMk","fs/ROMd","fs/ROMs", "FS","Wiki"]
            }*/
            /*"ide/noviceSelProject": {
                deps: ["fs/ROMk","fs/ROMd","fs/ROMs", "FS","Wiki"]
            }*/
        },
        "paths": {
            runtime: "runtime/runtime",
            difflib: "lib/difflib",
            diffview: "lib/diffview",
            timbre: "lib/timbre",
            KernelDiffDialog: "ide/KernelDiffDialog",
        	DiffDialog: "ide/DiffDialog",
        	ScriptTagFS:"fs/ScriptTagFS",
        	KeyEventChecker: "lib/KeyEventChecker",
        	NewProjectDialog: "ide/NewProjectDialog",
            WebSite: "runtime/WebSite",
            UI:"lib/UI",
            ImageResEditor: "ide/ImageResEditor",
            reqConf: "reqConf",
            dumpScript: "build/dumpScript",
            buildAll: "build/buildAll",
            runScript: "runtime/runScript",
            copySample: "ide/copySample",
            "Shell": "fs/Shell",
            "ide/wikiEditor": "ide/wikiEditor",
            TextEditor: "ide/TextEditor",
            FileMenu: "fs/FileMenu",
            ImageList: "graphics/ImageList",
            "disp": "lib/disp",
            "Util": "lib/util",
            "Profiler": "lib/profiler",
            "TextUtil": "lib/TextUtil",
            "ObjectMatcher": "lang/ObjectMatcher",
            "Arrow": "help/Arrow",
            "context": "lang/context",
            "IndentBuffer": "lang/IndentBuffer",
            "ExpressionParser": "lang/ExpressionParser2",
            "Grammar": "lang/Grammar",
            "Parser": "lang/parser",
            "TonyuLang": "lang/parse_tonyu2",
            "Visitor": "lang/Visitor",
            "XMLBuffer": "lang/XMLBuffer",
            "Tonyu": "runtime/TonyuLib",
            "Tonyu.Iterator": "runtime/Iterator",
            "Tonyu.Compiler": "lang/compiler2",
            "fixIndent": "lang/indent",
            "Tonyu.TraceTbl": "runtime/TraceTbl",
            //"Sprites": "graphics/Sprites",
            "Key": "runtime/Key",
            "TextRect": "graphics/TextRect",
            "fukidashi": "graphics/fukidashi",
            "FS": "fs/fs",
            "Tonyu.Project": "ide/TonyuProject",
            "showErrorPos": "ide/ErrorPos",
            "TError": "ide/TError",
            "ide/editor": "ide/editor",
            "fs/ROMk": "../fs/Tonyu/js/gen/ROM_k",
            "fs/ROMd": "../fs/Tonyu/js/gen/ROM_d",
            "fs/ROMs": "../fs/Tonyu/js/gen/ROM_s",
            "ProjectOptionsEditor": "ide/ProjectOptionsEditor",
            "FileList": "fs/FileList",
            "HttpHelper": "help/HttpHelper",
            "Wiki": "help/wiki",
            "WikiDialog": "help/wikiDialog",
            "ace": "lib/ace-noconflict/ace",
            "ide/selProject": "ide/selProject",
            "ide/editor": "ide/editor",
            "ide/noviceSelProject": "ide/noviceSelProject",
            "ide/noviceEditor": "ide/noviceEditor",
            PatternParser:"graphics/PatternParser",
            copyToKernel: "fs/copyToKernel",
            JSONCol: "lib/JSONCol",
            genROM: "build/genROM",
            "foo":"bar"
        },
        "baseUrl": "../../js"
};
if (typeof exports!=="undefined") exports.conf=reqConf;