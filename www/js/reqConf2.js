var reqConf={
    "shim": {
        TextEditor: {
            exports: "TextEditor"
        },
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
        "Arrow": {
            "exports": "Arrow"
        },
        "fixIndent": {
            "deps": ["TonyuLang", "Visitor", "Grammar"],
            "exports": "fixIndent"
        },
        "Key": {
            "exports": "Key"
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
        "ace": {
            "exports": "ace"
        },
        "fs/import": {
            deps: ["FS"]
        },
        "fs/export": {
            deps: ["Shell","FS"]
        },
        T2MediaLib: {
            deps: ["PicoAudio"],
            exports: "T2MediaLib"
        },
        PicoAudio: {
            exports: "PicoAudio"
        },
        GIFEncoder: {
            deps: ["LZWEncoder","NeuQuant"],
            exports: "GIFEncoder"
        },
        JSZip: {
            exports:"JSZip"
        },
        Encoding: {
            exports:"Encoding"
        },
        Base64: {
            exports:"Base64"
        },
        GIF: {
            exports:"GIF"
        },
        promise: {
            export:"Promise"
        },
        FileSaver: {
            exports:"saveAs"
        }
    },
    // filepath - modulename(1 for same as filename)
    "revpaths": {
        "Kernel": {
            "js": {
                "concat.js": "tonyu.kernel"
            }
        },
        "js": {
            "build": {
                "buildAll": 1,
                "genROM": 1
            },
            "fs": {
                "Assets": 1,
                "SFileNW": 1,
                "ScriptTagFS": 1,
                "Shell": 1,
                "auth": "Auth",
                "blob": "Blob",
                "copyToKernel": 1,
                "FS": 1,
                "requestFragment": 1,
                "sync": "Sync",
                "syncWithKernel": 1,
                "DragDrop": 1
            },
            "fs2": {
                "zip": 1,
                "Content": 1,
                "DataURL": 1,
                "Env": 1,
                "FS2": 1,
                "LSFS": 1,
                "MIMETypes": 1,
                "NativeFS": 1,
                "PathUtil": 1,
                "RootFS": 1,
                "SFile": 1,
                "WebFS": 1,
                "assert": 1,
                "extend": 1,
                "DeferredUtil": 1
            },
            "fsui": {
                "FileList": 1,
                "FileMenu": 1,
                "Shell2": 1
            },
            "gen": {
                "ROM_d": "fs/ROMd",
                "ROM_k": "fs/ROMk",
                "ROM_s": "fs/ROMs",
                "index_concat": "selProject_concat",
                "project_concat": "editor_concat"
            },
            "graphics": {
                "ImageList": 1,
                "ImageRect": 1,
                "PatternParser": 1,
                "TextRect": 1,
                "fukidashi": 1,
                "gif": {
                    "GIFEncoder": 1,
                    "LZWEncoder": 1,
                    "NeuQuant": 1
                },
                "gif2": {
                    "gif-concat": "GIF"
                }
            },
            "worker": {
                "GIFWorker": 1
            },
            "help": {
                "Arrow": 1,
                "HttpHelper": 1,
                "IFrameDialog": 1,
                "wiki": "Wiki",
                "wikiDialog": "WikiDialog",
                "wikiExporter": 1,
                "wikiFullScreen": 1
            },
            "ide": {
                "RunDialog": 1,
                "DiffDialog": 1,
                "ProjectItem": 1,
                "ErrorPos": "showErrorPos",
                "ImageDetailEditor": 1,
                "ImageResEditor": 1,
                "KernelDiffDialog": 1,
                "MainClassDialog": 1,
                "NWMenu": 1,
                "NewProjectDialog": 1,
                "GlobalDialog": 1,
                "ExportHTMLDialog": 1,
                "ImportHTMLDialog": 1,
                "OggConverter": 1,
                "ProjectOptionsEditor": 1,
                "ResEditor": 1,
                "TextEditor": 1,
                "TonyuProject": "Tonyu.Project",
                "compiledTonyuProject": 1,
                "copySample": 1,
                "editor": "ide/editor",
                "log": "Log",
                "noviceEditor": "ide/noviceEditor",
                "noviceSelProject": "ide/noviceSelProject",
                "searchDialog": 1,
                "selProject": "ide/selProject",
                "thumbnail": 1,
                "wikiEditor": "ide/wikiEditor"
            },
            "lang": {
                "ExpressionParser2": "ExpressionParser",
                "Grammar": 1,
                "IndentBuffer": 1,
                "JSGenerator": "Tonyu.Compiler.JSGenerator",
                "ObjectMatcher": 1,
                "Semantics": "Tonyu.Compiler.Semantics",
                "TypeChecker": 1,
                "Visitor": 1,
                "XMLBuffer": 1,
                "compiledProject": 1,
                "compiler": "Tonyu.Compiler",
                "context": 1,
                "indent": "fixIndent",
                "parse_tonyu2": "TonyuLang",
                "parser": "Parser",
                "projectCompiler": "ProjectCompiler",
                "source-map": 1,
                "tonyu2_token": "TT"
            },
            "lib": {
                "Class": 1,
                "FileSaver.min": "FileSaver",
                "JSONCol": 1,
                "KeyEventChecker": 1,
                "Klass": 1,
                "PicoAudio": 1,
                "T2MediaLib": 1,
                "TextUtil": 1,
                "ace-noconflict": {
                    "ace": 1
                },
                "base64.min": "Base64",
                "difflib": 1,
                "diffview": 1,
                "disp": 1,
                "encoding.min": "Encoding",
                "exceptionCatcher": 1,
                "jquery.binarytransport": 1,
                "jszip": "JSZip",
                "profiler": "Profiler",
                "promise": 1,
                "WorkerLib": 1,
                "timbre": 1,
                "util": "Util"
            },
            "mkrun": {
                "mkrun": 1,
                "mkrunDiag": 1
            },
            "plugins": {
                "plugins": 1
            },
            "reqConf": 1,
            "runtime": {
                "Key": 1,
                "StackTrace": 1,
                "TError": 1,
                "TonyuIterator": "Tonyu.Iterator",
                "TonyuLib": "Tonyu",
                "TonyuThread": "Tonyu.Thread",
                "TraceTbl": "Tonyu.TraceTbl",
                "WebSite": 1,
                "Platform": 1,
                "runScript": 1,
                "runScript2": 1,
                "runtime": 1,
                "soundDiag": "SoundDiag",
                "workerLoader": 1
            },
            "social": {
                "exportAsScriptTags": 1,
                "exportToExe": 1,
                "exportToJsdoit": 1,
                "forkBlobs": 1,
                "ZipImporter": 1,
                "importFromJsdoit": 1
            },
            "tonyu1": {
                "importFromTonyu1": 1,
                "t1map": "T1Map"
            },
            "ui": {
                "DiagAdjuster": 1,
                "UI": 1,
                "UIDiag": 1,
                "extLink": 1
            },
            "bar": "foo"
        }
    }
};
(function () {
    reqConf.paths={}
    function genPaths(tree, path) {
        for (var k in tree) {
            var v=tree[k];
            if (typeof v==="object") {
                genPaths(v,path+"/"+k);
            } else {
                var modName=v===1?k:v;
                reqConf.paths[modName]=(path+"/"+k).replace(/^\//,"");
            }
        }
    }
    genPaths(reqConf.revpaths,"");
    delete reqConf.revpaths;
    console.log(reqConf);
})();