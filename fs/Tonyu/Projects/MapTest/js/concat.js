Tonyu.klass.define({
  fullName: 'user.Test2',
  shortName: 'Test2',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: {
    main :function _trc_Test2_main() {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      
      //$LASTPOS=1000000;//user.Test2:0
      Tonyu.globals.$map=new Tonyu.classes.kernel.Map({chipWidth: 32,chipHeight: 32});
      //$LASTPOS=1000043;//user.Test2:43
      Tonyu.globals.$map.load("map.json");
      //$LASTPOS=1000066;//user.Test2:66
      Tonyu.globals.$map.zOrder=1000;
      //$LASTPOS=1000084;//user.Test2:84
      _this.x=20;
      //$LASTPOS=1000089;//user.Test2:89
      _this.y=20;
      //$LASTPOS=1000096;//user.Test2:96
      while (true) {
        //$LASTPOS=1000114;//user.Test2:114
        _this.x+=2;
        //$LASTPOS=1000124;//user.Test2:124
        _this.y++;
        //$LASTPOS=1000133;//user.Test2:133
        Tonyu.globals.$Screen.scrollTo(_this.x-Tonyu.globals.$screenWidth/2,_this.y-Tonyu.globals.$screenHeight/2);
        //$LASTPOS=1000211;//user.Test2:211
        _this.update();
        
      }
      //$LASTPOS=1000223;//user.Test2:223
      _this.a=6601;
    },
    fiber$main :function _trc_Test2_f_main(_thread) {
      var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);
      //var _arguments=Tonyu.A(arguments);
      var __pc=0;
      
      //$LASTPOS=1000000;//user.Test2:0
      Tonyu.globals.$map=new Tonyu.classes.kernel.Map({chipWidth: 32,chipHeight: 32});
      //$LASTPOS=1000043;//user.Test2:43
      Tonyu.globals.$map.load("map.json");
      //$LASTPOS=1000066;//user.Test2:66
      Tonyu.globals.$map.zOrder=1000;
      //$LASTPOS=1000084;//user.Test2:84
      _this.x=20;
      //$LASTPOS=1000089;//user.Test2:89
      _this.y=20;
      
      _thread.enter(function _trc_Test2_ent_main(_thread) {
        if (_thread.lastEx) __pc=_thread.catchPC;
        for(var __cnt=100 ; __cnt--;) {
          switch (__pc) {
          case 0:
            //$LASTPOS=1000096;//user.Test2:96
          case 1:
            //$LASTPOS=1000114;//user.Test2:114
            _this.x+=2;
            //$LASTPOS=1000124;//user.Test2:124
            _this.y++;
            //$LASTPOS=1000133;//user.Test2:133
            Tonyu.globals.$Screen.scrollTo(_this.x-Tonyu.globals.$screenWidth/2,_this.y-Tonyu.globals.$screenHeight/2);
            //$LASTPOS=1000211;//user.Test2:211
            _this.fiber$update(_thread);
            __pc=2;return;
          case 2:
            
            __pc=1;break;
          case 3:
            
            //$LASTPOS=1000223;//user.Test2:223
            _this.a=6601;
            _thread.exit(_this);return;
          }
        }
      });
    },
    __dummy: false
  },
  decls: {"methods":{"main":{"nowait":false}}}
});
