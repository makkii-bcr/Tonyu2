Tonyu.klass.define({
  fullName: 'user.AI',
  shortName: 'AI',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: {
    main :function _trc_AI_main() {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      
      //$LASTPOS=1000310;//user.AI:310
      while (true) {
        //$LASTPOS=1000329;//user.AI:329
        if (! _this.hasManualPath) {
          //$LASTPOS=1000359;//user.AI:359
          if (_this.player.speed>2) {
            //$LASTPOS=1000393;//user.AI:393
            _this.s=_this.findSeed();
            //$LASTPOS=1000419;//user.AI:419
            if (_this.s) {
              //$LASTPOS=1000427;//user.AI:427
              _this.queue=[];
              //$LASTPOS=1000437;//user.AI:437
              _this.rect(_this.s);
              //$LASTPOS=1000445;//user.AI:445
              _this.setTarget();
              
            }
            
          }
          
        }
        //$LASTPOS=1000479;//user.AI:479
        _this.update();
        
      }
    },
    fiber$main :function _trc_AI_f_main(_thread) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.enter(function _trc_AI_ent_main(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=1000310;//user.AI:310
          case 1:
            //$LASTPOS=1000329;//user.AI:329
            if (!(! _this.hasManualPath)) { __pc=7; break; }
            //$LASTPOS=1000359;//user.AI:359
            if (!(_this.player.speed>2)) { __pc=6; break; }
            //$LASTPOS=1000393;//user.AI:393
            _this.fiber$findSeed(_thread);
            __pc=2;return;
          case 2:
            _this.s=_thread.retVal;
            
            //$LASTPOS=1000419;//user.AI:419
            if (!(_this.s)) { __pc=5; break; }
            //$LASTPOS=1000427;//user.AI:427
            _this.queue=[];
            //$LASTPOS=1000437;//user.AI:437
            _this.fiber$rect(_thread, _this.s);
            __pc=3;return;
          case 3:
            
            //$LASTPOS=1000445;//user.AI:445
            _this.fiber$setTarget(_thread);
            __pc=4;return;
          case 4:
            
          case 5:
            
          case 6:
            
          case 7:
            
            //$LASTPOS=1000479;//user.AI:479
            _this.fiber$update(_thread);
            __pc=8;return;
          case 8:
            
            __pc=1;break;
          case 9:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    onAppear :function _trc_AI_onAppear() {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      
      //$LASTPOS=1000019;//user.AI:19
      _this.queue=[];
      //$LASTPOS=1000033;//user.AI:33
      _this.rect();
      //$LASTPOS=1000045;//user.AI:45
      _this.setTarget();
      //$LASTPOS=1000062;//user.AI:62
      _this.player.on("arriveTarget",(function anonymous_88() {
        
        //$LASTPOS=1000099;//user.AI:99
        if (_this.hasManualPath) {
          //$LASTPOS=1000132;//user.AI:132
          _this.queue.shift();
          //$LASTPOS=1000159;//user.AI:159
          if (! _this.hasManualPath) {
            //$LASTPOS=1000179;//user.AI:179
            _this.queue=[];
          }
          
        } else {
          //$LASTPOS=1000218;//user.AI:218
          _this.queue.shift();
          
        }
        //$LASTPOS=1000251;//user.AI:251
        if (_this.queue.length==0) {
          //$LASTPOS=1000272;//user.AI:272
          _this.rect();
        }
        //$LASTPOS=1000288;//user.AI:288
        _this.setTarget();
      }));
    },
    fiber$onAppear :function _trc_AI_f_onAppear(_thread) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=1000019;//user.AI:19
      _this.queue=[];
      
      _thread.enter(function _trc_AI_ent_onAppear(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=1000033;//user.AI:33
            _this.fiber$rect(_thread);
            __pc=1;return;
          case 1:
            
            //$LASTPOS=1000045;//user.AI:45
            _this.fiber$setTarget(_thread);
            __pc=2;return;
          case 2:
            
            //$LASTPOS=1000062;//user.AI:62
            _this.player.on("arriveTarget",(function anonymous_88() {
              
              //$LASTPOS=1000099;//user.AI:99
              if (_this.hasManualPath) {
                //$LASTPOS=1000132;//user.AI:132
                _this.queue.shift();
                //$LASTPOS=1000159;//user.AI:159
                if (! _this.hasManualPath) {
                  //$LASTPOS=1000179;//user.AI:179
                  _this.queue=[];
                }
                
              } else {
                //$LASTPOS=1000218;//user.AI:218
                _this.queue.shift();
                
              }
              //$LASTPOS=1000251;//user.AI:251
              if (_this.queue.length==0) {
                //$LASTPOS=1000272;//user.AI:272
                _this.rect();
              }
              //$LASTPOS=1000288;//user.AI:288
              _this.setTarget();
            }));
            _thread.exit(_this);return;
          }
        }
      });
    },
    clearPath :function _trc_AI_clearPath() {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      
      //$LASTPOS=1000581;//user.AI:581
      _this.queue=[];
    },
    fiber$clearPath :function _trc_AI_f_clearPath(_thread) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=1000581;//user.AI:581
      _this.queue=[];
      
      _thread.retVal=_this;return;
    },
    addManualPath :function _trc_AI_addManualPath(x,y) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      var cand;
      var ox;
      var oy;
      var d;
      var score;
      var s;
      
      //$LASTPOS=1000619;//user.AI:619
      if (! _this.hasManualPath) {
        //$LASTPOS=1000639;//user.AI:639
        _this.queue=[];
      }
      //$LASTPOS=1000653;//user.AI:653
      cand = [];
      //$LASTPOS=1000670;//user.AI:670
      //$LASTPOS=1000675;//user.AI:675
      ox = - 1;
      while(ox<=1) {
        {
          //$LASTPOS=1000710;//user.AI:710
          //$LASTPOS=1000715;//user.AI:715
          oy = - 1;
          while(oy<=1) {
            {
              //$LASTPOS=1000754;//user.AI:754
              d = _this.pathAddable(x+ox,y+oy);
              //$LASTPOS=1000796;//user.AI:796
              if (d) {
                //$LASTPOS=1000821;//user.AI:821
                score = 10-d;
                //$LASTPOS=1000853;//user.AI:853
                s = Tonyu.globals.$seed.get(x+ox,y+oy);
                //$LASTPOS=1000897;//user.AI:897
                if (s) {
                  //$LASTPOS=1000926;//user.AI:926
                  if (s.active) {
                    //$LASTPOS=1000940;//user.AI:940
                    score+=5;
                  } else {
                    //$LASTPOS=1000975;//user.AI:975
                    score-=5;
                  }
                  
                }
                //$LASTPOS=1001019;//user.AI:1019
                cand.push({x: x+ox,y: y+oy,score: score,manual: true});
                
              }
            }
            oy++;
          }
        }
        ox++;
      }
      //$LASTPOS=1001101;//user.AI:1101
      cand=cand.sort((function anonymous_1116(a,b) {
        
        return b.score-a.score;
      }));
      //$LASTPOS=1001168;//user.AI:1168
      if (cand.length>0) {
        //$LASTPOS=1001197;//user.AI:1197
        _this.queue.push(cand[0]);
        
      }
    },
    fiber$addManualPath :function _trc_AI_f_addManualPath(_thread,x,y) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var cand;
      var ox;
      var oy;
      var d;
      var score;
      var s;
      
      //$LASTPOS=1000619;//user.AI:619
      if (! _this.hasManualPath) {
        //$LASTPOS=1000639;//user.AI:639
        _this.queue=[];
      }
      //$LASTPOS=1000653;//user.AI:653
      cand = [];
      //$LASTPOS=1000670;//user.AI:670
      //$LASTPOS=1000675;//user.AI:675
      ox = - 1;
      while(ox<=1) {
        {
          //$LASTPOS=1000710;//user.AI:710
          //$LASTPOS=1000715;//user.AI:715
          oy = - 1;
          while(oy<=1) {
            {
              //$LASTPOS=1000754;//user.AI:754
              d = _this.pathAddable(x+ox,y+oy);
              //$LASTPOS=1000796;//user.AI:796
              if (d) {
                //$LASTPOS=1000821;//user.AI:821
                score = 10-d;
                //$LASTPOS=1000853;//user.AI:853
                s = Tonyu.globals.$seed.get(x+ox,y+oy);
                //$LASTPOS=1000897;//user.AI:897
                if (s) {
                  //$LASTPOS=1000926;//user.AI:926
                  if (s.active) {
                    //$LASTPOS=1000940;//user.AI:940
                    score+=5;
                  } else {
                    //$LASTPOS=1000975;//user.AI:975
                    score-=5;
                  }
                  
                }
                //$LASTPOS=1001019;//user.AI:1019
                cand.push({x: x+ox,y: y+oy,score: score,manual: true});
                
              }
            }
            oy++;
          }
        }
        ox++;
      }
      //$LASTPOS=1001101;//user.AI:1101
      cand=cand.sort((function anonymous_1116(a,b) {
        
        return b.score-a.score;
      }));
      //$LASTPOS=1001168;//user.AI:1168
      if (cand.length>0) {
        //$LASTPOS=1001197;//user.AI:1197
        _this.queue.push(cand[0]);
        
      }
      
      _thread.retVal=_this;return;
    },
    pathAddable :function _trc_AI_pathAddable(x,y) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      var q;
      var _it_9;
      var p;
      var pp;
      
      //$LASTPOS=1001250;//user.AI:1250
      if (x<=0||y<=0||x>=Tonyu.globals.$m.col-1||y>=Tonyu.globals.$m.row-1) {
        return false;
      }
      //$LASTPOS=1001316;//user.AI:1316
      _it_9=Tonyu.iterator(_this.queue,1);
      while(_it_9.next()) {
        q=_it_9[0];
        
        //$LASTPOS=1001347;//user.AI:1347
        if (q.x==x&&q.y==y) {
          return false;
        }
        
      }
      //$LASTPOS=1001393;//user.AI:1393
      if (_this.queue.length>0) {
        //$LASTPOS=1001423;//user.AI:1423
        p = _this.queue[_this.queue.length-1];
        //$LASTPOS=1001460;//user.AI:1460
        if (_this.queue.length>1) {
          //$LASTPOS=1001494;//user.AI:1494
          pp = _this.queue[_this.queue.length-2];
          //$LASTPOS=1001536;//user.AI:1536
          if ((p.x-pp.x)*(x-p.x)<0||(p.y-pp.y)*(y-p.y)<0) {
            return false;
          }
          
        }
        return _this.abs(p.x-x)+_this.abs(p.y-y);
        
      }
      return 1;
    },
    fiber$pathAddable :function _trc_AI_f_pathAddable(_thread,x,y) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var q;
      var _it_9;
      var p;
      var pp;
      
      //$LASTPOS=1001250;//user.AI:1250
      if (x<=0||y<=0||x>=Tonyu.globals.$m.col-1||y>=Tonyu.globals.$m.row-1) {
        _thread.retVal=false;return;
        
      }
      //$LASTPOS=1001316;//user.AI:1316
      _it_9=Tonyu.iterator(_this.queue,1);
      while(_it_9.next()) {
        q=_it_9[0];
        
        //$LASTPOS=1001347;//user.AI:1347
        if (q.x==x&&q.y==y) {
          _thread.retVal=false;return;
          
        }
        
      }
      //$LASTPOS=1001393;//user.AI:1393
      if (_this.queue.length>0) {
        //$LASTPOS=1001423;//user.AI:1423
        p = _this.queue[_this.queue.length-1];
        //$LASTPOS=1001460;//user.AI:1460
        if (_this.queue.length>1) {
          //$LASTPOS=1001494;//user.AI:1494
          pp = _this.queue[_this.queue.length-2];
          //$LASTPOS=1001536;//user.AI:1536
          if ((p.x-pp.x)*(x-p.x)<0||(p.y-pp.y)*(y-p.y)<0) {
            _thread.retVal=false;return;
            
          }
          
        }
        _thread.retVal=_this.abs(p.x-x)+_this.abs(p.y-y);return;
        
        
      }
      _thread.retVal=1;return;
      
      
      _thread.retVal=_this;return;
    },
    __getter__hasManualPath :function _trc_AI___getter__hasManualPath() {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      
      return _this.queue.length>0&&_this.queue[0].manual;
    },
    setTarget :function _trc_AI_setTarget() {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      
    },
    fiber$setTarget :function _trc_AI_f_setTarget(_thread) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    rect :function _trc_AI_rect(seed) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      var sx;
      var sy;
      var dx;
      var dy;
      var t;
      var w;
      var h;
      var x;
      var y;
      var i;
      
      //$LASTPOS=1001834;//user.AI:1834
      sx;sy;dx;dy;t;w;h;x = _this.player.x;y = _this.player.y;
      //$LASTPOS=1001883;//user.AI:1883
      if (seed) {
        //$LASTPOS=1001903;//user.AI:1903
        sx=seed.x;
        //$LASTPOS=1001913;//user.AI:1913
        sy=seed.y;
        
      } else {
        //$LASTPOS=1001945;//user.AI:1945
        sx=x;
        //$LASTPOS=1001950;//user.AI:1950
        sy=y;
        
      }
      //$LASTPOS=1001966;//user.AI:1966
      //$LASTPOS=1001971;//user.AI:1971
      i = 0;
      while(i<10) {
        {
          //$LASTPOS=1002002;//user.AI:2002
          dx=_this.rnd(Tonyu.globals.$m.col-2)+1;
          //$LASTPOS=1002030;//user.AI:2030
          dy=_this.rnd(Tonyu.globals.$m.row-2)+1;
          //$LASTPOS=1002058;//user.AI:2058
          w=_this.abs(sx-dx);
          //$LASTPOS=1002071;//user.AI:2071
          h=_this.abs(sy-dy);
          //$LASTPOS=1002093;//user.AI:2093
          if (w>2&&w<15&&h>2&&h<15&&Tonyu.globals.$m.get(dx,dy)!=_this.player.c) {
            break;
            
          }
        }
        i++;
      }
      //$LASTPOS=1002299;//user.AI:2299
      _this.queue.push({x: sx,y: sy});
      //$LASTPOS=1002326;//user.AI:2326
      _this.queue.push({x: sx,y: dy});
      //$LASTPOS=1002353;//user.AI:2353
      _this.queue.push({x: dx,y: dy});
      //$LASTPOS=1002380;//user.AI:2380
      _this.queue.push({x: dx,y: sy});
      //$LASTPOS=1002407;//user.AI:2407
      _this.queue.push({x: sx,y: sy});
    },
    fiber$rect :function _trc_AI_f_rect(_thread,seed) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var sx;
      var sy;
      var dx;
      var dy;
      var t;
      var w;
      var h;
      var x;
      var y;
      var i;
      
      //$LASTPOS=1001834;//user.AI:1834
      sx;sy;dx;dy;t;w;h;x = _this.player.x;y = _this.player.y;
      //$LASTPOS=1001883;//user.AI:1883
      if (seed) {
        //$LASTPOS=1001903;//user.AI:1903
        sx=seed.x;
        //$LASTPOS=1001913;//user.AI:1913
        sy=seed.y;
        
      } else {
        //$LASTPOS=1001945;//user.AI:1945
        sx=x;
        //$LASTPOS=1001950;//user.AI:1950
        sy=y;
        
      }
      //$LASTPOS=1001966;//user.AI:1966
      //$LASTPOS=1001971;//user.AI:1971
      i = 0;
      while(i<10) {
        {
          //$LASTPOS=1002002;//user.AI:2002
          dx=_this.rnd(Tonyu.globals.$m.col-2)+1;
          //$LASTPOS=1002030;//user.AI:2030
          dy=_this.rnd(Tonyu.globals.$m.row-2)+1;
          //$LASTPOS=1002058;//user.AI:2058
          w=_this.abs(sx-dx);
          //$LASTPOS=1002071;//user.AI:2071
          h=_this.abs(sy-dy);
          //$LASTPOS=1002093;//user.AI:2093
          if (w>2&&w<15&&h>2&&h<15&&Tonyu.globals.$m.get(dx,dy)!=_this.player.c) {
            break;
            
          }
        }
        i++;
      }
      //$LASTPOS=1002299;//user.AI:2299
      _this.queue.push({x: sx,y: sy});
      //$LASTPOS=1002326;//user.AI:2326
      _this.queue.push({x: sx,y: dy});
      //$LASTPOS=1002353;//user.AI:2353
      _this.queue.push({x: dx,y: dy});
      //$LASTPOS=1002380;//user.AI:2380
      _this.queue.push({x: dx,y: sy});
      //$LASTPOS=1002407;//user.AI:2407
      _this.queue.push({x: sx,y: sy});
      
      _thread.retVal=_this;return;
    },
    draw :function _trc_AI_draw(c) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      var i;
      var q;
      var _it_24;
      
      //$LASTPOS=1002447;//user.AI:2447
      if (! _this.hasManualPath) {
        return _this;
      }
      //$LASTPOS=1002479;//user.AI:2479
      c.beginPath();
      //$LASTPOS=1002498;//user.AI:2498
      c.strokeStyle="white";
      //$LASTPOS=1002525;//user.AI:2525
      c.moveTo(_this.player.x*16+8,_this.player.y*16+8);
      //$LASTPOS=1002568;//user.AI:2568
      _it_24=Tonyu.iterator(_this.queue,2);
      while(_it_24.next()) {
        i=_it_24[0];
        q=_it_24[1];
        
        //$LASTPOS=1002601;//user.AI:2601
        c.lineTo(q.x*16+8,q.y*16+8);
        
      }
      //$LASTPOS=1002640;//user.AI:2640
      c.stroke();
    },
    findSeed :function _trc_AI_findSeed() {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      
      return _this.all(Tonyu.classes.user.Seed).find((function anonymous_2693(s) {
        
        return s.active&&_this.dist(_this.player.x-s.x,_this.player.y-s.y)<7;
      }))[0];
    },
    fiber$findSeed :function _trc_AI_f_findSeed(_thread) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=_this.all(Tonyu.classes.user.Seed).find((function anonymous_2693(s) {
        
        return s.active&&_this.dist(_this.player.x-s.x,_this.player.y-s.y)<7;
      }))[0];return;
      
      
      _thread.retVal=_this;return;
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"onAppear":{"nowait":false},"clearPath":{"nowait":false},"addManualPath":{"nowait":false},"pathAddable":{"nowait":false},"__getter__hasManualPath":{"nowait":true},"setTarget":{"nowait":false},"rect":{"nowait":false},"draw":{"nowait":true},"findSeed":{"nowait":false}}}
});
Tonyu.klass.define({
  fullName: 'user.Button',
  shortName: 'Button',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: {
    main :function _trc_Button_main() {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      
      //$LASTPOS=2000414;//user.Button:414
      while (true) {
        //$LASTPOS=2000432;//user.Button:432
        if (! _this.disabled&&(_this.getkey(1)||Tonyu.globals.$touches[0].touched)) {
          //$LASTPOS=2000496;//user.Button:496
          if (_this.inRect({x: Tonyu.globals.$mouseX,y: Tonyu.globals.$mouseY})) {
            //$LASTPOS=2000543;//user.Button:543
            _this.clicked=_this.getkey(1)||Tonyu.globals.$touches[0].touched;
            
          }
          //$LASTPOS=2000603;//user.Button:603
          if (_this.clicked==1) {
            //$LASTPOS=2000633;//user.Button:633
            Tonyu.classes.user.Button.last=_this;
            //$LASTPOS=2000663;//user.Button:663
            if (_this.onClick) {
              //$LASTPOS=2000676;//user.Button:676
              _this.onClick();
            }
            
          }
          
        } else {
          //$LASTPOS=2000718;//user.Button:718
          _this.clicked=0;
          
        }
        //$LASTPOS=2000739;//user.Button:739
        _this.update();
        
      }
    },
    fiber$main :function _trc_Button_f_main(_thread) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.enter(function _trc_Button_ent_main(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=2000414;//user.Button:414
          case 1:
            //$LASTPOS=2000432;//user.Button:432
            if (! _this.disabled&&(_this.getkey(1)||Tonyu.globals.$touches[0].touched)) {
              //$LASTPOS=2000496;//user.Button:496
              if (_this.inRect({x: Tonyu.globals.$mouseX,y: Tonyu.globals.$mouseY})) {
                //$LASTPOS=2000543;//user.Button:543
                _this.clicked=_this.getkey(1)||Tonyu.globals.$touches[0].touched;
                
              }
              //$LASTPOS=2000603;//user.Button:603
              if (_this.clicked==1) {
                //$LASTPOS=2000633;//user.Button:633
                Tonyu.classes.user.Button.last=_this;
                //$LASTPOS=2000663;//user.Button:663
                if (_this.onClick) {
                  //$LASTPOS=2000676;//user.Button:676
                  _this.onClick();
                }
                
              }
              
            } else {
              //$LASTPOS=2000718;//user.Button:718
              _this.clicked=0;
              
            }
            //$LASTPOS=2000739;//user.Button:739
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
    initialize :function _trc_Button_initialize(options) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      
      //$LASTPOS=2000101;//user.Button:101
      Tonyu.classes.kernel.Actor.apply( _this, [options]);
      //$LASTPOS=2000121;//user.Button:121
      _this.fillStyle=_this.fillStyle||"rgb(179,255,142)";
      //$LASTPOS=2000166;//user.Button:166
      _this.strokeStyle=_this.strokeStyle||"black";
      //$LASTPOS=2000204;//user.Button:204
      _this.clickedStyle=_this.clickedStyle||"white";
      //$LASTPOS=2000244;//user.Button:244
      _this.disabledStrokeStyle=_this.disabledStrokeStyle||"#ddd";
      //$LASTPOS=2000297;//user.Button:297
      _this.padding=_this.padding||5;
      //$LASTPOS=2000324;//user.Button:324
      _this.width=_this.width||Tonyu.globals.$screenWidth-100;
      //$LASTPOS=2000363;//user.Button:363
      _this.height=_this.height||50;
      //$LASTPOS=2000390;//user.Button:390
      _this.left=_this.left||50;
    },
    inRect :function _trc_Button_inRect(p) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      
      return p.x>=_this.left&&p.x<=_this.left+_this.width&&p.y>=_this.top&&p.y<=_this.top+_this.height;
    },
    fiber$inRect :function _trc_Button_f_inRect(_thread,p) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=p.x>=_this.left&&p.x<=_this.left+_this.width&&p.y>=_this.top&&p.y<=_this.top+_this.height;return;
      
      
      _thread.retVal=_this;return;
    },
    draw :function _trc_Button_draw(c) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      var size;
      var f;
      var r;
      
      //$LASTPOS=2000853;//user.Button:853
      c.fillStyle=_this.fillStyle||"gray";
      //$LASTPOS=2000890;//user.Button:890
      c.strokeStyle=_this.strokeStyle||"black";
      //$LASTPOS=2000932;//user.Button:932
      if (_this.disabled) {
        //$LASTPOS=2000946;//user.Button:946
        c.strokeStyle=_this.disabledStrokeStyle;
      }
      //$LASTPOS=2000985;//user.Button:985
      c.fillRect(_this.left,_this.top,_this.width,_this.height);
      //$LASTPOS=2001027;//user.Button:1027
      c.strokeRect(_this.left,_this.top,_this.width,_this.height);
      //$LASTPOS=2001071;//user.Button:1071
      size = _this.height-_this.padding*2;
      //$LASTPOS=2001102;//user.Button:1102
      f = c.font.replace(/^[0-9]+px /,"");
      //$LASTPOS=2001145;//user.Button:1145
      c.font=size+"px "+f;
      //$LASTPOS=2001183;//user.Button:1183
      c.textBaseline="top";
      //$LASTPOS=2001209;//user.Button:1209
      c.fillStyle=_this.clicked?_this.clickedStyle:_this.disabled?_this.disabledStrokeStyle:_this.strokeStyle;
      //$LASTPOS=2001293;//user.Button:1293
      r = c.measureText(_this.text);
      //$LASTPOS=2001324;//user.Button:1324
      c.fillText(_this.text,_this.left+_this.width/2-r.width/2,_this.top+_this.padding);
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"inRect":{"nowait":false},"draw":{"nowait":true}}}
});
Tonyu.klass.define({
  fullName: 'user.Main',
  shortName: 'Main',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: {
    main :function _trc_Main_main() {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      var st;
      var _it_32;
      
      //$LASTPOS=3000070;//user.Main:70
      Tonyu.globals.$Screen.setBGColor("black");
      //$LASTPOS=3000099;//user.Main:99
      Tonyu.globals.$sur=[{x: 0,y: - 1},{x: 1,y: - 1},{x: 1,y: 0},{x: 1,y: 1},{x: 0,y: 1},{x: - 1,y: 1},{x: - 1,y: 0},{x: - 1,y: - 1}];
      //$LASTPOS=3000194;//user.Main:194
      Tonyu.globals.$filling=null;
      //$LASTPOS=3000209;//user.Main:209
      Tonyu.globals.$m=_this.m=new Tonyu.classes.user.Matrix({row: 32,col: 24,cols: ["black","cyan","#900","#088","#050","#880","#059","#392","#808","#850","#006"]});
      //$LASTPOS=3000334;//user.Main:334
      _this.m.scores=[0,0,0,0,0,0,0,0,0];
      //$LASTPOS=3000364;//user.Main:364
      Tonyu.globals.$Screen.resize(Tonyu.globals.$m.col*16,Tonyu.globals.$m.row*16+32);
      //$LASTPOS=3000406;//user.Main:406
      _this.m.on("set",(function anonymous_418(e) {
        var id;
        
        //$LASTPOS=3000428;//user.Main:428
        id;
        //$LASTPOS=3000440;//user.Main:440
        if (typeof  (e.was)=="number") {
          //$LASTPOS=3000479;//user.Main:479
          id=e.was-2;
          //$LASTPOS=3000499;//user.Main:499
          _this.m.scores[id]--;
          //$LASTPOS=3000523;//user.Main:523
          _this.m.sendEvent("scoreChanged",{id: id,score: _this.m.scores[id]});
          
        }
        //$LASTPOS=3000586;//user.Main:586
        if (typeof  (e.c)=="number") {
          //$LASTPOS=3000623;//user.Main:623
          id=e.c-2;
          //$LASTPOS=3000641;//user.Main:641
          _this.m.scores[id]++;
          //$LASTPOS=3000665;//user.Main:665
          _this.m.sendEvent("scoreChanged",{id: id,score: _this.m.scores[id]});
          
        }
        //$LASTPOS=3000728;//user.Main:728
        _this.panel.setFillStyle(_this.m.cols[e.c]);
        //$LASTPOS=3000765;//user.Main:765
        _this.panel.fillRect(e.x*16,e.y*16,16,16);
      }));
      //$LASTPOS=3000805;//user.Main:805
      Tonyu.globals.$seed=new Tonyu.classes.user.Matrix({row: Tonyu.globals.$m.row,col: Tonyu.globals.$m.col});
      //$LASTPOS=3000846;//user.Main:846
      _this.panel=new Tonyu.classes.kernel.Panel({x: Tonyu.globals.$screenWidth/2,y: Tonyu.globals.$screenHeight/2});
      //$LASTPOS=3000899;//user.Main:899
      _this.panel.setPanel(Tonyu.globals.$screenWidth,Tonyu.globals.$screenHeight);
      //$LASTPOS=3000943;//user.Main:943
      _this.panel.zOrder=10;
      //$LASTPOS=3000961;//user.Main:961
      //$LASTPOS=3000966;//user.Main:966
      _this.i=0;
      while(_this.i<_this.m.row) {
        {
          //$LASTPOS=3000989;//user.Main:989
          //$LASTPOS=3000994;//user.Main:994
          _this.j=0;
          while(_this.j<_this.m.col) {
            {
              //$LASTPOS=3001021;//user.Main:1021
              _this.m.set(_this.j,_this.i,(_this.i*_this.j==0||(_this.m.row-1-_this.i)*(_this.m.col-1-_this.j)==0)?1:0);
            }
            _this.j++;
          }
          //$LASTPOS=3001088;//user.Main:1088
          _this.update();
        }
        _this.i++;
      }
      //$LASTPOS=3001100;//user.Main:1100
      //$LASTPOS=3001105;//user.Main:1105
      _this.i=0;
      while(_this.i<Tonyu.globals.$gameBalance.seeds) {
        {
          //$LASTPOS=3001143;//user.Main:1143
          _this.sx=_this.rnd(Tonyu.globals.$m.col-2)+1;
          //$LASTPOS=3001162;//user.Main:1162
          _this.sy=_this.rnd(Tonyu.globals.$m.row-2)+1;
          //$LASTPOS=3001186;//user.Main:1186
          if (! Tonyu.globals.$seed.get(_this.sx,_this.sy)) {
            //$LASTPOS=3001219;//user.Main:1219
            Tonyu.globals.$seed.set(_this.sx,_this.sy,new Tonyu.classes.user.Seed({x: _this.sx,y: _this.sy}));
            
          } else {
            //$LASTPOS=3001278;//user.Main:1278
            _this.i--;
            
          }
        }
        _this.i++;
      }
      //$LASTPOS=3001292;//user.Main:1292
      //$LASTPOS=3001297;//user.Main:1297
      _this.i=0;
      while(_this.i<Tonyu.globals.$gameBalance.players) {
        {
          //$LASTPOS=3001337;//user.Main:1337
          _this.setPlayer(_this.i);
        }
        _this.i++;
      }
      //$LASTPOS=3001354;//user.Main:1354
      _this.timer=new Tonyu.classes.kernel.Actor({x: 320,y: Tonyu.globals.$screenHeight-16,text: "Time :"+60});
      //$LASTPOS=3001415;//user.Main:1415
      //$LASTPOS=3001420;//user.Main:1420
      _this.time=Tonyu.globals.$gameBalance.time*30;
      while(_this.time>0) {
        {
          //$LASTPOS=3001471;//user.Main:1471
          if (_this.all(Tonyu.classes.user.Player).length<2) {
            break;
            
          }
          //$LASTPOS=3001508;//user.Main:1508
          _this.timer.text="Time: "+_this.floor(_this.time/30);
          //$LASTPOS=3001572;//user.Main:1572
          if (Tonyu.globals.$filling) {
            //$LASTPOS=3001586;//user.Main:1586
            _this.time++;
          }
          //$LASTPOS=3001598;//user.Main:1598
          _this.update();
        }
        _this.time--;
      }
      //$LASTPOS=3001610;//user.Main:1610
      _this.all(Tonyu.classes.user.Player).die();
      //$LASTPOS=3001629;//user.Main:1629
      _it_32=Tonyu.iterator(_this.all(Tonyu.classes.user.Status),1);
      while(_it_32.next()) {
        st=_it_32[0];
        
        //$LASTPOS=3001657;//user.Main:1657
        st.sendEvent("result");
      }
      //$LASTPOS=3001684;//user.Main:1684
      _this.updateEx(30);
      //$LASTPOS=3001698;//user.Main:1698
      new Tonyu.classes.kernel.Actor({text: "Touch/Space to replay",x: Tonyu.globals.$screenWidth/2,y: 300});
      //$LASTPOS=3001763;//user.Main:1763
      while (! Tonyu.globals.$touches[0].touched&&_this.getkey(32)==0) {
        //$LASTPOS=3001807;//user.Main:1807
        _this.update();
      }
      //$LASTPOS=3001817;//user.Main:1817
      _this.loadPage(Tonyu.classes.user.Title);
    },
    fiber$main :function _trc_Main_f_main(_thread) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var st;
      var _it_32;
      
      //$LASTPOS=3000070;//user.Main:70
      Tonyu.globals.$Screen.setBGColor("black");
      //$LASTPOS=3000099;//user.Main:99
      Tonyu.globals.$sur=[{x: 0,y: - 1},{x: 1,y: - 1},{x: 1,y: 0},{x: 1,y: 1},{x: 0,y: 1},{x: - 1,y: 1},{x: - 1,y: 0},{x: - 1,y: - 1}];
      //$LASTPOS=3000194;//user.Main:194
      Tonyu.globals.$filling=null;
      //$LASTPOS=3000209;//user.Main:209
      Tonyu.globals.$m=_this.m=new Tonyu.classes.user.Matrix({row: 32,col: 24,cols: ["black","cyan","#900","#088","#050","#880","#059","#392","#808","#850","#006"]});
      //$LASTPOS=3000334;//user.Main:334
      _this.m.scores=[0,0,0,0,0,0,0,0,0];
      //$LASTPOS=3000364;//user.Main:364
      Tonyu.globals.$Screen.resize(Tonyu.globals.$m.col*16,Tonyu.globals.$m.row*16+32);
      //$LASTPOS=3000406;//user.Main:406
      _this.m.on("set",(function anonymous_418(e) {
        var id;
        
        //$LASTPOS=3000428;//user.Main:428
        id;
        //$LASTPOS=3000440;//user.Main:440
        if (typeof  (e.was)=="number") {
          //$LASTPOS=3000479;//user.Main:479
          id=e.was-2;
          //$LASTPOS=3000499;//user.Main:499
          _this.m.scores[id]--;
          //$LASTPOS=3000523;//user.Main:523
          _this.m.sendEvent("scoreChanged",{id: id,score: _this.m.scores[id]});
          
        }
        //$LASTPOS=3000586;//user.Main:586
        if (typeof  (e.c)=="number") {
          //$LASTPOS=3000623;//user.Main:623
          id=e.c-2;
          //$LASTPOS=3000641;//user.Main:641
          _this.m.scores[id]++;
          //$LASTPOS=3000665;//user.Main:665
          _this.m.sendEvent("scoreChanged",{id: id,score: _this.m.scores[id]});
          
        }
        //$LASTPOS=3000728;//user.Main:728
        _this.panel.setFillStyle(_this.m.cols[e.c]);
        //$LASTPOS=3000765;//user.Main:765
        _this.panel.fillRect(e.x*16,e.y*16,16,16);
      }));
      //$LASTPOS=3000805;//user.Main:805
      Tonyu.globals.$seed=new Tonyu.classes.user.Matrix({row: Tonyu.globals.$m.row,col: Tonyu.globals.$m.col});
      //$LASTPOS=3000846;//user.Main:846
      _this.panel=new Tonyu.classes.kernel.Panel({x: Tonyu.globals.$screenWidth/2,y: Tonyu.globals.$screenHeight/2});
      //$LASTPOS=3000899;//user.Main:899
      _this.panel.setPanel(Tonyu.globals.$screenWidth,Tonyu.globals.$screenHeight);
      //$LASTPOS=3000943;//user.Main:943
      _this.panel.zOrder=10;
      
      _thread.enter(function _trc_Main_ent_main(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=3000961;//user.Main:961
            //$LASTPOS=3000966;//user.Main:966
            _this.i=0;;
          case 1:
            if (!(_this.i<_this.m.row)) { __pc=3; break; }
            //$LASTPOS=3000989;//user.Main:989
            //$LASTPOS=3000994;//user.Main:994
            _this.j=0;
            while(_this.j<_this.m.col) {
              {
                //$LASTPOS=3001021;//user.Main:1021
                _this.m.set(_this.j,_this.i,(_this.i*_this.j==0||(_this.m.row-1-_this.i)*(_this.m.col-1-_this.j)==0)?1:0);
              }
              _this.j++;
            }
            //$LASTPOS=3001088;//user.Main:1088
            _this.fiber$update(_thread);
            __pc=2;return;
          case 2:
            
            _this.i++;
            __pc=1;break;
          case 3:
            
            //$LASTPOS=3001100;//user.Main:1100
            //$LASTPOS=3001105;//user.Main:1105
            _this.i=0;
            while(_this.i<Tonyu.globals.$gameBalance.seeds) {
              {
                //$LASTPOS=3001143;//user.Main:1143
                _this.sx=_this.rnd(Tonyu.globals.$m.col-2)+1;
                //$LASTPOS=3001162;//user.Main:1162
                _this.sy=_this.rnd(Tonyu.globals.$m.row-2)+1;
                //$LASTPOS=3001186;//user.Main:1186
                if (! Tonyu.globals.$seed.get(_this.sx,_this.sy)) {
                  //$LASTPOS=3001219;//user.Main:1219
                  Tonyu.globals.$seed.set(_this.sx,_this.sy,new Tonyu.classes.user.Seed({x: _this.sx,y: _this.sy}));
                  
                } else {
                  //$LASTPOS=3001278;//user.Main:1278
                  _this.i--;
                  
                }
              }
              _this.i++;
            }
            //$LASTPOS=3001292;//user.Main:1292
            //$LASTPOS=3001297;//user.Main:1297
            _this.i=0;;
          case 4:
            if (!(_this.i<Tonyu.globals.$gameBalance.players)) { __pc=6; break; }
            //$LASTPOS=3001337;//user.Main:1337
            _this.fiber$setPlayer(_thread, _this.i);
            __pc=5;return;
          case 5:
            
            _this.i++;
            __pc=4;break;
          case 6:
            
            //$LASTPOS=3001354;//user.Main:1354
            _this.timer=new Tonyu.classes.kernel.Actor({x: 320,y: Tonyu.globals.$screenHeight-16,text: "Time :"+60});
            //$LASTPOS=3001415;//user.Main:1415
            //$LASTPOS=3001420;//user.Main:1420
            _this.time=Tonyu.globals.$gameBalance.time*30;;
          case 7:
            if (!(_this.time>0)) { __pc=10; break; }
            //$LASTPOS=3001471;//user.Main:1471
            if (!(_this.all(Tonyu.classes.user.Player).length<2)) { __pc=8; break; }
            __pc=10; break;
            
          case 8:
            
            //$LASTPOS=3001508;//user.Main:1508
            _this.timer.text="Time: "+_this.floor(_this.time/30);
            //$LASTPOS=3001572;//user.Main:1572
            if (Tonyu.globals.$filling) {
              //$LASTPOS=3001586;//user.Main:1586
              _this.time++;
            }
            //$LASTPOS=3001598;//user.Main:1598
            _this.fiber$update(_thread);
            __pc=9;return;
          case 9:
            
            _this.time--;
            __pc=7;break;
          case 10:
            
            //$LASTPOS=3001610;//user.Main:1610
            _this.all(Tonyu.classes.user.Player).die();
            //$LASTPOS=3001629;//user.Main:1629
            _it_32=Tonyu.iterator(_this.all(Tonyu.classes.user.Status),1);
            while(_it_32.next()) {
              st=_it_32[0];
              
              //$LASTPOS=3001657;//user.Main:1657
              st.sendEvent("result");
            }
            //$LASTPOS=3001684;//user.Main:1684
            _this.fiber$updateEx(_thread, 30);
            __pc=11;return;
          case 11:
            
            //$LASTPOS=3001698;//user.Main:1698
            new Tonyu.classes.kernel.Actor({text: "Touch/Space to replay",x: Tonyu.globals.$screenWidth/2,y: 300});
            //$LASTPOS=3001763;//user.Main:1763
          case 12:
            if (!(! Tonyu.globals.$touches[0].touched&&_this.getkey(32)==0)) { __pc=14; break; }
            //$LASTPOS=3001807;//user.Main:1807
            _this.fiber$update(_thread);
            __pc=13;return;
          case 13:
            
            __pc=12;break;
          case 14:
            
            //$LASTPOS=3001817;//user.Main:1817
            _this.fiber$loadPage(_thread, Tonyu.classes.user.Title);
            __pc=15;return;
          case 15:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    __getter__maxScore :function _trc_Main___getter__maxScore() {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      var ma;
      var e;
      var _it_37;
      
      //$LASTPOS=3001852;//user.Main:1852
      ma = 0;
      //$LASTPOS=3001866;//user.Main:1866
      _it_37=Tonyu.iterator(_this.m.scores,1);
      while(_it_37.next()) {
        e=_it_37[0];
        
        //$LASTPOS=3001900;//user.Main:1900
        if (e>ma) {
          //$LASTPOS=3001910;//user.Main:1910
          ma=e;
        }
        
      }
      return ma;
    },
    setPlayer :function _trc_Main_setPlayer(id) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      var xs;
      var ys;
      
      //$LASTPOS=3001961;//user.Main:1961
      xs = [3,_this.floor(Tonyu.globals.$m.col/2),Tonyu.globals.$m.col-3];
      //$LASTPOS=3002004;//user.Main:2004
      ys = [3,_this.floor(Tonyu.globals.$m.row/2),Tonyu.globals.$m.row-3];
      //$LASTPOS=3002047;//user.Main:2047
      if (id==0) {
        //$LASTPOS=3002069;//user.Main:2069
        _this.you=new Tonyu.classes.user.Player({x: xs[0],y: ys[0],id: id,zOrder: - 10,you: true});
        //$LASTPOS=3002133;//user.Main:2133
        new Tonyu.classes.user.Target({ai: _this.you.ai});
        
      } else {
        //$LASTPOS=3002167;//user.Main:2167
        if (id==1) {
          //$LASTPOS=3002188;//user.Main:2188
          new Tonyu.classes.user.Player({x: xs[2],y: ys[2],id: id,zOrder: - 10});
          
        } else {
          //$LASTPOS=3002242;//user.Main:2242
          if (id==2) {
            //$LASTPOS=3002263;//user.Main:2263
            new Tonyu.classes.user.Player({x: xs[0],y: ys[2],id: id,zOrder: - 10});
            
          } else {
            //$LASTPOS=3002317;//user.Main:2317
            if (id==3) {
              //$LASTPOS=3002338;//user.Main:2338
              new Tonyu.classes.user.Player({x: xs[2],y: ys[0],id: id,zOrder: - 10});
              
            } else {
              //$LASTPOS=3002392;//user.Main:2392
              if (id==4) {
                //$LASTPOS=3002413;//user.Main:2413
                new Tonyu.classes.user.Player({x: xs[1],y: ys[0],id: id,zOrder: - 10});
                
              } else {
                //$LASTPOS=3002467;//user.Main:2467
                if (id==5) {
                  //$LASTPOS=3002488;//user.Main:2488
                  new Tonyu.classes.user.Player({x: xs[1],y: ys[2],id: id,zOrder: - 10});
                  
                } else {
                  //$LASTPOS=3002542;//user.Main:2542
                  if (id==6) {
                    //$LASTPOS=3002563;//user.Main:2563
                    new Tonyu.classes.user.Player({x: xs[0],y: ys[1],id: id,zOrder: - 10});
                    
                  } else {
                    //$LASTPOS=3002617;//user.Main:2617
                    if (id==7) {
                      //$LASTPOS=3002638;//user.Main:2638
                      new Tonyu.classes.user.Player({x: xs[2],y: ys[1],id: id,zOrder: - 10});
                      
                    } else {
                      //$LASTPOS=3002692;//user.Main:2692
                      if (id==8) {
                        //$LASTPOS=3002713;//user.Main:2713
                        new Tonyu.classes.user.Player({x: xs[1],y: ys[1],id: id,zOrder: - 10});
                        
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    fiber$setPlayer :function _trc_Main_f_setPlayer(_thread,id) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var xs;
      var ys;
      
      //$LASTPOS=3001961;//user.Main:1961
      xs = [3,_this.floor(Tonyu.globals.$m.col/2),Tonyu.globals.$m.col-3];
      //$LASTPOS=3002004;//user.Main:2004
      ys = [3,_this.floor(Tonyu.globals.$m.row/2),Tonyu.globals.$m.row-3];
      //$LASTPOS=3002047;//user.Main:2047
      if (id==0) {
        //$LASTPOS=3002069;//user.Main:2069
        _this.you=new Tonyu.classes.user.Player({x: xs[0],y: ys[0],id: id,zOrder: - 10,you: true});
        //$LASTPOS=3002133;//user.Main:2133
        new Tonyu.classes.user.Target({ai: _this.you.ai});
        
      } else {
        //$LASTPOS=3002167;//user.Main:2167
        if (id==1) {
          //$LASTPOS=3002188;//user.Main:2188
          new Tonyu.classes.user.Player({x: xs[2],y: ys[2],id: id,zOrder: - 10});
          
        } else {
          //$LASTPOS=3002242;//user.Main:2242
          if (id==2) {
            //$LASTPOS=3002263;//user.Main:2263
            new Tonyu.classes.user.Player({x: xs[0],y: ys[2],id: id,zOrder: - 10});
            
          } else {
            //$LASTPOS=3002317;//user.Main:2317
            if (id==3) {
              //$LASTPOS=3002338;//user.Main:2338
              new Tonyu.classes.user.Player({x: xs[2],y: ys[0],id: id,zOrder: - 10});
              
            } else {
              //$LASTPOS=3002392;//user.Main:2392
              if (id==4) {
                //$LASTPOS=3002413;//user.Main:2413
                new Tonyu.classes.user.Player({x: xs[1],y: ys[0],id: id,zOrder: - 10});
                
              } else {
                //$LASTPOS=3002467;//user.Main:2467
                if (id==5) {
                  //$LASTPOS=3002488;//user.Main:2488
                  new Tonyu.classes.user.Player({x: xs[1],y: ys[2],id: id,zOrder: - 10});
                  
                } else {
                  //$LASTPOS=3002542;//user.Main:2542
                  if (id==6) {
                    //$LASTPOS=3002563;//user.Main:2563
                    new Tonyu.classes.user.Player({x: xs[0],y: ys[1],id: id,zOrder: - 10});
                    
                  } else {
                    //$LASTPOS=3002617;//user.Main:2617
                    if (id==7) {
                      //$LASTPOS=3002638;//user.Main:2638
                      new Tonyu.classes.user.Player({x: xs[2],y: ys[1],id: id,zOrder: - 10});
                      
                    } else {
                      //$LASTPOS=3002692;//user.Main:2692
                      if (id==8) {
                        //$LASTPOS=3002713;//user.Main:2713
                        new Tonyu.classes.user.Player({x: xs[1],y: ys[1],id: id,zOrder: - 10});
                        
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      
      _thread.retVal=_this;return;
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"__getter__maxScore":{"nowait":true},"setPlayer":{"nowait":false}}}
});
Tonyu.klass.define({
  fullName: 'user.Matrix',
  shortName: 'Matrix',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.TObject,
  includes: [Tonyu.classes.kernel.EventMod],
  methods: {
    main :function _trc_Matrix_main() {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      
    },
    fiber$main :function _trc_Matrix_f_main(_thread) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      
      _thread.retVal=_this;return;
    },
    initialize :function _trc_Matrix_initialize(_extend) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      
      //$LASTPOS=4000057;//user.Matrix:57
      _this.extend(_extend);
      //$LASTPOS=4000078;//user.Matrix:78
      _this.ary=[];
    },
    get :function _trc_Matrix_get(x,y) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      
      return _this.ary[y*_this.col+x];
    },
    fiber$get :function _trc_Matrix_f_get(_thread,x,y) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      _thread.retVal=_this.ary[y*_this.col+x];return;
      
      
      _thread.retVal=_this;return;
    },
    set :function _trc_Matrix_set(x,y,c) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      var was;
      
      //$LASTPOS=4000150;//user.Matrix:150
      was = _this.ary[y*_this.col+x];
      //$LASTPOS=4000176;//user.Matrix:176
      if (was===c) {
        return _this;
      }
      //$LASTPOS=4000201;//user.Matrix:201
      _this.ary[y*_this.col+x]=c;
      //$LASTPOS=4000221;//user.Matrix:221
      _this.sendEvent("set",{x: x,y: y,c: c,was: was});
    },
    fiber$set :function _trc_Matrix_f_set(_thread,x,y,c) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var was;
      
      //$LASTPOS=4000150;//user.Matrix:150
      was = _this.ary[y*_this.col+x];
      //$LASTPOS=4000176;//user.Matrix:176
      if (was===c) {
        _thread.retVal=_this;return;
        
      }
      //$LASTPOS=4000201;//user.Matrix:201
      _this.ary[y*_this.col+x]=c;
      //$LASTPOS=4000221;//user.Matrix:221
      _this.sendEvent("set",{x: x,y: y,c: c,was: was});
      
      _thread.retVal=_this;return;
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"new":{"nowait":false},"get":{"nowait":false},"set":{"nowait":false}}}
});
Tonyu.klass.define({
  fullName: 'user.Player',
  shortName: 'Player',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: {
    main :function _trc_Player_main() {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      
      //$LASTPOS=5000044;//user.Player:44
      new Tonyu.classes.user.Status({id: _this.id});
      //$LASTPOS=5000060;//user.Player:60
      _this.p=Tonyu.globals.$pat_mgoku+5+_this.id;
      //$LASTPOS=5000079;//user.Player:79
      _this.c=2+_this.id;
      //$LASTPOS=5000087;//user.Player:87
      _this.vx=(_this.x<10?1:- 1);
      //$LASTPOS=5000102;//user.Player:102
      _this.vy=0;
      //$LASTPOS=5000108;//user.Player:108
      _this.speedC=0;
      //$LASTPOS=5000118;//user.Player:118
      _this.speed=8;
      //$LASTPOS=5000127;//user.Player:127
      while (true) {
        //$LASTPOS=5000145;//user.Player:145
        if (! Tonyu.globals.$filling) {
          //$LASTPOS=5000170;//user.Player:170
          _this.move();
          
        } else {
          //$LASTPOS=5000199;//user.Player:199
          _this.pp=Tonyu.globals.$m.get(_this.x,_this.y);
          //$LASTPOS=5000223;//user.Player:223
          while (Tonyu.globals.$filling) {
            //$LASTPOS=5000263;//user.Player:263
            _this.update();
            
          }
          
        }
        //$LASTPOS=5000293;//user.Player:293
        if (_this.speedC>0) {
          //$LASTPOS=5000307;//user.Player:307
          _this.speedC--;
        } else {
          //$LASTPOS=5000326;//user.Player:326
          _this.speed=8;
        }
        //$LASTPOS=5000339;//user.Player:339
        _this.updateEx(_this.speed);
        
      }
    },
    fiber$main :function _trc_Player_f_main(_thread) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=5000044;//user.Player:44
      new Tonyu.classes.user.Status({id: _this.id});
      //$LASTPOS=5000060;//user.Player:60
      _this.p=Tonyu.globals.$pat_mgoku+5+_this.id;
      //$LASTPOS=5000079;//user.Player:79
      _this.c=2+_this.id;
      //$LASTPOS=5000087;//user.Player:87
      _this.vx=(_this.x<10?1:- 1);
      //$LASTPOS=5000102;//user.Player:102
      _this.vy=0;
      //$LASTPOS=5000108;//user.Player:108
      _this.speedC=0;
      //$LASTPOS=5000118;//user.Player:118
      _this.speed=8;
      
      _thread.enter(function _trc_Player_ent_main(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=5000127;//user.Player:127
          case 1:
            //$LASTPOS=5000145;//user.Player:145
            if (!(! Tonyu.globals.$filling)) { __pc=3; break; }
            //$LASTPOS=5000170;//user.Player:170
            _this.fiber$move(_thread);
            __pc=2;return;
          case 2:
            
            __pc=7;break;
          case 3:
            //$LASTPOS=5000199;//user.Player:199
            _this.pp=Tonyu.globals.$m.get(_this.x,_this.y);
            //$LASTPOS=5000223;//user.Player:223
          case 4:
            if (!(Tonyu.globals.$filling)) { __pc=6; break; }
            //$LASTPOS=5000263;//user.Player:263
            _this.fiber$update(_thread);
            __pc=5;return;
          case 5:
            
            __pc=4;break;
          case 6:
            
          case 7:
            
            //$LASTPOS=5000293;//user.Player:293
            if (_this.speedC>0) {
              //$LASTPOS=5000307;//user.Player:307
              _this.speedC--;
            } else {
              //$LASTPOS=5000326;//user.Player:326
              _this.speed=8;
            }
            //$LASTPOS=5000339;//user.Player:339
            _this.fiber$updateEx(_thread, _this.speed);
            __pc=8;return;
          case 8:
            
            __pc=1;break;
          case 9:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    onAppear :function _trc_Player_onAppear() {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      
      //$LASTPOS=5000018;//user.Player:18
      _this.ai=new Tonyu.classes.user.AI({player: _this});
    },
    fiber$onAppear :function _trc_Player_f_onAppear(_thread) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=5000018;//user.Player:18
      _this.ai=new Tonyu.classes.user.AI({player: _this});
      
      _thread.retVal=_this;return;
    },
    move :function _trc_Player_move() {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      var yt;
      
      //$LASTPOS=5000372;//user.Player:372
      _this.seed=Tonyu.globals.$seed.get(_this.x,_this.y);
      //$LASTPOS=5000397;//user.Player:397
      if (_this.seed instanceof Tonyu.classes.user.Seed&&_this.seed.active) {
        //$LASTPOS=5000440;//user.Player:440
        _this.seed.die();
        //$LASTPOS=5000460;//user.Player:460
        Tonyu.globals.$seed.set(_this.x,_this.y,0);
        //$LASTPOS=5000486;//user.Player:486
        _this.speedC=Tonyu.globals.$gameBalance.speedUpTime;
        //$LASTPOS=5000527;//user.Player:527
        if (_this.speed>2) {
          //$LASTPOS=5000540;//user.Player:540
          _this.speed/=2;
        }
        
      }
      //$LASTPOS=5000560;//user.Player:560
      if (! _this.usekey) {
        //$LASTPOS=5000583;//user.Player:583
        yt;
        //$LASTPOS=5000599;//user.Player:599
        if (_this.x==_this.tx) {
          //$LASTPOS=5000610;//user.Player:610
          yt=1;
        } else {
          //$LASTPOS=5000629;//user.Player:629
          if (_this.y==_this.ty) {
            //$LASTPOS=5000640;//user.Player:640
            yt=0;
          } else {
            //$LASTPOS=5000659;//user.Player:659
            if (_this.vx==0) {
              //$LASTPOS=5000670;//user.Player:670
              yt=1;
            } else {
              //$LASTPOS=5000689;//user.Player:689
              yt=0;
            }
          }
        }
        //$LASTPOS=5000703;//user.Player:703
        if (yt==0) {
          //$LASTPOS=5000728;//user.Player:728
          _this.vy=0;
          //$LASTPOS=5000746;//user.Player:746
          _this.vx=(_this.tx>_this.x?1:- 1);
          
        } else {
          //$LASTPOS=5000791;//user.Player:791
          _this.vx=0;
          //$LASTPOS=5000809;//user.Player:809
          _this.vy=(_this.ty>_this.y?1:- 1);
          
        }
        
      }
      //$LASTPOS=5000845;//user.Player:845
      if (_this.you) {
        //$LASTPOS=5000864;//user.Player:864
        if (_this.getkey("up")) {
          //$LASTPOS=5000883;//user.Player:883
          _this.usekey=true;
          //$LASTPOS=5000895;//user.Player:895
          _this.vx=0;
          //$LASTPOS=5000900;//user.Player:900
          _this.vy=- 1;
          
        }
        //$LASTPOS=5000916;//user.Player:916
        if (_this.getkey("down")) {
          //$LASTPOS=5000937;//user.Player:937
          _this.usekey=true;
          //$LASTPOS=5000949;//user.Player:949
          _this.vx=0;
          //$LASTPOS=5000954;//user.Player:954
          _this.vy=1;
          
        }
        //$LASTPOS=5000969;//user.Player:969
        if (_this.getkey("left")) {
          //$LASTPOS=5000990;//user.Player:990
          _this.usekey=true;
          //$LASTPOS=5001002;//user.Player:1002
          _this.vx=- 1;
          //$LASTPOS=5001008;//user.Player:1008
          _this.vy=0;
          
        }
        //$LASTPOS=5001023;//user.Player:1023
        if (_this.getkey("right")) {
          //$LASTPOS=5001045;//user.Player:1045
          _this.usekey=true;
          //$LASTPOS=5001057;//user.Player:1057
          _this.vx=1;
          //$LASTPOS=5001062;//user.Player:1062
          _this.vy=0;
          
        }
        
      }
      //$LASTPOS=5001079;//user.Player:1079
      if (Tonyu.globals.$m.get(_this.x+_this.vx,_this.y+_this.vy)!=1) {
        //$LASTPOS=5001115;//user.Player:1115
        _this.x+=_this.vx;
        //$LASTPOS=5001121;//user.Player:1121
        _this.y+=_this.vy;
        //$LASTPOS=5001136;//user.Player:1136
        if (_this.x==_this.tx&&_this.y==_this.ty) {
          //$LASTPOS=5001156;//user.Player:1156
          _this.sendEvent("arriveTarget");
        }
        
      }
      //$LASTPOS=5001193;//user.Player:1193
      if (Tonyu.globals.$m.get(_this.x,_this.y)!=_this.c) {
        //$LASTPOS=5001223;//user.Player:1223
        Tonyu.globals.$m.set(_this.x,_this.y,_this.c);
        //$LASTPOS=5001246;//user.Player:1246
        _this.check();
        
      }
    },
    fiber$move :function _trc_Player_f_move(_thread) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var yt;
      
      //$LASTPOS=5000372;//user.Player:372
      _this.seed=Tonyu.globals.$seed.get(_this.x,_this.y);
      //$LASTPOS=5000397;//user.Player:397
      if (_this.seed instanceof Tonyu.classes.user.Seed&&_this.seed.active) {
        //$LASTPOS=5000440;//user.Player:440
        _this.seed.die();
        //$LASTPOS=5000460;//user.Player:460
        Tonyu.globals.$seed.set(_this.x,_this.y,0);
        //$LASTPOS=5000486;//user.Player:486
        _this.speedC=Tonyu.globals.$gameBalance.speedUpTime;
        //$LASTPOS=5000527;//user.Player:527
        if (_this.speed>2) {
          //$LASTPOS=5000540;//user.Player:540
          _this.speed/=2;
        }
        
      }
      //$LASTPOS=5000560;//user.Player:560
      if (! _this.usekey) {
        //$LASTPOS=5000583;//user.Player:583
        yt;
        //$LASTPOS=5000599;//user.Player:599
        if (_this.x==_this.tx) {
          //$LASTPOS=5000610;//user.Player:610
          yt=1;
        } else {
          //$LASTPOS=5000629;//user.Player:629
          if (_this.y==_this.ty) {
            //$LASTPOS=5000640;//user.Player:640
            yt=0;
          } else {
            //$LASTPOS=5000659;//user.Player:659
            if (_this.vx==0) {
              //$LASTPOS=5000670;//user.Player:670
              yt=1;
            } else {
              //$LASTPOS=5000689;//user.Player:689
              yt=0;
            }
          }
        }
        //$LASTPOS=5000703;//user.Player:703
        if (yt==0) {
          //$LASTPOS=5000728;//user.Player:728
          _this.vy=0;
          //$LASTPOS=5000746;//user.Player:746
          _this.vx=(_this.tx>_this.x?1:- 1);
          
        } else {
          //$LASTPOS=5000791;//user.Player:791
          _this.vx=0;
          //$LASTPOS=5000809;//user.Player:809
          _this.vy=(_this.ty>_this.y?1:- 1);
          
        }
        
      }
      //$LASTPOS=5000845;//user.Player:845
      if (_this.you) {
        //$LASTPOS=5000864;//user.Player:864
        if (_this.getkey("up")) {
          //$LASTPOS=5000883;//user.Player:883
          _this.usekey=true;
          //$LASTPOS=5000895;//user.Player:895
          _this.vx=0;
          //$LASTPOS=5000900;//user.Player:900
          _this.vy=- 1;
          
        }
        //$LASTPOS=5000916;//user.Player:916
        if (_this.getkey("down")) {
          //$LASTPOS=5000937;//user.Player:937
          _this.usekey=true;
          //$LASTPOS=5000949;//user.Player:949
          _this.vx=0;
          //$LASTPOS=5000954;//user.Player:954
          _this.vy=1;
          
        }
        //$LASTPOS=5000969;//user.Player:969
        if (_this.getkey("left")) {
          //$LASTPOS=5000990;//user.Player:990
          _this.usekey=true;
          //$LASTPOS=5001002;//user.Player:1002
          _this.vx=- 1;
          //$LASTPOS=5001008;//user.Player:1008
          _this.vy=0;
          
        }
        //$LASTPOS=5001023;//user.Player:1023
        if (_this.getkey("right")) {
          //$LASTPOS=5001045;//user.Player:1045
          _this.usekey=true;
          //$LASTPOS=5001057;//user.Player:1057
          _this.vx=1;
          //$LASTPOS=5001062;//user.Player:1062
          _this.vy=0;
          
        }
        
      }
      //$LASTPOS=5001079;//user.Player:1079
      if (Tonyu.globals.$m.get(_this.x+_this.vx,_this.y+_this.vy)!=1) {
        //$LASTPOS=5001115;//user.Player:1115
        _this.x+=_this.vx;
        //$LASTPOS=5001121;//user.Player:1121
        _this.y+=_this.vy;
        //$LASTPOS=5001136;//user.Player:1136
        if (_this.x==_this.tx&&_this.y==_this.ty) {
          //$LASTPOS=5001156;//user.Player:1156
          _this.sendEvent("arriveTarget");
        }
        
      }
      
      _thread.enter(function _trc_Player_ent_move(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=5001193;//user.Player:1193
            if (!(Tonyu.globals.$m.get(_this.x,_this.y)!=_this.c)) { __pc=2; break; }
            //$LASTPOS=5001223;//user.Player:1223
            Tonyu.globals.$m.set(_this.x,_this.y,_this.c);
            //$LASTPOS=5001246;//user.Player:1246
            _this.fiber$check(_thread);
            __pc=1;return;
          case 1:
            
          case 2:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    __getter__tx :function _trc_Player___getter__tx() {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      
      //$LASTPOS=5001278;//user.Player:1278
      if (_this.ai.queue.length==0) {
        return _this.x;
      }
      return _this.ai.queue[0].x;
    },
    __getter__ty :function _trc_Player___getter__ty() {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      
      //$LASTPOS=5001350;//user.Player:1350
      if (_this.ai.queue.length==0) {
        return _this.x;
      }
      return _this.ai.queue[0].y;
    },
    check :function _trc_Player_check() {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      var sur;
      var putmap;
      var i;
      var orig;
      var prevPut;
      var cnt;
      var mat;
      var failc;
      var fuefla;
      var buf;
      var succ;
      
      //$LASTPOS=5001428;//user.Player:1428
      sur = Tonyu.globals.$sur;
      //$LASTPOS=5001446;//user.Player:1446
      putmap = [];
      //$LASTPOS=5001465;//user.Player:1465
      i;orig;
      //$LASTPOS=5001481;//user.Player:1481
      //$LASTPOS=5001486;//user.Player:1486
      i=0;
      while(i<8) {
        {
          //$LASTPOS=5001509;//user.Player:1509
          if (_this.isSep(_this.x+sur[i].x,_this.y+sur[i].y)) {
            break;
            
            
          }
        }
        i++;
      }
      //$LASTPOS=5001585;//user.Player:1585
      if (i==8) {
        return _this;
      }
      //$LASTPOS=5001621;//user.Player:1621
      orig=i;
      //$LASTPOS=5001633;//user.Player:1633
      i=(i+1)%8;
      //$LASTPOS=5001648;//user.Player:1648
      prevPut = false;cnt = 0;
      //$LASTPOS=5001677;//user.Player:1677
      while (i!=orig) {
        //$LASTPOS=5001702;//user.Player:1702
        if (! _this.isSep(_this.x+sur[i].x,_this.y+sur[i].y)) {
          //$LASTPOS=5001752;//user.Player:1752
          if (! prevPut) {
            //$LASTPOS=5001784;//user.Player:1784
            cnt++;
            
          }
          //$LASTPOS=5001817;//user.Player:1817
          putmap[i]=cnt;
          //$LASTPOS=5001844;//user.Player:1844
          prevPut=true;
          
        } else {
          //$LASTPOS=5001887;//user.Player:1887
          prevPut=false;
          
        }
        //$LASTPOS=5001920;//user.Player:1920
        i=(i+1)%8;
        
      }
      //$LASTPOS=5001943;//user.Player:1943
      if (cnt<2) {
        return _this;
      }
      //$LASTPOS=5001966;//user.Player:1966
      mat = new Tonyu.classes.user.Matrix({row: Tonyu.globals.$m.row,col: Tonyu.globals.$m.col});
      //$LASTPOS=5002014;//user.Player:2014
      failc = cnt;
      //$LASTPOS=5002033;//user.Player:2033
      fuefla = [];
      //$LASTPOS=5002052;//user.Player:2052
      mat.on("set",(function anonymous_2066(e) {
        
        //$LASTPOS=5002081;//user.Player:2081
        if (e.was&&e.was!=e.c) {
          //$LASTPOS=5002120;//user.Player:2120
          _this.killSensor(e.was);
          //$LASTPOS=5002151;//user.Player:2151
          _this.killSensor(e.c);
          //$LASTPOS=5002180;//user.Player:2180
          failc-=2;
          return _this;
          
        }
        //$LASTPOS=5002228;//user.Player:2228
        if (_this.isSep(e.x,e.y)) {
          return _this;
        }
        //$LASTPOS=5002264;//user.Player:2264
        fuefla[e.c]=true;
        //$LASTPOS=5002290;//user.Player:2290
        e.owner=_this;
        //$LASTPOS=5002312;//user.Player:2312
        e.mat=mat;
        //$LASTPOS=5002331;//user.Player:2331
        new Tonyu.classes.user.Sensor(e);
      }));
      //$LASTPOS=5002357;//user.Player:2357
      buf = "";
      //$LASTPOS=5002373;//user.Player:2373
      //$LASTPOS=5002378;//user.Player:2378
      i=0;
      while(i<8) {
        {
          //$LASTPOS=5002404;//user.Player:2404
          if (putmap[i]) {
            //$LASTPOS=5002433;//user.Player:2433
            mat.set(_this.x+sur[i].x,_this.y+sur[i].y,putmap[i]);
            
          }
        }
        i++;
      }
      //$LASTPOS=5002579;//user.Player:2579
      _this.update();
      //$LASTPOS=5002593;//user.Player:2593
      succ = false;
      //$LASTPOS=5002613;//user.Player:2613
      while (failc>0&&! succ) {
        //$LASTPOS=5002647;//user.Player:2647
        //$LASTPOS=5002652;//user.Player:2652
        i=1;
        while(i<=cnt) {
          {
            //$LASTPOS=5002685;//user.Player:2685
            fuefla[i]=false;
          }
          i++;
        }
        //$LASTPOS=5002720;//user.Player:2720
        _this.update();
        //$LASTPOS=5002738;//user.Player:2738
        if (failc==0) {
          break;
          
        }
        //$LASTPOS=5002767;//user.Player:2767
        //$LASTPOS=5002772;//user.Player:2772
        i=1;
        while(i<=cnt) {
          {
            //$LASTPOS=5002805;//user.Player:2805
            if (! fuefla[i]) {
              //$LASTPOS=5002839;//user.Player:2839
              _this.fill(i);
              //$LASTPOS=5002880;//user.Player:2880
              succ=true;
              break;
              
              
            }
          }
          i++;
        }
        
      }
      //$LASTPOS=5002948;//user.Player:2948
      _this.killAllSensors();
    },
    fiber$check :function _trc_Player_f_check(_thread) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var sur;
      var putmap;
      var i;
      var orig;
      var prevPut;
      var cnt;
      var mat;
      var failc;
      var fuefla;
      var buf;
      var succ;
      
      //$LASTPOS=5001428;//user.Player:1428
      sur = Tonyu.globals.$sur;
      //$LASTPOS=5001446;//user.Player:1446
      putmap = [];
      //$LASTPOS=5001465;//user.Player:1465
      i;orig;
      //$LASTPOS=5001481;//user.Player:1481
      //$LASTPOS=5001486;//user.Player:1486
      i=0;
      while(i<8) {
        {
          //$LASTPOS=5001509;//user.Player:1509
          if (_this.isSep(_this.x+sur[i].x,_this.y+sur[i].y)) {
            break;
            
            
          }
        }
        i++;
      }
      //$LASTPOS=5001585;//user.Player:1585
      if (i==8) {
        _thread.retVal=_this;return;
        
      }
      //$LASTPOS=5001621;//user.Player:1621
      orig=i;
      //$LASTPOS=5001633;//user.Player:1633
      i=(i+1)%8;
      //$LASTPOS=5001648;//user.Player:1648
      prevPut = false;cnt = 0;
      
      _thread.enter(function _trc_Player_ent_check(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=5001677;//user.Player:1677
          case 1:
            if (!(i!=orig)) { __pc=2; break; }
            {
              //$LASTPOS=5001702;//user.Player:1702
              if (! _this.isSep(_this.x+sur[i].x,_this.y+sur[i].y)) {
                //$LASTPOS=5001752;//user.Player:1752
                if (! prevPut) {
                  //$LASTPOS=5001784;//user.Player:1784
                  cnt++;
                  
                }
                //$LASTPOS=5001817;//user.Player:1817
                putmap[i]=cnt;
                //$LASTPOS=5001844;//user.Player:1844
                prevPut=true;
                
              } else {
                //$LASTPOS=5001887;//user.Player:1887
                prevPut=false;
                
              }
              //$LASTPOS=5001920;//user.Player:1920
              i=(i+1)%8;
            }
            __pc=1;break;
          case 2:
            
            //$LASTPOS=5001943;//user.Player:1943
            if (!(cnt<2)) { __pc=3; break; }
            _thread.exit(_this);return;
          case 3:
            
            //$LASTPOS=5001966;//user.Player:1966
            mat = new Tonyu.classes.user.Matrix({row: Tonyu.globals.$m.row,col: Tonyu.globals.$m.col});
            //$LASTPOS=5002014;//user.Player:2014
            failc = cnt;
            //$LASTPOS=5002033;//user.Player:2033
            fuefla = [];
            //$LASTPOS=5002052;//user.Player:2052
            mat.on("set",(function anonymous_2066(e) {
              
              //$LASTPOS=5002081;//user.Player:2081
              if (e.was&&e.was!=e.c) {
                //$LASTPOS=5002120;//user.Player:2120
                _this.killSensor(e.was);
                //$LASTPOS=5002151;//user.Player:2151
                _this.killSensor(e.c);
                //$LASTPOS=5002180;//user.Player:2180
                failc-=2;
                return _this;
                
              }
              //$LASTPOS=5002228;//user.Player:2228
              if (_this.isSep(e.x,e.y)) {
                return _this;
              }
              //$LASTPOS=5002264;//user.Player:2264
              fuefla[e.c]=true;
              //$LASTPOS=5002290;//user.Player:2290
              e.owner=_this;
              //$LASTPOS=5002312;//user.Player:2312
              e.mat=mat;
              //$LASTPOS=5002331;//user.Player:2331
              new Tonyu.classes.user.Sensor(e);
            }));
            //$LASTPOS=5002357;//user.Player:2357
            buf = "";
            //$LASTPOS=5002373;//user.Player:2373
            //$LASTPOS=5002378;//user.Player:2378
            i=0;
            while(i<8) {
              {
                //$LASTPOS=5002404;//user.Player:2404
                if (putmap[i]) {
                  //$LASTPOS=5002433;//user.Player:2433
                  mat.set(_this.x+sur[i].x,_this.y+sur[i].y,putmap[i]);
                  
                }
              }
              i++;
            }
            //$LASTPOS=5002579;//user.Player:2579
            _this.fiber$update(_thread);
            __pc=4;return;
          case 4:
            
            //$LASTPOS=5002593;//user.Player:2593
            succ = false;
            //$LASTPOS=5002613;//user.Player:2613
          case 5:
            if (!(failc>0&&! succ)) { __pc=12; break; }
            //$LASTPOS=5002647;//user.Player:2647
            //$LASTPOS=5002652;//user.Player:2652
            i=1;
            while(i<=cnt) {
              {
                //$LASTPOS=5002685;//user.Player:2685
                fuefla[i]=false;
              }
              i++;
            }
            //$LASTPOS=5002720;//user.Player:2720
            _this.fiber$update(_thread);
            __pc=6;return;
          case 6:
            
            //$LASTPOS=5002738;//user.Player:2738
            if (!(failc==0)) { __pc=7; break; }
            __pc=12; break;
            
          case 7:
            
            //$LASTPOS=5002767;//user.Player:2767
            //$LASTPOS=5002772;//user.Player:2772
            i=1;;
          case 8:
            if (!(i<=cnt)) { __pc=11; break; }
            //$LASTPOS=5002805;//user.Player:2805
            if (!(! fuefla[i])) { __pc=10; break; }
            //$LASTPOS=5002839;//user.Player:2839
            _this.fiber$fill(_thread, i);
            __pc=9;return;
          case 9:
            
            //$LASTPOS=5002880;//user.Player:2880
            succ=true;
            __pc=11; break;
            
          case 10:
            
            i++;
            __pc=8;break;
          case 11:
            
            __pc=5;break;
          case 12:
            
            //$LASTPOS=5002948;//user.Player:2948
            _this.fiber$killAllSensors(_thread);
            __pc=13;return;
          case 13:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    killSensor :function _trc_Player_killSensor(idx) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      var s;
      
      //$LASTPOS=5002993;//user.Player:2993
      s = _this.all(Tonyu.classes.user.Sensor).find((function anonymous_3015(e) {
        
        return e.owner===_this&&e.c==idx;
      }));
      //$LASTPOS=5003063;//user.Player:3063
      s.die();
    },
    fiber$killSensor :function _trc_Player_f_killSensor(_thread,idx) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var s;
      
      //$LASTPOS=5002993;//user.Player:2993
      s = _this.all(Tonyu.classes.user.Sensor).find((function anonymous_3015(e) {
        
        return e.owner===_this&&e.c==idx;
      }));
      //$LASTPOS=5003063;//user.Player:3063
      s.die();
      
      _thread.retVal=_this;return;
    },
    killAllSensors :function _trc_Player_killAllSensors(except) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      var s;
      
      //$LASTPOS=5003106;//user.Player:3106
      s = _this.all(Tonyu.classes.user.Sensor).find((function anonymous_3128(e) {
        
        return e.owner===_this&&e.c!=except;
      }));
      //$LASTPOS=5003178;//user.Player:3178
      s.die();
    },
    fiber$killAllSensors :function _trc_Player_f_killAllSensors(_thread,except) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var s;
      
      //$LASTPOS=5003106;//user.Player:3106
      s = _this.all(Tonyu.classes.user.Sensor).find((function anonymous_3128(e) {
        
        return e.owner===_this&&e.c!=except;
      }));
      //$LASTPOS=5003178;//user.Player:3178
      s.die();
      
      _thread.retVal=_this;return;
    },
    fill :function _trc_Player_fill(i) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      var cnt;
      var e;
      var _it_61;
      var seed;
      
      //$LASTPOS=5003205;//user.Player:3205
      while (Tonyu.globals.$filling) {
        //$LASTPOS=5003221;//user.Player:3221
        _this.update();
      }
      //$LASTPOS=5003235;//user.Player:3235
      Tonyu.globals.$filling=_this;
      //$LASTPOS=5003254;//user.Player:3254
      _this.killAllSensors(i);
      //$LASTPOS=5003277;//user.Player:3277
      cnt = 0;
      //$LASTPOS=5003292;//user.Player:3292
      _it_61=Tonyu.iterator(_this.all(Tonyu.classes.user.Sensor).find((function anonymous_3322(e) {
        
        return e.owner===_this&&e.c==i;
      })),1);
      while(_it_61.next()) {
        e=_it_61[0];
        
        //$LASTPOS=5003387;//user.Player:3387
        Tonyu.globals.$m.set(e.x,e.y,_this.c);
        //$LASTPOS=5003414;//user.Player:3414
        _this.killEnemiesAt(e.x,e.y);
        //$LASTPOS=5003446;//user.Player:3446
        seed = Tonyu.globals.$seed.get(e.x,e.y);
        //$LASTPOS=5003483;//user.Player:3483
        if (seed) {
          //$LASTPOS=5003493;//user.Player:3493
          seed.active=true;
        }
        //$LASTPOS=5003519;//user.Player:3519
        if (cnt<20||cnt%2==0) {
          //$LASTPOS=5003543;//user.Player:3543
          _this.update();
        }
        //$LASTPOS=5003561;//user.Player:3561
        cnt++;
        
      }
      //$LASTPOS=5003578;//user.Player:3578
      Tonyu.globals.$filling=false;
    },
    fiber$fill :function _trc_Player_f_fill(_thread,i) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var cnt;
      var e;
      var _it_61;
      var seed;
      
      
      _thread.enter(function _trc_Player_ent_fill(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=5003205;//user.Player:3205
          case 1:
            if (!(Tonyu.globals.$filling)) { __pc=3; break; }
            //$LASTPOS=5003221;//user.Player:3221
            _this.fiber$update(_thread);
            __pc=2;return;
          case 2:
            
            __pc=1;break;
          case 3:
            
            //$LASTPOS=5003235;//user.Player:3235
            Tonyu.globals.$filling=_this;
            //$LASTPOS=5003254;//user.Player:3254
            _this.fiber$killAllSensors(_thread, i);
            __pc=4;return;
          case 4:
            
            //$LASTPOS=5003277;//user.Player:3277
            cnt = 0;
            //$LASTPOS=5003292;//user.Player:3292
            _it_61=Tonyu.iterator(_this.all(Tonyu.classes.user.Sensor).find((function anonymous_3322(e) {
              
              return e.owner===_this&&e.c==i;
            })),1);
          case 5:
            if (!(_it_61.next())) { __pc=9; break; }
            e=_it_61[0];
            
            //$LASTPOS=5003387;//user.Player:3387
            Tonyu.globals.$m.set(e.x,e.y,_this.c);
            //$LASTPOS=5003414;//user.Player:3414
            _this.fiber$killEnemiesAt(_thread, e.x, e.y);
            __pc=6;return;
          case 6:
            
            //$LASTPOS=5003446;//user.Player:3446
            seed = Tonyu.globals.$seed.get(e.x,e.y);
            //$LASTPOS=5003483;//user.Player:3483
            if (seed) {
              //$LASTPOS=5003493;//user.Player:3493
              seed.active=true;
            }
            //$LASTPOS=5003519;//user.Player:3519
            if (!(cnt<20||cnt%2==0)) { __pc=8; break; }
            //$LASTPOS=5003543;//user.Player:3543
            _this.fiber$update(_thread);
            __pc=7;return;
          case 7:
            
          case 8:
            
            //$LASTPOS=5003561;//user.Player:3561
            cnt++;
            __pc=5;break;
          case 9:
            
            //$LASTPOS=5003578;//user.Player:3578
            Tonyu.globals.$filling=false;
            _thread.exit(_this);return;
          }
        }
      });
    },
    killEnemiesAt :function _trc_Player_killEnemiesAt(x,y) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      
      //$LASTPOS=5003622;//user.Player:3622
      _this.all(Tonyu.classes.user.Player).find((function anonymous_3639(e) {
        
        return x==e.x&&y==e.y;
      })).die();
    },
    fiber$killEnemiesAt :function _trc_Player_f_killEnemiesAt(_thread,x,y) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=5003622;//user.Player:3622
      _this.all(Tonyu.classes.user.Player).find((function anonymous_3639(e) {
        
        return x==e.x&&y==e.y;
      })).die();
      
      _thread.retVal=_this;return;
    },
    isSep :function _trc_Player_isSep(x,y) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      var gc;
      
      //$LASTPOS=5003712;//user.Player:3712
      gc = Tonyu.globals.$m.get(x,y);
      return gc==_this.c;
    },
    fiber$isSep :function _trc_Player_f_isSep(_thread,x,y) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var gc;
      
      //$LASTPOS=5003712;//user.Player:3712
      gc = Tonyu.globals.$m.get(x,y);
      _thread.retVal=gc==_this.c;return;
      
      
      _thread.retVal=_this;return;
    },
    draw :function _trc_Player_draw(c) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      var sx;
      
      //$LASTPOS=5003779;//user.Player:3779
      sx = _this.x;
      //$LASTPOS=5003788;//user.Player:3788
      _this.sy=_this.y;
      //$LASTPOS=5003798;//user.Player:3798
      _this.x=_this.x*16+8;
      //$LASTPOS=5003807;//user.Player:3807
      _this.y=_this.y*16+8;
      //$LASTPOS=5003821;//user.Player:3821
      Tonyu.classes.kernel.Actor.prototype.draw.apply( _this, [c]);
      //$LASTPOS=5003840;//user.Player:3840
      _this.x=sx;
      //$LASTPOS=5003845;//user.Player:3845
      _this.y=_this.sy;
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"onAppear":{"nowait":false},"move":{"nowait":false},"__getter__tx":{"nowait":true},"__getter__ty":{"nowait":true},"check":{"nowait":false},"killSensor":{"nowait":false},"killAllSensors":{"nowait":false},"fill":{"nowait":false},"killEnemiesAt":{"nowait":false},"isSep":{"nowait":false},"draw":{"nowait":true}}}
});
Tonyu.klass.define({
  fullName: 'user.Seed',
  shortName: 'Seed',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: {
    main :function _trc_Seed_main() {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      
      //$LASTPOS=6000000;//user.Seed:0
      _this.i=0;
      //$LASTPOS=6000005;//user.Seed:5
      while (true) {
        //$LASTPOS=6000023;//user.Seed:23
        _this.i+=10;
        //$LASTPOS=6000034;//user.Seed:34
        _this.update();
        
      }
    },
    fiber$main :function _trc_Seed_f_main(_thread) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=6000000;//user.Seed:0
      _this.i=0;
      
      _thread.enter(function _trc_Seed_ent_main(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=6000005;//user.Seed:5
          case 1:
            //$LASTPOS=6000023;//user.Seed:23
            _this.i+=10;
            //$LASTPOS=6000034;//user.Seed:34
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
    draw :function _trc_Seed_draw(c) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      var sx;
      
      //$LASTPOS=6000061;//user.Seed:61
      sx = _this.x;
      //$LASTPOS=6000070;//user.Seed:70
      _this.sy=_this.y;
      //$LASTPOS=6000080;//user.Seed:80
      _this.x=_this.x*16+8;
      //$LASTPOS=6000089;//user.Seed:89
      _this.y=_this.y*16+8;
      //$LASTPOS=6000103;//user.Seed:103
      _this.p=Tonyu.globals.$pat_mgoku+1;
      //$LASTPOS=6000169;//user.Seed:169
      _this.alpha=_this.active?255:_this.floor(_this.sin(_this.i)*80)+80;
      //$LASTPOS=6000211;//user.Seed:211
      Tonyu.classes.kernel.Actor.prototype.draw.apply( _this, [c]);
      //$LASTPOS=6000230;//user.Seed:230
      _this.x=sx;
      //$LASTPOS=6000235;//user.Seed:235
      _this.y=_this.sy;
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"draw":{"nowait":true}}}
});
Tonyu.klass.define({
  fullName: 'user.Sensor',
  shortName: 'Sensor',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: {
    main :function _trc_Sensor_main() {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      
      //$LASTPOS=7000001;//user.Sensor:1
      _this.p=_this.owner.p;
      //$LASTPOS=7000012;//user.Sensor:12
      _this.alpha=128;
      //$LASTPOS=7000023;//user.Sensor:23
      _this.update();
      //$LASTPOS=7000033;//user.Sensor:33
      _this.sur=Tonyu.globals.$sur;
      //$LASTPOS=7000043;//user.Sensor:43
      //$LASTPOS=7000048;//user.Sensor:48
      _this.i=0;
      while(_this.i<8) {
        {
          //$LASTPOS=7000070;//user.Sensor:70
          _this.tx=_this.x+_this.sur[_this.i].x;
          //$LASTPOS=7000089;//user.Sensor:89
          _this.ty=_this.y+_this.sur[_this.i].y;
          //$LASTPOS=7000108;//user.Sensor:108
          if (_this.owner&&! _this.owner.isSep(_this.tx,_this.ty)) {
            //$LASTPOS=7000152;//user.Sensor:152
            _this.mat.set(_this.tx,_this.ty,_this.c);
            
          }
        }
        _this.i++;
      }
    },
    fiber$main :function _trc_Sensor_f_main(_thread) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=7000001;//user.Sensor:1
      _this.p=_this.owner.p;
      //$LASTPOS=7000012;//user.Sensor:12
      _this.alpha=128;
      
      _thread.enter(function _trc_Sensor_ent_main(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=7000023;//user.Sensor:23
            _this.fiber$update(_thread);
            __pc=1;return;
          case 1:
            
            //$LASTPOS=7000033;//user.Sensor:33
            _this.sur=Tonyu.globals.$sur;
            //$LASTPOS=7000043;//user.Sensor:43
            //$LASTPOS=7000048;//user.Sensor:48
            _this.i=0;
            while(_this.i<8) {
              {
                //$LASTPOS=7000070;//user.Sensor:70
                _this.tx=_this.x+_this.sur[_this.i].x;
                //$LASTPOS=7000089;//user.Sensor:89
                _this.ty=_this.y+_this.sur[_this.i].y;
                //$LASTPOS=7000108;//user.Sensor:108
                if (_this.owner&&! _this.owner.isSep(_this.tx,_this.ty)) {
                  //$LASTPOS=7000152;//user.Sensor:152
                  _this.mat.set(_this.tx,_this.ty,_this.c);
                  
                }
              }
              _this.i++;
            }
            _thread.exit(_this);return;
          }
        }
      });
    },
    draw :function _trc_Sensor_draw(c) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      var sx;
      
      //$LASTPOS=7000194;//user.Sensor:194
      sx = _this.x;
      //$LASTPOS=7000203;//user.Sensor:203
      _this.sy=_this.y;
      //$LASTPOS=7000213;//user.Sensor:213
      _this.x=_this.x*16+8;
      //$LASTPOS=7000222;//user.Sensor:222
      _this.y=_this.y*16+8;
      //$LASTPOS=7000236;//user.Sensor:236
      Tonyu.classes.kernel.Actor.prototype.draw.apply( _this, [c]);
      //$LASTPOS=7000255;//user.Sensor:255
      _this.x=sx;
      //$LASTPOS=7000260;//user.Sensor:260
      _this.y=_this.sy;
    },
    die :function _trc_Sensor_die() {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      
      //$LASTPOS=7000302;//user.Sensor:302
      _this.owner=null;
      //$LASTPOS=7000318;//user.Sensor:318
      Tonyu.classes.kernel.Actor.prototype.die.apply( _this, []);
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"draw":{"nowait":true},"die":{"nowait":true}}}
});
Tonyu.klass.define({
  fullName: 'user.Slider',
  shortName: 'Slider',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: {
    main :function _trc_Slider_main() {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      var idx;
      
      //$LASTPOS=8000000;//user.Slider:0
      _this.height=30;
      //$LASTPOS=8000011;//user.Slider:11
      while (true) {
        //$LASTPOS=8000029;//user.Slider:29
        if (Tonyu.globals.$touches[0].touched) {
          //$LASTPOS=8000064;//user.Slider:64
          if (Tonyu.globals.$mouseY>_this.y&&Tonyu.globals.$mouseY<_this.y+_this.height) {
            //$LASTPOS=8000113;//user.Slider:113
            idx = _this.floor((Tonyu.globals.$mouseX-_this.x)/_this.pitch);
            //$LASTPOS=8000162;//user.Slider:162
            if (idx>=0&&idx<_this.values.length) {
              //$LASTPOS=8000213;//user.Slider:213
              _this.value=_this.values[idx];
              
            }
            
          }
          
        }
        //$LASTPOS=8000266;//user.Slider:266
        _this.update();
        
      }
    },
    fiber$main :function _trc_Slider_f_main(_thread) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var idx;
      
      //$LASTPOS=8000000;//user.Slider:0
      _this.height=30;
      
      _thread.enter(function _trc_Slider_ent_main(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=8000011;//user.Slider:11
          case 1:
            //$LASTPOS=8000029;//user.Slider:29
            if (Tonyu.globals.$touches[0].touched) {
              //$LASTPOS=8000064;//user.Slider:64
              if (Tonyu.globals.$mouseY>_this.y&&Tonyu.globals.$mouseY<_this.y+_this.height) {
                //$LASTPOS=8000113;//user.Slider:113
                idx = _this.floor((Tonyu.globals.$mouseX-_this.x)/_this.pitch);
                //$LASTPOS=8000162;//user.Slider:162
                if (idx>=0&&idx<_this.values.length) {
                  //$LASTPOS=8000213;//user.Slider:213
                  _this.value=_this.values[idx];
                  
                }
                
              }
              
            }
            //$LASTPOS=8000266;//user.Slider:266
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
    draw :function _trc_Slider_draw(c) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      var i;
      var v;
      var _it_73;
      
      //$LASTPOS=8000294;//user.Slider:294
      c.strokeStyle="white";
      //$LASTPOS=8000321;//user.Slider:321
      c.fillStyle="white";
      //$LASTPOS=8000346;//user.Slider:346
      c.beginPath();
      //$LASTPOS=8000365;//user.Slider:365
      c.moveTo(_this.x,_this.y+10);
      //$LASTPOS=8000387;//user.Slider:387
      c.lineTo(_this.x+_this.width,_this.y+10);
      //$LASTPOS=8000415;//user.Slider:415
      c.stroke();
      //$LASTPOS=8000431;//user.Slider:431
      _it_73=Tonyu.iterator(_this.values,2);
      while(_it_73.next()) {
        i=_it_73[0];
        v=_it_73[1];
        
        //$LASTPOS=8000465;//user.Slider:465
        c.fillText(v,_this.x+i*_this.pitch,_this.y+25);
        //$LASTPOS=8000503;//user.Slider:503
        if (v==_this.value) {
          //$LASTPOS=8000531;//user.Slider:531
          c.fillRect(_this.x+i*_this.pitch,_this.y,10,20);
          
        }
        
      }
    },
    __getter__value :function _trc_Slider___getter__value() {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      
      return _this.obj[_this.name];
    },
    __setter__value :function _trc_Slider___setter__value(v) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      
      //$LASTPOS=8000628;//user.Slider:628
      _this.obj[_this.name]=v;
    },
    __getter__pitch :function _trc_Slider___getter__pitch() {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      
      return _this.width/(_this.values.length-1);
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"draw":{"nowait":true},"__getter__value":{"nowait":true},"__setter__value":{"nowait":true},"__getter__pitch":{"nowait":true}}}
});
Tonyu.klass.define({
  fullName: 'user.Status',
  shortName: 'Status',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: {
    main :function _trc_Status_main() {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      var a;
      var _it_77;
      
      //$LASTPOS=9000000;//user.Status:0
      _this.y=Tonyu.globals.$screenHeight-32+8;
      //$LASTPOS=9000022;//user.Status:22
      _this.x=_this.id*32+8;
      //$LASTPOS=9000033;//user.Status:33
      _this.p=Tonyu.globals.$pat_mgoku+5+_this.id;
      //$LASTPOS=9000052;//user.Status:52
      _this.score=new Tonyu.classes.kernel.Actor({x: _this.x+8,y: _this.y+8,text: 0});
      //$LASTPOS=9000089;//user.Status:89
      Tonyu.globals.$m.on("scoreChanged",(function anonymous_111(e) {
        
        //$LASTPOS=9000122;//user.Status:122
        if (e.id!=_this.id) {
          return _this;
        }
        //$LASTPOS=9000148;//user.Status:148
        _this.score.text=e.score+"";
        //$LASTPOS=9000175;//user.Status:175
        _this.sscore=e.score;
      }));
      //$LASTPOS=9000194;//user.Status:194
      _this.on("die",(function anonymous_204() {
        
        //$LASTPOS=9000206;//user.Status:206
        _this.score.die();
      }));
      //$LASTPOS=9000221;//user.Status:221
      _this.waitEvent("result");
      //$LASTPOS=9000242;//user.Status:242
      //$LASTPOS=9000247;//user.Status:247
      _this.i=0;
      while(_this.i<10) {
        {
          //$LASTPOS=9000269;//user.Status:269
          _this.y=(_this.y+230)/2;
          //$LASTPOS=9000286;//user.Status:286
          _this.x+=(Tonyu.globals.$screenWidth/2-Tonyu.globals.$gameBalance.players*16)/10;
          //$LASTPOS=9000338;//user.Status:338
          _this.update();
        }
        _this.i++;
      }
      //$LASTPOS=9000350;//user.Status:350
      while (true) {
        //$LASTPOS=9000368;//user.Status:368
        _it_77=Tonyu.iterator(_this.all(Tonyu.classes.user.Status),1);
        while(_it_77.next()) {
          a=_it_77[0];
          
          //$LASTPOS=9000401;//user.Status:401
          if ((a.sscore-_this.sscore)*(a.x-_this.x)>0) {
            //$LASTPOS=9000450;//user.Status:450
            _this.t=_this.x;
            //$LASTPOS=9000467;//user.Status:467
            _this.x=a.x;
            //$LASTPOS=9000486;//user.Status:486
            a.x=_this.t;
            
          }
          //$LASTPOS=9000511;//user.Status:511
          _this.update();
          
        }
        //$LASTPOS=9000531;//user.Status:531
        _this.update();
        
      }
    },
    fiber$main :function _trc_Status_f_main(_thread) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var a;
      var _it_77;
      
      //$LASTPOS=9000000;//user.Status:0
      _this.y=Tonyu.globals.$screenHeight-32+8;
      //$LASTPOS=9000022;//user.Status:22
      _this.x=_this.id*32+8;
      //$LASTPOS=9000033;//user.Status:33
      _this.p=Tonyu.globals.$pat_mgoku+5+_this.id;
      //$LASTPOS=9000052;//user.Status:52
      _this.score=new Tonyu.classes.kernel.Actor({x: _this.x+8,y: _this.y+8,text: 0});
      //$LASTPOS=9000089;//user.Status:89
      Tonyu.globals.$m.on("scoreChanged",(function anonymous_111(e) {
        
        //$LASTPOS=9000122;//user.Status:122
        if (e.id!=_this.id) {
          return _this;
        }
        //$LASTPOS=9000148;//user.Status:148
        _this.score.text=e.score+"";
        //$LASTPOS=9000175;//user.Status:175
        _this.sscore=e.score;
      }));
      //$LASTPOS=9000194;//user.Status:194
      _this.on("die",(function anonymous_204() {
        
        //$LASTPOS=9000206;//user.Status:206
        _this.score.die();
      }));
      
      _thread.enter(function _trc_Status_ent_main(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=9000221;//user.Status:221
            _this.fiber$waitEvent(_thread, "result");
            __pc=1;return;
          case 1:
            
            //$LASTPOS=9000242;//user.Status:242
            //$LASTPOS=9000247;//user.Status:247
            _this.i=0;;
          case 2:
            if (!(_this.i<10)) { __pc=4; break; }
            //$LASTPOS=9000269;//user.Status:269
            _this.y=(_this.y+230)/2;
            //$LASTPOS=9000286;//user.Status:286
            _this.x+=(Tonyu.globals.$screenWidth/2-Tonyu.globals.$gameBalance.players*16)/10;
            //$LASTPOS=9000338;//user.Status:338
            _this.fiber$update(_thread);
            __pc=3;return;
          case 3:
            
            _this.i++;
            __pc=2;break;
          case 4:
            
            //$LASTPOS=9000350;//user.Status:350
          case 5:
            //$LASTPOS=9000368;//user.Status:368
            _it_77=Tonyu.iterator(_this.all(Tonyu.classes.user.Status),1);
          case 6:
            if (!(_it_77.next())) { __pc=8; break; }
            a=_it_77[0];
            
            //$LASTPOS=9000401;//user.Status:401
            if ((a.sscore-_this.sscore)*(a.x-_this.x)>0) {
              //$LASTPOS=9000450;//user.Status:450
              _this.t=_this.x;
              //$LASTPOS=9000467;//user.Status:467
              _this.x=a.x;
              //$LASTPOS=9000486;//user.Status:486
              a.x=_this.t;
              
            }
            //$LASTPOS=9000511;//user.Status:511
            _this.fiber$update(_thread);
            __pc=7;return;
          case 7:
            
            __pc=6;break;
          case 8:
            
            //$LASTPOS=9000531;//user.Status:531
            _this.fiber$update(_thread);
            __pc=9;return;
          case 9:
            
            __pc=5;break;
          case 10:
            
            _thread.exit(_this);return;
          }
        }
      });
    },
    onUpdate :function _trc_Status_onUpdate() {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      
      //$LASTPOS=9000562;//user.Status:562
      _this.score.x=_this.x;
      //$LASTPOS=9000572;//user.Status:572
      _this.score.y=_this.y+8;
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"onUpdate":{"nowait":true}}}
});
Tonyu.klass.define({
  fullName: 'user.Target',
  shortName: 'Target',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: {
    main :function _trc_Target_main() {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      var first;
      
      //$LASTPOS=10000000;//user.Target:0
      _this.tx=_this.ptx=_this.ty=_this.pty=0;
      //$LASTPOS=10000017;//user.Target:17
      while (true) {
        //$LASTPOS=10000035;//user.Target:35
        first = true;
        //$LASTPOS=10000055;//user.Target:55
        while (Tonyu.globals.$touches[0].touched||_this.getkey(1)) {
          //$LASTPOS=10000105;//user.Target:105
          _this.tx=_this.floor(Tonyu.globals.$mouseX/16);
          //$LASTPOS=10000135;//user.Target:135
          _this.ty=_this.floor((Tonyu.globals.$mouseY-0)/16);
          //$LASTPOS=10000169;//user.Target:169
          if (first) {
            //$LASTPOS=10000194;//user.Target:194
            _this.ai.clearPath();
            //$LASTPOS=10000222;//user.Target:222
            first=false;
            //$LASTPOS=10000247;//user.Target:247
            _this.ai.addManualPath(_this.tx,_this.ty);
            
          } else {
            //$LASTPOS=10000287;//user.Target:287
            if (_this.ptx!=_this.tx||_this.pty!=_this.ty) {
              //$LASTPOS=10000326;//user.Target:326
              _this.ai.addManualPath(_this.tx,_this.ty);
              
            }
          }
          //$LASTPOS=10000369;//user.Target:369
          _this.ptx=_this.tx;
          //$LASTPOS=10000376;//user.Target:376
          _this.pty=_this.ty;
          //$LASTPOS=10000392;//user.Target:392
          _this.update();
          
        }
        //$LASTPOS=10000509;//user.Target:509
        _this.update();
        
      }
    },
    fiber$main :function _trc_Target_f_main(_thread) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      var first;
      
      //$LASTPOS=10000000;//user.Target:0
      _this.tx=_this.ptx=_this.ty=_this.pty=0;
      
      _thread.enter(function _trc_Target_ent_main(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=10000017;//user.Target:17
          case 1:
            //$LASTPOS=10000035;//user.Target:35
            first = true;
            //$LASTPOS=10000055;//user.Target:55
          case 2:
            if (!(Tonyu.globals.$touches[0].touched||_this.getkey(1))) { __pc=4; break; }
            //$LASTPOS=10000105;//user.Target:105
            _this.tx=_this.floor(Tonyu.globals.$mouseX/16);
            //$LASTPOS=10000135;//user.Target:135
            _this.ty=_this.floor((Tonyu.globals.$mouseY-0)/16);
            //$LASTPOS=10000169;//user.Target:169
            if (first) {
              //$LASTPOS=10000194;//user.Target:194
              _this.ai.clearPath();
              //$LASTPOS=10000222;//user.Target:222
              first=false;
              //$LASTPOS=10000247;//user.Target:247
              _this.ai.addManualPath(_this.tx,_this.ty);
              
            } else {
              //$LASTPOS=10000287;//user.Target:287
              if (_this.ptx!=_this.tx||_this.pty!=_this.ty) {
                //$LASTPOS=10000326;//user.Target:326
                _this.ai.addManualPath(_this.tx,_this.ty);
                
              }
            }
            //$LASTPOS=10000369;//user.Target:369
            _this.ptx=_this.tx;
            //$LASTPOS=10000376;//user.Target:376
            _this.pty=_this.ty;
            //$LASTPOS=10000392;//user.Target:392
            _this.fiber$update(_thread);
            __pc=3;return;
          case 3:
            
            __pc=2;break;
          case 4:
            
            //$LASTPOS=10000509;//user.Target:509
            _this.fiber$update(_thread);
            __pc=5;return;
          case 5:
            
            __pc=1;break;
          case 6:
            
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
  fullName: 'user.Title',
  shortName: 'Title',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: {
    main :function _trc_Title_main() {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      
      //$LASTPOS=11000000;//user.Title:0
      if (! Tonyu.globals.$gameBalance) {
        //$LASTPOS=11000019;//user.Title:19
        Tonyu.globals.$gameBalance={time: 60,seeds: 50,speedUpTime: 40,players: 4};
      }
      //$LASTPOS=11000085;//user.Title:85
      Tonyu.globals.$Screen.setBGColor("black");
      //$LASTPOS=11000114;//user.Title:114
      Tonyu.globals.$Screen.resize(24*16,32*16+32);
      //$LASTPOS=11000147;//user.Title:147
      _this.p=- 1;
      //$LASTPOS=11000153;//user.Title:153
      _this.x=Tonyu.globals.$screenWidth/2;
      //$LASTPOS=11000171;//user.Title:171
      _this.y=30;
      //$LASTPOS=11000177;//user.Title:177
      new Tonyu.classes.kernel.Actor({text: "むほんむぉーん",x: _this.x,y: _this.y});
      //$LASTPOS=11000209;//user.Title:209
      _this.option("Players","players",[2,3,4,5,6,7,8,9]);
      //$LASTPOS=11000256;//user.Title:256
      _this.option("Time","time",[30,60,90,120,150,180]);
      //$LASTPOS=11000303;//user.Title:303
      _this.option("Items","seeds",[10,25,50,75,100,150]);
      //$LASTPOS=11000351;//user.Title:351
      _this.option("Item Power","speedUpTime",[20,40,60,80]);
      //$LASTPOS=11000403;//user.Title:403
      _this.y=Tonyu.globals.$screenHeight-60;
      //$LASTPOS=11000423;//user.Title:423
      new Tonyu.classes.user.Button({top: _this.y,text: "Start",onClick: (function anonymous_461() {
        
        //$LASTPOS=11000463;//user.Title:463
        _this.loadPage(Tonyu.classes.user.Main);
      })});
    },
    fiber$main :function _trc_Title_f_main(_thread) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=11000000;//user.Title:0
      if (! Tonyu.globals.$gameBalance) {
        //$LASTPOS=11000019;//user.Title:19
        Tonyu.globals.$gameBalance={time: 60,seeds: 50,speedUpTime: 40,players: 4};
      }
      //$LASTPOS=11000085;//user.Title:85
      Tonyu.globals.$Screen.setBGColor("black");
      //$LASTPOS=11000114;//user.Title:114
      Tonyu.globals.$Screen.resize(24*16,32*16+32);
      //$LASTPOS=11000147;//user.Title:147
      _this.p=- 1;
      //$LASTPOS=11000153;//user.Title:153
      _this.x=Tonyu.globals.$screenWidth/2;
      //$LASTPOS=11000171;//user.Title:171
      _this.y=30;
      //$LASTPOS=11000177;//user.Title:177
      new Tonyu.classes.kernel.Actor({text: "むほんむぉーん",x: _this.x,y: _this.y});
      
      _thread.enter(function _trc_Title_ent_main(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=11000209;//user.Title:209
            _this.fiber$option(_thread, "Players", "players", [2,3,4,5,6,7,8,9]);
            __pc=1;return;
          case 1:
            
            //$LASTPOS=11000256;//user.Title:256
            _this.fiber$option(_thread, "Time", "time", [30,60,90,120,150,180]);
            __pc=2;return;
          case 2:
            
            //$LASTPOS=11000303;//user.Title:303
            _this.fiber$option(_thread, "Items", "seeds", [10,25,50,75,100,150]);
            __pc=3;return;
          case 3:
            
            //$LASTPOS=11000351;//user.Title:351
            _this.fiber$option(_thread, "Item Power", "speedUpTime", [20,40,60,80]);
            __pc=4;return;
          case 4:
            
            //$LASTPOS=11000403;//user.Title:403
            _this.y=Tonyu.globals.$screenHeight-60;
            //$LASTPOS=11000423;//user.Title:423
            new Tonyu.classes.user.Button({top: _this.y,text: "Start",onClick: (function anonymous_461() {
              
              //$LASTPOS=11000463;//user.Title:463
              _this.loadPage(Tonyu.classes.user.Main);
            })});
            _thread.exit(_this);return;
          }
        }
      });
    },
    option :function _trc_Title_option(caption,name,values) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      
      //$LASTPOS=11000520;//user.Title:520
      _this.y+=80;
      //$LASTPOS=11000531;//user.Title:531
      new Tonyu.classes.kernel.Actor({text: caption,x: _this.x-120,y: _this.y});
      //$LASTPOS=11000570;//user.Title:570
      new Tonyu.classes.user.Slider({x: _this.x-50,y: _this.y,width: 200,values: values,obj: Tonyu.globals.$gameBalance,name: name});
    },
    fiber$option :function _trc_Title_f_option(_thread,caption,name,values) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=11000520;//user.Title:520
      _this.y+=80;
      //$LASTPOS=11000531;//user.Title:531
      new Tonyu.classes.kernel.Actor({text: caption,x: _this.x-120,y: _this.y});
      //$LASTPOS=11000570;//user.Title:570
      new Tonyu.classes.user.Slider({x: _this.x-50,y: _this.y,width: 200,values: values,obj: Tonyu.globals.$gameBalance,name: name});
      
      _thread.retVal=_this;return;
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false},"option":{"nowait":false}}}
});
