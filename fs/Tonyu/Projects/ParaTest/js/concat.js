Tonyu.klass.ensureNamespace(Tonyu.classes,'user');
Tonyu.classes.user.Char=Tonyu.klass(Tonyu.classes.kernel.Actor,[],{
  main :function _trc_Char_main() {
    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
    
    //$LASTPOS=38000001;//user.Char:1
    _this.x=100;
    //$LASTPOS=38000007;//user.Char:7
    _this.y=100;
    //$LASTPOS=38000014;//user.Char:14
    _this.g=_this.parallel("go",3);
    //$LASTPOS=38000034;//user.Char:34
    _this.s=_this.parallel("scale",0.1);
    //$LASTPOS=38000059;//user.Char:59
    _this.on("fuga",function () {
      
      //$LASTPOS=38000072;//user.Char:72
      _this.print("fugaed");
    });
    //$LASTPOS=38000091;//user.Char:91
    _this.on("die",function () {
      
      //$LASTPOS=38000103;//user.Char:103
      _this.print("dead");
    });
    //$LASTPOS=38000120;//user.Char:120
    while (true) {
      //$LASTPOS=38000138;//user.Char:138
      if (_this.getkey(32)==1) {
        //$LASTPOS=38000156;//user.Char:156
        _this.die();
      }
      //$LASTPOS=38000168;//user.Char:168
      _this.update();
      
    }
  },
  fiber$main :function _trc_Char_f_main(_thread) {
    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
    //var _arguments=Tonyu.A(arguments);
    var __pc=0;
    
    //$LASTPOS=38000001;//user.Char:1
    _this.x=100;
    //$LASTPOS=38000007;//user.Char:7
    _this.y=100;
    //$LASTPOS=38000014;//user.Char:14
    _this.g=_this.parallel("go",3);
    //$LASTPOS=38000034;//user.Char:34
    _this.s=_this.parallel("scale",0.1);
    //$LASTPOS=38000059;//user.Char:59
    _this.on("fuga",function () {
      
      //$LASTPOS=38000072;//user.Char:72
      _this.print("fugaed");
    });
    //$LASTPOS=38000091;//user.Char:91
    _this.on("die",function () {
      
      //$LASTPOS=38000103;//user.Char:103
      _this.print("dead");
    });
    
    _thread.enter(function _trc_Char_ent_main(_thread) {
      if (_thread.lastEx) __pc=_thread.catchPC;
      for(var __cnt=100 ; __cnt--;) {
        switch (__pc) {
        case 0:
          //$LASTPOS=38000120;//user.Char:120
        case 1:
          //$LASTPOS=38000138;//user.Char:138
          if (_this.getkey(32)==1) {
            //$LASTPOS=38000156;//user.Char:156
            _this.die();
          }
          //$LASTPOS=38000168;//user.Char:168
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
  go :function _trc_Char_go(speed) {
    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
    
    //$LASTPOS=38000200;//user.Char:200
    while (true) {
      //$LASTPOS=38000222;//user.Char:222
      _this.print("Go Left");
      //$LASTPOS=38000248;//user.Char:248
      while (_this.x<300) {
        //$LASTPOS=38000275;//user.Char:275
        _this.x+=speed;
        //$LASTPOS=38000297;//user.Char:297
        _this.update();
        
      }
      //$LASTPOS=38000325;//user.Char:325
      _this.print("Go Right");
      //$LASTPOS=38000352;//user.Char:352
      while (_this.x>100) {
        //$LASTPOS=38000379;//user.Char:379
        _this.x-=speed;
        //$LASTPOS=38000401;//user.Char:401
        _this.update();
        
      }
      
    }
  },
  fiber$go :function _trc_Char_f_go(_thread,speed) {
    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
    //var _arguments=Tonyu.A(arguments);
    var __pc=0;
    
    
    _thread.enter(function _trc_Char_ent_go(_thread) {
      if (_thread.lastEx) __pc=_thread.catchPC;
      for(var __cnt=100 ; __cnt--;) {
        switch (__pc) {
        case 0:
          //$LASTPOS=38000200;//user.Char:200
        case 1:
          //$LASTPOS=38000222;//user.Char:222
          _this.print("Go Left");
          //$LASTPOS=38000248;//user.Char:248
        case 2:
          if (!(_this.x<300)) { __pc=4; break; }
          //$LASTPOS=38000275;//user.Char:275
          _this.x+=speed;
          //$LASTPOS=38000297;//user.Char:297
          _this.fiber$update(_thread);
          __pc=3;return;
        case 3:
          
          __pc=2;break;
        case 4:
          
          //$LASTPOS=38000325;//user.Char:325
          _this.print("Go Right");
          //$LASTPOS=38000352;//user.Char:352
        case 5:
          if (!(_this.x>100)) { __pc=7; break; }
          //$LASTPOS=38000379;//user.Char:379
          _this.x-=speed;
          //$LASTPOS=38000401;//user.Char:401
          _this.fiber$update(_thread);
          __pc=6;return;
        case 6:
          
          __pc=5;break;
        case 7:
          
          __pc=1;break;
        case 8:
          
          _thread.exit(_this);return;
        }
      }
    });
  },
  scale :function _trc_Char_scale(speed) {
    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
    
    //$LASTPOS=38000450;//user.Char:450
    while (true) {
      //$LASTPOS=38000472;//user.Char:472
      _this.print("Bigger");
      //$LASTPOS=38000497;//user.Char:497
      //$LASTPOS=38000502;//user.Char:502
      _this.i=0;
      while(_this.i<17) {
        {
          //$LASTPOS=38000530;//user.Char:530
          _this.scaleX+=speed;
          //$LASTPOS=38000557;//user.Char:557
          _this.update();
        }
        _this.i++;
      }
      //$LASTPOS=38000585;//user.Char:585
      _this.print("Smaller");
      //$LASTPOS=38000611;//user.Char:611
      //$LASTPOS=38000616;//user.Char:616
      _this.i=0;
      while(_this.i<17) {
        {
          //$LASTPOS=38000644;//user.Char:644
          _this.scaleX-=speed;
          //$LASTPOS=38000671;//user.Char:671
          _this.update();
        }
        _this.i++;
      }
      
    }
  },
  fiber$scale :function _trc_Char_f_scale(_thread,speed) {
    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
    //var _arguments=Tonyu.A(arguments);
    var __pc=0;
    
    
    _thread.enter(function _trc_Char_ent_scale(_thread) {
      if (_thread.lastEx) __pc=_thread.catchPC;
      for(var __cnt=100 ; __cnt--;) {
        switch (__pc) {
        case 0:
          //$LASTPOS=38000450;//user.Char:450
        case 1:
          //$LASTPOS=38000472;//user.Char:472
          _this.print("Bigger");
          //$LASTPOS=38000497;//user.Char:497
          //$LASTPOS=38000502;//user.Char:502
          _this.i=0;;
        case 2:
          if (!(_this.i<17)) { __pc=4; break; }
          //$LASTPOS=38000530;//user.Char:530
          _this.scaleX+=speed;
          //$LASTPOS=38000557;//user.Char:557
          _this.fiber$update(_thread);
          __pc=3;return;
        case 3:
          
          _this.i++;
          __pc=2;break;
        case 4:
          
          //$LASTPOS=38000585;//user.Char:585
          _this.print("Smaller");
          //$LASTPOS=38000611;//user.Char:611
          //$LASTPOS=38000616;//user.Char:616
          _this.i=0;;
        case 5:
          if (!(_this.i<17)) { __pc=7; break; }
          //$LASTPOS=38000644;//user.Char:644
          _this.scaleX-=speed;
          //$LASTPOS=38000671;//user.Char:671
          _this.fiber$update(_thread);
          __pc=6;return;
        case 6:
          
          _this.i++;
          __pc=5;break;
        case 7:
          
          __pc=1;break;
        case 8:
          
          _thread.exit(_this);return;
        }
      }
    });
  },
  __dummy: false
});
Tonyu.klass.addMeta(Tonyu.classes.user.Char,{"fullName":"user.Char","namespace":"user","shortName":"Char","decls":{"methods":{"main":{"nowait":false},"go":{"nowait":false},"scale":{"nowait":false}}}});

Tonyu.klass.ensureNamespace(Tonyu.classes,'user');
Tonyu.classes.user.Main=Tonyu.klass(Tonyu.classes.kernel.Actor,[],{
  main :function _trc_Main_main() {
    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
    
    //$LASTPOS=39000000;//user.Main:0
    _this.c=new Tonyu.classes.user.Char;
    //$LASTPOS=39000012;//user.Main:12
    while (true) {
      //$LASTPOS=39000031;//user.Main:31
      if (_this.getkey("f")==1) {
        //$LASTPOS=39000051;//user.Main:51
        _this.c.fireEvent("fuga");
      }
      //$LASTPOS=39000076;//user.Main:76
      _this.update();
      
    }
  },
  fiber$main :function _trc_Main_f_main(_thread) {
    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
    //var _arguments=Tonyu.A(arguments);
    var __pc=0;
    
    //$LASTPOS=39000000;//user.Main:0
    _this.c=new Tonyu.classes.user.Char;
    
    _thread.enter(function _trc_Main_ent_main(_thread) {
      if (_thread.lastEx) __pc=_thread.catchPC;
      for(var __cnt=100 ; __cnt--;) {
        switch (__pc) {
        case 0:
          //$LASTPOS=39000012;//user.Main:12
        case 1:
          //$LASTPOS=39000031;//user.Main:31
          if (_this.getkey("f")==1) {
            //$LASTPOS=39000051;//user.Main:51
            _this.c.fireEvent("fuga");
          }
          //$LASTPOS=39000076;//user.Main:76
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
  __dummy: false
});
Tonyu.klass.addMeta(Tonyu.classes.user.Main,{"fullName":"user.Main","namespace":"user","shortName":"Main","decls":{"methods":{"main":{"nowait":false}}}});

