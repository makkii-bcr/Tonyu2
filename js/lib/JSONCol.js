define(["IndentBuffer"],function (ib) {
    var f=function (obj,buf) {
        if (!buf) buf=ib();
        conv(obj);
        return buf.buf;
        function conv(obj) {
            if (obj instanceof Array) {
            	buf.printf("[%{");
            	var first=true;
            	obj.forEach(function (e) {
            		if (!first) buf.printf(",%n");
            		first=false;
            		conv(e);
            	});
            	buf.printf("%n%}");
            	buf.print("]");
            } else if (typeof obj=="object") {
            	buf.printf("{%{");
            	var first=true;
            	for (var i in obj) {
            		var e=obj[i];
            		if (!first) buf.printf(",%n");
            		first=false;
            		buf.printf("%s: ", toAttr(i));
               		conv(e);
               	}
            	buf.printf("%n%}}");
            } else if (typeof obj=="number") {
            	buf.print(obj);
            } else if (typeof obj=="boolean") {
            	buf.print(obj);
            } else if (typeof obj=="string") {
            	var lines=obj.split("\n");
            	if (lines.length==1) {
            		buf.print(toLiteral(obj));
            		return;
            	}
               	buf.printf("%{");
            	var lastLineEmpty=lines[lines.length-1]=="";
            	lines.forEach(function (line, i) {
            		var last= lines.length-i;
            		if (last==1) {
            			if (!lastLineEmpty) {
            				buf.print(toLiteral(line));
            			}
            		} else {
                    	buf.print(toLiteral(line+"\n"));
                    	if (last==2 && lastLineEmpty) {
                    	} else {
                           	buf.printf("+%n");
                    	}
            		}
            	});
               	buf.printf("%n%}");
            }
        }
    };
    function toAttr(a) {
    	if (a.match(/^[a-zA-Z$_][a-zA-Z0-9$_]*$/)) return a;
    	return toLiteral(a);
    }
    function toLiteral(s, quote) {
        if (!quote) quote="'";
        s = s.replace(/\\/g, "\\\\");
        s = s.replace(/\r/g, "\\r");
        s = s.replace(/\n/g, "\\n");
        if (quote=="'") s = s.replace(/'/g, "\\'");
        else s = s.replace(/"/g, '\\"');
        return quote + s + quote;
    }
    window.jc=f;
    return f;
});