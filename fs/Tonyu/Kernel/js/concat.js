Tonyu.klass.define({
  fullName: 'kernel.EventHandlerCaller',
  shortName: 'EventHandlerCaller',
  namespace: 'kernel',
  includes: [],
  methods: {
    main :function _trc_EventHandlerCaller_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_EventHandlerCaller_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    callEventHandler :function _trc_EventHandlerCaller_callEventHandler(h,args) {
      "use strict";
      var _this=this;
      var t;
      
      //$LASTPOS=1000064;//kernel.EventHandlerCaller:64
      t;
      //$LASTPOS=1000076;//kernel.EventHandlerCaller:76
      if (h["fiber"]) {
        //$LASTPOS=1000103;//kernel.EventHandlerCaller:103
        t=Tonyu.thread();
        //$LASTPOS=1000130;//kernel.EventHandlerCaller:130
        h["fiber"].apply(_this.target,[t].concat(args));
        //$LASTPOS=1000184;//kernel.EventHandlerCaller:184
        t.steps();
        
      } else {
        //$LASTPOS=1000218;//kernel.EventHandlerCaller:218
        h.apply(_this.target,args);
        
      }
    },
    fiber$callEventHandler :function _trc_EventHandlerCaller_f_callEventHandler(_thread,h,args) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var t;
      
      //$LASTPOS=1000064;//kernel.EventHandlerCaller:64
      t;
      //$LASTPOS=1000076;//kernel.EventHandlerCaller:76
      if (h["fiber"]) {
        //$LASTPOS=1000103;//kernel.EventHandlerCaller:103
        t=Tonyu.thread();
        //$LASTPOS=1000130;//kernel.EventHandlerCaller:130
        h["fiber"].apply(_this.target,[t].concat(args));
        //$LASTPOS=1000184;//kernel.EventHandlerCaller:184
        t.steps();
        
      } else {
        //$LASTPOS=1000218;//kernel.EventHandlerCaller:218
        h.apply(_this.target,args);
        
      }
      
      _thread.retVal=_this;return;
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"callEventHandler":{"nowait":false}}}
});
Tonyu.klass.define({
  fullName: 'kernel.EventMod',
  shortName: 'EventMod',
  namespace: 'kernel',
  includes: [],
  methods: {
    main :function _trc_EventMod_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_EventMod_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    initEventMod :function _trc_EventMod_initEventMod() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=2000063;//kernel.EventMod:63
      if (_this._eventHandlers) {
        return _this;
      }
      //$LASTPOS=2000156;//kernel.EventMod:156
      _this._eventHandlers={};
      //$LASTPOS=2000179;//kernel.EventMod:179
      _this.on("die",Tonyu.bindFunc(_this,_this.releaseEventMod));
    },
    releaseEventMod :function _trc_EventMod_releaseEventMod() {
      "use strict";
      var _this=this;
      var k;
      var v;
      var _it_2;
      
      //$LASTPOS=2000243;//kernel.EventMod:243
      _it_2=Tonyu.iterator(_this._eventHandlers,2);
      while(_it_2.next()) {
        k=_it_2[0];
        v=_it_2[1];
        
        //$LASTPOS=2000285;//kernel.EventMod:285
        v.release();
        
      }
    },
    parseArgs :function _trc_EventMod_parseArgs(a) {
      "use strict";
      var _this=this;
      var res;
      var i;
      
      //$LASTPOS=2000335;//kernel.EventMod:335
      res = {type: a[0],args: []};
      //$LASTPOS=2000369;//kernel.EventMod:369
      //$LASTPOS=2000374;//kernel.EventMod:374
      i = 1;
      while(i<a.length) {
        {
          //$LASTPOS=2000412;//kernel.EventMod:412
          res.args.push(a[i]);
        }
        i++;
      }
      return res;
    },
    registerEventHandler :function _trc_EventMod_registerEventHandler(type,obj) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=2000535;//kernel.EventMod:535
      _this.initEventMod();
      //$LASTPOS=2000555;//kernel.EventMod:555
      if (typeof  type=="function") {
        //$LASTPOS=2000594;//kernel.EventMod:594
        obj=obj||new type({target: _this});
        //$LASTPOS=2000634;//kernel.EventMod:634
        type=obj.getClassInfo().fullName;
        
      } else {
        //$LASTPOS=2000690;//kernel.EventMod:690
        obj=obj||new Tonyu.classes.kernel.EventHandler({target: _this});
        //$LASTPOS=2000740;//kernel.EventMod:740
        obj.target=_this;
        
      }
      return _this._eventHandlers[type]=obj;
    },
    getEventHandler :function _trc_EventMod_getEventHandler(type) {
      "use strict";
      var _this=this;
      var res;
      
      //$LASTPOS=2000908;//kernel.EventMod:908
      _this.initEventMod();
      //$LASTPOS=2000928;//kernel.EventMod:928
      if (typeof  type=="function") {
        //$LASTPOS=2000967;//kernel.EventMod:967
        type=type.meta.fullName;
        
      }
      //$LASTPOS=2001002;//kernel.EventMod:1002
      res = _this._eventHandlers[type];
      return res;
    },
    getOrRegisterEventHandler :function _trc_EventMod_getOrRegisterEventHandler(type) {
      "use strict";
      var _this=this;
      var res;
      
      //$LASTPOS=2001098;//kernel.EventMod:1098
      res = _this.getEventHandler(type)||_this.registerEventHandler(type);
      return res;
    },
    on :function _trc_EventMod_on() {
      "use strict";
      var _this=this;
      var a;
      var h;
      
      //$LASTPOS=2001201;//kernel.EventMod:1201
      a = _this.parseArgs(arguments);
      //$LASTPOS=2001234;//kernel.EventMod:1234
      h = _this.getOrRegisterEventHandler(a.type);
      return h.addListener.apply(h,a.args);
    },
    fireEvent :function _trc_EventMod_fireEvent(type,arg) {
      "use strict";
      var _this=this;
      var h;
      
      //$LASTPOS=2001419;//kernel.EventMod:1419
      h = _this.getEventHandler(type);
      //$LASTPOS=2001453;//kernel.EventMod:1453
      if (h) {
        //$LASTPOS=2001460;//kernel.EventMod:1460
        h.fire([arg]);
      }
    },
    sendEvent :function _trc_EventMod_sendEvent(type,arg) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=2001515;//kernel.EventMod:1515
      _this.fireEvent(type,arg);
    },
    waitEvent :function _trc_EventMod_waitEvent() {
      "use strict";
      var _this=this;
      var args;
      var i;
      
      //$LASTPOS=2001562;//kernel.EventMod:1562
      if (null) {
        //$LASTPOS=2001586;//kernel.EventMod:1586
        args = [];
        //$LASTPOS=2001608;//kernel.EventMod:1608
        //$LASTPOS=2001613;//kernel.EventMod:1613
        i = 0;
        while(i<arguments.length) {
          {
            //$LASTPOS=2001660;//kernel.EventMod:1660
            if (arguments[i]===undefined) {
              break;
              
            }
            //$LASTPOS=2001710;//kernel.EventMod:1710
            args.push(arguments[i]);
          }
          i++;
        }
        //$LASTPOS=2001755;//kernel.EventMod:1755
        null.waitEvent(_this,args);
        
      }
    },
    fiber$waitEvent :function _trc_EventMod_f_waitEvent(_thread) {
      "use strict";
      var _this=this;
      var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var args;
      var i;
      
      //$LASTPOS=2001562;//kernel.EventMod:1562
      if (_thread) {
        //$LASTPOS=2001586;//kernel.EventMod:1586
        args = [];
        //$LASTPOS=2001608;//kernel.EventMod:1608
        //$LASTPOS=2001613;//kernel.EventMod:1613
        i = 0;
        while(i<_arguments.length) {
          {
            //$LASTPOS=2001660;//kernel.EventMod:1660
            if (_arguments[i]===undefined) {
              break;
              
            }
            //$LASTPOS=2001710;//kernel.EventMod:1710
            args.push(_arguments[i]);
          }
          i++;
        }
        //$LASTPOS=2001755;//kernel.EventMod:1755
        _thread.waitEvent(_this,args);
        
      }
      
      _thread.retVal=_this;return;
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"initEventMod":{"nowait":true},"releaseEventMod":{"nowait":true},"parseArgs":{"nowait":true},"registerEventHandler":{"nowait":true},"getEventHandler":{"nowait":true},"getOrRegisterEventHandler":{"nowait":true},"on":{"nowait":true},"fireEvent":{"nowait":true},"sendEvent":{"nowait":true},"waitEvent":{"nowait":false}}}
});
Tonyu.klass.define({
  fullName: 'kernel.OneframeSpriteMod',
  shortName: 'OneframeSpriteMod',
  namespace: 'kernel',
  includes: [],
  methods: {
    main :function _trc_OneframeSpriteMod_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_OneframeSpriteMod_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    drawText :function _trc_OneframeSpriteMod_drawText(x,y,text,col,size) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=3000060;//kernel.OneframeSpriteMod:60
      if (! size) {
        //$LASTPOS=3000071;//kernel.OneframeSpriteMod:71
        size=15;
      }
      //$LASTPOS=3000085;//kernel.OneframeSpriteMod:85
      if (! col) {
        //$LASTPOS=3000095;//kernel.OneframeSpriteMod:95
        col="cyan";
      }
      //$LASTPOS=3000112;//kernel.OneframeSpriteMod:112
      new Tonyu.classes.kernel.T1Text({x: x,y: y,text: text,fillStyle: col,size: size,oneframeSprite: true});
    },
    drawLine :function _trc_OneframeSpriteMod_drawLine(x,y,tx,ty,col) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=3000217;//kernel.OneframeSpriteMod:217
      if (! col) {
        //$LASTPOS=3000227;//kernel.OneframeSpriteMod:227
        col="white";
      }
      //$LASTPOS=3000245;//kernel.OneframeSpriteMod:245
      new Tonyu.classes.kernel.T1Line({x: x,y: y,tx: tx,ty: ty,col: col,oneframeSprite: true});
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"drawText":{"nowait":true},"drawLine":{"nowait":true}}}
});
Tonyu.klass.define({
  fullName: 'kernel.TextRectMod',
  shortName: 'TextRectMod',
  namespace: 'kernel',
  includes: [],
  methods: {
    main :function _trc_TextRectMod_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_TextRectMod_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    drawTextRect :function _trc_TextRectMod_drawTextRect(ctx,text,x,topY,h,align,type) {
      "use strict";
      var _this=this;
      var met;
      var res;
      var t;
      
      //$LASTPOS=4000090;//kernel.TextRectMod:90
      if (! align) {
        //$LASTPOS=4000102;//kernel.TextRectMod:102
        align="center";
      }
      //$LASTPOS=4000123;//kernel.TextRectMod:123
      ctx.textBaseline="top";
      //$LASTPOS=4000152;//kernel.TextRectMod:152
      _this.setFontSize(ctx,h);
      //$LASTPOS=4000178;//kernel.TextRectMod:178
      met = ctx.measureText(text);
      //$LASTPOS=4000214;//kernel.TextRectMod:214
      res = {y: topY,w: met.width,h: h};
      //$LASTPOS=4000256;//kernel.TextRectMod:256
      t = align.substring(0,1).toLowerCase();
      //$LASTPOS=4000303;//kernel.TextRectMod:303
      if (t=="l") {
        //$LASTPOS=4000315;//kernel.TextRectMod:315
        res.x=x;
      } else {
        //$LASTPOS=4000334;//kernel.TextRectMod:334
        if (t=="r") {
          //$LASTPOS=4000346;//kernel.TextRectMod:346
          res.x=x-met.width;
        } else {
          //$LASTPOS=4000375;//kernel.TextRectMod:375
          if (t=="c") {
            //$LASTPOS=4000387;//kernel.TextRectMod:387
            res.x=x-met.width/2;
          }
        }
      }
      //$LASTPOS=4000413;//kernel.TextRectMod:413
      if (type=="fill") {
        //$LASTPOS=4000431;//kernel.TextRectMod:431
        ctx.fillText(text,res.x,topY);
      }
      //$LASTPOS=4000468;//kernel.TextRectMod:468
      if (type=="stroke") {
        //$LASTPOS=4000488;//kernel.TextRectMod:488
        ctx.strokeText(text,res.x,topY);
      }
      return res;
    },
    setFontSize :function _trc_TextRectMod_setFontSize(ctx,sz) {
      "use strict";
      var _this=this;
      var post;
      
      //$LASTPOS=4000586;//kernel.TextRectMod:586
      post = ctx.font.replace(/^[0-9\.]+/,"");
      //$LASTPOS=4000634;//kernel.TextRectMod:634
      ctx.font=sz+post;
    },
    fukidashi :function _trc_TextRectMod_fukidashi(ctx,text,x,y,sz) {
      "use strict";
      var _this=this;
      var align;
      var theight;
      var margin;
      var r;
      var fs;
      
      //$LASTPOS=4000712;//kernel.TextRectMod:712
      align = "c";
      //$LASTPOS=4000732;//kernel.TextRectMod:732
      theight = 20;
      //$LASTPOS=4000753;//kernel.TextRectMod:753
      margin = 5;
      //$LASTPOS=4000772;//kernel.TextRectMod:772
      r = _this.drawTextRect(ctx,text,x,y-theight-margin-sz,sz,align);
      //$LASTPOS=4000842;//kernel.TextRectMod:842
      ctx.beginPath();
      //$LASTPOS=4000864;//kernel.TextRectMod:864
      ctx.moveTo(x,y);
      //$LASTPOS=4000888;//kernel.TextRectMod:888
      ctx.lineTo(x+margin,y-theight);
      //$LASTPOS=4000927;//kernel.TextRectMod:927
      ctx.lineTo(x+r.w/2+margin,y-theight);
      //$LASTPOS=4000972;//kernel.TextRectMod:972
      ctx.lineTo(x+r.w/2+margin,y-theight-r.h-margin*2);
      //$LASTPOS=4001030;//kernel.TextRectMod:1030
      ctx.lineTo(x-r.w/2-margin,y-theight-r.h-margin*2);
      //$LASTPOS=4001088;//kernel.TextRectMod:1088
      ctx.lineTo(x-r.w/2-margin,y-theight);
      //$LASTPOS=4001133;//kernel.TextRectMod:1133
      ctx.lineTo(x-margin,y-theight);
      //$LASTPOS=4001172;//kernel.TextRectMod:1172
      ctx.closePath();
      //$LASTPOS=4001194;//kernel.TextRectMod:1194
      ctx.fill();
      //$LASTPOS=4001211;//kernel.TextRectMod:1211
      ctx.stroke();
      //$LASTPOS=4001236;//kernel.TextRectMod:1236
      fs = ctx.fillStyle;
      //$LASTPOS=4001263;//kernel.TextRectMod:1263
      ctx.fillStyle=ctx.strokeStyle;
      //$LASTPOS=4001299;//kernel.TextRectMod:1299
      _this.drawTextRect(ctx,text,x,y-theight-margin-sz,sz,align,"fill");
      //$LASTPOS=4001372;//kernel.TextRectMod:1372
      ctx.fillStyle=fs;
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"drawTextRect":{"nowait":true},"setFontSize":{"nowait":true},"fukidashi":{"nowait":true}}}
});
Tonyu.klass.define({
  fullName: 'kernel.MathMod',
  shortName: 'MathMod',
  namespace: 'kernel',
  includes: [],
  methods: {
    main :function _trc_MathMod_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_MathMod_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    sin :function _trc_MathMod_sin(d) {
      "use strict";
      var _this=this;
      
      return Math.sin(_this.rad(d));
    },
    cos :function _trc_MathMod_cos(d) {
      "use strict";
      var _this=this;
      
      return Math.cos(_this.rad(d));
    },
    rad :function _trc_MathMod_rad(d) {
      "use strict";
      var _this=this;
      
      return d/180*Math.PI;
    },
    deg :function _trc_MathMod_deg(d) {
      "use strict";
      var _this=this;
      
      return d/Math.PI*180;
    },
    abs :function _trc_MathMod_abs(v) {
      "use strict";
      var _this=this;
      
      return Math.abs(v);
    },
    atan2 :function _trc_MathMod_atan2(x,y) {
      "use strict";
      var _this=this;
      
      return _this.deg(Math.atan2(x,y));
    },
    floor :function _trc_MathMod_floor(x) {
      "use strict";
      var _this=this;
      
      return Math.floor(x);
    },
    angleDiff :function _trc_MathMod_angleDiff(a,b) {
      "use strict";
      var _this=this;
      var c;
      
      //$LASTPOS=5000416;//kernel.MathMod:416
      c;
      //$LASTPOS=5000428;//kernel.MathMod:428
      a=_this.floor(a);
      //$LASTPOS=5000445;//kernel.MathMod:445
      b=_this.floor(b);
      //$LASTPOS=5000462;//kernel.MathMod:462
      if (a>=b) {
        //$LASTPOS=5000483;//kernel.MathMod:483
        c=(a-b)%360;
        //$LASTPOS=5000507;//kernel.MathMod:507
        if (c>=180) {
          //$LASTPOS=5000519;//kernel.MathMod:519
          c-=360;
        }
        
      } else {
        //$LASTPOS=5000550;//kernel.MathMod:550
        c=- ((b-a)%360);
        //$LASTPOS=5000577;//kernel.MathMod:577
        if (c<- 180) {
          //$LASTPOS=5000589;//kernel.MathMod:589
          c+=360;
        }
        
      }
      return c;
    },
    sqrt :function _trc_MathMod_sqrt(t) {
      "use strict";
      var _this=this;
      
      return Math.sqrt(t);
    },
    dist :function _trc_MathMod_dist(dx,dy) {
      "use strict";
      var _this=this;
      var t;
      
      //$LASTPOS=5000698;//kernel.MathMod:698
      if (typeof  dx=="object") {
        //$LASTPOS=5000734;//kernel.MathMod:734
        t = dx;
        //$LASTPOS=5000753;//kernel.MathMod:753
        dx=t.x-_this.x;
        //$LASTPOS=5000762;//kernel.MathMod:762
        dy=t.y-_this.y;
        
      }
      return _this.sqrt(dx*dx+dy*dy);
    },
    trunc :function _trc_MathMod_trunc(f) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=5000838;//kernel.MathMod:838
      if (f>=0) {
        return Math.floor(f);
      } else {
        return Math.ceil(f);
      }
    },
    ceil :function _trc_MathMod_ceil(f) {
      "use strict";
      var _this=this;
      
      return Math.ceil(f);
    },
    rnd :function _trc_MathMod_rnd(r) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=5000975;//kernel.MathMod:975
      if (typeof  r=="number") {
        return Math.floor(Math.random()*r);
        
      }
      return Math.random();
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"sin":{"nowait":true},"cos":{"nowait":true},"rad":{"nowait":true},"deg":{"nowait":true},"abs":{"nowait":true},"atan2":{"nowait":true},"floor":{"nowait":true},"angleDiff":{"nowait":true},"sqrt":{"nowait":true},"dist":{"nowait":true},"trunc":{"nowait":true},"ceil":{"nowait":true},"rnd":{"nowait":true}}}
});
Tonyu.klass.define({
  fullName: 'kernel.T2Mod',
  shortName: 'T2Mod',
  namespace: 'kernel',
  includes: [],
  methods: {
    main :function _trc_T2Mod_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_T2Mod_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    bvec :function _trc_T2Mod_bvec(tx,ty) {
      "use strict";
      var _this=this;
      var b2Vec2;
      
      //$LASTPOS=6000034;//kernel.T2Mod:34
      b2Vec2 = Box2D.Common.Math.b2Vec2;
      return new b2Vec2(tx/_this.scale,ty/_this.scale);
    },
    fiber$bvec :function _trc_T2Mod_f_bvec(_thread,tx,ty) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var b2Vec2;
      
      //$LASTPOS=6000034;//kernel.T2Mod:34
      b2Vec2 = Box2D.Common.Math.b2Vec2;
      _thread.retVal=new b2Vec2(tx/_this.scale,ty/_this.scale);return;
      
      
      _thread.retVal=_this;return;
    },
    defv :function _trc_T2Mod_defv(t,d) {
      "use strict";
      var _this=this;
      
      return (t===t&&(typeof  t)==="number")?t:d;
    },
    fiber$defv :function _trc_T2Mod_f_defv(_thread,t,d) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=(t===t&&(typeof  t)==="number")?t:d;return;
      
      
      _thread.retVal=_this;return;
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"bvec":{"nowait":false},"defv":{"nowait":false}}}
});
Tonyu.klass.define({
  fullName: 'kernel.MediaPlayer',
  shortName: 'MediaPlayer',
  namespace: 'kernel',
  includes: [],
  methods: {
    main :function _trc_MediaPlayer_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_MediaPlayer_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    play :function _trc_MediaPlayer_play() {
      "use strict";
      var _this=this;
      
    },
    fiber$play :function _trc_MediaPlayer_f_play(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    stop :function _trc_MediaPlayer_stop() {
      "use strict";
      var _this=this;
      
    },
    fiber$stop :function _trc_MediaPlayer_f_stop(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    playSE :function _trc_MediaPlayer_playSE() {
      "use strict";
      var _this=this;
      
    },
    fiber$playSE :function _trc_MediaPlayer_f_playSE(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    setDelay :function _trc_MediaPlayer_setDelay() {
      "use strict";
      var _this=this;
      
    },
    fiber$setDelay :function _trc_MediaPlayer_f_setDelay(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    setVolume :function _trc_MediaPlayer_setVolume() {
      "use strict";
      var _this=this;
      
    },
    fiber$setVolume :function _trc_MediaPlayer_f_setVolume(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"play":{"nowait":false},"stop":{"nowait":false},"playSE":{"nowait":false},"setDelay":{"nowait":false},"setVolume":{"nowait":false}}}
});
Tonyu.klass.define({
  fullName: 'kernel.ThreadGroupMod',
  shortName: 'ThreadGroupMod',
  namespace: 'kernel',
  includes: [],
  methods: {
    main :function _trc_ThreadGroupMod_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_ThreadGroupMod_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    addThread :function _trc_ThreadGroupMod_addThread(t) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=7000038;//kernel.ThreadGroupMod:38
      _this.threads=_this.threads||[];
      //$LASTPOS=7000064;//kernel.ThreadGroupMod:64
      _this.threads.push(t);
    },
    fiber$addThread :function _trc_ThreadGroupMod_f_addThread(_thread,t) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=7000038;//kernel.ThreadGroupMod:38
      _this.threads=_this.threads||[];
      //$LASTPOS=7000064;//kernel.ThreadGroupMod:64
      _this.threads.push(t);
      
      _thread.retVal=_this;return;
    },
    addThreadGroup :function _trc_ThreadGroupMod_addThreadGroup(tg) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=7000112;//kernel.ThreadGroupMod:112
      _this.threadGroups=_this.threadGroups||[];
      //$LASTPOS=7000148;//kernel.ThreadGroupMod:148
      _this.threadGroups.push(tg);
    },
    fiber$addThreadGroup :function _trc_ThreadGroupMod_f_addThreadGroup(_thread,tg) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=7000112;//kernel.ThreadGroupMod:112
      _this.threadGroups=_this.threadGroups||[];
      //$LASTPOS=7000148;//kernel.ThreadGroupMod:148
      _this.threadGroups.push(tg);
      
      _thread.retVal=_this;return;
    },
    killThreadGroup :function _trc_ThreadGroupMod_killThreadGroup() {
      "use strict";
      var _this=this;
      var thread;
      var _it_27;
      var threadGroup;
      var _it_28;
      
      //$LASTPOS=7000201;//kernel.ThreadGroupMod:201
      if (_this.threads) {
        //$LASTPOS=7000225;//kernel.ThreadGroupMod:225
        _it_27=Tonyu.iterator(_this.threads,1);
        while(_it_27.next()) {
          thread=_it_27[0];
          
          //$LASTPOS=7000268;//kernel.ThreadGroupMod:268
          thread.kill();
          
        }
        
      }
      //$LASTPOS=7000306;//kernel.ThreadGroupMod:306
      if (_this.threadGroups) {
        //$LASTPOS=7000335;//kernel.ThreadGroupMod:335
        _it_28=Tonyu.iterator(_this.threadGroups,1);
        while(_it_28.next()) {
          threadGroup=_it_28[0];
          
          //$LASTPOS=7000388;//kernel.ThreadGroupMod:388
          threadGroup.killThreadGroup();
          
        }
        
      }
    },
    fiber$killThreadGroup :function _trc_ThreadGroupMod_f_killThreadGroup(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var thread;
      var _it_27;
      var threadGroup;
      var _it_28;
      
      //$LASTPOS=7000201;//kernel.ThreadGroupMod:201
      if (_this.threads) {
        //$LASTPOS=7000225;//kernel.ThreadGroupMod:225
        _it_27=Tonyu.iterator(_this.threads,1);
        while(_it_27.next()) {
          thread=_it_27[0];
          
          //$LASTPOS=7000268;//kernel.ThreadGroupMod:268
          thread.kill();
          
        }
        
      }
      //$LASTPOS=7000306;//kernel.ThreadGroupMod:306
      if (_this.threadGroups) {
        //$LASTPOS=7000335;//kernel.ThreadGroupMod:335
        _it_28=Tonyu.iterator(_this.threadGroups,1);
        while(_it_28.next()) {
          threadGroup=_it_28[0];
          
          //$LASTPOS=7000388;//kernel.ThreadGroupMod:388
          threadGroup.killThreadGroup();
          
        }
        
      }
      
      _thread.retVal=_this;return;
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"addThread":{"nowait":false},"addThreadGroup":{"nowait":false},"killThreadGroup":{"nowait":false}}}
});
Tonyu.klass.define({
  fullName: 'kernel.TObject',
  shortName: 'TObject',
  namespace: 'kernel',
  includes: [],
  methods: {
    main :function _trc_TObject_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_TObject_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    initialize :function _trc_TObject_initialize(options) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=8000052;//kernel.TObject:52
      if (typeof  options=="object") {
        //$LASTPOS=8000082;//kernel.TObject:82
        _this.extend(options);
      }
      //$LASTPOS=8000104;//kernel.TObject:104
      if (Tonyu.runMode) {
        //$LASTPOS=8000123;//kernel.TObject:123
        _this.main();
      }
    },
    extend :function _trc_TObject_extend(obj) {
      "use strict";
      var _this=this;
      
      return Tonyu.extend(_this,obj);
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"extend":{"nowait":true}}}
});
Tonyu.klass.define({
  fullName: 'kernel.TQuery',
  shortName: 'TQuery',
  namespace: 'kernel',
  superclass: Tonyu.classes.kernel.TObject,
  includes: [Tonyu.classes.kernel.MathMod],
  methods: {
    main :function _trc_TQuery_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_TQuery_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    initialize :function _trc_TQuery_initialize() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=9000049;//kernel.TQuery:49
      _this.length=0;
    },
    tonyuIterator :function _trc_TQuery_tonyuIterator(arity) {
      "use strict";
      var _this=this;
      var res;
      
      //$LASTPOS=9000089;//kernel.TQuery:89
      res = {};
      //$LASTPOS=9000105;//kernel.TQuery:105
      res.i=0;
      //$LASTPOS=9000118;//kernel.TQuery:118
      if (arity==1) {
        //$LASTPOS=9000142;//kernel.TQuery:142
        res.next=(function anonymous_151() {
          
          //$LASTPOS=9000177;//kernel.TQuery:177
          if (res.i>=_this.length) {
            return false;
          }
          //$LASTPOS=9000227;//kernel.TQuery:227
          res[0]=_this[res.i];
          //$LASTPOS=9000259;//kernel.TQuery:259
          res.i++;
          return true;
        });
        
      } else {
        //$LASTPOS=9000325;//kernel.TQuery:325
        res.next=(function anonymous_334() {
          
          //$LASTPOS=9000360;//kernel.TQuery:360
          if (res.i>=_this.length) {
            return false;
          }
          //$LASTPOS=9000410;//kernel.TQuery:410
          res[0]=res.i;
          //$LASTPOS=9000436;//kernel.TQuery:436
          res[1]=_this[res.i];
          //$LASTPOS=9000468;//kernel.TQuery:468
          res.i++;
          return true;
        });
        
      }
      return res;
    },
    fiber$tonyuIterator :function _trc_TQuery_f_tonyuIterator(_thread,arity) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var res;
      
      //$LASTPOS=9000089;//kernel.TQuery:89
      res = {};
      //$LASTPOS=9000105;//kernel.TQuery:105
      res.i=0;
      //$LASTPOS=9000118;//kernel.TQuery:118
      if (arity==1) {
        //$LASTPOS=9000142;//kernel.TQuery:142
        res.next=(function anonymous_151() {
          
          //$LASTPOS=9000177;//kernel.TQuery:177
          if (res.i>=_this.length) {
            return false;
          }
          //$LASTPOS=9000227;//kernel.TQuery:227
          res[0]=_this[res.i];
          //$LASTPOS=9000259;//kernel.TQuery:259
          res.i++;
          return true;
        });
        
      } else {
        //$LASTPOS=9000325;//kernel.TQuery:325
        res.next=(function anonymous_334() {
          
          //$LASTPOS=9000360;//kernel.TQuery:360
          if (res.i>=_this.length) {
            return false;
          }
          //$LASTPOS=9000410;//kernel.TQuery:410
          res[0]=res.i;
          //$LASTPOS=9000436;//kernel.TQuery:436
          res[1]=_this[res.i];
          //$LASTPOS=9000468;//kernel.TQuery:468
          res.i++;
          return true;
        });
        
      }
      _thread.retVal=res;return;
      
      
      _thread.retVal=_this;return;
    },
    attr :function _trc_TQuery_attr() {
      "use strict";
      var _this=this;
      var values;
      var i;
      var e;
      var _it_34;
      
      //$LASTPOS=9000551;//kernel.TQuery:551
      values;
      //$LASTPOS=9000567;//kernel.TQuery:567
      if (_this.length==0) {
        return _this;
      }
      //$LASTPOS=9000594;//kernel.TQuery:594
      if (arguments.length==1&&typeof  arguments[0]=="string") {
        return _this[0][arguments[0]];
        
      }
      //$LASTPOS=9000702;//kernel.TQuery:702
      if (arguments.length>=2) {
        //$LASTPOS=9000737;//kernel.TQuery:737
        values={};
        //$LASTPOS=9000756;//kernel.TQuery:756
        //$LASTPOS=9000761;//kernel.TQuery:761
        i = 0;
        while(i<arguments.length-1) {
          {
            //$LASTPOS=9000813;//kernel.TQuery:813
            values[arguments[i]]=arguments[i+1];
          }
          i+=2;
        }
        
      } else {
        //$LASTPOS=9000881;//kernel.TQuery:881
        values=arguments[0];
        
      }
      //$LASTPOS=9000912;//kernel.TQuery:912
      if (values) {
        //$LASTPOS=9000934;//kernel.TQuery:934
        _it_34=Tonyu.iterator(_this,1);
        while(_it_34.next()) {
          e=_it_34[0];
          
          //$LASTPOS=9000968;//kernel.TQuery:968
          e.extend(values);
          
        }
        
      }
    },
    fiber$attr :function _trc_TQuery_f_attr(_thread) {
      "use strict";
      var _this=this;
      var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var values;
      var i;
      var e;
      var _it_34;
      
      //$LASTPOS=9000551;//kernel.TQuery:551
      values;
      //$LASTPOS=9000567;//kernel.TQuery:567
      if (_this.length==0) {
        _thread.retVal=_this;return;
        
      }
      //$LASTPOS=9000594;//kernel.TQuery:594
      if (_arguments.length==1&&typeof  _arguments[0]=="string") {
        _thread.retVal=_this[0][_arguments[0]];return;
        
        
      }
      //$LASTPOS=9000702;//kernel.TQuery:702
      if (_arguments.length>=2) {
        //$LASTPOS=9000737;//kernel.TQuery:737
        values={};
        //$LASTPOS=9000756;//kernel.TQuery:756
        //$LASTPOS=9000761;//kernel.TQuery:761
        i = 0;
        while(i<_arguments.length-1) {
          {
            //$LASTPOS=9000813;//kernel.TQuery:813
            values[_arguments[i]]=_arguments[i+1];
          }
          i+=2;
        }
        
      } else {
        //$LASTPOS=9000881;//kernel.TQuery:881
        values=_arguments[0];
        
      }
      //$LASTPOS=9000912;//kernel.TQuery:912
      if (values) {
        //$LASTPOS=9000934;//kernel.TQuery:934
        _it_34=Tonyu.iterator(_this,1);
        while(_it_34.next()) {
          e=_it_34[0];
          
          //$LASTPOS=9000968;//kernel.TQuery:968
          e.extend(values);
          
        }
        
      }
      
      _thread.retVal=_this;return;
    },
    genKeyfunc :function _trc_TQuery_genKeyfunc(key) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=9001028;//kernel.TQuery:1028
      if (typeof  key!="function") {
        return (function anonymous_1073(o) {
          
          return o[key];
        });
        
      } else {
        return key;
        
      }
    },
    fiber$genKeyfunc :function _trc_TQuery_f_genKeyfunc(_thread,key) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=9001028;//kernel.TQuery:1028
      if (typeof  key!="function") {
        _thread.retVal=(function anonymous_1073(o) {
          
          return o[key];
        });return;
        
        
      } else {
        _thread.retVal=key;return;
        
        
      }
      
      _thread.retVal=_this;return;
    },
    maxs :function _trc_TQuery_maxs(key) {
      "use strict";
      var _this=this;
      var f;
      var res;
      var reso;
      var o;
      var _it_40;
      var v;
      
      //$LASTPOS=9001154;//kernel.TQuery:1154
      f = _this.genKeyfunc(key);
      //$LASTPOS=9001181;//kernel.TQuery:1181
      res;reso = new Tonyu.classes.kernel.TQuery;
      //$LASTPOS=9001210;//kernel.TQuery:1210
      _it_40=Tonyu.iterator(_this,1);
      while(_it_40.next()) {
        o=_it_40[0];
        
        //$LASTPOS=9001240;//kernel.TQuery:1240
        v = f(o);
        //$LASTPOS=9001260;//kernel.TQuery:1260
        if (res==null||v>=res) {
          //$LASTPOS=9001299;//kernel.TQuery:1299
          if (v>res) {
            //$LASTPOS=9001310;//kernel.TQuery:1310
            reso=new Tonyu.classes.kernel.TQuery;
          }
          //$LASTPOS=9001339;//kernel.TQuery:1339
          reso.push(o);
          //$LASTPOS=9001365;//kernel.TQuery:1365
          res=v;
          
        }
        
      }
      return reso;
    },
    fiber$maxs :function _trc_TQuery_f_maxs(_thread,key) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var f;
      var res;
      var reso;
      var o;
      var _it_40;
      var v;
      
      //$LASTPOS=9001154;//kernel.TQuery:1154
      f = _this.genKeyfunc(key);
      //$LASTPOS=9001181;//kernel.TQuery:1181
      res;reso = new Tonyu.classes.kernel.TQuery;
      //$LASTPOS=9001210;//kernel.TQuery:1210
      _it_40=Tonyu.iterator(_this,1);
      while(_it_40.next()) {
        o=_it_40[0];
        
        //$LASTPOS=9001240;//kernel.TQuery:1240
        v = f(o);
        //$LASTPOS=9001260;//kernel.TQuery:1260
        if (res==null||v>=res) {
          //$LASTPOS=9001299;//kernel.TQuery:1299
          if (v>res) {
            //$LASTPOS=9001310;//kernel.TQuery:1310
            reso=new Tonyu.classes.kernel.TQuery;
          }
          //$LASTPOS=9001339;//kernel.TQuery:1339
          reso.push(o);
          //$LASTPOS=9001365;//kernel.TQuery:1365
          res=v;
          
        }
        
      }
      _thread.retVal=reso;return;
      
      
      _thread.retVal=_this;return;
    },
    mins :function _trc_TQuery_mins(key) {
      "use strict";
      var _this=this;
      var f;
      var res;
      var reso;
      var o;
      var _it_47;
      var v;
      
      //$LASTPOS=9001424;//kernel.TQuery:1424
      f = _this.genKeyfunc(key);
      //$LASTPOS=9001451;//kernel.TQuery:1451
      res;reso = new Tonyu.classes.kernel.TQuery;
      //$LASTPOS=9001480;//kernel.TQuery:1480
      _it_47=Tonyu.iterator(_this,1);
      while(_it_47.next()) {
        o=_it_47[0];
        
        //$LASTPOS=9001510;//kernel.TQuery:1510
        v = f(o);
        //$LASTPOS=9001530;//kernel.TQuery:1530
        if (res==null||v<=res) {
          //$LASTPOS=9001569;//kernel.TQuery:1569
          if (v<res) {
            //$LASTPOS=9001580;//kernel.TQuery:1580
            reso=new Tonyu.classes.kernel.TQuery;
          }
          //$LASTPOS=9001609;//kernel.TQuery:1609
          reso.push(o);
          //$LASTPOS=9001635;//kernel.TQuery:1635
          res=v;
          
        }
        
      }
      return reso;
    },
    fiber$mins :function _trc_TQuery_f_mins(_thread,key) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var f;
      var res;
      var reso;
      var o;
      var _it_47;
      var v;
      
      //$LASTPOS=9001424;//kernel.TQuery:1424
      f = _this.genKeyfunc(key);
      //$LASTPOS=9001451;//kernel.TQuery:1451
      res;reso = new Tonyu.classes.kernel.TQuery;
      //$LASTPOS=9001480;//kernel.TQuery:1480
      _it_47=Tonyu.iterator(_this,1);
      while(_it_47.next()) {
        o=_it_47[0];
        
        //$LASTPOS=9001510;//kernel.TQuery:1510
        v = f(o);
        //$LASTPOS=9001530;//kernel.TQuery:1530
        if (res==null||v<=res) {
          //$LASTPOS=9001569;//kernel.TQuery:1569
          if (v<res) {
            //$LASTPOS=9001580;//kernel.TQuery:1580
            reso=new Tonyu.classes.kernel.TQuery;
          }
          //$LASTPOS=9001609;//kernel.TQuery:1609
          reso.push(o);
          //$LASTPOS=9001635;//kernel.TQuery:1635
          res=v;
          
        }
        
      }
      _thread.retVal=reso;return;
      
      
      _thread.retVal=_this;return;
    },
    minObj :function _trc_TQuery_minObj(key) {
      "use strict";
      var _this=this;
      
      return _this.mins(key)[0];
    },
    fiber$minObj :function _trc_TQuery_f_minObj(_thread,key) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=_this.mins(key)[0];return;
      
      
      _thread.retVal=_this;return;
    },
    maxObj :function _trc_TQuery_maxObj(key) {
      "use strict";
      var _this=this;
      
      return _this.maxs(key)[0];
    },
    fiber$maxObj :function _trc_TQuery_f_maxObj(_thread,key) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=_this.maxs(key)[0];return;
      
      
      _thread.retVal=_this;return;
    },
    nearests :function _trc_TQuery_nearests(x,y) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=9001782;//kernel.TQuery:1782
      if (typeof  x=="object") {
        //$LASTPOS=9001807;//kernel.TQuery:1807
        y=x.y;
        //$LASTPOS=9001813;//kernel.TQuery:1813
        x=x.x;
        
      }
      return _this.mins((function anonymous_1837(o) {
        
        return _this.dist(o.x-x,o.y-y);
      }));
    },
    fiber$nearests :function _trc_TQuery_f_nearests(_thread,x,y) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=9001782;//kernel.TQuery:1782
      if (typeof  x=="object") {
        //$LASTPOS=9001807;//kernel.TQuery:1807
        y=x.y;
        //$LASTPOS=9001813;//kernel.TQuery:1813
        x=x.x;
        
      }
      _thread.retVal=_this.mins((function anonymous_1837(o) {
        
        return _this.dist(o.x-x,o.y-y);
      }));return;
      
      
      _thread.retVal=_this;return;
    },
    nearest :function _trc_TQuery_nearest(x,y) {
      "use strict";
      var _this=this;
      
      return _this.nearests(x,y)[0];
    },
    fiber$nearest :function _trc_TQuery_f_nearest(_thread,x,y) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=_this.nearests(x,y)[0];return;
      
      
      _thread.retVal=_this;return;
    },
    withins :function _trc_TQuery_withins(xo,yd,d) {
      "use strict";
      var _this=this;
      var x;
      var y;
      
      //$LASTPOS=9001958;//kernel.TQuery:1958
      x;y;
      //$LASTPOS=9001971;//kernel.TQuery:1971
      if (typeof  xo=="object") {
        //$LASTPOS=9002006;//kernel.TQuery:2006
        x=xo.x;
        //$LASTPOS=9002013;//kernel.TQuery:2013
        y=xo.y;
        //$LASTPOS=9002020;//kernel.TQuery:2020
        d=yd;
        
      } else {
        //$LASTPOS=9002047;//kernel.TQuery:2047
        x=xo;
        //$LASTPOS=9002052;//kernel.TQuery:2052
        y=yd;
        
      }
      return _this.find((function anonymous_2080(o) {
        
        return _this.dist(o.x-x,o.y-y)<=d;
      }));
    },
    fiber$withins :function _trc_TQuery_f_withins(_thread,xo,yd,d) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var x;
      var y;
      
      //$LASTPOS=9001958;//kernel.TQuery:1958
      x;y;
      //$LASTPOS=9001971;//kernel.TQuery:1971
      if (typeof  xo=="object") {
        //$LASTPOS=9002006;//kernel.TQuery:2006
        x=xo.x;
        //$LASTPOS=9002013;//kernel.TQuery:2013
        y=xo.y;
        //$LASTPOS=9002020;//kernel.TQuery:2020
        d=yd;
        
      } else {
        //$LASTPOS=9002047;//kernel.TQuery:2047
        x=xo;
        //$LASTPOS=9002052;//kernel.TQuery:2052
        y=yd;
        
      }
      _thread.retVal=_this.find((function anonymous_2080(o) {
        
        return _this.dist(o.x-x,o.y-y)<=d;
      }));return;
      
      
      _thread.retVal=_this;return;
    },
    within :function _trc_TQuery_within(xo,yd,d) {
      "use strict";
      var _this=this;
      
      return _this.withins(xo,yd,d).nearest();
    },
    fiber$within :function _trc_TQuery_f_within(_thread,xo,yd,d) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=_this.withins(xo,yd,d).nearest();return;
      
      
      _thread.retVal=_this;return;
    },
    max :function _trc_TQuery_max(key) {
      "use strict";
      var _this=this;
      var f;
      var res;
      var o;
      var _it_58;
      var v;
      
      //$LASTPOS=9002210;//kernel.TQuery:2210
      f = _this.genKeyfunc(key);
      //$LASTPOS=9002237;//kernel.TQuery:2237
      res;
      //$LASTPOS=9002250;//kernel.TQuery:2250
      _it_58=Tonyu.iterator(_this,1);
      while(_it_58.next()) {
        o=_it_58[0];
        
        //$LASTPOS=9002280;//kernel.TQuery:2280
        v = f(o);
        //$LASTPOS=9002300;//kernel.TQuery:2300
        if (res==null||v>res) {
          //$LASTPOS=9002324;//kernel.TQuery:2324
          res=v;
        }
        
      }
      return res;
    },
    fiber$max :function _trc_TQuery_f_max(_thread,key) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var f;
      var res;
      var o;
      var _it_58;
      var v;
      
      //$LASTPOS=9002210;//kernel.TQuery:2210
      f = _this.genKeyfunc(key);
      //$LASTPOS=9002237;//kernel.TQuery:2237
      res;
      //$LASTPOS=9002250;//kernel.TQuery:2250
      _it_58=Tonyu.iterator(_this,1);
      while(_it_58.next()) {
        o=_it_58[0];
        
        //$LASTPOS=9002280;//kernel.TQuery:2280
        v = f(o);
        //$LASTPOS=9002300;//kernel.TQuery:2300
        if (res==null||v>res) {
          //$LASTPOS=9002324;//kernel.TQuery:2324
          res=v;
        }
        
      }
      _thread.retVal=res;return;
      
      
      _thread.retVal=_this;return;
    },
    min :function _trc_TQuery_min(key) {
      "use strict";
      var _this=this;
      var f;
      var res;
      var o;
      var _it_64;
      var v;
      
      //$LASTPOS=9002371;//kernel.TQuery:2371
      f = _this.genKeyfunc(key);
      //$LASTPOS=9002398;//kernel.TQuery:2398
      res;
      //$LASTPOS=9002411;//kernel.TQuery:2411
      _it_64=Tonyu.iterator(_this,1);
      while(_it_64.next()) {
        o=_it_64[0];
        
        //$LASTPOS=9002441;//kernel.TQuery:2441
        v = f(o);
        //$LASTPOS=9002461;//kernel.TQuery:2461
        if (res==null||v<res) {
          //$LASTPOS=9002485;//kernel.TQuery:2485
          res=v;
        }
        
      }
      return res;
    },
    fiber$min :function _trc_TQuery_f_min(_thread,key) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var f;
      var res;
      var o;
      var _it_64;
      var v;
      
      //$LASTPOS=9002371;//kernel.TQuery:2371
      f = _this.genKeyfunc(key);
      //$LASTPOS=9002398;//kernel.TQuery:2398
      res;
      //$LASTPOS=9002411;//kernel.TQuery:2411
      _it_64=Tonyu.iterator(_this,1);
      while(_it_64.next()) {
        o=_it_64[0];
        
        //$LASTPOS=9002441;//kernel.TQuery:2441
        v = f(o);
        //$LASTPOS=9002461;//kernel.TQuery:2461
        if (res==null||v<res) {
          //$LASTPOS=9002485;//kernel.TQuery:2485
          res=v;
        }
        
      }
      _thread.retVal=res;return;
      
      
      _thread.retVal=_this;return;
    },
    push :function _trc_TQuery_push(e) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=9002531;//kernel.TQuery:2531
      _this[_this.length]=e;
      //$LASTPOS=9002551;//kernel.TQuery:2551
      _this.length++;
    },
    fiber$push :function _trc_TQuery_f_push(_thread,e) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=9002531;//kernel.TQuery:2531
      _this[_this.length]=e;
      //$LASTPOS=9002551;//kernel.TQuery:2551
      _this.length++;
      
      _thread.retVal=_this;return;
    },
    size :function _trc_TQuery_size() {
      "use strict";
      var _this=this;
      
      return _this.length;
    },
    fiber$size :function _trc_TQuery_f_size(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=_this.length;return;
      
      
      _thread.retVal=_this;return;
    },
    find :function _trc_TQuery_find(f) {
      "use strict";
      var _this=this;
      var no;
      var o;
      var _it_70;
      
      //$LASTPOS=9002603;//kernel.TQuery:2603
      no = new Tonyu.classes.kernel.TQuery;
      //$LASTPOS=9002626;//kernel.TQuery:2626
      _it_70=Tonyu.iterator(_this,1);
      while(_it_70.next()) {
        o=_it_70[0];
        
        //$LASTPOS=9002656;//kernel.TQuery:2656
        if (f(o)) {
          //$LASTPOS=9002666;//kernel.TQuery:2666
          no.push(o);
        }
        
      }
      return no;
    },
    fiber$find :function _trc_TQuery_f_find(_thread,f) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var no;
      var o;
      var _it_70;
      
      //$LASTPOS=9002603;//kernel.TQuery:2603
      no = new Tonyu.classes.kernel.TQuery;
      //$LASTPOS=9002626;//kernel.TQuery:2626
      _it_70=Tonyu.iterator(_this,1);
      while(_it_70.next()) {
        o=_it_70[0];
        
        //$LASTPOS=9002656;//kernel.TQuery:2656
        if (f(o)) {
          //$LASTPOS=9002666;//kernel.TQuery:2666
          no.push(o);
        }
        
      }
      _thread.retVal=no;return;
      
      
      _thread.retVal=_this;return;
    },
    find1 :function _trc_TQuery_find1(f) {
      "use strict";
      var _this=this;
      
      return _this.find(f)[0];
    },
    fiber$find1 :function _trc_TQuery_f_find1(_thread,f) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=_this.find(f)[0];return;
      
      
      _thread.retVal=_this;return;
    },
    apply :function _trc_TQuery_apply(name,args) {
      "use strict";
      var _this=this;
      var res;
      var o;
      var _it_74;
      var f;
      
      //$LASTPOS=9002764;//kernel.TQuery:2764
      res;
      //$LASTPOS=9002777;//kernel.TQuery:2777
      if (! args) {
        //$LASTPOS=9002788;//kernel.TQuery:2788
        args=[];
      }
      //$LASTPOS=9002801;//kernel.TQuery:2801
      _it_74=Tonyu.iterator(_this,1);
      while(_it_74.next()) {
        o=_it_74[0];
        
        //$LASTPOS=9002831;//kernel.TQuery:2831
        f = o[name];
        //$LASTPOS=9002854;//kernel.TQuery:2854
        if (typeof  f=="function") {
          //$LASTPOS=9002894;//kernel.TQuery:2894
          res=f.apply(o,args);
          
        }
        
      }
      return res;
    },
    fiber$apply :function _trc_TQuery_f_apply(_thread,name,args) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var res;
      var o;
      var _it_74;
      var f;
      
      //$LASTPOS=9002764;//kernel.TQuery:2764
      res;
      //$LASTPOS=9002777;//kernel.TQuery:2777
      if (! args) {
        //$LASTPOS=9002788;//kernel.TQuery:2788
        args=[];
      }
      //$LASTPOS=9002801;//kernel.TQuery:2801
      _it_74=Tonyu.iterator(_this,1);
      while(_it_74.next()) {
        o=_it_74[0];
        
        //$LASTPOS=9002831;//kernel.TQuery:2831
        f = o[name];
        //$LASTPOS=9002854;//kernel.TQuery:2854
        if (typeof  f=="function") {
          //$LASTPOS=9002894;//kernel.TQuery:2894
          res=f.apply(o,args);
          
        }
        
      }
      _thread.retVal=res;return;
      
      
      _thread.retVal=_this;return;
    },
    alive :function _trc_TQuery_alive() {
      "use strict";
      var _this=this;
      
      return _this.find((function anonymous_3032(o) {
        
        return ! o.isDead();
      }));
    },
    fiber$alive :function _trc_TQuery_f_alive(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=_this.find((function anonymous_3032(o) {
        
        return ! o.isDead();
      }));return;
      
      
      _thread.retVal=_this;return;
    },
    die :function _trc_TQuery_die() {
      "use strict";
      var _this=this;
      var a;
      
      //$LASTPOS=9003089;//kernel.TQuery:3089
      a = _this.alive();
      //$LASTPOS=9003108;//kernel.TQuery:3108
      if (a.length==0) {
        return false;
      }
      //$LASTPOS=9003143;//kernel.TQuery:3143
      a.apply("die");
      return true;
    },
    fiber$die :function _trc_TQuery_f_die(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var a;
      
      //$LASTPOS=9003089;//kernel.TQuery:3089
      a = _this.alive();
      //$LASTPOS=9003108;//kernel.TQuery:3108
      if (a.length==0) {
        _thread.retVal=false;return;
        
      }
      //$LASTPOS=9003143;//kernel.TQuery:3143
      a.apply("die");
      _thread.retVal=true;return;
      
      
      _thread.retVal=_this;return;
    },
    klass :function _trc_TQuery_klass(k) {
      "use strict";
      var _this=this;
      
      return _this.find((function anonymous_3207(o) {
        
        return o instanceof k;
      }));
    },
    fiber$klass :function _trc_TQuery_f_klass(_thread,k) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=_this.find((function anonymous_3207(o) {
        
        return o instanceof k;
      }));return;
      
      
      _thread.retVal=_this;return;
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"tonyuIterator":{"nowait":false},"attr":{"nowait":false},"genKeyfunc":{"nowait":false},"maxs":{"nowait":false},"mins":{"nowait":false},"minObj":{"nowait":false},"maxObj":{"nowait":false},"nearests":{"nowait":false},"nearest":{"nowait":false},"withins":{"nowait":false},"within":{"nowait":false},"max":{"nowait":false},"min":{"nowait":false},"push":{"nowait":false},"size":{"nowait":false},"find":{"nowait":false},"find1":{"nowait":false},"apply":{"nowait":false},"alive":{"nowait":false},"die":{"nowait":false},"klass":{"nowait":false}}}
});
Tonyu.klass.define({
  fullName: 'kernel.InputDevice',
  shortName: 'InputDevice',
  namespace: 'kernel',
  includes: [],
  methods: {
    main :function _trc_InputDevice_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_InputDevice_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    initialize :function _trc_InputDevice_initialize() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=10000091;//kernel.InputDevice:91
      _this.listeners=[];
      //$LASTPOS=10000110;//kernel.InputDevice:110
      _this.touchEmu=true;
    },
    handleListeners :function _trc_InputDevice_handleListeners() {
      "use strict";
      var _this=this;
      var l;
      
      //$LASTPOS=10000155;//kernel.InputDevice:155
      l = _this.listeners;
      //$LASTPOS=10000177;//kernel.InputDevice:177
      _this.listeners=[];
      //$LASTPOS=10000196;//kernel.InputDevice:196
      while (l.length>0) {
        //$LASTPOS=10000217;//kernel.InputDevice:217
        (l.shift())();
        
      }
    },
    fiber$handleListeners :function _trc_InputDevice_f_handleListeners(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var l;
      
      //$LASTPOS=10000155;//kernel.InputDevice:155
      l = _this.listeners;
      //$LASTPOS=10000177;//kernel.InputDevice:177
      _this.listeners=[];
      
      _thread.enter(function _trc_InputDevice_ent_handleListeners(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=10000196;//kernel.InputDevice:196
          case 1:
            if (!(l.length>0)) { __pc=2; break; }
            {
              //$LASTPOS=10000217;//kernel.InputDevice:217
              (l.shift())();
            }
            __pc=1;break;
          case 2:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    addOnetimeListener :function _trc_InputDevice_addOnetimeListener(l) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=10000267;//kernel.InputDevice:267
      _this.listeners.push(l);
    },
    fiber$addOnetimeListener :function _trc_InputDevice_f_addOnetimeListener(_thread,l) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=10000267;//kernel.InputDevice:267
      _this.listeners.push(l);
      
      _thread.retVal=_this;return;
    },
    initCanvasEvents :function _trc_InputDevice_initCanvasEvents(cvj) {
      "use strict";
      var _this=this;
      var cv;
      var handleMouse;
      var handleTouch;
      var handleTouchEnd;
      var d;
      
      //$LASTPOS=10000320;//kernel.InputDevice:320
      cv = cvj[0];
      //$LASTPOS=10000340;//kernel.InputDevice:340
      Tonyu.globals.$handleMouse=(function anonymous_353(e) {
        var p;
        var mp;
        
        //$LASTPOS=10000369;//kernel.InputDevice:369
        p = cvj.offset();
        //$LASTPOS=10000398;//kernel.InputDevice:398
        mp = {x: e.clientX-p.left,y: e.clientY-p.top};
        //$LASTPOS=10000455;//kernel.InputDevice:455
        mp=Tonyu.globals.$Screen.canvas2buf(mp);
        //$LASTPOS=10000491;//kernel.InputDevice:491
        Tonyu.globals.$mouseX=mp.x;
        //$LASTPOS=10000514;//kernel.InputDevice:514
        Tonyu.globals.$mouseY=mp.y;
        //$LASTPOS=10000537;//kernel.InputDevice:537
        if (_this.touchEmu) {
          //$LASTPOS=10000566;//kernel.InputDevice:566
          Tonyu.globals.$touches[0].x=mp.x;
          //$LASTPOS=10000599;//kernel.InputDevice:599
          Tonyu.globals.$touches[0].y=mp.y;
          
        }
        //$LASTPOS=10000639;//kernel.InputDevice:639
        _this.handleListeners();
      });
      //$LASTPOS=10000671;//kernel.InputDevice:671
      Tonyu.globals.$touches=[{},{},{},{},{}];
      //$LASTPOS=10000703;//kernel.InputDevice:703
      Tonyu.globals.$touches.findById=(function anonymous_721(id) {
        var j;
        
        //$LASTPOS=10000738;//kernel.InputDevice:738
        //$LASTPOS=10000743;//kernel.InputDevice:743
        j = 0;
        while(j<Tonyu.globals.$touches.length) {
          {
            //$LASTPOS=10000793;//kernel.InputDevice:793
            if (Tonyu.globals.$touches[j].identifier==id) {
              return Tonyu.globals.$touches[j];
              
            }
          }
          j++;
        }
      });
      //$LASTPOS=10000903;//kernel.InputDevice:903
      Tonyu.globals.$handleTouch=(function anonymous_916(e) {
        var p;
        var ts;
        var i;
        var src;
        var dst;
        var j;
        
        //$LASTPOS=10000932;//kernel.InputDevice:932
        _this.touchEmu=false;
        //$LASTPOS=10000957;//kernel.InputDevice:957
        p = cvj.offset();
        //$LASTPOS=10000986;//kernel.InputDevice:986
        e.preventDefault();
        //$LASTPOS=10001015;//kernel.InputDevice:1015
        ts = e.originalEvent.changedTouches;
        //$LASTPOS=10001063;//kernel.InputDevice:1063
        //$LASTPOS=10001068;//kernel.InputDevice:1068
        i = 0;
        while(i<ts.length) {
          {
            //$LASTPOS=10001113;//kernel.InputDevice:1113
            src = ts[i];
            //$LASTPOS=10001141;//kernel.InputDevice:1141
            dst = Tonyu.globals.$touches.findById(src.identifier);
            //$LASTPOS=10001197;//kernel.InputDevice:1197
            if (! dst) {
              //$LASTPOS=10001226;//kernel.InputDevice:1226
              //$LASTPOS=10001231;//kernel.InputDevice:1231
              j = 0;
              while(j<Tonyu.globals.$touches.length) {
                {
                  //$LASTPOS=10001289;//kernel.InputDevice:1289
                  if (! Tonyu.globals.$touches[j].touched) {
                    //$LASTPOS=10001342;//kernel.InputDevice:1342
                    dst=Tonyu.globals.$touches[j];
                    //$LASTPOS=10001384;//kernel.InputDevice:1384
                    dst.identifier=src.identifier;
                    break;
                    
                    
                  }
                }
                j++;
              }
              
            }
            //$LASTPOS=10001517;//kernel.InputDevice:1517
            if (dst) {
              //$LASTPOS=10001545;//kernel.InputDevice:1545
              _this.mp={x: src.pageX-p.left,y: src.pageY-p.top};
              //$LASTPOS=10001606;//kernel.InputDevice:1606
              _this.mp=Tonyu.globals.$Screen.canvas2buf(_this.mp);
              //$LASTPOS=10001650;//kernel.InputDevice:1650
              dst.x=_this.mp.x;
              //$LASTPOS=10001679;//kernel.InputDevice:1679
              dst.y=_this.mp.y;
              //$LASTPOS=10001708;//kernel.InputDevice:1708
              if (! dst.touched) {
                //$LASTPOS=10001725;//kernel.InputDevice:1725
                dst.touched=1;
              }
              
            }
          }
          i++;
        }
        //$LASTPOS=10001775;//kernel.InputDevice:1775
        Tonyu.globals.$mouseX=Tonyu.globals.$touches[0].x;
        //$LASTPOS=10001807;//kernel.InputDevice:1807
        Tonyu.globals.$mouseY=Tonyu.globals.$touches[0].y;
        //$LASTPOS=10001839;//kernel.InputDevice:1839
        _this.handleListeners();
      });
      //$LASTPOS=10001871;//kernel.InputDevice:1871
      Tonyu.globals.$handleTouchEnd=(function anonymous_1887(e) {
        var ts;
        var i;
        var src;
        var dst;
        
        //$LASTPOS=10001903;//kernel.InputDevice:1903
        T2MediaLib.activate();
        //$LASTPOS=10001935;//kernel.InputDevice:1935
        ts = e.originalEvent.changedTouches;
        //$LASTPOS=10001983;//kernel.InputDevice:1983
        //$LASTPOS=10001988;//kernel.InputDevice:1988
        i = 0;
        while(i<ts.length) {
          {
            //$LASTPOS=10002033;//kernel.InputDevice:2033
            src = ts[i];
            //$LASTPOS=10002061;//kernel.InputDevice:2061
            dst = Tonyu.globals.$touches.findById(src.identifier);
            //$LASTPOS=10002117;//kernel.InputDevice:2117
            if (dst) {
              //$LASTPOS=10002145;//kernel.InputDevice:2145
              dst.touched=0;
              //$LASTPOS=10002177;//kernel.InputDevice:2177
              dst.identifier=- 1;
              
            }
          }
          i++;
        }
        //$LASTPOS=10002231;//kernel.InputDevice:2231
        _this.handleListeners();
      });
      //$LASTPOS=10002263;//kernel.InputDevice:2263
      handleMouse = (function anonymous_2279(e) {
        
        //$LASTPOS=10002284;//kernel.InputDevice:2284
        Tonyu.globals.$handleMouse(e);
      });
      //$LASTPOS=10002308;//kernel.InputDevice:2308
      handleTouch = (function anonymous_2324(e) {
        
        //$LASTPOS=10002329;//kernel.InputDevice:2329
        Tonyu.globals.$handleTouch(e);
      });
      //$LASTPOS=10002353;//kernel.InputDevice:2353
      handleTouchEnd = (function anonymous_2372(e) {
        
        //$LASTPOS=10002377;//kernel.InputDevice:2377
        Tonyu.globals.$handleTouchEnd(e);
      });
      //$LASTPOS=10002404;//kernel.InputDevice:2404
      d = $.data(cv,"events");
      //$LASTPOS=10002436;//kernel.InputDevice:2436
      if (! d) {
        //$LASTPOS=10002455;//kernel.InputDevice:2455
        $.data(cv,"events","true");
        //$LASTPOS=10002492;//kernel.InputDevice:2492
        cvj.mousedown(handleMouse);
        //$LASTPOS=10002529;//kernel.InputDevice:2529
        cvj.mousemove(handleMouse);
        //$LASTPOS=10002566;//kernel.InputDevice:2566
        cvj.on("touchstart",handleTouch);
        //$LASTPOS=10002609;//kernel.InputDevice:2609
        cvj.on("touchmove",handleTouch);
        //$LASTPOS=10002651;//kernel.InputDevice:2651
        cvj.on("touchend",handleTouchEnd);
        
      }
    },
    fiber$initCanvasEvents :function _trc_InputDevice_f_initCanvasEvents(_thread,cvj) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var cv;
      var handleMouse;
      var handleTouch;
      var handleTouchEnd;
      var d;
      
      //$LASTPOS=10000320;//kernel.InputDevice:320
      cv = cvj[0];
      
      _thread.enter(function _trc_InputDevice_ent_initCanvasEvents(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=10000340;//kernel.InputDevice:340
            Tonyu.globals.$handleMouse=(function anonymous_353(e) {
              var p;
              var mp;
              
              //$LASTPOS=10000369;//kernel.InputDevice:369
              p = cvj.offset();
              //$LASTPOS=10000398;//kernel.InputDevice:398
              mp = {x: e.clientX-p.left,y: e.clientY-p.top};
              //$LASTPOS=10000455;//kernel.InputDevice:455
              mp=Tonyu.globals.$Screen.canvas2buf(mp);
              //$LASTPOS=10000491;//kernel.InputDevice:491
              Tonyu.globals.$mouseX=mp.x;
              //$LASTPOS=10000514;//kernel.InputDevice:514
              Tonyu.globals.$mouseY=mp.y;
              //$LASTPOS=10000537;//kernel.InputDevice:537
              if (_this.touchEmu) {
                //$LASTPOS=10000566;//kernel.InputDevice:566
                Tonyu.globals.$touches[0].x=mp.x;
                //$LASTPOS=10000599;//kernel.InputDevice:599
                Tonyu.globals.$touches[0].y=mp.y;
                
              }
              //$LASTPOS=10000639;//kernel.InputDevice:639
              _this.handleListeners();
            });
            //$LASTPOS=10000671;//kernel.InputDevice:671
            Tonyu.globals.$touches=[{},{},{},{},{}];
            //$LASTPOS=10000703;//kernel.InputDevice:703
            Tonyu.globals.$touches.findById=(function anonymous_721(id) {
              var j;
              
              //$LASTPOS=10000738;//kernel.InputDevice:738
              //$LASTPOS=10000743;//kernel.InputDevice:743
              j = 0;
              while(j<Tonyu.globals.$touches.length) {
                {
                  //$LASTPOS=10000793;//kernel.InputDevice:793
                  if (Tonyu.globals.$touches[j].identifier==id) {
                    return Tonyu.globals.$touches[j];
                    
                  }
                }
                j++;
              }
            });
            //$LASTPOS=10000903;//kernel.InputDevice:903
            Tonyu.globals.$handleTouch=(function anonymous_916(e) {
              var p;
              var ts;
              var i;
              var src;
              var dst;
              var j;
              
              //$LASTPOS=10000932;//kernel.InputDevice:932
              _this.touchEmu=false;
              //$LASTPOS=10000957;//kernel.InputDevice:957
              p = cvj.offset();
              //$LASTPOS=10000986;//kernel.InputDevice:986
              e.preventDefault();
              //$LASTPOS=10001015;//kernel.InputDevice:1015
              ts = e.originalEvent.changedTouches;
              //$LASTPOS=10001063;//kernel.InputDevice:1063
              //$LASTPOS=10001068;//kernel.InputDevice:1068
              i = 0;
              while(i<ts.length) {
                {
                  //$LASTPOS=10001113;//kernel.InputDevice:1113
                  src = ts[i];
                  //$LASTPOS=10001141;//kernel.InputDevice:1141
                  dst = Tonyu.globals.$touches.findById(src.identifier);
                  //$LASTPOS=10001197;//kernel.InputDevice:1197
                  if (! dst) {
                    //$LASTPOS=10001226;//kernel.InputDevice:1226
                    //$LASTPOS=10001231;//kernel.InputDevice:1231
                    j = 0;
                    while(j<Tonyu.globals.$touches.length) {
                      {
                        //$LASTPOS=10001289;//kernel.InputDevice:1289
                        if (! Tonyu.globals.$touches[j].touched) {
                          //$LASTPOS=10001342;//kernel.InputDevice:1342
                          dst=Tonyu.globals.$touches[j];
                          //$LASTPOS=10001384;//kernel.InputDevice:1384
                          dst.identifier=src.identifier;
                          break;
                          
                          
                        }
                      }
                      j++;
                    }
                    
                  }
                  //$LASTPOS=10001517;//kernel.InputDevice:1517
                  if (dst) {
                    //$LASTPOS=10001545;//kernel.InputDevice:1545
                    _this.mp={x: src.pageX-p.left,y: src.pageY-p.top};
                    //$LASTPOS=10001606;//kernel.InputDevice:1606
                    _this.mp=Tonyu.globals.$Screen.canvas2buf(_this.mp);
                    //$LASTPOS=10001650;//kernel.InputDevice:1650
                    dst.x=_this.mp.x;
                    //$LASTPOS=10001679;//kernel.InputDevice:1679
                    dst.y=_this.mp.y;
                    //$LASTPOS=10001708;//kernel.InputDevice:1708
                    if (! dst.touched) {
                      //$LASTPOS=10001725;//kernel.InputDevice:1725
                      dst.touched=1;
                    }
                    
                  }
                }
                i++;
              }
              //$LASTPOS=10001775;//kernel.InputDevice:1775
              Tonyu.globals.$mouseX=Tonyu.globals.$touches[0].x;
              //$LASTPOS=10001807;//kernel.InputDevice:1807
              Tonyu.globals.$mouseY=Tonyu.globals.$touches[0].y;
              //$LASTPOS=10001839;//kernel.InputDevice:1839
              _this.handleListeners();
            });
            //$LASTPOS=10001871;//kernel.InputDevice:1871
            Tonyu.globals.$handleTouchEnd=(function anonymous_1887(e) {
              var ts;
              var i;
              var src;
              var dst;
              
              //$LASTPOS=10001903;//kernel.InputDevice:1903
              T2MediaLib.activate();
              //$LASTPOS=10001935;//kernel.InputDevice:1935
              ts = e.originalEvent.changedTouches;
              //$LASTPOS=10001983;//kernel.InputDevice:1983
              //$LASTPOS=10001988;//kernel.InputDevice:1988
              i = 0;
              while(i<ts.length) {
                {
                  //$LASTPOS=10002033;//kernel.InputDevice:2033
                  src = ts[i];
                  //$LASTPOS=10002061;//kernel.InputDevice:2061
                  dst = Tonyu.globals.$touches.findById(src.identifier);
                  //$LASTPOS=10002117;//kernel.InputDevice:2117
                  if (dst) {
                    //$LASTPOS=10002145;//kernel.InputDevice:2145
                    dst.touched=0;
                    //$LASTPOS=10002177;//kernel.InputDevice:2177
                    dst.identifier=- 1;
                    
                  }
                }
                i++;
              }
              //$LASTPOS=10002231;//kernel.InputDevice:2231
              _this.handleListeners();
            });
            //$LASTPOS=10002263;//kernel.InputDevice:2263
            handleMouse = (function anonymous_2279(e) {
              
              //$LASTPOS=10002284;//kernel.InputDevice:2284
              Tonyu.globals.$handleMouse(e);
            });
            //$LASTPOS=10002308;//kernel.InputDevice:2308
            handleTouch = (function anonymous_2324(e) {
              
              //$LASTPOS=10002329;//kernel.InputDevice:2329
              Tonyu.globals.$handleTouch(e);
            });
            //$LASTPOS=10002353;//kernel.InputDevice:2353
            handleTouchEnd = (function anonymous_2372(e) {
              
              //$LASTPOS=10002377;//kernel.InputDevice:2377
              Tonyu.globals.$handleTouchEnd(e);
            });
            //$LASTPOS=10002404;//kernel.InputDevice:2404
            d = $.data(cv,"events");
            //$LASTPOS=10002436;//kernel.InputDevice:2436
            if (! d) {
              //$LASTPOS=10002455;//kernel.InputDevice:2455
              $.data(cv,"events","true");
              //$LASTPOS=10002492;//kernel.InputDevice:2492
              cvj.mousedown(handleMouse);
              //$LASTPOS=10002529;//kernel.InputDevice:2529
              cvj.mousemove(handleMouse);
              //$LASTPOS=10002566;//kernel.InputDevice:2566
              cvj.on("touchstart",handleTouch);
              //$LASTPOS=10002609;//kernel.InputDevice:2609
              cvj.on("touchmove",handleTouch);
              //$LASTPOS=10002651;//kernel.InputDevice:2651
              cvj.on("touchend",handleTouchEnd);
              
            }
            _thread.exit(_this);return;
          }
        }
      });
    },
    update :function _trc_InputDevice_update() {
      "use strict";
      var _this=this;
      var i;
      var _it_108;
      
      //$LASTPOS=10002716;//kernel.InputDevice:2716
      _it_108=Tonyu.iterator(Tonyu.globals.$touches,1);
      while(_it_108.next()) {
        i=_it_108[0];
        
        //$LASTPOS=10002751;//kernel.InputDevice:2751
        if (i.touched>0) {
          //$LASTPOS=10002769;//kernel.InputDevice:2769
          i.touched++;
          
        }
        //$LASTPOS=10002792;//kernel.InputDevice:2792
        if (i.touched==- 1) {
          //$LASTPOS=10002811;//kernel.InputDevice:2811
          i.touched=1;
        }
        
      }
    },
    fiber$update :function _trc_InputDevice_f_update(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var i;
      var _it_108;
      
      //$LASTPOS=10002716;//kernel.InputDevice:2716
      _it_108=Tonyu.iterator(Tonyu.globals.$touches,1);
      while(_it_108.next()) {
        i=_it_108[0];
        
        //$LASTPOS=10002751;//kernel.InputDevice:2751
        if (i.touched>0) {
          //$LASTPOS=10002769;//kernel.InputDevice:2769
          i.touched++;
          
        }
        //$LASTPOS=10002792;//kernel.InputDevice:2792
        if (i.touched==- 1) {
          //$LASTPOS=10002811;//kernel.InputDevice:2811
          i.touched=1;
        }
        
      }
      
      _thread.retVal=_this;return;
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"handleListeners":{"nowait":false},"addOnetimeListener":{"nowait":false},"initCanvasEvents":{"nowait":false},"update":{"nowait":false}}}
});
Tonyu.klass.define({
  fullName: 'kernel.Keys',
  shortName: 'Keys',
  namespace: 'kernel',
  superclass: Tonyu.classes.kernel.TObject,
  includes: [],
  methods: {
    main :function _trc_Keys_main() {
      "use strict";
      var _this=this;
      var i;
      
      //$LASTPOS=11000084;//kernel.Keys:84
      _this.stats={};
      //$LASTPOS=11000094;//kernel.Keys:94
      _this.codes={left: 37,up: 38,right: 39,down: 40,space: 32,enter: 13,shift: 16,ctrl: 17,alt: 18,mouseleft: 1};
      //$LASTPOS=11000212;//kernel.Keys:212
      //$LASTPOS=11000217;//kernel.Keys:217
      i = 65;
      while(i<65+26) {
        {
          //$LASTPOS=11000248;//kernel.Keys:248
          _this.codes[String.fromCharCode(i).toLowerCase()]=i;
        }
        i++;
      }
      //$LASTPOS=11000297;//kernel.Keys:297
      //$LASTPOS=11000302;//kernel.Keys:302
      i = 48;
      while(i<58) {
        {
          //$LASTPOS=11000330;//kernel.Keys:330
          _this.codes[String.fromCharCode(i)]=i;
        }
        i++;
      }
      //$LASTPOS=11000365;//kernel.Keys:365
      if (! $.data(document,"key_event")) {
        //$LASTPOS=11000406;//kernel.Keys:406
        $.data(document,"key_event",true);
        //$LASTPOS=11000445;//kernel.Keys:445
        $(document).keydown((function anonymous_465(e) {
          
          //$LASTPOS=11000471;//kernel.Keys:471
          Tonyu.globals.$Keys.keydown(e);
        }));
        //$LASTPOS=11000495;//kernel.Keys:495
        $(document).keyup((function anonymous_513(e) {
          
          //$LASTPOS=11000519;//kernel.Keys:519
          Tonyu.globals.$Keys.keyup(e);
        }));
        //$LASTPOS=11000541;//kernel.Keys:541
        $(document).mousedown((function anonymous_563(e) {
          
          //$LASTPOS=11000578;//kernel.Keys:578
          if (Tonyu.globals.$InputDevice.touchEmu) {
            //$LASTPOS=11000619;//kernel.Keys:619
            Tonyu.globals.$touches[0].touched=1;
            
          }
          //$LASTPOS=11000660;//kernel.Keys:660
          Tonyu.globals.$Keys.keydown({keyCode: 1});
        }));
        //$LASTPOS=11000697;//kernel.Keys:697
        $(document).mouseup((function anonymous_717(e) {
          
          //$LASTPOS=11000732;//kernel.Keys:732
          if (Tonyu.globals.$InputDevice.touchEmu) {
            //$LASTPOS=11000773;//kernel.Keys:773
            Tonyu.globals.$touches[0].touched=0;
            
          }
          //$LASTPOS=11000814;//kernel.Keys:814
          Tonyu.globals.$Keys.keyup({keyCode: 1});
        }));
        
      }
    },
    fiber$main :function _trc_Keys_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var i;
      
      //$LASTPOS=11000084;//kernel.Keys:84
      _this.stats={};
      //$LASTPOS=11000094;//kernel.Keys:94
      _this.codes={left: 37,up: 38,right: 39,down: 40,space: 32,enter: 13,shift: 16,ctrl: 17,alt: 18,mouseleft: 1};
      //$LASTPOS=11000212;//kernel.Keys:212
      //$LASTPOS=11000217;//kernel.Keys:217
      i = 65;
      while(i<65+26) {
        {
          //$LASTPOS=11000248;//kernel.Keys:248
          _this.codes[String.fromCharCode(i).toLowerCase()]=i;
        }
        i++;
      }
      //$LASTPOS=11000297;//kernel.Keys:297
      //$LASTPOS=11000302;//kernel.Keys:302
      i = 48;
      while(i<58) {
        {
          //$LASTPOS=11000330;//kernel.Keys:330
          _this.codes[String.fromCharCode(i)]=i;
        }
        i++;
      }
      //$LASTPOS=11000365;//kernel.Keys:365
      if (! $.data(document,"key_event")) {
        //$LASTPOS=11000406;//kernel.Keys:406
        $.data(document,"key_event",true);
        //$LASTPOS=11000445;//kernel.Keys:445
        $(document).keydown((function anonymous_465(e) {
          
          //$LASTPOS=11000471;//kernel.Keys:471
          Tonyu.globals.$Keys.keydown(e);
        }));
        //$LASTPOS=11000495;//kernel.Keys:495
        $(document).keyup((function anonymous_513(e) {
          
          //$LASTPOS=11000519;//kernel.Keys:519
          Tonyu.globals.$Keys.keyup(e);
        }));
        //$LASTPOS=11000541;//kernel.Keys:541
        $(document).mousedown((function anonymous_563(e) {
          
          //$LASTPOS=11000578;//kernel.Keys:578
          if (Tonyu.globals.$InputDevice.touchEmu) {
            //$LASTPOS=11000619;//kernel.Keys:619
            Tonyu.globals.$touches[0].touched=1;
            
          }
          //$LASTPOS=11000660;//kernel.Keys:660
          Tonyu.globals.$Keys.keydown({keyCode: 1});
        }));
        //$LASTPOS=11000697;//kernel.Keys:697
        $(document).mouseup((function anonymous_717(e) {
          
          //$LASTPOS=11000732;//kernel.Keys:732
          if (Tonyu.globals.$InputDevice.touchEmu) {
            //$LASTPOS=11000773;//kernel.Keys:773
            Tonyu.globals.$touches[0].touched=0;
            
          }
          //$LASTPOS=11000814;//kernel.Keys:814
          Tonyu.globals.$Keys.keyup({keyCode: 1});
        }));
        
      }
      
      _thread.retVal=_this;return;
    },
    getkey :function _trc_Keys_getkey(code) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=11000875;//kernel.Keys:875
      if (typeof  code=="string") {
        //$LASTPOS=11000912;//kernel.Keys:912
        code=_this.codes[code.toLowerCase()];
        
      }
      //$LASTPOS=11000954;//kernel.Keys:954
      if (! code) {
        return 0;
      }
      //$LASTPOS=11000979;//kernel.Keys:979
      if (_this.stats[code]==- 1) {
        return 0;
      }
      //$LASTPOS=11001014;//kernel.Keys:1014
      if (! _this.stats[code]) {
        //$LASTPOS=11001032;//kernel.Keys:1032
        _this.stats[code]=0;
      }
      return _this.stats[code];
    },
    fiber$getkey :function _trc_Keys_f_getkey(_thread,code) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=11000875;//kernel.Keys:875
      if (typeof  code=="string") {
        //$LASTPOS=11000912;//kernel.Keys:912
        code=_this.codes[code.toLowerCase()];
        
      }
      //$LASTPOS=11000954;//kernel.Keys:954
      if (! code) {
        _thread.retVal=0;return;
        
      }
      //$LASTPOS=11000979;//kernel.Keys:979
      if (_this.stats[code]==- 1) {
        _thread.retVal=0;return;
        
      }
      //$LASTPOS=11001014;//kernel.Keys:1014
      if (! _this.stats[code]) {
        //$LASTPOS=11001032;//kernel.Keys:1032
        _this.stats[code]=0;
      }
      _thread.retVal=_this.stats[code];return;
      
      
      _thread.retVal=_this;return;
    },
    update :function _trc_Keys_update() {
      "use strict";
      var _this=this;
      var i;
      var _it_116;
      
      //$LASTPOS=11001097;//kernel.Keys:1097
      _it_116=Tonyu.iterator(_this.stats,1);
      while(_it_116.next()) {
        i=_it_116[0];
        
        //$LASTPOS=11001128;//kernel.Keys:1128
        if (_this.stats[i]>0) {
          //$LASTPOS=11001145;//kernel.Keys:1145
          _this.stats[i]++;
          
        }
        //$LASTPOS=11001166;//kernel.Keys:1166
        if (_this.stats[i]==- 1) {
          //$LASTPOS=11001184;//kernel.Keys:1184
          _this.stats[i]=1;
        }
        
      }
    },
    fiber$update :function _trc_Keys_f_update(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var i;
      var _it_116;
      
      //$LASTPOS=11001097;//kernel.Keys:1097
      _it_116=Tonyu.iterator(_this.stats,1);
      while(_it_116.next()) {
        i=_it_116[0];
        
        //$LASTPOS=11001128;//kernel.Keys:1128
        if (_this.stats[i]>0) {
          //$LASTPOS=11001145;//kernel.Keys:1145
          _this.stats[i]++;
          
        }
        //$LASTPOS=11001166;//kernel.Keys:1166
        if (_this.stats[i]==- 1) {
          //$LASTPOS=11001184;//kernel.Keys:1184
          _this.stats[i]=1;
        }
        
      }
      
      _thread.retVal=_this;return;
    },
    keydown :function _trc_Keys_keydown(e) {
      "use strict";
      var _this=this;
      var s;
      
      //$LASTPOS=11001222;//kernel.Keys:1222
      s = _this.stats[e.keyCode];
      //$LASTPOS=11001250;//kernel.Keys:1250
      if (! s) {
        //$LASTPOS=11001268;//kernel.Keys:1268
        _this.stats[e.keyCode]=1;
        
      }
      //$LASTPOS=11001298;//kernel.Keys:1298
      Tonyu.globals.$InputDevice.handleListeners();
    },
    fiber$keydown :function _trc_Keys_f_keydown(_thread,e) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var s;
      
      //$LASTPOS=11001222;//kernel.Keys:1222
      s = _this.stats[e.keyCode];
      //$LASTPOS=11001250;//kernel.Keys:1250
      if (! s) {
        //$LASTPOS=11001268;//kernel.Keys:1268
        _this.stats[e.keyCode]=1;
        
      }
      //$LASTPOS=11001298;//kernel.Keys:1298
      Tonyu.globals.$InputDevice.handleListeners();
      
      _thread.retVal=_this;return;
    },
    keyup :function _trc_Keys_keyup(e) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=11001348;//kernel.Keys:1348
      _this.stats[e.keyCode]=0;
      //$LASTPOS=11001372;//kernel.Keys:1372
      Tonyu.globals.$InputDevice.handleListeners();
    },
    fiber$keyup :function _trc_Keys_f_keyup(_thread,e) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=11001348;//kernel.Keys:1348
      _this.stats[e.keyCode]=0;
      //$LASTPOS=11001372;//kernel.Keys:1372
      Tonyu.globals.$InputDevice.handleListeners();
      
      _thread.retVal=_this;return;
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"getkey":{"nowait":false},"update":{"nowait":false},"keydown":{"nowait":false},"keyup":{"nowait":false}}}
});
Tonyu.klass.define({
  fullName: 'kernel.BaseActor',
  shortName: 'BaseActor',
  namespace: 'kernel',
  includes: [Tonyu.classes.kernel.MathMod,Tonyu.classes.kernel.EventMod,Tonyu.classes.kernel.TextRectMod,Tonyu.classes.kernel.OneframeSpriteMod,Tonyu.classes.kernel.ThreadGroupMod,Tonyu.classes.kernel.EventHandlerCaller],
  methods: {
    main :function _trc_BaseActor_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_BaseActor_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    initialize :function _trc_BaseActor_initialize(x,y,p) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=12000248;//kernel.BaseActor:248
      _this._th=Tonyu.globals.$Boot.schedule(_this,"main",[]);
      //$LASTPOS=12000293;//kernel.BaseActor:293
      _this.registerEventHandler("screenOut",new Tonyu.classes.kernel.ScreenOutHandler);
      //$LASTPOS=12000358;//kernel.BaseActor:358
      _this.registerEventHandler("crashTo",new Tonyu.classes.kernel.CrashToHandler);
      //$LASTPOS=12000419;//kernel.BaseActor:419
      _this.registerEventHandler("within",new Tonyu.classes.kernel.WithinHandler);
      //$LASTPOS=12000483;//kernel.BaseActor:483
      if (typeof  x=="object") {
        //$LASTPOS=12000507;//kernel.BaseActor:507
        Tonyu.extend(_this,x);
      } else {
        //$LASTPOS=12000539;//kernel.BaseActor:539
        if (typeof  x=="number") {
          //$LASTPOS=12000574;//kernel.BaseActor:574
          _this.x=x;
          //$LASTPOS=12000593;//kernel.BaseActor:593
          _this.y=y;
          //$LASTPOS=12000612;//kernel.BaseActor:612
          _this.p=p;
          
        }
      }
      //$LASTPOS=12000634;//kernel.BaseActor:634
      if (_this.scaleX==null) {
        //$LASTPOS=12000652;//kernel.BaseActor:652
        _this.scaleX=1;
      }
      //$LASTPOS=12000667;//kernel.BaseActor:667
      if (_this.rotation==null) {
        //$LASTPOS=12000687;//kernel.BaseActor:687
        _this.rotation=0;
      }
      //$LASTPOS=12000704;//kernel.BaseActor:704
      if (_this.rotate==null) {
        //$LASTPOS=12000722;//kernel.BaseActor:722
        _this.rotate=0;
      }
      //$LASTPOS=12000737;//kernel.BaseActor:737
      if (_this.alpha==null) {
        //$LASTPOS=12000754;//kernel.BaseActor:754
        _this.alpha=255;
      }
      //$LASTPOS=12000770;//kernel.BaseActor:770
      if (_this.zOrder==null) {
        //$LASTPOS=12000788;//kernel.BaseActor:788
        _this.zOrder=0;
      }
      //$LASTPOS=12000803;//kernel.BaseActor:803
      if (_this.age==null) {
        //$LASTPOS=12000818;//kernel.BaseActor:818
        _this.age=0;
      }
      //$LASTPOS=12000830;//kernel.BaseActor:830
      if (_this.anim!=null&&typeof  _this.anim=="object") {
        //$LASTPOS=12000881;//kernel.BaseActor:881
        _this.animMode=true;
        //$LASTPOS=12000905;//kernel.BaseActor:905
        _this.animFrame=0;
        
      } else {
        //$LASTPOS=12000939;//kernel.BaseActor:939
        _this.animMode=false;
        
      }
      //$LASTPOS=12000967;//kernel.BaseActor:967
      if (_this.animFps==null) {
        //$LASTPOS=12000986;//kernel.BaseActor:986
        _this.animFps=1;
      }
    },
    extend :function _trc_BaseActor_extend(obj) {
      "use strict";
      var _this=this;
      
      return Tonyu.extend(_this,obj);
    },
    print :function _trc_BaseActor_print(pt) {
      "use strict";
      var _this=this;
      var mergedArg;
      var argCount;
      var printCount;
      
      //$LASTPOS=12001090;//kernel.BaseActor:1090
      console.log.apply(console,arguments);
      //$LASTPOS=12001133;//kernel.BaseActor:1133
      mergedArg = "";
      //$LASTPOS=12001156;//kernel.BaseActor:1156
      if (Tonyu.globals.$consolePanel) {
        //$LASTPOS=12001184;//kernel.BaseActor:1184
        //$LASTPOS=12001188;//kernel.BaseActor:1188
        argCount = 0;
        while(argCount<arguments.length) {
          {
            //$LASTPOS=12001255;//kernel.BaseActor:1255
            mergedArg=mergedArg+arguments[argCount]+" ";
          }
          argCount++;
        }
        //$LASTPOS=12001320;//kernel.BaseActor:1320
        _this.splits=mergedArg.split("\n");
        //$LASTPOS=12001359;//kernel.BaseActor:1359
        //$LASTPOS=12001363;//kernel.BaseActor:1363
        printCount = 0;
        while(printCount<_this.splits.length) {
          {
            //$LASTPOS=12001433;//kernel.BaseActor:1433
            Tonyu.globals.$consolePanel.scroll(0,20);
            //$LASTPOS=12001474;//kernel.BaseActor:1474
            Tonyu.globals.$consolePanel.setFillStyle("white");
            //$LASTPOS=12001524;//kernel.BaseActor:1524
            Tonyu.globals.$consolePanel.fillText(_this.splits[printCount],0,Tonyu.globals.$consolePrintY,20,"left");
          }
          printCount++;
        }
        
      }
    },
    setAnimFps :function _trc_BaseActor_setAnimFps(f) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=12001647;//kernel.BaseActor:1647
      _this.animFps=f;
      //$LASTPOS=12001668;//kernel.BaseActor:1668
      _this.animFrame=0;
      //$LASTPOS=12001691;//kernel.BaseActor:1691
      _this.animMode=true;
    },
    startAnim :function _trc_BaseActor_startAnim() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=12001741;//kernel.BaseActor:1741
      _this.animMode=true;
    },
    stopAnim :function _trc_BaseActor_stopAnim() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=12001790;//kernel.BaseActor:1790
      _this.animMode=false;
    },
    update :function _trc_BaseActor_update() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=12001832;//kernel.BaseActor:1832
      _this.onUpdate();
      //$LASTPOS=12001849;//kernel.BaseActor:1849
      if (null) {
        //$LASTPOS=12001872;//kernel.BaseActor:1872
        null.suspend();
        //$LASTPOS=12001900;//kernel.BaseActor:1900
        if (Tonyu.globals.$Scheduler) {
          //$LASTPOS=12001916;//kernel.BaseActor:1916
          Tonyu.globals.$Scheduler.addToNext(null);
        }
        
      }
    },
    fiber$update :function _trc_BaseActor_f_update(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=12001832;//kernel.BaseActor:1832
      _this.onUpdate();
      //$LASTPOS=12001849;//kernel.BaseActor:1849
      if (_thread) {
        //$LASTPOS=12001872;//kernel.BaseActor:1872
        _thread.suspend();
        //$LASTPOS=12001900;//kernel.BaseActor:1900
        if (Tonyu.globals.$Scheduler) {
          //$LASTPOS=12001916;//kernel.BaseActor:1916
          Tonyu.globals.$Scheduler.addToNext(_thread);
        }
        
      }
      
      _thread.retVal=_this;return;
    },
    onUpdate :function _trc_BaseActor_onUpdate() {
      "use strict";
      var _this=this;
      
    },
    updateEx :function _trc_BaseActor_updateEx(updateT) {
      "use strict";
      var _this=this;
      var updateCount;
      
      //$LASTPOS=12002010;//kernel.BaseActor:2010
      //$LASTPOS=12002014;//kernel.BaseActor:2014
      updateCount = 0;
      while(updateCount<updateT) {
        {
          //$LASTPOS=12002077;//kernel.BaseActor:2077
          _this.update();
        }
        updateCount++;
      }
    },
    fiber$updateEx :function _trc_BaseActor_f_updateEx(_thread,updateT) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var updateCount;
      
      
      _thread.enter(function _trc_BaseActor_ent_updateEx(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=12002010;//kernel.BaseActor:2010
            //$LASTPOS=12002014;//kernel.BaseActor:2014
            updateCount = 0;;
          case 1:
            if (!(updateCount<updateT)) { __pc=3; break; }
            //$LASTPOS=12002077;//kernel.BaseActor:2077
            _this.fiber$update(_thread);
            __pc=2;return;
          case 2:
            
            updateCount++;
            __pc=1;break;
          case 3:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    getkey :function _trc_BaseActor_getkey(k) {
      "use strict";
      var _this=this;
      
      return Tonyu.globals.$Keys.getkey(k);
    },
    hitTo :function _trc_BaseActor_hitTo(t) {
      "use strict";
      var _this=this;
      
      return _this.crashTo(t);
    },
    all :function _trc_BaseActor_all(c) {
      "use strict";
      var _this=this;
      var res;
      
      //$LASTPOS=12002220;//kernel.BaseActor:2220
      res = new Tonyu.classes.kernel.TQuery;
      //$LASTPOS=12002245;//kernel.BaseActor:2245
      if (arguments.length>0&&typeof  c!="function") {
        return res;
        
      }
      //$LASTPOS=12002328;//kernel.BaseActor:2328
      Tonyu.globals.$Sprites.sprites.forEach((function anonymous_2353(s) {
        
        //$LASTPOS=12002369;//kernel.BaseActor:2369
        if (s===_this) {
          return _this;
        }
        //$LASTPOS=12002400;//kernel.BaseActor:2400
        if (! c||s instanceof c) {
          //$LASTPOS=12002441;//kernel.BaseActor:2441
          res.push(s);
          
        }
      }));
      return res;
    },
    allCrash :function _trc_BaseActor_allCrash(t) {
      "use strict";
      var _this=this;
      var res;
      var sp;
      var t1;
      
      //$LASTPOS=12002548;//kernel.BaseActor:2548
      res = new Tonyu.classes.kernel.TQuery;
      //$LASTPOS=12002573;//kernel.BaseActor:2573
      sp = _this;
      //$LASTPOS=12002610;//kernel.BaseActor:2610
      t1 = _this.getCrashRect();
      //$LASTPOS=12002638;//kernel.BaseActor:2638
      if (! t1) {
        return res;
      }
      //$LASTPOS=12002664;//kernel.BaseActor:2664
      Tonyu.globals.$Sprites.sprites.forEach((function anonymous_2689(s) {
        var t2;
        
        //$LASTPOS=12002705;//kernel.BaseActor:2705
        t2;
        //$LASTPOS=12002722;//kernel.BaseActor:2722
        if (s!==_this&&! s.excludeFromAll&&s instanceof t&&(t2=s.getCrashRect())&&Math.abs(t1.x-t2.x)*2<t1.width+t2.width&&Math.abs(t1.y-t2.y)*2<t1.height+t2.height) {
          //$LASTPOS=12002948;//kernel.BaseActor:2948
          res.push(s);
          
        }
      }));
      return res;
    },
    crashTo :function _trc_BaseActor_crashTo(t) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=12003028;//kernel.BaseActor:3028
      if (! t) {
        return false;
      }
      //$LASTPOS=12003055;//kernel.BaseActor:3055
      if (typeof  t=="function") {
        return _this.allCrash(t)[0];
        
      }
      return _this.crashTo1(t);
    },
    crashTo1 :function _trc_BaseActor_crashTo1(t) {
      "use strict";
      var _this=this;
      var t1;
      var t2;
      
      //$LASTPOS=12003178;//kernel.BaseActor:3178
      if (! t||t._isDead) {
        return false;
      }
      //$LASTPOS=12003306;//kernel.BaseActor:3306
      t1 = _this.getCrashRect();
      //$LASTPOS=12003334;//kernel.BaseActor:3334
      t2 = t.getCrashRect();
      return t1&&t2&&Math.abs(t1.x-t2.x)*2<t1.width+t2.width&&Math.abs(t1.y-t2.y)*2<t1.height+t2.height;
    },
    crashToChecker :function _trc_BaseActor_crashToChecker(d,f) {
      "use strict";
      var _this=this;
      var obj;
      var _it_133;
      
      //$LASTPOS=12003643;//kernel.BaseActor:3643
      while (true) {
        //$LASTPOS=12003665;//kernel.BaseActor:3665
        if (typeof  d=="function") {
          //$LASTPOS=12003704;//kernel.BaseActor:3704
          _it_133=Tonyu.iterator(_this.allCrash(d),1);
          while(_it_133.next()) {
            obj=_it_133[0];
            
            //$LASTPOS=12003746;//kernel.BaseActor:3746
            _this.callEventHandler(f,[obj]);
            
          }
          
        } else {
          //$LASTPOS=12003803;//kernel.BaseActor:3803
          if (_this.crashTo(d)) {
            //$LASTPOS=12003832;//kernel.BaseActor:3832
            _this.callEventHandler(f,[d]);
            
          }
        }
        //$LASTPOS=12003877;//kernel.BaseActor:3877
        _this.update();
        
      }
    },
    fiber$crashToChecker :function _trc_BaseActor_f_crashToChecker(_thread,d,f) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var obj;
      var _it_133;
      
      
      _thread.enter(function _trc_BaseActor_ent_crashToChecker(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=12003643;//kernel.BaseActor:3643
          case 1:
            //$LASTPOS=12003665;//kernel.BaseActor:3665
            if (!(typeof  d=="function")) { __pc=5; break; }
            //$LASTPOS=12003704;//kernel.BaseActor:3704
            _it_133=Tonyu.iterator(_this.allCrash(d),1);
          case 2:
            if (!(_it_133.next())) { __pc=4; break; }
            obj=_it_133[0];
            
            //$LASTPOS=12003746;//kernel.BaseActor:3746
            _this.fiber$callEventHandler(_thread, f, [obj]);
            __pc=3;return;
          case 3:
            
            __pc=2;break;
          case 4:
            
            __pc=8;break;
          case 5:
            //$LASTPOS=12003803;//kernel.BaseActor:3803
            if (!(_this.crashTo(d))) { __pc=7; break; }
            //$LASTPOS=12003832;//kernel.BaseActor:3832
            _this.fiber$callEventHandler(_thread, f, [d]);
            __pc=6;return;
          case 6:
            
          case 7:
            
          case 8:
            
            //$LASTPOS=12003877;//kernel.BaseActor:3877
            _this.fiber$update(_thread);
            __pc=9;return;
          case 9:
            
            __pc=1;break;
          case 10:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    getCrashRect :function _trc_BaseActor_getCrashRect() {
      "use strict";
      var _this=this;
      var actWidth;
      var actHeight;
      
      //$LASTPOS=12003928;//kernel.BaseActor:3928
      actWidth = _this.width*_this.scaleX;actHeight;
      //$LASTPOS=12003971;//kernel.BaseActor:3971
      if (typeof  _this.scaleY==="undefined") {
        //$LASTPOS=12004013;//kernel.BaseActor:4013
        actHeight=_this.height*_this.scaleX;
        
      } else {
        //$LASTPOS=12004059;//kernel.BaseActor:4059
        actHeight=_this.height*_this.scaleY;
        
      }
      return typeof  _this.x=="number"&&typeof  _this.y=="number"&&typeof  _this.width=="number"&&typeof  _this.height=="number"&&{x: _this.x,y: _this.y,width: Math.abs(actWidth),height: Math.abs(actHeight)};
    },
    allWithin :function _trc_BaseActor_allWithin(t,distance) {
      "use strict";
      var _this=this;
      var res;
      var sp;
      var t1;
      
      //$LASTPOS=12004320;//kernel.BaseActor:4320
      res = new Tonyu.classes.kernel.TQuery;
      //$LASTPOS=12004345;//kernel.BaseActor:4345
      sp = _this;
      //$LASTPOS=12004382;//kernel.BaseActor:4382
      t1 = _this.getCrashRect();
      //$LASTPOS=12004410;//kernel.BaseActor:4410
      if (! t1) {
        return res;
      }
      //$LASTPOS=12004436;//kernel.BaseActor:4436
      Tonyu.globals.$Sprites.sprites.forEach((function anonymous_4461(s) {
        var t2;
        
        //$LASTPOS=12004477;//kernel.BaseActor:4477
        t2;
        //$LASTPOS=12004494;//kernel.BaseActor:4494
        if (s!==_this&&! s.excludeFromAll&&s instanceof t&&Math.sqrt(Math.abs(_this.x-s.x)*Math.abs(_this.x-s.x)+Math.abs(_this.y-s.y)*Math.abs(_this.y-s.y))<distance) {
          //$LASTPOS=12004679;//kernel.BaseActor:4679
          res.push(s);
          
        }
      }));
      return res;
    },
    within :function _trc_BaseActor_within(t,distance) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=12004770;//kernel.BaseActor:4770
      if (! t) {
        return false;
      }
      //$LASTPOS=12004796;//kernel.BaseActor:4796
      if (typeof  t=="function") {
        return _this.allWithin(t,distance)[0];
        
      }
      return _this.within1(t,distance);
    },
    within1 :function _trc_BaseActor_within1(t,distance) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=12004942;//kernel.BaseActor:4942
      if (! t||t._isDead) {
        return false;
      }
      //$LASTPOS=12004981;//kernel.BaseActor:4981
      if (Math.sqrt(Math.abs(_this.x-t.x)*Math.abs(_this.x-t.x)+Math.abs(_this.y-t.y)*Math.abs(_this.y-t.y))<distance) {
        return true;
        
      }
      return false;
    },
    withinChecker :function _trc_BaseActor_withinChecker(d,r,f) {
      "use strict";
      var _this=this;
      var obj;
      var _it_143;
      
      //$LASTPOS=12005151;//kernel.BaseActor:5151
      while (true) {
        //$LASTPOS=12005173;//kernel.BaseActor:5173
        if (typeof  d=="function") {
          //$LASTPOS=12005212;//kernel.BaseActor:5212
          _it_143=Tonyu.iterator(_this.allWithin(d,r),1);
          while(_it_143.next()) {
            obj=_it_143[0];
            
            //$LASTPOS=12005257;//kernel.BaseActor:5257
            _this.print(r);
            //$LASTPOS=12005284;//kernel.BaseActor:5284
            f(obj);
            
          }
          
        } else {
          //$LASTPOS=12005322;//kernel.BaseActor:5322
          if (_this.within(d,r)) {
            //$LASTPOS=12005352;//kernel.BaseActor:5352
            f(d);
            
          }
        }
        //$LASTPOS=12005378;//kernel.BaseActor:5378
        _this.update();
        
      }
    },
    fiber$withinChecker :function _trc_BaseActor_f_withinChecker(_thread,d,r,f) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var obj;
      var _it_143;
      
      
      _thread.enter(function _trc_BaseActor_ent_withinChecker(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=12005151;//kernel.BaseActor:5151
          case 1:
            //$LASTPOS=12005173;//kernel.BaseActor:5173
            if (typeof  d=="function") {
              //$LASTPOS=12005212;//kernel.BaseActor:5212
              _it_143=Tonyu.iterator(_this.allWithin(d,r),1);
              while(_it_143.next()) {
                obj=_it_143[0];
                
                //$LASTPOS=12005257;//kernel.BaseActor:5257
                _this.print(r);
                //$LASTPOS=12005284;//kernel.BaseActor:5284
                f(obj);
                
              }
              
            } else {
              //$LASTPOS=12005322;//kernel.BaseActor:5322
              if (_this.within(d,r)) {
                //$LASTPOS=12005352;//kernel.BaseActor:5352
                f(d);
                
              }
            }
            //$LASTPOS=12005378;//kernel.BaseActor:5378
            _this.fiber$update(_thread);
            __pc=2;return;
          case 2:
            
            __pc=1;break;
          case 3:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    watchHit :function _trc_BaseActor_watchHit(typeA,typeB,onHit) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=12005442;//kernel.BaseActor:5442
      Tonyu.globals.$Sprites.watchHit(typeA,typeB,(function anonymous_5475(a,b) {
        
        //$LASTPOS=12005493;//kernel.BaseActor:5493
        onHit.apply(_this,[a,b]);
      }));
    },
    currentThreadGroup :function _trc_BaseActor_currentThreadGroup() {
      "use strict";
      var _this=this;
      
      return Tonyu.globals.$Scheduler;
    },
    die :function _trc_BaseActor_die() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=12005647;//kernel.BaseActor:5647
      _this.killThreadGroup();
      //$LASTPOS=12005719;//kernel.BaseActor:5719
      _this.hide();
      //$LASTPOS=12005732;//kernel.BaseActor:5732
      _this.fireEvent("die");
      //$LASTPOS=12005755;//kernel.BaseActor:5755
      _this._isDead=true;
    },
    hide :function _trc_BaseActor_hide() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=12005934;//kernel.BaseActor:5934
      if (_this.layer&&typeof  _this.layer.remove=="function") {
        //$LASTPOS=12005989;//kernel.BaseActor:5989
        _this.layer.remove(_this);
        
      } else {
        //$LASTPOS=12006030;//kernel.BaseActor:6030
        Tonyu.globals.$Sprites.remove(_this);
        
      }
    },
    show :function _trc_BaseActor_show(x,y,p) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=12006091;//kernel.BaseActor:6091
      if (_this.layer&&typeof  _this.layer.add=="function") {
        //$LASTPOS=12006143;//kernel.BaseActor:6143
        _this.layer.add(_this);
        
      } else {
        //$LASTPOS=12006181;//kernel.BaseActor:6181
        Tonyu.globals.$Sprites.add(_this);
        
      }
      //$LASTPOS=12006213;//kernel.BaseActor:6213
      if (x!=null) {
        //$LASTPOS=12006226;//kernel.BaseActor:6226
        _this.x=x;
      }
      //$LASTPOS=12006241;//kernel.BaseActor:6241
      if (y!=null) {
        //$LASTPOS=12006254;//kernel.BaseActor:6254
        _this.y=y;
      }
      //$LASTPOS=12006269;//kernel.BaseActor:6269
      if (p!=null) {
        //$LASTPOS=12006282;//kernel.BaseActor:6282
        _this.p=p;
      }
    },
    detectShape :function _trc_BaseActor_detectShape() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=12006327;//kernel.BaseActor:6327
      if (typeof  _this.p!="number") {
        //$LASTPOS=12006362;//kernel.BaseActor:6362
        if (_this.text!=null) {
          return _this;
        }
        //$LASTPOS=12006395;//kernel.BaseActor:6395
        _this.p=0;
        
      }
      //$LASTPOS=12006412;//kernel.BaseActor:6412
      _this.p=Math.floor(_this.p);
      //$LASTPOS=12006434;//kernel.BaseActor:6434
      _this.pImg=Tonyu.globals.$Sprites.getImageList()[_this.p];
      //$LASTPOS=12006472;//kernel.BaseActor:6472
      if (! _this.pImg) {
        return _this;
      }
      //$LASTPOS=12006496;//kernel.BaseActor:6496
      _this.width=_this.pImg.width;
      //$LASTPOS=12006519;//kernel.BaseActor:6519
      _this.height=_this.pImg.height;
    },
    waitFor :function _trc_BaseActor_waitFor(f) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=12006562;//kernel.BaseActor:6562
      if (null) {
        //$LASTPOS=12006586;//kernel.BaseActor:6586
        null.waitFor(f);
        
      }
    },
    fiber$waitFor :function _trc_BaseActor_f_waitFor(_thread,f) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=12006562;//kernel.BaseActor:6562
      if (_thread) {
        //$LASTPOS=12006586;//kernel.BaseActor:6586
        _thread.waitFor(f);
        
      }
      
      _thread.retVal=_this;return;
    },
    isDead :function _trc_BaseActor_isDead() {
      "use strict";
      var _this=this;
      
      return _this._isDead;
    },
    animation :function _trc_BaseActor_animation() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=12006706;//kernel.BaseActor:6706
      _this.age++;
      //$LASTPOS=12006718;//kernel.BaseActor:6718
      if (_this.animMode&&_this.age%_this.animFps==0) {
        //$LASTPOS=12006759;//kernel.BaseActor:6759
        _this.p=_this.anim[_this.animFrame%_this.anim.length];
        //$LASTPOS=12006799;//kernel.BaseActor:6799
        _this.animFrame++;
        
      }
    },
    draw :function _trc_BaseActor_draw(ctx) {
      "use strict";
      var _this=this;
      var splitsText;
      var textCount;
      var rect;
      
      //$LASTPOS=12006848;//kernel.BaseActor:6848
      if (_this.x==null||_this.y==null||_this._isInvisible) {
        return _this;
      }
      //$LASTPOS=12006901;//kernel.BaseActor:6901
      _this.detectShape();
      //$LASTPOS=12006921;//kernel.BaseActor:6921
      if (_this.pImg) {
        //$LASTPOS=12006942;//kernel.BaseActor:6942
        ctx.save();
        //$LASTPOS=12006963;//kernel.BaseActor:6963
        ctx.translate(_this.x,_this.y);
        //$LASTPOS=12007107;//kernel.BaseActor:7107
        _this.animation();
        //$LASTPOS=12007129;//kernel.BaseActor:7129
        if (_this.rotation!=0) {
          //$LASTPOS=12007164;//kernel.BaseActor:7164
          ctx.rotate(_this.rotation/180*Math.PI);
          
        } else {
          //$LASTPOS=12007232;//kernel.BaseActor:7232
          ctx.rotate(_this.rotate/180*Math.PI);
          
        }
        //$LASTPOS=12007289;//kernel.BaseActor:7289
        if (typeof  _this.scaleY==="undefined") {
          //$LASTPOS=12007341;//kernel.BaseActor:7341
          ctx.scale(_this.scaleX,_this.scaleX);
          
        } else {
          //$LASTPOS=12007406;//kernel.BaseActor:7406
          ctx.scale(_this.scaleX,_this.scaleY);
          
        }
        //$LASTPOS=12007462;//kernel.BaseActor:7462
        ctx.globalAlpha=_this.alpha/255;
        //$LASTPOS=12007503;//kernel.BaseActor:7503
        ctx.drawImage(_this.pImg.image,_this.pImg.x,_this.pImg.y,_this.pImg.width,_this.pImg.height,- _this.width/2,- _this.height/2,_this.width,_this.height);
        //$LASTPOS=12007635;//kernel.BaseActor:7635
        ctx.restore();
        
      } else {
        //$LASTPOS=12007662;//kernel.BaseActor:7662
        if (_this.text!==null&&_this.text!==undefined) {
          //$LASTPOS=12007710;//kernel.BaseActor:7710
          splitsText = (_this.text+"").split("\n");
          //$LASTPOS=12007757;//kernel.BaseActor:7757
          _this.drawY=_this.y;
          //$LASTPOS=12007775;//kernel.BaseActor:7775
          if (! _this.size) {
            //$LASTPOS=12007786;//kernel.BaseActor:7786
            _this.size=15;
          }
          //$LASTPOS=12007804;//kernel.BaseActor:7804
          if (! _this.align) {
            //$LASTPOS=12007816;//kernel.BaseActor:7816
            _this.align="center";
          }
          //$LASTPOS=12007841;//kernel.BaseActor:7841
          if (! _this.fillStyle) {
            //$LASTPOS=12007857;//kernel.BaseActor:7857
            _this.fillStyle="white";
          }
          //$LASTPOS=12007885;//kernel.BaseActor:7885
          if (_this.font) {
            //$LASTPOS=12007895;//kernel.BaseActor:7895
            ctx.font=_this.size+"px "+_this.font;
          }
          //$LASTPOS=12007930;//kernel.BaseActor:7930
          ctx.fillStyle=_this.fillStyle;
          //$LASTPOS=12007964;//kernel.BaseActor:7964
          ctx.globalAlpha=_this.alpha/255;
          //$LASTPOS=12008005;//kernel.BaseActor:8005
          _this.height=0;
          //$LASTPOS=12008014;//kernel.BaseActor:8014
          _this.width=0;
          //$LASTPOS=12008032;//kernel.BaseActor:8032
          //$LASTPOS=12008036;//kernel.BaseActor:8036
          textCount = 0;
          while(textCount<splitsText.length) {
            {
              //$LASTPOS=12008107;//kernel.BaseActor:8107
              rect = _this.drawTextRect(ctx,splitsText[textCount],_this.x,_this.drawY,_this.size,_this.align,"fill");
              //$LASTPOS=12008203;//kernel.BaseActor:8203
              if (_this.width<rect.w) {
                //$LASTPOS=12008220;//kernel.BaseActor:8220
                _this.width=rect.w;
              }
              //$LASTPOS=12008247;//kernel.BaseActor:8247
              _this.height+=rect.h;
              //$LASTPOS=12008276;//kernel.BaseActor:8276
              _this.drawY+=_this.size;
            }
            textCount++;
          }
          
        }
      }
      //$LASTPOS=12008312;//kernel.BaseActor:8312
      if (_this._fukidashi) {
        //$LASTPOS=12008339;//kernel.BaseActor:8339
        if (_this._fukidashi.c>0) {
          //$LASTPOS=12008374;//kernel.BaseActor:8374
          _this._fukidashi.c--;
          //$LASTPOS=12008403;//kernel.BaseActor:8403
          ctx.fillStyle="white";
          //$LASTPOS=12008439;//kernel.BaseActor:8439
          ctx.strokeStyle="black";
          //$LASTPOS=12008477;//kernel.BaseActor:8477
          _this.fukidashi(ctx,_this._fukidashi.text,_this.x,_this.y-_this.height/2-10,_this._fukidashi.size);
          
        }
        
      }
    },
    asyncResult :function _trc_BaseActor_asyncResult() {
      "use strict";
      var _this=this;
      
      return Tonyu.asyncResult();
    },
    runAsync :function _trc_BaseActor_runAsync(f) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=12008680;//kernel.BaseActor:8680
      if (! null) {
        throw new Error("runAsync should run in wait mode");
        
      }
      //$LASTPOS=12008752;//kernel.BaseActor:8752
      null.runAsync(f);
    },
    fiber$runAsync :function _trc_BaseActor_f_runAsync(_thread,f) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=12008680;//kernel.BaseActor:8680
      if (! _thread) {
        throw new Error("runAsync should run in wait mode");
        
      }
      //$LASTPOS=12008752;//kernel.BaseActor:8752
      _thread.runAsync(f);
      
      _thread.retVal=_this;return;
    },
    screenOut :function _trc_BaseActor_screenOut(a) {
      "use strict";
      var _this=this;
      var r;
      var viewX;
      var viewY;
      
      //$LASTPOS=12008834;//kernel.BaseActor:8834
      if (! a) {
        //$LASTPOS=12008842;//kernel.BaseActor:8842
        a=0;
      }
      //$LASTPOS=12008852;//kernel.BaseActor:8852
      r = 0;
      //$LASTPOS=12008866;//kernel.BaseActor:8866
      viewX = Tonyu.globals.$Sprites.sx;viewY = Tonyu.globals.$Sprites.sy;
      //$LASTPOS=12008912;//kernel.BaseActor:8912
      if (_this.x<viewX+a) {
        //$LASTPOS=12008941;//kernel.BaseActor:8941
        r+=viewX+a-_this.x;
      }
      //$LASTPOS=12008960;//kernel.BaseActor:8960
      if (_this.y<viewY+a) {
        //$LASTPOS=12008989;//kernel.BaseActor:8989
        r+=viewY+a-_this.y;
      }
      //$LASTPOS=12009008;//kernel.BaseActor:9008
      if (_this.x>Tonyu.globals.$screenWidth+viewX-a) {
        //$LASTPOS=12009037;//kernel.BaseActor:9037
        r+=_this.x-(Tonyu.globals.$screenWidth+viewX-a);
      }
      //$LASTPOS=12009072;//kernel.BaseActor:9072
      if (_this.y>Tonyu.globals.$screenHeight+viewY-a) {
        //$LASTPOS=12009101;//kernel.BaseActor:9101
        r+=_this.y-(Tonyu.globals.$screenHeight+viewY-a);
      }
      return r;
    },
    fiber$screenOut :function _trc_BaseActor_f_screenOut(_thread,a) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var r;
      var viewX;
      var viewY;
      
      //$LASTPOS=12008834;//kernel.BaseActor:8834
      if (! a) {
        //$LASTPOS=12008842;//kernel.BaseActor:8842
        a=0;
      }
      //$LASTPOS=12008852;//kernel.BaseActor:8852
      r = 0;
      //$LASTPOS=12008866;//kernel.BaseActor:8866
      viewX = Tonyu.globals.$Sprites.sx;viewY = Tonyu.globals.$Sprites.sy;
      //$LASTPOS=12008912;//kernel.BaseActor:8912
      if (_this.x<viewX+a) {
        //$LASTPOS=12008941;//kernel.BaseActor:8941
        r+=viewX+a-_this.x;
      }
      //$LASTPOS=12008960;//kernel.BaseActor:8960
      if (_this.y<viewY+a) {
        //$LASTPOS=12008989;//kernel.BaseActor:8989
        r+=viewY+a-_this.y;
      }
      //$LASTPOS=12009008;//kernel.BaseActor:9008
      if (_this.x>Tonyu.globals.$screenWidth+viewX-a) {
        //$LASTPOS=12009037;//kernel.BaseActor:9037
        r+=_this.x-(Tonyu.globals.$screenWidth+viewX-a);
      }
      //$LASTPOS=12009072;//kernel.BaseActor:9072
      if (_this.y>Tonyu.globals.$screenHeight+viewY-a) {
        //$LASTPOS=12009101;//kernel.BaseActor:9101
        r+=_this.y-(Tonyu.globals.$screenHeight+viewY-a);
      }
      _thread.retVal=r;return;
      
      
      _thread.retVal=_this;return;
    },
    screenOutChecker :function _trc_BaseActor_screenOutChecker(d,f) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=12009231;//kernel.BaseActor:9231
      while (true) {
        //$LASTPOS=12009253;//kernel.BaseActor:9253
        while (true) {
          //$LASTPOS=12009279;//kernel.BaseActor:9279
          if (_this.screenOut()>d) {
            //$LASTPOS=12009315;//kernel.BaseActor:9315
            f();
            break;
            
            
          }
          //$LASTPOS=12009372;//kernel.BaseActor:9372
          _this.update();
          
        }
        //$LASTPOS=12009402;//kernel.BaseActor:9402
        while (true) {
          //$LASTPOS=12009428;//kernel.BaseActor:9428
          if (_this.screenOut()<=d) {
            break;
            
            
          }
          //$LASTPOS=12009500;//kernel.BaseActor:9500
          _this.update();
          
        }
        //$LASTPOS=12009530;//kernel.BaseActor:9530
        _this.update();
        
      }
    },
    fiber$screenOutChecker :function _trc_BaseActor_f_screenOutChecker(_thread,d,f) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.enter(function _trc_BaseActor_ent_screenOutChecker(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=12009231;//kernel.BaseActor:9231
          case 1:
            //$LASTPOS=12009253;//kernel.BaseActor:9253
          case 2:
            //$LASTPOS=12009279;//kernel.BaseActor:9279
            if (!(_this.screenOut()>d)) { __pc=3; break; }
            //$LASTPOS=12009315;//kernel.BaseActor:9315
            f();
            __pc=5; break;
            
          case 3:
            
            //$LASTPOS=12009372;//kernel.BaseActor:9372
            _this.fiber$update(_thread);
            __pc=4;return;
          case 4:
            
            __pc=2;break;
          case 5:
            
            //$LASTPOS=12009402;//kernel.BaseActor:9402
          case 6:
            //$LASTPOS=12009428;//kernel.BaseActor:9428
            if (!(_this.screenOut()<=d)) { __pc=7; break; }
            __pc=9; break;
            
          case 7:
            
            //$LASTPOS=12009500;//kernel.BaseActor:9500
            _this.fiber$update(_thread);
            __pc=8;return;
          case 8:
            
            __pc=6;break;
          case 9:
            
            //$LASTPOS=12009530;//kernel.BaseActor:9530
            _this.fiber$update(_thread);
            __pc=10;return;
          case 10:
            
            __pc=1;break;
          case 11:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    file :function _trc_BaseActor_file(path) {
      "use strict";
      var _this=this;
      var d;
      var files;
      
      //$LASTPOS=12009570;//kernel.BaseActor:9570
      d = Tonyu.currentProject.getDir();
      //$LASTPOS=12009612;//kernel.BaseActor:9612
      files = d.rel("files/");
      return FS.get(files.rel(path),{topDir: d});
    },
    fiber$file :function _trc_BaseActor_f_file(_thread,path) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var d;
      var files;
      
      //$LASTPOS=12009570;//kernel.BaseActor:9570
      d = Tonyu.currentProject.getDir();
      //$LASTPOS=12009612;//kernel.BaseActor:9612
      files = d.rel("files/");
      _thread.retVal=FS.get(files.rel(path),{topDir: d});return;
      
      
      _thread.retVal=_this;return;
    },
    waitInputDevice :function _trc_BaseActor_waitInputDevice(fl) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=12009719;//kernel.BaseActor:9719
      if (fl!==false) {
        //$LASTPOS=12009746;//kernel.BaseActor:9746
        if (! _this.origTG) {
          
          
        }
        //$LASTPOS=12009898;//kernel.BaseActor:9898
        _this.a=_this.asyncResult();
        //$LASTPOS=12009924;//kernel.BaseActor:9924
        Tonyu.globals.$InputDevice.addOnetimeListener(_this.a.receiver);
        //$LASTPOS=12009978;//kernel.BaseActor:9978
        _this.waitFor(_this.a);
        
      } else {
        //$LASTPOS=12010013;//kernel.BaseActor:10013
        if (_this.origTG) {
          
          
        }
        
      }
    },
    fiber$waitInputDevice :function _trc_BaseActor_f_waitInputDevice(_thread,fl) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.enter(function _trc_BaseActor_ent_waitInputDevice(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=12009719;//kernel.BaseActor:9719
            if (!(fl!==false)) { __pc=3; break; }
            //$LASTPOS=12009746;//kernel.BaseActor:9746
            if (!(! _this.origTG)) { __pc=1; break; }
            {
              //$LASTPOS=12009800;//kernel.BaseActor:9800
              _this.origTG=_thread.group;
              //$LASTPOS=12009839;//kernel.BaseActor:9839
              _thread.setGroup(null);
            }
          case 1:
            
            //$LASTPOS=12009898;//kernel.BaseActor:9898
            _this.a=_this.asyncResult();
            //$LASTPOS=12009924;//kernel.BaseActor:9924
            Tonyu.globals.$InputDevice.addOnetimeListener(_this.a.receiver);
            //$LASTPOS=12009978;//kernel.BaseActor:9978
            _this.fiber$waitFor(_thread, _this.a);
            __pc=2;return;
          case 2:
            
            __pc=5;break;
          case 3:
            //$LASTPOS=12010013;//kernel.BaseActor:10013
            if (!(_this.origTG)) { __pc=4; break; }
            {
              //$LASTPOS=12010066;//kernel.BaseActor:10066
              _thread.setGroup(_this.origTG);
              //$LASTPOS=12010109;//kernel.BaseActor:10109
              _this.origTG=null;
            }
          case 4:
            
          case 5:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    redrawScreen :function _trc_BaseActor_redrawScreen() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=12010182;//kernel.BaseActor:10182
      Tonyu.globals.$Sprites.draw(Tonyu.globals.$Screen.buf[0]);
      //$LASTPOS=12010218;//kernel.BaseActor:10218
      Tonyu.globals.$Screen.draw();
    },
    fiber$redrawScreen :function _trc_BaseActor_f_redrawScreen(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=12010182;//kernel.BaseActor:10182
      Tonyu.globals.$Sprites.draw(Tonyu.globals.$Screen.buf[0]);
      //$LASTPOS=12010218;//kernel.BaseActor:10218
      Tonyu.globals.$Screen.draw();
      
      _thread.retVal=_this;return;
    },
    color :function _trc_BaseActor_color(r,g,b) {
      "use strict";
      var _this=this;
      
      return "rgb("+[r,g,b].join(",")+")";
    },
    fiber$color :function _trc_BaseActor_f_color(_thread,r,g,b) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal="rgb("+[r,g,b].join(",")+")";return;
      
      
      _thread.retVal=_this;return;
    },
    loadPage :function _trc_BaseActor_loadPage(page,arg) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=12010927;//kernel.BaseActor:10927
      _this.all().die();
      //$LASTPOS=12010945;//kernel.BaseActor:10945
      new page(arg);
      //$LASTPOS=12010965;//kernel.BaseActor:10965
      _this.die();
    },
    fiber$loadPage :function _trc_BaseActor_f_loadPage(_thread,page,arg) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=12010927;//kernel.BaseActor:10927
      _this.all().die();
      //$LASTPOS=12010945;//kernel.BaseActor:10945
      new page(arg);
      //$LASTPOS=12010965;//kernel.BaseActor:10965
      _this.die();
      
      _thread.retVal=_this;return;
    },
    setVisible :function _trc_BaseActor_setVisible(v) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=12011000;//kernel.BaseActor:11000
      _this._isInvisible=! v;
    },
    fiber$setVisible :function _trc_BaseActor_f_setVisible(_thread,v) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=12011000;//kernel.BaseActor:11000
      _this._isInvisible=! v;
      
      _thread.retVal=_this;return;
    },
    appear :function _trc_BaseActor_appear(o) {
      "use strict";
      var _this=this;
      
      return o;
    },
    fiber$appear :function _trc_BaseActor_f_appear(_thread,o) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=o;return;
      
      
      _thread.retVal=_this;return;
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"extend":{"nowait":true},"print":{"nowait":true},"setAnimFps":{"nowait":true},"startAnim":{"nowait":true},"stopAnim":{"nowait":true},"update":{"nowait":false},"onUpdate":{"nowait":true},"updateEx":{"nowait":false},"getkey":{"nowait":true},"hitTo":{"nowait":true},"all":{"nowait":true},"allCrash":{"nowait":true},"crashTo":{"nowait":true},"crashTo1":{"nowait":true},"crashToChecker":{"nowait":false},"getCrashRect":{"nowait":true},"allWithin":{"nowait":true},"within":{"nowait":true},"within1":{"nowait":true},"withinChecker":{"nowait":false},"watchHit":{"nowait":true},"currentThreadGroup":{"nowait":true},"die":{"nowait":true},"hide":{"nowait":true},"show":{"nowait":true},"detectShape":{"nowait":true},"waitFor":{"nowait":false},"isDead":{"nowait":true},"animation":{"nowait":true},"draw":{"nowait":true},"asyncResult":{"nowait":true},"runAsync":{"nowait":false},"screenOut":{"nowait":false},"screenOutChecker":{"nowait":false},"file":{"nowait":false},"waitInputDevice":{"nowait":false},"redrawScreen":{"nowait":false},"color":{"nowait":false},"loadPage":{"nowait":false},"setVisible":{"nowait":false},"appear":{"nowait":false}}}
});
Tonyu.klass.define({
  fullName: 'kernel.EventHandler',
  shortName: 'EventHandler',
  namespace: 'kernel',
  superclass: Tonyu.classes.kernel.TObject,
  includes: [Tonyu.classes.kernel.EventHandlerCaller],
  methods: {
    main :function _trc_EventHandler_main() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=13000067;//kernel.EventHandler:67
      if (Tonyu.runMode) {
        //$LASTPOS=13000086;//kernel.EventHandler:86
        _this.listeners=[];
      }
    },
    fiber$main :function _trc_EventHandler_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=13000067;//kernel.EventHandler:67
      if (Tonyu.runMode) {
        //$LASTPOS=13000086;//kernel.EventHandler:86
        _this.listeners=[];
      }
      
      _thread.retVal=_this;return;
    },
    addListener :function _trc_EventHandler_addListener(f) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=13000126;//kernel.EventHandler:126
      if (_this.target&&(typeof  f)=="string") {
        //$LASTPOS=13000173;//kernel.EventHandler:173
        f=_this.target[f];
        
      }
      //$LASTPOS=13000198;//kernel.EventHandler:198
      if (typeof  f!="function") {
        throw new Error("Not a event listener: "+_this.target+" / "+f);
        
      }
      //$LASTPOS=13000287;//kernel.EventHandler:287
      _this.listeners.push(f);
      return {remove: (function anonymous_337() {
        
        //$LASTPOS=13000352;//kernel.EventHandler:352
        _this.removeListener(f);
      })};
    },
    fiber$addListener :function _trc_EventHandler_f_addListener(_thread,f) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=13000126;//kernel.EventHandler:126
      if (_this.target&&(typeof  f)=="string") {
        //$LASTPOS=13000173;//kernel.EventHandler:173
        f=_this.target[f];
        
      }
      //$LASTPOS=13000198;//kernel.EventHandler:198
      if (typeof  f!="function") {
        throw new Error("Not a event listener: "+_this.target+" / "+f);
        
      }
      //$LASTPOS=13000287;//kernel.EventHandler:287
      _this.listeners.push(f);
      
      _thread.enter(function _trc_EventHandler_ent_addListener(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            _thread.exit({remove: (function anonymous_337() {
              
              //$LASTPOS=13000352;//kernel.EventHandler:352
              _this.removeListener(f);
            })});return;
            _thread.exit(_this);return;
          }
        }
      });
    },
    removeListener :function _trc_EventHandler_removeListener(f) {
      "use strict";
      var _this=this;
      var i;
      
      //$LASTPOS=13000420;//kernel.EventHandler:420
      i = _this.listeners.indexOf(f);
      //$LASTPOS=13000453;//kernel.EventHandler:453
      _this.listeners.splice(i,1);
    },
    fiber$removeListener :function _trc_EventHandler_f_removeListener(_thread,f) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var i;
      
      //$LASTPOS=13000420;//kernel.EventHandler:420
      i = _this.listeners.indexOf(f);
      //$LASTPOS=13000453;//kernel.EventHandler:453
      _this.listeners.splice(i,1);
      
      _thread.retVal=_this;return;
    },
    fire :function _trc_EventHandler_fire(args) {
      "use strict";
      var _this=this;
      var t;
      var h;
      var _it_159;
      
      //$LASTPOS=13000499;//kernel.EventHandler:499
      if (_this.released) {
        return _this;
      }
      //$LASTPOS=13000526;//kernel.EventHandler:526
      t;
      //$LASTPOS=13000538;//kernel.EventHandler:538
      _it_159=Tonyu.iterator(_this.listeners,1);
      while(_it_159.next()) {
        h=_it_159[0];
        
        //$LASTPOS=13000782;//kernel.EventHandler:782
        _this.callEventHandler(h,args);
        
      }
    },
    fiber$fire :function _trc_EventHandler_f_fire(_thread,args) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var t;
      var h;
      var _it_159;
      
      //$LASTPOS=13000499;//kernel.EventHandler:499
      if (_this.released) {
        _thread.retVal=_this;return;
        
      }
      //$LASTPOS=13000526;//kernel.EventHandler:526
      t;
      
      _thread.enter(function _trc_EventHandler_ent_fire(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=13000538;//kernel.EventHandler:538
            _it_159=Tonyu.iterator(_this.listeners,1);
          case 1:
            if (!(_it_159.next())) { __pc=3; break; }
            h=_it_159[0];
            
            //$LASTPOS=13000782;//kernel.EventHandler:782
            _this.fiber$callEventHandler(_thread, h, args);
            __pc=2;return;
          case 2:
            
            __pc=1;break;
          case 3:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    release :function _trc_EventHandler_release() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=13000838;//kernel.EventHandler:838
      _this.released=true;
    },
    fiber$release :function _trc_EventHandler_f_release(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=13000838;//kernel.EventHandler:838
      _this.released=true;
      
      _thread.retVal=_this;return;
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"addListener":{"nowait":false},"removeListener":{"nowait":false},"fire":{"nowait":false},"release":{"nowait":false}}}
});
Tonyu.klass.define({
  fullName: 'kernel.ScreenOutHandler',
  shortName: 'ScreenOutHandler',
  namespace: 'kernel',
  superclass: Tonyu.classes.kernel.EventHandler,
  includes: [],
  methods: {
    main :function _trc_ScreenOutHandler_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_ScreenOutHandler_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    addListener :function _trc_ScreenOutHandler_addListener(d,f) {
      "use strict";
      var _this=this;
      var retThread;
      
      //$LASTPOS=14000049;//kernel.ScreenOutHandler:49
      retThread = _this.target.parallel("screenOutChecker",d,f);
      return {remove: (function anonymous_135() {
        
        //$LASTPOS=14000151;//kernel.ScreenOutHandler:151
        retThread.kill();
      })};
    },
    fiber$addListener :function _trc_ScreenOutHandler_f_addListener(_thread,d,f) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var retThread;
      
      //$LASTPOS=14000049;//kernel.ScreenOutHandler:49
      retThread = _this.target.parallel("screenOutChecker",d,f);
      _thread.retVal={remove: (function anonymous_135() {
        
        //$LASTPOS=14000151;//kernel.ScreenOutHandler:151
        retThread.kill();
      })};return;
      
      
      _thread.retVal=_this;return;
    },
    initialize :function _trc_ScreenOutHandler_initialize(param) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=14000210;//kernel.ScreenOutHandler:210
      Tonyu.classes.kernel.EventHandler.apply( _this, [param]);
      //$LASTPOS=14000228;//kernel.ScreenOutHandler:228
      _this.id=(Tonyu.globals.$idseq=(Tonyu.globals.$idseq||0)+1);
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"addListener":{"nowait":false},"new":{"nowait":false}}}
});
Tonyu.klass.define({
  fullName: 'kernel.WithinHandler',
  shortName: 'WithinHandler',
  namespace: 'kernel',
  superclass: Tonyu.classes.kernel.EventHandler,
  includes: [],
  methods: {
    main :function _trc_WithinHandler_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_WithinHandler_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    addListener :function _trc_WithinHandler_addListener(d,r,f) {
      "use strict";
      var _this=this;
      var retThread;
      
      //$LASTPOS=15000052;//kernel.WithinHandler:52
      retThread = _this.target.parallel("withinChecker",d,r,f);
      return {remove: (function anonymous_137() {
        
        //$LASTPOS=15000153;//kernel.WithinHandler:153
        retThread.kill();
      })};
    },
    fiber$addListener :function _trc_WithinHandler_f_addListener(_thread,d,r,f) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var retThread;
      
      //$LASTPOS=15000052;//kernel.WithinHandler:52
      retThread = _this.target.parallel("withinChecker",d,r,f);
      _thread.retVal={remove: (function anonymous_137() {
        
        //$LASTPOS=15000153;//kernel.WithinHandler:153
        retThread.kill();
      })};return;
      
      
      _thread.retVal=_this;return;
    },
    initialize :function _trc_WithinHandler_initialize(param) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=15000213;//kernel.WithinHandler:213
      Tonyu.classes.kernel.EventHandler.apply( _this, [param]);
      //$LASTPOS=15000232;//kernel.WithinHandler:232
      _this.id=(Tonyu.globals.$idseq=(Tonyu.globals.$idseq||0)+1);
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"addListener":{"nowait":false},"new":{"nowait":false}}}
});
Tonyu.klass.define({
  fullName: 'kernel.NoviceActor',
  shortName: 'NoviceActor',
  namespace: 'kernel',
  superclass: Tonyu.classes.kernel.BaseActor,
  includes: [],
  methods: {
    main :function _trc_NoviceActor_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_NoviceActor_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    sleep :function _trc_NoviceActor_sleep(n) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=16000050;//kernel.NoviceActor:50
      if (! n) {
        //$LASTPOS=16000057;//kernel.NoviceActor:57
        n=1;
      }
      //$LASTPOS=16000066;//kernel.NoviceActor:66
      //$LASTPOS=16000070;//kernel.NoviceActor:70
      n;
      while(n>0) {
        //$LASTPOS=16000081;//kernel.NoviceActor:81
        _this.update();
        n--;
      }
    },
    fiber$sleep :function _trc_NoviceActor_f_sleep(_thread,n) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=16000050;//kernel.NoviceActor:50
      if (! n) {
        //$LASTPOS=16000057;//kernel.NoviceActor:57
        n=1;
      }
      
      _thread.enter(function _trc_NoviceActor_ent_sleep(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=16000066;//kernel.NoviceActor:66
            //$LASTPOS=16000070;//kernel.NoviceActor:70
            n;;
          case 1:
            if (!(n>0)) { __pc=3; break; }
            //$LASTPOS=16000081;//kernel.NoviceActor:81
            _this.fiber$update(_thread);
            __pc=2;return;
          case 2:
            
            n--;
            __pc=1;break;
          case 3:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    initSprite :function _trc_NoviceActor_initSprite() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=16000113;//kernel.NoviceActor:113
      if (! _this._sprite) {
        //$LASTPOS=16000137;//kernel.NoviceActor:137
        _this._sprite=new Tonyu.classes.kernel.BaseActor({owner: _this});
        //$LASTPOS=16000207;//kernel.NoviceActor:207
        Tonyu.globals.$Sprites.add(_this);
        
      }
    },
    fiber$initSprite :function _trc_NoviceActor_f_initSprite(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=16000113;//kernel.NoviceActor:113
      if (! _this._sprite) {
        //$LASTPOS=16000137;//kernel.NoviceActor:137
        _this._sprite=new Tonyu.classes.kernel.BaseActor({owner: _this});
        //$LASTPOS=16000207;//kernel.NoviceActor:207
        Tonyu.globals.$Sprites.add(_this);
        
      }
      
      _thread.retVal=_this;return;
    },
    say :function _trc_NoviceActor_say(text,size) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=16000257;//kernel.NoviceActor:257
      if (! size) {
        //$LASTPOS=16000268;//kernel.NoviceActor:268
        size=15;
      }
      //$LASTPOS=16000281;//kernel.NoviceActor:281
      _this.initSprite();
      //$LASTPOS=16000299;//kernel.NoviceActor:299
      _this._sprite._fukidashi={text: text,size: size,c: 30};
    },
    fiber$say :function _trc_NoviceActor_f_say(_thread,text,size) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=16000257;//kernel.NoviceActor:257
      if (! size) {
        //$LASTPOS=16000268;//kernel.NoviceActor:268
        size=15;
      }
      
      _thread.enter(function _trc_NoviceActor_ent_say(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=16000281;//kernel.NoviceActor:281
            _this.fiber$initSprite(_thread);
            __pc=1;return;
          case 1:
            
            //$LASTPOS=16000299;//kernel.NoviceActor:299
            _this._sprite._fukidashi={text: text,size: size,c: 30};
            _thread.exit(_this);return;
          }
        }
      });
    },
    sprite :function _trc_NoviceActor_sprite(x,y,p) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=16000371;//kernel.NoviceActor:371
      _this.go(x,y,p);
    },
    fiber$sprite :function _trc_NoviceActor_f_sprite(_thread,x,y,p) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.enter(function _trc_NoviceActor_ent_sprite(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=16000371;//kernel.NoviceActor:371
            _this.fiber$go(_thread, x, y, p);
            __pc=1;return;
          case 1:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    show :function _trc_NoviceActor_show(x,y,p) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=16000403;//kernel.NoviceActor:403
      _this.go(x,y,p);
    },
    draw :function _trc_NoviceActor_draw(ctx) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=16000440;//kernel.NoviceActor:440
      _this._sprite.draw(ctx);
    },
    getCrashRect :function _trc_NoviceActor_getCrashRect() {
      "use strict";
      var _this=this;
      
      return _this._sprite.getCrashRect();
    },
    go :function _trc_NoviceActor_go(x,y,p) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=16000533;//kernel.NoviceActor:533
      _this.initSprite();
      //$LASTPOS=16000551;//kernel.NoviceActor:551
      _this._sprite.x=x;
      //$LASTPOS=16000568;//kernel.NoviceActor:568
      _this._sprite.y=y;
      //$LASTPOS=16000585;//kernel.NoviceActor:585
      if (p!=null) {
        //$LASTPOS=16000598;//kernel.NoviceActor:598
        _this._sprite.p=p;
      }
    },
    fiber$go :function _trc_NoviceActor_f_go(_thread,x,y,p) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.enter(function _trc_NoviceActor_ent_go(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=16000533;//kernel.NoviceActor:533
            _this.fiber$initSprite(_thread);
            __pc=1;return;
          case 1:
            
            //$LASTPOS=16000551;//kernel.NoviceActor:551
            _this._sprite.x=x;
            //$LASTPOS=16000568;//kernel.NoviceActor:568
            _this._sprite.y=y;
            //$LASTPOS=16000585;//kernel.NoviceActor:585
            if (p!=null) {
              //$LASTPOS=16000598;//kernel.NoviceActor:598
              _this._sprite.p=p;
            }
            _thread.exit(_this);return;
          }
        }
      });
    },
    change :function _trc_NoviceActor_change(p) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=16000646;//kernel.NoviceActor:646
      _this.initSprite();
      //$LASTPOS=16000664;//kernel.NoviceActor:664
      _this._sprite.p=p;
    },
    fiber$change :function _trc_NoviceActor_f_change(_thread,p) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.enter(function _trc_NoviceActor_ent_change(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=16000646;//kernel.NoviceActor:646
            _this.fiber$initSprite(_thread);
            __pc=1;return;
          case 1:
            
            //$LASTPOS=16000664;//kernel.NoviceActor:664
            _this._sprite.p=p;
            _thread.exit(_this);return;
          }
        }
      });
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"sleep":{"nowait":false},"initSprite":{"nowait":false},"say":{"nowait":false},"sprite":{"nowait":false},"show":{"nowait":true},"draw":{"nowait":true},"getCrashRect":{"nowait":true},"go":{"nowait":false},"change":{"nowait":false}}}
});
Tonyu.klass.define({
  fullName: 'kernel.MML',
  shortName: 'MML',
  namespace: 'kernel',
  superclass: Tonyu.classes.kernel.TObject,
  includes: [Tonyu.classes.kernel.MathMod],
  methods: {
    main :function _trc_MML_main() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=17000050;//kernel.MML:50
      _this.mmlBuf=[];
    },
    fiber$main :function _trc_MML_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=17000050;//kernel.MML:50
      _this.mmlBuf=[];
      
      _thread.retVal=_this;return;
    },
    play :function _trc_MML_play(mmls) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=17000081;//kernel.MML:81
      _this.mmlBuf.push(mmls);
      //$LASTPOS=17000105;//kernel.MML:105
      if (! _this.isPlaying()) {
        //$LASTPOS=17000134;//kernel.MML:134
        _this.playNext();
        
      }
    },
    fiber$play :function _trc_MML_f_play(_thread,mmls) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=17000081;//kernel.MML:81
      _this.mmlBuf.push(mmls);
      
      _thread.enter(function _trc_MML_ent_play(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=17000105;//kernel.MML:105
            if (!(! _this.isPlaying())) { __pc=2; break; }
            //$LASTPOS=17000134;//kernel.MML:134
            _this.fiber$playNext(_thread);
            __pc=1;return;
          case 1:
            
          case 2:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    playNext :function _trc_MML_playNext() {
      "use strict";
      var _this=this;
      var mml;
      
      //$LASTPOS=17000220;//kernel.MML:220
      if (_this.cTimeBase==null) {
        //$LASTPOS=17000241;//kernel.MML:241
        _this.cTimeBase=0;
      }
      //$LASTPOS=17000259;//kernel.MML:259
      if (_this.m) {
        //$LASTPOS=17000277;//kernel.MML:277
        _this.cTimeBase+=_this.m.currentTime;
        
      }
      //$LASTPOS=17000348;//kernel.MML:348
      mml = _this.mmlBuf.shift();
      //$LASTPOS=17000377;//kernel.MML:377
      if (! mml) {
        //$LASTPOS=17000398;//kernel.MML:398
        _this.m=null;
        //$LASTPOS=17000415;//kernel.MML:415
        _this.cTimeBase=0;
        return _this;
        
      }
      //$LASTPOS=17000457;//kernel.MML:457
      _this.mwav=Tonyu.globals.$WaveTable.get(0,0).play();
      //$LASTPOS=17000495;//kernel.MML:495
      _this.m=T("mml",{mml: mml},_this.mwav);
      //$LASTPOS=17000525;//kernel.MML:525
      _this.m.on("ended",Tonyu.bindFunc(_this,_this.playNext));
      //$LASTPOS=17000555;//kernel.MML:555
      _this.m.start();
      //$LASTPOS=17000571;//kernel.MML:571
      Tonyu.globals.$MMLS[_this.id()]=_this;
    },
    fiber$playNext :function _trc_MML_f_playNext(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var mml;
      
      //$LASTPOS=17000220;//kernel.MML:220
      if (_this.cTimeBase==null) {
        //$LASTPOS=17000241;//kernel.MML:241
        _this.cTimeBase=0;
      }
      //$LASTPOS=17000259;//kernel.MML:259
      if (_this.m) {
        //$LASTPOS=17000277;//kernel.MML:277
        _this.cTimeBase+=_this.m.currentTime;
        
      }
      //$LASTPOS=17000348;//kernel.MML:348
      mml = _this.mmlBuf.shift();
      //$LASTPOS=17000377;//kernel.MML:377
      if (! mml) {
        //$LASTPOS=17000398;//kernel.MML:398
        _this.m=null;
        //$LASTPOS=17000415;//kernel.MML:415
        _this.cTimeBase=0;
        _thread.retVal=_this;return;
        
        
      }
      //$LASTPOS=17000457;//kernel.MML:457
      _this.mwav=Tonyu.globals.$WaveTable.get(0,0).play();
      //$LASTPOS=17000495;//kernel.MML:495
      _this.m=T("mml",{mml: mml},_this.mwav);
      //$LASTPOS=17000525;//kernel.MML:525
      _this.m.on("ended",Tonyu.bindFunc(_this,_this.playNext));
      //$LASTPOS=17000555;//kernel.MML:555
      _this.m.start();
      //$LASTPOS=17000571;//kernel.MML:571
      Tonyu.globals.$MMLS[_this.id()]=_this;
      
      _thread.retVal=_this;return;
    },
    id :function _trc_MML_id() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=17000606;//kernel.MML:606
      if (! _this._id) {
        //$LASTPOS=17000616;//kernel.MML:616
        _this._id=_this.rnd()+"";
      }
      return _this._id;
    },
    fiber$id :function _trc_MML_f_id(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=17000606;//kernel.MML:606
      if (! _this._id) {
        //$LASTPOS=17000616;//kernel.MML:616
        _this._id=_this.rnd()+"";
      }
      _thread.retVal=_this._id;return;
      
      
      _thread.retVal=_this;return;
    },
    bufferCount :function _trc_MML_bufferCount() {
      "use strict";
      var _this=this;
      
      return _this.mmlBuf.length;
    },
    fiber$bufferCount :function _trc_MML_f_bufferCount(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=_this.mmlBuf.length;return;
      
      
      _thread.retVal=_this;return;
    },
    isPlaying :function _trc_MML_isPlaying() {
      "use strict";
      var _this=this;
      
      return _this.m;
    },
    fiber$isPlaying :function _trc_MML_f_isPlaying(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=_this.m;return;
      
      
      _thread.retVal=_this;return;
    },
    currentTime :function _trc_MML_currentTime() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=17000755;//kernel.MML:755
      if (_this.m) {
        return _this.m.currentTime+_this.cTimeBase;
      }
      return - 1;
    },
    fiber$currentTime :function _trc_MML_f_currentTime(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=17000755;//kernel.MML:755
      if (_this.m) {
        _thread.retVal=_this.m.currentTime+_this.cTimeBase;return;
        
      }
      _thread.retVal=- 1;return;
      
      
      _thread.retVal=_this;return;
    },
    stop :function _trc_MML_stop() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=17000829;//kernel.MML:829
      if (_this.m) {
        //$LASTPOS=17000847;//kernel.MML:847
        if (_this.mwav) {
          //$LASTPOS=17000872;//kernel.MML:872
          _this.mwav.pause();
          //$LASTPOS=17000899;//kernel.MML:899
          _this.mwav.stop();
          
        }
        //$LASTPOS=17000932;//kernel.MML:932
        _this.m.pause();
        //$LASTPOS=17000952;//kernel.MML:952
        _this.m.stop();
        //$LASTPOS=17000971;//kernel.MML:971
        _this.m=null;
        //$LASTPOS=17000988;//kernel.MML:988
        _this.mmlBuf=[];
        //$LASTPOS=17001056;//kernel.MML:1056
        delete Tonyu.globals.$MMLS[_this.id()];
        
      }
    },
    fiber$stop :function _trc_MML_f_stop(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=17000829;//kernel.MML:829
      if (_this.m) {
        //$LASTPOS=17000847;//kernel.MML:847
        if (_this.mwav) {
          //$LASTPOS=17000872;//kernel.MML:872
          _this.mwav.pause();
          //$LASTPOS=17000899;//kernel.MML:899
          _this.mwav.stop();
          
        }
        //$LASTPOS=17000932;//kernel.MML:932
        _this.m.pause();
        //$LASTPOS=17000952;//kernel.MML:952
        _this.m.stop();
        //$LASTPOS=17000971;//kernel.MML:971
        _this.m=null;
        //$LASTPOS=17000988;//kernel.MML:988
        _this.mmlBuf=[];
        //$LASTPOS=17001056;//kernel.MML:1056
        delete Tonyu.globals.$MMLS[_this.id()];
        
      }
      
      _thread.retVal=_this;return;
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"play":{"nowait":false},"playNext":{"nowait":false},"id":{"nowait":false},"bufferCount":{"nowait":false},"isPlaying":{"nowait":false},"currentTime":{"nowait":false},"stop":{"nowait":false}}}
});
Tonyu.klass.define({
  fullName: 'kernel.PlayMod',
  shortName: 'PlayMod',
  namespace: 'kernel',
  superclass: Tonyu.classes.kernel.BaseActor,
  includes: [],
  methods: {
    main :function _trc_PlayMod_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_PlayMod_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    initMML :function _trc_PlayMod_initMML() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=18000045;//kernel.PlayMod:45
      if (_this.mmlInited) {
        return _this;
      }
      //$LASTPOS=18000073;//kernel.PlayMod:73
      _this.mmlInited=true;
      //$LASTPOS=18000094;//kernel.PlayMod:94
      Tonyu.globals.$currentProject.requestPlugin("timbre");
      //$LASTPOS=18000140;//kernel.PlayMod:140
      if (! Tonyu.globals.$MMLS) {
        //$LASTPOS=18000162;//kernel.PlayMod:162
        Tonyu.globals.$MMLS={};
        //$LASTPOS=18000180;//kernel.PlayMod:180
        Tonyu.globals.$WaveTable=new Tonyu.classes.kernel.WaveTable;
        //$LASTPOS=18000214;//kernel.PlayMod:214
        Tonyu.globals.$Boot.on("stop",Tonyu.bindFunc(_this,_this.releaseMML));
        
      }
      //$LASTPOS=18000256;//kernel.PlayMod:256
      _this.on("die",(function anonymous_266() {
        
        //$LASTPOS=18000272;//kernel.PlayMod:272
        _this.play().stop();
      }));
    },
    releaseMML :function _trc_PlayMod_releaseMML() {
      "use strict";
      var _this=this;
      var k;
      var v;
      var _it_166;
      
      //$LASTPOS=18000322;//kernel.PlayMod:322
      if (Tonyu.globals.$MMLS) {
        //$LASTPOS=18000343;//kernel.PlayMod:343
        _it_166=Tonyu.iterator(Tonyu.globals.$MMLS,2);
        while(_it_166.next()) {
          k=_it_166[0];
          v=_it_166[1];
          
          //$LASTPOS=18000379;//kernel.PlayMod:379
          v.stop();
          
        }
        //$LASTPOS=18000407;//kernel.PlayMod:407
        Tonyu.globals.$MMLS=null;
        
      }
      //$LASTPOS=18000432;//kernel.PlayMod:432
      if (Tonyu.globals.$WaveTable) {
        //$LASTPOS=18000458;//kernel.PlayMod:458
        Tonyu.globals.$WaveTable.stop();
        //$LASTPOS=18000485;//kernel.PlayMod:485
        Tonyu.globals.$WaveTable=null;
        
      }
    },
    play :function _trc_PlayMod_play() {
      "use strict";
      var _this=this;
      var mmls;
      var i;
      
      //$LASTPOS=18000528;//kernel.PlayMod:528
      _this.initMML();
      //$LASTPOS=18000544;//kernel.PlayMod:544
      if (! _this._mml) {
        //$LASTPOS=18000555;//kernel.PlayMod:555
        _this._mml=new Tonyu.classes.kernel.MML;
      }
      //$LASTPOS=18000574;//kernel.PlayMod:574
      if (_this.isDead()||arguments.length==0) {
        return _this._mml;
      }
      //$LASTPOS=18000629;//kernel.PlayMod:629
      mmls = [];
      //$LASTPOS=18000647;//kernel.PlayMod:647
      //$LASTPOS=18000652;//kernel.PlayMod:652
      i = 0;
      while(i<arguments.length) {
        {
          //$LASTPOS=18000697;//kernel.PlayMod:697
          mmls.push(arguments[i]);
        }
        i++;
      }
      //$LASTPOS=18000734;//kernel.PlayMod:734
      _this._mml.play(mmls);
      //$LASTPOS=18000756;//kernel.PlayMod:756
      while (_this._mml.bufferCount()>2) {
        //$LASTPOS=18000796;//kernel.PlayMod:796
        _this.update();
        
      }
      return _this._mml;
    },
    fiber$play :function _trc_PlayMod_f_play(_thread) {
      "use strict";
      var _this=this;
      var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var mmls;
      var i;
      
      //$LASTPOS=18000528;//kernel.PlayMod:528
      _this.initMML();
      //$LASTPOS=18000544;//kernel.PlayMod:544
      if (! _this._mml) {
        //$LASTPOS=18000555;//kernel.PlayMod:555
        _this._mml=new Tonyu.classes.kernel.MML;
      }
      //$LASTPOS=18000574;//kernel.PlayMod:574
      if (_this.isDead()||_arguments.length==0) {
        _thread.retVal=_this._mml;return;
        
      }
      //$LASTPOS=18000629;//kernel.PlayMod:629
      mmls = [];
      //$LASTPOS=18000647;//kernel.PlayMod:647
      //$LASTPOS=18000652;//kernel.PlayMod:652
      i = 0;
      while(i<_arguments.length) {
        {
          //$LASTPOS=18000697;//kernel.PlayMod:697
          mmls.push(_arguments[i]);
        }
        i++;
      }
      //$LASTPOS=18000734;//kernel.PlayMod:734
      _this._mml.play(mmls);
      
      _thread.enter(function _trc_PlayMod_ent_play(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=18000756;//kernel.PlayMod:756
          case 1:
            if (!(_this._mml.bufferCount()>2)) { __pc=3; break; }
            //$LASTPOS=18000796;//kernel.PlayMod:796
            _this.fiber$update(_thread);
            __pc=2;return;
          case 2:
            
            __pc=1;break;
          case 3:
            
            _thread.exit(_this._mml);return;
            _thread.exit(_this);return;
          }
        }
      });
    },
    playSE :function _trc_PlayMod_playSE() {
      "use strict";
      var _this=this;
      var mml;
      var mmls;
      var i;
      
      //$LASTPOS=18000859;//kernel.PlayMod:859
      _this.initMML();
      //$LASTPOS=18000875;//kernel.PlayMod:875
      mml = new Tonyu.classes.kernel.MML;
      //$LASTPOS=18000897;//kernel.PlayMod:897
      mmls = [];
      //$LASTPOS=18000915;//kernel.PlayMod:915
      //$LASTPOS=18000920;//kernel.PlayMod:920
      i = 0;
      while(i<arguments.length) {
        {
          //$LASTPOS=18000965;//kernel.PlayMod:965
          mmls.push(arguments[i]);
        }
        i++;
      }
      //$LASTPOS=18001002;//kernel.PlayMod:1002
      mml.play(mmls);
      return mml;
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"initMML":{"nowait":true},"releaseMML":{"nowait":true},"play":{"nowait":false},"playSE":{"nowait":true}}}
});
Tonyu.klass.define({
  fullName: 'kernel.WaveTable',
  shortName: 'WaveTable',
  namespace: 'kernel',
  superclass: Tonyu.classes.kernel.TObject,
  includes: [],
  methods: {
    main :function _trc_WaveTable_main() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=19000028;//kernel.WaveTable:28
      _this.wav={};
      //$LASTPOS=19000036;//kernel.WaveTable:36
      _this.env={};
      //$LASTPOS=19000313;//kernel.WaveTable:313
      if (typeof  T!=="undefined") {
        //$LASTPOS=19000392;//kernel.WaveTable:392
        _this.env=T("env",{table: [1,[0.6,50],[0,100]],releaseNode: 2});
        //$LASTPOS=19000460;//kernel.WaveTable:460
        _this.setEnv(0,_this.env);
        //$LASTPOS=19000480;//kernel.WaveTable:480
        _this.setWav(0,T("pulse"));
        
      }
    },
    fiber$main :function _trc_WaveTable_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=19000028;//kernel.WaveTable:28
      _this.wav={};
      //$LASTPOS=19000036;//kernel.WaveTable:36
      _this.env={};
      
      _thread.enter(function _trc_WaveTable_ent_main(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=19000313;//kernel.WaveTable:313
            if (!(typeof  T!=="undefined")) { __pc=3; break; }
            //$LASTPOS=19000392;//kernel.WaveTable:392
            _this.env=T("env",{table: [1,[0.6,50],[0,100]],releaseNode: 2});
            //$LASTPOS=19000460;//kernel.WaveTable:460
            _this.fiber$setEnv(_thread, 0, _this.env);
            __pc=1;return;
          case 1:
            
            //$LASTPOS=19000480;//kernel.WaveTable:480
            _this.fiber$setWav(_thread, 0, T("pulse"));
            __pc=2;return;
          case 2:
            
          case 3:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    setWav :function _trc_WaveTable_setWav(num,synth) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=19000070;//kernel.WaveTable:70
      _this.wav[num]=synth;
    },
    fiber$setWav :function _trc_WaveTable_f_setWav(_thread,num,synth) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=19000070;//kernel.WaveTable:70
      _this.wav[num]=synth;
      
      _thread.retVal=_this;return;
    },
    setEnv :function _trc_WaveTable_setEnv(num,synth) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=19000114;//kernel.WaveTable:114
      _this.env[num]=synth;
    },
    fiber$setEnv :function _trc_WaveTable_f_setEnv(_thread,num,synth) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=19000114;//kernel.WaveTable:114
      _this.env[num]=synth;
      
      _thread.retVal=_this;return;
    },
    get :function _trc_WaveTable_get(w,e) {
      "use strict";
      var _this=this;
      var synth;
      
      //$LASTPOS=19000148;//kernel.WaveTable:148
      synth = T("OscGen",{osc: _this.wav[w],env: _this.env[e],mul: 0.25});
      return synth;
    },
    fiber$get :function _trc_WaveTable_f_get(_thread,w,e) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var synth;
      
      //$LASTPOS=19000148;//kernel.WaveTable:148
      synth = T("OscGen",{osc: _this.wav[w],env: _this.env[e],mul: 0.25});
      _thread.retVal=synth;return;
      
      
      _thread.retVal=_this;return;
    },
    stop :function _trc_WaveTable_stop() {
      "use strict";
      var _this=this;
      
    },
    fiber$stop :function _trc_WaveTable_f_stop(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"setWav":{"nowait":false},"setEnv":{"nowait":false},"get":{"nowait":false},"stop":{"nowait":false}}}
});
Tonyu.klass.define({
  fullName: 'kernel.ParallelMod',
  shortName: 'ParallelMod',
  namespace: 'kernel',
  superclass: Tonyu.classes.kernel.BaseActor,
  includes: [],
  methods: {
    main :function _trc_ParallelMod_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_ParallelMod_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    parallel :function _trc_ParallelMod_parallel() {
      "use strict";
      var _this=this;
      var args;
      var i;
      var name;
      var th;
      
      //$LASTPOS=20000064;//kernel.ParallelMod:64
      args = [];
      //$LASTPOS=20000083;//kernel.ParallelMod:83
      //$LASTPOS=20000088;//kernel.ParallelMod:88
      i = 1;
      while(i<arguments.length) {
        {
          //$LASTPOS=20000134;//kernel.ParallelMod:134
          args.push(arguments[i]);
        }
        i++;
      }
      //$LASTPOS=20000173;//kernel.ParallelMod:173
      name = arguments[0];
      //$LASTPOS=20000202;//kernel.ParallelMod:202
      th;
      //$LASTPOS=20000216;//kernel.ParallelMod:216
      th=Tonyu.globals.$Boot.schedule(_this,name,args);
      return th;
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"parallel":{"nowait":true}}}
});
Tonyu.klass.define({
  fullName: 'kernel.Scheduler',
  shortName: 'Scheduler',
  namespace: 'kernel',
  superclass: Tonyu.classes.kernel.TObject,
  includes: [],
  methods: {
    main :function _trc_Scheduler_main() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=21000050;//kernel.Scheduler:50
      _this.cur=[];
      //$LASTPOS=21000059;//kernel.Scheduler:59
      _this.next=[];
    },
    fiber$main :function _trc_Scheduler_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=21000050;//kernel.Scheduler:50
      _this.cur=[];
      //$LASTPOS=21000059;//kernel.Scheduler:59
      _this.next=[];
      
      _thread.retVal=_this;return;
    },
    addObj :function _trc_Scheduler_addObj(obj,name,args) {
      "use strict";
      var _this=this;
      
      return _this.newThread(obj,name,args);
    },
    fiber$addObj :function _trc_Scheduler_f_addObj(_thread,obj,name,args) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=_this.newThread(obj,name,args);return;
      
      
      _thread.retVal=_this;return;
    },
    newThread :function _trc_Scheduler_newThread(obj,name,args,options) {
      "use strict";
      var _this=this;
      var th;
      
      //$LASTPOS=21000214;//kernel.Scheduler:214
      name=name||"main";
      //$LASTPOS=21000238;//kernel.Scheduler:238
      args=args||[];
      //$LASTPOS=21000258;//kernel.Scheduler:258
      th = Tonyu.thread();
      //$LASTPOS=21000286;//kernel.Scheduler:286
      th.apply(obj,name,args);
      //$LASTPOS=21000316;//kernel.Scheduler:316
      _this.addToCur(th);
      return th;
    },
    fiber$newThread :function _trc_Scheduler_f_newThread(_thread,obj,name,args,options) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var th;
      
      //$LASTPOS=21000214;//kernel.Scheduler:214
      name=name||"main";
      //$LASTPOS=21000238;//kernel.Scheduler:238
      args=args||[];
      //$LASTPOS=21000258;//kernel.Scheduler:258
      th = Tonyu.thread();
      //$LASTPOS=21000286;//kernel.Scheduler:286
      th.apply(obj,name,args);
      
      _thread.enter(function _trc_Scheduler_ent_newThread(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=21000316;//kernel.Scheduler:316
            _this.fiber$addToCur(_thread, th);
            __pc=1;return;
          case 1:
            
            _thread.exit(th);return;
            _thread.exit(_this);return;
          }
        }
      });
    },
    addToCur :function _trc_Scheduler_addToCur(th) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=21000371;//kernel.Scheduler:371
      _this.cur.push(th);
      //$LASTPOS=21000390;//kernel.Scheduler:390
      th.scheduled=_this;
    },
    fiber$addToCur :function _trc_Scheduler_f_addToCur(_thread,th) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=21000371;//kernel.Scheduler:371
      _this.cur.push(th);
      //$LASTPOS=21000390;//kernel.Scheduler:390
      th.scheduled=_this;
      
      _thread.retVal=_this;return;
    },
    addToNext :function _trc_Scheduler_addToNext(th) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=21000435;//kernel.Scheduler:435
      _this.next.push(th);
      //$LASTPOS=21000455;//kernel.Scheduler:455
      th.scheduled=_this;
    },
    fiber$addToNext :function _trc_Scheduler_f_addToNext(_thread,th) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=21000435;//kernel.Scheduler:435
      _this.next.push(th);
      //$LASTPOS=21000455;//kernel.Scheduler:455
      th.scheduled=_this;
      
      _thread.retVal=_this;return;
    },
    stepsAll :function _trc_Scheduler_stepsAll() {
      "use strict";
      var _this=this;
      var t;
      var _it_181;
      
      //$LASTPOS=21000497;//kernel.Scheduler:497
      _it_181=Tonyu.iterator(_this.cur,1);
      while(_it_181.next()) {
        t=_it_181[0];
        
        //$LASTPOS=21000524;//kernel.Scheduler:524
        delete t.scheduled;
        //$LASTPOS=21000553;//kernel.Scheduler:553
        t.steps();
        //$LASTPOS=21000573;//kernel.Scheduler:573
        if (t.preempted) {
          //$LASTPOS=21000650;//kernel.Scheduler:650
          _this.addToNext(t);
          
        }
        
      }
      //$LASTPOS=21000687;//kernel.Scheduler:687
      _this.cur=_this.next;
      //$LASTPOS=21000702;//kernel.Scheduler:702
      _this.next=[];
    },
    fiber$stepsAll :function _trc_Scheduler_f_stepsAll(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var t;
      var _it_181;
      
      
      _thread.enter(function _trc_Scheduler_ent_stepsAll(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=21000497;//kernel.Scheduler:497
            _it_181=Tonyu.iterator(_this.cur,1);
          case 1:
            if (!(_it_181.next())) { __pc=4; break; }
            t=_it_181[0];
            
            //$LASTPOS=21000524;//kernel.Scheduler:524
            delete t.scheduled;
            //$LASTPOS=21000553;//kernel.Scheduler:553
            t.steps();
            //$LASTPOS=21000573;//kernel.Scheduler:573
            if (!(t.preempted)) { __pc=3; break; }
            //$LASTPOS=21000650;//kernel.Scheduler:650
            _this.fiber$addToNext(_thread, t);
            __pc=2;return;
          case 2:
            
          case 3:
            
            __pc=1;break;
          case 4:
            
            //$LASTPOS=21000687;//kernel.Scheduler:687
            _this.cur=_this.next;
            //$LASTPOS=21000702;//kernel.Scheduler:702
            _this.next=[];
            _thread.exit(_this);return;
          }
        }
      });
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"addObj":{"nowait":false},"newThread":{"nowait":false},"addToCur":{"nowait":false},"addToNext":{"nowait":false},"stepsAll":{"nowait":false}}}
});
Tonyu.klass.define({
  fullName: 'kernel.Actor',
  shortName: 'Actor',
  namespace: 'kernel',
  superclass: Tonyu.classes.kernel.BaseActor,
  includes: [Tonyu.classes.kernel.PlayMod,Tonyu.classes.kernel.ParallelMod],
  methods: {
    main :function _trc_Actor_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_Actor_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    initialize :function _trc_Actor_initialize(x,y,p) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=22000105;//kernel.Actor:105
      Tonyu.classes.kernel.BaseActor.apply( _this, [x,y,p]);
      //$LASTPOS=22000147;//kernel.Actor:147
      _this.initSprite();
    },
    initSprite :function _trc_Actor_initSprite() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=22000186;//kernel.Actor:186
      if (_this.layer&&typeof  _this.layer.add=="function") {
        //$LASTPOS=22000238;//kernel.Actor:238
        _this.layer.add(_this);
        
      } else {
        //$LASTPOS=22000276;//kernel.Actor:276
        Tonyu.globals.$Sprites.add(_this);
        
      }
      //$LASTPOS=22000308;//kernel.Actor:308
      _this.onAppear();
    },
    fiber$initSprite :function _trc_Actor_f_initSprite(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=22000186;//kernel.Actor:186
      if (_this.layer&&typeof  _this.layer.add=="function") {
        //$LASTPOS=22000238;//kernel.Actor:238
        _this.layer.add(_this);
        
      } else {
        //$LASTPOS=22000276;//kernel.Actor:276
        Tonyu.globals.$Sprites.add(_this);
        
      }
      
      _thread.enter(function _trc_Actor_ent_initSprite(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=22000308;//kernel.Actor:308
            _this.fiber$onAppear(_thread);
            __pc=1;return;
          case 1:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    onAppear :function _trc_Actor_onAppear() {
      "use strict";
      var _this=this;
      
    },
    fiber$onAppear :function _trc_Actor_f_onAppear(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"initSprite":{"nowait":false},"onAppear":{"nowait":false}}}
});
Tonyu.klass.define({
  fullName: 'kernel.CrashToHandler',
  shortName: 'CrashToHandler',
  namespace: 'kernel',
  superclass: Tonyu.classes.kernel.EventHandler,
  includes: [],
  methods: {
    main :function _trc_CrashToHandler_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_CrashToHandler_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    addListener :function _trc_CrashToHandler_addListener(d,f) {
      "use strict";
      var _this=this;
      var retThread;
      
      //$LASTPOS=23000049;//kernel.CrashToHandler:49
      retThread = _this.target.parallel("crashToChecker",d,f);
      return {remove: (function anonymous_133() {
        
        //$LASTPOS=23000149;//kernel.CrashToHandler:149
        retThread.kill();
      })};
    },
    fiber$addListener :function _trc_CrashToHandler_f_addListener(_thread,d,f) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var retThread;
      
      //$LASTPOS=23000049;//kernel.CrashToHandler:49
      retThread = _this.target.parallel("crashToChecker",d,f);
      _thread.retVal={remove: (function anonymous_133() {
        
        //$LASTPOS=23000149;//kernel.CrashToHandler:149
        retThread.kill();
      })};return;
      
      
      _thread.retVal=_this;return;
    },
    initialize :function _trc_CrashToHandler_initialize(param) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=23000209;//kernel.CrashToHandler:209
      Tonyu.classes.kernel.EventHandler.apply( _this, [param]);
      //$LASTPOS=23000228;//kernel.CrashToHandler:228
      _this.id=(Tonyu.globals.$idseq=(Tonyu.globals.$idseq||0)+1);
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"addListener":{"nowait":false},"new":{"nowait":false}}}
});
Tonyu.klass.define({
  fullName: 'kernel.GameScreen',
  shortName: 'GameScreen',
  namespace: 'kernel',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: {
    main :function _trc_GameScreen_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_GameScreen_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    initialize :function _trc_GameScreen_initialize(opt) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=24000113;//kernel.GameScreen:113
      _this.extend(opt);
      //$LASTPOS=24000131;//kernel.GameScreen:131
      _this.resize(_this.width,_this.height);
      //$LASTPOS=24000159;//kernel.GameScreen:159
      _this.bgColor="rgb(20,80,180)";
      //$LASTPOS=24000195;//kernel.GameScreen:195
      _this.isDrawGrid=Tonyu.globals.$Sprites.isDrawGrid;
    },
    resize :function _trc_GameScreen_resize(width,height) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=24000260;//kernel.GameScreen:260
      _this.width=width;
      //$LASTPOS=24000283;//kernel.GameScreen:283
      _this.height=height;
      //$LASTPOS=24000308;//kernel.GameScreen:308
      _this.buf=$("<canvas>").attr({width: width,height: height});
      //$LASTPOS=24000351;//kernel.GameScreen:351
      _this.ctx=_this.buf[0].getContext("2d");
      //$LASTPOS=24000387;//kernel.GameScreen:387
      _this.fireEvent("resize",width,height);
    },
    fiber$resize :function _trc_GameScreen_f_resize(_thread,width,height) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=24000260;//kernel.GameScreen:260
      _this.width=width;
      //$LASTPOS=24000283;//kernel.GameScreen:283
      _this.height=height;
      //$LASTPOS=24000308;//kernel.GameScreen:308
      _this.buf=$("<canvas>").attr({width: width,height: height});
      //$LASTPOS=24000351;//kernel.GameScreen:351
      _this.ctx=_this.buf[0].getContext("2d");
      //$LASTPOS=24000387;//kernel.GameScreen:387
      _this.fireEvent("resize",width,height);
      
      _thread.retVal=_this;return;
    },
    setBounds :function _trc_GameScreen_setBounds(b) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=24000622;//kernel.GameScreen:622
      _this.bounds=b;
    },
    fiber$setBounds :function _trc_GameScreen_f_setBounds(_thread,b) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=24000622;//kernel.GameScreen:622
      _this.bounds=b;
      
      _thread.retVal=_this;return;
    },
    draw :function _trc_GameScreen_draw(cctx) {
      "use strict";
      var _this=this;
      var b;
      
      //$LASTPOS=24000655;//kernel.GameScreen:655
      b = _this.bounds;
      //$LASTPOS=24000674;//kernel.GameScreen:674
      _this.fillCanvas();
      //$LASTPOS=24000693;//kernel.GameScreen:693
      _this.sprites.draw(_this.buf[0]);
      //$LASTPOS=24000720;//kernel.GameScreen:720
      cctx.drawImage(_this.buf[0],0,0,_this.width,_this.height,b.left,b.top,b.width,b.height);
    },
    canvas2buf :function _trc_GameScreen_canvas2buf(point) {
      "use strict";
      var _this=this;
      var b;
      
      //$LASTPOS=24000859;//kernel.GameScreen:859
      b = _this.bounds;
      //$LASTPOS=24000878;//kernel.GameScreen:878
      if (! b) {
        return point;
      }
      return {x: (point.x-b.left)/b.width*_this.width,y: (point.y-b.top)/b.height*_this.height};
    },
    fiber$canvas2buf :function _trc_GameScreen_f_canvas2buf(_thread,point) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var b;
      
      //$LASTPOS=24000859;//kernel.GameScreen:859
      b = _this.bounds;
      //$LASTPOS=24000878;//kernel.GameScreen:878
      if (! b) {
        _thread.retVal=point;return;
        
      }
      _thread.retVal={x: (point.x-b.left)/b.width*_this.width,y: (point.y-b.top)/b.height*_this.height};return;
      
      
      _thread.retVal=_this;return;
    },
    setBGColor :function _trc_GameScreen_setBGColor(c) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=24001016;//kernel.GameScreen:1016
      _this.bgColor=c;
    },
    fiber$setBGColor :function _trc_GameScreen_f_setBGColor(_thread,c) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=24001016;//kernel.GameScreen:1016
      _this.bgColor=c;
      
      _thread.retVal=_this;return;
    },
    fillCanvas :function _trc_GameScreen_fillCanvas() {
      "use strict";
      var _this=this;
      var ctx;
      
      //$LASTPOS=24001056;//kernel.GameScreen:1056
      ctx = _this.buf[0].getContext("2d");
      //$LASTPOS=24001094;//kernel.GameScreen:1094
      ctx.save();
      //$LASTPOS=24001111;//kernel.GameScreen:1111
      ctx.fillStyle=_this.bgColor;
      //$LASTPOS=24001139;//kernel.GameScreen:1139
      ctx.fillRect(0,0,_this.width,_this.height);
      //$LASTPOS=24001213;//kernel.GameScreen:1213
      ctx.restore();
    },
    fiber$fillCanvas :function _trc_GameScreen_f_fillCanvas(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var ctx;
      
      //$LASTPOS=24001056;//kernel.GameScreen:1056
      ctx = _this.buf[0].getContext("2d");
      //$LASTPOS=24001094;//kernel.GameScreen:1094
      ctx.save();
      //$LASTPOS=24001111;//kernel.GameScreen:1111
      ctx.fillStyle=_this.bgColor;
      //$LASTPOS=24001139;//kernel.GameScreen:1139
      ctx.fillRect(0,0,_this.width,_this.height);
      //$LASTPOS=24001213;//kernel.GameScreen:1213
      ctx.restore();
      
      _thread.retVal=_this;return;
    },
    scrollTo :function _trc_GameScreen_scrollTo(scrollX,scrollY) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=24001265;//kernel.GameScreen:1265
      _this.sprites.scrollTo(scrollX,scrollY);
    },
    fiber$scrollTo :function _trc_GameScreen_f_scrollTo(_thread,scrollX,scrollY) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=24001265;//kernel.GameScreen:1265
      _this.sprites.scrollTo(scrollX,scrollY);
      
      _thread.retVal=_this;return;
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"resize":{"nowait":false},"setBounds":{"nowait":false},"draw":{"nowait":true},"canvas2buf":{"nowait":false},"setBGColor":{"nowait":false},"fillCanvas":{"nowait":false},"scrollTo":{"nowait":false}}}
});
Tonyu.klass.define({
  fullName: 'kernel.Map',
  shortName: 'Map',
  namespace: 'kernel',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: {
    main :function _trc_Map_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_Map_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    initialize :function _trc_Map_initialize(param) {
      "use strict";
      var _this=this;
      var j;
      var i;
      
      //$LASTPOS=25000060;//kernel.Map:60
      _this.sx=0;
      //$LASTPOS=25000071;//kernel.Map:71
      _this.sy=0;
      //$LASTPOS=25000082;//kernel.Map:82
      Tonyu.classes.kernel.Actor.apply( _this, [param]);
      //$LASTPOS=25000101;//kernel.Map:101
      _this.buf=$("<canvas>").attr({width: _this.col*_this.chipWidth,height: _this.row*_this.chipHeight});
      //$LASTPOS=25000173;//kernel.Map:173
      _this.mapObj=true;
      //$LASTPOS=25000191;//kernel.Map:191
      _this.mapTable=[];
      //$LASTPOS=25000211;//kernel.Map:211
      _this.mapOnTable=[];
      //$LASTPOS=25000233;//kernel.Map:233
      //$LASTPOS=25000237;//kernel.Map:237
      j = 0;
      while(j<_this.row) {
        {
          //$LASTPOS=25000266;//kernel.Map:266
          _this.rows=[];
          //$LASTPOS=25000286;//kernel.Map:286
          //$LASTPOS=25000290;//kernel.Map:290
          i = 0;
          while(i<_this.col) {
            {
              //$LASTPOS=25000323;//kernel.Map:323
              _this.rows.push(- 1);
            }
            i++;
          }
          //$LASTPOS=25000358;//kernel.Map:358
          _this.mapTable.push(_this.rows);
        }
        j++;
      }
      //$LASTPOS=25000391;//kernel.Map:391
      //$LASTPOS=25000395;//kernel.Map:395
      j = 0;
      while(j<_this.row) {
        {
          //$LASTPOS=25000424;//kernel.Map:424
          _this.rows=[];
          //$LASTPOS=25000444;//kernel.Map:444
          //$LASTPOS=25000448;//kernel.Map:448
          i = 0;
          while(i<_this.col) {
            {
              //$LASTPOS=25000481;//kernel.Map:481
              _this.rows.push(- 1);
            }
            i++;
          }
          //$LASTPOS=25000516;//kernel.Map:516
          _this.mapOnTable.push(_this.rows);
        }
        j++;
      }
      //$LASTPOS=25000616;//kernel.Map:616
      _this.initMap();
    },
    initMap :function _trc_Map_initMap() {
      "use strict";
      var _this=this;
      var i;
      var j;
      
      //$LASTPOS=25000648;//kernel.Map:648
      if (! _this.mapData) {
        return _this;
      }
      //$LASTPOS=25000674;//kernel.Map:674
      //$LASTPOS=25000678;//kernel.Map:678
      i = 0;
      while(i<_this.row) {
        {
          //$LASTPOS=25000707;//kernel.Map:707
          //$LASTPOS=25000711;//kernel.Map:711
          j = 0;
          while(j<_this.col) {
            {
              //$LASTPOS=25000744;//kernel.Map:744
              _this.set(j,i,_this.mapData[i][j]);
            }
            j++;
          }
        }
        i++;
      }
      //$LASTPOS=25000791;//kernel.Map:791
      if (! _this.mapOnData) {
        return _this;
      }
      //$LASTPOS=25000819;//kernel.Map:819
      //$LASTPOS=25000823;//kernel.Map:823
      i = 0;
      while(i<_this.row) {
        {
          //$LASTPOS=25000852;//kernel.Map:852
          //$LASTPOS=25000856;//kernel.Map:856
          j = 0;
          while(j<_this.col) {
            {
              //$LASTPOS=25000889;//kernel.Map:889
              _this.setOn(j,i,_this.mapOnData[i][j]);
            }
            j++;
          }
        }
        i++;
      }
    },
    fiber$initMap :function _trc_Map_f_initMap(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var i;
      var j;
      
      //$LASTPOS=25000648;//kernel.Map:648
      if (! _this.mapData) {
        _thread.retVal=_this;return;
        
      }
      
      _thread.enter(function _trc_Map_ent_initMap(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=25000674;//kernel.Map:674
            //$LASTPOS=25000678;//kernel.Map:678
            i = 0;;
          case 1:
            if (!(i<_this.row)) { __pc=5; break; }
            //$LASTPOS=25000707;//kernel.Map:707
            //$LASTPOS=25000711;//kernel.Map:711
            j = 0;;
          case 2:
            if (!(j<_this.col)) { __pc=4; break; }
            //$LASTPOS=25000744;//kernel.Map:744
            _this.fiber$set(_thread, j, i, _this.mapData[i][j]);
            __pc=3;return;
          case 3:
            
            j++;
            __pc=2;break;
          case 4:
            
            i++;
            __pc=1;break;
          case 5:
            
            //$LASTPOS=25000791;//kernel.Map:791
            if (!(! _this.mapOnData)) { __pc=6; break; }
            _thread.exit(_this);return;
          case 6:
            
            //$LASTPOS=25000819;//kernel.Map:819
            //$LASTPOS=25000823;//kernel.Map:823
            i = 0;;
          case 7:
            if (!(i<_this.row)) { __pc=11; break; }
            //$LASTPOS=25000852;//kernel.Map:852
            //$LASTPOS=25000856;//kernel.Map:856
            j = 0;;
          case 8:
            if (!(j<_this.col)) { __pc=10; break; }
            //$LASTPOS=25000889;//kernel.Map:889
            _this.fiber$setOn(_thread, j, i, _this.mapOnData[i][j]);
            __pc=9;return;
          case 9:
            
            j++;
            __pc=8;break;
          case 10:
            
            i++;
            __pc=7;break;
          case 11:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    load :function _trc_Map_load(dataFile) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=25000961;//kernel.Map:961
      _this.baseData=_this.file("../maps/").rel(dataFile).obj();
      //$LASTPOS=25001013;//kernel.Map:1013
      if (! _this.baseData) {
        //$LASTPOS=25001027;//kernel.Map:1027
        _this.baseData=_this.file(dataFile).obj();
      }
      //$LASTPOS=25001063;//kernel.Map:1063
      _this.mapTable=_this.baseData[0];
      //$LASTPOS=25001090;//kernel.Map:1090
      _this.mapData=_this.mapTable;
      //$LASTPOS=25001113;//kernel.Map:1113
      _this.row=_this.mapTable.length;
      //$LASTPOS=25001139;//kernel.Map:1139
      _this.col=_this.mapTable[0].length;
      //$LASTPOS=25001168;//kernel.Map:1168
      _this.mapOnTable=_this.baseData[1];
      //$LASTPOS=25001197;//kernel.Map:1197
      _this.mapOnData=_this.mapOnTable;
      //$LASTPOS=25001224;//kernel.Map:1224
      _this.buf=$("<canvas>").attr({width: _this.col*_this.chipWidth,height: _this.row*_this.chipHeight});
      //$LASTPOS=25001296;//kernel.Map:1296
      _this.initMap();
    },
    fiber$load :function _trc_Map_f_load(_thread,dataFile) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=25000961;//kernel.Map:961
      _this.baseData=_this.file("../maps/").rel(dataFile).obj();
      //$LASTPOS=25001013;//kernel.Map:1013
      if (! _this.baseData) {
        //$LASTPOS=25001027;//kernel.Map:1027
        _this.baseData=_this.file(dataFile).obj();
      }
      //$LASTPOS=25001063;//kernel.Map:1063
      _this.mapTable=_this.baseData[0];
      //$LASTPOS=25001090;//kernel.Map:1090
      _this.mapData=_this.mapTable;
      //$LASTPOS=25001113;//kernel.Map:1113
      _this.row=_this.mapTable.length;
      //$LASTPOS=25001139;//kernel.Map:1139
      _this.col=_this.mapTable[0].length;
      //$LASTPOS=25001168;//kernel.Map:1168
      _this.mapOnTable=_this.baseData[1];
      //$LASTPOS=25001197;//kernel.Map:1197
      _this.mapOnData=_this.mapOnTable;
      //$LASTPOS=25001224;//kernel.Map:1224
      _this.buf=$("<canvas>").attr({width: _this.col*_this.chipWidth,height: _this.row*_this.chipHeight});
      
      _thread.enter(function _trc_Map_ent_load(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=25001296;//kernel.Map:1296
            _this.fiber$initMap(_thread);
            __pc=1;return;
          case 1:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    set :function _trc_Map_set(setCol,setRow,p) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=25001339;//kernel.Map:1339
      if (setCol>=_this.col||setRow>=_this.row||setCol<0||setRow<0) {
        return _this;
      }
      //$LASTPOS=25001407;//kernel.Map:1407
      _this.mapTable[setRow][setCol]=p;
      //$LASTPOS=25001478;//kernel.Map:1478
      _this.ctx=_this.buf[0].getContext("2d");
      //$LASTPOS=25001512;//kernel.Map:1512
      p=Math.floor(p);
      //$LASTPOS=25001534;//kernel.Map:1534
      _this.pImg=Tonyu.globals.$Sprites.getImageList()[p];
      //$LASTPOS=25001572;//kernel.Map:1572
      if (! _this.pImg) {
        //$LASTPOS=25001594;//kernel.Map:1594
        _this.ctx.clearRect(setCol*_this.chipWidth,setRow*_this.chipHeight,_this.chipWidth,_this.chipHeight);
        return _this;
        
      }
      //$LASTPOS=25001695;//kernel.Map:1695
      _this.ctx.clearRect(setCol*_this.chipWidth,setRow*_this.chipHeight,_this.chipWidth,_this.chipHeight);
      //$LASTPOS=25001772;//kernel.Map:1772
      _this.ctx.save();
      //$LASTPOS=25001789;//kernel.Map:1789
      _this.ctx.drawImage(_this.pImg.image,_this.pImg.x,_this.pImg.y,_this.pImg.width,_this.pImg.height,setCol*_this.chipWidth,setRow*_this.chipHeight,_this.chipWidth,_this.chipHeight);
      //$LASTPOS=25001933;//kernel.Map:1933
      _this.ctx.restore();
    },
    fiber$set :function _trc_Map_f_set(_thread,setCol,setRow,p) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=25001339;//kernel.Map:1339
      if (setCol>=_this.col||setRow>=_this.row||setCol<0||setRow<0) {
        _thread.retVal=_this;return;
        
      }
      //$LASTPOS=25001407;//kernel.Map:1407
      _this.mapTable[setRow][setCol]=p;
      //$LASTPOS=25001478;//kernel.Map:1478
      _this.ctx=_this.buf[0].getContext("2d");
      //$LASTPOS=25001512;//kernel.Map:1512
      p=Math.floor(p);
      //$LASTPOS=25001534;//kernel.Map:1534
      _this.pImg=Tonyu.globals.$Sprites.getImageList()[p];
      //$LASTPOS=25001572;//kernel.Map:1572
      if (! _this.pImg) {
        //$LASTPOS=25001594;//kernel.Map:1594
        _this.ctx.clearRect(setCol*_this.chipWidth,setRow*_this.chipHeight,_this.chipWidth,_this.chipHeight);
        _thread.retVal=_this;return;
        
        
      }
      //$LASTPOS=25001695;//kernel.Map:1695
      _this.ctx.clearRect(setCol*_this.chipWidth,setRow*_this.chipHeight,_this.chipWidth,_this.chipHeight);
      //$LASTPOS=25001772;//kernel.Map:1772
      _this.ctx.save();
      //$LASTPOS=25001789;//kernel.Map:1789
      _this.ctx.drawImage(_this.pImg.image,_this.pImg.x,_this.pImg.y,_this.pImg.width,_this.pImg.height,setCol*_this.chipWidth,setRow*_this.chipHeight,_this.chipWidth,_this.chipHeight);
      //$LASTPOS=25001933;//kernel.Map:1933
      _this.ctx.restore();
      
      _thread.retVal=_this;return;
    },
    setOn :function _trc_Map_setOn(setCol,setRow,p) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=25001982;//kernel.Map:1982
      if (setCol>=_this.col||setRow>=_this.row||setCol<0||setRow<0) {
        return _this;
      }
      //$LASTPOS=25002050;//kernel.Map:2050
      _this.set(setCol,setRow,_this.mapTable[setRow][setCol]);
      //$LASTPOS=25002100;//kernel.Map:2100
      _this.mapOnTable[setRow][setCol]=p;
      //$LASTPOS=25002135;//kernel.Map:2135
      _this.ctx=_this.buf[0].getContext("2d");
      //$LASTPOS=25002169;//kernel.Map:2169
      p=Math.floor(p);
      //$LASTPOS=25002191;//kernel.Map:2191
      _this.pImg=Tonyu.globals.$Sprites.getImageList()[p];
      //$LASTPOS=25002229;//kernel.Map:2229
      if (! _this.pImg) {
        return _this;
      }
      //$LASTPOS=25002253;//kernel.Map:2253
      _this.ctx.save();
      //$LASTPOS=25002270;//kernel.Map:2270
      _this.ctx.drawImage(_this.pImg.image,_this.pImg.x,_this.pImg.y,_this.pImg.width,_this.pImg.height,setCol*_this.chipWidth,setRow*_this.chipHeight,_this.chipWidth,_this.chipHeight);
      //$LASTPOS=25002414;//kernel.Map:2414
      _this.ctx.restore();
    },
    fiber$setOn :function _trc_Map_f_setOn(_thread,setCol,setRow,p) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=25001982;//kernel.Map:1982
      if (setCol>=_this.col||setRow>=_this.row||setCol<0||setRow<0) {
        _thread.retVal=_this;return;
        
      }
      
      _thread.enter(function _trc_Map_ent_setOn(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=25002050;//kernel.Map:2050
            _this.fiber$set(_thread, setCol, setRow, _this.mapTable[setRow][setCol]);
            __pc=1;return;
          case 1:
            
            //$LASTPOS=25002100;//kernel.Map:2100
            _this.mapOnTable[setRow][setCol]=p;
            //$LASTPOS=25002135;//kernel.Map:2135
            _this.ctx=_this.buf[0].getContext("2d");
            //$LASTPOS=25002169;//kernel.Map:2169
            p=Math.floor(p);
            //$LASTPOS=25002191;//kernel.Map:2191
            _this.pImg=Tonyu.globals.$Sprites.getImageList()[p];
            //$LASTPOS=25002229;//kernel.Map:2229
            if (!(! _this.pImg)) { __pc=2; break; }
            _thread.exit(_this);return;
          case 2:
            
            //$LASTPOS=25002253;//kernel.Map:2253
            _this.ctx.save();
            //$LASTPOS=25002270;//kernel.Map:2270
            _this.ctx.drawImage(_this.pImg.image,_this.pImg.x,_this.pImg.y,_this.pImg.width,_this.pImg.height,setCol*_this.chipWidth,setRow*_this.chipHeight,_this.chipWidth,_this.chipHeight);
            //$LASTPOS=25002414;//kernel.Map:2414
            _this.ctx.restore();
            _thread.exit(_this);return;
          }
        }
      });
    },
    setOnAt :function _trc_Map_setOnAt(setX,setY,p) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=25002461;//kernel.Map:2461
      _this.setOn(Math.floor(setX/_this.chipWidth),Math.floor(setY/_this.chipHeight),p);
    },
    fiber$setOnAt :function _trc_Map_f_setOnAt(_thread,setX,setY,p) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.enter(function _trc_Map_ent_setOnAt(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=25002461;//kernel.Map:2461
            _this.fiber$setOn(_thread, Math.floor(setX/_this.chipWidth), Math.floor(setY/_this.chipHeight), p);
            __pc=1;return;
          case 1:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    setAt :function _trc_Map_setAt(setX,setY,p) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=25002556;//kernel.Map:2556
      _this.set(Math.floor(setX/_this.chipWidth),Math.floor(setY/_this.chipHeight),p);
    },
    fiber$setAt :function _trc_Map_f_setAt(_thread,setX,setY,p) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.enter(function _trc_Map_ent_setAt(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=25002556;//kernel.Map:2556
            _this.fiber$set(_thread, Math.floor(setX/_this.chipWidth), Math.floor(setY/_this.chipHeight), p);
            __pc=1;return;
          case 1:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    get :function _trc_Map_get(getCol,getRow) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=25002649;//kernel.Map:2649
      if (getCol<_this.col&&getRow<_this.row&&getCol>=0&&getRow>=0) {
        return _this.mapTable[getRow][getCol];
      }
      return - 1;
    },
    fiber$get :function _trc_Map_f_get(_thread,getCol,getRow) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=25002649;//kernel.Map:2649
      if (getCol<_this.col&&getRow<_this.row&&getCol>=0&&getRow>=0) {
        _thread.retVal=_this.mapTable[getRow][getCol];return;
        
      }
      _thread.retVal=- 1;return;
      
      
      _thread.retVal=_this;return;
    },
    getAt :function _trc_Map_getAt(getX,getY) {
      "use strict";
      var _this=this;
      
      return _this.get(Math.floor(getX/_this.chipWidth),Math.floor(getY/_this.chipHeight));
    },
    fiber$getAt :function _trc_Map_f_getAt(_thread,getX,getY) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=_this.get(Math.floor(getX/_this.chipWidth),Math.floor(getY/_this.chipHeight));return;
      
      
      _thread.retVal=_this;return;
    },
    getOn :function _trc_Map_getOn(getCol,getRow) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=25002881;//kernel.Map:2881
      if (getCol<_this.col&&getRow<_this.row&&getCol>=0&&getRow>=0) {
        return _this.mapOnTable[getRow][getCol];
      }
      return - 1;
    },
    fiber$getOn :function _trc_Map_f_getOn(_thread,getCol,getRow) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=25002881;//kernel.Map:2881
      if (getCol<_this.col&&getRow<_this.row&&getCol>=0&&getRow>=0) {
        _thread.retVal=_this.mapOnTable[getRow][getCol];return;
        
      }
      _thread.retVal=- 1;return;
      
      
      _thread.retVal=_this;return;
    },
    getOnAt :function _trc_Map_getOnAt(getX,getY) {
      "use strict";
      var _this=this;
      
      return _this.getOn(Math.floor(getX/_this.chipWidth),Math.floor(getY/_this.chipHeight));
    },
    fiber$getOnAt :function _trc_Map_f_getOnAt(_thread,getX,getY) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=_this.getOn(Math.floor(getX/_this.chipWidth),Math.floor(getY/_this.chipHeight));return;
      
      
      _thread.retVal=_this;return;
    },
    scrollTo :function _trc_Map_scrollTo(scrollX,scrollY) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=25003124;//kernel.Map:3124
      _this.sx=- scrollX;
      //$LASTPOS=25003142;//kernel.Map:3142
      _this.sy=- scrollY;
    },
    fiber$scrollTo :function _trc_Map_f_scrollTo(_thread,scrollX,scrollY) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=25003124;//kernel.Map:3124
      _this.sx=- scrollX;
      //$LASTPOS=25003142;//kernel.Map:3142
      _this.sy=- scrollY;
      
      _thread.retVal=_this;return;
    },
    draw :function _trc_Map_draw(ctx) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=25003177;//kernel.Map:3177
      _this.pImg=_this.buf[0];
      //$LASTPOS=25003195;//kernel.Map:3195
      ctx.save();
      //$LASTPOS=25003212;//kernel.Map:3212
      ctx.drawImage(_this.pImg,0,0,_this.col*_this.chipWidth,_this.row*_this.chipHeight,_this.sx,_this.sy,_this.col*_this.chipWidth,_this.row*_this.chipHeight);
      //$LASTPOS=25003324;//kernel.Map:3324
      ctx.restore();
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"initMap":{"nowait":false},"load":{"nowait":false},"set":{"nowait":false},"setOn":{"nowait":false},"setOnAt":{"nowait":false},"setAt":{"nowait":false},"get":{"nowait":false},"getAt":{"nowait":false},"getOn":{"nowait":false},"getOnAt":{"nowait":false},"scrollTo":{"nowait":false},"draw":{"nowait":true}}}
});
Tonyu.klass.define({
  fullName: 'kernel.Panel',
  shortName: 'Panel',
  namespace: 'kernel',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: {
    main :function _trc_Panel_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_Panel_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    initialize :function _trc_Panel_initialize(opt) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=26000072;//kernel.Panel:72
      Tonyu.classes.kernel.Actor.apply( _this, [opt]);
      //$LASTPOS=26000089;//kernel.Panel:89
      _this.width=_this.width;
      //$LASTPOS=26000112;//kernel.Panel:112
      _this.height=_this.height;
      //$LASTPOS=26000137;//kernel.Panel:137
      if (_this.align==null) {
        //$LASTPOS=26000153;//kernel.Panel:153
        _this.align="center";
      }
      //$LASTPOS=26000174;//kernel.Panel:174
      if (_this.alpha==null) {
        //$LASTPOS=26000190;//kernel.Panel:190
        _this.alpha=255;
      }
      //$LASTPOS=26000206;//kernel.Panel:206
      if (_this._drawn==null) {
        //$LASTPOS=26000223;//kernel.Panel:223
        _this._drawn=false;
      }
      //$LASTPOS=26000242;//kernel.Panel:242
      _this.buf=$("<canvas>").attr({width: _this.width,height: _this.height});
    },
    setPanel :function _trc_Panel_setPanel(width,height) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=26000314;//kernel.Panel:314
      _this.width=width;
      //$LASTPOS=26000337;//kernel.Panel:337
      _this.height=height;
      //$LASTPOS=26000362;//kernel.Panel:362
      _this.buf=$("<canvas>").attr({width: width,height: height});
    },
    fiber$setPanel :function _trc_Panel_f_setPanel(_thread,width,height) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=26000314;//kernel.Panel:314
      _this.width=width;
      //$LASTPOS=26000337;//kernel.Panel:337
      _this.height=height;
      //$LASTPOS=26000362;//kernel.Panel:362
      _this.buf=$("<canvas>").attr({width: width,height: height});
      
      _thread.retVal=_this;return;
    },
    resize :function _trc_Panel_resize(width,height) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=26000432;//kernel.Panel:432
      _this.setPanel(width,height);
    },
    fiber$resize :function _trc_Panel_f_resize(_thread,width,height) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.enter(function _trc_Panel_ent_resize(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=26000432;//kernel.Panel:432
            _this.fiber$setPanel(_thread, width, height);
            __pc=1;return;
          case 1:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    getContext :function _trc_Panel_getContext() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=26000480;//kernel.Panel:480
      _this._drawn=true;
      return _this.buf[0].getContext("2d");
    },
    fiber$getContext :function _trc_Panel_f_getContext(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=26000480;//kernel.Panel:480
      _this._drawn=true;
      _thread.retVal=_this.buf[0].getContext("2d");return;
      
      
      _thread.retVal=_this;return;
    },
    setFillStyle :function _trc_Panel_setFillStyle(color) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=26000561;//kernel.Panel:561
      _this.fillStyle=color;
    },
    fiber$setFillStyle :function _trc_Panel_f_setFillStyle(_thread,color) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=26000561;//kernel.Panel:561
      _this.fillStyle=color;
      
      _thread.retVal=_this;return;
    },
    fillRect :function _trc_Panel_fillRect(x,y,rectWidth,rectHeight) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=26000629;//kernel.Panel:629
      _this.ctx=_this.getContext();
      //$LASTPOS=26000652;//kernel.Panel:652
      _this.ctx.save();
      //$LASTPOS=26000719;//kernel.Panel:719
      _this.ctx.fillStyle=_this.fillStyle;
      //$LASTPOS=26000749;//kernel.Panel:749
      _this.ctx.fillRect(x,y,rectWidth,rectHeight);
      //$LASTPOS=26000794;//kernel.Panel:794
      _this.ctx.restore();
    },
    fiber$fillRect :function _trc_Panel_f_fillRect(_thread,x,y,rectWidth,rectHeight) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.enter(function _trc_Panel_ent_fillRect(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=26000629;//kernel.Panel:629
            _this.fiber$getContext(_thread);
            __pc=1;return;
          case 1:
            _this.ctx=_thread.retVal;
            
            //$LASTPOS=26000652;//kernel.Panel:652
            _this.ctx.save();
            //$LASTPOS=26000719;//kernel.Panel:719
            _this.ctx.fillStyle=_this.fillStyle;
            //$LASTPOS=26000749;//kernel.Panel:749
            _this.ctx.fillRect(x,y,rectWidth,rectHeight);
            //$LASTPOS=26000794;//kernel.Panel:794
            _this.ctx.restore();
            _thread.exit(_this);return;
          }
        }
      });
    },
    fillText :function _trc_Panel_fillText(text,x,y,size,align) {
      "use strict";
      var _this=this;
      var splits;
      var colCount;
      
      //$LASTPOS=26000850;//kernel.Panel:850
      _this.ctx=_this.getContext();
      //$LASTPOS=26000873;//kernel.Panel:873
      _this.ctx.save();
      //$LASTPOS=26000890;//kernel.Panel:890
      text=text+"";
      //$LASTPOS=26000909;//kernel.Panel:909
      splits = text.split("\n");
      //$LASTPOS=26000995;//kernel.Panel:995
      _this.ctx.textAlign=align;
      //$LASTPOS=26001023;//kernel.Panel:1023
      _this.ctx.fillStyle=_this.fillStyle;
      //$LASTPOS=26001053;//kernel.Panel:1053
      _this.ctx.font=size+"px 'Courier New'";
      //$LASTPOS=26001092;//kernel.Panel:1092
      //$LASTPOS=26001096;//kernel.Panel:1096
      colCount = 0;
      while(colCount<splits.length) {
        {
          //$LASTPOS=26001156;//kernel.Panel:1156
          _this.ctx.fillText(splits[colCount],x,y);
          //$LASTPOS=26001201;//kernel.Panel:1201
          y+=size;
        }
        colCount++;
      }
      //$LASTPOS=26001222;//kernel.Panel:1222
      _this.ctx.restore();
    },
    fiber$fillText :function _trc_Panel_f_fillText(_thread,text,x,y,size,align) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var splits;
      var colCount;
      
      
      _thread.enter(function _trc_Panel_ent_fillText(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=26000850;//kernel.Panel:850
            _this.fiber$getContext(_thread);
            __pc=1;return;
          case 1:
            _this.ctx=_thread.retVal;
            
            //$LASTPOS=26000873;//kernel.Panel:873
            _this.ctx.save();
            //$LASTPOS=26000890;//kernel.Panel:890
            text=text+"";
            //$LASTPOS=26000909;//kernel.Panel:909
            splits = text.split("\n");
            //$LASTPOS=26000995;//kernel.Panel:995
            _this.ctx.textAlign=align;
            //$LASTPOS=26001023;//kernel.Panel:1023
            _this.ctx.fillStyle=_this.fillStyle;
            //$LASTPOS=26001053;//kernel.Panel:1053
            _this.ctx.font=size+"px 'Courier New'";
            //$LASTPOS=26001092;//kernel.Panel:1092
            //$LASTPOS=26001096;//kernel.Panel:1096
            colCount = 0;
            while(colCount<splits.length) {
              {
                //$LASTPOS=26001156;//kernel.Panel:1156
                _this.ctx.fillText(splits[colCount],x,y);
                //$LASTPOS=26001201;//kernel.Panel:1201
                y+=size;
              }
              colCount++;
            }
            //$LASTPOS=26001222;//kernel.Panel:1222
            _this.ctx.restore();
            _thread.exit(_this);return;
          }
        }
      });
    },
    clearRect :function _trc_Panel_clearRect(clearX,clearY,clearW,clearH) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=26001287;//kernel.Panel:1287
      _this.ctx=_this.getContext();
      //$LASTPOS=26001310;//kernel.Panel:1310
      _this.ctx.save();
      //$LASTPOS=26001327;//kernel.Panel:1327
      _this.ctx.clearRect(clearX,clearY,clearW,clearH);
      //$LASTPOS=26001376;//kernel.Panel:1376
      _this.ctx.restore();
    },
    fiber$clearRect :function _trc_Panel_f_clearRect(_thread,clearX,clearY,clearW,clearH) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.enter(function _trc_Panel_ent_clearRect(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=26001287;//kernel.Panel:1287
            _this.fiber$getContext(_thread);
            __pc=1;return;
          case 1:
            _this.ctx=_thread.retVal;
            
            //$LASTPOS=26001310;//kernel.Panel:1310
            _this.ctx.save();
            //$LASTPOS=26001327;//kernel.Panel:1327
            _this.ctx.clearRect(clearX,clearY,clearW,clearH);
            //$LASTPOS=26001376;//kernel.Panel:1376
            _this.ctx.restore();
            _thread.exit(_this);return;
          }
        }
      });
    },
    getPixel :function _trc_Panel_getPixel(getX,getY) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=26001422;//kernel.Panel:1422
      if (typeof  getX=="number"&&! isNaN(getX)&&typeof  getY=="number"&&! isNaN(getY)) {
        //$LASTPOS=26001521;//kernel.Panel:1521
        _this.ctx=_this.getContext();
        //$LASTPOS=26001548;//kernel.Panel:1548
        _this.imagedata=_this.ctx.getImageData(getX,getY,1,1);
        //$LASTPOS=26001600;//kernel.Panel:1600
        _this.colordata=[_this.imagedata.data[0],_this.imagedata.data[1],_this.imagedata.data[2],_this.imagedata.data[3]];
        
      } else {
        //$LASTPOS=26001740;//kernel.Panel:1740
        _this.colordata=[0,0,0,0];
        
      }
      return (_this.colordata);
    },
    fiber$getPixel :function _trc_Panel_f_getPixel(_thread,getX,getY) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.enter(function _trc_Panel_ent_getPixel(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=26001422;//kernel.Panel:1422
            if (!(typeof  getX=="number"&&! isNaN(getX)&&typeof  getY=="number"&&! isNaN(getY))) { __pc=2; break; }
            //$LASTPOS=26001521;//kernel.Panel:1521
            _this.fiber$getContext(_thread);
            __pc=1;return;
          case 1:
            _this.ctx=_thread.retVal;
            
            //$LASTPOS=26001548;//kernel.Panel:1548
            _this.imagedata=_this.ctx.getImageData(getX,getY,1,1);
            //$LASTPOS=26001600;//kernel.Panel:1600
            _this.colordata=[_this.imagedata.data[0],_this.imagedata.data[1],_this.imagedata.data[2],_this.imagedata.data[3]];
            __pc=3;break;
          case 2:
            {
              //$LASTPOS=26001740;//kernel.Panel:1740
              _this.colordata=[0,0,0,0];
            }
          case 3:
            
            _thread.exit((_this.colordata));return;
            _thread.exit(_this);return;
          }
        }
      });
    },
    scroll :function _trc_Panel_scroll(scrollX,scrollY) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=26001827;//kernel.Panel:1827
      _this.ctx=_this.getContext();
      //$LASTPOS=26001850;//kernel.Panel:1850
      _this.ctx.save();
      //$LASTPOS=26001867;//kernel.Panel:1867
      _this.imagedata=_this.ctx.getImageData(0,0,_this.width,_this.height);
      //$LASTPOS=26001928;//kernel.Panel:1928
      _this.clearRect(0,0,_this.width,_this.height);
      //$LASTPOS=26001962;//kernel.Panel:1962
      _this.ctx.putImageData(_this.imagedata,- scrollX,- scrollY);
      //$LASTPOS=26002014;//kernel.Panel:2014
      _this.ctx.restore();
    },
    fiber$scroll :function _trc_Panel_f_scroll(_thread,scrollX,scrollY) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.enter(function _trc_Panel_ent_scroll(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=26001827;//kernel.Panel:1827
            _this.fiber$getContext(_thread);
            __pc=1;return;
          case 1:
            _this.ctx=_thread.retVal;
            
            //$LASTPOS=26001850;//kernel.Panel:1850
            _this.ctx.save();
            //$LASTPOS=26001867;//kernel.Panel:1867
            _this.imagedata=_this.ctx.getImageData(0,0,_this.width,_this.height);
            //$LASTPOS=26001928;//kernel.Panel:1928
            _this.fiber$clearRect(_thread, 0, 0, _this.width, _this.height);
            __pc=2;return;
          case 2:
            
            //$LASTPOS=26001962;//kernel.Panel:1962
            _this.ctx.putImageData(_this.imagedata,- scrollX,- scrollY);
            //$LASTPOS=26002014;//kernel.Panel:2014
            _this.ctx.restore();
            _thread.exit(_this);return;
          }
        }
      });
    },
    draw :function _trc_Panel_draw(ctx) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=26002050;//kernel.Panel:2050
      if (_this._drawn) {
        //$LASTPOS=26002071;//kernel.Panel:2071
        _this.pImg=_this.buf[0];
        //$LASTPOS=26002093;//kernel.Panel:2093
        ctx.save();
        //$LASTPOS=26002114;//kernel.Panel:2114
        if (_this.align=="left") {
          //$LASTPOS=26002146;//kernel.Panel:2146
          ctx.translate(_this.x+_this.width/2,_this.y+_this.height/2);
          
        } else {
          //$LASTPOS=26002198;//kernel.Panel:2198
          if (_this.align=="center") {
            //$LASTPOS=26002232;//kernel.Panel:2232
            ctx.translate(_this.x,_this.y);
            
          } else {
            //$LASTPOS=26002267;//kernel.Panel:2267
            if (_this.align=="right") {
              //$LASTPOS=26002300;//kernel.Panel:2300
              ctx.translate(_this.x-_this.width/2,_this.y-_this.height/2);
              
            }
          }
        }
        //$LASTPOS=26002357;//kernel.Panel:2357
        if (_this.rotation!=0) {
          //$LASTPOS=26002392;//kernel.Panel:2392
          ctx.rotate(_this.rotation/180*Math.PI);
          
        } else {
          //$LASTPOS=26002460;//kernel.Panel:2460
          ctx.rotate(_this.rotate/180*Math.PI);
          
        }
        //$LASTPOS=26002517;//kernel.Panel:2517
        ctx.globalAlpha=_this.alpha/255;
        //$LASTPOS=26002558;//kernel.Panel:2558
        ctx.drawImage(_this.pImg,0,0,_this.width,_this.height,- _this.width/2,- _this.height/2,_this.width,_this.height);
        //$LASTPOS=26002662;//kernel.Panel:2662
        ctx.restore();
        
      }
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"setPanel":{"nowait":false},"resize":{"nowait":false},"getContext":{"nowait":false},"setFillStyle":{"nowait":false},"fillRect":{"nowait":false},"fillText":{"nowait":false},"clearRect":{"nowait":false},"getPixel":{"nowait":false},"scroll":{"nowait":false},"draw":{"nowait":true}}}
});
Tonyu.klass.define({
  fullName: 'kernel.ScaledCanvas',
  shortName: 'ScaledCanvas',
  namespace: 'kernel',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: {
    main :function _trc_ScaledCanvas_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_ScaledCanvas_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    initialize :function _trc_ScaledCanvas_initialize(opt) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=27000095;//kernel.ScaledCanvas:95
      _this.extend(opt);
      //$LASTPOS=27000142;//kernel.ScaledCanvas:142
      _this.resize(_this.width,_this.height);
      //$LASTPOS=27000170;//kernel.ScaledCanvas:170
      _this.cw=_this.canvas.width();
      //$LASTPOS=27000194;//kernel.ScaledCanvas:194
      _this.ch=_this.canvas.height();
      //$LASTPOS=27000219;//kernel.ScaledCanvas:219
      _this.cctx=_this.canvas[0].getContext("2d");
      //$LASTPOS=27000257;//kernel.ScaledCanvas:257
      _this.color="rgb(20,80,180)";
      //$LASTPOS=27000291;//kernel.ScaledCanvas:291
      _this.sx=0;
      //$LASTPOS=27000302;//kernel.ScaledCanvas:302
      _this.sy=0;
      //$LASTPOS=27000313;//kernel.ScaledCanvas:313
      _this.isDrawGrid=Tonyu.globals.$Sprites.isDrawGrid;
    },
    resize :function _trc_ScaledCanvas_resize(width,height) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=27000378;//kernel.ScaledCanvas:378
      _this.width=width;
      //$LASTPOS=27000401;//kernel.ScaledCanvas:401
      _this.height=height;
      //$LASTPOS=27000426;//kernel.ScaledCanvas:426
      _this.buf=$("<canvas>").attr({width: width,height: height});
      //$LASTPOS=27000469;//kernel.ScaledCanvas:469
      _this.ctx=_this.buf[0].getContext("2d");
      //$LASTPOS=27000505;//kernel.ScaledCanvas:505
      Tonyu.globals.$screenWidth=width;
      //$LASTPOS=27000530;//kernel.ScaledCanvas:530
      Tonyu.globals.$screenHeight=height;
      //$LASTPOS=27000557;//kernel.ScaledCanvas:557
      if (Tonyu.globals.$panel) {
        //$LASTPOS=27000578;//kernel.ScaledCanvas:578
        Tonyu.globals.$panel.setPanel(Tonyu.globals.$screenWidth,Tonyu.globals.$screenHeight);
        //$LASTPOS=27000632;//kernel.ScaledCanvas:632
        Tonyu.globals.$panel.x=Tonyu.globals.$screenWidth/2;
        //$LASTPOS=27000666;//kernel.ScaledCanvas:666
        Tonyu.globals.$panel.y=Tonyu.globals.$screenHeight/2;
        
      }
      //$LASTPOS=27000704;//kernel.ScaledCanvas:704
      if (Tonyu.globals.$consolePanel) {
        //$LASTPOS=27000732;//kernel.ScaledCanvas:732
        Tonyu.globals.$consolePanel.setPanel(Tonyu.globals.$screenWidth,Tonyu.globals.$screenHeight);
        //$LASTPOS=27000793;//kernel.ScaledCanvas:793
        Tonyu.globals.$consolePanel.x=Tonyu.globals.$screenWidth/2;
        //$LASTPOS=27000834;//kernel.ScaledCanvas:834
        Tonyu.globals.$consolePanel.y=Tonyu.globals.$screenHeight/2;
        //$LASTPOS=27000876;//kernel.ScaledCanvas:876
        Tonyu.globals.$consolePrintY=Tonyu.globals.$screenHeight-15;
        
      }
    },
    fiber$resize :function _trc_ScaledCanvas_f_resize(_thread,width,height) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=27000378;//kernel.ScaledCanvas:378
      _this.width=width;
      //$LASTPOS=27000401;//kernel.ScaledCanvas:401
      _this.height=height;
      //$LASTPOS=27000426;//kernel.ScaledCanvas:426
      _this.buf=$("<canvas>").attr({width: width,height: height});
      //$LASTPOS=27000469;//kernel.ScaledCanvas:469
      _this.ctx=_this.buf[0].getContext("2d");
      //$LASTPOS=27000505;//kernel.ScaledCanvas:505
      Tonyu.globals.$screenWidth=width;
      //$LASTPOS=27000530;//kernel.ScaledCanvas:530
      Tonyu.globals.$screenHeight=height;
      //$LASTPOS=27000557;//kernel.ScaledCanvas:557
      if (Tonyu.globals.$panel) {
        //$LASTPOS=27000578;//kernel.ScaledCanvas:578
        Tonyu.globals.$panel.setPanel(Tonyu.globals.$screenWidth,Tonyu.globals.$screenHeight);
        //$LASTPOS=27000632;//kernel.ScaledCanvas:632
        Tonyu.globals.$panel.x=Tonyu.globals.$screenWidth/2;
        //$LASTPOS=27000666;//kernel.ScaledCanvas:666
        Tonyu.globals.$panel.y=Tonyu.globals.$screenHeight/2;
        
      }
      //$LASTPOS=27000704;//kernel.ScaledCanvas:704
      if (Tonyu.globals.$consolePanel) {
        //$LASTPOS=27000732;//kernel.ScaledCanvas:732
        Tonyu.globals.$consolePanel.setPanel(Tonyu.globals.$screenWidth,Tonyu.globals.$screenHeight);
        //$LASTPOS=27000793;//kernel.ScaledCanvas:793
        Tonyu.globals.$consolePanel.x=Tonyu.globals.$screenWidth/2;
        //$LASTPOS=27000834;//kernel.ScaledCanvas:834
        Tonyu.globals.$consolePanel.y=Tonyu.globals.$screenHeight/2;
        //$LASTPOS=27000876;//kernel.ScaledCanvas:876
        Tonyu.globals.$consolePrintY=Tonyu.globals.$screenHeight-15;
        
      }
      
      _thread.retVal=_this;return;
    },
    shouldDraw1x1 :function _trc_ScaledCanvas_shouldDraw1x1(srcw,srch,dstw,dsth) {
      "use strict";
      var _this=this;
      var larger;
      var smaller;
      
      //$LASTPOS=27000998;//kernel.ScaledCanvas:998
      larger = 200;
      //$LASTPOS=27001019;//kernel.ScaledCanvas:1019
      smaller = 5;
      return srcw-smaller<=dstw&&dstw<=srcw+larger&&srch-smaller<=dsth&&dsth<=srch+larger;
    },
    fiber$shouldDraw1x1 :function _trc_ScaledCanvas_f_shouldDraw1x1(_thread,srcw,srch,dstw,dsth) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var larger;
      var smaller;
      
      //$LASTPOS=27000998;//kernel.ScaledCanvas:998
      larger = 200;
      //$LASTPOS=27001019;//kernel.ScaledCanvas:1019
      smaller = 5;
      _thread.retVal=srcw-smaller<=dstw&&dstw<=srcw+larger&&srch-smaller<=dsth&&dsth<=srch+larger;return;
      
      
      _thread.retVal=_this;return;
    },
    draw :function _trc_ScaledCanvas_draw() {
      "use strict";
      var _this=this;
      var calcw;
      var calch;
      var marginw;
      var marginh;
      
      //$LASTPOS=27001154;//kernel.ScaledCanvas:1154
      _this.cw=_this.canvas.width();
      //$LASTPOS=27001178;//kernel.ScaledCanvas:1178
      _this.ch=_this.canvas.height();
      //$LASTPOS=27001203;//kernel.ScaledCanvas:1203
      calcw = _this.ch/_this.height*_this.width;
      //$LASTPOS=27001247;//kernel.ScaledCanvas:1247
      calch = _this.cw/_this.width*_this.height;
      //$LASTPOS=27001291;//kernel.ScaledCanvas:1291
      if (calch>_this.ch) {
        //$LASTPOS=27001305;//kernel.ScaledCanvas:1305
        calch=_this.ch;
      }
      //$LASTPOS=27001320;//kernel.ScaledCanvas:1320
      if (calcw>_this.cw) {
        //$LASTPOS=27001334;//kernel.ScaledCanvas:1334
        calcw=_this.cw;
      }
      //$LASTPOS=27001349;//kernel.ScaledCanvas:1349
      _this.cctx.clearRect(0,0,_this.cw,_this.ch);
      //$LASTPOS=27001381;//kernel.ScaledCanvas:1381
      if (_this.shouldDraw1x1(_this.width,_this.height,calcw,calch)) {
        //$LASTPOS=27001437;//kernel.ScaledCanvas:1437
        calcw=_this.width;
        //$LASTPOS=27001449;//kernel.ScaledCanvas:1449
        calch=_this.height;
        
      }
      //$LASTPOS=27001475;//kernel.ScaledCanvas:1475
      marginw = Math.floor((_this.cw-calcw)/2);
      //$LASTPOS=27001518;//kernel.ScaledCanvas:1518
      marginh = Math.floor((_this.ch-calch)/2);
      //$LASTPOS=27001561;//kernel.ScaledCanvas:1561
      _this.cctx.drawImage(_this.buf[0],0,0,_this.width,_this.height,marginw,marginh,calcw,calch);
    },
    canvas2buf :function _trc_ScaledCanvas_canvas2buf(point) {
      "use strict";
      var _this=this;
      var calcw;
      var calch;
      var marginw;
      var marginh;
      
      //$LASTPOS=27001676;//kernel.ScaledCanvas:1676
      calcw = _this.ch/_this.height*_this.width;
      //$LASTPOS=27001720;//kernel.ScaledCanvas:1720
      calch = _this.cw/_this.width*_this.height;
      //$LASTPOS=27001764;//kernel.ScaledCanvas:1764
      if (calch>_this.ch) {
        //$LASTPOS=27001778;//kernel.ScaledCanvas:1778
        calch=_this.ch;
      }
      //$LASTPOS=27001793;//kernel.ScaledCanvas:1793
      if (calcw>_this.cw) {
        //$LASTPOS=27001807;//kernel.ScaledCanvas:1807
        calcw=_this.cw;
      }
      //$LASTPOS=27001822;//kernel.ScaledCanvas:1822
      if (_this.shouldDraw1x1(_this.width,_this.height,calcw,calch)) {
        //$LASTPOS=27001878;//kernel.ScaledCanvas:1878
        calcw=_this.width;
        //$LASTPOS=27001890;//kernel.ScaledCanvas:1890
        calch=_this.height;
        
      }
      //$LASTPOS=27001916;//kernel.ScaledCanvas:1916
      marginw = Math.floor((_this.cw-calcw)/2);
      //$LASTPOS=27001959;//kernel.ScaledCanvas:1959
      marginh = Math.floor((_this.ch-calch)/2);
      //$LASTPOS=27002055;//kernel.ScaledCanvas:2055
      _this._ret="("+point.x+"-"+marginw+")/"+calcw+"*"+_this.width+",";
      return {x: (point.x-marginw)/calcw*_this.width,y: (point.y-marginh)/calch*_this.height};
    },
    fiber$canvas2buf :function _trc_ScaledCanvas_f_canvas2buf(_thread,point) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var calcw;
      var calch;
      var marginw;
      var marginh;
      
      //$LASTPOS=27001676;//kernel.ScaledCanvas:1676
      calcw = _this.ch/_this.height*_this.width;
      //$LASTPOS=27001720;//kernel.ScaledCanvas:1720
      calch = _this.cw/_this.width*_this.height;
      //$LASTPOS=27001764;//kernel.ScaledCanvas:1764
      if (calch>_this.ch) {
        //$LASTPOS=27001778;//kernel.ScaledCanvas:1778
        calch=_this.ch;
      }
      //$LASTPOS=27001793;//kernel.ScaledCanvas:1793
      if (calcw>_this.cw) {
        //$LASTPOS=27001807;//kernel.ScaledCanvas:1807
        calcw=_this.cw;
      }
      //$LASTPOS=27001822;//kernel.ScaledCanvas:1822
      if (_this.shouldDraw1x1(_this.width,_this.height,calcw,calch)) {
        //$LASTPOS=27001878;//kernel.ScaledCanvas:1878
        calcw=_this.width;
        //$LASTPOS=27001890;//kernel.ScaledCanvas:1890
        calch=_this.height;
        
      }
      //$LASTPOS=27001916;//kernel.ScaledCanvas:1916
      marginw = Math.floor((_this.cw-calcw)/2);
      //$LASTPOS=27001959;//kernel.ScaledCanvas:1959
      marginh = Math.floor((_this.ch-calch)/2);
      //$LASTPOS=27002055;//kernel.ScaledCanvas:2055
      _this._ret="("+point.x+"-"+marginw+")/"+calcw+"*"+_this.width+",";
      _thread.retVal={x: (point.x-marginw)/calcw*_this.width,y: (point.y-marginh)/calch*_this.height};return;
      
      
      _thread.retVal=_this;return;
    },
    setBGColor :function _trc_ScaledCanvas_setBGColor(color) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=27002228;//kernel.ScaledCanvas:2228
      _this.color=color;
    },
    fiber$setBGColor :function _trc_ScaledCanvas_f_setBGColor(_thread,color) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=27002228;//kernel.ScaledCanvas:2228
      _this.color=color;
      
      _thread.retVal=_this;return;
    },
    fillCanvas :function _trc_ScaledCanvas_fillCanvas(cv) {
      "use strict";
      var _this=this;
      var ctx;
      
      //$LASTPOS=27002272;//kernel.ScaledCanvas:2272
      ctx = cv.getContext("2d");
      //$LASTPOS=27002306;//kernel.ScaledCanvas:2306
      ctx.save();
      //$LASTPOS=27002323;//kernel.ScaledCanvas:2323
      ctx.fillStyle=Tonyu.globals.$Screen.color;
      //$LASTPOS=27002357;//kernel.ScaledCanvas:2357
      ctx.fillStyle=Tonyu.bindFunc(_this,_this.color);
      //$LASTPOS=27002383;//kernel.ScaledCanvas:2383
      ctx.fillRect(0,0,cv.width,cv.height);
      //$LASTPOS=27002426;//kernel.ScaledCanvas:2426
      if (_this.isDrawGrid) {
        //$LASTPOS=27002442;//kernel.ScaledCanvas:2442
        _this.drawGrid(cv);
      }
      //$LASTPOS=27002461;//kernel.ScaledCanvas:2461
      ctx.restore();
    },
    fiber$fillCanvas :function _trc_ScaledCanvas_f_fillCanvas(_thread,cv) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var ctx;
      
      //$LASTPOS=27002272;//kernel.ScaledCanvas:2272
      ctx = cv.getContext("2d");
      //$LASTPOS=27002306;//kernel.ScaledCanvas:2306
      ctx.save();
      //$LASTPOS=27002323;//kernel.ScaledCanvas:2323
      ctx.fillStyle=Tonyu.globals.$Screen.color;
      //$LASTPOS=27002357;//kernel.ScaledCanvas:2357
      ctx.fillStyle=Tonyu.bindFunc(_this,_this.color);
      //$LASTPOS=27002383;//kernel.ScaledCanvas:2383
      ctx.fillRect(0,0,cv.width,cv.height);
      //$LASTPOS=27002426;//kernel.ScaledCanvas:2426
      if (_this.isDrawGrid) {
        //$LASTPOS=27002442;//kernel.ScaledCanvas:2442
        _this.drawGrid(cv);
      }
      //$LASTPOS=27002461;//kernel.ScaledCanvas:2461
      ctx.restore();
      
      _thread.retVal=_this;return;
    },
    scrollTo :function _trc_ScaledCanvas_scrollTo(scrollX,scrollY) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=27002805;//kernel.ScaledCanvas:2805
      Tonyu.globals.$Sprites.scrollTo(scrollX,scrollY);
    },
    fiber$scrollTo :function _trc_ScaledCanvas_f_scrollTo(_thread,scrollX,scrollY) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=27002805;//kernel.ScaledCanvas:2805
      Tonyu.globals.$Sprites.scrollTo(scrollX,scrollY);
      
      _thread.retVal=_this;return;
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"resize":{"nowait":false},"shouldDraw1x1":{"nowait":false},"draw":{"nowait":true},"canvas2buf":{"nowait":false},"setBGColor":{"nowait":false},"fillCanvas":{"nowait":false},"scrollTo":{"nowait":false}}}
});
Tonyu.klass.define({
  fullName: 'kernel.Sprites',
  shortName: 'Sprites',
  namespace: 'kernel',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: {
    main :function _trc_Sprites_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_Sprites_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    initialize :function _trc_Sprites_initialize() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=28000045;//kernel.Sprites:45
      _this.sprites=[];
      //$LASTPOS=28000062;//kernel.Sprites:62
      _this.imageList=[];
      //$LASTPOS=28000081;//kernel.Sprites:81
      _this.hitWatchers=[];
      //$LASTPOS=28000102;//kernel.Sprites:102
      _this.isDrawGrid=Tonyu.noviceMode;
      //$LASTPOS=28000136;//kernel.Sprites:136
      _this.sx=0;
      //$LASTPOS=28000147;//kernel.Sprites:147
      _this.sy=0;
      //$LASTPOS=28000158;//kernel.Sprites:158
      _this.objId=0;
    },
    add :function _trc_Sprites_add(s) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=28000194;//kernel.Sprites:194
      if (s.__addedToSprites) {
        return _this;
      }
      //$LASTPOS=28000231;//kernel.Sprites:231
      _this.sprites.push(s);
      //$LASTPOS=28000253;//kernel.Sprites:253
      if (s.__genId==null) {
        //$LASTPOS=28000283;//kernel.Sprites:283
        s.__genId=_this.objId;
        //$LASTPOS=28000309;//kernel.Sprites:309
        _this.objId++;
        
      }
      //$LASTPOS=28000330;//kernel.Sprites:330
      s.__addedToSprites=_this;
      return s;
    },
    fiber$add :function _trc_Sprites_f_add(_thread,s) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=28000194;//kernel.Sprites:194
      if (s.__addedToSprites) {
        _thread.retVal=_this;return;
        
      }
      //$LASTPOS=28000231;//kernel.Sprites:231
      _this.sprites.push(s);
      //$LASTPOS=28000253;//kernel.Sprites:253
      if (s.__genId==null) {
        //$LASTPOS=28000283;//kernel.Sprites:283
        s.__genId=_this.objId;
        //$LASTPOS=28000309;//kernel.Sprites:309
        _this.objId++;
        
      }
      //$LASTPOS=28000330;//kernel.Sprites:330
      s.__addedToSprites=_this;
      _thread.retVal=s;return;
      
      
      _thread.retVal=_this;return;
    },
    remove :function _trc_Sprites_remove(s) {
      "use strict";
      var _this=this;
      var idx;
      
      //$LASTPOS=28000400;//kernel.Sprites:400
      idx = _this.sprites.indexOf(s);
      //$LASTPOS=28000433;//kernel.Sprites:433
      if (idx<0) {
        return _this;
      }
      //$LASTPOS=28000457;//kernel.Sprites:457
      _this.sprites.splice(idx,1);
      //$LASTPOS=28000485;//kernel.Sprites:485
      delete s.__addedToSprites;
    },
    fiber$remove :function _trc_Sprites_f_remove(_thread,s) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var idx;
      
      //$LASTPOS=28000400;//kernel.Sprites:400
      idx = _this.sprites.indexOf(s);
      //$LASTPOS=28000433;//kernel.Sprites:433
      if (idx<0) {
        _thread.retVal=_this;return;
        
      }
      //$LASTPOS=28000457;//kernel.Sprites:457
      _this.sprites.splice(idx,1);
      //$LASTPOS=28000485;//kernel.Sprites:485
      delete s.__addedToSprites;
      
      _thread.retVal=_this;return;
    },
    removeOneframes :function _trc_Sprites_removeOneframes() {
      "use strict";
      var _this=this;
      var i;
      
      //$LASTPOS=28000542;//kernel.Sprites:542
      //$LASTPOS=28000547;//kernel.Sprites:547
      i = _this.sprites.length-1;
      while(i>=0) {
        {
          //$LASTPOS=28000595;//kernel.Sprites:595
          if (_this.sprites[i].oneframeSprite) {
            //$LASTPOS=28000641;//kernel.Sprites:641
            _this.sprites.splice(i,1);
            
          }
        }
        i--;
      }
    },
    fiber$removeOneframes :function _trc_Sprites_f_removeOneframes(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var i;
      
      //$LASTPOS=28000542;//kernel.Sprites:542
      //$LASTPOS=28000547;//kernel.Sprites:547
      i = _this.sprites.length-1;
      while(i>=0) {
        {
          //$LASTPOS=28000595;//kernel.Sprites:595
          if (_this.sprites[i].oneframeSprite) {
            //$LASTPOS=28000641;//kernel.Sprites:641
            _this.sprites.splice(i,1);
            
          }
        }
        i--;
      }
      
      _thread.retVal=_this;return;
    },
    clear :function _trc_Sprites_clear() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=28000702;//kernel.Sprites:702
      _this.sprites.splice(0,_this.sprites.length);
    },
    fiber$clear :function _trc_Sprites_f_clear(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=28000702;//kernel.Sprites:702
      _this.sprites.splice(0,_this.sprites.length);
      
      _thread.retVal=_this;return;
    },
    compOrder :function _trc_Sprites_compOrder(obj1,obj2) {
      "use strict";
      var _this=this;
      var val1;
      var val2;
      
      //$LASTPOS=28000775;//kernel.Sprites:775
      val1 = obj1.zOrder||0;
      //$LASTPOS=28000805;//kernel.Sprites:805
      val2 = obj2.zOrder||0;
      //$LASTPOS=28000835;//kernel.Sprites:835
      if (val1>val2) {
        return - 1;
        
      } else {
        //$LASTPOS=28000881;//kernel.Sprites:881
        if (val1<val2) {
          return 1;
          
        } else {
          //$LASTPOS=28000926;//kernel.Sprites:926
          if (val1==val2) {
            //$LASTPOS=28000951;//kernel.Sprites:951
            if (obj1.__genId>obj2.__genId) {
              return 1;
              
            } else {
              return - 1;
              
            }
            return 0;
            
          }
        }
      }
    },
    fiber$compOrder :function _trc_Sprites_f_compOrder(_thread,obj1,obj2) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var val1;
      var val2;
      
      //$LASTPOS=28000775;//kernel.Sprites:775
      val1 = obj1.zOrder||0;
      //$LASTPOS=28000805;//kernel.Sprites:805
      val2 = obj2.zOrder||0;
      //$LASTPOS=28000835;//kernel.Sprites:835
      if (val1>val2) {
        _thread.retVal=- 1;return;
        
        
      } else {
        //$LASTPOS=28000881;//kernel.Sprites:881
        if (val1<val2) {
          _thread.retVal=1;return;
          
          
        } else {
          //$LASTPOS=28000926;//kernel.Sprites:926
          if (val1==val2) {
            //$LASTPOS=28000951;//kernel.Sprites:951
            if (obj1.__genId>obj2.__genId) {
              _thread.retVal=1;return;
              
              
            } else {
              _thread.retVal=- 1;return;
              
              
            }
            _thread.retVal=0;return;
            
            
          }
        }
      }
      
      _thread.retVal=_this;return;
    },
    draw :function _trc_Sprites_draw(cv) {
      "use strict";
      var _this=this;
      var ctx;
      var orderArray;
      
      //$LASTPOS=28001111;//kernel.Sprites:1111
      ctx = cv.getContext("2d");
      //$LASTPOS=28001145;//kernel.Sprites:1145
      ctx.save();
      //$LASTPOS=28001290;//kernel.Sprites:1290
      orderArray = [];
      //$LASTPOS=28001314;//kernel.Sprites:1314
      orderArray=orderArray.concat(_this.sprites);
      //$LASTPOS=28001358;//kernel.Sprites:1358
      orderArray.sort(Tonyu.bindFunc(_this,_this.compOrder));
      //$LASTPOS=28001391;//kernel.Sprites:1391
      ctx.translate(- _this.sx,- _this.sy);
      //$LASTPOS=28001420;//kernel.Sprites:1420
      orderArray.forEach((function anonymous_1439(s) {
        
        //$LASTPOS=28001454;//kernel.Sprites:1454
        s.draw(ctx);
      }));
      //$LASTPOS=28001481;//kernel.Sprites:1481
      ctx.restore();
    },
    checkHit :function _trc_Sprites_checkHit() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=28001527;//kernel.Sprites:1527
      _this.hitWatchers.forEach((function anonymous_1547(w) {
        
        //$LASTPOS=28001571;//kernel.Sprites:1571
        _this.sprites.forEach((function anonymous_1587(a) {
          var a_owner;
          
          //$LASTPOS=28001659;//kernel.Sprites:1659
          a_owner = a;
          //$LASTPOS=28001701;//kernel.Sprites:1701
          if (! (a_owner instanceof w.A)) {
            return _this;
          }
          //$LASTPOS=28001754;//kernel.Sprites:1754
          _this.sprites.forEach((function anonymous_1770(b) {
            var b_owner;
            
            //$LASTPOS=28001802;//kernel.Sprites:1802
            b_owner = b;
            //$LASTPOS=28001848;//kernel.Sprites:1848
            if (a===b) {
              return _this;
            }
            //$LASTPOS=28001884;//kernel.Sprites:1884
            if (! (b_owner instanceof w.B)) {
              return _this;
            }
            //$LASTPOS=28001989;//kernel.Sprites:1989
            if (a.crashTo1(b)) {
              //$LASTPOS=28002092;//kernel.Sprites:2092
              w.h(a_owner,b_owner);
              
            }
          }));
        }));
      }));
    },
    fiber$checkHit :function _trc_Sprites_f_checkHit(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=28001527;//kernel.Sprites:1527
      _this.hitWatchers.forEach((function anonymous_1547(w) {
        
        //$LASTPOS=28001571;//kernel.Sprites:1571
        _this.sprites.forEach((function anonymous_1587(a) {
          var a_owner;
          
          //$LASTPOS=28001659;//kernel.Sprites:1659
          a_owner = a;
          //$LASTPOS=28001701;//kernel.Sprites:1701
          if (! (a_owner instanceof w.A)) {
            return _this;
          }
          //$LASTPOS=28001754;//kernel.Sprites:1754
          _this.sprites.forEach((function anonymous_1770(b) {
            var b_owner;
            
            //$LASTPOS=28001802;//kernel.Sprites:1802
            b_owner = b;
            //$LASTPOS=28001848;//kernel.Sprites:1848
            if (a===b) {
              return _this;
            }
            //$LASTPOS=28001884;//kernel.Sprites:1884
            if (! (b_owner instanceof w.B)) {
              return _this;
            }
            //$LASTPOS=28001989;//kernel.Sprites:1989
            if (a.crashTo1(b)) {
              //$LASTPOS=28002092;//kernel.Sprites:2092
              w.h(a_owner,b_owner);
              
            }
          }));
        }));
      }));
      
      _thread.retVal=_this;return;
    },
    watchHit :function _trc_Sprites_watchHit(typeA,typeB,onHit) {
      "use strict";
      var _this=this;
      var p;
      
      //$LASTPOS=28002222;//kernel.Sprites:2222
      p = {A: typeA,B: typeB,h: onHit};
      //$LASTPOS=28002286;//kernel.Sprites:2286
      _this.hitWatchers.push(p);
    },
    drawGrid :function _trc_Sprites_drawGrid(c) {
      "use strict";
      var _this=this;
      var ctx;
      var i;
      
      //$LASTPOS=28002339;//kernel.Sprites:2339
      ctx = c.getContext("2d");
      //$LASTPOS=28002372;//kernel.Sprites:2372
      ctx.textBaseline="top";
      //$LASTPOS=28002401;//kernel.Sprites:2401
      ctx.save();
      //$LASTPOS=28002418;//kernel.Sprites:2418
      ctx.strokeStyle="rgb(40,100,200)";
      //$LASTPOS=28002458;//kernel.Sprites:2458
      //$LASTPOS=28002463;//kernel.Sprites:2463
      i = 0;
      while(i<c.width) {
        {
          //$LASTPOS=28002503;//kernel.Sprites:2503
          ctx.beginPath();
          //$LASTPOS=28002529;//kernel.Sprites:2529
          ctx.lineWidth=(i%100==0?4:1);
          //$LASTPOS=28002575;//kernel.Sprites:2575
          ctx.moveTo(i,0);
          //$LASTPOS=28002601;//kernel.Sprites:2601
          ctx.lineTo(i,c.height);
          //$LASTPOS=28002634;//kernel.Sprites:2634
          ctx.closePath();
          //$LASTPOS=28002660;//kernel.Sprites:2660
          ctx.stroke();
        }
        i+=10;
      }
      //$LASTPOS=28002692;//kernel.Sprites:2692
      //$LASTPOS=28002697;//kernel.Sprites:2697
      i = 0;
      while(i<c.height) {
        {
          //$LASTPOS=28002738;//kernel.Sprites:2738
          ctx.beginPath();
          //$LASTPOS=28002764;//kernel.Sprites:2764
          ctx.lineWidth=(i%100==0?4:1);
          //$LASTPOS=28002810;//kernel.Sprites:2810
          ctx.moveTo(0,i);
          //$LASTPOS=28002836;//kernel.Sprites:2836
          ctx.lineTo(c.width,i);
          //$LASTPOS=28002868;//kernel.Sprites:2868
          ctx.closePath();
          //$LASTPOS=28002894;//kernel.Sprites:2894
          ctx.stroke();
        }
        i+=10;
      }
      //$LASTPOS=28002920;//kernel.Sprites:2920
      ctx.fillStyle="white";
      //$LASTPOS=28002948;//kernel.Sprites:2948
      ctx.font="15px monospaced";
      //$LASTPOS=28002981;//kernel.Sprites:2981
      //$LASTPOS=28002986;//kernel.Sprites:2986
      i = 100;
      while(i<c.width) {
        {
          //$LASTPOS=28003029;//kernel.Sprites:3029
          ctx.fillText(i,i,0);
        }
        i+=100;
      }
      //$LASTPOS=28003063;//kernel.Sprites:3063
      //$LASTPOS=28003068;//kernel.Sprites:3068
      i = 100;
      while(i<c.height) {
        {
          //$LASTPOS=28003112;//kernel.Sprites:3112
          ctx.fillText(i,0,i);
        }
        i+=100;
      }
      //$LASTPOS=28003146;//kernel.Sprites:3146
      ctx.restore();
    },
    fiber$drawGrid :function _trc_Sprites_f_drawGrid(_thread,c) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var ctx;
      var i;
      
      //$LASTPOS=28002339;//kernel.Sprites:2339
      ctx = c.getContext("2d");
      //$LASTPOS=28002372;//kernel.Sprites:2372
      ctx.textBaseline="top";
      //$LASTPOS=28002401;//kernel.Sprites:2401
      ctx.save();
      //$LASTPOS=28002418;//kernel.Sprites:2418
      ctx.strokeStyle="rgb(40,100,200)";
      //$LASTPOS=28002458;//kernel.Sprites:2458
      //$LASTPOS=28002463;//kernel.Sprites:2463
      i = 0;
      while(i<c.width) {
        {
          //$LASTPOS=28002503;//kernel.Sprites:2503
          ctx.beginPath();
          //$LASTPOS=28002529;//kernel.Sprites:2529
          ctx.lineWidth=(i%100==0?4:1);
          //$LASTPOS=28002575;//kernel.Sprites:2575
          ctx.moveTo(i,0);
          //$LASTPOS=28002601;//kernel.Sprites:2601
          ctx.lineTo(i,c.height);
          //$LASTPOS=28002634;//kernel.Sprites:2634
          ctx.closePath();
          //$LASTPOS=28002660;//kernel.Sprites:2660
          ctx.stroke();
        }
        i+=10;
      }
      //$LASTPOS=28002692;//kernel.Sprites:2692
      //$LASTPOS=28002697;//kernel.Sprites:2697
      i = 0;
      while(i<c.height) {
        {
          //$LASTPOS=28002738;//kernel.Sprites:2738
          ctx.beginPath();
          //$LASTPOS=28002764;//kernel.Sprites:2764
          ctx.lineWidth=(i%100==0?4:1);
          //$LASTPOS=28002810;//kernel.Sprites:2810
          ctx.moveTo(0,i);
          //$LASTPOS=28002836;//kernel.Sprites:2836
          ctx.lineTo(c.width,i);
          //$LASTPOS=28002868;//kernel.Sprites:2868
          ctx.closePath();
          //$LASTPOS=28002894;//kernel.Sprites:2894
          ctx.stroke();
        }
        i+=10;
      }
      //$LASTPOS=28002920;//kernel.Sprites:2920
      ctx.fillStyle="white";
      //$LASTPOS=28002948;//kernel.Sprites:2948
      ctx.font="15px monospaced";
      //$LASTPOS=28002981;//kernel.Sprites:2981
      //$LASTPOS=28002986;//kernel.Sprites:2986
      i = 100;
      while(i<c.width) {
        {
          //$LASTPOS=28003029;//kernel.Sprites:3029
          ctx.fillText(i,i,0);
        }
        i+=100;
      }
      //$LASTPOS=28003063;//kernel.Sprites:3063
      //$LASTPOS=28003068;//kernel.Sprites:3068
      i = 100;
      while(i<c.height) {
        {
          //$LASTPOS=28003112;//kernel.Sprites:3112
          ctx.fillText(i,0,i);
        }
        i+=100;
      }
      //$LASTPOS=28003146;//kernel.Sprites:3146
      ctx.restore();
      
      _thread.retVal=_this;return;
    },
    setImageList :function _trc_Sprites_setImageList(il) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=28003198;//kernel.Sprites:3198
      _this.imageList=il;
    },
    fiber$setImageList :function _trc_Sprites_f_setImageList(_thread,il) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=28003198;//kernel.Sprites:3198
      _this.imageList=il;
      
      _thread.retVal=_this;return;
    },
    getImageList :function _trc_Sprites_getImageList() {
      "use strict";
      var _this=this;
      
      return _this.imageList;
    },
    fiber$getImageList :function _trc_Sprites_f_getImageList(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=_this.imageList;return;
      
      
      _thread.retVal=_this;return;
    },
    scrollTo :function _trc_Sprites_scrollTo(scrollX,scrollY) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=28003310;//kernel.Sprites:3310
      _this.sx=scrollX;
      //$LASTPOS=28003327;//kernel.Sprites:3327
      _this.sy=scrollY;
    },
    fiber$scrollTo :function _trc_Sprites_f_scrollTo(_thread,scrollX,scrollY) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=28003310;//kernel.Sprites:3310
      _this.sx=scrollX;
      //$LASTPOS=28003327;//kernel.Sprites:3327
      _this.sy=scrollY;
      
      _thread.retVal=_this;return;
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"add":{"nowait":false},"remove":{"nowait":false},"removeOneframes":{"nowait":false},"clear":{"nowait":false},"compOrder":{"nowait":false},"draw":{"nowait":true},"checkHit":{"nowait":false},"watchHit":{"nowait":true},"drawGrid":{"nowait":false},"setImageList":{"nowait":false},"getImageList":{"nowait":false},"scrollTo":{"nowait":false}}}
});
Tonyu.klass.define({
  fullName: 'kernel.BodyActor',
  shortName: 'BodyActor',
  namespace: 'kernel',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [Tonyu.classes.kernel.T2Mod],
  methods: {
    main :function _trc_BodyActor_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_BodyActor_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    getWorld :function _trc_BodyActor_getWorld() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=29000064;//kernel.BodyActor:64
      if (Tonyu.globals.$t2World) {
        return Tonyu.globals.$t2World;
      }
      //$LASTPOS=29000099;//kernel.BodyActor:99
      Tonyu.globals.$t2World=new Tonyu.classes.kernel.T2World;
      return Tonyu.globals.$t2World;
    },
    fiber$getWorld :function _trc_BodyActor_f_getWorld(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=29000064;//kernel.BodyActor:64
      if (Tonyu.globals.$t2World) {
        _thread.retVal=Tonyu.globals.$t2World;return;
        
      }
      //$LASTPOS=29000099;//kernel.BodyActor:99
      Tonyu.globals.$t2World=new Tonyu.classes.kernel.T2World;
      _thread.retVal=Tonyu.globals.$t2World;return;
      
      
      _thread.retVal=_this;return;
    },
    onAppear :function _trc_BodyActor_onAppear() {
      "use strict";
      var _this=this;
      var wworld;
      var b2Vec2;
      var b2BodyDef;
      var b2Body;
      var b2FixtureDef;
      var b2Fixture;
      var b2PolygonShape;
      var b2CircleShape;
      var fixDef;
      var bodyDef;
      var w;
      var h;
      var fps;
      var r;
      var ve;
      var vr;
      
      //$LASTPOS=29000162;//kernel.BodyActor:162
      wworld = _this.getWorld();
      //$LASTPOS=29000189;//kernel.BodyActor:189
      _this.world=wworld.world;
      //$LASTPOS=29000213;//kernel.BodyActor:213
      _this.scale=wworld.scale;
      //$LASTPOS=29000237;//kernel.BodyActor:237
      b2Vec2 = Box2D.Common.Math.b2Vec2;
      //$LASTPOS=29000280;//kernel.BodyActor:280
      b2BodyDef = Box2D.Dynamics.b2BodyDef;
      //$LASTPOS=29000326;//kernel.BodyActor:326
      b2Body = Box2D.Dynamics.b2Body;
      //$LASTPOS=29000366;//kernel.BodyActor:366
      b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
      //$LASTPOS=29000418;//kernel.BodyActor:418
      b2Fixture = Box2D.Dynamics.b2Fixture;
      //$LASTPOS=29000464;//kernel.BodyActor:464
      b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
      //$LASTPOS=29000528;//kernel.BodyActor:528
      b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
      //$LASTPOS=29000595;//kernel.BodyActor:595
      fixDef = new b2FixtureDef;
      //$LASTPOS=29000630;//kernel.BodyActor:630
      fixDef.density=_this.defv(_this.density,1);
      //$LASTPOS=29000671;//kernel.BodyActor:671
      fixDef.friction=_this.defv(_this.friction,0.5);
      //$LASTPOS=29000714;//kernel.BodyActor:714
      fixDef.restitution=_this.defv(_this.restitution,0.2);
      //$LASTPOS=29000768;//kernel.BodyActor:768
      bodyDef = new b2BodyDef;
      //$LASTPOS=29000801;//kernel.BodyActor:801
      bodyDef.type=_this.isStatic?b2Body.b2_staticBody:b2Body.b2_dynamicBody;
      //$LASTPOS=29000886;//kernel.BodyActor:886
      bodyDef.position.x=_this.x/_this.scale;
      //$LASTPOS=29000921;//kernel.BodyActor:921
      bodyDef.position.y=_this.y/_this.scale;
      //$LASTPOS=29000956;//kernel.BodyActor:956
      _this.shape=_this.shape||(_this.radius?"circle":"box");
      //$LASTPOS=29001004;//kernel.BodyActor:1004
      w = _this.width;h = _this.height;
      //$LASTPOS=29001030;//kernel.BodyActor:1030
      if (! w) {
        //$LASTPOS=29001048;//kernel.BodyActor:1048
        _this.detectShape();
        //$LASTPOS=29001071;//kernel.BodyActor:1071
        w=_this.width*(_this.scaleX||1);
        //$LASTPOS=29001100;//kernel.BodyActor:1100
        h=_this.height*(_this.scaleY||_this.scaleX||1);
        
      }
      //$LASTPOS=29001140;//kernel.BodyActor:1140
      if (_this.shape=="box") {
        //$LASTPOS=29001168;//kernel.BodyActor:1168
        if (! h) {
          //$LASTPOS=29001176;//kernel.BodyActor:1176
          h=w;
        }
        //$LASTPOS=29001189;//kernel.BodyActor:1189
        fixDef.shape=new b2PolygonShape;
        //$LASTPOS=29001232;//kernel.BodyActor:1232
        fixDef.shape.SetAsOrientedBox(w/2/_this.scale,h/2/_this.scale,new b2Vec2(0,0),0);
        
      } else {
        //$LASTPOS=29001333;//kernel.BodyActor:1333
        _this.radius=_this.radius||w/2||16;
        //$LASTPOS=29001369;//kernel.BodyActor:1369
        fixDef.shape=new b2CircleShape(_this.radius/_this.scale);
        //$LASTPOS=29001443;//kernel.BodyActor:1443
        _this.width=_this.height=_this.radius*2;
        
      }
      //$LASTPOS=29001477;//kernel.BodyActor:1477
      fps = wworld.fps;
      //$LASTPOS=29001501;//kernel.BodyActor:1501
      r = _this.rotation;ve = _this.bvec(_this.defv(_this.vx*fps,0),_this.defv(_this.vy*fps,0));vr = _this.defv(_this.vrotation,0);
      //$LASTPOS=29001582;//kernel.BodyActor:1582
      _this.body=_this.world.CreateBody(bodyDef);
      //$LASTPOS=29001618;//kernel.BodyActor:1618
      _this.body.CreateFixture(fixDef);
      //$LASTPOS=29001650;//kernel.BodyActor:1650
      _this.body.SetUserData(_this);
      //$LASTPOS=29001678;//kernel.BodyActor:1678
      _this.body.SetLinearVelocity(ve);
      //$LASTPOS=29001710;//kernel.BodyActor:1710
      _this.rotation=r;
      //$LASTPOS=29001726;//kernel.BodyActor:1726
      _this.vrotation=vr;
    },
    fiber$onAppear :function _trc_BodyActor_f_onAppear(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var wworld;
      var b2Vec2;
      var b2BodyDef;
      var b2Body;
      var b2FixtureDef;
      var b2Fixture;
      var b2PolygonShape;
      var b2CircleShape;
      var fixDef;
      var bodyDef;
      var w;
      var h;
      var fps;
      var r;
      var ve;
      var vr;
      
      //$LASTPOS=29000162;//kernel.BodyActor:162
      wworld = _this.getWorld();
      //$LASTPOS=29000189;//kernel.BodyActor:189
      _this.world=wworld.world;
      //$LASTPOS=29000213;//kernel.BodyActor:213
      _this.scale=wworld.scale;
      //$LASTPOS=29000237;//kernel.BodyActor:237
      b2Vec2 = Box2D.Common.Math.b2Vec2;
      //$LASTPOS=29000280;//kernel.BodyActor:280
      b2BodyDef = Box2D.Dynamics.b2BodyDef;
      //$LASTPOS=29000326;//kernel.BodyActor:326
      b2Body = Box2D.Dynamics.b2Body;
      //$LASTPOS=29000366;//kernel.BodyActor:366
      b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
      //$LASTPOS=29000418;//kernel.BodyActor:418
      b2Fixture = Box2D.Dynamics.b2Fixture;
      //$LASTPOS=29000464;//kernel.BodyActor:464
      b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
      //$LASTPOS=29000528;//kernel.BodyActor:528
      b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
      //$LASTPOS=29000595;//kernel.BodyActor:595
      fixDef = new b2FixtureDef;
      
      _thread.enter(function _trc_BodyActor_ent_onAppear(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=29000630;//kernel.BodyActor:630
            _this.fiber$defv(_thread, _this.density, 1);
            __pc=1;return;
          case 1:
            fixDef.density=_thread.retVal;
            
            //$LASTPOS=29000671;//kernel.BodyActor:671
            _this.fiber$defv(_thread, _this.friction, 0.5);
            __pc=2;return;
          case 2:
            fixDef.friction=_thread.retVal;
            
            //$LASTPOS=29000714;//kernel.BodyActor:714
            _this.fiber$defv(_thread, _this.restitution, 0.2);
            __pc=3;return;
          case 3:
            fixDef.restitution=_thread.retVal;
            
            //$LASTPOS=29000768;//kernel.BodyActor:768
            bodyDef = new b2BodyDef;
            //$LASTPOS=29000801;//kernel.BodyActor:801
            bodyDef.type=_this.isStatic?b2Body.b2_staticBody:b2Body.b2_dynamicBody;
            //$LASTPOS=29000886;//kernel.BodyActor:886
            bodyDef.position.x=_this.x/_this.scale;
            //$LASTPOS=29000921;//kernel.BodyActor:921
            bodyDef.position.y=_this.y/_this.scale;
            //$LASTPOS=29000956;//kernel.BodyActor:956
            _this.shape=_this.shape||(_this.radius?"circle":"box");
            //$LASTPOS=29001004;//kernel.BodyActor:1004
            w = _this.width;h = _this.height;
            //$LASTPOS=29001030;//kernel.BodyActor:1030
            if (! w) {
              //$LASTPOS=29001048;//kernel.BodyActor:1048
              _this.detectShape();
              //$LASTPOS=29001071;//kernel.BodyActor:1071
              w=_this.width*(_this.scaleX||1);
              //$LASTPOS=29001100;//kernel.BodyActor:1100
              h=_this.height*(_this.scaleY||_this.scaleX||1);
              
            }
            //$LASTPOS=29001140;//kernel.BodyActor:1140
            if (_this.shape=="box") {
              //$LASTPOS=29001168;//kernel.BodyActor:1168
              if (! h) {
                //$LASTPOS=29001176;//kernel.BodyActor:1176
                h=w;
              }
              //$LASTPOS=29001189;//kernel.BodyActor:1189
              fixDef.shape=new b2PolygonShape;
              //$LASTPOS=29001232;//kernel.BodyActor:1232
              fixDef.shape.SetAsOrientedBox(w/2/_this.scale,h/2/_this.scale,new b2Vec2(0,0),0);
              
            } else {
              //$LASTPOS=29001333;//kernel.BodyActor:1333
              _this.radius=_this.radius||w/2||16;
              //$LASTPOS=29001369;//kernel.BodyActor:1369
              fixDef.shape=new b2CircleShape(_this.radius/_this.scale);
              //$LASTPOS=29001443;//kernel.BodyActor:1443
              _this.width=_this.height=_this.radius*2;
              
            }
            //$LASTPOS=29001477;//kernel.BodyActor:1477
            fps = wworld.fps;
            //$LASTPOS=29001501;//kernel.BodyActor:1501
            r = _this.rotation;ve = _this.bvec(_this.defv(_this.vx*fps,0),_this.defv(_this.vy*fps,0));vr = _this.defv(_this.vrotation,0);
            //$LASTPOS=29001582;//kernel.BodyActor:1582
            _this.body=_this.world.CreateBody(bodyDef);
            //$LASTPOS=29001618;//kernel.BodyActor:1618
            _this.body.CreateFixture(fixDef);
            //$LASTPOS=29001650;//kernel.BodyActor:1650
            _this.body.SetUserData(_this);
            //$LASTPOS=29001678;//kernel.BodyActor:1678
            _this.body.SetLinearVelocity(ve);
            //$LASTPOS=29001710;//kernel.BodyActor:1710
            _this.rotation=r;
            //$LASTPOS=29001726;//kernel.BodyActor:1726
            _this.vrotation=vr;
            _thread.exit(_this);return;
          }
        }
      });
    },
    allContactPoints :function _trc_BodyActor_allContactPoints(klass) {
      "use strict";
      var _this=this;
      var res;
      var m;
      var point;
      var w;
      var c;
      var a;
      var b;
      
      //$LASTPOS=29001773;//kernel.BodyActor:1773
      res = [];m;point;
      //$LASTPOS=29001797;//kernel.BodyActor:1797
      w = _this.getWorld();
      //$LASTPOS=29001819;//kernel.BodyActor:1819
      //$LASTPOS=29001824;//kernel.BodyActor:1824
      c = _this.world.GetContactList();
      while(c) {
        {
          //$LASTPOS=29001880;//kernel.BodyActor:1880
          if (c.IsTouching()) {
            //$LASTPOS=29001911;//kernel.BodyActor:1911
            c.GetWorldManifold(m=new Box2D.Collision.b2WorldManifold);
            //$LASTPOS=29001982;//kernel.BodyActor:1982
            if (m.m_points[0]) {
              //$LASTPOS=29002019;//kernel.BodyActor:2019
              if (m.m_points[1]&&m.m_points[1].x&&m.m_points[1].y) {
                //$LASTPOS=29002092;//kernel.BodyActor:2092
                point={x: (m.m_points[0].x+m.m_points[1].x)/2*w.scale,y: (m.m_points[0].y+m.m_points[1].y)/2*w.scale};
                
              } else {
                //$LASTPOS=29002263;//kernel.BodyActor:2263
                point={x: m.m_points[0].x*w.scale,y: m.m_points[0].y*w.scale};
                
              }
              
            } else {
              //$LASTPOS=29002363;//kernel.BodyActor:2363
              point={x: _this.x,y: _this.y};
            }
            //$LASTPOS=29002388;//kernel.BodyActor:2388
            a = c.GetFixtureA().GetBody().GetUserData();
            //$LASTPOS=29002447;//kernel.BodyActor:2447
            b = c.GetFixtureB().GetBody().GetUserData();
            //$LASTPOS=29002506;//kernel.BodyActor:2506
            if (a===_this) {
              //$LASTPOS=29002538;//kernel.BodyActor:2538
              if (! klass||b===klass||b instanceof klass) {
                //$LASTPOS=29002607;//kernel.BodyActor:2607
                res.push({target: b,manifold: m,x: point.x,y: point.y});
                
              }
              
            } else {
              //$LASTPOS=29002698;//kernel.BodyActor:2698
              if (b===_this) {
                //$LASTPOS=29002730;//kernel.BodyActor:2730
                if (! klass||a===klass||a instanceof klass) {
                  //$LASTPOS=29002799;//kernel.BodyActor:2799
                  res.push({target: a,manifold: m,x: point.x,y: point.y});
                  
                }
                
              }
            }
            
          }
        }
        c=c.GetNext();
      }
      return res;
    },
    fiber$allContactPoints :function _trc_BodyActor_f_allContactPoints(_thread,klass) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var res;
      var m;
      var point;
      var w;
      var c;
      var a;
      var b;
      
      //$LASTPOS=29001773;//kernel.BodyActor:1773
      res = [];m;point;
      //$LASTPOS=29001797;//kernel.BodyActor:1797
      w = _this.getWorld();
      //$LASTPOS=29001819;//kernel.BodyActor:1819
      //$LASTPOS=29001824;//kernel.BodyActor:1824
      c = _this.world.GetContactList();
      while(c) {
        {
          //$LASTPOS=29001880;//kernel.BodyActor:1880
          if (c.IsTouching()) {
            //$LASTPOS=29001911;//kernel.BodyActor:1911
            c.GetWorldManifold(m=new Box2D.Collision.b2WorldManifold);
            //$LASTPOS=29001982;//kernel.BodyActor:1982
            if (m.m_points[0]) {
              //$LASTPOS=29002019;//kernel.BodyActor:2019
              if (m.m_points[1]&&m.m_points[1].x&&m.m_points[1].y) {
                //$LASTPOS=29002092;//kernel.BodyActor:2092
                point={x: (m.m_points[0].x+m.m_points[1].x)/2*w.scale,y: (m.m_points[0].y+m.m_points[1].y)/2*w.scale};
                
              } else {
                //$LASTPOS=29002263;//kernel.BodyActor:2263
                point={x: m.m_points[0].x*w.scale,y: m.m_points[0].y*w.scale};
                
              }
              
            } else {
              //$LASTPOS=29002363;//kernel.BodyActor:2363
              point={x: _this.x,y: _this.y};
            }
            //$LASTPOS=29002388;//kernel.BodyActor:2388
            a = c.GetFixtureA().GetBody().GetUserData();
            //$LASTPOS=29002447;//kernel.BodyActor:2447
            b = c.GetFixtureB().GetBody().GetUserData();
            //$LASTPOS=29002506;//kernel.BodyActor:2506
            if (a===_this) {
              //$LASTPOS=29002538;//kernel.BodyActor:2538
              if (! klass||b===klass||b instanceof klass) {
                //$LASTPOS=29002607;//kernel.BodyActor:2607
                res.push({target: b,manifold: m,x: point.x,y: point.y});
                
              }
              
            } else {
              //$LASTPOS=29002698;//kernel.BodyActor:2698
              if (b===_this) {
                //$LASTPOS=29002730;//kernel.BodyActor:2730
                if (! klass||a===klass||a instanceof klass) {
                  //$LASTPOS=29002799;//kernel.BodyActor:2799
                  res.push({target: a,manifold: m,x: point.x,y: point.y});
                  
                }
                
              }
            }
            
          }
        }
        c=c.GetNext();
      }
      _thread.retVal=res;return;
      
      
      _thread.retVal=_this;return;
    },
    contactPoint :function _trc_BodyActor_contactPoint(klass) {
      "use strict";
      var _this=this;
      
      return _this.allContactPoints(klass)[0];
    },
    fiber$contactPoint :function _trc_BodyActor_f_contactPoint(_thread,klass) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=_this.allContactPoints(klass)[0];return;
      
      
      _thread.retVal=_this;return;
    },
    allContact :function _trc_BodyActor_allContact(klass) {
      "use strict";
      var _this=this;
      
      return _this.allContacts(klass);
    },
    fiber$allContact :function _trc_BodyActor_f_allContact(_thread,klass) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=_this.allContacts(klass);return;
      
      
      _thread.retVal=_this;return;
    },
    allContacts :function _trc_BodyActor_allContacts(klass) {
      "use strict";
      var _this=this;
      var res;
      var c;
      var a;
      var b;
      
      //$LASTPOS=29003061;//kernel.BodyActor:3061
      res = [];
      //$LASTPOS=29003077;//kernel.BodyActor:3077
      //$LASTPOS=29003082;//kernel.BodyActor:3082
      c = _this.world.GetContactList();
      while(c) {
        {
          //$LASTPOS=29003138;//kernel.BodyActor:3138
          if (c.IsTouching()) {
            //$LASTPOS=29003172;//kernel.BodyActor:3172
            a = c.GetFixtureA().GetBody().GetUserData();
            //$LASTPOS=29003231;//kernel.BodyActor:3231
            b = c.GetFixtureB().GetBody().GetUserData();
            //$LASTPOS=29003290;//kernel.BodyActor:3290
            if (a===_this) {
              //$LASTPOS=29003322;//kernel.BodyActor:3322
              if (! klass||b===klass||b instanceof klass) {
                //$LASTPOS=29003391;//kernel.BodyActor:3391
                res.push(b);
                
              }
              
            } else {
              //$LASTPOS=29003441;//kernel.BodyActor:3441
              if (b===_this) {
                //$LASTPOS=29003473;//kernel.BodyActor:3473
                if (! klass||a===klass||a instanceof klass) {
                  //$LASTPOS=29003542;//kernel.BodyActor:3542
                  res.push(a);
                  
                }
                
              }
            }
            
          }
        }
        c=c.GetNext();
      }
      return res;
    },
    fiber$allContacts :function _trc_BodyActor_f_allContacts(_thread,klass) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var res;
      var c;
      var a;
      var b;
      
      //$LASTPOS=29003061;//kernel.BodyActor:3061
      res = [];
      //$LASTPOS=29003077;//kernel.BodyActor:3077
      //$LASTPOS=29003082;//kernel.BodyActor:3082
      c = _this.world.GetContactList();
      while(c) {
        {
          //$LASTPOS=29003138;//kernel.BodyActor:3138
          if (c.IsTouching()) {
            //$LASTPOS=29003172;//kernel.BodyActor:3172
            a = c.GetFixtureA().GetBody().GetUserData();
            //$LASTPOS=29003231;//kernel.BodyActor:3231
            b = c.GetFixtureB().GetBody().GetUserData();
            //$LASTPOS=29003290;//kernel.BodyActor:3290
            if (a===_this) {
              //$LASTPOS=29003322;//kernel.BodyActor:3322
              if (! klass||b===klass||b instanceof klass) {
                //$LASTPOS=29003391;//kernel.BodyActor:3391
                res.push(b);
                
              }
              
            } else {
              //$LASTPOS=29003441;//kernel.BodyActor:3441
              if (b===_this) {
                //$LASTPOS=29003473;//kernel.BodyActor:3473
                if (! klass||a===klass||a instanceof klass) {
                  //$LASTPOS=29003542;//kernel.BodyActor:3542
                  res.push(a);
                  
                }
                
              }
            }
            
          }
        }
        c=c.GetNext();
      }
      _thread.retVal=res;return;
      
      
      _thread.retVal=_this;return;
    },
    applyForce :function _trc_BodyActor_applyForce(fx,fy,px,py) {
      "use strict";
      var _this=this;
      var b2Vec2;
      var scale;
      var fps;
      
      //$LASTPOS=29003652;//kernel.BodyActor:3652
      b2Vec2 = Box2D.Common.Math.b2Vec2;
      //$LASTPOS=29003695;//kernel.BodyActor:3695
      scale = _this.getWorld().scale;
      //$LASTPOS=29003727;//kernel.BodyActor:3727
      fps = 60;
      //$LASTPOS=29003743;//kernel.BodyActor:3743
      _this.body.ApplyForce(new b2Vec2(fx,fy),_this.body.GetPosition());
    },
    fiber$applyForce :function _trc_BodyActor_f_applyForce(_thread,fx,fy,px,py) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var b2Vec2;
      var scale;
      var fps;
      
      //$LASTPOS=29003652;//kernel.BodyActor:3652
      b2Vec2 = Box2D.Common.Math.b2Vec2;
      //$LASTPOS=29003695;//kernel.BodyActor:3695
      scale = _this.getWorld().scale;
      //$LASTPOS=29003727;//kernel.BodyActor:3727
      fps = 60;
      //$LASTPOS=29003743;//kernel.BodyActor:3743
      _this.body.ApplyForce(new b2Vec2(fx,fy),_this.body.GetPosition());
      
      _thread.retVal=_this;return;
    },
    applyImpulse :function _trc_BodyActor_applyImpulse(fx,fy,px,py) {
      "use strict";
      var _this=this;
      var b2Vec2;
      var scale;
      var fps;
      
      //$LASTPOS=29003834;//kernel.BodyActor:3834
      b2Vec2 = Box2D.Common.Math.b2Vec2;
      //$LASTPOS=29003877;//kernel.BodyActor:3877
      scale = _this.getWorld().scale;
      //$LASTPOS=29003909;//kernel.BodyActor:3909
      fps = 60;
      //$LASTPOS=29003925;//kernel.BodyActor:3925
      _this.body.ApplyImpulse(new b2Vec2(fx,fy),_this.body.GetPosition());
    },
    fiber$applyImpulse :function _trc_BodyActor_f_applyImpulse(_thread,fx,fy,px,py) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var b2Vec2;
      var scale;
      var fps;
      
      //$LASTPOS=29003834;//kernel.BodyActor:3834
      b2Vec2 = Box2D.Common.Math.b2Vec2;
      //$LASTPOS=29003877;//kernel.BodyActor:3877
      scale = _this.getWorld().scale;
      //$LASTPOS=29003909;//kernel.BodyActor:3909
      fps = 60;
      //$LASTPOS=29003925;//kernel.BodyActor:3925
      _this.body.ApplyImpulse(new b2Vec2(fx,fy),_this.body.GetPosition());
      
      _thread.retVal=_this;return;
    },
    applyTorque :function _trc_BodyActor_applyTorque(a) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=29004008;//kernel.BodyActor:4008
      _this.body.ApplyTorque(a);
    },
    fiber$applyTorque :function _trc_BodyActor_f_applyTorque(_thread,a) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=29004008;//kernel.BodyActor:4008
      _this.body.ApplyTorque(a);
      
      _thread.retVal=_this;return;
    },
    moveBy :function _trc_BodyActor_moveBy(dx,dy) {
      "use strict";
      var _this=this;
      var pos;
      
      //$LASTPOS=29004052;//kernel.BodyActor:4052
      pos = _this.body.GetPosition();
      //$LASTPOS=29004084;//kernel.BodyActor:4084
      pos.x+=dx/_this.scale;
      //$LASTPOS=29004105;//kernel.BodyActor:4105
      pos.y+=dy/_this.scale;
      //$LASTPOS=29004126;//kernel.BodyActor:4126
      _this.body.SetPosition(pos);
    },
    fiber$moveBy :function _trc_BodyActor_f_moveBy(_thread,dx,dy) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var pos;
      
      //$LASTPOS=29004052;//kernel.BodyActor:4052
      pos = _this.body.GetPosition();
      //$LASTPOS=29004084;//kernel.BodyActor:4084
      pos.x+=dx/_this.scale;
      //$LASTPOS=29004105;//kernel.BodyActor:4105
      pos.y+=dy/_this.scale;
      //$LASTPOS=29004126;//kernel.BodyActor:4126
      _this.body.SetPosition(pos);
      
      _thread.retVal=_this;return;
    },
    contactTo :function _trc_BodyActor_contactTo(t) {
      "use strict";
      var _this=this;
      
      return _this.allContact(t)[0];
    },
    fiber$contactTo :function _trc_BodyActor_f_contactTo(_thread,t) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=_this.allContact(t)[0];return;
      
      
      _thread.retVal=_this;return;
    },
    die :function _trc_BodyActor_die() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=29004211;//kernel.BodyActor:4211
      Tonyu.classes.kernel.Actor.prototype.die.apply( _this, []);
      //$LASTPOS=29004228;//kernel.BodyActor:4228
      _this.world.DestroyBody(_this.body);
    },
    addRevoluteJoint :function _trc_BodyActor_addRevoluteJoint(params) {
      "use strict";
      var _this=this;
      var px;
      var py;
      var wworld;
      var scale;
      var world;
      var b2BodyDef;
      var b2Body;
      var JDC;
      var jd;
      var bodyDef;
      var bodyB;
      var b2Vec2;
      
      //$LASTPOS=29004316;//kernel.BodyActor:4316
      params=params||{};
      //$LASTPOS=29004339;//kernel.BodyActor:4339
      px = params.x||_this.x;
      //$LASTPOS=29004363;//kernel.BodyActor:4363
      py = params.y||_this.y;
      //$LASTPOS=29004387;//kernel.BodyActor:4387
      wworld = _this.getWorld();
      //$LASTPOS=29004428;//kernel.BodyActor:4428
      scale = wworld.scale;
      //$LASTPOS=29004456;//kernel.BodyActor:4456
      world = wworld.world;
      //$LASTPOS=29004484;//kernel.BodyActor:4484
      b2BodyDef = Box2D.Dynamics.b2BodyDef;
      //$LASTPOS=29004530;//kernel.BodyActor:4530
      b2Body = Box2D.Dynamics.b2Body;
      //$LASTPOS=29004570;//kernel.BodyActor:4570
      JDC = Box2D.Dynamics.Joints.b2RevoluteJointDef;
      //$LASTPOS=29004624;//kernel.BodyActor:4624
      jd = new JDC;
      //$LASTPOS=29004644;//kernel.BodyActor:4644
      bodyDef = new b2BodyDef;
      //$LASTPOS=29004677;//kernel.BodyActor:4677
      bodyDef.type=b2Body.b2_staticBody;
      //$LASTPOS=29004718;//kernel.BodyActor:4718
      bodyDef.position.x=px/scale;
      //$LASTPOS=29004754;//kernel.BodyActor:4754
      bodyDef.position.y=py/scale;
      //$LASTPOS=29004790;//kernel.BodyActor:4790
      bodyB = world.CreateBody(bodyDef);
      //$LASTPOS=29004831;//kernel.BodyActor:4831
      b2Vec2 = Box2D.Common.Math.b2Vec2;
      //$LASTPOS=29004874;//kernel.BodyActor:4874
      jd.Initialize(_this.body,bodyB,new b2Vec2(px/scale,py/scale));
      //$LASTPOS=29004936;//kernel.BodyActor:4936
      if (params.lowerAngle&&params.upperAngle) {
        //$LASTPOS=29004989;//kernel.BodyActor:4989
        jd.lowerAngle=_this.rad(params.lowerAngle);
        //$LASTPOS=29005036;//kernel.BodyActor:5036
        jd.upperAngle=_this.rad(params.upperAngle);
        //$LASTPOS=29005083;//kernel.BodyActor:5083
        jd.enableLimit=true;
        
      }
      //$LASTPOS=29005116;//kernel.BodyActor:5116
      world.CreateJoint(jd);
    },
    fiber$addRevoluteJoint :function _trc_BodyActor_f_addRevoluteJoint(_thread,params) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var px;
      var py;
      var wworld;
      var scale;
      var world;
      var b2BodyDef;
      var b2Body;
      var JDC;
      var jd;
      var bodyDef;
      var bodyB;
      var b2Vec2;
      
      //$LASTPOS=29004316;//kernel.BodyActor:4316
      params=params||{};
      //$LASTPOS=29004339;//kernel.BodyActor:4339
      px = params.x||_this.x;
      //$LASTPOS=29004363;//kernel.BodyActor:4363
      py = params.y||_this.y;
      //$LASTPOS=29004387;//kernel.BodyActor:4387
      wworld = _this.getWorld();
      //$LASTPOS=29004428;//kernel.BodyActor:4428
      scale = wworld.scale;
      //$LASTPOS=29004456;//kernel.BodyActor:4456
      world = wworld.world;
      //$LASTPOS=29004484;//kernel.BodyActor:4484
      b2BodyDef = Box2D.Dynamics.b2BodyDef;
      //$LASTPOS=29004530;//kernel.BodyActor:4530
      b2Body = Box2D.Dynamics.b2Body;
      //$LASTPOS=29004570;//kernel.BodyActor:4570
      JDC = Box2D.Dynamics.Joints.b2RevoluteJointDef;
      //$LASTPOS=29004624;//kernel.BodyActor:4624
      jd = new JDC;
      //$LASTPOS=29004644;//kernel.BodyActor:4644
      bodyDef = new b2BodyDef;
      //$LASTPOS=29004677;//kernel.BodyActor:4677
      bodyDef.type=b2Body.b2_staticBody;
      //$LASTPOS=29004718;//kernel.BodyActor:4718
      bodyDef.position.x=px/scale;
      //$LASTPOS=29004754;//kernel.BodyActor:4754
      bodyDef.position.y=py/scale;
      //$LASTPOS=29004790;//kernel.BodyActor:4790
      bodyB = world.CreateBody(bodyDef);
      //$LASTPOS=29004831;//kernel.BodyActor:4831
      b2Vec2 = Box2D.Common.Math.b2Vec2;
      //$LASTPOS=29004874;//kernel.BodyActor:4874
      jd.Initialize(_this.body,bodyB,new b2Vec2(px/scale,py/scale));
      //$LASTPOS=29004936;//kernel.BodyActor:4936
      if (params.lowerAngle&&params.upperAngle) {
        //$LASTPOS=29004989;//kernel.BodyActor:4989
        jd.lowerAngle=_this.rad(params.lowerAngle);
        //$LASTPOS=29005036;//kernel.BodyActor:5036
        jd.upperAngle=_this.rad(params.upperAngle);
        //$LASTPOS=29005083;//kernel.BodyActor:5083
        jd.enableLimit=true;
        
      }
      //$LASTPOS=29005116;//kernel.BodyActor:5116
      world.CreateJoint(jd);
      
      _thread.retVal=_this;return;
    },
    __getter__rotation :function _trc_BodyActor___getter__rotation() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=29005161;//kernel.BodyActor:5161
      if (! _this.body||_this.manualRotation) {
        return _this._rotation;
      }
      return _this.deg(_this.body.GetAngle());
    },
    __setter__rotation :function _trc_BodyActor___setter__rotation(r) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=29005261;//kernel.BodyActor:5261
      r=r||0;
      //$LASTPOS=29005273;//kernel.BodyActor:5273
      if (! _this.body||_this.manualRotation) {
        return _this._rotation=r;
      }
      //$LASTPOS=29005326;//kernel.BodyActor:5326
      _this.body.SetAngle(_this.rad(r));
    },
    updatePos :function _trc_BodyActor_updatePos() {
      "use strict";
      var _this=this;
      
    },
    fiber$updatePos :function _trc_BodyActor_f_updatePos(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    __getter__x :function _trc_BodyActor___getter__x() {
      "use strict";
      var _this=this;
      var pos;
      
      //$LASTPOS=29005509;//kernel.BodyActor:5509
      if (! _this.body) {
        return _this._x;
      }
      //$LASTPOS=29005535;//kernel.BodyActor:5535
      pos = _this.body.GetPosition();
      return pos.x*_this.scale;
    },
    __setter__x :function _trc_BodyActor___setter__x(v) {
      "use strict";
      var _this=this;
      var pos;
      
      //$LASTPOS=29005600;//kernel.BodyActor:5600
      if (! _this.body) {
        return _this._x=v;
      }
      //$LASTPOS=29005628;//kernel.BodyActor:5628
      v=v||0;
      //$LASTPOS=29005640;//kernel.BodyActor:5640
      pos = _this.body.GetPosition();
      //$LASTPOS=29005672;//kernel.BodyActor:5672
      pos.x=v/_this.scale;
      //$LASTPOS=29005691;//kernel.BodyActor:5691
      _this.body.SetPosition(pos);
    },
    __getter__y :function _trc_BodyActor___getter__y() {
      "use strict";
      var _this=this;
      var pos;
      
      //$LASTPOS=29005725;//kernel.BodyActor:5725
      if (! _this.body) {
        return _this._y;
      }
      //$LASTPOS=29005751;//kernel.BodyActor:5751
      pos = _this.body.GetPosition();
      return pos.y*_this.scale;
    },
    __setter__y :function _trc_BodyActor___setter__y(v) {
      "use strict";
      var _this=this;
      var pos;
      
      //$LASTPOS=29005816;//kernel.BodyActor:5816
      if (! _this.body) {
        return _this._y=v;
      }
      //$LASTPOS=29005844;//kernel.BodyActor:5844
      v=v||0;
      //$LASTPOS=29005856;//kernel.BodyActor:5856
      pos = _this.body.GetPosition();
      //$LASTPOS=29005888;//kernel.BodyActor:5888
      pos.y=v/_this.scale;
      //$LASTPOS=29005907;//kernel.BodyActor:5907
      _this.body.SetPosition(pos);
    },
    __getter__vx :function _trc_BodyActor___getter__vx() {
      "use strict";
      var _this=this;
      var v;
      
      //$LASTPOS=29005943;//kernel.BodyActor:5943
      if (! _this.body) {
        return _this._vx;
      }
      //$LASTPOS=29005970;//kernel.BodyActor:5970
      v = _this.body.GetLinearVelocity();
      return v.x*_this.scale/_this.getWorld().fps;
    },
    __setter__vx :function _trc_BodyActor___setter__vx(v) {
      "use strict";
      var _this=this;
      var ve;
      
      //$LASTPOS=29006053;//kernel.BodyActor:6053
      if (! _this.body) {
        return _this._vx=v;
      }
      //$LASTPOS=29006082;//kernel.BodyActor:6082
      v=v||0;
      //$LASTPOS=29006094;//kernel.BodyActor:6094
      ve = _this.body.GetLinearVelocity();
      //$LASTPOS=29006131;//kernel.BodyActor:6131
      ve.x=v/_this.scale*_this.getWorld().fps;
      //$LASTPOS=29006164;//kernel.BodyActor:6164
      if (v) {
        //$LASTPOS=29006171;//kernel.BodyActor:6171
        _this.body.SetAwake(true);
      }
      //$LASTPOS=29006196;//kernel.BodyActor:6196
      _this.body.SetLinearVelocity(ve);
    },
    __getter__vy :function _trc_BodyActor___getter__vy() {
      "use strict";
      var _this=this;
      var v;
      
      //$LASTPOS=29006237;//kernel.BodyActor:6237
      if (! _this.body) {
        return _this._vy;
      }
      //$LASTPOS=29006264;//kernel.BodyActor:6264
      v = _this.body.GetLinearVelocity();
      return v.y*_this.scale/_this.getWorld().fps;
    },
    __setter__vy :function _trc_BodyActor___setter__vy(v) {
      "use strict";
      var _this=this;
      var ve;
      
      //$LASTPOS=29006347;//kernel.BodyActor:6347
      if (! _this.body) {
        return _this._vy=v;
      }
      //$LASTPOS=29006376;//kernel.BodyActor:6376
      ve = _this.body.GetLinearVelocity();
      //$LASTPOS=29006413;//kernel.BodyActor:6413
      ve.y=v/_this.scale*_this.getWorld().fps;
      //$LASTPOS=29006446;//kernel.BodyActor:6446
      if (v) {
        //$LASTPOS=29006453;//kernel.BodyActor:6453
        _this.body.SetAwake(true);
      }
      //$LASTPOS=29006478;//kernel.BodyActor:6478
      _this.body.SetLinearVelocity(ve);
    },
    __getter__vrotation :function _trc_BodyActor___getter__vrotation() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=29006525;//kernel.BodyActor:6525
      if (! _this.body) {
        return _this._vr;
      }
      return _this.deg(_this.body.GetAngularVelocity()/_this.getWorld().fps);
    },
    __setter__vrotation :function _trc_BodyActor___setter__vrotation(v) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=29006627;//kernel.BodyActor:6627
      if (! _this.body) {
        return _this._vr=v;
      }
      //$LASTPOS=29006656;//kernel.BodyActor:6656
      v=v||0;
      //$LASTPOS=29006668;//kernel.BodyActor:6668
      if (v) {
        //$LASTPOS=29006675;//kernel.BodyActor:6675
        _this.body.SetAwake(true);
      }
      //$LASTPOS=29006700;//kernel.BodyActor:6700
      _this.body.SetAngularVelocity(_this.rad(v*_this.getWorld().fps));
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"getWorld":{"nowait":false},"onAppear":{"nowait":false},"allContactPoints":{"nowait":false},"contactPoint":{"nowait":false},"allContact":{"nowait":false},"allContacts":{"nowait":false},"applyForce":{"nowait":false},"applyImpulse":{"nowait":false},"applyTorque":{"nowait":false},"moveBy":{"nowait":false},"contactTo":{"nowait":false},"die":{"nowait":true},"addRevoluteJoint":{"nowait":false},"__getter__rotation":{"nowait":true},"__setter__rotation":{"nowait":true},"updatePos":{"nowait":false},"__getter__x":{"nowait":true},"__setter__x":{"nowait":true},"__getter__y":{"nowait":true},"__setter__y":{"nowait":true},"__getter__vx":{"nowait":true},"__setter__vx":{"nowait":true},"__getter__vy":{"nowait":true},"__setter__vy":{"nowait":true},"__getter__vrotation":{"nowait":true},"__setter__vrotation":{"nowait":true}}}
});
Tonyu.klass.define({
  fullName: 'kernel.T2Body',
  shortName: 'T2Body',
  namespace: 'kernel',
  superclass: Tonyu.classes.kernel.BodyActor,
  includes: [],
  methods: {
    main :function _trc_T2Body_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_T2Body_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false}}}
});
Tonyu.klass.define({
  fullName: 'kernel.T2World',
  shortName: 'T2World',
  namespace: 'kernel',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [Tonyu.classes.kernel.T2Mod],
  methods: {
    main :function _trc_T2World_main() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=30000150;//kernel.T2World:150
      _this.loop();
    },
    fiber$main :function _trc_T2World_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.enter(function _trc_T2World_ent_main(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=30000150;//kernel.T2World:150
            _this.fiber$loop(_thread);
            __pc=1;return;
          case 1:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    onAppear :function _trc_T2World_onAppear() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=30000086;//kernel.T2World:86
      Tonyu.globals.$currentProject.requestPlugin("box2d");
      //$LASTPOS=30000133;//kernel.T2World:133
      _this.initWorld();
    },
    fiber$onAppear :function _trc_T2World_f_onAppear(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=30000086;//kernel.T2World:86
      Tonyu.globals.$currentProject.requestPlugin("box2d");
      
      _thread.enter(function _trc_T2World_ent_onAppear(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=30000133;//kernel.T2World:133
            _this.fiber$initWorld(_thread);
            __pc=1;return;
          case 1:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    initWorld :function _trc_T2World_initWorld() {
      "use strict";
      var _this=this;
      var b2World;
      var b2Vec2;
      
      //$LASTPOS=30000183;//kernel.T2World:183
      _this.gravity=_this.defv(_this.gravity,9.8);
      //$LASTPOS=30000216;//kernel.T2World:216
      _this.gravityX=_this.defv(_this.gravityX,0);
      //$LASTPOS=30000249;//kernel.T2World:249
      _this.fps=Tonyu.globals.$Boot.getFrameRate();
      //$LASTPOS=30000280;//kernel.T2World:280
      b2World = Box2D.Dynamics.b2World;
      //$LASTPOS=30000323;//kernel.T2World:323
      b2Vec2 = Box2D.Common.Math.b2Vec2;
      //$LASTPOS=30000367;//kernel.T2World:367
      _this.scale=_this.scale||32;
      //$LASTPOS=30000391;//kernel.T2World:391
      _this.world=new b2World(new b2Vec2(_this.gravityX,_this.gravity),true);
      //$LASTPOS=30000516;//kernel.T2World:516
      Tonyu.globals.$t2World=_this;
      //$LASTPOS=30000536;//kernel.T2World:536
      Tonyu.globals.$Boot.on("stop",Tonyu.bindFunc(_this,_this.releaseWorld));
      //$LASTPOS=30000572;//kernel.T2World:572
      _this.on("die",Tonyu.bindFunc(_this,_this.releaseWorld));
    },
    fiber$initWorld :function _trc_T2World_f_initWorld(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var b2World;
      var b2Vec2;
      
      
      _thread.enter(function _trc_T2World_ent_initWorld(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=30000183;//kernel.T2World:183
            _this.fiber$defv(_thread, _this.gravity, 9.8);
            __pc=1;return;
          case 1:
            _this.gravity=_thread.retVal;
            
            //$LASTPOS=30000216;//kernel.T2World:216
            _this.fiber$defv(_thread, _this.gravityX, 0);
            __pc=2;return;
          case 2:
            _this.gravityX=_thread.retVal;
            
            //$LASTPOS=30000249;//kernel.T2World:249
            _this.fps=Tonyu.globals.$Boot.getFrameRate();
            //$LASTPOS=30000280;//kernel.T2World:280
            b2World = Box2D.Dynamics.b2World;
            //$LASTPOS=30000323;//kernel.T2World:323
            b2Vec2 = Box2D.Common.Math.b2Vec2;
            //$LASTPOS=30000367;//kernel.T2World:367
            _this.scale=_this.scale||32;
            //$LASTPOS=30000391;//kernel.T2World:391
            _this.world=new b2World(new b2Vec2(_this.gravityX,_this.gravity),true);
            //$LASTPOS=30000516;//kernel.T2World:516
            Tonyu.globals.$t2World=_this;
            //$LASTPOS=30000536;//kernel.T2World:536
            Tonyu.globals.$Boot.on("stop",Tonyu.bindFunc(_this,_this.releaseWorld));
            //$LASTPOS=30000572;//kernel.T2World:572
            _this.on("die",Tonyu.bindFunc(_this,_this.releaseWorld));
            _thread.exit(_this);return;
          }
        }
      });
    },
    releaseWorld :function _trc_T2World_releaseWorld() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=30000623;//kernel.T2World:623
      if (Tonyu.globals.$t2World===_this) {
        //$LASTPOS=30000644;//kernel.T2World:644
        Tonyu.globals.$t2World=null;
      }
    },
    fiber$releaseWorld :function _trc_T2World_f_releaseWorld(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=30000623;//kernel.T2World:623
      if (Tonyu.globals.$t2World===_this) {
        //$LASTPOS=30000644;//kernel.T2World:644
        Tonyu.globals.$t2World=null;
      }
      
      _thread.retVal=_this;return;
    },
    loop :function _trc_T2World_loop() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=30000680;//kernel.T2World:680
      while (true) {
        //$LASTPOS=30000703;//kernel.T2World:703
        _this.fps=Tonyu.globals.$Boot.getFrameRate();
        //$LASTPOS=30000738;//kernel.T2World:738
        _this.world.Step(1/_this.fps,10,10);
        //$LASTPOS=30000922;//kernel.T2World:922
        _this.world.ClearForces();
        //$LASTPOS=30000976;//kernel.T2World:976
        _this.update();
        
      }
    },
    fiber$loop :function _trc_T2World_f_loop(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.enter(function _trc_T2World_ent_loop(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=30000680;//kernel.T2World:680
          case 1:
            //$LASTPOS=30000703;//kernel.T2World:703
            _this.fps=Tonyu.globals.$Boot.getFrameRate();
            //$LASTPOS=30000738;//kernel.T2World:738
            _this.world.Step(1/_this.fps,10,10);
            //$LASTPOS=30000922;//kernel.T2World:922
            _this.world.ClearForces();
            //$LASTPOS=30000976;//kernel.T2World:976
            _this.fiber$update(_thread);
            __pc=2;return;
          case 2:
            
            __pc=1;break;
          case 3:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    updatePos :function _trc_T2World_updatePos() {
      "use strict";
      var _this=this;
      var b;
      var d;
      
      //$LASTPOS=30001017;//kernel.T2World:1017
      //$LASTPOS=30001022;//kernel.T2World:1022
      b = _this.world.GetBodyList();
      while(b) {
        {
          //$LASTPOS=30001076;//kernel.T2World:1076
          d = b.GetUserData();
          //$LASTPOS=30001108;//kernel.T2World:1108
          if (d) {
            //$LASTPOS=30001114;//kernel.T2World:1114
            d.updatePos();
          }
        }
        b=b.GetNext();
      }
    },
    fiber$updatePos :function _trc_T2World_f_updatePos(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var b;
      var d;
      
      //$LASTPOS=30001017;//kernel.T2World:1017
      //$LASTPOS=30001022;//kernel.T2World:1022
      b = _this.world.GetBodyList();
      while(b) {
        {
          //$LASTPOS=30001076;//kernel.T2World:1076
          d = b.GetUserData();
          //$LASTPOS=30001108;//kernel.T2World:1108
          if (d) {
            //$LASTPOS=30001114;//kernel.T2World:1114
            d.updatePos();
          }
        }
        b=b.GetNext();
      }
      
      _thread.retVal=_this;return;
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"onAppear":{"nowait":false},"initWorld":{"nowait":false},"releaseWorld":{"nowait":false},"loop":{"nowait":false},"updatePos":{"nowait":false}}}
});
Tonyu.klass.define({
  fullName: 'kernel.T2MediaPlayer',
  shortName: 'T2MediaPlayer',
  namespace: 'kernel',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: {
    main :function _trc_T2MediaPlayer_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_T2MediaPlayer_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    initialize :function _trc_T2MediaPlayer_initialize() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=31000069;//kernel.T2MediaPlayer:69
      _this.initT2MediaPlayer();
    },
    initT2MediaPlayer :function _trc_T2MediaPlayer_initT2MediaPlayer() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=31000124;//kernel.T2MediaPlayer:124
      if (T2MediaLib.inited) {
        return _this;
      }
      //$LASTPOS=31000160;//kernel.T2MediaPlayer:160
      T2MediaLib.init();
      //$LASTPOS=31000184;//kernel.T2MediaPlayer:184
      T2MediaLib.inited=true;
      //$LASTPOS=31000213;//kernel.T2MediaPlayer:213
      _this.bgmPlayerMax=T2MediaLib.bgmPlayerMax;
    },
    fiber$initT2MediaPlayer :function _trc_T2MediaPlayer_f_initT2MediaPlayer(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=31000124;//kernel.T2MediaPlayer:124
      if (T2MediaLib.inited) {
        _thread.retVal=_this;return;
        
      }
      //$LASTPOS=31000160;//kernel.T2MediaPlayer:160
      T2MediaLib.init();
      //$LASTPOS=31000184;//kernel.T2MediaPlayer:184
      T2MediaLib.inited=true;
      //$LASTPOS=31000213;//kernel.T2MediaPlayer:213
      _this.bgmPlayerMax=T2MediaLib.bgmPlayerMax;
      
      _thread.retVal=_this;return;
    },
    clearSEData :function _trc_T2MediaPlayer_clearSEData() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=31000281;//kernel.T2MediaPlayer:281
      T2MediaLib.allStopBGM();
      //$LASTPOS=31000311;//kernel.T2MediaPlayer:311
      T2MediaLib.allClearData();
    },
    fiber$clearSEData :function _trc_T2MediaPlayer_f_clearSEData(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=31000281;//kernel.T2MediaPlayer:281
      T2MediaLib.allStopBGM();
      //$LASTPOS=31000311;//kernel.T2MediaPlayer:311
      T2MediaLib.allClearData();
      
      _thread.retVal=_this;return;
    },
    clearBGMData :function _trc_T2MediaPlayer_clearBGMData() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=31000367;//kernel.T2MediaPlayer:367
      _this.clearSEData();
    },
    fiber$clearBGMData :function _trc_T2MediaPlayer_f_clearBGMData(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.enter(function _trc_T2MediaPlayer_ent_clearBGMData(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=31000367;//kernel.T2MediaPlayer:367
            _this.fiber$clearSEData(_thread);
            __pc=1;return;
          case 1:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    deleteSEData :function _trc_T2MediaPlayer_deleteSEData(idx) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=31000414;//kernel.T2MediaPlayer:414
      T2MediaLib.clearData(idx);
    },
    fiber$deleteSEData :function _trc_T2MediaPlayer_f_deleteSEData(_thread,idx) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=31000414;//kernel.T2MediaPlayer:414
      T2MediaLib.clearData(idx);
      
      _thread.retVal=_this;return;
    },
    loadSE :function _trc_T2MediaPlayer_loadSE(idx,src) {
      "use strict";
      var _this=this;
      var data;
      
      //$LASTPOS=31000508;//kernel.T2MediaPlayer:508
      _this.runAsync((function anonymous_517(succ,err) {
        
        //$LASTPOS=31000567;//kernel.T2MediaPlayer:567
        T2MediaLib.loadSE(idx,src,{succ: succ,err: err});
      }));
      //$LASTPOS=31000620;//kernel.T2MediaPlayer:620
      data = T2MediaLib.getSEData(idx);
      return data;
    },
    fiber$loadSE :function _trc_T2MediaPlayer_f_loadSE(_thread,idx,src) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var data;
      
      
      _thread.enter(function _trc_T2MediaPlayer_ent_loadSE(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=31000508;//kernel.T2MediaPlayer:508
            _this.fiber$runAsync(_thread, (function anonymous_517(succ,err) {
              
              //$LASTPOS=31000567;//kernel.T2MediaPlayer:567
              T2MediaLib.loadSE(idx,src,{succ: succ,err: err});
            }));
            __pc=1;return;
          case 1:
            
            //$LASTPOS=31000620;//kernel.T2MediaPlayer:620
            data = T2MediaLib.getSEData(idx);
            _thread.exit(data);return;
            _thread.exit(_this);return;
          }
        }
      });
    },
    __getter__available :function _trc_T2MediaPlayer___getter__available() {
      "use strict";
      var _this=this;
      
      return ! ! T2MediaLib.context;
    },
    loadFromProject :function _trc_T2MediaPlayer_loadFromProject(prj) {
      "use strict";
      var _this=this;
      var r;
      var s;
      var _it_281;
      var name;
      var url;
      var e;
      
      //$LASTPOS=31000881;//kernel.T2MediaPlayer:881
      if (! _this.available) {
        return _this;
      }
      //$LASTPOS=31000910;//kernel.T2MediaPlayer:910
      r = prj.getResource();
      //$LASTPOS=31000940;//kernel.T2MediaPlayer:940
      if (! r||! r.sounds) {
        return _this;
      }
      //$LASTPOS=31000974;//kernel.T2MediaPlayer:974
      _it_281=Tonyu.iterator(r.sounds,1);
      while(_it_281.next()) {
        s=_it_281[0];
        
        //$LASTPOS=31001010;//kernel.T2MediaPlayer:1010
        name = s.name;url = Tonyu.Assets.resolve(s.url,prj.getDir());
        //$LASTPOS=31001084;//kernel.T2MediaPlayer:1084
        Tonyu.setGlobal(name,name);
        try {
          //$LASTPOS=31001142;//kernel.T2MediaPlayer:1142
          _this.print("Loading Sound2: "+name);
          //$LASTPOS=31001187;//kernel.T2MediaPlayer:1187
          _this.loadSE(name,url);
          
        } catch (e) {
          //$LASTPOS=31001242;//kernel.T2MediaPlayer:1242
          _this.print("Fail");
          //$LASTPOS=31001270;//kernel.T2MediaPlayer:1270
          Tonyu.setGlobal(name,"ERROR");
          
        }
        
      }
    },
    fiber$loadFromProject :function _trc_T2MediaPlayer_f_loadFromProject(_thread,prj) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var r;
      var s;
      var _it_281;
      var name;
      var url;
      var e;
      
      //$LASTPOS=31000881;//kernel.T2MediaPlayer:881
      if (! _this.available) {
        _thread.retVal=_this;return;
        
      }
      //$LASTPOS=31000910;//kernel.T2MediaPlayer:910
      r = prj.getResource();
      //$LASTPOS=31000940;//kernel.T2MediaPlayer:940
      if (! r||! r.sounds) {
        _thread.retVal=_this;return;
        
      }
      
      _thread.enter(function _trc_T2MediaPlayer_ent_loadFromProject(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=31000974;//kernel.T2MediaPlayer:974
            _it_281=Tonyu.iterator(r.sounds,1);
          case 1:
            if (!(_it_281.next())) { __pc=5; break; }
            s=_it_281[0];
            
            //$LASTPOS=31001010;//kernel.T2MediaPlayer:1010
            name = s.name;url = Tonyu.Assets.resolve(s.url,prj.getDir());
            //$LASTPOS=31001084;//kernel.T2MediaPlayer:1084
            Tonyu.setGlobal(name,name);
            _thread.enterTry(3);
            //$LASTPOS=31001142;//kernel.T2MediaPlayer:1142
            _this.print("Loading Sound2: "+name);
            //$LASTPOS=31001187;//kernel.T2MediaPlayer:1187
            _this.fiber$loadSE(_thread, name, url);
            __pc=2;return;
          case 2:
            _thread.exitTry();
            __pc=4;break;
          case 3:
            e=_thread.startCatch();
            _thread.exitTry();
            {
              //$LASTPOS=31001242;//kernel.T2MediaPlayer:1242
              _this.print("Fail");
              //$LASTPOS=31001270;//kernel.T2MediaPlayer:1270
              Tonyu.setGlobal(name,"ERROR");
            }
          case 4:
            
            __pc=1;break;
          case 5:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    playSE :function _trc_T2MediaPlayer_playSE(idx,vol,rate,offset,loop,loopStart,loopEnd) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=31001408;//kernel.T2MediaPlayer:1408
      if (_this.mute) {
        return _this;
      }
      //$LASTPOS=31001467;//kernel.T2MediaPlayer:1467
      if (vol==null) {
        //$LASTPOS=31001484;//kernel.T2MediaPlayer:1484
        vol=128;
      }
      //$LASTPOS=31001573;//kernel.T2MediaPlayer:1573
      if (vol<0) {
        //$LASTPOS=31001593;//kernel.T2MediaPlayer:1593
        vol=0;
      } else {
        //$LASTPOS=31001614;//kernel.T2MediaPlayer:1614
        if (vol>128) {
          //$LASTPOS=31001629;//kernel.T2MediaPlayer:1629
          vol=128;
        }
      }
      return T2MediaLib.playSE(idx,vol/128,rate,offset,loop,loopStart,loopEnd);
    },
    stopSE :function _trc_T2MediaPlayer_stopSE(sourceObj) {
      "use strict";
      var _this=this;
      
      return T2MediaLib.stopSE(sourceObj);
    },
    fiber$stopSE :function _trc_T2MediaPlayer_f_stopSE(_thread,sourceObj) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=T2MediaLib.stopSE(sourceObj);return;
      
      
      _thread.retVal=_this;return;
    },
    getSEData :function _trc_T2MediaPlayer_getSEData(idx) {
      "use strict";
      var _this=this;
      
      return T2MediaLib.getSEData(idx);
    },
    fiber$getSEData :function _trc_T2MediaPlayer_f_getSEData(_thread,idx) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=T2MediaLib.getSEData(idx);return;
      
      
      _thread.retVal=_this;return;
    },
    loadBGM :function _trc_T2MediaPlayer_loadBGM(idx,src) {
      "use strict";
      var _this=this;
      var data;
      
      //$LASTPOS=31001920;//kernel.T2MediaPlayer:1920
      T2MediaLib.loadBGM(idx,src);
      //$LASTPOS=31001980;//kernel.T2MediaPlayer:1980
      data = T2MediaLib.getBGMData(idx);
      //$LASTPOS=31002024;//kernel.T2MediaPlayer:2024
      while (data==null) {
        //$LASTPOS=31002056;//kernel.T2MediaPlayer:2056
        _this.update();
        //$LASTPOS=31002075;//kernel.T2MediaPlayer:2075
        data=T2MediaLib.getBGMData(idx);
        
      }
      return data;
    },
    fiber$loadBGM :function _trc_T2MediaPlayer_f_loadBGM(_thread,idx,src) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var data;
      
      //$LASTPOS=31001920;//kernel.T2MediaPlayer:1920
      T2MediaLib.loadBGM(idx,src);
      //$LASTPOS=31001980;//kernel.T2MediaPlayer:1980
      data = T2MediaLib.getBGMData(idx);
      
      _thread.enter(function _trc_T2MediaPlayer_ent_loadBGM(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=31002024;//kernel.T2MediaPlayer:2024
          case 1:
            if (!(data==null)) { __pc=3; break; }
            //$LASTPOS=31002056;//kernel.T2MediaPlayer:2056
            _this.fiber$update(_thread);
            __pc=2;return;
          case 2:
            
            //$LASTPOS=31002075;//kernel.T2MediaPlayer:2075
            data=T2MediaLib.getBGMData(idx);
            __pc=1;break;
          case 3:
            
            _thread.exit(data);return;
            _thread.exit(_this);return;
          }
        }
      });
    },
    playBGM :function _trc_T2MediaPlayer_playBGM(idx,loop,offset,loopStart,loopEnd) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=31002196;//kernel.T2MediaPlayer:2196
      if (_this.mute) {
        return _this;
      }
      //$LASTPOS=31002219;//kernel.T2MediaPlayer:2219
      if (loop===null) {
        //$LASTPOS=31002238;//kernel.T2MediaPlayer:2238
        loop=false;
      }
      //$LASTPOS=31002257;//kernel.T2MediaPlayer:2257
      if (offset===null) {
        //$LASTPOS=31002278;//kernel.T2MediaPlayer:2278
        offset=0;
      }
      return T2MediaLib.playBGM(0,idx,loop,offset,loopStart,loopEnd);
    },
    fiber$playBGM :function _trc_T2MediaPlayer_f_playBGM(_thread,idx,loop,offset,loopStart,loopEnd) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=31002196;//kernel.T2MediaPlayer:2196
      if (_this.mute) {
        _thread.retVal=_this;return;
        
      }
      //$LASTPOS=31002219;//kernel.T2MediaPlayer:2219
      if (loop===null) {
        //$LASTPOS=31002238;//kernel.T2MediaPlayer:2238
        loop=false;
      }
      //$LASTPOS=31002257;//kernel.T2MediaPlayer:2257
      if (offset===null) {
        //$LASTPOS=31002278;//kernel.T2MediaPlayer:2278
        offset=0;
      }
      _thread.retVal=T2MediaLib.playBGM(0,idx,loop,offset,loopStart,loopEnd);return;
      
      
      _thread.retVal=_this;return;
    },
    stopBGM :function _trc_T2MediaPlayer_stopBGM() {
      "use strict";
      var _this=this;
      
      return T2MediaLib.stopBGM(0);
    },
    fiber$stopBGM :function _trc_T2MediaPlayer_f_stopBGM(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=T2MediaLib.stopBGM(0);return;
      
      
      _thread.retVal=_this;return;
    },
    pauseBGM :function _trc_T2MediaPlayer_pauseBGM() {
      "use strict";
      var _this=this;
      
      return T2MediaLib.pauseBGM(0);
    },
    fiber$pauseBGM :function _trc_T2MediaPlayer_f_pauseBGM(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=T2MediaLib.pauseBGM(0);return;
      
      
      _thread.retVal=_this;return;
    },
    resumeBGM :function _trc_T2MediaPlayer_resumeBGM() {
      "use strict";
      var _this=this;
      
      return T2MediaLib.resumeBGM(0);
    },
    fiber$resumeBGM :function _trc_T2MediaPlayer_f_resumeBGM(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=T2MediaLib.resumeBGM(0);return;
      
      
      _thread.retVal=_this;return;
    },
    setBGMVolume :function _trc_T2MediaPlayer_setBGMVolume(vol) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=31002564;//kernel.T2MediaPlayer:2564
      vol=vol/128;
      //$LASTPOS=31002659;//kernel.T2MediaPlayer:2659
      if (vol>1) {
        //$LASTPOS=31002679;//kernel.T2MediaPlayer:2679
        vol=1;
      } else {
        //$LASTPOS=31002700;//kernel.T2MediaPlayer:2700
        if (vol<0) {
          //$LASTPOS=31002715;//kernel.T2MediaPlayer:2715
          vol=0;
        }
      }
      return T2MediaLib.setBGMVolume(0,vol);
    },
    fiber$setBGMVolume :function _trc_T2MediaPlayer_f_setBGMVolume(_thread,vol) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=31002564;//kernel.T2MediaPlayer:2564
      vol=vol/128;
      //$LASTPOS=31002659;//kernel.T2MediaPlayer:2659
      if (vol>1) {
        //$LASTPOS=31002679;//kernel.T2MediaPlayer:2679
        vol=1;
      } else {
        //$LASTPOS=31002700;//kernel.T2MediaPlayer:2700
        if (vol<0) {
          //$LASTPOS=31002715;//kernel.T2MediaPlayer:2715
          vol=0;
        }
      }
      _thread.retVal=T2MediaLib.setBGMVolume(0,vol);return;
      
      
      _thread.retVal=_this;return;
    },
    setBGMTempo :function _trc_T2MediaPlayer_setBGMTempo(tempo) {
      "use strict";
      var _this=this;
      
      return T2MediaLib.setBGMTempo(0,tempo);
    },
    fiber$setBGMTempo :function _trc_T2MediaPlayer_f_setBGMTempo(_thread,tempo) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=T2MediaLib.setBGMTempo(0,tempo);return;
      
      
      _thread.retVal=_this;return;
    },
    getBGMCurrentTime :function _trc_T2MediaPlayer_getBGMCurrentTime() {
      "use strict";
      var _this=this;
      
      return T2MediaLib.getBGMCurrentTime(0);
    },
    fiber$getBGMCurrentTime :function _trc_T2MediaPlayer_f_getBGMCurrentTime(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=T2MediaLib.getBGMCurrentTime(0);return;
      
      
      _thread.retVal=_this;return;
    },
    getBGMLength :function _trc_T2MediaPlayer_getBGMLength() {
      "use strict";
      var _this=this;
      
      return T2MediaLib.getBGMLength(0);
    },
    fiber$getBGMLength :function _trc_T2MediaPlayer_f_getBGMLength(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=T2MediaLib.getBGMLength(0);return;
      
      
      _thread.retVal=_this;return;
    },
    getBGMData :function _trc_T2MediaPlayer_getBGMData(idx) {
      "use strict";
      var _this=this;
      
      return T2MediaLib.getBGMData(idx);
    },
    fiber$getBGMData :function _trc_T2MediaPlayer_f_getBGMData(_thread,idx) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=T2MediaLib.getBGMData(idx);return;
      
      
      _thread.retVal=_this;return;
    },
    playBGMID :function _trc_T2MediaPlayer_playBGMID(id,idx,loop,offset,loopStart,loopEnd) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=31003219;//kernel.T2MediaPlayer:3219
      if (loop===null) {
        //$LASTPOS=31003238;//kernel.T2MediaPlayer:3238
        loop=false;
      }
      //$LASTPOS=31003257;//kernel.T2MediaPlayer:3257
      if (offset===null) {
        //$LASTPOS=31003278;//kernel.T2MediaPlayer:3278
        offset=0;
      }
      return T2MediaLib.playBGM(id,idx,loop,offset,loopStart,loopEnd);
    },
    fiber$playBGMID :function _trc_T2MediaPlayer_f_playBGMID(_thread,id,idx,loop,offset,loopStart,loopEnd) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=31003219;//kernel.T2MediaPlayer:3219
      if (loop===null) {
        //$LASTPOS=31003238;//kernel.T2MediaPlayer:3238
        loop=false;
      }
      //$LASTPOS=31003257;//kernel.T2MediaPlayer:3257
      if (offset===null) {
        //$LASTPOS=31003278;//kernel.T2MediaPlayer:3278
        offset=0;
      }
      _thread.retVal=T2MediaLib.playBGM(id,idx,loop,offset,loopStart,loopEnd);return;
      
      
      _thread.retVal=_this;return;
    },
    stopBGMID :function _trc_T2MediaPlayer_stopBGMID(id) {
      "use strict";
      var _this=this;
      
      return T2MediaLib.stopBGM(id);
    },
    fiber$stopBGMID :function _trc_T2MediaPlayer_f_stopBGMID(_thread,id) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=T2MediaLib.stopBGM(id);return;
      
      
      _thread.retVal=_this;return;
    },
    pauseBGMID :function _trc_T2MediaPlayer_pauseBGMID(id) {
      "use strict";
      var _this=this;
      
      return T2MediaLib.pauseBGM(id);
    },
    fiber$pauseBGMID :function _trc_T2MediaPlayer_f_pauseBGMID(_thread,id) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=T2MediaLib.pauseBGM(id);return;
      
      
      _thread.retVal=_this;return;
    },
    resumeBGMID :function _trc_T2MediaPlayer_resumeBGMID(id) {
      "use strict";
      var _this=this;
      
      return T2MediaLib.resumeBGM(id);
    },
    fiber$resumeBGMID :function _trc_T2MediaPlayer_f_resumeBGMID(_thread,id) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=T2MediaLib.resumeBGM(id);return;
      
      
      _thread.retVal=_this;return;
    },
    setBGMVolumeID :function _trc_T2MediaPlayer_setBGMVolumeID(id,vol) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=31003586;//kernel.T2MediaPlayer:3586
      vol=vol/128;
      //$LASTPOS=31003681;//kernel.T2MediaPlayer:3681
      if (vol>1) {
        //$LASTPOS=31003701;//kernel.T2MediaPlayer:3701
        vol=1;
      } else {
        //$LASTPOS=31003722;//kernel.T2MediaPlayer:3722
        if (vol<0) {
          //$LASTPOS=31003737;//kernel.T2MediaPlayer:3737
          vol=0;
        }
      }
      return T2MediaLib.setBGMVolume(id,vol);
    },
    fiber$setBGMVolumeID :function _trc_T2MediaPlayer_f_setBGMVolumeID(_thread,id,vol) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=31003586;//kernel.T2MediaPlayer:3586
      vol=vol/128;
      //$LASTPOS=31003681;//kernel.T2MediaPlayer:3681
      if (vol>1) {
        //$LASTPOS=31003701;//kernel.T2MediaPlayer:3701
        vol=1;
      } else {
        //$LASTPOS=31003722;//kernel.T2MediaPlayer:3722
        if (vol<0) {
          //$LASTPOS=31003737;//kernel.T2MediaPlayer:3737
          vol=0;
        }
      }
      _thread.retVal=T2MediaLib.setBGMVolume(id,vol);return;
      
      
      _thread.retVal=_this;return;
    },
    setBGMTempoID :function _trc_T2MediaPlayer_setBGMTempoID(id,tempo) {
      "use strict";
      var _this=this;
      
      return T2MediaLib.setBGMTempo(id,tempo);
    },
    fiber$setBGMTempoID :function _trc_T2MediaPlayer_f_setBGMTempoID(_thread,id,tempo) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=T2MediaLib.setBGMTempo(id,tempo);return;
      
      
      _thread.retVal=_this;return;
    },
    getBGMCurrentTimeID :function _trc_T2MediaPlayer_getBGMCurrentTimeID(id) {
      "use strict";
      var _this=this;
      
      return T2MediaLib.getBGMCurrentTime(id);
    },
    fiber$getBGMCurrentTimeID :function _trc_T2MediaPlayer_f_getBGMCurrentTimeID(_thread,id) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=T2MediaLib.getBGMCurrentTime(id);return;
      
      
      _thread.retVal=_this;return;
    },
    getBGMLengthID :function _trc_T2MediaPlayer_getBGMLengthID(id) {
      "use strict";
      var _this=this;
      
      return T2MediaLib.getBGMLength(id);
    },
    fiber$getBGMLengthID :function _trc_T2MediaPlayer_f_getBGMLengthID(_thread,id) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=T2MediaLib.getBGMLength(id);return;
      
      
      _thread.retVal=_this;return;
    },
    sizeBGMID :function _trc_T2MediaPlayer_sizeBGMID() {
      "use strict";
      var _this=this;
      
      return T2MediaLib.getBGMPlayerMax();
    },
    fiber$sizeBGMID :function _trc_T2MediaPlayer_f_sizeBGMID(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=T2MediaLib.getBGMPlayerMax();return;
      
      
      _thread.retVal=_this;return;
    },
    allStopBGM :function _trc_T2MediaPlayer_allStopBGM() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=31004197;//kernel.T2MediaPlayer:4197
      T2MediaLib.allStopBGM();
    },
    fiber$allStopBGM :function _trc_T2MediaPlayer_f_allStopBGM(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=31004197;//kernel.T2MediaPlayer:4197
      T2MediaLib.allStopBGM();
      
      _thread.retVal=_this;return;
    },
    loadAudio :function _trc_T2MediaPlayer_loadAudio(idx,src) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=31004276;//kernel.T2MediaPlayer:4276
      T2MediaLib.loadAudio(idx,src);
      //$LASTPOS=31004338;//kernel.T2MediaPlayer:4338
      while (T2MediaLib.getAudioData(idx)==null) {
        //$LASTPOS=31004383;//kernel.T2MediaPlayer:4383
        _this.update();
      }
    },
    fiber$loadAudio :function _trc_T2MediaPlayer_f_loadAudio(_thread,idx,src) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=31004276;//kernel.T2MediaPlayer:4276
      T2MediaLib.loadAudio(idx,src);
      
      _thread.enter(function _trc_T2MediaPlayer_ent_loadAudio(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=31004338;//kernel.T2MediaPlayer:4338
          case 1:
            if (!(T2MediaLib.getAudioData(idx)==null)) { __pc=3; break; }
            //$LASTPOS=31004383;//kernel.T2MediaPlayer:4383
            _this.fiber$update(_thread);
            __pc=2;return;
          case 2:
            
            __pc=1;break;
          case 3:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    playAudio :function _trc_T2MediaPlayer_playAudio(idx,loop,startTime) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=31004439;//kernel.T2MediaPlayer:4439
      if (loop===null) {
        //$LASTPOS=31004458;//kernel.T2MediaPlayer:4458
        loop=false;
      }
      //$LASTPOS=31004477;//kernel.T2MediaPlayer:4477
      if (startTime===null) {
        //$LASTPOS=31004501;//kernel.T2MediaPlayer:4501
        startTime=0;
      }
      return T2MediaLib.playAudio(idx,loop,startTime);
    },
    fiber$playAudio :function _trc_T2MediaPlayer_f_playAudio(_thread,idx,loop,startTime) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=31004439;//kernel.T2MediaPlayer:4439
      if (loop===null) {
        //$LASTPOS=31004458;//kernel.T2MediaPlayer:4458
        loop=false;
      }
      //$LASTPOS=31004477;//kernel.T2MediaPlayer:4477
      if (startTime===null) {
        //$LASTPOS=31004501;//kernel.T2MediaPlayer:4501
        startTime=0;
      }
      _thread.retVal=T2MediaLib.playAudio(idx,loop,startTime);return;
      
      
      _thread.retVal=_this;return;
    },
    stopAudio :function _trc_T2MediaPlayer_stopAudio() {
      "use strict";
      var _this=this;
      
      return T2MediaLib.stopAudio();
    },
    fiber$stopAudio :function _trc_T2MediaPlayer_f_stopAudio(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=T2MediaLib.stopAudio();return;
      
      
      _thread.retVal=_this;return;
    },
    pauseAudio :function _trc_T2MediaPlayer_pauseAudio() {
      "use strict";
      var _this=this;
      
      return T2MediaLib.pauseAudio();
    },
    fiber$pauseAudio :function _trc_T2MediaPlayer_f_pauseAudio(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=T2MediaLib.pauseAudio();return;
      
      
      _thread.retVal=_this;return;
    },
    resumeAudio :function _trc_T2MediaPlayer_resumeAudio() {
      "use strict";
      var _this=this;
      
      return T2MediaLib.resumeAudio();
    },
    fiber$resumeAudio :function _trc_T2MediaPlayer_f_resumeAudio(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=T2MediaLib.resumeAudio();return;
      
      
      _thread.retVal=_this;return;
    },
    setAudioVolume :function _trc_T2MediaPlayer_setAudioVolume(vol) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=31004783;//kernel.T2MediaPlayer:4783
      vol=vol/128;
      //$LASTPOS=31004805;//kernel.T2MediaPlayer:4805
      if (vol>1) {
        //$LASTPOS=31004825;//kernel.T2MediaPlayer:4825
        vol=1;
      } else {
        //$LASTPOS=31004846;//kernel.T2MediaPlayer:4846
        if (vol<0) {
          //$LASTPOS=31004861;//kernel.T2MediaPlayer:4861
          vol=0;
        }
      }
      return T2MediaLib.setAudioVolume(vol);
    },
    fiber$setAudioVolume :function _trc_T2MediaPlayer_f_setAudioVolume(_thread,vol) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=31004783;//kernel.T2MediaPlayer:4783
      vol=vol/128;
      //$LASTPOS=31004805;//kernel.T2MediaPlayer:4805
      if (vol>1) {
        //$LASTPOS=31004825;//kernel.T2MediaPlayer:4825
        vol=1;
      } else {
        //$LASTPOS=31004846;//kernel.T2MediaPlayer:4846
        if (vol<0) {
          //$LASTPOS=31004861;//kernel.T2MediaPlayer:4861
          vol=0;
        }
      }
      _thread.retVal=T2MediaLib.setAudioVolume(vol);return;
      
      
      _thread.retVal=_this;return;
    },
    setAudioTempo :function _trc_T2MediaPlayer_setAudioTempo(tempo) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=31004951;//kernel.T2MediaPlayer:4951
      if (tempo>4) {
        //$LASTPOS=31004973;//kernel.T2MediaPlayer:4973
        tempo=4;
      } else {
        //$LASTPOS=31004996;//kernel.T2MediaPlayer:4996
        if (tempo<0.5) {
          //$LASTPOS=31005013;//kernel.T2MediaPlayer:5013
          tempo=0.5;
        }
      }
      return T2MediaLib.setAudioTempo(tempo);
    },
    fiber$setAudioTempo :function _trc_T2MediaPlayer_f_setAudioTempo(_thread,tempo) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=31004951;//kernel.T2MediaPlayer:4951
      if (tempo>4) {
        //$LASTPOS=31004973;//kernel.T2MediaPlayer:4973
        tempo=4;
      } else {
        //$LASTPOS=31004996;//kernel.T2MediaPlayer:4996
        if (tempo<0.5) {
          //$LASTPOS=31005013;//kernel.T2MediaPlayer:5013
          tempo=0.5;
        }
      }
      _thread.retVal=T2MediaLib.setAudioTempo(tempo);return;
      
      
      _thread.retVal=_this;return;
    },
    setAudioPosition :function _trc_T2MediaPlayer_setAudioPosition(time) {
      "use strict";
      var _this=this;
      
      return T2MediaLib.setAudioPosition(time);
    },
    fiber$setAudioPosition :function _trc_T2MediaPlayer_f_setAudioPosition(_thread,time) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=T2MediaLib.setAudioPosition(time);return;
      
      
      _thread.retVal=_this;return;
    },
    getAudioCurrentTime :function _trc_T2MediaPlayer_getAudioCurrentTime() {
      "use strict";
      var _this=this;
      
      return T2MediaLib.getAudioCurrentTime();
    },
    fiber$getAudioCurrentTime :function _trc_T2MediaPlayer_f_getAudioCurrentTime(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=T2MediaLib.getAudioCurrentTime();return;
      
      
      _thread.retVal=_this;return;
    },
    getAudioLength :function _trc_T2MediaPlayer_getAudioLength() {
      "use strict";
      var _this=this;
      
      return T2MediaLib.getAudioLength();
    },
    fiber$getAudioLength :function _trc_T2MediaPlayer_f_getAudioLength(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=T2MediaLib.getAudioLength();return;
      
      
      _thread.retVal=_this;return;
    },
    getAudioData :function _trc_T2MediaPlayer_getAudioData(idx) {
      "use strict";
      var _this=this;
      
      return T2MediaLib.getAudioData(idx);
    },
    fiber$getAudioData :function _trc_T2MediaPlayer_f_getAudioData(_thread,idx) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=T2MediaLib.getAudioData(idx);return;
      
      
      _thread.retVal=_this;return;
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"initT2MediaPlayer":{"nowait":false},"clearSEData":{"nowait":false},"clearBGMData":{"nowait":false},"deleteSEData":{"nowait":false},"loadSE":{"nowait":false},"__getter__available":{"nowait":true},"loadFromProject":{"nowait":false},"playSE":{"nowait":true},"stopSE":{"nowait":false},"getSEData":{"nowait":false},"loadBGM":{"nowait":false},"playBGM":{"nowait":false},"stopBGM":{"nowait":false},"pauseBGM":{"nowait":false},"resumeBGM":{"nowait":false},"setBGMVolume":{"nowait":false},"setBGMTempo":{"nowait":false},"getBGMCurrentTime":{"nowait":false},"getBGMLength":{"nowait":false},"getBGMData":{"nowait":false},"playBGMID":{"nowait":false},"stopBGMID":{"nowait":false},"pauseBGMID":{"nowait":false},"resumeBGMID":{"nowait":false},"setBGMVolumeID":{"nowait":false},"setBGMTempoID":{"nowait":false},"getBGMCurrentTimeID":{"nowait":false},"getBGMLengthID":{"nowait":false},"sizeBGMID":{"nowait":false},"allStopBGM":{"nowait":false},"loadAudio":{"nowait":false},"playAudio":{"nowait":false},"stopAudio":{"nowait":false},"pauseAudio":{"nowait":false},"resumeAudio":{"nowait":false},"setAudioVolume":{"nowait":false},"setAudioTempo":{"nowait":false},"setAudioPosition":{"nowait":false},"getAudioCurrentTime":{"nowait":false},"getAudioLength":{"nowait":false},"getAudioData":{"nowait":false}}}
});
Tonyu.klass.define({
  fullName: 'kernel.PlainChar',
  shortName: 'PlainChar',
  namespace: 'kernel',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: {
    main :function _trc_PlainChar_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_PlainChar_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    initialize :function _trc_PlainChar_initialize(x,y,p) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=32000066;//kernel.PlainChar:66
      if (Tonyu.runMode) {
        //$LASTPOS=32000309;//kernel.PlainChar:309
        _this._th=Tonyu.globals.$Boot.schedule(_this,"tMain",[]);
        //$LASTPOS=32000355;//kernel.PlainChar:355
        _this.initSprite();
        
      }
      //$LASTPOS=32000381;//kernel.PlainChar:381
      if (typeof  x=="object") {
        //$LASTPOS=32000405;//kernel.PlainChar:405
        Tonyu.extend(_this,x);
      } else {
        //$LASTPOS=32000437;//kernel.PlainChar:437
        if (typeof  x=="number") {
          //$LASTPOS=32000472;//kernel.PlainChar:472
          _this.x=x;
          //$LASTPOS=32000491;//kernel.PlainChar:491
          _this.y=y;
          //$LASTPOS=32000510;//kernel.PlainChar:510
          _this.p=p;
          
        }
      }
    },
    draw :function _trc_PlainChar_draw(c) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=32000547;//kernel.PlainChar:547
      _this.onDraw();
      //$LASTPOS=32000562;//kernel.PlainChar:562
      if (_this._isInvisible) {
        return _this;
      }
      //$LASTPOS=32000593;//kernel.PlainChar:593
      Tonyu.classes.kernel.Actor.prototype.draw.apply( _this, [c]);
    },
    setVisible :function _trc_PlainChar_setVisible(v) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=32000634;//kernel.PlainChar:634
      _this._isInvisible=! v;
    },
    fiber$setVisible :function _trc_PlainChar_f_setVisible(_thread,v) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=32000634;//kernel.PlainChar:634
      _this._isInvisible=! v;
      
      _thread.retVal=_this;return;
    },
    onDraw :function _trc_PlainChar_onDraw() {
      "use strict";
      var _this=this;
      
    },
    fiber$onDraw :function _trc_PlainChar_f_onDraw(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    update :function _trc_PlainChar_update() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=32000690;//kernel.PlainChar:690
      _this.onUpdate();
      //$LASTPOS=32000707;//kernel.PlainChar:707
      Tonyu.classes.kernel.Actor.prototype.update.apply( _this, []);
    },
    fiber$update :function _trc_PlainChar_f_update(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=32000690;//kernel.PlainChar:690
      _this.onUpdate();
      
      _thread.enter(function _trc_PlainChar_ent_update(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=32000707;//kernel.PlainChar:707
            Tonyu.classes.kernel.Actor.prototype.fiber$update.apply( _this, [_thread]);
            __pc=1;return;
          case 1:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    onUpdate :function _trc_PlainChar_onUpdate() {
      "use strict";
      var _this=this;
      
    },
    initSprite :function _trc_PlainChar_initSprite() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=32000768;//kernel.PlainChar:768
      if (_this.layer&&typeof  _this.layer.add=="function") {
        //$LASTPOS=32000820;//kernel.PlainChar:820
        _this.layer.add(_this);
        
      } else {
        //$LASTPOS=32000858;//kernel.PlainChar:858
        Tonyu.globals.$Sprites.add(_this);
        
      }
      //$LASTPOS=32000890;//kernel.PlainChar:890
      _this.onAppear();
    },
    fiber$initSprite :function _trc_PlainChar_f_initSprite(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=32000768;//kernel.PlainChar:768
      if (_this.layer&&typeof  _this.layer.add=="function") {
        //$LASTPOS=32000820;//kernel.PlainChar:820
        _this.layer.add(_this);
        
      } else {
        //$LASTPOS=32000858;//kernel.PlainChar:858
        Tonyu.globals.$Sprites.add(_this);
        
      }
      
      _thread.enter(function _trc_PlainChar_ent_initSprite(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=32000890;//kernel.PlainChar:890
            _this.fiber$onAppear(_thread);
            __pc=1;return;
          case 1:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    tMain :function _trc_PlainChar_tMain() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=32000922;//kernel.PlainChar:922
      _this.main();
      //$LASTPOS=32000935;//kernel.PlainChar:935
      _this.die();
    },
    fiber$tMain :function _trc_PlainChar_f_tMain(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.enter(function _trc_PlainChar_ent_tMain(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=32000922;//kernel.PlainChar:922
            _this.fiber$main(_thread);
            __pc=1;return;
          case 1:
            
            //$LASTPOS=32000935;//kernel.PlainChar:935
            _this.die();
            _thread.exit(_this);return;
          }
        }
      });
    },
    appear :function _trc_PlainChar_appear(t) {
      "use strict";
      var _this=this;
      
      return t;
    },
    fiber$appear :function _trc_PlainChar_f_appear(_thread,t) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=t;return;
      
      
      _thread.retVal=_this;return;
    },
    trunc :function _trc_PlainChar_trunc(f) {
      "use strict";
      var _this=this;
      
      return Math.trunc(f);
    },
    loadPage :function _trc_PlainChar_loadPage(page,arg) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=32001673;//kernel.PlainChar:1673
      _this.all().die();
      //$LASTPOS=32001691;//kernel.PlainChar:1691
      new page(arg);
      //$LASTPOS=32001711;//kernel.PlainChar:1711
      _this.die();
    },
    fiber$loadPage :function _trc_PlainChar_f_loadPage(_thread,page,arg) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=32001673;//kernel.PlainChar:1673
      _this.all().die();
      //$LASTPOS=32001691;//kernel.PlainChar:1691
      new page(arg);
      //$LASTPOS=32001711;//kernel.PlainChar:1711
      _this.die();
      
      _thread.retVal=_this;return;
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"draw":{"nowait":true},"setVisible":{"nowait":false},"onDraw":{"nowait":false},"update":{"nowait":false},"onUpdate":{"nowait":true},"initSprite":{"nowait":false},"tMain":{"nowait":false},"appear":{"nowait":false},"trunc":{"nowait":true},"loadPage":{"nowait":false}}}
});
Tonyu.klass.define({
  fullName: 'kernel.SecretChar',
  shortName: 'SecretChar',
  namespace: 'kernel',
  superclass: Tonyu.classes.kernel.PlainChar,
  includes: [],
  methods: {
    main :function _trc_SecretChar_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_SecretChar_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    draw :function _trc_SecretChar_draw(c) {
      "use strict";
      var _this=this;
      
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"draw":{"nowait":true}}}
});
Tonyu.klass.define({
  fullName: 'kernel.SpriteChar',
  shortName: 'SpriteChar',
  namespace: 'kernel',
  superclass: Tonyu.classes.kernel.PlainChar,
  includes: [],
  methods: {
    main :function _trc_SpriteChar_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_SpriteChar_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    initialize :function _trc_SpriteChar_initialize(x,y,p,f) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=33000043;//kernel.SpriteChar:43
      Tonyu.classes.kernel.PlainChar.apply( _this, [x,y,p]);
      //$LASTPOS=33000062;//kernel.SpriteChar:62
      _this.f=f;
      //$LASTPOS=33000077;//kernel.SpriteChar:77
      if (! _this.x) {
        //$LASTPOS=33000090;//kernel.SpriteChar:90
        _this.x=0;
      }
      //$LASTPOS=33000105;//kernel.SpriteChar:105
      if (! _this.y) {
        //$LASTPOS=33000118;//kernel.SpriteChar:118
        _this.y=0;
      }
      //$LASTPOS=33000133;//kernel.SpriteChar:133
      if (! _this.p) {
        //$LASTPOS=33000146;//kernel.SpriteChar:146
        _this.p=0;
      }
      //$LASTPOS=33000161;//kernel.SpriteChar:161
      if (typeof  _this.scaleX!="number") {
        //$LASTPOS=33000190;//kernel.SpriteChar:190
        _this.scaleX=1;
      }
    },
    draw :function _trc_SpriteChar_draw(c) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=33000220;//kernel.SpriteChar:220
      if (_this.f) {
        //$LASTPOS=33000238;//kernel.SpriteChar:238
        if (! _this.scaleY) {
          //$LASTPOS=33000251;//kernel.SpriteChar:251
          _this.scaleY=_this.scaleX;
        }
        //$LASTPOS=33000275;//kernel.SpriteChar:275
        _this.scaleX*=- 1;
        
      }
      //$LASTPOS=33000299;//kernel.SpriteChar:299
      Tonyu.classes.kernel.PlainChar.prototype.draw.apply( _this, [c]);
      //$LASTPOS=33000319;//kernel.SpriteChar:319
      if (_this.f) {
        //$LASTPOS=33000326;//kernel.SpriteChar:326
        _this.scaleX*=- 1;
      }
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"draw":{"nowait":true}}}
});
Tonyu.klass.define({
  fullName: 'kernel.T1Line',
  shortName: 'T1Line',
  namespace: 'kernel',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: {
    main :function _trc_T1Line_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_T1Line_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    draw :function _trc_T1Line_draw(ctx) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=34000034;//kernel.T1Line:34
      if (_this.hidden) {
        return _this;
      }
      //$LASTPOS=34000065;//kernel.T1Line:65
      ctx.strokeStyle=_this.col;
      //$LASTPOS=34000091;//kernel.T1Line:91
      ctx.beginPath();
      //$LASTPOS=34000113;//kernel.T1Line:113
      ctx.moveTo(_this.x,_this.y);
      //$LASTPOS=34000135;//kernel.T1Line:135
      ctx.lineTo(_this.tx,_this.ty);
      //$LASTPOS=34000159;//kernel.T1Line:159
      ctx.stroke();
      //$LASTPOS=34000178;//kernel.T1Line:178
      _this.hidden=true;
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"draw":{"nowait":true}}}
});
Tonyu.klass.define({
  fullName: 'kernel.T1Map',
  shortName: 'T1Map',
  namespace: 'kernel',
  superclass: Tonyu.classes.kernel.Map,
  includes: [],
  methods: {
    main :function _trc_T1Map_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_T1Map_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    setBGColor :function _trc_T1Map_setBGColor(c) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=35000064;//kernel.T1Map:64
      Tonyu.globals.$Screen.setBGColor(c);
    },
    fiber$setBGColor :function _trc_T1Map_f_setBGColor(_thread,c) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=35000064;//kernel.T1Map:64
      Tonyu.globals.$Screen.setBGColor(c);
      
      _thread.retVal=_this;return;
    },
    load :function _trc_T1Map_load(fileName) {
      "use strict";
      var _this=this;
      var f;
      var o;
      
      //$LASTPOS=35000469;//kernel.T1Map:469
      f = _this.file("../maps/").rel(fileName);
      //$LASTPOS=35000512;//kernel.T1Map:512
      o = f.obj();
      //$LASTPOS=35000532;//kernel.T1Map:532
      _this.chipWidth=o.chipWidth;
      //$LASTPOS=35000560;//kernel.T1Map:560
      _this.chipHeight=o.chipHeight;
      //$LASTPOS=35000590;//kernel.T1Map:590
      _this.baseData=o.baseData;
      //$LASTPOS=35000616;//kernel.T1Map:616
      _this.mapTable=_this.conv(_this.baseData[0],o.pTable);
      //$LASTPOS=35000658;//kernel.T1Map:658
      _this.mapData=_this.mapTable;
      //$LASTPOS=35000681;//kernel.T1Map:681
      _this.row=_this.mapTable.length;
      //$LASTPOS=35000707;//kernel.T1Map:707
      _this.col=_this.mapTable[0].length;
      //$LASTPOS=35000736;//kernel.T1Map:736
      _this.mapOnTable=_this.conv(_this.baseData[1],o.pTable);
      //$LASTPOS=35000780;//kernel.T1Map:780
      _this.mapOnData=_this.mapOnTable;
      //$LASTPOS=35000813;//kernel.T1Map:813
      _this.buf=$("<canvas>").attr({width: _this.col*_this.chipWidth,height: _this.row*_this.chipHeight});
      //$LASTPOS=35000885;//kernel.T1Map:885
      _this.initMap();
    },
    fiber$load :function _trc_T1Map_f_load(_thread,fileName) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var f;
      var o;
      
      //$LASTPOS=35000469;//kernel.T1Map:469
      f = _this.file("../maps/").rel(fileName);
      //$LASTPOS=35000512;//kernel.T1Map:512
      o = f.obj();
      //$LASTPOS=35000532;//kernel.T1Map:532
      _this.chipWidth=o.chipWidth;
      //$LASTPOS=35000560;//kernel.T1Map:560
      _this.chipHeight=o.chipHeight;
      //$LASTPOS=35000590;//kernel.T1Map:590
      _this.baseData=o.baseData;
      
      _thread.enter(function _trc_T1Map_ent_load(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=35000616;//kernel.T1Map:616
            _this.fiber$conv(_thread, _this.baseData[0], o.pTable);
            __pc=1;return;
          case 1:
            _this.mapTable=_thread.retVal;
            
            //$LASTPOS=35000658;//kernel.T1Map:658
            _this.mapData=_this.mapTable;
            //$LASTPOS=35000681;//kernel.T1Map:681
            _this.row=_this.mapTable.length;
            //$LASTPOS=35000707;//kernel.T1Map:707
            _this.col=_this.mapTable[0].length;
            //$LASTPOS=35000736;//kernel.T1Map:736
            _this.fiber$conv(_thread, _this.baseData[1], o.pTable);
            __pc=2;return;
          case 2:
            _this.mapOnTable=_thread.retVal;
            
            //$LASTPOS=35000780;//kernel.T1Map:780
            _this.mapOnData=_this.mapOnTable;
            //$LASTPOS=35000813;//kernel.T1Map:813
            _this.buf=$("<canvas>").attr({width: _this.col*_this.chipWidth,height: _this.row*_this.chipHeight});
            //$LASTPOS=35000885;//kernel.T1Map:885
            _this.fiber$initMap(_thread);
            __pc=3;return;
          case 3:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    conv :function _trc_T1Map_conv(mat,tbl) {
      "use strict";
      var _this=this;
      var res;
      
      //$LASTPOS=35000926;//kernel.T1Map:926
      res = [];
      //$LASTPOS=35000943;//kernel.T1Map:943
      mat.forEach((function anonymous_955(row) {
        var rrow;
        
        //$LASTPOS=35000973;//kernel.T1Map:973
        rrow = [];
        //$LASTPOS=35000995;//kernel.T1Map:995
        res.push(rrow);
        //$LASTPOS=35001020;//kernel.T1Map:1020
        row.forEach((function anonymous_1032(dat) {
          var t;
          
          //$LASTPOS=35001067;//kernel.T1Map:1067
          t = tbl[dat[0]];
          //$LASTPOS=35001099;//kernel.T1Map:1099
          if (t) {
            //$LASTPOS=35001106;//kernel.T1Map:1106
            rrow.push(Tonyu.globals[t.name]+dat[1]);
          } else {
            //$LASTPOS=35001165;//kernel.T1Map:1165
            rrow.push(dat[1]);
          }
        }));
      }));
      return res;
    },
    fiber$conv :function _trc_T1Map_f_conv(_thread,mat,tbl) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var res;
      
      //$LASTPOS=35000926;//kernel.T1Map:926
      res = [];
      //$LASTPOS=35000943;//kernel.T1Map:943
      mat.forEach((function anonymous_955(row) {
        var rrow;
        
        //$LASTPOS=35000973;//kernel.T1Map:973
        rrow = [];
        //$LASTPOS=35000995;//kernel.T1Map:995
        res.push(rrow);
        //$LASTPOS=35001020;//kernel.T1Map:1020
        row.forEach((function anonymous_1032(dat) {
          var t;
          
          //$LASTPOS=35001067;//kernel.T1Map:1067
          t = tbl[dat[0]];
          //$LASTPOS=35001099;//kernel.T1Map:1099
          if (t) {
            //$LASTPOS=35001106;//kernel.T1Map:1106
            rrow.push(Tonyu.globals[t.name]+dat[1]);
          } else {
            //$LASTPOS=35001165;//kernel.T1Map:1165
            rrow.push(dat[1]);
          }
        }));
      }));
      _thread.retVal=res;return;
      
      
      _thread.retVal=_this;return;
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"setBGColor":{"nowait":false},"load":{"nowait":false},"conv":{"nowait":false}}}
});
Tonyu.klass.define({
  fullName: 'kernel.T1Page',
  shortName: 'T1Page',
  namespace: 'kernel',
  superclass: Tonyu.classes.kernel.PlainChar,
  includes: [],
  methods: {
    main :function _trc_T1Page_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_T1Page_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    initGlobals :function _trc_T1Page_initGlobals() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=36000044;//kernel.T1Page:44
      Tonyu.globals.$chars=Tonyu.globals.$Sprites.sprites;
      //$LASTPOS=36000074;//kernel.T1Page:74
      Tonyu.globals.$Boot.setFrameRate(60);
      //$LASTPOS=36000103;//kernel.T1Page:103
      Tonyu.globals.$clBlack=_this.color(0,0,0);
      //$LASTPOS=36000131;//kernel.T1Page:131
      Tonyu.globals.$clRed=_this.color(255,0,0);
      //$LASTPOS=36000159;//kernel.T1Page:159
      Tonyu.globals.$clGreen=_this.color(0,255,0);
      //$LASTPOS=36000189;//kernel.T1Page:189
      Tonyu.globals.$clYellow=_this.color(255,255,0);
      //$LASTPOS=36000222;//kernel.T1Page:222
      Tonyu.globals.$clBlue=_this.color(0,0,255);
      //$LASTPOS=36000251;//kernel.T1Page:251
      Tonyu.globals.$clPink=_this.color(255,0,255);
      //$LASTPOS=36000282;//kernel.T1Page:282
      Tonyu.globals.$clAqua=_this.color(0,255,255);
      //$LASTPOS=36000313;//kernel.T1Page:313
      Tonyu.globals.$clWhite=_this.color(255,255,255);
      //$LASTPOS=36000347;//kernel.T1Page:347
      Tonyu.globals.$mplayer=new Tonyu.classes.kernel.MediaPlayer;
    },
    fiber$initGlobals :function _trc_T1Page_f_initGlobals(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=36000044;//kernel.T1Page:44
      Tonyu.globals.$chars=Tonyu.globals.$Sprites.sprites;
      //$LASTPOS=36000074;//kernel.T1Page:74
      Tonyu.globals.$Boot.setFrameRate(60);
      
      _thread.enter(function _trc_T1Page_ent_initGlobals(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=36000103;//kernel.T1Page:103
            _this.fiber$color(_thread, 0, 0, 0);
            __pc=1;return;
          case 1:
            Tonyu.globals.$clBlack=_thread.retVal;
            
            //$LASTPOS=36000131;//kernel.T1Page:131
            _this.fiber$color(_thread, 255, 0, 0);
            __pc=2;return;
          case 2:
            Tonyu.globals.$clRed=_thread.retVal;
            
            //$LASTPOS=36000159;//kernel.T1Page:159
            _this.fiber$color(_thread, 0, 255, 0);
            __pc=3;return;
          case 3:
            Tonyu.globals.$clGreen=_thread.retVal;
            
            //$LASTPOS=36000189;//kernel.T1Page:189
            _this.fiber$color(_thread, 255, 255, 0);
            __pc=4;return;
          case 4:
            Tonyu.globals.$clYellow=_thread.retVal;
            
            //$LASTPOS=36000222;//kernel.T1Page:222
            _this.fiber$color(_thread, 0, 0, 255);
            __pc=5;return;
          case 5:
            Tonyu.globals.$clBlue=_thread.retVal;
            
            //$LASTPOS=36000251;//kernel.T1Page:251
            _this.fiber$color(_thread, 255, 0, 255);
            __pc=6;return;
          case 6:
            Tonyu.globals.$clPink=_thread.retVal;
            
            //$LASTPOS=36000282;//kernel.T1Page:282
            _this.fiber$color(_thread, 0, 255, 255);
            __pc=7;return;
          case 7:
            Tonyu.globals.$clAqua=_thread.retVal;
            
            //$LASTPOS=36000313;//kernel.T1Page:313
            _this.fiber$color(_thread, 255, 255, 255);
            __pc=8;return;
          case 8:
            Tonyu.globals.$clWhite=_thread.retVal;
            
            //$LASTPOS=36000347;//kernel.T1Page:347
            Tonyu.globals.$mplayer=new Tonyu.classes.kernel.MediaPlayer;
            _thread.exit(_this);return;
          }
        }
      });
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"initGlobals":{"nowait":false}}}
});
Tonyu.klass.define({
  fullName: 'kernel.T1Text',
  shortName: 'T1Text',
  namespace: 'kernel',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: {
    main :function _trc_T1Text_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_T1Text_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    draw :function _trc_T1Text_draw(c) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=37000032;//kernel.T1Text:32
      if (_this.hidden) {
        return _this;
      }
      //$LASTPOS=37000057;//kernel.T1Text:57
      c.font=_this.size+"px 'ＭＳ Ｐゴシック'";
      //$LASTPOS=37000097;//kernel.T1Text:97
      Tonyu.classes.kernel.Actor.prototype.draw.apply( _this, [c]);
      //$LASTPOS=37000117;//kernel.T1Text:117
      _this.hidden=true;
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"draw":{"nowait":true}}}
});
Tonyu.klass.define({
  fullName: 'kernel.TextChar',
  shortName: 'TextChar',
  namespace: 'kernel',
  superclass: Tonyu.classes.kernel.PlainChar,
  includes: [Tonyu.classes.kernel.TextRectMod],
  methods: {
    main :function _trc_TextChar_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_TextChar_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    initialize :function _trc_TextChar_initialize(xx,yy,t,c,s) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=38000070;//kernel.TextChar:70
      Tonyu.classes.kernel.PlainChar.apply( _this, [xx,yy]);
      //$LASTPOS=38000089;//kernel.TextChar:89
      _this.text="";
      //$LASTPOS=38000103;//kernel.TextChar:103
      _this.col=Tonyu.globals.$clWhite;
      //$LASTPOS=38000122;//kernel.TextChar:122
      _this.size=20;
      //$LASTPOS=38000136;//kernel.TextChar:136
      if (! _this.x) {
        //$LASTPOS=38000149;//kernel.TextChar:149
        _this.x=0;
      }
      //$LASTPOS=38000164;//kernel.TextChar:164
      if (! _this.y) {
        //$LASTPOS=38000177;//kernel.TextChar:177
        _this.y=0;
      }
      //$LASTPOS=38000192;//kernel.TextChar:192
      if (t) {
        //$LASTPOS=38000199;//kernel.TextChar:199
        _this.text=t;
      }
      //$LASTPOS=38000212;//kernel.TextChar:212
      if (c) {
        //$LASTPOS=38000219;//kernel.TextChar:219
        _this.fillStyle=c;
      }
      //$LASTPOS=38000237;//kernel.TextChar:237
      if (s) {
        //$LASTPOS=38000244;//kernel.TextChar:244
        _this.size=s;
      }
    },
    draw :function _trc_TextChar_draw(ctx) {
      "use strict";
      var _this=this;
      var rect;
      
      //$LASTPOS=38000274;//kernel.TextChar:274
      if (! _this.size) {
        //$LASTPOS=38000285;//kernel.TextChar:285
        _this.size=15;
      }
      //$LASTPOS=38000299;//kernel.TextChar:299
      if (! _this.align) {
        //$LASTPOS=38000311;//kernel.TextChar:311
        _this.align="left";
      }
      //$LASTPOS=38000330;//kernel.TextChar:330
      if (! _this.fillStyle) {
        //$LASTPOS=38000346;//kernel.TextChar:346
        _this.fillStyle="white";
      }
      //$LASTPOS=38000370;//kernel.TextChar:370
      ctx.fillStyle=_this.fillStyle;
      //$LASTPOS=38000400;//kernel.TextChar:400
      ctx.globalAlpha=_this.alpha/255;
      //$LASTPOS=38000437;//kernel.TextChar:437
      ctx.font=_this.size+"px 'ＭＳ Ｐゴシック'";
      //$LASTPOS=38000473;//kernel.TextChar:473
      rect = _this.drawTextRect(ctx,_this.text,_this.x,_this.y,_this.size,_this.align,"fill");
      //$LASTPOS=38000540;//kernel.TextChar:540
      _this.width=rect.w;
      //$LASTPOS=38000559;//kernel.TextChar:559
      _this.height=rect.h;
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"draw":{"nowait":true}}}
});
Tonyu.klass.define({
  fullName: 'kernel.GameConsole',
  shortName: 'GameConsole',
  namespace: 'kernel',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: {
    main :function _trc_GameConsole_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_GameConsole_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    initialize :function _trc_GameConsole_initialize(opt) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=39000084;//kernel.GameConsole:84
      _this.extend(opt);
      //$LASTPOS=39000102;//kernel.GameConsole:102
      _this.cw=_this.canvas.width();
      //$LASTPOS=39000126;//kernel.GameConsole:126
      _this.ch=_this.canvas.height();
      //$LASTPOS=39000151;//kernel.GameConsole:151
      Tonyu.globals.$Sprites=new Tonyu.classes.kernel.Sprites;
      //$LASTPOS=39000178;//kernel.GameConsole:178
      Tonyu.globals.$Screen=_this.gameScreen=new Tonyu.classes.kernel.GameScreen({width: 465,height: 465,sprites: Tonyu.globals.$Sprites});
      //$LASTPOS=39000259;//kernel.GameConsole:259
      Tonyu.globals.$FrontSprites=_this.sprites=new Tonyu.classes.kernel.Sprites;
      //$LASTPOS=39000299;//kernel.GameConsole:299
      _this.sprites.add(_this.gameScreen);
      //$LASTPOS=39000329;//kernel.GameConsole:329
      _this.cctx=_this.canvas[0].getContext("2d");
    },
    shouldDraw1x1 :function _trc_GameConsole_shouldDraw1x1(srcw,srch,dstw,dsth) {
      "use strict";
      var _this=this;
      var larger;
      var smaller;
      
      //$LASTPOS=39000448;//kernel.GameConsole:448
      larger = 200;
      //$LASTPOS=39000469;//kernel.GameConsole:469
      smaller = 5;
      return srcw-smaller<=dstw&&dstw<=srcw+larger&&srch-smaller<=dsth&&dsth<=srch+larger;
    },
    fiber$shouldDraw1x1 :function _trc_GameConsole_f_shouldDraw1x1(_thread,srcw,srch,dstw,dsth) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var larger;
      var smaller;
      
      //$LASTPOS=39000448;//kernel.GameConsole:448
      larger = 200;
      //$LASTPOS=39000469;//kernel.GameConsole:469
      smaller = 5;
      _thread.retVal=srcw-smaller<=dstw&&dstw<=srcw+larger&&srch-smaller<=dsth&&dsth<=srch+larger;return;
      
      
      _thread.retVal=_this;return;
    },
    layout :function _trc_GameConsole_layout() {
      "use strict";
      var _this=this;
      var width;
      var height;
      var calcw;
      var calch;
      var marginw;
      var marginh;
      
      //$LASTPOS=39000606;//kernel.GameConsole:606
      _this.cw=_this.canvas.width();
      //$LASTPOS=39000630;//kernel.GameConsole:630
      _this.ch=_this.canvas.height();
      //$LASTPOS=39000655;//kernel.GameConsole:655
      width = _this.gameScreen.width;
      //$LASTPOS=39000688;//kernel.GameConsole:688
      height = _this.gameScreen.height;
      //$LASTPOS=39000723;//kernel.GameConsole:723
      calcw = _this.ch/height*width;
      //$LASTPOS=39000767;//kernel.GameConsole:767
      calch = _this.cw/width*height;
      //$LASTPOS=39000811;//kernel.GameConsole:811
      if (calch>_this.ch) {
        //$LASTPOS=39000825;//kernel.GameConsole:825
        calch=_this.ch;
      }
      //$LASTPOS=39000840;//kernel.GameConsole:840
      if (calcw>_this.cw) {
        //$LASTPOS=39000854;//kernel.GameConsole:854
        calcw=_this.cw;
      }
      //$LASTPOS=39000869;//kernel.GameConsole:869
      if (_this.shouldDraw1x1(width,height,calcw,calch)) {
        //$LASTPOS=39000925;//kernel.GameConsole:925
        calcw=width;
        //$LASTPOS=39000937;//kernel.GameConsole:937
        calch=height;
        
      }
      //$LASTPOS=39000963;//kernel.GameConsole:963
      marginw = Math.floor((_this.cw-calcw)/2);
      //$LASTPOS=39001006;//kernel.GameConsole:1006
      marginh = Math.floor((_this.ch-calch)/2);
      //$LASTPOS=39001049;//kernel.GameConsole:1049
      _this.gameScreen.setBounds({left: marginw,top: marginh,width: calcw,height: calch});
    },
    fiber$layout :function _trc_GameConsole_f_layout(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var width;
      var height;
      var calcw;
      var calch;
      var marginw;
      var marginh;
      
      //$LASTPOS=39000606;//kernel.GameConsole:606
      _this.cw=_this.canvas.width();
      //$LASTPOS=39000630;//kernel.GameConsole:630
      _this.ch=_this.canvas.height();
      //$LASTPOS=39000655;//kernel.GameConsole:655
      width = _this.gameScreen.width;
      //$LASTPOS=39000688;//kernel.GameConsole:688
      height = _this.gameScreen.height;
      //$LASTPOS=39000723;//kernel.GameConsole:723
      calcw = _this.ch/height*width;
      //$LASTPOS=39000767;//kernel.GameConsole:767
      calch = _this.cw/width*height;
      //$LASTPOS=39000811;//kernel.GameConsole:811
      if (calch>_this.ch) {
        //$LASTPOS=39000825;//kernel.GameConsole:825
        calch=_this.ch;
      }
      //$LASTPOS=39000840;//kernel.GameConsole:840
      if (calcw>_this.cw) {
        //$LASTPOS=39000854;//kernel.GameConsole:854
        calcw=_this.cw;
      }
      //$LASTPOS=39000869;//kernel.GameConsole:869
      if (_this.shouldDraw1x1(width,height,calcw,calch)) {
        //$LASTPOS=39000925;//kernel.GameConsole:925
        calcw=width;
        //$LASTPOS=39000937;//kernel.GameConsole:937
        calch=height;
        
      }
      //$LASTPOS=39000963;//kernel.GameConsole:963
      marginw = Math.floor((_this.cw-calcw)/2);
      //$LASTPOS=39001006;//kernel.GameConsole:1006
      marginh = Math.floor((_this.ch-calch)/2);
      //$LASTPOS=39001049;//kernel.GameConsole:1049
      _this.gameScreen.setBounds({left: marginw,top: marginh,width: calcw,height: calch});
      
      _thread.retVal=_this;return;
    },
    draw :function _trc_GameConsole_draw() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=39001144;//kernel.GameConsole:1144
      _this.layout();
      //$LASTPOS=39001159;//kernel.GameConsole:1159
      _this.sprites.draw(_this.canvas[0]);
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"shouldDraw1x1":{"nowait":false},"layout":{"nowait":false},"draw":{"nowait":true}}}
});
Tonyu.klass.define({
  fullName: 'kernel.MapEditor',
  shortName: 'MapEditor',
  namespace: 'kernel',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: {
    main :function _trc_MapEditor_main() {
      "use strict";
      var _this=this;
      var i;
      var j;
      
      //$LASTPOS=40000030;//kernel.MapEditor:30
      Tonyu.globals.$Screen.resize(480,640);
      //$LASTPOS=40000055;//kernel.MapEditor:55
      _this.loadMode=false;
      //$LASTPOS=40000071;//kernel.MapEditor:71
      _this.fileExist=false;
      //$LASTPOS=40000088;//kernel.MapEditor:88
      _this.print("map file(s)");
      //$LASTPOS=40000110;//kernel.MapEditor:110
      _this.fileList=_this.file("../maps/");
      //$LASTPOS=40000137;//kernel.MapEditor:137
      _this.fileList.recursive((function a(f) {
        
        //$LASTPOS=40000175;//kernel.MapEditor:175
        f=f+"";
        //$LASTPOS=40000187;//kernel.MapEditor:187
        _this.fNames=f.split("/");
        //$LASTPOS=40000212;//kernel.MapEditor:212
        _this.print(_this.fNames[_this.fNames.length-1]);
        //$LASTPOS=40000248;//kernel.MapEditor:248
        _this.fileExist=true;
      }));
      //$LASTPOS=40000268;//kernel.MapEditor:268
      if (_this.fileExist) {
        //$LASTPOS=40000287;//kernel.MapEditor:287
        _this.print("Load Data?: Y or N");
        //$LASTPOS=40000320;//kernel.MapEditor:320
        while (true) {
          //$LASTPOS=40000341;//kernel.MapEditor:341
          if (_this.getkey("y")>0) {
            //$LASTPOS=40000372;//kernel.MapEditor:372
            _this.loadMode=true;
            break;
            
            
          }
          //$LASTPOS=40000424;//kernel.MapEditor:424
          if (_this.getkey("n")>0) {
            //$LASTPOS=40000455;//kernel.MapEditor:455
            _this.loadMode=false;
            break;
            
            
          }
          //$LASTPOS=40000508;//kernel.MapEditor:508
          _this.update();
          
        }
        //$LASTPOS=40000528;//kernel.MapEditor:528
        if (_this.loadMode) {
          //$LASTPOS=40000550;//kernel.MapEditor:550
          _this.fileName=prompt("Input json file (*.json)","map.json");
          //$LASTPOS=40000614;//kernel.MapEditor:614
          if (_this.fileName) {
            //$LASTPOS=40000640;//kernel.MapEditor:640
            _this.mapDataFile=_this.file("../maps/").rel(_this.fileName);
            
          }
          //$LASTPOS=40000702;//kernel.MapEditor:702
          if (_this.mapDataFile.obj()) {
            //$LASTPOS=40000737;//kernel.MapEditor:737
            _this.baseData=_this.mapDataFile.obj();
            
          } else {
            //$LASTPOS=40000792;//kernel.MapEditor:792
            _this.mapDataFile=_this.file(_this.fileName);
            //$LASTPOS=40000832;//kernel.MapEditor:832
            if (_this.mapDataFile.obj()) {
              //$LASTPOS=40000871;//kernel.MapEditor:871
              _this.baseData=_this.mapDataFile.obj();
              
            }
            
          }
          //$LASTPOS=40000931;//kernel.MapEditor:931
          if (_this.baseData==undefined) {
            //$LASTPOS=40000968;//kernel.MapEditor:968
            _this.print("Load failed");
            //$LASTPOS=40001002;//kernel.MapEditor:1002
            _this.loadMode=false;
            
          } else {
            //$LASTPOS=40001032;//kernel.MapEditor:1032
            if (_this.baseData[0]&&_this.baseData[1]) {
              //$LASTPOS=40001076;//kernel.MapEditor:1076
              _this.mapData=_this.baseData[0];
              //$LASTPOS=40001109;//kernel.MapEditor:1109
              _this.mapOnData=_this.baseData[1];
              //$LASTPOS=40001144;//kernel.MapEditor:1144
              if (_this.baseData.length>2) {
                //$LASTPOS=40001183;//kernel.MapEditor:1183
                _this.chipWidth=_this.baseData[_this.baseData.length-2];
                //$LASTPOS=40001238;//kernel.MapEditor:1238
                _this.chipHeight=_this.baseData[_this.baseData.length-1];
                
              }
              
            }
          }
          
        }
        
      }
      //$LASTPOS=40001310;//kernel.MapEditor:1310
      _this.update();
      //$LASTPOS=40001573;//kernel.MapEditor:1573
      if (! _this.loadMode) {
        //$LASTPOS=40001592;//kernel.MapEditor:1592
        _this.row=prompt("input row");
        //$LASTPOS=40001621;//kernel.MapEditor:1621
        _this.col=prompt("input col");
        //$LASTPOS=40001650;//kernel.MapEditor:1650
        _this.chipWidth=prompt("input chipWidth");
        //$LASTPOS=40001691;//kernel.MapEditor:1691
        _this.chipHeight=prompt("input chipHeight");
        //$LASTPOS=40001734;//kernel.MapEditor:1734
        _this.panel=new Tonyu.classes.kernel.Panel({width: _this.col*_this.chipWidth,height: _this.row*_this.chipHeight});
        //$LASTPOS=40001798;//kernel.MapEditor:1798
        _this.panel.x=_this.panel.width/2+40;
        //$LASTPOS=40001828;//kernel.MapEditor:1828
        _this.panel.y=_this.panel.height/2+40;
        //$LASTPOS=40001859;//kernel.MapEditor:1859
        _this.panel.setFillStyle("cyan");
        //$LASTPOS=40001891;//kernel.MapEditor:1891
        _this.panel.fillRect(0,0,_this.panel.width,_this.panel.height);
        //$LASTPOS=40001941;//kernel.MapEditor:1941
        Tonyu.globals.$map=new Tonyu.classes.kernel.Map({row: _this.row,col: _this.col,chipWidth: _this.chipWidth,chipHeight: _this.chipHeight});
        
      } else {
        //$LASTPOS=40002245;//kernel.MapEditor:2245
        Tonyu.globals.$map=new Tonyu.classes.kernel.Map({chipWidth: 32,chipHeight: 32});
        //$LASTPOS=40002291;//kernel.MapEditor:2291
        Tonyu.globals.$map.load(_this.fileName);
        //$LASTPOS=40002316;//kernel.MapEditor:2316
        _this.panel=new Tonyu.classes.kernel.Panel({width: Tonyu.globals.$map.col*Tonyu.globals.$map.chipWidth,height: Tonyu.globals.$map.row*Tonyu.globals.$map.chipHeight,zOrder: 100});
        //$LASTPOS=40002411;//kernel.MapEditor:2411
        _this.panel.x=_this.panel.width/2+40;
        //$LASTPOS=40002441;//kernel.MapEditor:2441
        _this.panel.y=_this.panel.height/2+40;
        //$LASTPOS=40002472;//kernel.MapEditor:2472
        _this.panel.setFillStyle("cyan");
        //$LASTPOS=40002504;//kernel.MapEditor:2504
        _this.panel.fillRect(0,0,_this.panel.width,_this.panel.height);
        
      }
      //$LASTPOS=40002552;//kernel.MapEditor:2552
      Tonyu.globals.$mp=new Tonyu.classes.kernel.Map({row: 16,col: 8,chipWidth: 32,chipHeight: 32});
      //$LASTPOS=40002606;//kernel.MapEditor:2606
      _this.counter=0;
      //$LASTPOS=40002617;//kernel.MapEditor:2617
      //$LASTPOS=40002621;//kernel.MapEditor:2621
      i = 0;
      while(i<16) {
        {
          //$LASTPOS=40002644;//kernel.MapEditor:2644
          //$LASTPOS=40002648;//kernel.MapEditor:2648
          j = 0;
          while(j<8) {
            {
              //$LASTPOS=40002674;//kernel.MapEditor:2674
              Tonyu.globals.$mp.set(j,i,Tonyu.globals.$pat_mapchip+_this.counter);
              //$LASTPOS=40002717;//kernel.MapEditor:2717
              _this.counter++;
            }
            j++;
          }
        }
        i++;
      }
      //$LASTPOS=40002736;//kernel.MapEditor:2736
      _this.drawPanel();
      //$LASTPOS=40002749;//kernel.MapEditor:2749
      _this.mode="get";
      //$LASTPOS=40002761;//kernel.MapEditor:2761
      _this.prevMode="set";
      //$LASTPOS=40002777;//kernel.MapEditor:2777
      _this.mapp=0;
      //$LASTPOS=40002785;//kernel.MapEditor:2785
      _this.mx=- 40;
      //$LASTPOS=40002793;//kernel.MapEditor:2793
      _this.my=- 40;
      //$LASTPOS=40002801;//kernel.MapEditor:2801
      _this.chipX=- 40;
      //$LASTPOS=40002812;//kernel.MapEditor:2812
      _this.chipY=- 40;
      //$LASTPOS=40002823;//kernel.MapEditor:2823
      _this.x=Tonyu.globals.$screenWidth-_this.chipWidth/2;
      //$LASTPOS=40002851;//kernel.MapEditor:2851
      _this.y=Tonyu.globals.$screenHeight-_this.chipHeight/2;
      //$LASTPOS=40002881;//kernel.MapEditor:2881
      Tonyu.globals.$map.scrollTo(_this.mx,_this.my);
      //$LASTPOS=40002903;//kernel.MapEditor:2903
      while (true) {
        //$LASTPOS=40002920;//kernel.MapEditor:2920
        _this.p=_this.mapp;
        //$LASTPOS=40002932;//kernel.MapEditor:2932
        if (_this.getkey("e")==1||(Tonyu.globals.$touches[0].touched==1&&Tonyu.globals.$touches[0].x>0&&Tonyu.globals.$touches[0].x<120&&Tonyu.globals.$touches[0].y>560&&Tonyu.globals.$touches[0].y<640)) {
          //$LASTPOS=40003070;//kernel.MapEditor:3070
          Tonyu.globals.$mp.scrollTo(1000,1000);
          //$LASTPOS=40003103;//kernel.MapEditor:3103
          _this.mode="erase";
          //$LASTPOS=40003125;//kernel.MapEditor:3125
          _this.print(_this.mode+" mode");
          
        }
        //$LASTPOS=40003156;//kernel.MapEditor:3156
        if (_this.getkey("s")==1) {
          //$LASTPOS=40003184;//kernel.MapEditor:3184
          Tonyu.globals.$mp.scrollTo(1000,1000);
          //$LASTPOS=40003217;//kernel.MapEditor:3217
          if (_this.mode=="set") {
            //$LASTPOS=40003246;//kernel.MapEditor:3246
            _this.mode="setOn";
            
          } else {
            //$LASTPOS=40003287;//kernel.MapEditor:3287
            _this.mode="set";
            
          }
          //$LASTPOS=40003317;//kernel.MapEditor:3317
          _this.print(_this.mode+" mode");
          
        }
        //$LASTPOS=40003348;//kernel.MapEditor:3348
        if (Tonyu.globals.$touches[0].touched==1&&Tonyu.globals.$touches[0].x>0&&Tonyu.globals.$touches[0].x<120&&Tonyu.globals.$touches[0].y>480&&Tonyu.globals.$touches[0].y<560) {
          //$LASTPOS=40003466;//kernel.MapEditor:3466
          Tonyu.globals.$mp.scrollTo(1000,1000);
          //$LASTPOS=40003499;//kernel.MapEditor:3499
          _this.mode="set";
          //$LASTPOS=40003519;//kernel.MapEditor:3519
          _this.print(_this.mode+" mode");
          
        }
        //$LASTPOS=40003550;//kernel.MapEditor:3550
        if (Tonyu.globals.$touches[0].touched==1&&Tonyu.globals.$touches[0].x>120&&Tonyu.globals.$touches[0].x<240&&Tonyu.globals.$touches[0].y>480&&Tonyu.globals.$touches[0].y<560) {
          //$LASTPOS=40003670;//kernel.MapEditor:3670
          Tonyu.globals.$mp.scrollTo(1000,1000);
          //$LASTPOS=40003703;//kernel.MapEditor:3703
          _this.mode="setOn";
          //$LASTPOS=40003725;//kernel.MapEditor:3725
          _this.print(_this.mode+" mode");
          
        }
        //$LASTPOS=40003756;//kernel.MapEditor:3756
        if (_this.getkey("o")==1) {
          //$LASTPOS=40003784;//kernel.MapEditor:3784
          Tonyu.globals.$mp.scrollTo(1000,1000);
          //$LASTPOS=40003817;//kernel.MapEditor:3817
          _this.mode="setOn";
          
        }
        //$LASTPOS=40003841;//kernel.MapEditor:3841
        if (_this.getkey("g")==1||(Tonyu.globals.$touches[0].touched==1&&Tonyu.globals.$touches[0].x>240&&Tonyu.globals.$touches[0].x<360&&Tonyu.globals.$touches[0].y>480&&Tonyu.globals.$touches[0].y<560)) {
          //$LASTPOS=40003981;//kernel.MapEditor:3981
          if (_this.mode!="get") {
            //$LASTPOS=40004010;//kernel.MapEditor:4010
            _this.prevMode=_this.mode;
            //$LASTPOS=40004037;//kernel.MapEditor:4037
            Tonyu.globals.$mp.scrollTo(- 40,- 40);
            //$LASTPOS=40004072;//kernel.MapEditor:4072
            _this.mode="get";
            //$LASTPOS=40004096;//kernel.MapEditor:4096
            _this.chipX=- 40;
            //$LASTPOS=40004119;//kernel.MapEditor:4119
            _this.chipY=- 40;
            
          } else {
            //$LASTPOS=40004157;//kernel.MapEditor:4157
            Tonyu.globals.$mp.scrollTo(1000,1000);
            //$LASTPOS=40004194;//kernel.MapEditor:4194
            _this.mode=_this.prevMode;
            
          }
          //$LASTPOS=40004227;//kernel.MapEditor:4227
          _this.print(_this.mode+" mode");
          
        }
        //$LASTPOS=40004258;//kernel.MapEditor:4258
        if (_this.getkey("p")==1||(Tonyu.globals.$touches[0].touched==1&&Tonyu.globals.$touches[0].x>360&&Tonyu.globals.$touches[0].x<480&&Tonyu.globals.$touches[0].y>480&&Tonyu.globals.$touches[0].y<560)) {
          //$LASTPOS=40004412;//kernel.MapEditor:4412
          _this.saveFileName=prompt("input json file(*.json)","map.json");
          //$LASTPOS=40004885;//kernel.MapEditor:4885
          _this.saveDataFile=_this.file("../maps/").rel(_this.saveFileName);
          //$LASTPOS=40004942;//kernel.MapEditor:4942
          _this.data=[Tonyu.globals.$map.mapTable,Tonyu.globals.$map.mapOnTable,Tonyu.globals.$map.chipWidth,Tonyu.globals.$map.chipHeight];
          //$LASTPOS=40005084;//kernel.MapEditor:5084
          _this.saveDataFile.obj(_this.data);
          //$LASTPOS=40005116;//kernel.MapEditor:5116
          _this.print(_this.saveFileName+" Saved");
          
        }
        //$LASTPOS=40005205;//kernel.MapEditor:5205
        if (_this.getkey("c")==1||(Tonyu.globals.$touches[0].touched==1&&Tonyu.globals.$touches[0].x>120&&Tonyu.globals.$touches[0].x<240&&Tonyu.globals.$touches[0].y>560&&Tonyu.globals.$touches[0].y<640)) {
          //$LASTPOS=40005345;//kernel.MapEditor:5345
          Tonyu.globals.$mp.scrollTo(1000,1000);
          //$LASTPOS=40005378;//kernel.MapEditor:5378
          _this.mode="copy";
          //$LASTPOS=40005399;//kernel.MapEditor:5399
          _this.print(_this.mode+" mode");
          
        }
        //$LASTPOS=40005430;//kernel.MapEditor:5430
        if (_this.mode!="get") {
          //$LASTPOS=40005455;//kernel.MapEditor:5455
          if (_this.getkey("left")>0||(Tonyu.globals.$touches[0].touched&&Tonyu.globals.$touches[0].x>0&&Tonyu.globals.$touches[0].x<40&&Tonyu.globals.$touches[0].y<480)) {
            //$LASTPOS=40005561;//kernel.MapEditor:5561
            _this.mx=_this.mx+8;
          }
          //$LASTPOS=40005578;//kernel.MapEditor:5578
          if (_this.getkey("right")>0||(Tonyu.globals.$touches[0].touched&&Tonyu.globals.$touches[0].x>Tonyu.globals.$screenWidth-40&&Tonyu.globals.$touches[0].x<Tonyu.globals.$screenWidth&&Tonyu.globals.$touches[0].y<480)) {
            //$LASTPOS=40005709;//kernel.MapEditor:5709
            _this.mx=_this.mx-8;
          }
          //$LASTPOS=40005726;//kernel.MapEditor:5726
          if (_this.getkey("up")>0||(Tonyu.globals.$touches[0].touched&&Tonyu.globals.$touches[0].x>0&&Tonyu.globals.$touches[0].x<Tonyu.globals.$screenWidth&&Tonyu.globals.$touches[0].y<40)) {
            //$LASTPOS=40005839;//kernel.MapEditor:5839
            _this.my=_this.my+8;
          }
          //$LASTPOS=40005856;//kernel.MapEditor:5856
          if (_this.getkey("down")>0||(Tonyu.globals.$touches[0].touched&&Tonyu.globals.$touches[0].x>0&&Tonyu.globals.$touches[0].x<Tonyu.globals.$screenWidth&&Tonyu.globals.$touches[0].y<480&&Tonyu.globals.$touches[0].y>440)) {
            //$LASTPOS=40005991;//kernel.MapEditor:5991
            _this.my=_this.my-8;
          }
          //$LASTPOS=40006008;//kernel.MapEditor:6008
          Tonyu.globals.$map.scrollTo(_this.mx,_this.my);
          
        } else {
          //$LASTPOS=40006049;//kernel.MapEditor:6049
          if (_this.getkey("left")>0||(Tonyu.globals.$touches[0].touched&&Tonyu.globals.$touches[0].x>0&&Tonyu.globals.$touches[0].x<40&&Tonyu.globals.$touches[0].y<480)) {
            //$LASTPOS=40006155;//kernel.MapEditor:6155
            _this.chipX=_this.chipX+8;
          }
          //$LASTPOS=40006178;//kernel.MapEditor:6178
          if (_this.getkey("right")>0||(Tonyu.globals.$touches[0].touched&&Tonyu.globals.$touches[0].x>Tonyu.globals.$screenWidth-40&&Tonyu.globals.$touches[0].x<Tonyu.globals.$screenWidth&&Tonyu.globals.$touches[0].y<480)) {
            //$LASTPOS=40006309;//kernel.MapEditor:6309
            _this.chipX=_this.chipX-8;
          }
          //$LASTPOS=40006332;//kernel.MapEditor:6332
          if (_this.getkey("up")>0||(Tonyu.globals.$touches[0].touched&&Tonyu.globals.$touches[0].x>0&&Tonyu.globals.$touches[0].x<Tonyu.globals.$screenWidth&&Tonyu.globals.$touches[0].y<40)) {
            //$LASTPOS=40006445;//kernel.MapEditor:6445
            _this.chipY=_this.chipY+8;
          }
          //$LASTPOS=40006468;//kernel.MapEditor:6468
          if (_this.getkey("down")>0||(Tonyu.globals.$touches[0].touched&&Tonyu.globals.$touches[0].x>0&&Tonyu.globals.$touches[0].x<Tonyu.globals.$screenWidth&&Tonyu.globals.$touches[0].y<480&&Tonyu.globals.$touches[0].y>440)) {
            //$LASTPOS=40006603;//kernel.MapEditor:6603
            _this.chipY=_this.chipY-8;
          }
          //$LASTPOS=40006626;//kernel.MapEditor:6626
          Tonyu.globals.$mp.scrollTo(_this.chipX,_this.chipY);
          
        }
        //$LASTPOS=40006663;//kernel.MapEditor:6663
        _this.panel.x=_this.panel.width/2-_this.mx;
        //$LASTPOS=40006693;//kernel.MapEditor:6693
        _this.panel.y=_this.panel.height/2-_this.my;
        //$LASTPOS=40006724;//kernel.MapEditor:6724
        if (_this.mode=="set"&&_this.getkey(1)>0&&_this.inRect()) {
          //$LASTPOS=40006776;//kernel.MapEditor:6776
          Tonyu.globals.$map.setAt(Tonyu.globals.$mouseX+_this.mx,Tonyu.globals.$mouseY+_this.my,_this.mapp);
          //$LASTPOS=40006824;//kernel.MapEditor:6824
          Tonyu.globals.$map.setOnAt(Tonyu.globals.$mouseX+_this.mx,Tonyu.globals.$mouseY+_this.my,- 1);
          
        } else {
          //$LASTPOS=40006874;//kernel.MapEditor:6874
          if (_this.mode=="erase"&&_this.getkey(1)>0&&_this.inRect()) {
            //$LASTPOS=40006928;//kernel.MapEditor:6928
            Tonyu.globals.$map.setAt(Tonyu.globals.$mouseX+_this.mx,Tonyu.globals.$mouseY+_this.my,- 1);
            
          } else {
            //$LASTPOS=40006976;//kernel.MapEditor:6976
            if (_this.mode=="get"&&_this.getkey(1)>0&&_this.inRect()) {
              //$LASTPOS=40007028;//kernel.MapEditor:7028
              _this.mapp=Tonyu.globals.$mp.getAt(Tonyu.globals.$mouseX+_this.chipX,Tonyu.globals.$mouseY+_this.chipY);
              //$LASTPOS=40007081;//kernel.MapEditor:7081
              _this.mode=_this.prevMode;
              //$LASTPOS=40007104;//kernel.MapEditor:7104
              Tonyu.globals.$mp.scrollTo(1000,1000);
              //$LASTPOS=40007137;//kernel.MapEditor:7137
              _this.print(_this.mode+" mode");
              //$LASTPOS=40007166;//kernel.MapEditor:7166
              _this.updateEx(10);
              
            } else {
              //$LASTPOS=40007190;//kernel.MapEditor:7190
              if (_this.mode=="setOn"&&_this.getkey(1)>0&&_this.inRect()) {
                //$LASTPOS=40007244;//kernel.MapEditor:7244
                Tonyu.globals.$map.setOnAt(Tonyu.globals.$mouseX+_this.mx,Tonyu.globals.$mouseY+_this.my,_this.mapp);
                
              } else {
                //$LASTPOS=40007296;//kernel.MapEditor:7296
                if (_this.mode=="copy"&&_this.getkey(1)>0&&_this.inRect()) {
                  //$LASTPOS=40007349;//kernel.MapEditor:7349
                  _this.mapp=Tonyu.globals.$map.getAt(Tonyu.globals.$mouseX+_this.mx,Tonyu.globals.$mouseY+_this.my);
                  //$LASTPOS=40007397;//kernel.MapEditor:7397
                  _this.mode="set";
                  //$LASTPOS=40007417;//kernel.MapEditor:7417
                  _this.print(_this.mode+" mode");
                  //$LASTPOS=40007446;//kernel.MapEditor:7446
                  _this.updateEx(10);
                  
                }
              }
            }
          }
        }
        //$LASTPOS=40007470;//kernel.MapEditor:7470
        _this.update();
        
      }
    },
    fiber$main :function _trc_MapEditor_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var i;
      var j;
      
      //$LASTPOS=40000030;//kernel.MapEditor:30
      Tonyu.globals.$Screen.resize(480,640);
      //$LASTPOS=40000055;//kernel.MapEditor:55
      _this.loadMode=false;
      //$LASTPOS=40000071;//kernel.MapEditor:71
      _this.fileExist=false;
      //$LASTPOS=40000088;//kernel.MapEditor:88
      _this.print("map file(s)");
      
      _thread.enter(function _trc_MapEditor_ent_main(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=40000110;//kernel.MapEditor:110
            _this.fiber$file(_thread, "../maps/");
            __pc=1;return;
          case 1:
            _this.fileList=_thread.retVal;
            
            //$LASTPOS=40000137;//kernel.MapEditor:137
            _this.fileList.recursive((function a(f) {
              
              //$LASTPOS=40000175;//kernel.MapEditor:175
              f=f+"";
              //$LASTPOS=40000187;//kernel.MapEditor:187
              _this.fNames=f.split("/");
              //$LASTPOS=40000212;//kernel.MapEditor:212
              _this.print(_this.fNames[_this.fNames.length-1]);
              //$LASTPOS=40000248;//kernel.MapEditor:248
              _this.fileExist=true;
            }));
            //$LASTPOS=40000268;//kernel.MapEditor:268
            if (!(_this.fileExist)) { __pc=11; break; }
            //$LASTPOS=40000287;//kernel.MapEditor:287
            _this.print("Load Data?: Y or N");
            //$LASTPOS=40000320;//kernel.MapEditor:320
          case 2:
            //$LASTPOS=40000341;//kernel.MapEditor:341
            if (!(_this.getkey("y")>0)) { __pc=3; break; }
            //$LASTPOS=40000372;//kernel.MapEditor:372
            _this.loadMode=true;
            __pc=6; break;
            
          case 3:
            
            //$LASTPOS=40000424;//kernel.MapEditor:424
            if (!(_this.getkey("n")>0)) { __pc=4; break; }
            //$LASTPOS=40000455;//kernel.MapEditor:455
            _this.loadMode=false;
            __pc=6; break;
            
          case 4:
            
            //$LASTPOS=40000508;//kernel.MapEditor:508
            _this.fiber$update(_thread);
            __pc=5;return;
          case 5:
            
            __pc=2;break;
          case 6:
            
            //$LASTPOS=40000528;//kernel.MapEditor:528
            if (!(_this.loadMode)) { __pc=10; break; }
            //$LASTPOS=40000550;//kernel.MapEditor:550
            _this.fileName=prompt("Input json file (*.json)","map.json");
            //$LASTPOS=40000614;//kernel.MapEditor:614
            if (_this.fileName) {
              //$LASTPOS=40000640;//kernel.MapEditor:640
              _this.mapDataFile=_this.file("../maps/").rel(_this.fileName);
              
            }
            //$LASTPOS=40000702;//kernel.MapEditor:702
            if (!(_this.mapDataFile.obj())) { __pc=7; break; }
            {
              //$LASTPOS=40000737;//kernel.MapEditor:737
              _this.baseData=_this.mapDataFile.obj();
            }
            __pc=9;break;
          case 7:
            //$LASTPOS=40000792;//kernel.MapEditor:792
            _this.fiber$file(_thread, _this.fileName);
            __pc=8;return;
          case 8:
            _this.mapDataFile=_thread.retVal;
            
            //$LASTPOS=40000832;//kernel.MapEditor:832
            if (_this.mapDataFile.obj()) {
              //$LASTPOS=40000871;//kernel.MapEditor:871
              _this.baseData=_this.mapDataFile.obj();
              
            }
          case 9:
            
            //$LASTPOS=40000931;//kernel.MapEditor:931
            if (_this.baseData==undefined) {
              //$LASTPOS=40000968;//kernel.MapEditor:968
              _this.print("Load failed");
              //$LASTPOS=40001002;//kernel.MapEditor:1002
              _this.loadMode=false;
              
            } else {
              //$LASTPOS=40001032;//kernel.MapEditor:1032
              if (_this.baseData[0]&&_this.baseData[1]) {
                //$LASTPOS=40001076;//kernel.MapEditor:1076
                _this.mapData=_this.baseData[0];
                //$LASTPOS=40001109;//kernel.MapEditor:1109
                _this.mapOnData=_this.baseData[1];
                //$LASTPOS=40001144;//kernel.MapEditor:1144
                if (_this.baseData.length>2) {
                  //$LASTPOS=40001183;//kernel.MapEditor:1183
                  _this.chipWidth=_this.baseData[_this.baseData.length-2];
                  //$LASTPOS=40001238;//kernel.MapEditor:1238
                  _this.chipHeight=_this.baseData[_this.baseData.length-1];
                  
                }
                
              }
            }
          case 10:
            
          case 11:
            
            //$LASTPOS=40001310;//kernel.MapEditor:1310
            _this.fiber$update(_thread);
            __pc=12;return;
          case 12:
            
            //$LASTPOS=40001573;//kernel.MapEditor:1573
            if (! _this.loadMode) {
              //$LASTPOS=40001592;//kernel.MapEditor:1592
              _this.row=prompt("input row");
              //$LASTPOS=40001621;//kernel.MapEditor:1621
              _this.col=prompt("input col");
              //$LASTPOS=40001650;//kernel.MapEditor:1650
              _this.chipWidth=prompt("input chipWidth");
              //$LASTPOS=40001691;//kernel.MapEditor:1691
              _this.chipHeight=prompt("input chipHeight");
              //$LASTPOS=40001734;//kernel.MapEditor:1734
              _this.panel=new Tonyu.classes.kernel.Panel({width: _this.col*_this.chipWidth,height: _this.row*_this.chipHeight});
              //$LASTPOS=40001798;//kernel.MapEditor:1798
              _this.panel.x=_this.panel.width/2+40;
              //$LASTPOS=40001828;//kernel.MapEditor:1828
              _this.panel.y=_this.panel.height/2+40;
              //$LASTPOS=40001859;//kernel.MapEditor:1859
              _this.panel.setFillStyle("cyan");
              //$LASTPOS=40001891;//kernel.MapEditor:1891
              _this.panel.fillRect(0,0,_this.panel.width,_this.panel.height);
              //$LASTPOS=40001941;//kernel.MapEditor:1941
              Tonyu.globals.$map=new Tonyu.classes.kernel.Map({row: _this.row,col: _this.col,chipWidth: _this.chipWidth,chipHeight: _this.chipHeight});
              
            } else {
              //$LASTPOS=40002245;//kernel.MapEditor:2245
              Tonyu.globals.$map=new Tonyu.classes.kernel.Map({chipWidth: 32,chipHeight: 32});
              //$LASTPOS=40002291;//kernel.MapEditor:2291
              Tonyu.globals.$map.load(_this.fileName);
              //$LASTPOS=40002316;//kernel.MapEditor:2316
              _this.panel=new Tonyu.classes.kernel.Panel({width: Tonyu.globals.$map.col*Tonyu.globals.$map.chipWidth,height: Tonyu.globals.$map.row*Tonyu.globals.$map.chipHeight,zOrder: 100});
              //$LASTPOS=40002411;//kernel.MapEditor:2411
              _this.panel.x=_this.panel.width/2+40;
              //$LASTPOS=40002441;//kernel.MapEditor:2441
              _this.panel.y=_this.panel.height/2+40;
              //$LASTPOS=40002472;//kernel.MapEditor:2472
              _this.panel.setFillStyle("cyan");
              //$LASTPOS=40002504;//kernel.MapEditor:2504
              _this.panel.fillRect(0,0,_this.panel.width,_this.panel.height);
              
            }
            //$LASTPOS=40002552;//kernel.MapEditor:2552
            Tonyu.globals.$mp=new Tonyu.classes.kernel.Map({row: 16,col: 8,chipWidth: 32,chipHeight: 32});
            //$LASTPOS=40002606;//kernel.MapEditor:2606
            _this.counter=0;
            //$LASTPOS=40002617;//kernel.MapEditor:2617
            //$LASTPOS=40002621;//kernel.MapEditor:2621
            i = 0;
            while(i<16) {
              {
                //$LASTPOS=40002644;//kernel.MapEditor:2644
                //$LASTPOS=40002648;//kernel.MapEditor:2648
                j = 0;
                while(j<8) {
                  {
                    //$LASTPOS=40002674;//kernel.MapEditor:2674
                    Tonyu.globals.$mp.set(j,i,Tonyu.globals.$pat_mapchip+_this.counter);
                    //$LASTPOS=40002717;//kernel.MapEditor:2717
                    _this.counter++;
                  }
                  j++;
                }
              }
              i++;
            }
            //$LASTPOS=40002736;//kernel.MapEditor:2736
            _this.fiber$drawPanel(_thread);
            __pc=13;return;
          case 13:
            
            //$LASTPOS=40002749;//kernel.MapEditor:2749
            _this.mode="get";
            //$LASTPOS=40002761;//kernel.MapEditor:2761
            _this.prevMode="set";
            //$LASTPOS=40002777;//kernel.MapEditor:2777
            _this.mapp=0;
            //$LASTPOS=40002785;//kernel.MapEditor:2785
            _this.mx=- 40;
            //$LASTPOS=40002793;//kernel.MapEditor:2793
            _this.my=- 40;
            //$LASTPOS=40002801;//kernel.MapEditor:2801
            _this.chipX=- 40;
            //$LASTPOS=40002812;//kernel.MapEditor:2812
            _this.chipY=- 40;
            //$LASTPOS=40002823;//kernel.MapEditor:2823
            _this.x=Tonyu.globals.$screenWidth-_this.chipWidth/2;
            //$LASTPOS=40002851;//kernel.MapEditor:2851
            _this.y=Tonyu.globals.$screenHeight-_this.chipHeight/2;
            //$LASTPOS=40002881;//kernel.MapEditor:2881
            Tonyu.globals.$map.scrollTo(_this.mx,_this.my);
            //$LASTPOS=40002903;//kernel.MapEditor:2903
          case 14:
            //$LASTPOS=40002920;//kernel.MapEditor:2920
            _this.p=_this.mapp;
            //$LASTPOS=40002932;//kernel.MapEditor:2932
            if (_this.getkey("e")==1||(Tonyu.globals.$touches[0].touched==1&&Tonyu.globals.$touches[0].x>0&&Tonyu.globals.$touches[0].x<120&&Tonyu.globals.$touches[0].y>560&&Tonyu.globals.$touches[0].y<640)) {
              //$LASTPOS=40003070;//kernel.MapEditor:3070
              Tonyu.globals.$mp.scrollTo(1000,1000);
              //$LASTPOS=40003103;//kernel.MapEditor:3103
              _this.mode="erase";
              //$LASTPOS=40003125;//kernel.MapEditor:3125
              _this.print(_this.mode+" mode");
              
            }
            //$LASTPOS=40003156;//kernel.MapEditor:3156
            if (_this.getkey("s")==1) {
              //$LASTPOS=40003184;//kernel.MapEditor:3184
              Tonyu.globals.$mp.scrollTo(1000,1000);
              //$LASTPOS=40003217;//kernel.MapEditor:3217
              if (_this.mode=="set") {
                //$LASTPOS=40003246;//kernel.MapEditor:3246
                _this.mode="setOn";
                
              } else {
                //$LASTPOS=40003287;//kernel.MapEditor:3287
                _this.mode="set";
                
              }
              //$LASTPOS=40003317;//kernel.MapEditor:3317
              _this.print(_this.mode+" mode");
              
            }
            //$LASTPOS=40003348;//kernel.MapEditor:3348
            if (Tonyu.globals.$touches[0].touched==1&&Tonyu.globals.$touches[0].x>0&&Tonyu.globals.$touches[0].x<120&&Tonyu.globals.$touches[0].y>480&&Tonyu.globals.$touches[0].y<560) {
              //$LASTPOS=40003466;//kernel.MapEditor:3466
              Tonyu.globals.$mp.scrollTo(1000,1000);
              //$LASTPOS=40003499;//kernel.MapEditor:3499
              _this.mode="set";
              //$LASTPOS=40003519;//kernel.MapEditor:3519
              _this.print(_this.mode+" mode");
              
            }
            //$LASTPOS=40003550;//kernel.MapEditor:3550
            if (Tonyu.globals.$touches[0].touched==1&&Tonyu.globals.$touches[0].x>120&&Tonyu.globals.$touches[0].x<240&&Tonyu.globals.$touches[0].y>480&&Tonyu.globals.$touches[0].y<560) {
              //$LASTPOS=40003670;//kernel.MapEditor:3670
              Tonyu.globals.$mp.scrollTo(1000,1000);
              //$LASTPOS=40003703;//kernel.MapEditor:3703
              _this.mode="setOn";
              //$LASTPOS=40003725;//kernel.MapEditor:3725
              _this.print(_this.mode+" mode");
              
            }
            //$LASTPOS=40003756;//kernel.MapEditor:3756
            if (_this.getkey("o")==1) {
              //$LASTPOS=40003784;//kernel.MapEditor:3784
              Tonyu.globals.$mp.scrollTo(1000,1000);
              //$LASTPOS=40003817;//kernel.MapEditor:3817
              _this.mode="setOn";
              
            }
            //$LASTPOS=40003841;//kernel.MapEditor:3841
            if (_this.getkey("g")==1||(Tonyu.globals.$touches[0].touched==1&&Tonyu.globals.$touches[0].x>240&&Tonyu.globals.$touches[0].x<360&&Tonyu.globals.$touches[0].y>480&&Tonyu.globals.$touches[0].y<560)) {
              //$LASTPOS=40003981;//kernel.MapEditor:3981
              if (_this.mode!="get") {
                //$LASTPOS=40004010;//kernel.MapEditor:4010
                _this.prevMode=_this.mode;
                //$LASTPOS=40004037;//kernel.MapEditor:4037
                Tonyu.globals.$mp.scrollTo(- 40,- 40);
                //$LASTPOS=40004072;//kernel.MapEditor:4072
                _this.mode="get";
                //$LASTPOS=40004096;//kernel.MapEditor:4096
                _this.chipX=- 40;
                //$LASTPOS=40004119;//kernel.MapEditor:4119
                _this.chipY=- 40;
                
              } else {
                //$LASTPOS=40004157;//kernel.MapEditor:4157
                Tonyu.globals.$mp.scrollTo(1000,1000);
                //$LASTPOS=40004194;//kernel.MapEditor:4194
                _this.mode=_this.prevMode;
                
              }
              //$LASTPOS=40004227;//kernel.MapEditor:4227
              _this.print(_this.mode+" mode");
              
            }
            //$LASTPOS=40004258;//kernel.MapEditor:4258
            if (_this.getkey("p")==1||(Tonyu.globals.$touches[0].touched==1&&Tonyu.globals.$touches[0].x>360&&Tonyu.globals.$touches[0].x<480&&Tonyu.globals.$touches[0].y>480&&Tonyu.globals.$touches[0].y<560)) {
              //$LASTPOS=40004412;//kernel.MapEditor:4412
              _this.saveFileName=prompt("input json file(*.json)","map.json");
              //$LASTPOS=40004885;//kernel.MapEditor:4885
              _this.saveDataFile=_this.file("../maps/").rel(_this.saveFileName);
              //$LASTPOS=40004942;//kernel.MapEditor:4942
              _this.data=[Tonyu.globals.$map.mapTable,Tonyu.globals.$map.mapOnTable,Tonyu.globals.$map.chipWidth,Tonyu.globals.$map.chipHeight];
              //$LASTPOS=40005084;//kernel.MapEditor:5084
              _this.saveDataFile.obj(_this.data);
              //$LASTPOS=40005116;//kernel.MapEditor:5116
              _this.print(_this.saveFileName+" Saved");
              
            }
            //$LASTPOS=40005205;//kernel.MapEditor:5205
            if (_this.getkey("c")==1||(Tonyu.globals.$touches[0].touched==1&&Tonyu.globals.$touches[0].x>120&&Tonyu.globals.$touches[0].x<240&&Tonyu.globals.$touches[0].y>560&&Tonyu.globals.$touches[0].y<640)) {
              //$LASTPOS=40005345;//kernel.MapEditor:5345
              Tonyu.globals.$mp.scrollTo(1000,1000);
              //$LASTPOS=40005378;//kernel.MapEditor:5378
              _this.mode="copy";
              //$LASTPOS=40005399;//kernel.MapEditor:5399
              _this.print(_this.mode+" mode");
              
            }
            //$LASTPOS=40005430;//kernel.MapEditor:5430
            if (_this.mode!="get") {
              //$LASTPOS=40005455;//kernel.MapEditor:5455
              if (_this.getkey("left")>0||(Tonyu.globals.$touches[0].touched&&Tonyu.globals.$touches[0].x>0&&Tonyu.globals.$touches[0].x<40&&Tonyu.globals.$touches[0].y<480)) {
                //$LASTPOS=40005561;//kernel.MapEditor:5561
                _this.mx=_this.mx+8;
              }
              //$LASTPOS=40005578;//kernel.MapEditor:5578
              if (_this.getkey("right")>0||(Tonyu.globals.$touches[0].touched&&Tonyu.globals.$touches[0].x>Tonyu.globals.$screenWidth-40&&Tonyu.globals.$touches[0].x<Tonyu.globals.$screenWidth&&Tonyu.globals.$touches[0].y<480)) {
                //$LASTPOS=40005709;//kernel.MapEditor:5709
                _this.mx=_this.mx-8;
              }
              //$LASTPOS=40005726;//kernel.MapEditor:5726
              if (_this.getkey("up")>0||(Tonyu.globals.$touches[0].touched&&Tonyu.globals.$touches[0].x>0&&Tonyu.globals.$touches[0].x<Tonyu.globals.$screenWidth&&Tonyu.globals.$touches[0].y<40)) {
                //$LASTPOS=40005839;//kernel.MapEditor:5839
                _this.my=_this.my+8;
              }
              //$LASTPOS=40005856;//kernel.MapEditor:5856
              if (_this.getkey("down")>0||(Tonyu.globals.$touches[0].touched&&Tonyu.globals.$touches[0].x>0&&Tonyu.globals.$touches[0].x<Tonyu.globals.$screenWidth&&Tonyu.globals.$touches[0].y<480&&Tonyu.globals.$touches[0].y>440)) {
                //$LASTPOS=40005991;//kernel.MapEditor:5991
                _this.my=_this.my-8;
              }
              //$LASTPOS=40006008;//kernel.MapEditor:6008
              Tonyu.globals.$map.scrollTo(_this.mx,_this.my);
              
            } else {
              //$LASTPOS=40006049;//kernel.MapEditor:6049
              if (_this.getkey("left")>0||(Tonyu.globals.$touches[0].touched&&Tonyu.globals.$touches[0].x>0&&Tonyu.globals.$touches[0].x<40&&Tonyu.globals.$touches[0].y<480)) {
                //$LASTPOS=40006155;//kernel.MapEditor:6155
                _this.chipX=_this.chipX+8;
              }
              //$LASTPOS=40006178;//kernel.MapEditor:6178
              if (_this.getkey("right")>0||(Tonyu.globals.$touches[0].touched&&Tonyu.globals.$touches[0].x>Tonyu.globals.$screenWidth-40&&Tonyu.globals.$touches[0].x<Tonyu.globals.$screenWidth&&Tonyu.globals.$touches[0].y<480)) {
                //$LASTPOS=40006309;//kernel.MapEditor:6309
                _this.chipX=_this.chipX-8;
              }
              //$LASTPOS=40006332;//kernel.MapEditor:6332
              if (_this.getkey("up")>0||(Tonyu.globals.$touches[0].touched&&Tonyu.globals.$touches[0].x>0&&Tonyu.globals.$touches[0].x<Tonyu.globals.$screenWidth&&Tonyu.globals.$touches[0].y<40)) {
                //$LASTPOS=40006445;//kernel.MapEditor:6445
                _this.chipY=_this.chipY+8;
              }
              //$LASTPOS=40006468;//kernel.MapEditor:6468
              if (_this.getkey("down")>0||(Tonyu.globals.$touches[0].touched&&Tonyu.globals.$touches[0].x>0&&Tonyu.globals.$touches[0].x<Tonyu.globals.$screenWidth&&Tonyu.globals.$touches[0].y<480&&Tonyu.globals.$touches[0].y>440)) {
                //$LASTPOS=40006603;//kernel.MapEditor:6603
                _this.chipY=_this.chipY-8;
              }
              //$LASTPOS=40006626;//kernel.MapEditor:6626
              Tonyu.globals.$mp.scrollTo(_this.chipX,_this.chipY);
              
            }
            //$LASTPOS=40006663;//kernel.MapEditor:6663
            _this.panel.x=_this.panel.width/2-_this.mx;
            //$LASTPOS=40006693;//kernel.MapEditor:6693
            _this.panel.y=_this.panel.height/2-_this.my;
            //$LASTPOS=40006724;//kernel.MapEditor:6724
            if (!(_this.mode=="set"&&_this.getkey(1)>0&&_this.inRect())) { __pc=15; break; }
            {
              //$LASTPOS=40006776;//kernel.MapEditor:6776
              Tonyu.globals.$map.setAt(Tonyu.globals.$mouseX+_this.mx,Tonyu.globals.$mouseY+_this.my,_this.mapp);
              //$LASTPOS=40006824;//kernel.MapEditor:6824
              Tonyu.globals.$map.setOnAt(Tonyu.globals.$mouseX+_this.mx,Tonyu.globals.$mouseY+_this.my,- 1);
            }
            __pc=25;break;
          case 15:
            //$LASTPOS=40006874;//kernel.MapEditor:6874
            if (!(_this.mode=="erase"&&_this.getkey(1)>0&&_this.inRect())) { __pc=16; break; }
            {
              //$LASTPOS=40006928;//kernel.MapEditor:6928
              Tonyu.globals.$map.setAt(Tonyu.globals.$mouseX+_this.mx,Tonyu.globals.$mouseY+_this.my,- 1);
            }
            __pc=24;break;
          case 16:
            //$LASTPOS=40006976;//kernel.MapEditor:6976
            if (!(_this.mode=="get"&&_this.getkey(1)>0&&_this.inRect())) { __pc=18; break; }
            //$LASTPOS=40007028;//kernel.MapEditor:7028
            _this.mapp=Tonyu.globals.$mp.getAt(Tonyu.globals.$mouseX+_this.chipX,Tonyu.globals.$mouseY+_this.chipY);
            //$LASTPOS=40007081;//kernel.MapEditor:7081
            _this.mode=_this.prevMode;
            //$LASTPOS=40007104;//kernel.MapEditor:7104
            Tonyu.globals.$mp.scrollTo(1000,1000);
            //$LASTPOS=40007137;//kernel.MapEditor:7137
            _this.print(_this.mode+" mode");
            //$LASTPOS=40007166;//kernel.MapEditor:7166
            _this.fiber$updateEx(_thread, 10);
            __pc=17;return;
          case 17:
            
            __pc=23;break;
          case 18:
            //$LASTPOS=40007190;//kernel.MapEditor:7190
            if (!(_this.mode=="setOn"&&_this.getkey(1)>0&&_this.inRect())) { __pc=19; break; }
            {
              //$LASTPOS=40007244;//kernel.MapEditor:7244
              Tonyu.globals.$map.setOnAt(Tonyu.globals.$mouseX+_this.mx,Tonyu.globals.$mouseY+_this.my,_this.mapp);
            }
            __pc=22;break;
          case 19:
            //$LASTPOS=40007296;//kernel.MapEditor:7296
            if (!(_this.mode=="copy"&&_this.getkey(1)>0&&_this.inRect())) { __pc=21; break; }
            //$LASTPOS=40007349;//kernel.MapEditor:7349
            _this.mapp=Tonyu.globals.$map.getAt(Tonyu.globals.$mouseX+_this.mx,Tonyu.globals.$mouseY+_this.my);
            //$LASTPOS=40007397;//kernel.MapEditor:7397
            _this.mode="set";
            //$LASTPOS=40007417;//kernel.MapEditor:7417
            _this.print(_this.mode+" mode");
            //$LASTPOS=40007446;//kernel.MapEditor:7446
            _this.fiber$updateEx(_thread, 10);
            __pc=20;return;
          case 20:
            
          case 21:
            
          case 22:
            
          case 23:
            
          case 24:
            
          case 25:
            
            //$LASTPOS=40007470;//kernel.MapEditor:7470
            _this.fiber$update(_thread);
            __pc=26;return;
          case 26:
            
            __pc=14;break;
          case 27:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    inRect :function _trc_MapEditor_inRect() {
      "use strict";
      var _this=this;
      
      return Tonyu.globals.$mouseX>40&&Tonyu.globals.$mouseX<Tonyu.globals.$screenWidth-40&&Tonyu.globals.$mouseY>40&&Tonyu.globals.$mouseY<Tonyu.globals.$screenHeight-200;
    },
    fiber$inRect :function _trc_MapEditor_f_inRect(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=Tonyu.globals.$mouseX>40&&Tonyu.globals.$mouseX<Tonyu.globals.$screenWidth-40&&Tonyu.globals.$mouseY>40&&Tonyu.globals.$mouseY<Tonyu.globals.$screenHeight-200;return;
      
      
      _thread.retVal=_this;return;
    },
    drawPanel :function _trc_MapEditor_drawPanel() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=40007635;//kernel.MapEditor:7635
      Tonyu.globals.$panel.setFillStyle("gray");
      //$LASTPOS=40007668;//kernel.MapEditor:7668
      Tonyu.globals.$panel.alpha=128;
      //$LASTPOS=40007690;//kernel.MapEditor:7690
      Tonyu.globals.$panel.fillRect(0,0,Tonyu.globals.$screenWidth,40);
      //$LASTPOS=40007732;//kernel.MapEditor:7732
      Tonyu.globals.$panel.fillRect(0,0,40,Tonyu.globals.$screenHeight-160);
      //$LASTPOS=40007779;//kernel.MapEditor:7779
      Tonyu.globals.$panel.fillRect(Tonyu.globals.$screenWidth-40,0,40,Tonyu.globals.$screenHeight-160);
      //$LASTPOS=40007840;//kernel.MapEditor:7840
      Tonyu.globals.$panel.fillRect(0,Tonyu.globals.$screenHeight-200,Tonyu.globals.$screenWidth,40);
      //$LASTPOS=40007898;//kernel.MapEditor:7898
      Tonyu.globals.$panel.alpha=255;
      //$LASTPOS=40007920;//kernel.MapEditor:7920
      Tonyu.globals.$panel.setFillStyle("black");
      //$LASTPOS=40007972;//kernel.MapEditor:7972
      Tonyu.globals.$panel.fillRect(0,Tonyu.globals.$screenHeight-160,120,80);
      //$LASTPOS=40008021;//kernel.MapEditor:8021
      Tonyu.globals.$panel.fillRect(120,Tonyu.globals.$screenHeight-160,120,80);
      //$LASTPOS=40008072;//kernel.MapEditor:8072
      Tonyu.globals.$panel.fillRect(240,Tonyu.globals.$screenHeight-160,120,80);
      //$LASTPOS=40008123;//kernel.MapEditor:8123
      Tonyu.globals.$panel.fillRect(360,Tonyu.globals.$screenHeight-160,120,80);
      //$LASTPOS=40008174;//kernel.MapEditor:8174
      Tonyu.globals.$panel.fillRect(0,Tonyu.globals.$screenHeight-80,120,80);
      //$LASTPOS=40008222;//kernel.MapEditor:8222
      Tonyu.globals.$panel.fillRect(120,Tonyu.globals.$screenHeight-80,120,80);
      //$LASTPOS=40008272;//kernel.MapEditor:8272
      Tonyu.globals.$panel.setFillStyle("white");
      //$LASTPOS=40008306;//kernel.MapEditor:8306
      Tonyu.globals.$panel.fillRect(10,Tonyu.globals.$screenHeight-150,100,60);
      //$LASTPOS=40008356;//kernel.MapEditor:8356
      Tonyu.globals.$panel.fillRect(130,Tonyu.globals.$screenHeight-150,100,60);
      //$LASTPOS=40008407;//kernel.MapEditor:8407
      Tonyu.globals.$panel.fillRect(250,Tonyu.globals.$screenHeight-150,100,60);
      //$LASTPOS=40008458;//kernel.MapEditor:8458
      Tonyu.globals.$panel.fillRect(370,Tonyu.globals.$screenHeight-150,100,60);
      //$LASTPOS=40008509;//kernel.MapEditor:8509
      Tonyu.globals.$panel.fillRect(10,Tonyu.globals.$screenHeight-70,100,60);
      //$LASTPOS=40008558;//kernel.MapEditor:8558
      Tonyu.globals.$panel.fillRect(130,Tonyu.globals.$screenHeight-70,100,60);
      //$LASTPOS=40008608;//kernel.MapEditor:8608
      Tonyu.globals.$panel.setFillStyle("black");
      //$LASTPOS=40008652;//kernel.MapEditor:8652
      Tonyu.globals.$panel.fillText("▲",Tonyu.globals.$screenWidth/2,30,40,"center");
      //$LASTPOS=40008708;//kernel.MapEditor:8708
      Tonyu.globals.$panel.fillText("◀",20,(Tonyu.globals.$screenHeight-200)/2,40,"center");
      //$LASTPOS=40008771;//kernel.MapEditor:8771
      Tonyu.globals.$panel.fillText("▼",Tonyu.globals.$screenWidth/2,Tonyu.globals.$screenHeight-160-10,40,"center");
      //$LASTPOS=40008845;//kernel.MapEditor:8845
      Tonyu.globals.$panel.fillText("▶",Tonyu.globals.$screenWidth-20,(Tonyu.globals.$screenHeight-200)/2,40,"center");
      //$LASTPOS=40008948;//kernel.MapEditor:8948
      Tonyu.globals.$panel.fillText("set",Tonyu.globals.$screenWidth/4-60,Tonyu.globals.$screenHeight-110,40,"center");
      //$LASTPOS=40009024;//kernel.MapEditor:9024
      Tonyu.globals.$panel.fillText("setOn",Tonyu.globals.$screenWidth/4+60,Tonyu.globals.$screenHeight-110,35,"center");
      //$LASTPOS=40009102;//kernel.MapEditor:9102
      Tonyu.globals.$panel.fillText("get",Tonyu.globals.$screenWidth/2+60,Tonyu.globals.$screenHeight-110,40,"center");
      //$LASTPOS=40009178;//kernel.MapEditor:9178
      Tonyu.globals.$panel.fillText("save",Tonyu.globals.$screenWidth-60,Tonyu.globals.$screenHeight-110,40,"center");
      //$LASTPOS=40009253;//kernel.MapEditor:9253
      Tonyu.globals.$panel.fillText("erase",Tonyu.globals.$screenWidth/4-60,Tonyu.globals.$screenHeight-30,35,"center");
      //$LASTPOS=40009330;//kernel.MapEditor:9330
      Tonyu.globals.$panel.fillText("copy",Tonyu.globals.$screenWidth/4+60,Tonyu.globals.$screenHeight-30,35,"center");
    },
    fiber$drawPanel :function _trc_MapEditor_f_drawPanel(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=40007635;//kernel.MapEditor:7635
      Tonyu.globals.$panel.setFillStyle("gray");
      //$LASTPOS=40007668;//kernel.MapEditor:7668
      Tonyu.globals.$panel.alpha=128;
      //$LASTPOS=40007690;//kernel.MapEditor:7690
      Tonyu.globals.$panel.fillRect(0,0,Tonyu.globals.$screenWidth,40);
      //$LASTPOS=40007732;//kernel.MapEditor:7732
      Tonyu.globals.$panel.fillRect(0,0,40,Tonyu.globals.$screenHeight-160);
      //$LASTPOS=40007779;//kernel.MapEditor:7779
      Tonyu.globals.$panel.fillRect(Tonyu.globals.$screenWidth-40,0,40,Tonyu.globals.$screenHeight-160);
      //$LASTPOS=40007840;//kernel.MapEditor:7840
      Tonyu.globals.$panel.fillRect(0,Tonyu.globals.$screenHeight-200,Tonyu.globals.$screenWidth,40);
      //$LASTPOS=40007898;//kernel.MapEditor:7898
      Tonyu.globals.$panel.alpha=255;
      //$LASTPOS=40007920;//kernel.MapEditor:7920
      Tonyu.globals.$panel.setFillStyle("black");
      //$LASTPOS=40007972;//kernel.MapEditor:7972
      Tonyu.globals.$panel.fillRect(0,Tonyu.globals.$screenHeight-160,120,80);
      //$LASTPOS=40008021;//kernel.MapEditor:8021
      Tonyu.globals.$panel.fillRect(120,Tonyu.globals.$screenHeight-160,120,80);
      //$LASTPOS=40008072;//kernel.MapEditor:8072
      Tonyu.globals.$panel.fillRect(240,Tonyu.globals.$screenHeight-160,120,80);
      //$LASTPOS=40008123;//kernel.MapEditor:8123
      Tonyu.globals.$panel.fillRect(360,Tonyu.globals.$screenHeight-160,120,80);
      //$LASTPOS=40008174;//kernel.MapEditor:8174
      Tonyu.globals.$panel.fillRect(0,Tonyu.globals.$screenHeight-80,120,80);
      //$LASTPOS=40008222;//kernel.MapEditor:8222
      Tonyu.globals.$panel.fillRect(120,Tonyu.globals.$screenHeight-80,120,80);
      //$LASTPOS=40008272;//kernel.MapEditor:8272
      Tonyu.globals.$panel.setFillStyle("white");
      //$LASTPOS=40008306;//kernel.MapEditor:8306
      Tonyu.globals.$panel.fillRect(10,Tonyu.globals.$screenHeight-150,100,60);
      //$LASTPOS=40008356;//kernel.MapEditor:8356
      Tonyu.globals.$panel.fillRect(130,Tonyu.globals.$screenHeight-150,100,60);
      //$LASTPOS=40008407;//kernel.MapEditor:8407
      Tonyu.globals.$panel.fillRect(250,Tonyu.globals.$screenHeight-150,100,60);
      //$LASTPOS=40008458;//kernel.MapEditor:8458
      Tonyu.globals.$panel.fillRect(370,Tonyu.globals.$screenHeight-150,100,60);
      //$LASTPOS=40008509;//kernel.MapEditor:8509
      Tonyu.globals.$panel.fillRect(10,Tonyu.globals.$screenHeight-70,100,60);
      //$LASTPOS=40008558;//kernel.MapEditor:8558
      Tonyu.globals.$panel.fillRect(130,Tonyu.globals.$screenHeight-70,100,60);
      //$LASTPOS=40008608;//kernel.MapEditor:8608
      Tonyu.globals.$panel.setFillStyle("black");
      //$LASTPOS=40008652;//kernel.MapEditor:8652
      Tonyu.globals.$panel.fillText("▲",Tonyu.globals.$screenWidth/2,30,40,"center");
      //$LASTPOS=40008708;//kernel.MapEditor:8708
      Tonyu.globals.$panel.fillText("◀",20,(Tonyu.globals.$screenHeight-200)/2,40,"center");
      //$LASTPOS=40008771;//kernel.MapEditor:8771
      Tonyu.globals.$panel.fillText("▼",Tonyu.globals.$screenWidth/2,Tonyu.globals.$screenHeight-160-10,40,"center");
      //$LASTPOS=40008845;//kernel.MapEditor:8845
      Tonyu.globals.$panel.fillText("▶",Tonyu.globals.$screenWidth-20,(Tonyu.globals.$screenHeight-200)/2,40,"center");
      //$LASTPOS=40008948;//kernel.MapEditor:8948
      Tonyu.globals.$panel.fillText("set",Tonyu.globals.$screenWidth/4-60,Tonyu.globals.$screenHeight-110,40,"center");
      //$LASTPOS=40009024;//kernel.MapEditor:9024
      Tonyu.globals.$panel.fillText("setOn",Tonyu.globals.$screenWidth/4+60,Tonyu.globals.$screenHeight-110,35,"center");
      //$LASTPOS=40009102;//kernel.MapEditor:9102
      Tonyu.globals.$panel.fillText("get",Tonyu.globals.$screenWidth/2+60,Tonyu.globals.$screenHeight-110,40,"center");
      //$LASTPOS=40009178;//kernel.MapEditor:9178
      Tonyu.globals.$panel.fillText("save",Tonyu.globals.$screenWidth-60,Tonyu.globals.$screenHeight-110,40,"center");
      //$LASTPOS=40009253;//kernel.MapEditor:9253
      Tonyu.globals.$panel.fillText("erase",Tonyu.globals.$screenWidth/4-60,Tonyu.globals.$screenHeight-30,35,"center");
      //$LASTPOS=40009330;//kernel.MapEditor:9330
      Tonyu.globals.$panel.fillText("copy",Tonyu.globals.$screenWidth/4+60,Tonyu.globals.$screenHeight-30,35,"center");
      
      _thread.retVal=_this;return;
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"inRect":{"nowait":false},"drawPanel":{"nowait":false}}}
});
Tonyu.klass.define({
  fullName: 'kernel.MapEditorOLD',
  shortName: 'MapEditorOLD',
  namespace: 'kernel',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: {
    main :function _trc_MapEditorOLD_main() {
      "use strict";
      var _this=this;
      var i;
      var j;
      
      //$LASTPOS=41000032;//kernel.MapEditorOLD:32
      _this.loadMode=false;
      //$LASTPOS=41000049;//kernel.MapEditorOLD:49
      _this.print("Load Data?: Y or N");
      //$LASTPOS=41000079;//kernel.MapEditorOLD:79
      while (true) {
        //$LASTPOS=41000097;//kernel.MapEditorOLD:97
        if (_this.getkey("y")>0) {
          //$LASTPOS=41000125;//kernel.MapEditorOLD:125
          _this.loadMode=true;
          break;
          
          
        }
        //$LASTPOS=41000168;//kernel.MapEditorOLD:168
        if (_this.getkey("n")>0) {
          //$LASTPOS=41000196;//kernel.MapEditorOLD:196
          _this.loadMode=false;
          break;
          
          
        }
        //$LASTPOS=41000240;//kernel.MapEditorOLD:240
        _this.update();
        
      }
      //$LASTPOS=41000254;//kernel.MapEditorOLD:254
      if (_this.loadMode) {
        //$LASTPOS=41000273;//kernel.MapEditorOLD:273
        _this.fileName=prompt("Input json file (*.json)","map.json");
        //$LASTPOS=41000334;//kernel.MapEditorOLD:334
        if (_this.fileName) {
          //$LASTPOS=41000357;//kernel.MapEditorOLD:357
          _this.mapDataFile=_this.file("../maps/").rel(_this.fileName);
          
        }
        //$LASTPOS=41000413;//kernel.MapEditorOLD:413
        if (_this.mapDataFile.obj()) {
          //$LASTPOS=41000445;//kernel.MapEditorOLD:445
          _this.baseData=_this.mapDataFile.obj();
          
        } else {
          //$LASTPOS=41000494;//kernel.MapEditorOLD:494
          _this.mapDataFile=_this.file(_this.fileName);
          //$LASTPOS=41000531;//kernel.MapEditorOLD:531
          if (_this.mapDataFile.obj()) {
            //$LASTPOS=41000567;//kernel.MapEditorOLD:567
            _this.baseData=_this.mapDataFile.obj();
            
          }
          
        }
        //$LASTPOS=41000618;//kernel.MapEditorOLD:618
        if (_this.baseData==undefined) {
          //$LASTPOS=41000652;//kernel.MapEditorOLD:652
          _this.print("Load failed");
          //$LASTPOS=41000683;//kernel.MapEditorOLD:683
          _this.loadMode=false;
          
        } else {
          //$LASTPOS=41000710;//kernel.MapEditorOLD:710
          if (_this.baseData[0]&&_this.baseData[1]) {
            //$LASTPOS=41000751;//kernel.MapEditorOLD:751
            _this.mapData=_this.baseData[0];
            //$LASTPOS=41000781;//kernel.MapEditorOLD:781
            _this.mapOnData=_this.baseData[1];
            
          }
        }
        
      }
      //$LASTPOS=41000815;//kernel.MapEditorOLD:815
      _this.update();
      //$LASTPOS=41001093;//kernel.MapEditorOLD:1093
      if (! _this.loadMode) {
        //$LASTPOS=41001113;//kernel.MapEditorOLD:1113
        _this.row=prompt("input row");
        //$LASTPOS=41001143;//kernel.MapEditorOLD:1143
        _this.update();
        //$LASTPOS=41001158;//kernel.MapEditorOLD:1158
        _this.col=prompt("input col");
        //$LASTPOS=41001188;//kernel.MapEditorOLD:1188
        _this.panel=new Tonyu.classes.kernel.Panel({width: _this.col*32,height: _this.row*32});
        //$LASTPOS=41001238;//kernel.MapEditorOLD:1238
        _this.panel.x=_this.panel.width/2+10;
        //$LASTPOS=41001269;//kernel.MapEditorOLD:1269
        _this.panel.y=_this.panel.height/2;
        //$LASTPOS=41001298;//kernel.MapEditorOLD:1298
        _this.panel.setFillStyle("cyan");
        //$LASTPOS=41001331;//kernel.MapEditorOLD:1331
        _this.panel.fillRect(0,0,_this.panel.width,_this.panel.height);
        //$LASTPOS=41001382;//kernel.MapEditorOLD:1382
        Tonyu.globals.$map=new Tonyu.classes.kernel.Map({row: _this.row,col: _this.col,chipWidth: 32,chipHeight: 32});
        
      } else {
        //$LASTPOS=41001445;//kernel.MapEditorOLD:1445
        if (! _this.mapOnData) {
          //$LASTPOS=41001470;//kernel.MapEditorOLD:1470
          Tonyu.globals.$map=new Tonyu.classes.kernel.Map({row: _this.mapData.length,col: _this.mapData[0].length,chipWidth: 32,chipHeight: 32,mapData: _this.mapData});
          
        } else {
          //$LASTPOS=41001582;//kernel.MapEditorOLD:1582
          Tonyu.globals.$map=new Tonyu.classes.kernel.Map({row: _this.mapData.length,col: _this.mapData[0].length,chipWidth: 32,chipHeight: 32,mapData: _this.mapData,mapOnData: _this.mapOnData});
          
        }
        //$LASTPOS=41001695;//kernel.MapEditorOLD:1695
        _this.panel=new Tonyu.classes.kernel.Panel({width: Tonyu.globals.$map.col*32,height: Tonyu.globals.$map.row*32,zOrder: 100});
        //$LASTPOS=41001766;//kernel.MapEditorOLD:1766
        _this.panel.x=_this.panel.width/2;
        //$LASTPOS=41001794;//kernel.MapEditorOLD:1794
        _this.panel.y=_this.panel.height/2;
        //$LASTPOS=41001823;//kernel.MapEditorOLD:1823
        _this.panel.setFillStyle("cyan");
        //$LASTPOS=41001856;//kernel.MapEditorOLD:1856
        _this.panel.fillRect(0,0,_this.panel.width,_this.panel.height);
        
      }
      //$LASTPOS=41001906;//kernel.MapEditorOLD:1906
      Tonyu.globals.$mp=new Tonyu.classes.kernel.Map({row: 16,col: 8,chipWidth: 32,chipHeight: 32});
      //$LASTPOS=41001961;//kernel.MapEditorOLD:1961
      _this.counter=0;
      //$LASTPOS=41001973;//kernel.MapEditorOLD:1973
      //$LASTPOS=41001977;//kernel.MapEditorOLD:1977
      i = 0;
      while(i<16) {
        {
          //$LASTPOS=41002001;//kernel.MapEditorOLD:2001
          //$LASTPOS=41002005;//kernel.MapEditorOLD:2005
          j = 0;
          while(j<8) {
            {
              //$LASTPOS=41002032;//kernel.MapEditorOLD:2032
              Tonyu.globals.$mp.set(j,i,Tonyu.globals.$pat_mapchip+_this.counter);
              //$LASTPOS=41002076;//kernel.MapEditorOLD:2076
              _this.counter++;
            }
            j++;
          }
        }
        i++;
      }
      //$LASTPOS=41002098;//kernel.MapEditorOLD:2098
      _this.mode="get";
      //$LASTPOS=41002111;//kernel.MapEditorOLD:2111
      _this.prevMode="set";
      //$LASTPOS=41002128;//kernel.MapEditorOLD:2128
      _this.mapp=0;
      //$LASTPOS=41002137;//kernel.MapEditorOLD:2137
      _this.mx=0;
      //$LASTPOS=41002144;//kernel.MapEditorOLD:2144
      _this.my=0;
      //$LASTPOS=41002151;//kernel.MapEditorOLD:2151
      _this.chipX=0;
      //$LASTPOS=41002161;//kernel.MapEditorOLD:2161
      _this.chipY=0;
      //$LASTPOS=41002171;//kernel.MapEditorOLD:2171
      _this.x=Tonyu.globals.$screenWidth-16;
      //$LASTPOS=41002191;//kernel.MapEditorOLD:2191
      _this.y=Tonyu.globals.$screenHeight-16;
      //$LASTPOS=41002212;//kernel.MapEditorOLD:2212
      while (true) {
        //$LASTPOS=41002230;//kernel.MapEditorOLD:2230
        _this.p=_this.mapp;
        //$LASTPOS=41002243;//kernel.MapEditorOLD:2243
        if (_this.getkey("e")==1) {
          //$LASTPOS=41002272;//kernel.MapEditorOLD:2272
          Tonyu.globals.$mp.scrollTo(1000,1000);
          //$LASTPOS=41002306;//kernel.MapEditorOLD:2306
          _this.mode="erase";
          //$LASTPOS=41002329;//kernel.MapEditorOLD:2329
          _this.print(_this.mode+" mode");
          
        }
        //$LASTPOS=41002362;//kernel.MapEditorOLD:2362
        if (_this.getkey("s")==1) {
          //$LASTPOS=41002391;//kernel.MapEditorOLD:2391
          Tonyu.globals.$mp.scrollTo(1000,1000);
          //$LASTPOS=41002425;//kernel.MapEditorOLD:2425
          if (_this.mode=="set") {
            //$LASTPOS=41002455;//kernel.MapEditorOLD:2455
            _this.mode="setOn";
            
          } else {
            //$LASTPOS=41002498;//kernel.MapEditorOLD:2498
            _this.mode="set";
            
          }
          //$LASTPOS=41002530;//kernel.MapEditorOLD:2530
          _this.print(_this.mode+" mode");
          
        }
        //$LASTPOS=41002563;//kernel.MapEditorOLD:2563
        if (_this.getkey("o")==1) {
          //$LASTPOS=41002592;//kernel.MapEditorOLD:2592
          Tonyu.globals.$mp.scrollTo(1000,1000);
          //$LASTPOS=41002626;//kernel.MapEditorOLD:2626
          _this.mode="setOn";
          
        }
        //$LASTPOS=41002652;//kernel.MapEditorOLD:2652
        if (_this.getkey("g")==1) {
          //$LASTPOS=41002681;//kernel.MapEditorOLD:2681
          if (_this.mode!="get") {
            //$LASTPOS=41002711;//kernel.MapEditorOLD:2711
            _this.prevMode=_this.mode;
            //$LASTPOS=41002739;//kernel.MapEditorOLD:2739
            Tonyu.globals.$mp.scrollTo(0,0);
            //$LASTPOS=41002771;//kernel.MapEditorOLD:2771
            _this.mode="get";
            //$LASTPOS=41002796;//kernel.MapEditorOLD:2796
            _this.chipX=0;
            //$LASTPOS=41002818;//kernel.MapEditorOLD:2818
            _this.chipY=0;
            
          } else {
            //$LASTPOS=41002856;//kernel.MapEditorOLD:2856
            Tonyu.globals.$mp.scrollTo(1000,1000);
            //$LASTPOS=41002894;//kernel.MapEditorOLD:2894
            _this.mode=_this.prevMode;
            
          }
          //$LASTPOS=41002929;//kernel.MapEditorOLD:2929
          _this.print(_this.mode+" mode");
          
        }
        //$LASTPOS=41002962;//kernel.MapEditorOLD:2962
        if (_this.getkey("p")==1) {
          //$LASTPOS=41003006;//kernel.MapEditorOLD:3006
          _this.saveFileName=prompt("input json file(*.json)","map.json");
          //$LASTPOS=41003495;//kernel.MapEditorOLD:3495
          _this.saveDataFile=_this.file("../maps/").rel(_this.saveFileName);
          //$LASTPOS=41003553;//kernel.MapEditorOLD:3553
          _this.data=[Tonyu.globals.$map.mapTable,Tonyu.globals.$map.mapOnTable];
          //$LASTPOS=41003668;//kernel.MapEditorOLD:3668
          _this.saveDataFile.obj(_this.data);
          //$LASTPOS=41003701;//kernel.MapEditorOLD:3701
          _this.print(_this.saveFileName+" Saved");
          
        }
        //$LASTPOS=41003793;//kernel.MapEditorOLD:3793
        if (_this.getkey("c")==1) {
          //$LASTPOS=41003822;//kernel.MapEditorOLD:3822
          Tonyu.globals.$mp.scrollTo(1000,1000);
          //$LASTPOS=41003856;//kernel.MapEditorOLD:3856
          _this.mode="spuit";
          //$LASTPOS=41003879;//kernel.MapEditorOLD:3879
          _this.print(_this.mode+" mode");
          
        }
        //$LASTPOS=41003912;//kernel.MapEditorOLD:3912
        if (_this.mode!="get") {
          //$LASTPOS=41003938;//kernel.MapEditorOLD:3938
          if (_this.getkey("left")>0) {
            //$LASTPOS=41003959;//kernel.MapEditorOLD:3959
            _this.mx=_this.mx+8;
          }
          //$LASTPOS=41003977;//kernel.MapEditorOLD:3977
          if (_this.getkey("right")>0) {
            //$LASTPOS=41003999;//kernel.MapEditorOLD:3999
            _this.mx=_this.mx-8;
          }
          //$LASTPOS=41004017;//kernel.MapEditorOLD:4017
          if (_this.getkey("up")>0) {
            //$LASTPOS=41004036;//kernel.MapEditorOLD:4036
            _this.my=_this.my+8;
          }
          //$LASTPOS=41004054;//kernel.MapEditorOLD:4054
          if (_this.getkey("down")>0) {
            //$LASTPOS=41004075;//kernel.MapEditorOLD:4075
            _this.my=_this.my-8;
          }
          //$LASTPOS=41004093;//kernel.MapEditorOLD:4093
          Tonyu.globals.$map.scrollTo(_this.mx,_this.my);
          
        } else {
          //$LASTPOS=41004136;//kernel.MapEditorOLD:4136
          if (_this.getkey("left")>0) {
            //$LASTPOS=41004157;//kernel.MapEditorOLD:4157
            _this.chipX=_this.chipX+8;
          }
          //$LASTPOS=41004181;//kernel.MapEditorOLD:4181
          if (_this.getkey("right")>0) {
            //$LASTPOS=41004203;//kernel.MapEditorOLD:4203
            _this.chipX=_this.chipX-8;
          }
          //$LASTPOS=41004227;//kernel.MapEditorOLD:4227
          if (_this.getkey("up")>0) {
            //$LASTPOS=41004246;//kernel.MapEditorOLD:4246
            _this.chipY=_this.chipY+8;
          }
          //$LASTPOS=41004270;//kernel.MapEditorOLD:4270
          if (_this.getkey("down")>0) {
            //$LASTPOS=41004291;//kernel.MapEditorOLD:4291
            _this.chipY=_this.chipY-8;
          }
          //$LASTPOS=41004315;//kernel.MapEditorOLD:4315
          Tonyu.globals.$mp.scrollTo(_this.chipX,_this.chipY);
          
        }
        //$LASTPOS=41004354;//kernel.MapEditorOLD:4354
        _this.panel.x=_this.panel.width/2-_this.mx;
        //$LASTPOS=41004385;//kernel.MapEditorOLD:4385
        _this.panel.y=_this.panel.height/2-_this.my;
        //$LASTPOS=41004417;//kernel.MapEditorOLD:4417
        if (_this.mode=="set"&&_this.getkey(1)>0) {
          //$LASTPOS=41004458;//kernel.MapEditorOLD:4458
          Tonyu.globals.$map.setAt(Tonyu.globals.$mouseX+_this.mx,Tonyu.globals.$mouseY+_this.my,_this.mapp);
          //$LASTPOS=41004507;//kernel.MapEditorOLD:4507
          Tonyu.globals.$map.setOnAt(Tonyu.globals.$mouseX+_this.mx,Tonyu.globals.$mouseY+_this.my,- 1);
          
        } else {
          //$LASTPOS=41004558;//kernel.MapEditorOLD:4558
          if (_this.mode=="erase"&&_this.getkey(1)>0) {
            //$LASTPOS=41004601;//kernel.MapEditorOLD:4601
            Tonyu.globals.$map.setAt(Tonyu.globals.$mouseX+_this.mx,Tonyu.globals.$mouseY+_this.my,- 1);
            
          } else {
            //$LASTPOS=41004650;//kernel.MapEditorOLD:4650
            if (_this.mode=="get"&&_this.getkey(1)>0) {
              //$LASTPOS=41004691;//kernel.MapEditorOLD:4691
              _this.mapp=Tonyu.globals.$mp.getAt(Tonyu.globals.$mouseX+_this.chipX,Tonyu.globals.$mouseY+_this.chipY);
              //$LASTPOS=41004745;//kernel.MapEditorOLD:4745
              _this.mode=_this.prevMode;
              //$LASTPOS=41004769;//kernel.MapEditorOLD:4769
              Tonyu.globals.$mp.scrollTo(1000,1000);
              //$LASTPOS=41004803;//kernel.MapEditorOLD:4803
              _this.print(_this.mode+" mode");
              //$LASTPOS=41004833;//kernel.MapEditorOLD:4833
              _this.updateEx(10);
              
            } else {
              //$LASTPOS=41004858;//kernel.MapEditorOLD:4858
              if (_this.mode=="setOn"&&_this.getkey(1)>0) {
                //$LASTPOS=41004901;//kernel.MapEditorOLD:4901
                Tonyu.globals.$map.setOnAt(Tonyu.globals.$mouseX+_this.mx,Tonyu.globals.$mouseY+_this.my,_this.mapp);
                
              } else {
                //$LASTPOS=41004954;//kernel.MapEditorOLD:4954
                if (_this.mode=="spuit"&&_this.getkey(1)>0) {
                  //$LASTPOS=41004997;//kernel.MapEditorOLD:4997
                  _this.mapp=Tonyu.globals.$map.getAt(Tonyu.globals.$mouseX+_this.mx,Tonyu.globals.$mouseY+_this.my);
                  //$LASTPOS=41005046;//kernel.MapEditorOLD:5046
                  _this.mode="set";
                  //$LASTPOS=41005067;//kernel.MapEditorOLD:5067
                  _this.print(_this.mode+" mode");
                  //$LASTPOS=41005097;//kernel.MapEditorOLD:5097
                  _this.updateEx(10);
                  
                }
              }
            }
          }
        }
        //$LASTPOS=41005123;//kernel.MapEditorOLD:5123
        _this.update();
        
      }
    },
    fiber$main :function _trc_MapEditorOLD_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var i;
      var j;
      
      //$LASTPOS=41000032;//kernel.MapEditorOLD:32
      _this.loadMode=false;
      //$LASTPOS=41000049;//kernel.MapEditorOLD:49
      _this.print("Load Data?: Y or N");
      
      _thread.enter(function _trc_MapEditorOLD_ent_main(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=41000079;//kernel.MapEditorOLD:79
          case 1:
            //$LASTPOS=41000097;//kernel.MapEditorOLD:97
            if (!(_this.getkey("y")>0)) { __pc=2; break; }
            //$LASTPOS=41000125;//kernel.MapEditorOLD:125
            _this.loadMode=true;
            __pc=5; break;
            
          case 2:
            
            //$LASTPOS=41000168;//kernel.MapEditorOLD:168
            if (!(_this.getkey("n")>0)) { __pc=3; break; }
            //$LASTPOS=41000196;//kernel.MapEditorOLD:196
            _this.loadMode=false;
            __pc=5; break;
            
          case 3:
            
            //$LASTPOS=41000240;//kernel.MapEditorOLD:240
            _this.fiber$update(_thread);
            __pc=4;return;
          case 4:
            
            __pc=1;break;
          case 5:
            
            //$LASTPOS=41000254;//kernel.MapEditorOLD:254
            if (!(_this.loadMode)) { __pc=9; break; }
            //$LASTPOS=41000273;//kernel.MapEditorOLD:273
            _this.fileName=prompt("Input json file (*.json)","map.json");
            //$LASTPOS=41000334;//kernel.MapEditorOLD:334
            if (_this.fileName) {
              //$LASTPOS=41000357;//kernel.MapEditorOLD:357
              _this.mapDataFile=_this.file("../maps/").rel(_this.fileName);
              
            }
            //$LASTPOS=41000413;//kernel.MapEditorOLD:413
            if (!(_this.mapDataFile.obj())) { __pc=6; break; }
            {
              //$LASTPOS=41000445;//kernel.MapEditorOLD:445
              _this.baseData=_this.mapDataFile.obj();
            }
            __pc=8;break;
          case 6:
            //$LASTPOS=41000494;//kernel.MapEditorOLD:494
            _this.fiber$file(_thread, _this.fileName);
            __pc=7;return;
          case 7:
            _this.mapDataFile=_thread.retVal;
            
            //$LASTPOS=41000531;//kernel.MapEditorOLD:531
            if (_this.mapDataFile.obj()) {
              //$LASTPOS=41000567;//kernel.MapEditorOLD:567
              _this.baseData=_this.mapDataFile.obj();
              
            }
          case 8:
            
            //$LASTPOS=41000618;//kernel.MapEditorOLD:618
            if (_this.baseData==undefined) {
              //$LASTPOS=41000652;//kernel.MapEditorOLD:652
              _this.print("Load failed");
              //$LASTPOS=41000683;//kernel.MapEditorOLD:683
              _this.loadMode=false;
              
            } else {
              //$LASTPOS=41000710;//kernel.MapEditorOLD:710
              if (_this.baseData[0]&&_this.baseData[1]) {
                //$LASTPOS=41000751;//kernel.MapEditorOLD:751
                _this.mapData=_this.baseData[0];
                //$LASTPOS=41000781;//kernel.MapEditorOLD:781
                _this.mapOnData=_this.baseData[1];
                
              }
            }
          case 9:
            
            //$LASTPOS=41000815;//kernel.MapEditorOLD:815
            _this.fiber$update(_thread);
            __pc=10;return;
          case 10:
            
            //$LASTPOS=41001093;//kernel.MapEditorOLD:1093
            if (!(! _this.loadMode)) { __pc=12; break; }
            //$LASTPOS=41001113;//kernel.MapEditorOLD:1113
            _this.row=prompt("input row");
            //$LASTPOS=41001143;//kernel.MapEditorOLD:1143
            _this.fiber$update(_thread);
            __pc=11;return;
          case 11:
            
            //$LASTPOS=41001158;//kernel.MapEditorOLD:1158
            _this.col=prompt("input col");
            //$LASTPOS=41001188;//kernel.MapEditorOLD:1188
            _this.panel=new Tonyu.classes.kernel.Panel({width: _this.col*32,height: _this.row*32});
            //$LASTPOS=41001238;//kernel.MapEditorOLD:1238
            _this.panel.x=_this.panel.width/2+10;
            //$LASTPOS=41001269;//kernel.MapEditorOLD:1269
            _this.panel.y=_this.panel.height/2;
            //$LASTPOS=41001298;//kernel.MapEditorOLD:1298
            _this.panel.setFillStyle("cyan");
            //$LASTPOS=41001331;//kernel.MapEditorOLD:1331
            _this.panel.fillRect(0,0,_this.panel.width,_this.panel.height);
            //$LASTPOS=41001382;//kernel.MapEditorOLD:1382
            Tonyu.globals.$map=new Tonyu.classes.kernel.Map({row: _this.row,col: _this.col,chipWidth: 32,chipHeight: 32});
            __pc=13;break;
          case 12:
            {
              //$LASTPOS=41001445;//kernel.MapEditorOLD:1445
              if (! _this.mapOnData) {
                //$LASTPOS=41001470;//kernel.MapEditorOLD:1470
                Tonyu.globals.$map=new Tonyu.classes.kernel.Map({row: _this.mapData.length,col: _this.mapData[0].length,chipWidth: 32,chipHeight: 32,mapData: _this.mapData});
                
              } else {
                //$LASTPOS=41001582;//kernel.MapEditorOLD:1582
                Tonyu.globals.$map=new Tonyu.classes.kernel.Map({row: _this.mapData.length,col: _this.mapData[0].length,chipWidth: 32,chipHeight: 32,mapData: _this.mapData,mapOnData: _this.mapOnData});
                
              }
              //$LASTPOS=41001695;//kernel.MapEditorOLD:1695
              _this.panel=new Tonyu.classes.kernel.Panel({width: Tonyu.globals.$map.col*32,height: Tonyu.globals.$map.row*32,zOrder: 100});
              //$LASTPOS=41001766;//kernel.MapEditorOLD:1766
              _this.panel.x=_this.panel.width/2;
              //$LASTPOS=41001794;//kernel.MapEditorOLD:1794
              _this.panel.y=_this.panel.height/2;
              //$LASTPOS=41001823;//kernel.MapEditorOLD:1823
              _this.panel.setFillStyle("cyan");
              //$LASTPOS=41001856;//kernel.MapEditorOLD:1856
              _this.panel.fillRect(0,0,_this.panel.width,_this.panel.height);
            }
          case 13:
            
            //$LASTPOS=41001906;//kernel.MapEditorOLD:1906
            Tonyu.globals.$mp=new Tonyu.classes.kernel.Map({row: 16,col: 8,chipWidth: 32,chipHeight: 32});
            //$LASTPOS=41001961;//kernel.MapEditorOLD:1961
            _this.counter=0;
            //$LASTPOS=41001973;//kernel.MapEditorOLD:1973
            //$LASTPOS=41001977;//kernel.MapEditorOLD:1977
            i = 0;
            while(i<16) {
              {
                //$LASTPOS=41002001;//kernel.MapEditorOLD:2001
                //$LASTPOS=41002005;//kernel.MapEditorOLD:2005
                j = 0;
                while(j<8) {
                  {
                    //$LASTPOS=41002032;//kernel.MapEditorOLD:2032
                    Tonyu.globals.$mp.set(j,i,Tonyu.globals.$pat_mapchip+_this.counter);
                    //$LASTPOS=41002076;//kernel.MapEditorOLD:2076
                    _this.counter++;
                  }
                  j++;
                }
              }
              i++;
            }
            //$LASTPOS=41002098;//kernel.MapEditorOLD:2098
            _this.mode="get";
            //$LASTPOS=41002111;//kernel.MapEditorOLD:2111
            _this.prevMode="set";
            //$LASTPOS=41002128;//kernel.MapEditorOLD:2128
            _this.mapp=0;
            //$LASTPOS=41002137;//kernel.MapEditorOLD:2137
            _this.mx=0;
            //$LASTPOS=41002144;//kernel.MapEditorOLD:2144
            _this.my=0;
            //$LASTPOS=41002151;//kernel.MapEditorOLD:2151
            _this.chipX=0;
            //$LASTPOS=41002161;//kernel.MapEditorOLD:2161
            _this.chipY=0;
            //$LASTPOS=41002171;//kernel.MapEditorOLD:2171
            _this.x=Tonyu.globals.$screenWidth-16;
            //$LASTPOS=41002191;//kernel.MapEditorOLD:2191
            _this.y=Tonyu.globals.$screenHeight-16;
            //$LASTPOS=41002212;//kernel.MapEditorOLD:2212
          case 14:
            //$LASTPOS=41002230;//kernel.MapEditorOLD:2230
            _this.p=_this.mapp;
            //$LASTPOS=41002243;//kernel.MapEditorOLD:2243
            if (_this.getkey("e")==1) {
              //$LASTPOS=41002272;//kernel.MapEditorOLD:2272
              Tonyu.globals.$mp.scrollTo(1000,1000);
              //$LASTPOS=41002306;//kernel.MapEditorOLD:2306
              _this.mode="erase";
              //$LASTPOS=41002329;//kernel.MapEditorOLD:2329
              _this.print(_this.mode+" mode");
              
            }
            //$LASTPOS=41002362;//kernel.MapEditorOLD:2362
            if (_this.getkey("s")==1) {
              //$LASTPOS=41002391;//kernel.MapEditorOLD:2391
              Tonyu.globals.$mp.scrollTo(1000,1000);
              //$LASTPOS=41002425;//kernel.MapEditorOLD:2425
              if (_this.mode=="set") {
                //$LASTPOS=41002455;//kernel.MapEditorOLD:2455
                _this.mode="setOn";
                
              } else {
                //$LASTPOS=41002498;//kernel.MapEditorOLD:2498
                _this.mode="set";
                
              }
              //$LASTPOS=41002530;//kernel.MapEditorOLD:2530
              _this.print(_this.mode+" mode");
              
            }
            //$LASTPOS=41002563;//kernel.MapEditorOLD:2563
            if (_this.getkey("o")==1) {
              //$LASTPOS=41002592;//kernel.MapEditorOLD:2592
              Tonyu.globals.$mp.scrollTo(1000,1000);
              //$LASTPOS=41002626;//kernel.MapEditorOLD:2626
              _this.mode="setOn";
              
            }
            //$LASTPOS=41002652;//kernel.MapEditorOLD:2652
            if (_this.getkey("g")==1) {
              //$LASTPOS=41002681;//kernel.MapEditorOLD:2681
              if (_this.mode!="get") {
                //$LASTPOS=41002711;//kernel.MapEditorOLD:2711
                _this.prevMode=_this.mode;
                //$LASTPOS=41002739;//kernel.MapEditorOLD:2739
                Tonyu.globals.$mp.scrollTo(0,0);
                //$LASTPOS=41002771;//kernel.MapEditorOLD:2771
                _this.mode="get";
                //$LASTPOS=41002796;//kernel.MapEditorOLD:2796
                _this.chipX=0;
                //$LASTPOS=41002818;//kernel.MapEditorOLD:2818
                _this.chipY=0;
                
              } else {
                //$LASTPOS=41002856;//kernel.MapEditorOLD:2856
                Tonyu.globals.$mp.scrollTo(1000,1000);
                //$LASTPOS=41002894;//kernel.MapEditorOLD:2894
                _this.mode=_this.prevMode;
                
              }
              //$LASTPOS=41002929;//kernel.MapEditorOLD:2929
              _this.print(_this.mode+" mode");
              
            }
            //$LASTPOS=41002962;//kernel.MapEditorOLD:2962
            if (_this.getkey("p")==1) {
              //$LASTPOS=41003006;//kernel.MapEditorOLD:3006
              _this.saveFileName=prompt("input json file(*.json)","map.json");
              //$LASTPOS=41003495;//kernel.MapEditorOLD:3495
              _this.saveDataFile=_this.file("../maps/").rel(_this.saveFileName);
              //$LASTPOS=41003553;//kernel.MapEditorOLD:3553
              _this.data=[Tonyu.globals.$map.mapTable,Tonyu.globals.$map.mapOnTable];
              //$LASTPOS=41003668;//kernel.MapEditorOLD:3668
              _this.saveDataFile.obj(_this.data);
              //$LASTPOS=41003701;//kernel.MapEditorOLD:3701
              _this.print(_this.saveFileName+" Saved");
              
            }
            //$LASTPOS=41003793;//kernel.MapEditorOLD:3793
            if (_this.getkey("c")==1) {
              //$LASTPOS=41003822;//kernel.MapEditorOLD:3822
              Tonyu.globals.$mp.scrollTo(1000,1000);
              //$LASTPOS=41003856;//kernel.MapEditorOLD:3856
              _this.mode="spuit";
              //$LASTPOS=41003879;//kernel.MapEditorOLD:3879
              _this.print(_this.mode+" mode");
              
            }
            //$LASTPOS=41003912;//kernel.MapEditorOLD:3912
            if (_this.mode!="get") {
              //$LASTPOS=41003938;//kernel.MapEditorOLD:3938
              if (_this.getkey("left")>0) {
                //$LASTPOS=41003959;//kernel.MapEditorOLD:3959
                _this.mx=_this.mx+8;
              }
              //$LASTPOS=41003977;//kernel.MapEditorOLD:3977
              if (_this.getkey("right")>0) {
                //$LASTPOS=41003999;//kernel.MapEditorOLD:3999
                _this.mx=_this.mx-8;
              }
              //$LASTPOS=41004017;//kernel.MapEditorOLD:4017
              if (_this.getkey("up")>0) {
                //$LASTPOS=41004036;//kernel.MapEditorOLD:4036
                _this.my=_this.my+8;
              }
              //$LASTPOS=41004054;//kernel.MapEditorOLD:4054
              if (_this.getkey("down")>0) {
                //$LASTPOS=41004075;//kernel.MapEditorOLD:4075
                _this.my=_this.my-8;
              }
              //$LASTPOS=41004093;//kernel.MapEditorOLD:4093
              Tonyu.globals.$map.scrollTo(_this.mx,_this.my);
              
            } else {
              //$LASTPOS=41004136;//kernel.MapEditorOLD:4136
              if (_this.getkey("left")>0) {
                //$LASTPOS=41004157;//kernel.MapEditorOLD:4157
                _this.chipX=_this.chipX+8;
              }
              //$LASTPOS=41004181;//kernel.MapEditorOLD:4181
              if (_this.getkey("right")>0) {
                //$LASTPOS=41004203;//kernel.MapEditorOLD:4203
                _this.chipX=_this.chipX-8;
              }
              //$LASTPOS=41004227;//kernel.MapEditorOLD:4227
              if (_this.getkey("up")>0) {
                //$LASTPOS=41004246;//kernel.MapEditorOLD:4246
                _this.chipY=_this.chipY+8;
              }
              //$LASTPOS=41004270;//kernel.MapEditorOLD:4270
              if (_this.getkey("down")>0) {
                //$LASTPOS=41004291;//kernel.MapEditorOLD:4291
                _this.chipY=_this.chipY-8;
              }
              //$LASTPOS=41004315;//kernel.MapEditorOLD:4315
              Tonyu.globals.$mp.scrollTo(_this.chipX,_this.chipY);
              
            }
            //$LASTPOS=41004354;//kernel.MapEditorOLD:4354
            _this.panel.x=_this.panel.width/2-_this.mx;
            //$LASTPOS=41004385;//kernel.MapEditorOLD:4385
            _this.panel.y=_this.panel.height/2-_this.my;
            //$LASTPOS=41004417;//kernel.MapEditorOLD:4417
            if (!(_this.mode=="set"&&_this.getkey(1)>0)) { __pc=15; break; }
            {
              //$LASTPOS=41004458;//kernel.MapEditorOLD:4458
              Tonyu.globals.$map.setAt(Tonyu.globals.$mouseX+_this.mx,Tonyu.globals.$mouseY+_this.my,_this.mapp);
              //$LASTPOS=41004507;//kernel.MapEditorOLD:4507
              Tonyu.globals.$map.setOnAt(Tonyu.globals.$mouseX+_this.mx,Tonyu.globals.$mouseY+_this.my,- 1);
            }
            __pc=25;break;
          case 15:
            //$LASTPOS=41004558;//kernel.MapEditorOLD:4558
            if (!(_this.mode=="erase"&&_this.getkey(1)>0)) { __pc=16; break; }
            {
              //$LASTPOS=41004601;//kernel.MapEditorOLD:4601
              Tonyu.globals.$map.setAt(Tonyu.globals.$mouseX+_this.mx,Tonyu.globals.$mouseY+_this.my,- 1);
            }
            __pc=24;break;
          case 16:
            //$LASTPOS=41004650;//kernel.MapEditorOLD:4650
            if (!(_this.mode=="get"&&_this.getkey(1)>0)) { __pc=18; break; }
            //$LASTPOS=41004691;//kernel.MapEditorOLD:4691
            _this.mapp=Tonyu.globals.$mp.getAt(Tonyu.globals.$mouseX+_this.chipX,Tonyu.globals.$mouseY+_this.chipY);
            //$LASTPOS=41004745;//kernel.MapEditorOLD:4745
            _this.mode=_this.prevMode;
            //$LASTPOS=41004769;//kernel.MapEditorOLD:4769
            Tonyu.globals.$mp.scrollTo(1000,1000);
            //$LASTPOS=41004803;//kernel.MapEditorOLD:4803
            _this.print(_this.mode+" mode");
            //$LASTPOS=41004833;//kernel.MapEditorOLD:4833
            _this.fiber$updateEx(_thread, 10);
            __pc=17;return;
          case 17:
            
            __pc=23;break;
          case 18:
            //$LASTPOS=41004858;//kernel.MapEditorOLD:4858
            if (!(_this.mode=="setOn"&&_this.getkey(1)>0)) { __pc=19; break; }
            {
              //$LASTPOS=41004901;//kernel.MapEditorOLD:4901
              Tonyu.globals.$map.setOnAt(Tonyu.globals.$mouseX+_this.mx,Tonyu.globals.$mouseY+_this.my,_this.mapp);
            }
            __pc=22;break;
          case 19:
            //$LASTPOS=41004954;//kernel.MapEditorOLD:4954
            if (!(_this.mode=="spuit"&&_this.getkey(1)>0)) { __pc=21; break; }
            //$LASTPOS=41004997;//kernel.MapEditorOLD:4997
            _this.mapp=Tonyu.globals.$map.getAt(Tonyu.globals.$mouseX+_this.mx,Tonyu.globals.$mouseY+_this.my);
            //$LASTPOS=41005046;//kernel.MapEditorOLD:5046
            _this.mode="set";
            //$LASTPOS=41005067;//kernel.MapEditorOLD:5067
            _this.print(_this.mode+" mode");
            //$LASTPOS=41005097;//kernel.MapEditorOLD:5097
            _this.fiber$updateEx(_thread, 10);
            __pc=20;return;
          case 20:
            
          case 21:
            
          case 22:
            
          case 23:
            
          case 24:
            
          case 25:
            
            //$LASTPOS=41005123;//kernel.MapEditorOLD:5123
            _this.fiber$update(_thread);
            __pc=26;return;
          case 26:
            
            __pc=14;break;
          case 27:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false}}}
});
Tonyu.klass.define({
  fullName: 'kernel.Pad',
  shortName: 'Pad',
  namespace: 'kernel',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: {
    main :function _trc_Pad_main() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=42001202;//kernel.Pad:1202
      _this.APAD_DIAG_SIZE=96;
      //$LASTPOS=42003465;//kernel.Pad:3465
      while (true) {
        //$LASTPOS=42003484;//kernel.Pad:3484
        _this.padUpdate();
        //$LASTPOS=42003502;//kernel.Pad:3502
        _this.update();
        
      }
    },
    fiber$main :function _trc_Pad_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=42001202;//kernel.Pad:1202
      _this.APAD_DIAG_SIZE=96;
      
      _thread.enter(function _trc_Pad_ent_main(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=42003465;//kernel.Pad:3465
          case 1:
            //$LASTPOS=42003484;//kernel.Pad:3484
            _this.fiber$padUpdate(_thread);
            __pc=2;return;
          case 2:
            
            //$LASTPOS=42003502;//kernel.Pad:3502
            _this.fiber$update(_thread);
            __pc=3;return;
          case 3:
            
            __pc=1;break;
          case 4:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    initialize :function _trc_Pad_initialize(opt) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=42000033;//kernel.Pad:33
      Tonyu.classes.kernel.Actor.apply( _this, [opt]);
      //$LASTPOS=42000050;//kernel.Pad:50
      _this.padImageP=Tonyu.globals.$pat_inputPad;
      //$LASTPOS=42000082;//kernel.Pad:82
      _this.jujiKey=new Tonyu.classes.kernel.Actor({x: 96+1,y: Tonyu.globals.$screenHeight-96-1,p: _this.padImageP+0,zOrder: - 9,layer: Tonyu.globals.$FrontSprites});
      //$LASTPOS=42000183;//kernel.Pad:183
      _this.no1Key=new Tonyu.classes.kernel.Actor({x: Tonyu.globals.$screenWidth-96,y: Tonyu.globals.$screenHeight-96,p: _this.padImageP+1,zOrder: - 9,layer: Tonyu.globals.$FrontSprites});
      //$LASTPOS=42000292;//kernel.Pad:292
      _this.jujiKey.show();
      //$LASTPOS=42000313;//kernel.Pad:313
      _this.no1Key.show();
      //$LASTPOS=42000339;//kernel.Pad:339
      _this.jujiKeyPushU=new Tonyu.classes.kernel.Actor({x: _this.jujiKey.x,y: _this.jujiKey.y-60,p: _this.padImageP+2,zOrder: - 10,layer: Tonyu.globals.$FrontSprites});
      //$LASTPOS=42000446;//kernel.Pad:446
      _this.jujiKeyPushL=new Tonyu.classes.kernel.Actor({x: _this.jujiKey.x-60,y: _this.jujiKey.y,p: _this.padImageP+2,zOrder: - 10,layer: Tonyu.globals.$FrontSprites});
      //$LASTPOS=42000553;//kernel.Pad:553
      _this.jujiKeyPushR=new Tonyu.classes.kernel.Actor({x: _this.jujiKey.x+60,y: _this.jujiKey.y,p: _this.padImageP+2,zOrder: - 10,layer: Tonyu.globals.$FrontSprites});
      //$LASTPOS=42000660;//kernel.Pad:660
      _this.jujiKeyPushD=new Tonyu.classes.kernel.Actor({x: _this.jujiKey.x,y: _this.jujiKey.y+60,p: _this.padImageP+2,zOrder: - 10,layer: Tonyu.globals.$FrontSprites});
      //$LASTPOS=42000767;//kernel.Pad:767
      _this.jujiKeyPush1=new Tonyu.classes.kernel.Actor({x: _this.no1Key.x,y: _this.no1Key.y,p: _this.padImageP+2,scaleX: 2,zOrder: - 10,layer: Tonyu.globals.$FrontSprites});
      //$LASTPOS=42000879;//kernel.Pad:879
      _this.jujiKeyPushU.hide();
      //$LASTPOS=42000905;//kernel.Pad:905
      _this.jujiKeyPushL.hide();
      //$LASTPOS=42000931;//kernel.Pad:931
      _this.jujiKeyPushR.hide();
      //$LASTPOS=42000957;//kernel.Pad:957
      _this.jujiKeyPushD.hide();
      //$LASTPOS=42000983;//kernel.Pad:983
      _this.jujiKeyPush1.hide();
    },
    die :function _trc_Pad_die() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=42001021;//kernel.Pad:1021
      _this.jujiKey.die();
      //$LASTPOS=42001041;//kernel.Pad:1041
      _this.no1Key.die();
      //$LASTPOS=42001060;//kernel.Pad:1060
      _this.jujiKeyPushU.die();
      //$LASTPOS=42001085;//kernel.Pad:1085
      _this.jujiKeyPushL.die();
      //$LASTPOS=42001110;//kernel.Pad:1110
      _this.jujiKeyPushR.die();
      //$LASTPOS=42001135;//kernel.Pad:1135
      _this.jujiKeyPushD.die();
      //$LASTPOS=42001160;//kernel.Pad:1160
      _this.jujiKeyPush1.die();
      //$LASTPOS=42001185;//kernel.Pad:1185
      Tonyu.classes.kernel.Actor.prototype.die.apply( _this, []);
    },
    padUpdate :function _trc_Pad_padUpdate() {
      "use strict";
      var _this=this;
      var i;
      var t;
      
      //$LASTPOS=42001258;//kernel.Pad:1258
      _this.keyPushL=0;
      //$LASTPOS=42001277;//kernel.Pad:1277
      _this.keyPushR=0;
      //$LASTPOS=42001296;//kernel.Pad:1296
      _this.keyPushU=0;
      //$LASTPOS=42001315;//kernel.Pad:1315
      _this.keyPushD=0;
      //$LASTPOS=42001334;//kernel.Pad:1334
      _this.keyPush1=0;
      //$LASTPOS=42001359;//kernel.Pad:1359
      _this.padKeyNotapCnt++;
      //$LASTPOS=42001383;//kernel.Pad:1383
      //$LASTPOS=42001388;//kernel.Pad:1388
      i = 0;
      while(i<5) {
        {
          //$LASTPOS=42001436;//kernel.Pad:1436
          t = Tonyu.globals.$touches[i];
          //$LASTPOS=42001466;//kernel.Pad:1466
          if (t.touched) {
            //$LASTPOS=42001496;//kernel.Pad:1496
            if (_this.isOnRectWH(t.x,t.y,_this.jujiKey.x-32-_this.APAD_DIAG_SIZE/2,_this.jujiKey.y-32-64,64+_this.APAD_DIAG_SIZE,64)) {
              //$LASTPOS=42001593;//kernel.Pad:1593
              _this.keyPushU=1;
            }
            //$LASTPOS=42001620;//kernel.Pad:1620
            if (_this.isOnRectWH(t.x,t.y,_this.jujiKey.x-32-_this.APAD_DIAG_SIZE/2,_this.jujiKey.y-32+64,64+_this.APAD_DIAG_SIZE,64)) {
              //$LASTPOS=42001717;//kernel.Pad:1717
              _this.keyPushD=1;
            }
            //$LASTPOS=42001744;//kernel.Pad:1744
            if (_this.isOnRectWH(t.x,t.y,_this.jujiKey.x-32-64,_this.jujiKey.y-32-_this.APAD_DIAG_SIZE/2,64,64+_this.APAD_DIAG_SIZE)) {
              //$LASTPOS=42001841;//kernel.Pad:1841
              _this.keyPushL=1;
            }
            //$LASTPOS=42001868;//kernel.Pad:1868
            if (_this.isOnRectWH(t.x,t.y,_this.jujiKey.x-32+64,_this.jujiKey.y-32-_this.APAD_DIAG_SIZE/2,64,64+_this.APAD_DIAG_SIZE)) {
              //$LASTPOS=42001965;//kernel.Pad:1965
              _this.keyPushR=1;
            }
            //$LASTPOS=42001992;//kernel.Pad:1992
            if (_this.isOnRectWH(t.x,t.y,_this.no1Key.x-64,_this.no1Key.y-64,128,128)) {
              //$LASTPOS=42002054;//kernel.Pad:2054
              _this.keyPush1=1;
            }
            //$LASTPOS=42002081;//kernel.Pad:2081
            _this.padKeySW=1;
            //$LASTPOS=42002108;//kernel.Pad:2108
            _this.padKeyNotapCnt=0;
            
          }
        }
        i++;
      }
      //$LASTPOS=42002173;//kernel.Pad:2173
      if (_this.keyPushL) {
        //$LASTPOS=42002187;//kernel.Pad:2187
        _this.keyCntL++;
      } else {
        //$LASTPOS=42002204;//kernel.Pad:2204
        _this.keyCntL=0;
      }
      //$LASTPOS=42002222;//kernel.Pad:2222
      if (_this.keyPushR) {
        //$LASTPOS=42002236;//kernel.Pad:2236
        _this.keyCntR++;
      } else {
        //$LASTPOS=42002253;//kernel.Pad:2253
        _this.keyCntR=0;
      }
      //$LASTPOS=42002271;//kernel.Pad:2271
      if (_this.keyPushU) {
        //$LASTPOS=42002285;//kernel.Pad:2285
        _this.keyCntU++;
      } else {
        //$LASTPOS=42002302;//kernel.Pad:2302
        _this.keyCntU=0;
      }
      //$LASTPOS=42002320;//kernel.Pad:2320
      if (_this.keyPushD) {
        //$LASTPOS=42002334;//kernel.Pad:2334
        _this.keyCntD++;
      } else {
        //$LASTPOS=42002351;//kernel.Pad:2351
        _this.keyCntD=0;
      }
      //$LASTPOS=42002369;//kernel.Pad:2369
      if (_this.keyPush1) {
        //$LASTPOS=42002383;//kernel.Pad:2383
        _this.keyCnt1++;
      } else {
        //$LASTPOS=42002400;//kernel.Pad:2400
        _this.keyCnt1=0;
      }
      //$LASTPOS=42002435;//kernel.Pad:2435
      if (_this.keyPushL) {
        //$LASTPOS=42002449;//kernel.Pad:2449
        _this.jujiKeyPushL.show();
      } else {
        //$LASTPOS=42002475;//kernel.Pad:2475
        _this.jujiKeyPushL.hide();
      }
      //$LASTPOS=42002501;//kernel.Pad:2501
      if (_this.keyPushR) {
        //$LASTPOS=42002515;//kernel.Pad:2515
        _this.jujiKeyPushR.show();
      } else {
        //$LASTPOS=42002541;//kernel.Pad:2541
        _this.jujiKeyPushR.hide();
      }
      //$LASTPOS=42002567;//kernel.Pad:2567
      if (_this.keyPushU) {
        //$LASTPOS=42002581;//kernel.Pad:2581
        _this.jujiKeyPushU.show();
      } else {
        //$LASTPOS=42002607;//kernel.Pad:2607
        _this.jujiKeyPushU.hide();
      }
      //$LASTPOS=42002633;//kernel.Pad:2633
      if (_this.keyPushD) {
        //$LASTPOS=42002647;//kernel.Pad:2647
        _this.jujiKeyPushD.show();
      } else {
        //$LASTPOS=42002673;//kernel.Pad:2673
        _this.jujiKeyPushD.hide();
      }
      //$LASTPOS=42002699;//kernel.Pad:2699
      if (_this.keyPush1) {
        //$LASTPOS=42002713;//kernel.Pad:2713
        _this.jujiKeyPush1.show();
      } else {
        //$LASTPOS=42002739;//kernel.Pad:2739
        _this.jujiKeyPush1.hide();
      }
    },
    fiber$padUpdate :function _trc_Pad_f_padUpdate(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var i;
      var t;
      
      //$LASTPOS=42001258;//kernel.Pad:1258
      _this.keyPushL=0;
      //$LASTPOS=42001277;//kernel.Pad:1277
      _this.keyPushR=0;
      //$LASTPOS=42001296;//kernel.Pad:1296
      _this.keyPushU=0;
      //$LASTPOS=42001315;//kernel.Pad:1315
      _this.keyPushD=0;
      //$LASTPOS=42001334;//kernel.Pad:1334
      _this.keyPush1=0;
      //$LASTPOS=42001359;//kernel.Pad:1359
      _this.padKeyNotapCnt++;
      //$LASTPOS=42001383;//kernel.Pad:1383
      //$LASTPOS=42001388;//kernel.Pad:1388
      i = 0;
      while(i<5) {
        {
          //$LASTPOS=42001436;//kernel.Pad:1436
          t = Tonyu.globals.$touches[i];
          //$LASTPOS=42001466;//kernel.Pad:1466
          if (t.touched) {
            //$LASTPOS=42001496;//kernel.Pad:1496
            if (_this.isOnRectWH(t.x,t.y,_this.jujiKey.x-32-_this.APAD_DIAG_SIZE/2,_this.jujiKey.y-32-64,64+_this.APAD_DIAG_SIZE,64)) {
              //$LASTPOS=42001593;//kernel.Pad:1593
              _this.keyPushU=1;
            }
            //$LASTPOS=42001620;//kernel.Pad:1620
            if (_this.isOnRectWH(t.x,t.y,_this.jujiKey.x-32-_this.APAD_DIAG_SIZE/2,_this.jujiKey.y-32+64,64+_this.APAD_DIAG_SIZE,64)) {
              //$LASTPOS=42001717;//kernel.Pad:1717
              _this.keyPushD=1;
            }
            //$LASTPOS=42001744;//kernel.Pad:1744
            if (_this.isOnRectWH(t.x,t.y,_this.jujiKey.x-32-64,_this.jujiKey.y-32-_this.APAD_DIAG_SIZE/2,64,64+_this.APAD_DIAG_SIZE)) {
              //$LASTPOS=42001841;//kernel.Pad:1841
              _this.keyPushL=1;
            }
            //$LASTPOS=42001868;//kernel.Pad:1868
            if (_this.isOnRectWH(t.x,t.y,_this.jujiKey.x-32+64,_this.jujiKey.y-32-_this.APAD_DIAG_SIZE/2,64,64+_this.APAD_DIAG_SIZE)) {
              //$LASTPOS=42001965;//kernel.Pad:1965
              _this.keyPushR=1;
            }
            //$LASTPOS=42001992;//kernel.Pad:1992
            if (_this.isOnRectWH(t.x,t.y,_this.no1Key.x-64,_this.no1Key.y-64,128,128)) {
              //$LASTPOS=42002054;//kernel.Pad:2054
              _this.keyPush1=1;
            }
            //$LASTPOS=42002081;//kernel.Pad:2081
            _this.padKeySW=1;
            //$LASTPOS=42002108;//kernel.Pad:2108
            _this.padKeyNotapCnt=0;
            
          }
        }
        i++;
      }
      //$LASTPOS=42002173;//kernel.Pad:2173
      if (_this.keyPushL) {
        //$LASTPOS=42002187;//kernel.Pad:2187
        _this.keyCntL++;
      } else {
        //$LASTPOS=42002204;//kernel.Pad:2204
        _this.keyCntL=0;
      }
      //$LASTPOS=42002222;//kernel.Pad:2222
      if (_this.keyPushR) {
        //$LASTPOS=42002236;//kernel.Pad:2236
        _this.keyCntR++;
      } else {
        //$LASTPOS=42002253;//kernel.Pad:2253
        _this.keyCntR=0;
      }
      //$LASTPOS=42002271;//kernel.Pad:2271
      if (_this.keyPushU) {
        //$LASTPOS=42002285;//kernel.Pad:2285
        _this.keyCntU++;
      } else {
        //$LASTPOS=42002302;//kernel.Pad:2302
        _this.keyCntU=0;
      }
      //$LASTPOS=42002320;//kernel.Pad:2320
      if (_this.keyPushD) {
        //$LASTPOS=42002334;//kernel.Pad:2334
        _this.keyCntD++;
      } else {
        //$LASTPOS=42002351;//kernel.Pad:2351
        _this.keyCntD=0;
      }
      //$LASTPOS=42002369;//kernel.Pad:2369
      if (_this.keyPush1) {
        //$LASTPOS=42002383;//kernel.Pad:2383
        _this.keyCnt1++;
      } else {
        //$LASTPOS=42002400;//kernel.Pad:2400
        _this.keyCnt1=0;
      }
      //$LASTPOS=42002435;//kernel.Pad:2435
      if (_this.keyPushL) {
        //$LASTPOS=42002449;//kernel.Pad:2449
        _this.jujiKeyPushL.show();
      } else {
        //$LASTPOS=42002475;//kernel.Pad:2475
        _this.jujiKeyPushL.hide();
      }
      //$LASTPOS=42002501;//kernel.Pad:2501
      if (_this.keyPushR) {
        //$LASTPOS=42002515;//kernel.Pad:2515
        _this.jujiKeyPushR.show();
      } else {
        //$LASTPOS=42002541;//kernel.Pad:2541
        _this.jujiKeyPushR.hide();
      }
      //$LASTPOS=42002567;//kernel.Pad:2567
      if (_this.keyPushU) {
        //$LASTPOS=42002581;//kernel.Pad:2581
        _this.jujiKeyPushU.show();
      } else {
        //$LASTPOS=42002607;//kernel.Pad:2607
        _this.jujiKeyPushU.hide();
      }
      //$LASTPOS=42002633;//kernel.Pad:2633
      if (_this.keyPushD) {
        //$LASTPOS=42002647;//kernel.Pad:2647
        _this.jujiKeyPushD.show();
      } else {
        //$LASTPOS=42002673;//kernel.Pad:2673
        _this.jujiKeyPushD.hide();
      }
      //$LASTPOS=42002699;//kernel.Pad:2699
      if (_this.keyPush1) {
        //$LASTPOS=42002713;//kernel.Pad:2713
        _this.jujiKeyPush1.show();
      } else {
        //$LASTPOS=42002739;//kernel.Pad:2739
        _this.jujiKeyPush1.hide();
      }
      
      _thread.retVal=_this;return;
    },
    getPadUp :function _trc_Pad_getPadUp() {
      "use strict";
      var _this=this;
      
      return _this.keyCntU;
    },
    fiber$getPadUp :function _trc_Pad_f_getPadUp(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=_this.keyCntU;return;
      
      
      _thread.retVal=_this;return;
    },
    getPadDown :function _trc_Pad_getPadDown() {
      "use strict";
      var _this=this;
      
      return _this.keyCntD;
    },
    fiber$getPadDown :function _trc_Pad_f_getPadDown(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=_this.keyCntD;return;
      
      
      _thread.retVal=_this;return;
    },
    getPadLeft :function _trc_Pad_getPadLeft() {
      "use strict";
      var _this=this;
      
      return _this.keyCntL;
    },
    fiber$getPadLeft :function _trc_Pad_f_getPadLeft(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=_this.keyCntL;return;
      
      
      _thread.retVal=_this;return;
    },
    getPadRight :function _trc_Pad_getPadRight() {
      "use strict";
      var _this=this;
      
      return _this.keyCntR;
    },
    fiber$getPadRight :function _trc_Pad_f_getPadRight(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=_this.keyCntR;return;
      
      
      _thread.retVal=_this;return;
    },
    getPadButton :function _trc_Pad_getPadButton(i) {
      "use strict";
      var _this=this;
      var value;
      
      //$LASTPOS=42002940;//kernel.Pad:2940
      value;
      //$LASTPOS=42002956;//kernel.Pad:2956
      if (i==0) {
        //$LASTPOS=42002968;//kernel.Pad:2968
        value=_this.keyCnt1;
      }
      return value;
    },
    fiber$getPadButton :function _trc_Pad_f_getPadButton(_thread,i) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var value;
      
      //$LASTPOS=42002940;//kernel.Pad:2940
      value;
      //$LASTPOS=42002956;//kernel.Pad:2956
      if (i==0) {
        //$LASTPOS=42002968;//kernel.Pad:2968
        value=_this.keyCnt1;
      }
      _thread.retVal=value;return;
      
      
      _thread.retVal=_this;return;
    },
    getUp :function _trc_Pad_getUp() {
      "use strict";
      var _this=this;
      
      return _this.keyCntU;
    },
    fiber$getUp :function _trc_Pad_f_getUp(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=_this.keyCntU;return;
      
      
      _thread.retVal=_this;return;
    },
    getDown :function _trc_Pad_getDown() {
      "use strict";
      var _this=this;
      
      return _this.keyCntD;
    },
    fiber$getDown :function _trc_Pad_f_getDown(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=_this.keyCntD;return;
      
      
      _thread.retVal=_this;return;
    },
    getLeft :function _trc_Pad_getLeft() {
      "use strict";
      var _this=this;
      
      return _this.keyCntL;
    },
    fiber$getLeft :function _trc_Pad_f_getLeft(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=_this.keyCntL;return;
      
      
      _thread.retVal=_this;return;
    },
    getRight :function _trc_Pad_getRight() {
      "use strict";
      var _this=this;
      
      return _this.keyCntR;
    },
    fiber$getRight :function _trc_Pad_f_getRight(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=_this.keyCntR;return;
      
      
      _thread.retVal=_this;return;
    },
    getButton :function _trc_Pad_getButton(i) {
      "use strict";
      var _this=this;
      var value;
      
      //$LASTPOS=42003163;//kernel.Pad:3163
      value;
      //$LASTPOS=42003179;//kernel.Pad:3179
      if (i==0) {
        //$LASTPOS=42003191;//kernel.Pad:3191
        value=_this.keyCnt1;
      }
      return value;
    },
    fiber$getButton :function _trc_Pad_f_getButton(_thread,i) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var value;
      
      //$LASTPOS=42003163;//kernel.Pad:3163
      value;
      //$LASTPOS=42003179;//kernel.Pad:3179
      if (i==0) {
        //$LASTPOS=42003191;//kernel.Pad:3191
        value=_this.keyCnt1;
      }
      _thread.retVal=value;return;
      
      
      _thread.retVal=_this;return;
    },
    isOnRect :function _trc_Pad_isOnRect(mx,my,rx,ry,rx2,ry2) {
      "use strict";
      var _this=this;
      
      return (rx<=mx&&mx<rx2&&ry<=my&&my<ry2);
    },
    fiber$isOnRect :function _trc_Pad_f_isOnRect(_thread,mx,my,rx,ry,rx2,ry2) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=(rx<=mx&&mx<rx2&&ry<=my&&my<ry2);return;
      
      
      _thread.retVal=_this;return;
    },
    isOnRectWH :function _trc_Pad_isOnRectWH(mx,my,rx,ry,rw,rh) {
      "use strict";
      var _this=this;
      
      return (rx<=mx&&mx<rx+rw&&ry<=my&&my<ry+rh);
    },
    fiber$isOnRectWH :function _trc_Pad_f_isOnRectWH(_thread,mx,my,rx,ry,rw,rh) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=(rx<=mx&&mx<rx+rw&&ry<=my&&my<ry+rh);return;
      
      
      _thread.retVal=_this;return;
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"die":{"nowait":true},"padUpdate":{"nowait":false},"getPadUp":{"nowait":false},"getPadDown":{"nowait":false},"getPadLeft":{"nowait":false},"getPadRight":{"nowait":false},"getPadButton":{"nowait":false},"getUp":{"nowait":false},"getDown":{"nowait":false},"getLeft":{"nowait":false},"getRight":{"nowait":false},"getButton":{"nowait":false},"isOnRect":{"nowait":false},"isOnRectWH":{"nowait":false}}}
});
Tonyu.klass.define({
  fullName: 'kernel.Boot',
  shortName: 'Boot',
  namespace: 'kernel',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [Tonyu.classes.kernel.T2MediaPlayer],
  methods: {
    main :function _trc_Boot_main() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=43002040;//kernel.Boot:2040
      Tonyu.globals.$Boot=_this;
      //$LASTPOS=43002053;//kernel.Boot:2053
      _this.initSounds();
      //$LASTPOS=43002068;//kernel.Boot:2068
      _this.initSprites();
      //$LASTPOS=43002084;//kernel.Boot:2084
      Tonyu.globals.$InputDevice=new Tonyu.classes.kernel.InputDevice;
      //$LASTPOS=43002115;//kernel.Boot:2115
      Tonyu.globals.$InputDevice.initCanvasEvents(_this.cvj);
      //$LASTPOS=43002152;//kernel.Boot:2152
      _this.initThread();
      //$LASTPOS=43002169;//kernel.Boot:2169
      Tonyu.globals.$pat_fruits=30;
      //$LASTPOS=43002186;//kernel.Boot:2186
      Tonyu.globals.$Keys=new Tonyu.classes.kernel.Keys;
      //$LASTPOS=43002203;//kernel.Boot:2203
      Tonyu.globals.$Math=Math;
      //$LASTPOS=43002216;//kernel.Boot:2216
      Tonyu.globals.$consolePanel=new Tonyu.classes.kernel.Panel({align: "center",x: 465/2,y: 465/2,width: 465,height: 465,zOrder: - 10,layer: Tonyu.globals.$FrontSprites});
      //$LASTPOS=43002326;//kernel.Boot:2326
      Tonyu.globals.$consolePrintY=465-15;
      //$LASTPOS=43002350;//kernel.Boot:2350
      Tonyu.globals.$panel=new Tonyu.classes.kernel.Panel({align: "center",x: Tonyu.globals.$screenWidth/2,y: Tonyu.globals.$screenHeight/2,width: Tonyu.globals.$screenWidth,height: Tonyu.globals.$screenHeight,zOrder: - 1,layer: Tonyu.globals.$FrontSprites});
      //$LASTPOS=43002490;//kernel.Boot:2490
      if (typeof  SplashScreen!="undefined") {
        //$LASTPOS=43002528;//kernel.Boot:2528
        SplashScreen.hide();
      }
      //$LASTPOS=43002550;//kernel.Boot:2550
      _this.initFPSParams();
      //$LASTPOS=43002570;//kernel.Boot:2570
      Tonyu.globals.$mouseX=Tonyu.globals.$mouseX||0;
      //$LASTPOS=43002591;//kernel.Boot:2591
      Tonyu.globals.$mouseY=Tonyu.globals.$mouseY||0;
      //$LASTPOS=43002612;//kernel.Boot:2612
      while (true) {
        //$LASTPOS=43002652;//kernel.Boot:2652
        _this.scheduler.stepsAll();
        //$LASTPOS=43002679;//kernel.Boot:2679
        Tonyu.globals.$Keys.update();
        //$LASTPOS=43002700;//kernel.Boot:2700
        Tonyu.globals.$InputDevice.update();
        //$LASTPOS=43002728;//kernel.Boot:2728
        Tonyu.globals.$screenWidth=Tonyu.globals.$Screen.width;
        //$LASTPOS=43002761;//kernel.Boot:2761
        Tonyu.globals.$screenHeight=Tonyu.globals.$Screen.height;
        //$LASTPOS=43002796;//kernel.Boot:2796
        _this.doDraw=_this.now()<_this.deadLine;
        //$LASTPOS=43002824;//kernel.Boot:2824
        if (! _this.doDraw&&_this.frameSkipped>=_this.maxFrameSkip) {
          //$LASTPOS=43002878;//kernel.Boot:2878
          _this.doDraw=true;
          //$LASTPOS=43002900;//kernel.Boot:2900
          _this.resetDeadLine();
          
        }
        //$LASTPOS=43002929;//kernel.Boot:2929
        if (_this.doDraw) {
          //$LASTPOS=43002972;//kernel.Boot:2972
          Tonyu.globals.$Screen.fillCanvas(Tonyu.globals.$Screen.buf[0]);
          //$LASTPOS=43003017;//kernel.Boot:3017
          Tonyu.globals.$Sprites.draw(Tonyu.globals.$Screen.buf[0]);
          //$LASTPOS=43003057;//kernel.Boot:3057
          Tonyu.globals.$FrontSprites.draw(Tonyu.globals.$Screen.buf[0]);
          //$LASTPOS=43003102;//kernel.Boot:3102
          Tonyu.globals.$Screen.draw();
          //$LASTPOS=43003127;//kernel.Boot:3127
          _this.fps_fpsCnt++;
          //$LASTPOS=43003151;//kernel.Boot:3151
          _this.frameSkipped=0;
          
        } else {
          //$LASTPOS=43003190;//kernel.Boot:3190
          _this.frameSkipped++;
          
        }
        //$LASTPOS=43003218;//kernel.Boot:3218
        Tonyu.globals.$Sprites.checkHit();
        //$LASTPOS=43003244;//kernel.Boot:3244
        Tonyu.globals.$Sprites.removeOneframes();
        //$LASTPOS=43003277;//kernel.Boot:3277
        _this.fps_rpsCnt++;
        //$LASTPOS=43003297;//kernel.Boot:3297
        _this.measureFps();
        //$LASTPOS=43003316;//kernel.Boot:3316
        _this.waitFrame();
        //$LASTPOS=43003343;//kernel.Boot:3343
        while (_this.paused) {
          //$LASTPOS=43003368;//kernel.Boot:3368
          _this.waitFor(Tonyu.timeout(1));
          //$LASTPOS=43003404;//kernel.Boot:3404
          if (! _this.paused) {
            //$LASTPOS=43003417;//kernel.Boot:3417
            _this.resetDeadLine();
          }
          
        }
        
      }
    },
    fiber$main :function _trc_Boot_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=43002040;//kernel.Boot:2040
      Tonyu.globals.$Boot=_this;
      
      _thread.enter(function _trc_Boot_ent_main(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=43002053;//kernel.Boot:2053
            _this.fiber$initSounds(_thread);
            __pc=1;return;
          case 1:
            
            //$LASTPOS=43002068;//kernel.Boot:2068
            _this.fiber$initSprites(_thread);
            __pc=2;return;
          case 2:
            
            //$LASTPOS=43002084;//kernel.Boot:2084
            Tonyu.globals.$InputDevice=new Tonyu.classes.kernel.InputDevice;
            //$LASTPOS=43002115;//kernel.Boot:2115
            Tonyu.globals.$InputDevice.initCanvasEvents(_this.cvj);
            //$LASTPOS=43002152;//kernel.Boot:2152
            _this.fiber$initThread(_thread);
            __pc=3;return;
          case 3:
            
            //$LASTPOS=43002169;//kernel.Boot:2169
            Tonyu.globals.$pat_fruits=30;
            //$LASTPOS=43002186;//kernel.Boot:2186
            Tonyu.globals.$Keys=new Tonyu.classes.kernel.Keys;
            //$LASTPOS=43002203;//kernel.Boot:2203
            Tonyu.globals.$Math=Math;
            //$LASTPOS=43002216;//kernel.Boot:2216
            Tonyu.globals.$consolePanel=new Tonyu.classes.kernel.Panel({align: "center",x: 465/2,y: 465/2,width: 465,height: 465,zOrder: - 10,layer: Tonyu.globals.$FrontSprites});
            //$LASTPOS=43002326;//kernel.Boot:2326
            Tonyu.globals.$consolePrintY=465-15;
            //$LASTPOS=43002350;//kernel.Boot:2350
            Tonyu.globals.$panel=new Tonyu.classes.kernel.Panel({align: "center",x: Tonyu.globals.$screenWidth/2,y: Tonyu.globals.$screenHeight/2,width: Tonyu.globals.$screenWidth,height: Tonyu.globals.$screenHeight,zOrder: - 1,layer: Tonyu.globals.$FrontSprites});
            //$LASTPOS=43002490;//kernel.Boot:2490
            if (typeof  SplashScreen!="undefined") {
              //$LASTPOS=43002528;//kernel.Boot:2528
              SplashScreen.hide();
            }
            //$LASTPOS=43002550;//kernel.Boot:2550
            _this.initFPSParams();
            //$LASTPOS=43002570;//kernel.Boot:2570
            Tonyu.globals.$mouseX=Tonyu.globals.$mouseX||0;
            //$LASTPOS=43002591;//kernel.Boot:2591
            Tonyu.globals.$mouseY=Tonyu.globals.$mouseY||0;
            //$LASTPOS=43002612;//kernel.Boot:2612
          case 4:
            //$LASTPOS=43002652;//kernel.Boot:2652
            _this.scheduler.stepsAll();
            //$LASTPOS=43002679;//kernel.Boot:2679
            Tonyu.globals.$Keys.update();
            //$LASTPOS=43002700;//kernel.Boot:2700
            Tonyu.globals.$InputDevice.update();
            //$LASTPOS=43002728;//kernel.Boot:2728
            Tonyu.globals.$screenWidth=Tonyu.globals.$Screen.width;
            //$LASTPOS=43002761;//kernel.Boot:2761
            Tonyu.globals.$screenHeight=Tonyu.globals.$Screen.height;
            //$LASTPOS=43002796;//kernel.Boot:2796
            _this.doDraw=_this.now()<_this.deadLine;
            //$LASTPOS=43002824;//kernel.Boot:2824
            if (! _this.doDraw&&_this.frameSkipped>=_this.maxFrameSkip) {
              //$LASTPOS=43002878;//kernel.Boot:2878
              _this.doDraw=true;
              //$LASTPOS=43002900;//kernel.Boot:2900
              _this.resetDeadLine();
              
            }
            //$LASTPOS=43002929;//kernel.Boot:2929
            if (_this.doDraw) {
              //$LASTPOS=43002972;//kernel.Boot:2972
              Tonyu.globals.$Screen.fillCanvas(Tonyu.globals.$Screen.buf[0]);
              //$LASTPOS=43003017;//kernel.Boot:3017
              Tonyu.globals.$Sprites.draw(Tonyu.globals.$Screen.buf[0]);
              //$LASTPOS=43003057;//kernel.Boot:3057
              Tonyu.globals.$FrontSprites.draw(Tonyu.globals.$Screen.buf[0]);
              //$LASTPOS=43003102;//kernel.Boot:3102
              Tonyu.globals.$Screen.draw();
              //$LASTPOS=43003127;//kernel.Boot:3127
              _this.fps_fpsCnt++;
              //$LASTPOS=43003151;//kernel.Boot:3151
              _this.frameSkipped=0;
              
            } else {
              //$LASTPOS=43003190;//kernel.Boot:3190
              _this.frameSkipped++;
              
            }
            //$LASTPOS=43003218;//kernel.Boot:3218
            Tonyu.globals.$Sprites.checkHit();
            //$LASTPOS=43003244;//kernel.Boot:3244
            Tonyu.globals.$Sprites.removeOneframes();
            //$LASTPOS=43003277;//kernel.Boot:3277
            _this.fps_rpsCnt++;
            //$LASTPOS=43003297;//kernel.Boot:3297
            _this.measureFps();
            //$LASTPOS=43003316;//kernel.Boot:3316
            _this.fiber$waitFrame(_thread);
            __pc=5;return;
          case 5:
            
            //$LASTPOS=43003343;//kernel.Boot:3343
          case 6:
            if (!(_this.paused)) { __pc=8; break; }
            //$LASTPOS=43003368;//kernel.Boot:3368
            _this.fiber$waitFor(_thread, Tonyu.timeout(1));
            __pc=7;return;
          case 7:
            
            //$LASTPOS=43003404;//kernel.Boot:3404
            if (! _this.paused) {
              //$LASTPOS=43003417;//kernel.Boot:3417
              _this.resetDeadLine();
            }
            __pc=6;break;
          case 8:
            
            __pc=4;break;
          case 9:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    initialize :function _trc_Boot_initialize(param) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=43000206;//kernel.Boot:206
      _this.extend(param);
    },
    update :function _trc_Boot_update() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=43000242;//kernel.Boot:242
      _this.waitFor(Tonyu.timeout(50));
    },
    fiber$update :function _trc_Boot_f_update(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.enter(function _trc_Boot_ent_update(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=43000242;//kernel.Boot:242
            _this.fiber$waitFor(_thread, Tonyu.timeout(50));
            __pc=1;return;
          case 1:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    initSprites :function _trc_Boot_initSprites() {
      "use strict";
      var _this=this;
      var a;
      var rs;
      var r;
      var name;
      var val;
      var _it_314;
      
      //$LASTPOS=43000323;//kernel.Boot:323
      Tonyu.globals.$Sprites=new Tonyu.classes.kernel.Sprites();
      //$LASTPOS=43000352;//kernel.Boot:352
      Tonyu.globals.$FrontSprites=new Tonyu.classes.kernel.Sprites();
      //$LASTPOS=43000386;//kernel.Boot:386
      _this.print("Loading plugins..");
      //$LASTPOS=43000420;//kernel.Boot:420
      a = _this.asyncResult();
      //$LASTPOS=43000446;//kernel.Boot:446
      Tonyu.globals.$currentProject.loadPlugins(a.receiver);
      //$LASTPOS=43000492;//kernel.Boot:492
      _this.waitFor(a);
      //$LASTPOS=43000509;//kernel.Boot:509
      _this.print("Loading pats..");
      //$LASTPOS=43000540;//kernel.Boot:540
      rs = Tonyu.globals.$currentProject.getResource();
      //$LASTPOS=43000583;//kernel.Boot:583
      a=_this.asyncResult();
      //$LASTPOS=43000605;//kernel.Boot:605
      ImageList.load(rs.images,a.receiver,{baseDir: Tonyu.globals.$currentProject.getDir()});
      //$LASTPOS=43000690;//kernel.Boot:690
      _this.waitFor(a);
      //$LASTPOS=43000707;//kernel.Boot:707
      r = a[0];
      //$LASTPOS=43000724;//kernel.Boot:724
      Tonyu.globals.$Sprites.setImageList(r);
      //$LASTPOS=43000755;//kernel.Boot:755
      _it_314=Tonyu.iterator(r.names,2);
      while(_it_314.next()) {
        name=_it_314[0];
        val=_it_314[1];
        
        //$LASTPOS=43000796;//kernel.Boot:796
        Tonyu.setGlobal(name,val);
        
      }
      //$LASTPOS=43000836;//kernel.Boot:836
      _this.print("Loading pats done.");
      //$LASTPOS=43000871;//kernel.Boot:871
      _this.cvj=$("canvas");
      //$LASTPOS=43000893;//kernel.Boot:893
      if (Tonyu.noviceMode) {
        //$LASTPOS=43000926;//kernel.Boot:926
        Tonyu.globals.$Screen=new Tonyu.classes.kernel.ScaledCanvas({canvas: _this.cvj,width: 600,height: 300});
        
      } else {
        //$LASTPOS=43001010;//kernel.Boot:1010
        Tonyu.globals.$Screen=new Tonyu.classes.kernel.ScaledCanvas({canvas: _this.cvj,width: 465,height: 465});
        
      }
    },
    fiber$initSprites :function _trc_Boot_f_initSprites(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var a;
      var rs;
      var r;
      var name;
      var val;
      var _it_314;
      
      //$LASTPOS=43000323;//kernel.Boot:323
      Tonyu.globals.$Sprites=new Tonyu.classes.kernel.Sprites();
      //$LASTPOS=43000352;//kernel.Boot:352
      Tonyu.globals.$FrontSprites=new Tonyu.classes.kernel.Sprites();
      //$LASTPOS=43000386;//kernel.Boot:386
      _this.print("Loading plugins..");
      //$LASTPOS=43000420;//kernel.Boot:420
      a = _this.asyncResult();
      //$LASTPOS=43000446;//kernel.Boot:446
      Tonyu.globals.$currentProject.loadPlugins(a.receiver);
      
      _thread.enter(function _trc_Boot_ent_initSprites(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=43000492;//kernel.Boot:492
            _this.fiber$waitFor(_thread, a);
            __pc=1;return;
          case 1:
            
            //$LASTPOS=43000509;//kernel.Boot:509
            _this.print("Loading pats..");
            //$LASTPOS=43000540;//kernel.Boot:540
            rs = Tonyu.globals.$currentProject.getResource();
            //$LASTPOS=43000583;//kernel.Boot:583
            a=_this.asyncResult();
            //$LASTPOS=43000605;//kernel.Boot:605
            ImageList.load(rs.images,a.receiver,{baseDir: Tonyu.globals.$currentProject.getDir()});
            //$LASTPOS=43000690;//kernel.Boot:690
            _this.fiber$waitFor(_thread, a);
            __pc=2;return;
          case 2:
            
            //$LASTPOS=43000707;//kernel.Boot:707
            r = a[0];
            //$LASTPOS=43000724;//kernel.Boot:724
            Tonyu.globals.$Sprites.setImageList(r);
            //$LASTPOS=43000755;//kernel.Boot:755
            _it_314=Tonyu.iterator(r.names,2);
            while(_it_314.next()) {
              name=_it_314[0];
              val=_it_314[1];
              
              //$LASTPOS=43000796;//kernel.Boot:796
              Tonyu.setGlobal(name,val);
              
            }
            //$LASTPOS=43000836;//kernel.Boot:836
            _this.print("Loading pats done.");
            //$LASTPOS=43000871;//kernel.Boot:871
            _this.cvj=$("canvas");
            //$LASTPOS=43000893;//kernel.Boot:893
            if (Tonyu.noviceMode) {
              //$LASTPOS=43000926;//kernel.Boot:926
              Tonyu.globals.$Screen=new Tonyu.classes.kernel.ScaledCanvas({canvas: _this.cvj,width: 600,height: 300});
              
            } else {
              //$LASTPOS=43001010;//kernel.Boot:1010
              Tonyu.globals.$Screen=new Tonyu.classes.kernel.ScaledCanvas({canvas: _this.cvj,width: 465,height: 465});
              
            }
            _thread.exit(_this);return;
          }
        }
      });
    },
    initSounds :function _trc_Boot_initSounds() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=43001103;//kernel.Boot:1103
      _this.print("Loading sounds...");
      //$LASTPOS=43001137;//kernel.Boot:1137
      _this.initT2MediaPlayer();
      //$LASTPOS=43001163;//kernel.Boot:1163
      _this.loadFromProject(Tonyu.globals.$currentProject);
      //$LASTPOS=43001202;//kernel.Boot:1202
      _this.print("Loading sounds done.");
      //$LASTPOS=43001239;//kernel.Boot:1239
      _this.on("stop",(function anonymous_1249() {
        
        //$LASTPOS=43001261;//kernel.Boot:1261
        _this.clearSEData();
      }));
      //$LASTPOS=43001289;//kernel.Boot:1289
      Tonyu.globals.$sound=_this;
    },
    fiber$initSounds :function _trc_Boot_f_initSounds(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=43001103;//kernel.Boot:1103
      _this.print("Loading sounds...");
      
      _thread.enter(function _trc_Boot_ent_initSounds(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=43001137;//kernel.Boot:1137
            _this.fiber$initT2MediaPlayer(_thread);
            __pc=1;return;
          case 1:
            
            //$LASTPOS=43001163;//kernel.Boot:1163
            _this.fiber$loadFromProject(_thread, Tonyu.globals.$currentProject);
            __pc=2;return;
          case 2:
            
            //$LASTPOS=43001202;//kernel.Boot:1202
            _this.print("Loading sounds done.");
            //$LASTPOS=43001239;//kernel.Boot:1239
            _this.on("stop",(function anonymous_1249() {
              
              //$LASTPOS=43001261;//kernel.Boot:1261
              _this.clearSEData();
            }));
            //$LASTPOS=43001289;//kernel.Boot:1289
            Tonyu.globals.$sound=_this;
            _thread.exit(_this);return;
          }
        }
      });
    },
    hide :function _trc_Boot_hide() {
      "use strict";
      var _this=this;
      
    },
    initThread :function _trc_Boot_initThread() {
      "use strict";
      var _this=this;
      var o;
      var mainClassName;
      
      //$LASTPOS=43001392;//kernel.Boot:1392
      o = Tonyu.currentProject.getOptions();
      //$LASTPOS=43001438;//kernel.Boot:1438
      mainClassName = o.run.mainClass;
      //$LASTPOS=43001478;//kernel.Boot:1478
      _this.print("MainClass= "+mainClassName);
      //$LASTPOS=43001519;//kernel.Boot:1519
      _this.mainClass=Tonyu.getClass(mainClassName);
      //$LASTPOS=43001565;//kernel.Boot:1565
      if (! _this.mainClass) {
        //$LASTPOS=43001592;//kernel.Boot:1592
        TError(mainClassName+" というクラスはありません","不明",0).raise();
        
      }
      //$LASTPOS=43001729;//kernel.Boot:1729
      _this.scheduler=Tonyu.globals.$Scheduler=new Tonyu.classes.kernel.Scheduler;
      //$LASTPOS=43001770;//kernel.Boot:1770
      new _this.mainClass();
    },
    fiber$initThread :function _trc_Boot_f_initThread(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var o;
      var mainClassName;
      
      //$LASTPOS=43001392;//kernel.Boot:1392
      o = Tonyu.currentProject.getOptions();
      //$LASTPOS=43001438;//kernel.Boot:1438
      mainClassName = o.run.mainClass;
      //$LASTPOS=43001478;//kernel.Boot:1478
      _this.print("MainClass= "+mainClassName);
      //$LASTPOS=43001519;//kernel.Boot:1519
      _this.mainClass=Tonyu.getClass(mainClassName);
      //$LASTPOS=43001565;//kernel.Boot:1565
      if (! _this.mainClass) {
        //$LASTPOS=43001592;//kernel.Boot:1592
        TError(mainClassName+" というクラスはありません","不明",0).raise();
        
      }
      //$LASTPOS=43001729;//kernel.Boot:1729
      _this.scheduler=Tonyu.globals.$Scheduler=new Tonyu.classes.kernel.Scheduler;
      //$LASTPOS=43001770;//kernel.Boot:1770
      new _this.mainClass();
      
      _thread.retVal=_this;return;
    },
    stop :function _trc_Boot_stop() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=43001806;//kernel.Boot:1806
      _this.fireEvent("stop");
      //$LASTPOS=43001830;//kernel.Boot:1830
      _this.die();
    },
    fiber$stop :function _trc_Boot_f_stop(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=43001806;//kernel.Boot:1806
      _this.fireEvent("stop");
      //$LASTPOS=43001830;//kernel.Boot:1830
      _this.die();
      
      _thread.retVal=_this;return;
    },
    schedule :function _trc_Boot_schedule(obj,method,args) {
      "use strict";
      var _this=this;
      var th;
      
      //$LASTPOS=43001875;//kernel.Boot:1875
      method=method||"main";
      //$LASTPOS=43001903;//kernel.Boot:1903
      args=args||[];
      //$LASTPOS=43001923;//kernel.Boot:1923
      th = _this.scheduler.newThread(obj,method,args);
      //$LASTPOS=43001975;//kernel.Boot:1975
      _this.addThreadGroup(obj);
      //$LASTPOS=43002001;//kernel.Boot:2001
      obj.addThread(th);
      return th;
    },
    fiber$schedule :function _trc_Boot_f_schedule(_thread,obj,method,args) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var th;
      
      //$LASTPOS=43001875;//kernel.Boot:1875
      method=method||"main";
      //$LASTPOS=43001903;//kernel.Boot:1903
      args=args||[];
      //$LASTPOS=43001923;//kernel.Boot:1923
      th = _this.scheduler.newThread(obj,method,args);
      
      _thread.enter(function _trc_Boot_ent_schedule(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=43001975;//kernel.Boot:1975
            _this.fiber$addThreadGroup(_thread, obj);
            __pc=1;return;
          case 1:
            
            //$LASTPOS=43002001;//kernel.Boot:2001
            obj.addThread(th);
            _thread.exit(th);return;
            _thread.exit(_this);return;
          }
        }
      });
    },
    initFPSParams :function _trc_Boot_initFPSParams() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=43003497;//kernel.Boot:3497
      _this._fps=30;
      //$LASTPOS=43003513;//kernel.Boot:3513
      _this.maxframeSkip=5;
      //$LASTPOS=43003563;//kernel.Boot:3563
      _this.frameCnt=0;
      //$LASTPOS=43003582;//kernel.Boot:3582
      _this.resetDeadLine();
      //$LASTPOS=43003604;//kernel.Boot:3604
      _this.lastMeasured=_this.now();
      //$LASTPOS=43003629;//kernel.Boot:3629
      _this.fps_fps=_this.fps_rps=_this.fps_fpsCnt=_this.fps_rpsCnt=0;
    },
    now :function _trc_Boot_now() {
      "use strict";
      var _this=this;
      
      return new Date().getTime();
    },
    resetDeadLine :function _trc_Boot_resetDeadLine() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=43003759;//kernel.Boot:3759
      _this.deadLine=_this.now()+1000/_this._fps;
      //$LASTPOS=43003790;//kernel.Boot:3790
      _this.frameSkipped=0;
    },
    waitFrame :function _trc_Boot_waitFrame() {
      "use strict";
      var _this=this;
      var wt;
      
      //$LASTPOS=43003834;//kernel.Boot:3834
      wt = _this.deadLine-_this.now();
      //$LASTPOS=43003862;//kernel.Boot:3862
      if (wt<1) {
        //$LASTPOS=43003883;//kernel.Boot:3883
        if (wt<- 1000) {
          //$LASTPOS=43003897;//kernel.Boot:3897
          _this.resetDeadLine();
        }
        //$LASTPOS=43003923;//kernel.Boot:3923
        wt=1;
        
      }
      //$LASTPOS=43003941;//kernel.Boot:3941
      wt=_this.floor(wt);
      //$LASTPOS=43003960;//kernel.Boot:3960
      _this.waitFor(Tonyu.timeout(wt));
      //$LASTPOS=43003993;//kernel.Boot:3993
      _this.deadLine+=1000/_this._fps;
    },
    fiber$waitFrame :function _trc_Boot_f_waitFrame(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var wt;
      
      //$LASTPOS=43003834;//kernel.Boot:3834
      wt = _this.deadLine-_this.now();
      //$LASTPOS=43003862;//kernel.Boot:3862
      if (wt<1) {
        //$LASTPOS=43003883;//kernel.Boot:3883
        if (wt<- 1000) {
          //$LASTPOS=43003897;//kernel.Boot:3897
          _this.resetDeadLine();
        }
        //$LASTPOS=43003923;//kernel.Boot:3923
        wt=1;
        
      }
      //$LASTPOS=43003941;//kernel.Boot:3941
      wt=_this.floor(wt);
      
      _thread.enter(function _trc_Boot_ent_waitFrame(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=43003960;//kernel.Boot:3960
            _this.fiber$waitFor(_thread, Tonyu.timeout(wt));
            __pc=1;return;
          case 1:
            
            //$LASTPOS=43003993;//kernel.Boot:3993
            _this.deadLine+=1000/_this._fps;
            _thread.exit(_this);return;
          }
        }
      });
    },
    getFrameRate :function _trc_Boot_getFrameRate() {
      "use strict";
      var _this=this;
      
      return _this._fps;
    },
    setFrameRate :function _trc_Boot_setFrameRate(fps,maxFrameSkip) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=43004153;//kernel.Boot:4153
      _this._fps=fps;
      //$LASTPOS=43004170;//kernel.Boot:4170
      if (typeof  maxFrameSkip!="number") {
        //$LASTPOS=43004205;//kernel.Boot:4205
        maxFrameSkip=5;
      }
      //$LASTPOS=43004226;//kernel.Boot:4226
      _this.maxFrameSkip=maxFrameSkip;
      //$LASTPOS=43004265;//kernel.Boot:4265
      _this.resetDeadLine();
    },
    getMeasuredFps :function _trc_Boot_getMeasuredFps() {
      "use strict";
      var _this=this;
      
      return _this.fps_fps;
    },
    getMeasuredRps :function _trc_Boot_getMeasuredRps() {
      "use strict";
      var _this=this;
      
      return _this.fps_rps;
    },
    measureFps :function _trc_Boot_measureFps() {
      "use strict";
      var _this=this;
      
      //$LASTPOS=43004476;//kernel.Boot:4476
      if (_this.now()>_this.lastMeasured+1000) {
        //$LASTPOS=43004516;//kernel.Boot:4516
        _this.fps_fps=_this.fps_fpsCnt;
        //$LASTPOS=43004545;//kernel.Boot:4545
        _this.fps_rps=_this.fps_rpsCnt;
        //$LASTPOS=43004574;//kernel.Boot:4574
        _this.fps_fpsCnt=0;
        //$LASTPOS=43004597;//kernel.Boot:4597
        _this.fps_rpsCnt=0;
        //$LASTPOS=43004620;//kernel.Boot:4620
        _this.lastMeasured=_this.now();
        
      }
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"update":{"nowait":false},"initSprites":{"nowait":false},"initSounds":{"nowait":false},"hide":{"nowait":true},"initThread":{"nowait":false},"stop":{"nowait":false},"schedule":{"nowait":false},"initFPSParams":{"nowait":true},"now":{"nowait":true},"resetDeadLine":{"nowait":true},"waitFrame":{"nowait":false},"getFrameRate":{"nowait":true},"setFrameRate":{"nowait":true},"getMeasuredFps":{"nowait":true},"getMeasuredRps":{"nowait":true},"measureFps":{"nowait":true}}}
});
Tonyu.klass.define({
  fullName: 'kernel.DxChar',
  shortName: 'DxChar',
  namespace: 'kernel',
  superclass: Tonyu.classes.kernel.SpriteChar,
  includes: [],
  methods: {
    main :function _trc_DxChar_main() {
      "use strict";
      var _this=this;
      
    },
    fiber$main :function _trc_DxChar_f_main(_thread) {
      "use strict";
      var _this=this;
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    initialize :function _trc_DxChar_initialize(xx,yy,pp,ff,sz,rt,al) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=44000057;//kernel.DxChar:57
      Tonyu.classes.kernel.SpriteChar.apply( _this, [xx,yy,pp,ff]);
      //$LASTPOS=44000082;//kernel.DxChar:82
      _this.scaleX=1;
      //$LASTPOS=44000097;//kernel.DxChar:97
      if (sz) {
        //$LASTPOS=44000105;//kernel.DxChar:105
        _this.scaleX=sz;
      }
      //$LASTPOS=44000121;//kernel.DxChar:121
      _this.angle=0;
      //$LASTPOS=44000135;//kernel.DxChar:135
      if (rt) {
        //$LASTPOS=44000143;//kernel.DxChar:143
        _this.angle=rt;
      }
      //$LASTPOS=44000158;//kernel.DxChar:158
      _this.alpha=255;
      //$LASTPOS=44000174;//kernel.DxChar:174
      if (al) {
        //$LASTPOS=44000182;//kernel.DxChar:182
        _this.alpha=al;
      }
    },
    draw :function _trc_DxChar_draw(c) {
      "use strict";
      var _this=this;
      
      //$LASTPOS=44000212;//kernel.DxChar:212
      _this.rotation=_this.angle;
      //$LASTPOS=44000233;//kernel.DxChar:233
      Tonyu.classes.kernel.SpriteChar.prototype.draw.apply( _this, [c]);
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"draw":{"nowait":true}}}
});
