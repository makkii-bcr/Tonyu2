(function () {
  var rom={
    base: '/Tonyu/Kernel/',
    data: {
      '': '{".desktop":{"lastUpdate":1424849946377},"Actor.tonyu":{"lastUpdate":1425004177938},"BaseActor.tonyu":{"lastUpdate":1427705344084},"BodyActor.tonyu":{"lastUpdate":1425555929415},"Boot.tonyu":{"lastUpdate":1425019818961},"DxChar.tonyu":{"lastUpdate":1421384204610},"EventMod.tonyu":{"lastUpdate":1425010352383},"InputDevice.tonyu":{"lastUpdate":1416890086000},"js/":{"concat.js":{"lastUpdate":1427976764696}},"Keys.tonyu":{"lastUpdate":1412697666000},"Map.tonyu":{"lastUpdate":1421122943495},"MapEditor.tonyu":{"lastUpdate":1421122943503},"MathMod.tonyu":{"lastUpdate":1424849946395},"MediaPlayer.tonyu":{"lastUpdate":1421384204625},"MML.tonyu":{"lastUpdate":1424849946399},"NoviceActor.tonyu":{"lastUpdate":1412697666000},"options.json":{"lastUpdate":1427936774990},"Pad.tonyu":{"lastUpdate":1421122943510},"Panel.tonyu":{"lastUpdate":1427702417187},"PlainChar.tonyu":{"lastUpdate":1427964942819},"PlayMod.tonyu":{"lastUpdate":1425018365373},"ScaledCanvas.tonyu":{"lastUpdate":1421122943524},"SecretChar.tonyu":{"lastUpdate":1421384204695},"SpriteChar.tonyu":{"lastUpdate":1421384204710},"Sprites.tonyu":{"lastUpdate":1421122943538},"T1Line.tonyu":{"lastUpdate":1427965036844},"T1Map.tonyu":{"lastUpdate":1421384204728},"T1Page.tonyu":{"lastUpdate":1421384204737},"T1Text.tonyu":{"lastUpdate":1427965019581},"T2Body.tonyu":{"lastUpdate":1425264703379},"T2Mod.tonyu":{"lastUpdate":1425020004839},"T2World.tonyu":{"lastUpdate":1427976124069},"TextChar.tonyu":{"lastUpdate":1421384204762},"TextRectMod.tonyu":{"lastUpdate":1427702468448},"TObject.tonyu":{"lastUpdate":1421122943543},"TQuery.tonyu":{"lastUpdate":1412697666000},"WaveTable.tonyu":{"lastUpdate":1412697666000}}',
      '.desktop': '{"runMenuOrd":["Main0121","Main1023","TouchedTestMain","Main2","MapLoad","Main","AcTestM","NObjTest","NObjTest2","AcTest","AltBoot","Ball","Bar","Bounce","MapTest","MapTest2nd","SetBGCTest","Label","PanelTest","BaseActor","Panel","MathMod"]}',
      'Actor.tonyu': 
        'extends BaseActor;\n'+
        'includes PlayMod;\n'+
        'native Sprites;\n'+
        'native Tonyu;\n'+
        '\n'+
        '\\new(x,y,p) {\n'+
        '    super(x,y,p);\n'+
        '    if (Tonyu.runMode) initSprite();\n'+
        '}\n'+
        '\\initSprite() {\n'+
        '    if(layer && typeof layer.add=="function"){\n'+
        '        layer.add(this);\n'+
        '    }else{\n'+
        '        $Sprites.add(this);\n'+
        '    }\n'+
        '    onAppear();\n'+
        '}\n'+
        '\\onAppear() {\n'+
        '}\n'
      ,
      'BaseActor.tonyu': 
        'extends null;\n'+
        'includes MathMod,EventMod,TextRectMod;\n'+
        'native Tonyu;\n'+
        'native Key;\n'+
        'native console;\n'+
        'native Math;\n'+
        'native FS;\n'+
        'native Array;\n'+
        '\n'+
        '\\new(x,y,p) {\n'+
        '    if (Tonyu.runMode) {\n'+
        '        var thg=currentThreadGroup();\n'+
        '        if (thg) _th=thg.addObj(this);\n'+
        '    }\n'+
        '    if (typeof x=="object") Tonyu.extend(this,x); \n'+
        '    else if (typeof x=="number") {\n'+
        '        this.x=x;\n'+
        '        this.y=y;\n'+
        '        this.p=p;\n'+
        '    }\n'+
        '    if (scaleX==null) scaleX=1;\n'+
        '    if (rotation==null) rotation=0;\n'+
        '    if (rotate==null) rotate=0;\n'+
        '    if (alpha==null) alpha=255;\n'+
        '    if (zOrder==null) zOrder=0;\n'+
        '    if (age==null) age=0;\n'+
        '    if (anim!=null && typeof anim=="object"){\n'+
        '        animMode=true;\n'+
        '        animFrame=0;\n'+
        '    }else{\n'+
        '        animMode=false;\n'+
        '    }\n'+
        '    if (animFps==null) animFps=1;\n'+
        '}\n'+
        'nowait \\extend(obj) {\n'+
        '    return Tonyu.extend(this,obj);\n'+
        '}\n'+
        '\n'+
        'nowait \\print(pt) {\n'+
        '    console.log.apply(console,arguments);\n'+
        '    if($consolePanel){\n'+
        '        $consolePanel.scroll(0,20);\n'+
        '        $consolePanel.setFillStyle("white");\n'+
        '        $consolePanel.fillText(pt,0,$consolePrintY,20,"left");\n'+
        '    }\n'+
        '}\n'+
        '\n'+
        'nowait \\setAnimFps(f){\n'+
        '    this.animFps=f;\n'+
        '    this.animFrame=0;\n'+
        '    this.animMode=true;\n'+
        '}\n'+
        'nowait \\startAnim(){\n'+
        '    this.animMode=true;\n'+
        '}\n'+
        'nowait \\stopAnim(){\n'+
        '    this.animMode=false;\n'+
        '}\n'+
        '\\update() {\n'+
        '    onUpdate();\n'+
        '    if(_thread) {\n'+
        '        _thread.suspend();\n'+
        '    }\n'+
        '}\n'+
        'nowait \\onUpdate() {\n'+
        '    \n'+
        '}\n'+
        '\\updateEx(updateT){\n'+
        '    for(var updateCount=0;updateCount<updateT;updateCount++){\n'+
        '        update();\n'+
        '    }\n'+
        '}\n'+
        'nowait \\getkey(k) {\n'+
        '    return $Keys.getkey(k);\n'+
        '}\n'+
        'nowait \\hitTo(t) {\n'+
        '    return crashTo(t);\n'+
        '}\n'+
        'nowait \\all(c) {\n'+
        '    var res=new TQuery;\n'+
        '    $Sprites.sprites.forEach \\(s) {\n'+
        '        if (s===this) return;\n'+
        '        if (!c || s instanceof c) {\n'+
        '            res.push(s);\n'+
        '        }\n'+
        '    };\n'+
        '    return res;// new TQuery{objects:res};\n'+
        '}\n'+
        'nowait \\allCrash(t) {\n'+
        '    var res=new TQuery;\n'+
        '    var sp=this; //_sprite || this;\n'+
        '    var t1=getCrashRect();\n'+
        '    if (!t1) return res;\n'+
        '    $Sprites.sprites.forEach(\\(s) {\n'+
        '        var t2;\n'+
        '        if (s!==this && \n'+
        '        !s.excludeFromAll &&\n'+
        '        s instanceof t && \n'+
        '        (t2=s.getCrashRect()) &&\n'+
        '        Math.abs(t1.x-t2.x)*2<t1.width+t2.width &&\n'+
        '        Math.abs(t1.y-t2.y)*2<t1.height+t2.height) {\n'+
        '            res.push(s);    \n'+
        '        }\n'+
        '    });\n'+
        '    return res;\n'+
        '}\n'+
        'nowait \\crashTo(t) {\n'+
        '    if (!t) return false;\n'+
        '    if (typeof t=="function") {\n'+
        '        return allCrash(t)[0];\n'+
        '    }\n'+
        '    return crashTo1(t);\n'+
        '}\n'+
        'nowait \\crashTo1(t) {\n'+
        '    if (!t || t._isDead) return false;\n'+
        '    /*if (_sprite && t._sprite) {\n'+
        '        return _sprite.crashTo(t._sprite);\n'+
        '    }*/\n'+
        '    var t1=getCrashRect();\n'+
        '    var t2=t.getCrashRect();\n'+
        '    return \n'+
        '    //    t1.x!=null && t1.y!=null && t1.width && t1.height &&\n'+
        '    //    t2.x!=null && t2.y!=null && t2.width && t2.height &&\n'+
        '    t1 && t2 &&\n'+
        '    Math.abs(t1.x-t2.x)*2<t1.width+t2.width &&\n'+
        '    Math.abs(t1.y-t2.y)*2<t1.height+t2.height;\n'+
        '}\n'+
        'nowait \\getCrashRect() {\n'+
        '    var actWidth=width*scaleX, actHeight;\n'+
        '    if(typeof scaleY==="undefined"){\n'+
        '        actHeight=height*scaleX;\n'+
        '    }else{\n'+
        '        actHeight=height*scaleY;\n'+
        '    }\n'+
        '    return typeof x=="number" &&\n'+
        '    typeof y=="number" &&\n'+
        '    typeof width=="number" &&\n'+
        '    typeof height=="number" && \n'+
        '    {x,y,width:actWidth,height:actHeight};\n'+
        '}\n'+
        'nowait \\within(t,distance){\n'+
        '    if(!t || t._isDead) return false;\n'+
        '    if(Math.sqrt(Math.abs(x-t.x)*Math.abs(x-t.x)+ Math.abs(y-t.y)*Math.abs(y-t.y))<distance){\n'+
        '        return true;\n'+
        '    }\n'+
        '    return false;\n'+
        '}\n'+
        'nowait \\watchHit(typeA,typeB,onHit) {\n'+
        '    $Sprites.watchHit(typeA , typeB, \\(a,b) {\n'+
        '        onHit.apply(this,[a,b]);\n'+
        '    });\n'+
        '}\n'+
        'nowait \\currentThreadGroup() {\n'+
        '    return $currentThreadGroup; \n'+
        '}\n'+
        'nowait \\die() {\n'+
        '    if (_th) {\n'+
        '        _th.kill();\n'+
        '    }\n'+
        '    hide();\n'+
        '    fireEvent("die");\n'+
        '    _isDead=true;\n'+
        '}\n'+
        'nowait \\hide() {\n'+
        '    /*if (_sprite) {\n'+
        '        $Sprites.remove(_sprite);\n'+
        '        _sprite=null;\n'+
        '    } else {*/\n'+
        '        //$Sprites.remove(this);\n'+
        '    //}\n'+
        '    if(layer && typeof layer.remove=="function"){\n'+
        '        layer.remove(this);\n'+
        '    }else{\n'+
        '        $Sprites.remove(this);\n'+
        '    }\n'+
        '}\n'+
        'nowait \\show(x,y,p) {\n'+
        '    if(layer && typeof layer.add=="function"){\n'+
        '        layer.add(this);\n'+
        '    }else{\n'+
        '        $Sprites.add(this);\n'+
        '    }\n'+
        '    if (x!=null) this.x=x;\n'+
        '    if (y!=null) this.y=y;\n'+
        '    if (p!=null) this.p=p;\n'+
        '}\n'+
        '\n'+
        'nowait \\detectShape() {\n'+
        '    if (typeof p!="number") {\n'+
        '        if (text!=null) return;\n'+
        '        p=0;\n'+
        '    }\n'+
        '    p=Math.floor(p);\n'+
        '    pImg=$Sprites.getImageList()[p];\n'+
        '    if (!pImg) return;\n'+
        '    width=pImg.width;\n'+
        '    height=pImg.height;\n'+
        '}\n'+
        '\\waitFor(f) {\n'+
        '    ifwait {\n'+
        '        _thread.waitFor(f);\n'+
        '    }\n'+
        '    update();\n'+
        '}\n'+
        'nowait \\isDead() {\n'+
        '    return _isDead;\n'+
        '}\n'+
        '\n'+
        'nowait \\animation(){\n'+
        '    age++;\n'+
        '    if(animMode && age%animFps==0){\n'+
        '        p=anim[animFrame%anim.length];\n'+
        '        animFrame++;\n'+
        '    }\n'+
        '}\n'+
        'nowait \\draw(ctx) {\n'+
        '    if (x==null || y==null || _isInvisible) return;\n'+
        '    detectShape();\n'+
        '    if (pImg) {\n'+
        '        ctx.save();\n'+
        '        ctx.translate(x,y);\n'+
        '        //if (typeof rotate=="number" ) rotation=rotate;// 削除予定\n'+
        '        //ctx.rotate(this.rotation/180*Math.PI);\n'+
        '        animation();\n'+
        '        if(this.rotation!=0){\n'+
        '            ctx.rotate(this.rotation/180*Math.PI);\n'+
        '        }else{\n'+
        '            ctx.rotate(this.rotate/180*Math.PI);\n'+
        '        }\n'+
        '        if(typeof this.scaleY==="undefined") {\n'+
        '            ctx.scale(this.scaleX,this.scaleX);\n'+
        '        }else{\n'+
        '            ctx.scale(this.scaleX,this.scaleY);\n'+
        '        }\n'+
        '        ctx.globalAlpha=this.alpha/255;\n'+
        '        ctx.drawImage(\n'+
        '        pImg.image, pImg.x, pImg.y, pImg.width, pImg.height,\n'+
        '        -width/2, -height/2, width, height);\n'+
        '        ctx.restore();\n'+
        '    } else if (text!==null && text!==undefined) {\n'+
        '        if (!size) size=15;\n'+
        '        if (!align) align="center";\n'+
        '        if (!fillStyle) fillStyle="white";\n'+
        '        ctx.fillStyle=fillStyle;\n'+
        '        ctx.globalAlpha=this.alpha/255;\n'+
        '        var rect=drawTextRect(ctx, text, x, y, size, align , "fill");\n'+
        '        width=rect.w;\n'+
        '        height=rect.h;\n'+
        '    }\n'+
        '    if (_fukidashi) {\n'+
        '        if (_fukidashi.c>0) {\n'+
        '            _fukidashi.c--;\n'+
        '            ctx.fillStyle="white";\n'+
        '            ctx.strokeStyle="black";\n'+
        '            fukidashi ( ctx , _fukidashi.text, \n'+
        '            x, y-height/2-10, _fukidashi.size);\n'+
        '        }\n'+
        '    }\n'+
        '}\n'+
        'nowait \\asyncResult() {\n'+
        '    return Tonyu.asyncResult();\n'+
        '}\n'+
        '\n'+
        '\\screenOut(a) {\n'+
        '    //オブジェクトが画面外に出たかどうかを判定します。\n'+
        '    if (!a) a=0;\n'+
        '    var r=0;\n'+
        '    var viewX=0,viewY=0;\n'+
        '    if (x<viewX+a)               r+=viewX+a-x;\n'+
        '    if (y<viewY+a)               r+=viewY+a-y;\n'+
        '    if (x>$screenWidth +viewX-a) r+=x-($screenWidth +viewX-a);\n'+
        '    if (y>$screenHeight+viewY-a) r+=y-($screenHeight+viewY-a);\n'+
        '    return r;\n'+
        '}\n'+
        '\\file(path) {\n'+
        '    var d=Tonyu.currentProject.getDir();\n'+
        '    var files=d.rel("files/");\n'+
        '    return FS.get(files.rel(path)) {topDir:d};\n'+
        '}\n'+
        '\\waitInputDevice(fl) {\n'+
        '    if (fl!==false) {\n'+
        '        if (!origTG) {\n'+
        '            ifwait {\n'+
        '                origTG=_thread.group;\n'+
        '                _thread.setGroup(null);\n'+
        '            }\n'+
        '        }\n'+
        '        a=asyncResult();\n'+
        '        $InputDevice.addOnetimeListener(a.receiver);\n'+
        '        waitFor(a);\n'+
        '    } else {\n'+
        '        if (origTG) {\n'+
        '            ifwait {\n'+
        '                _thread.setGroup(origTG);\n'+
        '                origTG=null;\n'+
        '            }\n'+
        '        }\n'+
        '    }\n'+
        '}\n'+
        '\\redrawScreen() {\n'+
        '    $Sprites.draw($Screen.buf[0]);\n'+
        '    $Screen.draw();\n'+
        '}\n'+
        '\n'+
        '// from PlainChar\n'+
        '\\color(r,g,b) {\n'+
        '    return "rgb("+[r,g,b].join(",")+")";\n'+
        '}\n'+
        '\\drawText(x,y,text,col,size) {\n'+
        '    if ($debug) return;\n'+
        '    if (!size) size=15;\n'+
        '    if (!col) col="cyan";\n'+
        '    var tp=all(T1Text).find \\(t) {return t.hidden;};\n'+
        '    if (tp.length>0) {\n'+
        '        tp[0].extend{x,y,text,fillStyle:col, size,hidden:false};\n'+
        '    }else {\n'+
        '        new T1Text{x,y,text,fillStyle:col, size};  \n'+
        '    }\n'+
        '}\n'+
        '\\drawLine(x,y,tx,ty,col) {\n'+
        '    if (!col) col="white";\n'+
        '    var tp=all(T1Line).find \\(t) {return t.hidden;};\n'+
        '    if (tp.length>0) {\n'+
        '        tp[0].extend{x,y,tx,ty,col, hidden:false};\n'+
        '    }else {\n'+
        '        new T1Line{x,y,tx,ty,col};  \n'+
        '    }\n'+
        '}\n'+
        '\\loadPage(page,arg){\n'+
        '    all().die();\n'+
        '    new page(arg);\n'+
        '    die();\n'+
        '}\n'+
        '\n'+
        '\\setVisible(v) {\n'+
        '    _isInvisible=!v;\n'+
        '}'
      ,
      'BodyActor.tonyu': 
        'extends Actor;\n'+
        'includes T2Mod;\n'+
        'native Box2D;\n'+
        '\n'+
        '\\getWorld() {\n'+
        '    if ($t2World) return $t2World;\n'+
        '    $t2World=new T2World;\n'+
        '    return $t2World;\n'+
        '}\n'+
        '\\onAppear() {\n'+
        '    world=getWorld().world;\n'+
        '    scale=getWorld().scale;\n'+
        '    var b2Vec2 = Box2D.Common.Math.b2Vec2;\n'+
        '    var b2BodyDef = Box2D.Dynamics.b2BodyDef;\n'+
        '    var b2Body = Box2D.Dynamics.b2Body;\n'+
        '    var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;\n'+
        '    var b2Fixture = Box2D.Dynamics.b2Fixture;\n'+
        '    var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;\n'+
        '    var b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;\n'+
        '    \n'+
        '    var fixDef = new b2FixtureDef;\n'+
        '    fixDef.density = density || 1.0;\n'+
        '    fixDef.friction = friction || 0.5;\n'+
        '    fixDef.restitution = restitution || 0.2;\n'+
        '    \n'+
        '    var bodyDef = new b2BodyDef;\n'+
        '    bodyDef.type = isStatic ? b2Body.b2_staticBody :\n'+
        '    b2Body.b2_dynamicBody;\n'+
        '    \n'+
        '    bodyDef.position.x = x /scale;\n'+
        '    bodyDef.position.y = y /scale;\n'+
        '    shape=shape || (radius ? "circle" : "box");\n'+
        '    var w=width,h=height;\n'+
        '    if (!w) {\n'+
        '        detectShape();\n'+
        '        w=width*(scaleX||1);\n'+
        '        h=height*(scaleY||scaleX||1);\n'+
        '    }\n'+
        '    if (shape=="box") {\n'+
        '        if (!h) h=w;\n'+
        '        fixDef.shape = new b2PolygonShape;\n'+
        '        fixDef.shape.SetAsOrientedBox(w/2/scale, h/2/scale,\n'+
        '        new b2Vec2(0,0),0);\n'+
        '    } else {\n'+
        '        radius=radius || w/2 || 16;\n'+
        '        fixDef.shape = new b2CircleShape(\n'+
        '        radius/scale\n'+
        '        );\n'+
        '        width=height=radius*2;\n'+
        '    } \n'+
        '    body=world.CreateBody(bodyDef);\n'+
        '    body.CreateFixture(fixDef);\n'+
        '    body.SetUserData(this);\n'+
        '    body.SetAngle(rad(rotation));\n'+
        '}\n'+
        '\\allContact(klass) {\n'+
        '    var res=[];\n'+
        '    for (var c=world.GetContactList();c;c=c.GetNext()) {\n'+
        '        if (c.IsTouching()) {\n'+
        '            var a=c.GetFixtureA().GetBody().GetUserData();\n'+
        '            var b=c.GetFixtureB().GetBody().GetUserData();\n'+
        '            if (a===this) {\n'+
        '                if (!klass || b===klass || b instanceof klass) {\n'+
        '                    res.push(b);\n'+
        '                }\n'+
        '            } else if (b===this) {\n'+
        '                if (!klass || a===klass || a instanceof klass) {\n'+
        '                    res.push(a);\n'+
        '                }\n'+
        '            }\n'+
        '        }\n'+
        '    }\n'+
        '    return res;\n'+
        '}\n'+
        '\\applyForce(fx,fy,px,py) {\n'+
        '    var b2Vec2 = Box2D.Common.Math.b2Vec2;\n'+
        '    var scale=getWorld().scale;\n'+
        '    var fps=60;\n'+
        '    body.ApplyForce(new b2Vec2(fx ,fy),body.GetPosition());\n'+
        '}\n'+
        '\\applyImpulse(fx,fy,px,py) {\n'+
        '    var b2Vec2 = Box2D.Common.Math.b2Vec2;\n'+
        '    var scale=getWorld().scale;\n'+
        '    var fps=60;\n'+
        '    body.ApplyImpulse(new b2Vec2(fx ,fy),body.GetPosition());\n'+
        '}\n'+
        '\n'+
        '\\applyTorque(a) {\n'+
        '    body.ApplyTorque(a);\n'+
        '}\n'+
        '\\moveBy(dx,dy) {\n'+
        '    var pos=body.GetPosition();\n'+
        '    pos.x+=dx/scale;\n'+
        '    pos.y+=dy/scale;\n'+
        '    body.SetPosition(pos);\n'+
        '}\n'+
        '\\contactTo(t) {\n'+
        '    return allContact(t)[0];\n'+
        '}\n'+
        '\\die() {\n'+
        '    super.die();\n'+
        '    world.DestroyBody(body);\n'+
        '}\n'+
        '\\updatePos() {\n'+
        '    if (!body) return;\n'+
        '    var scale=getWorld().scale;\n'+
        '    var pos=body.GetPosition();\n'+
        '    x=pos.x*scale;\n'+
        '    y=pos.y*scale;\n'+
        '    rotation=deg(body.GetAngle());\n'+
        '}\n'+
        '\n'
      ,
      'Boot.tonyu': 
        'extends Actor;\n'+
        'native $;\n'+
        'native TError;\n'+
        'native $LASTPOS;\n'+
        'native Key;\n'+
        'native Date;\n'+
        'native ImageList;\n'+
        'native Tonyu;\n'+
        'native SplashScreen;\n'+
        'native Math;\n'+
        '\n'+
        '\\initSprites() {\n'+
        '    $Sprites=new Sprites();\n'+
        '    $FrontSprites=new Sprites();\n'+
        '    print ("Loading plugins..");\n'+
        '    var a=asyncResult();\n'+
        '    $currentProject.loadPlugins(a.receiver);\n'+
        '    waitFor(a);\n'+
        '    print ("Loading pats..");\n'+
        '    var rs=$currentProject.getResource();\n'+
        '    a=asyncResult();\n'+
        '    ImageList.load( rs.images, a.receiver)\n'+
        '    {baseDir:$currentProject.getDir()};\n'+
        '    waitFor(a);\n'+
        '    var r=a[0];\n'+
        '    $Sprites.setImageList(r);\n'+
        '    for (var name,val in r.names) {\n'+
        '        Tonyu.setGlobal(name, val);\n'+
        '    }\n'+
        '    print ("Loading pats done.");\n'+
        '    cvj=$("canvas");\n'+
        '    if (Tonyu.noviceMode) {\n'+
        '        $Screen=new ScaledCanvas{canvas:cvj, width:600, height:300};\n'+
        '    } else {\n'+
        '        $Screen=new ScaledCanvas{canvas:cvj, width:465, height:465};\n'+
        '    }\n'+
        '}\n'+
        '\n'+
        '\n'+
        '\\initThread() {\n'+
        '    $mainThreadGroup=thg=Tonyu.threadGroup();\n'+
        '    var o=Tonyu.currentProject.getOptions();\n'+
        '    var mainClassName=o.run.mainClass;\n'+
        '    print("MainClass= "+mainClassName);\n'+
        '    mainClass=Tonyu.getClass(mainClassName);\n'+
        '    if (!mainClass) {\n'+
        '        TError( mainClassName+" というクラスはありません", \n'+
        '        "不明" ,0).raise();\n'+
        '    }\n'+
        '    Tonyu.runMode=true;\n'+
        '    $currentThreadGroup=thg;\n'+
        '    new mainClass();\n'+
        '}\n'+
        '\\stop() {\n'+
        '    fireEvent("stop");\n'+
        '}\n'+
        'initSprites();\n'+
        '$InputDevice=new InputDevice;\n'+
        '$InputDevice.initCanvasEvents(cvj);\n'+
        'initThread();\n'+
        '\n'+
        '$pat_fruits=30;\n'+
        '$Keys=new Keys;\n'+
        '$Math=Math;\n'+
        '$consolePanel=new Panel{align:"center",x:465/2,y:465/2,width:465,height:465,zOrder:-10,layer:$FrontSprites};\n'+
        '$consolePrintY=465-15;\n'+
        '$panel=new Panel{align:"center",x:$screenWidth/2,y:$screenHeight/2,width:$screenWidth,height:$screenHeight,zOrder:-1,layer:$FrontSprites};\n'+
        'if (typeof SplashScreen!="undefined") SplashScreen.hide();\n'+
        'initFPSParams();\n'+
        '\n'+
        'while (true) {\n'+
        '    thg.steps();\n'+
        '    $Keys.update();\n'+
        '    $InputDevice.update();\n'+
        '    $screenWidth=$Screen.width;\n'+
        '    $screenHeight=$Screen.height;\n'+
        '    \n'+
        '    doDraw=now()<deadLine;\n'+
        '    if (!doDraw && frameSkipped>=maxFrameSkip) {\n'+
        '        doDraw=true;\n'+
        '        resetDeadLine();\n'+
        '    }\n'+
        '    if (doDraw) { // フレームスキップの時は描画しない\n'+
        '        $Screen.fillCanvas($Screen.buf[0]);\n'+
        '        $Sprites.draw($Screen.buf[0]);\n'+
        '        $FrontSprites.draw($Screen.buf[0]);\n'+
        '        $Screen.draw();\n'+
        '        fps_fpsCnt ++;\n'+
        '        frameSkipped=0;\n'+
        '    } else {\n'+
        '        frameSkipped++;\n'+
        '    }\n'+
        '    $Sprites.checkHit();\n'+
        '    fps_rpsCnt ++;\n'+
        '    measureFps();\n'+
        '    waitFrame(); // FPS制御\n'+
        '    while(paused) {\n'+
        '        waitFor(Tonyu.timeout(1)); \n'+
        '        if (!paused) resetDeadLine();\n'+
        '    }\n'+
        '}\n'+
        '\n'+
        'nowait \\initFPSParams() {\n'+
        '    // フレームレートの設定\n'+
        '    _fps = 30;\n'+
        '    maxframeSkip = 5;\n'+
        '    // フレームレート制御でつかう変数 //\n'+
        '    frameCnt = 0;\n'+
        '    resetDeadLine();\n'+
        '    $Boot = this;\n'+
        '    lastMeasured=now();\n'+
        '    fps_fps=fps_rps=fps_fpsCnt=fps_rpsCnt=0;\n'+
        '}\n'+
        'nowait \\now() {\n'+
        '    return new Date().getTime();\n'+
        '}\n'+
        'nowait \\resetDeadLine() {\n'+
        '    deadLine=now()+1000/_fps;\n'+
        '    frameSkipped = 0;\n'+
        '}\n'+
        '\n'+
        '\\waitFrame() {\n'+
        '    var wt=deadLine-now();\n'+
        '    if (wt<1) {\n'+
        '        if (wt<-1000) resetDeadLine();\n'+
        '        wt=1;\n'+
        '    }\n'+
        '    wt=floor(wt);\n'+
        '    waitFor(Tonyu.timeout(wt));\n'+
        '    deadLine+=1000/_fps;\n'+
        '}\n'+
        '\n'+
        'nowait \\getFrameRate() {\n'+
        '    return _fps;\n'+
        '}\n'+
        '\n'+
        '// Tonyu1の$System.setFrameRate() //\n'+
        'nowait \\setFrameRate(fps, maxFrameSkip) {\n'+
        '    _fps = fps;\n'+
        '    if (typeof maxFrameSkip!="number") maxFrameSkip=5;\n'+
        '    this.maxFrameSkip = maxFrameSkip;\n'+
        '    resetDeadLine();\n'+
        '}\n'+
        '\n'+
        '// FPS（計測したフレームレート）を返す //\n'+
        'nowait \\getMeasuredFps() {\n'+
        '    return fps_fps;\n'+
        '}\n'+
        '\n'+
        '// RPS（計測した実行レート）を返す //\n'+
        'nowait \\getMeasuredRps() {\n'+
        '    return fps_rps;\n'+
        '}\n'+
        '\n'+
        'nowait \\measureFps() {\n'+
        '    if (now()>lastMeasured+1000) {\n'+
        '        fps_fps=fps_fpsCnt;\n'+
        '        fps_rps=fps_rpsCnt;\n'+
        '        fps_fpsCnt=0;\n'+
        '        fps_rpsCnt=0;\n'+
        '        lastMeasured=now();\n'+
        '    }\n'+
        '}\n'+
        '\n'
      ,
      'DxChar.tonyu': 
        'extends SpriteChar;\n'+
        '\n'+
        '\\new (xx,yy,pp,ff,sz,rt,al){\n'+
        '    super(xx,yy,pp,ff);\n'+
        '    scaleX=1;\n'+
        '    if (sz) scaleX=sz;\n'+
        '    angle=0;\n'+
        '    if (rt) angle=rt;\n'+
        '    alpha=255;\n'+
        '    if (al) alpha=al;\n'+
        '}\n'+
        '\\draw(c) {\n'+
        '    rotation=angle;\n'+
        '    super.draw(c);\n'+
        '}\n'
      ,
      'EventMod.tonyu': 
        'extends null;\n'+
        '\n'+
        '\\getEventHandlers(type) {\n'+
        '    if (!_handlers) _handlers={};\n'+
        '    if (!_handlers[type]) _handlers[type]=[];\n'+
        '    return _handlers[type];\n'+
        '}\n'+
        '\\on(type, handler) {\n'+
        '    getEventHandlers(type).push(handler);\n'+
        '}\n'+
        '\n'+
        '\\fireEvent(type,args) {\n'+
        '    if (!args) args=[];\n'+
        '    for (var h in getEventHandlers(type)) {\n'+
        '        h.apply(this,args);\n'+
        '    }\n'+
        '}\n'
      ,
      'InputDevice.tonyu': 
        'extends null;\n'+
        'native $;\n'+
        'native window;\n'+
        'native Tonyu;\n'+
        '\\new() {\n'+
        '    listeners=[];\n'+
        '    touchEmu=true;\n'+
        '}\n'+
        '\\handleListeners() {\n'+
        '    var l=listeners;\n'+
        '    listeners=[];\n'+
        '    while (l.length>0) { (l.shift())(); }\n'+
        '}\n'+
        '\\addOnetimeListener(l){\n'+
        '    listeners.push(l);\n'+
        '}\n'+
        '\\initCanvasEvents(cvj) {\n'+
        '    var cv=cvj[0];\n'+
        '    $handleMouse=\\(e) {\n'+
        '        var p=cvj.offset();\n'+
        '        var mp={x:e.clientX-p.left, y:e.clientY-p.top};\n'+
        '        mp=$Screen.canvas2buf(mp);\n'+
        '        $mouseX=mp.x;\n'+
        '        $mouseY=mp.y;\n'+
        '        if (touchEmu) {\n'+
        '            $touches[0].x=mp.x;\n'+
        '            $touches[0].y=mp.y;\n'+
        '        }\n'+
        '        handleListeners();\n'+
        '    };\n'+
        '    $touches=[{},{},{},{},{}];\n'+
        '    $touches.findById=\\(id) {\n'+
        '        for (var j=0 ; j<$touches.length ; j++) {\n'+
        '            if ($touches[j].identifier==id) {\n'+
        '                return $touches[j];\n'+
        '            }\n'+
        '        }\n'+
        '    };\n'+
        '    $handleTouch=\\(e) {\n'+
        '        touchEmu=false;\n'+
        '        var p=cvj.offset();\n'+
        '        e.preventDefault();\n'+
        '        var ts=e.originalEvent.changedTouches;\n'+
        '        for (var i =0 ; i<ts.length ; i++) {\n'+
        '            var src=ts[i];\n'+
        '            var dst=$touches.findById(src.identifier);\n'+
        '            if (!dst) {\n'+
        '                for (var j=0 ; j<$touches.length ; j++) {\n'+
        '                    if (!$touches[j].touched) {\n'+
        '                        dst=$touches[j];\n'+
        '                        dst.identifier=src.identifier;\n'+
        '                        break;\n'+
        '                    }\n'+
        '                }\n'+
        '            }\n'+
        '            if (dst) {\n'+
        '                mp={x:src.pageX-p.left, y:src.pageY-p.top};\n'+
        '                mp=$Screen.canvas2buf(mp);\n'+
        '                dst.x=mp.x;\n'+
        '                dst.y=mp.y;\n'+
        '                if(!dst.touched) dst.touched=1;\n'+
        '            }\n'+
        '        }\n'+
        '        $mouseX=$touches[0].x;\n'+
        '        $mouseY=$touches[0].y;\n'+
        '        handleListeners();\n'+
        '    };\n'+
        '    $handleTouchEnd=\\(e) {\n'+
        '        var ts=e.originalEvent.changedTouches;\n'+
        '        for (var i =0 ; i<ts.length ; i++) {\n'+
        '            var src=ts[i];\n'+
        '            var dst=$touches.findById(src.identifier);\n'+
        '            if (dst) {\n'+
        '                dst.touched=0;\n'+
        '                dst.identifier=-1;\n'+
        '            }\n'+
        '        }\n'+
        '        handleListeners();\n'+
        '    };\n'+
        '    var handleMouse=\\(e){$handleMouse(e);};\n'+
        '    var handleTouch=\\(e){$handleTouch(e);};\n'+
        '    var handleTouchEnd=\\(e){$handleTouchEnd(e);};\n'+
        '    var d=$.data(cv,"events");\n'+
        '    if (!d) {\n'+
        '        $.data(cv,"events","true");\n'+
        '        cvj.mousedown(handleMouse);\n'+
        '        cvj.mousemove(handleMouse);\n'+
        '        cvj.on("touchstart",handleTouch);\n'+
        '        cvj.on("touchmove",handleTouch);\n'+
        '        cvj.on("touchend",handleTouchEnd);\n'+
        '    }\n'+
        '}\n'+
        '\n'+
        '\\update() {\n'+
        '    for (var i in $touches) {\n'+
        '        if (i.touched>0) {i.touched++;}\n'+
        '        if (i.touched==-1) i.touched=1;\n'+
        '    }\n'+
        '}'
      ,
      'Keys.tonyu': 
        'extends TObject;\n'+
        'native String;\n'+
        'native $;\n'+
        'native document;\n'+
        '//\\new () {this.main();}\n'+
        'stats={};\n'+
        'codes={\n'+
        '    left: 37 , up:38 , right: 39, down:40, space:32, enter:13,\n'+
        '    shift:16, ctrl:17, alt:18, mouseleft: 1\n'+
        '};\n'+
        'for (var i=65 ; i<65+26; i++) {\n'+
        '    codes[String.fromCharCode(i).toLowerCase()]=i;\n'+
        '}\n'+
        'for (var i=48 ; i<58; i++) {\n'+
        '    codes[String.fromCharCode(i)]=i;\n'+
        '}\n'+
        'if (!$.data(document,"key_event")) {\n'+
        '    $.data(document,"key_event",true);\n'+
        '    $(document).keydown \\(e) {$Keys.keydown(e);};\n'+
        '    $(document).keyup \\(e) {$Keys.keyup(e);};\n'+
        '    $(document).mousedown \\(e) {\n'+
        '        if ($InputDevice.touchEmu) {\n'+
        '            $touches[0].touched=1;\n'+
        '        }\n'+
        '        $Keys.keydown{keyCode:1};\n'+
        '    };\n'+
        '    $(document).mouseup \\(e) {\n'+
        '        if ($InputDevice.touchEmu) {\n'+
        '            $touches[0].touched=0;\n'+
        '        }\n'+
        '        $Keys.keyup{keyCode:1};\n'+
        '    };\n'+
        '}\n'+
        'function getkey(code) {\n'+
        '    if (typeof code=="string") {\n'+
        '        code=codes[code.toLowerCase()];\n'+
        '    }\n'+
        '    if (!code) return 0;\n'+
        '    if (stats[code]==-1) return 0;\n'+
        '    if (!stats[code]) stats[code]=0;\n'+
        '    return stats[code];\n'+
        '}\n'+
        'function update() {\n'+
        '    for (var i in stats) {\n'+
        '        if (stats[i]>0) {stats[i]++;}\n'+
        '        if (stats[i]==-1) stats[i]=1;\n'+
        '    }\n'+
        '}\n'+
        '\\keydown(e) {\n'+
        '    var s=stats[e.keyCode];\n'+
        '    if (!s) {\n'+
        '        stats[e.keyCode]=1;\n'+
        '    }\n'+
        '    $InputDevice.handleListeners();\n'+
        '}\n'+
        '\\keyup(e) {\n'+
        '    stats[e.keyCode]=0;\n'+
        '    $InputDevice.handleListeners();\n'+
        '}'
      ,
      'MML.tonyu': 
        'extends TObject;\n'+
        'includes MathMod;\n'+
        'native T;\n'+
        '\n'+
        'mmlBuf=[];\n'+
        '\\play(mmls) {\n'+
        '    mmlBuf.push(mmls);\n'+
        '    if (!isPlaying()) {\n'+
        '        playNext();\n'+
        '    }\n'+
        '}\n'+
        '\\playNext() {\n'+
        '    //print("play!", id(), bufferCount());\n'+
        '    if (cTimeBase==null) cTimeBase=0;\n'+
        '    if (m) {\n'+
        '        cTimeBase+=m.currentTime;\n'+
        '        //print(m.currentTime);\n'+
        '    }\n'+
        '    var mml=mmlBuf.shift();\n'+
        '    if (!mml) {\n'+
        '        m=null;\n'+
        '        cTimeBase=0;\n'+
        '        return;\n'+
        '    }\n'+
        '    mwav=$WaveTable.get(0,0).play();\n'+
        '    m=T("mml", {mml}, mwav);\n'+
        '    m.on("ended", playNext);\n'+
        '    m.start();\n'+
        '    $MMLS[id()]=this;\n'+
        '}\n'+
        '\\id() {\n'+
        '    if (!_id) _id=rnd()+"";\n'+
        '    return _id;\n'+
        '}\n'+
        '\\bufferCount() {\n'+
        '    return mmlBuf.length;\n'+
        '}\n'+
        '\\isPlaying() {\n'+
        '    return m;\n'+
        '}\n'+
        '\\currentTime() {\n'+
        '    if (m) return m.currentTime+cTimeBase;\n'+
        '    return -1;\n'+
        '}\n'+
        '\\stop() {\n'+
        '    if (m) {\n'+
        '        if (mwav) {\n'+
        '            mwav.pause();\n'+
        '            mwav.stop();\n'+
        '        }\n'+
        '        m.pause();\n'+
        '        m.stop();\n'+
        '        m=null;\n'+
        '        mmlBuf=[];\n'+
        '        //print("stop!", id(), bufferCount());\n'+
        '        delete $MMLS[id()];\n'+
        '    }\n'+
        '}\n'
      ,
      'Map.tonyu': 
        'extends Actor;\n'+
        'native Math;\n'+
        'native $;\n'+
        '\\new (param){\n'+
        '    sx=0;\n'+
        '    sy=0;\n'+
        '    super(param);\n'+
        '    buf=$("<canvas>").attr{width:col*chipWidth,height:row*chipHeight};\n'+
        '    mapObj=true;\n'+
        '    mapTable = [];\n'+
        '    mapOnTable = [];\n'+
        '    for(var j=0;j<row;j++){\n'+
        '        rows = [];\n'+
        '        for(var i=0;i<col;i++){\n'+
        '            rows.push(-1);\n'+
        '        }\n'+
        '        mapTable.push(rows);\n'+
        '    }\n'+
        '    for(var j=0;j<row;j++){\n'+
        '        rows = [];\n'+
        '        for(var i=0;i<col;i++){\n'+
        '            rows.push(-1);\n'+
        '        }\n'+
        '        mapOnTable.push(rows);\n'+
        '    }\n'+
        '    /*for(var i=0;i<col;i++){\n'+
        '        mapTable[i]=[];\n'+
        '    }*/\n'+
        '    initMap();\n'+
        '}\n'+
        '\\initMap(){\n'+
        '    if(!mapData) return;\n'+
        '    for(var i=0;i<row;i++){\n'+
        '        for(var j=0;j<col;j++){\n'+
        '            set(j,i,mapData[i][j]);\n'+
        '        }\n'+
        '    }\n'+
        '    if(!mapOnData) return;\n'+
        '    for(var i=0;i<row;i++){\n'+
        '        for(var j=0;j<col;j++){\n'+
        '            setOn(j,i,mapOnData[i][j]);\n'+
        '        }\n'+
        '    }\n'+
        '}\n'+
        '\\load(dataFile){\n'+
        '    baseData=file("../maps/").rel(dataFile).obj();\n'+
        '    if(!baseData) baseData=file(dataFile).obj();\n'+
        '    mapTable=baseData[0];\n'+
        '    mapData=mapTable;\n'+
        '    row=mapTable.length;\n'+
        '    col=mapTable[0].length;\n'+
        '    mapOnTable=baseData[1];\n'+
        '    mapOnData=mapOnTable;\n'+
        '    buf=$("<canvas>").attr{width:col*chipWidth,height:row*chipHeight};\n'+
        '    initMap();\n'+
        '}\n'+
        '\\set(setCol,setRow,p){\n'+
        '    if(setCol>=col || setRow>=row || setCol<0 || setRow<0) return;\n'+
        '    mapTable[setRow][setCol]=p;\n'+
        '    //mapOnTable[setRow][setCol]=-1;\n'+
        '    ctx=buf[0].getContext("2d");\n'+
        '    p=Math.floor(p);\n'+
        '    pImg=$Sprites.getImageList()[p];\n'+
        '    if (!pImg) {\n'+
        '        ctx.clearRect(setCol*chipWidth,setRow*chipHeight,chipWidth,chipHeight);\n'+
        '        return;\n'+
        '    }\n'+
        '    ctx.clearRect(setCol*chipWidth,setRow*chipHeight,chipWidth,chipHeight);\n'+
        '    ctx.save();\n'+
        '    ctx.drawImage(\n'+
        '    pImg.image, pImg.x, pImg.y, pImg.width, pImg.height,\n'+
        '    setCol*chipWidth, setRow*chipHeight, chipWidth, chipHeight);\n'+
        '    ctx.restore();\n'+
        '}\n'+
        '\\setOn(setCol,setRow,p){\n'+
        '    if(setCol>=col || setRow>=row || setCol<0 || setRow<0) return;\n'+
        '    set(setCol,setRow,mapTable[setRow][setCol]);\n'+
        '    mapOnTable[setRow][setCol]=p;\n'+
        '    ctx=buf[0].getContext("2d");\n'+
        '    p=Math.floor(p);\n'+
        '    pImg=$Sprites.getImageList()[p];\n'+
        '    if (!pImg) return;\n'+
        '    ctx.save();\n'+
        '    ctx.drawImage(\n'+
        '    pImg.image, pImg.x, pImg.y, pImg.width, pImg.height,\n'+
        '    setCol*chipWidth, setRow*chipHeight, chipWidth, chipHeight);\n'+
        '    ctx.restore();\n'+
        '}\n'+
        '\\setOnAt(setX,setY,p){\n'+
        '    setOn(Math.floor(setX/chipWidth),Math.floor(setY/chipHeight),p);\n'+
        '}\n'+
        '\\setAt(setX,setY,p){\n'+
        '    set(Math.floor(setX/chipWidth),Math.floor(setY/chipHeight),p);\n'+
        '}\n'+
        '\\get(getCol,getRow){\n'+
        '    if(getCol<col && getRow<row && getCol>=0 && getRow>=0) return mapTable[getRow][getCol];\n'+
        '    return -1;\n'+
        '}\n'+
        '\\getAt(getX,getY){\n'+
        '    return get(Math.floor(getX/chipWidth),Math.floor(getY/chipHeight));\n'+
        '}\n'+
        '\\getOn(getCol,getRow){\n'+
        '    if(getCol<col && getRow<row && getCol>=0 && getRow>=0) return mapOnTable[getRow][getCol];\n'+
        '    return -1;\n'+
        '}\n'+
        '\\getOnAt(getX,getY){\n'+
        '    return getOn(Math.floor(getX/chipWidth),Math.floor(getY/chipHeight));\n'+
        '}\n'+
        '\\scrollTo(scrollX,scrollY){\n'+
        '    sx=-scrollX;\n'+
        '    sy=-scrollY;\n'+
        '}\n'+
        '\\draw(ctx) {\n'+
        '    pImg=buf[0];\n'+
        '    ctx.save();\n'+
        '    ctx.drawImage(\n'+
        '    pImg, 0, 0,col*chipWidth, row*chipHeight,\n'+
        '    sx, sy, col*chipWidth, row*chipHeight);\n'+
        '    ctx.restore();\n'+
        '}\n'
      ,
      'MapEditor.tonyu': 
        'extends Actor;\n'+
        'native prompt;\n'+
        'loadMode=false;\n'+
        'print("Load Data?: Y or N");\n'+
        'while(true){\n'+
        '    if(getkey("y")>0){\n'+
        '        loadMode=true;\n'+
        '        break;\n'+
        '    }\n'+
        '    if(getkey("n")>0){\n'+
        '        loadMode=false;\n'+
        '        break;\n'+
        '    }\n'+
        '    update();\n'+
        '}\n'+
        'if(loadMode){\n'+
        '    fileName=prompt("Input json file (*.json)","map.json");\n'+
        '    if(fileName){\n'+
        '        mapDataFile=file("../maps/").rel(fileName);\n'+
        '    }\n'+
        '    if(mapDataFile.obj()){\n'+
        '        baseData=mapDataFile.obj();\n'+
        '    }else{\n'+
        '        mapDataFile=file(fileName);\n'+
        '        if(mapDataFile.obj()){\n'+
        '            baseData=mapDataFile.obj();\n'+
        '        }\n'+
        '    }\n'+
        '    if(baseData==undefined){\n'+
        '        print("Load failed");\n'+
        '        loadMode=false;\n'+
        '    }else if(baseData[0] && baseData[1]){\n'+
        '        mapData=baseData[0];\n'+
        '        mapOnData=baseData[1];\n'+
        '    }\n'+
        '}\n'+
        'update();\n'+
        '//if(mapData){\n'+
        '    /*\n'+
        '    print("Load Data?: Y or N");\n'+
        '    while(true){\n'+
        '        if(getkey("y")==1){\n'+
        '            loadMode=true;\n'+
        '            break;\n'+
        '        }\n'+
        '        if(getkey("n")==1){\n'+
        '            loadMode=false;\n'+
        '            break;\n'+
        '        }\n'+
        '    }*/\n'+
        '//}\n'+
        'if(!loadMode){\n'+
        '    row=prompt("input row");\n'+
        '    update();\n'+
        '    col=prompt("input col");\n'+
        '    panel=new Panel{width:col*32,height:row*32};\n'+
        '    panel.x=panel.width/2+10;\n'+
        '    panel.y=panel.height/2;\n'+
        '    panel.setFillStyle("cyan");\n'+
        '    panel.fillRect(0,0,panel.width,panel.height);\n'+
        '    $map=new Map{row,col,chipWidth:32,chipHeight:32};\n'+
        '}else{\n'+
        '    if(!mapOnData){\n'+
        '        $map=new Map{row:mapData.length,col:mapData[0].length,chipWidth:32,chipHeight:32,mapData};\n'+
        '    }else{\n'+
        '        $map=new Map{row:mapData.length,col:mapData[0].length,chipWidth:32,chipHeight:32,mapData,mapOnData};\n'+
        '    }\n'+
        '    panel=new Panel{width:$map.col*32,height:$map.row*32,zOrder:100};\n'+
        '    panel.x=panel.width/2;\n'+
        '    panel.y=panel.height/2;\n'+
        '    panel.setFillStyle("cyan");\n'+
        '    panel.fillRect(0,0,panel.width,panel.height);\n'+
        '}\n'+
        '$mp=new Map{row:16,col:8,chipWidth:32,chipHeight:32};\n'+
        'counter=0;\n'+
        'for(var i=0;i<16;i++){\n'+
        '    for(var j=0;j<8;j++){\n'+
        '        $mp.set(j,i,$pat_mapchip+counter);\n'+
        '        counter++;\n'+
        '    }\n'+
        '}\n'+
        'mode="get";\n'+
        'prevMode="set";\n'+
        'mapp=0;\n'+
        'mx=0;\n'+
        'my=0;\n'+
        'chipX=0;\n'+
        'chipY=0;\n'+
        'x=$screenWidth-16;\n'+
        'y=$screenHeight-16;\n'+
        'while(true){\n'+
        '    p=mapp;\n'+
        '    if(getkey("e")==1){\n'+
        '        $mp.scrollTo(1000,1000);\n'+
        '        mode="erase";\n'+
        '        print(mode+" mode");\n'+
        '    }\n'+
        '    if(getkey("s")==1){\n'+
        '        $mp.scrollTo(1000,1000);\n'+
        '        if(mode=="set"){\n'+
        '            mode="setOn";\n'+
        '        }else{\n'+
        '            mode="set";\n'+
        '        }\n'+
        '        print(mode+" mode");\n'+
        '    }\n'+
        '    if(getkey("o")==1){\n'+
        '        $mp.scrollTo(1000,1000);\n'+
        '        mode="setOn";\n'+
        '    }\n'+
        '    if(getkey("g")==1){\n'+
        '        if(mode!="get"){\n'+
        '            prevMode=mode;\n'+
        '            $mp.scrollTo(0,0);\n'+
        '            mode="get";\n'+
        '            chipX=0;\n'+
        '            chipY=0;\n'+
        '        }else{\n'+
        '            $mp.scrollTo(1000,1000);\n'+
        '            mode=prevMode;\n'+
        '        }\n'+
        '        print(mode+" mode");\n'+
        '    }\n'+
        '    if(getkey("p")==1){\n'+
        '        //add\n'+
        '        saveFileName=prompt("input json file(*.json)","map.json");\n'+
        '        /*print("mapTable=[");\n'+
        '        data="[";\n'+
        '        for(var i=0;i<$map.row-1;i++){\n'+
        '            var tmp=[];\n'+
        '            tmp=$map.mapTable[i].concat(tmp);\n'+
        '            print("["+tmp+"],");\n'+
        '            data+="["+tmp+"],";\n'+
        '        }\n'+
        '        var tmp=[];\n'+
        '        tmp=$map.mapTable[i].concat(tmp);\n'+
        '        print("["+tmp+"]");\n'+
        '        data+="["+tmp+"]";\n'+
        '        print("];");\n'+
        '        data+="]";*/\n'+
        '        //add\n'+
        '        saveDataFile=file("../maps/").rel(saveFileName);\n'+
        '        data=[$map.mapTable,$map.mapOnTable];\n'+
        '        //comment\n'+
        '        //mapDataFile.obj(data);\n'+
        '        //add\n'+
        '        saveDataFile.obj(data);\n'+
        '        print(saveFileName+" Saved");\n'+
        '        //mapDataFile.obj.push($map.mapOnTable);\n'+
        '    }\n'+
        '    if(getkey("c")==1){\n'+
        '        $mp.scrollTo(1000,1000);\n'+
        '        mode="spuit";\n'+
        '        print(mode+" mode");\n'+
        '    }\n'+
        '    if(mode!="get"){\n'+
        '        if(getkey("left")>0) mx=mx+8;\n'+
        '        if(getkey("right")>0) mx=mx-8;\n'+
        '        if(getkey("up")>0) my=my+8;\n'+
        '        if(getkey("down")>0) my=my-8;\n'+
        '        $map.scrollTo(mx,my);\n'+
        '    }else{\n'+
        '        if(getkey("left")>0) chipX=chipX+8;\n'+
        '        if(getkey("right")>0) chipX=chipX-8;\n'+
        '        if(getkey("up")>0) chipY=chipY+8;\n'+
        '        if(getkey("down")>0) chipY=chipY-8;\n'+
        '        $mp.scrollTo(chipX,chipY);\n'+
        '    }\n'+
        '    panel.x=panel.width/2-mx;\n'+
        '    panel.y=panel.height/2-my;\n'+
        '    if(mode=="set" && getkey(1)>0){\n'+
        '        $map.setAt($mouseX+mx,$mouseY+my,mapp);\n'+
        '        $map.setOnAt($mouseX+mx,$mouseY+my,-1);\n'+
        '    }else if(mode=="erase" && getkey(1)>0){\n'+
        '        $map.setAt($mouseX+mx,$mouseY+my,-1);\n'+
        '    }else if(mode=="get" && getkey(1)>0){\n'+
        '        mapp=$mp.getAt($mouseX+chipX,$mouseY+chipY);\n'+
        '        mode=prevMode;\n'+
        '        $mp.scrollTo(1000,1000);\n'+
        '        print(mode+" mode");\n'+
        '        updateEx(10);\n'+
        '    }else if(mode=="setOn" && getkey(1)>0){\n'+
        '        $map.setOnAt($mouseX+mx,$mouseY+my,mapp);\n'+
        '    }else if(mode=="spuit" && getkey(1)>0){\n'+
        '        mapp=$map.getAt($mouseX+mx,$mouseY+my);\n'+
        '        mode="set";\n'+
        '        print(mode+" mode");\n'+
        '        updateEx(10);\n'+
        '    }\n'+
        '    update();\n'+
        '}'
      ,
      'MathMod.tonyu': 
        'extends null;\n'+
        'native Math;\n'+
        '\n'+
        'nowait \\sin(d) {\n'+
        '    return Math.sin(rad(d));\n'+
        '}\n'+
        'nowait \\cos(d) {\n'+
        '    return Math.cos(rad(d));\n'+
        '}\n'+
        'nowait \\rad(d) {\n'+
        '    return d/180*Math.PI;\n'+
        '}\n'+
        'nowait \\deg(d) {\n'+
        '    return d/Math.PI*180;\n'+
        '}\n'+
        '\n'+
        'nowait \\abs(v) {\n'+
        '    return Math.abs(v);\n'+
        '}\n'+
        'nowait \\atan2(x,y) {\n'+
        '    return deg(Math.atan2(x,y));\n'+
        '}\n'+
        'nowait \\floor(x) {\n'+
        '    return Math.floor(x);\n'+
        '}\n'+
        'nowait \\angleDiff(a,b) {\n'+
        '    var c;\n'+
        '    a=floor(a);\n'+
        '    b=floor(b);\n'+
        '    if (a>=b) {\n'+
        '        c=(a-b) % 360;\n'+
        '        if (c>=180) c-=360;\n'+
        '    } else {\n'+
        '        c=-((b-a) % 360);\n'+
        '        if (c<-180) c+=360;\n'+
        '    }\n'+
        '    return c;\n'+
        '}\n'+
        'nowait \\sqrt(t) {\n'+
        '    return Math.sqrt(t);\n'+
        '}\n'+
        'nowait \\dist(dx,dy) {\n'+
        '    if (typeof dx=="object") {\n'+
        '        var t=dx;\n'+
        '        dx=t.x-x;dy=t.y-y;\n'+
        '    }\n'+
        '    return sqrt(dx*dx+dy*dy);\n'+
        '}\n'+
        'nowait \\trunc(f) {\n'+
        '    if(f>=0) return Math.floor(f);\n'+
        '    else return Math.ceil(f);\n'+
        '}\n'+
        'nowait \\ceil(f){\n'+
        '    return Math.ceil(f);\n'+
        '}\n'+
        '\n'+
        'nowait \\rnd(r) {\n'+
        '    if (typeof r=="number") {\n'+
        '        return Math.floor(Math.random()*r);\n'+
        '    }\n'+
        '    return Math.random();\n'+
        '}'
      ,
      'MediaPlayer.tonyu': 
        '\n'+
        '\\play() {\n'+
        '    \n'+
        '}\n'+
        '\\stop() {\n'+
        '    \n'+
        '}\n'+
        '\\playSE() {\n'+
        '    \n'+
        '}\n'+
        '\\setDelay(){\n'+
        '    \n'+
        '}\n'+
        '\\setVolume(){\n'+
        '    \n'+
        '}'
      ,
      'NoviceActor.tonyu': 
        'extends BaseActor;\n'+
        'native Tonyu;\n'+
        '\n'+
        '\\sleep(n) {\n'+
        '    if(!n) n=1;\n'+
        '    for(n;n>0;n--) update();\n'+
        '}\n'+
        '\\initSprite() {\n'+
        '    if (!_sprite) {\n'+
        '        _sprite=new BaseActor{owner:this};// Sprites.add{owner:this};\n'+
        '        $Sprites.add(this);\n'+
        '    }\n'+
        '}\n'+
        '\\say(text,size) {\n'+
        '    if (!size) size=15;\n'+
        '    initSprite();\n'+
        '    _sprite._fukidashi={text:text, size:size, c:30};\n'+
        '}\n'+
        '\\sprite(x,y,p) {\n'+
        '    go(x,y,p);\n'+
        '}\n'+
        '\\show(x,y,p) {\n'+
        '    go(x,y,p);\n'+
        '}\n'+
        'nowait \\draw(ctx) {\n'+
        '    _sprite.draw(ctx);\n'+
        '}\n'+
        '\\getCrashRect() {\n'+
        '    return _sprite.getCrashRect();\n'+
        '}\n'+
        '\\go(x,y,p) {\n'+
        '    initSprite();\n'+
        '    _sprite.x=x;\n'+
        '    _sprite.y=y;\n'+
        '    if (p!=null) _sprite.p=p;\n'+
        '    //update();\n'+
        '}\n'+
        '\\change(p) {\n'+
        '    initSprite();\n'+
        '    _sprite.p=p;\n'+
        '}'
      ,
      'Pad.tonyu': 
        'extends Actor;\n'+
        '\\new(opt) {\n'+
        '    super(opt);\n'+
        '    padImageP = $pat_inputPad;\n'+
        '    jujiKey = new Actor{x:96+1, y:$screenHeight-96-1, p:padImageP+0,zOrder:-9,layer:$FrontSprites};\n'+
        '    no1Key = new Actor{x:$screenWidth-96, y:$screenHeight-96, p:padImageP+1,zOrder:-9,layer:$FrontSprites};\n'+
        '    jujiKey.show();\n'+
        '    no1Key.show();\n'+
        '    \n'+
        '    jujiKeyPushU = new Actor{x:jujiKey.x, y:jujiKey.y-60, p:padImageP+2, zOrder:-10,layer:$FrontSprites};\n'+
        '    jujiKeyPushL = new Actor{x:jujiKey.x-60, y:jujiKey.y, p:padImageP+2, zOrder:-10,layer:$FrontSprites};\n'+
        '    jujiKeyPushR = new Actor{x:jujiKey.x+60, y:jujiKey.y, p:padImageP+2, zOrder:-10,layer:$FrontSprites};\n'+
        '    jujiKeyPushD = new Actor{x:jujiKey.x, y:jujiKey.y+60, p:padImageP+2, zOrder:-10,layer:$FrontSprites};\n'+
        '    jujiKeyPush1 = new Actor{x:no1Key.x, y:no1Key.y, p:padImageP+2, scaleX:2, zOrder:-10,layer:$FrontSprites};\n'+
        '    jujiKeyPushU.hide();\n'+
        '    jujiKeyPushL.hide();\n'+
        '    jujiKeyPushR.hide();\n'+
        '    jujiKeyPushD.hide();\n'+
        '    jujiKeyPush1.hide();\n'+
        '}\n'+
        '\\die(){\n'+
        '    jujiKey.die();\n'+
        '    no1Key.die();\n'+
        '    jujiKeyPushU.die();\n'+
        '    jujiKeyPushL.die();\n'+
        '    jujiKeyPushR.die();\n'+
        '    jujiKeyPushD.die();\n'+
        '    jujiKeyPush1.die();\n'+
        '    super.die();\n'+
        '}\n'+
        'APAD_DIAG_SIZE = 96;\n'+
        '\\padUpdate() {\n'+
        '    // 操作 //\n'+
        '    keyPushL = 0;\n'+
        '    keyPushR = 0;\n'+
        '    keyPushU = 0;\n'+
        '    keyPushD = 0;\n'+
        '    keyPush1 = 0;\n'+
        '    \n'+
        '    padKeyNotapCnt ++;\n'+
        '    for (var i=0; i<5; i++) { // タップ判定・マウス判定 //\n'+
        '        var t = $touches[i];\n'+
        '        if (t.touched) {\n'+
        '            if (isOnRectWH(t.x, t.y, jujiKey.x-32-APAD_DIAG_SIZE/2, jujiKey.y-32-64, 64+APAD_DIAG_SIZE, 64)) keyPushU = 1;\n'+
        '            if (isOnRectWH(t.x, t.y, jujiKey.x-32-APAD_DIAG_SIZE/2, jujiKey.y-32+64, 64+APAD_DIAG_SIZE, 64)) keyPushD = 1;\n'+
        '            if (isOnRectWH(t.x, t.y, jujiKey.x-32-64, jujiKey.y-32-APAD_DIAG_SIZE/2, 64, 64+APAD_DIAG_SIZE)) keyPushL = 1;\n'+
        '            if (isOnRectWH(t.x, t.y, jujiKey.x-32+64, jujiKey.y-32-APAD_DIAG_SIZE/2, 64, 64+APAD_DIAG_SIZE)) keyPushR = 1;\n'+
        '            if (isOnRectWH(t.x, t.y, no1Key.x-64, no1Key.y-64, 128, 128)) keyPush1 = 1;\n'+
        '            padKeySW = 1;\n'+
        '            padKeyNotapCnt = 0;\n'+
        '        }\n'+
        '    }\n'+
        '    \n'+
        '    // カウントアップ\n'+
        '    if (keyPushL) keyCntL ++; else keyCntL = 0;\n'+
        '    if (keyPushR) keyCntR ++; else keyCntR = 0;\n'+
        '    if (keyPushU) keyCntU ++; else keyCntU = 0;\n'+
        '    if (keyPushD) keyCntD ++; else keyCntD = 0;\n'+
        '    if (keyPush1) keyCnt1 ++; else keyCnt1 = 0;\n'+
        '    \n'+
        '    // 表示\n'+
        '    if (keyPushL) jujiKeyPushL.show(); else jujiKeyPushL.hide();\n'+
        '    if (keyPushR) jujiKeyPushR.show(); else jujiKeyPushR.hide();\n'+
        '    if (keyPushU) jujiKeyPushU.show(); else jujiKeyPushU.hide();\n'+
        '    if (keyPushD) jujiKeyPushD.show(); else jujiKeyPushD.hide();\n'+
        '    if (keyPush1) jujiKeyPush1.show(); else jujiKeyPush1.hide();\n'+
        '    \n'+
        '}\n'+
        '\n'+
        '\\getPadUp()    { return keyCntU; }\n'+
        '\\getPadDown()  { return keyCntD; }\n'+
        '\\getPadLeft()  { return keyCntL; }\n'+
        '\\getPadRight() { return keyCntR; }\n'+
        '\\getPadButton(i) {\n'+
        '    var value;\n'+
        '    if (i == 0) value = keyCnt1;\n'+
        '    return value;\n'+
        '}\n'+
        '\n'+
        '\\getUp()    { return keyCntU; }\n'+
        '\\getDown()  { return keyCntD; }\n'+
        '\\getLeft()  { return keyCntL; }\n'+
        '\\getRight() { return keyCntR; }\n'+
        '\\getButton(i) {\n'+
        '    var value;\n'+
        '    if (i == 0) value = keyCnt1;\n'+
        '    return value;\n'+
        '}\n'+
        '\n'+
        '// 範囲 //\n'+
        '\\isOnRect(mx, my, rx, ry, rx2, ry2) {\n'+
        '    return (rx <= mx && mx < rx2 && ry <= my && my < ry2);\n'+
        '}\n'+
        '\n'+
        '// 範囲 //\n'+
        '\\isOnRectWH(mx, my, rx, ry, rw, rh) {\n'+
        '    return (rx <= mx && mx < rx+rw && ry <= my && my < ry+rh);\n'+
        '}\n'+
        '\n'+
        'while(true) {\n'+
        '    padUpdate();\n'+
        '    update();\n'+
        '}'
      ,
      'Panel.tonyu': 
        'extends Actor;\n'+
        'native $;\n'+
        'native Math;\n'+
        'native isNaN;\n'+
        '\\new(opt){\n'+
        '    super(opt);\n'+
        '    this.width=width;\n'+
        '    this.height=height;\n'+
        '    if(align==null) align="center";\n'+
        '    if(alpha==null) alpha=255;\n'+
        '    if(_drawn==null) _drawn=false;\n'+
        '    buf=$("<canvas>").attr{width,height};\n'+
        '}\n'+
        '\\setPanel(width,height){\n'+
        '    this.width=width;\n'+
        '    this.height=height;\n'+
        '    buf=$("<canvas>").attr{width,height};\n'+
        '}\n'+
        '\\resize(width,height){\n'+
        '    setPanel(width,height);\n'+
        '}\n'+
        '\\getContext(){\n'+
        '    _drawn=true;\n'+
        '    return buf[0].getContext("2d");\n'+
        '}\n'+
        '\\setFillStyle(color){\n'+
        '    this.fillStyle=color;\n'+
        '}\n'+
        '\\fillRect(x,y,rectWidth,rectHeight){\n'+
        '    ctx=getContext();\n'+
        '    ctx.save();\n'+
        '    //ctx.clearRect(0,0,this.width,this.height);\n'+
        '    ctx.fillStyle=fillStyle;\n'+
        '    ctx.fillRect(x,y,rectWidth,rectHeight);\n'+
        '    ctx.restore();\n'+
        '}\n'+
        '\\fillText(text,x,y,size,align){\n'+
        '    ctx=getContext();\n'+
        '    ctx.save();\n'+
        '    //ctx.clearRect(0,0,this.width,this.height);\n'+
        '    ctx.textAlign = align;\n'+
        '    ctx.fillStyle=fillStyle;\n'+
        '    ctx.font=size+"px \'Courier New\'";\n'+
        '    ctx.fillText(text,x,y);\n'+
        '    ctx.restore();\n'+
        '}\n'+
        '\\clearRect(clearX,clearY,clearW,clearH){\n'+
        '    ctx=getContext();\n'+
        '    ctx.save();\n'+
        '    ctx.clearRect(clearX,clearY,clearW,clearH);\n'+
        '    ctx.restore();\n'+
        '}\n'+
        '\\getPixel(getX,getY){\n'+
        '    if(typeof getX=="number" && !isNaN(getX) && \n'+
        '    typeof getY=="number" && !isNaN(getY)){\n'+
        '        ctx=getContext();\n'+
        '        imagedata=ctx.getImageData(getX,getY,1,1);\n'+
        '        colordata=[imagedata.data[0],imagedata.data[1],imagedata.data[2],imagedata.data[3]];\n'+
        '        //print(imagedata.data);\n'+
        '    }else{\n'+
        '        colordata=[0,0,0,0];\n'+
        '    }\n'+
        '    return(colordata);\n'+
        '}\n'+
        '\\scroll(scrollX,scrollY){\n'+
        '    ctx=getContext();\n'+
        '    ctx.save();\n'+
        '    imagedata=ctx.getImageData(0,0,this.width,this.height);\n'+
        '    clearRect(0,0,width,height);\n'+
        '    ctx.putImageData(imagedata,-scrollX,-scrollY);\n'+
        '    ctx.restore();\n'+
        '}\n'+
        '\\draw(ctx){\n'+
        '    if(_drawn){\n'+
        '        pImg=buf[0];\n'+
        '        ctx.save();\n'+
        '        if(align=="left"){\n'+
        '            ctx.translate(x+width/2,y+height/2);\n'+
        '        }else if(align=="center"){\n'+
        '            ctx.translate(x,y);\n'+
        '        }else if(align=="right"){\n'+
        '            ctx.translate(x-width/2,y-height/2);\n'+
        '        }\n'+
        '        if(this.rotation!=0){\n'+
        '            ctx.rotate(this.rotation/180*Math.PI);\n'+
        '        }else{\n'+
        '            ctx.rotate(this.rotate/180*Math.PI);\n'+
        '        }\n'+
        '        ctx.globalAlpha=this.alpha/255;\n'+
        '        ctx.drawImage(\n'+
        '        pImg, 0, 0,width,height,\n'+
        '        -width/2, -height/2, width ,height);\n'+
        '        ctx.restore();\n'+
        '    }\n'+
        '}'
      ,
      'PlainChar.tonyu': 
        'extends Actor;\n'+
        '\n'+
        'native Tonyu;\n'+
        'native Math;\n'+
        '\\new(x,y,p) {\n'+
        '    if (Tonyu.runMode) {\n'+
        '        var thg=currentThreadGroup();\n'+
        '        if (thg) _th=thg.addObj(this,"tMain");\n'+
        '        initSprite();\n'+
        '    }\n'+
        '    if (typeof x=="object") Tonyu.extend(this,x); \n'+
        '    else if (typeof x=="number") {\n'+
        '        this.x=x;\n'+
        '        this.y=y;\n'+
        '        this.p=p;\n'+
        '    }\n'+
        '}\n'+
        '\\draw(c) {\n'+
        '    onDraw();\n'+
        '    if (_isInvisible) return;\n'+
        '    super.draw(c);\n'+
        '}\n'+
        '\\setVisible(v) {\n'+
        '    _isInvisible=!v;\n'+
        '}\n'+
        '\\onDraw() {\n'+
        '    \n'+
        '}\n'+
        '\\update() {\n'+
        '    onUpdate();\n'+
        '    super.update();\n'+
        '}\n'+
        '\\onUpdate() {\n'+
        '    \n'+
        '}\n'+
        '\\initSprite() {\n'+
        '    if(layer && typeof layer.add=="function"){\n'+
        '        layer.add(this);\n'+
        '    }else{\n'+
        '        $Sprites.add(this);\n'+
        '    }\n'+
        '    onAppear();\n'+
        '}\n'+
        '\\tMain() {\n'+
        '    main();\n'+
        '    die();\n'+
        '}\n'+
        '\\color(r,g,b) {\n'+
        '    return "rgb("+[r,g,b].join(",")+")";\n'+
        '}\n'+
        '\\drawText(x,y,text,col,size) {\n'+
        '    if ($debug) return;\n'+
        '    if (!size) size=15;\n'+
        '    if (!col) col="cyan";\n'+
        '    var tp=all(T1Text).find \\(t) {return t.hidden;};\n'+
        '    if (tp.length>0) {\n'+
        '        tp[0].extend{x,y,text,fillStyle:col, size,hidden:false};\n'+
        '    }else {\n'+
        '        new T1Text{x,y,text,fillStyle:col, size};  \n'+
        '    }\n'+
        '}\n'+
        '\\drawLine(x,y,tx,ty,col) {\n'+
        '    if (!col) col="white";\n'+
        '    var tp=all(T1Line).find \\(t) {return t.hidden;};\n'+
        '    if (tp.length>0) {\n'+
        '        tp[0].extend{x,y,tx,ty,col};\n'+
        '    }else {\n'+
        '        new T1Line{x,y,tx,ty,col};  \n'+
        '    }\n'+
        '}\n'+
        '\\appear(t) {\n'+
        '    return t;\n'+
        '}\n'+
        '\\trunc(f) {\n'+
        '    return Math.trunc(f);\n'+
        '}\n'+
        '\\loadPage(page,arg){\n'+
        '    all().die();\n'+
        '    new page(arg);\n'+
        '    die();\n'+
        '}'
      ,
      'PlayMod.tonyu': 
        'extends BaseActor;\n'+
        'nowait \\initMML() {\n'+
        '    if (mmlInited) return;\n'+
        '    mmlInited=true;\n'+
        '    $currentProject.requestPlugin("timbre");\n'+
        '    if (!$MMLS) {\n'+
        '       $MMLS={};\n'+
        '       $WaveTable=new WaveTable;\n'+
        '       $Boot.on("stop", releaseMML);\n'+
        '    }\n'+
        '    on("die") \\() { play().stop(); };\n'+
        '}\n'+
        'nowait \\releaseMML() {\n'+
        '    if ($MMLS) {\n'+
        '       for (var k,v in $MMLS) {\n'+
        '          v.stop();\n'+
        '       }\n'+
        '       $MMLS=null;\n'+
        '    } \n'+
        '    if ($WaveTable) {\n'+
        '       $WaveTable.stop();\n'+
        '       $WaveTable=null;\n'+
        '    }\n'+
        '}\n'+
        '\\play() {\n'+
        '    initMML();\n'+
        '    if (!_mml) _mml=new MML;\n'+
        '    if (isDead() || arguments.length==0) return _mml;\n'+
        '    var mmls=[];\n'+
        '    for (var i=0; i<arguments.length; i++) {\n'+
        '        mmls.push(arguments[i]);\n'+
        '    }\n'+
        '    _mml.play(mmls);\n'+
        '    while (_mml.bufferCount()>2) {\n'+
        '        update();\n'+
        '    }\n'+
        '    return _mml;\n'+
        '}\n'+
        'nowait \\playSE() {\n'+
        '    initMML();\n'+
        '    var mml=new MML;\n'+
        '    var mmls=[];\n'+
        '    for (var i=0; i<arguments.length; i++) {\n'+
        '        mmls.push(arguments[i]);\n'+
        '    }\n'+
        '    mml.play(mmls);\n'+
        '    return mml;\n'+
        '}\n'
      ,
      'ScaledCanvas.tonyu': 
        'extends Actor;\n'+
        'native $;\n'+
        'native Math;\n'+
        '\n'+
        '// canvas:phisical  buf: logical\n'+
        '\\new (opt) {\n'+
        '    extend(opt);\n'+
        '    // canvas/ width,height\n'+
        '    resize(width, height);\n'+
        '    cw=canvas.width();\n'+
        '    ch=canvas.height();\n'+
        '    cctx=canvas[0].getContext("2d");\n'+
        '    this.color="rgb(20,80,180)";\n'+
        '    sx=0;\n'+
        '    sy=0;\n'+
        '    isDrawGrid=$Sprites.isDrawGrid;\n'+
        '}\n'+
        '\\resize(width,height) {\n'+
        '    this.width=width;\n'+
        '    this.height=height;\n'+
        '    buf=$("<canvas>").attr{width,height};\n'+
        '    ctx=buf[0].getContext("2d");  \n'+
        '    $screenWidth=width;\n'+
        '    $screenHeight=height;\n'+
        '    if($panel){\n'+
        '        $panel.setPanel($screenWidth,$screenHeight);\n'+
        '    }\n'+
        '}\n'+
        '\\shouldDraw1x1(srcw,srch,dstw,dsth) {\n'+
        '    // srcw=465 -> dstw=460...665\n'+
        '    var larger=200;\n'+
        '    var smaller=5;\n'+
        '    return srcw-smaller<=dstw && dstw<=srcw+larger &&\n'+
        '    srch-smaller<=dsth && dsth<=srch+larger;\n'+
        '}\n'+
        '\\draw() {\n'+
        '    cw=canvas.width();\n'+
        '    ch=canvas.height();\n'+
        '    var calcw=ch/height*width; // calch=ch\n'+
        '    var calch=cw/width*height; // calcw=cw\n'+
        '    if (calch>ch) calch=ch;\n'+
        '    if (calcw>cw) calcw=cw;\n'+
        '    cctx.clearRect(0,0,cw,ch);\n'+
        '    if (shouldDraw1x1(width,height,calcw,calch)) {\n'+
        '        calcw=width;calch=height;\n'+
        '    }\n'+
        '    var marginw=Math.floor((cw-calcw)/2);\n'+
        '    var marginh=Math.floor((ch-calch)/2);\n'+
        '    cctx.drawImage(buf[0],\n'+
        '    0,0,width, height, \n'+
        '    marginw,marginh,calcw, calch );\n'+
        '}\n'+
        '\\canvas2buf(point) {\n'+
        '    var calcw=ch/height*width; // calch=ch\n'+
        '    var calch=cw/width*height; // calcw=cw\n'+
        '    if (calch>ch) calch=ch;\n'+
        '    if (calcw>cw) calcw=cw;\n'+
        '    if (shouldDraw1x1(width,height,calcw,calch)) {\n'+
        '        calcw=width;calch=height;\n'+
        '    }\n'+
        '    var marginw=Math.floor((cw-calcw)/2);\n'+
        '    var marginh=Math.floor((ch-calch)/2);\n'+
        '    \n'+
        '    return {x: (point.x-marginw)/calcw*width, \n'+
        '    y: (point.y-marginh)/calch*height};\n'+
        '}\n'+
        '\\setBGColor(color){\n'+
        '    this.color=color;\n'+
        '}\n'+
        '\\fillCanvas(cv){\n'+
        '    var ctx=cv.getContext("2d");\n'+
        '    ctx.save();\n'+
        '    ctx.fillStyle=$Screen.color;\n'+
        '    ctx.fillStyle=color;\n'+
        '    ctx.fillRect(0,0,cv.width,cv.height);\n'+
        '    if (isDrawGrid) drawGrid(cv);\n'+
        '    ctx.restore();\n'+
        '}\n'+
        '\\scrollTo(scrollX,scrollY){\n'+
        '    /*for(o in all()){\n'+
        '        //print(o.mapObj);\n'+
        '        if(o.mapObj){\n'+
        '            o.scrollTo(o.sx+scrollX,o.sy+scrollY);\n'+
        '        }else if(o.x!=undefined && o.y!=undefined){\n'+
        '            o.x+=scrollX;\n'+
        '            o.y+=scrollY;\n'+
        '        }\n'+
        '    }*/\n'+
        '    //sx=scrollX;\n'+
        '    //sy=scrollY;\n'+
        '    $Sprites.scrollTo(scrollX,scrollY);\n'+
        '}'
      ,
      'SecretChar.tonyu': 
        'extends PlainChar;\n'+
        '\n'+
        '\\draw(c) {\n'+
        '    \n'+
        '}'
      ,
      'SpriteChar.tonyu': 
        'extends PlainChar;\n'+
        '\n'+
        '\\new(x,y,p,f) {\n'+
        '    super(x,y,p);\n'+
        '    this.f=f;\n'+
        '    if (!this.x) this.x=0;\n'+
        '    if (!this.y) this.y=0;\n'+
        '    if (!this.p) this.p=0;\n'+
        '}\n'+
        '\\draw(c) {\n'+
        '    if (f) {\n'+
        '        if (!scaleY) scaleY=scaleX;\n'+
        '        scaleX*=-1;\n'+
        '    }\n'+
        '    super.draw(c);\n'+
        '    if (f) scaleX*=-1;\n'+
        '}'
      ,
      'Sprites.tonyu': 
        'extends Actor;\n'+
        'native Tonyu;\n'+
        '\\new() {\n'+
        '    sprites=[];\n'+
        '    imageList=[];\n'+
        '    hitWatchers=[];\n'+
        '    isDrawGrid=Tonyu.noviceMode;\n'+
        '    sx=0;\n'+
        '    sy=0;\n'+
        '    objId=0;\n'+
        '}\n'+
        'function add(s) {\n'+
        '    if (s.__addedToSprites) return;\n'+
        '    sprites.push(s);\n'+
        '    if(s.__genId==null){\n'+
        '        s.__genId=objId;\n'+
        '        objId++;\n'+
        '    }\n'+
        '    s.__addedToSprites=this;\n'+
        '    return s;\n'+
        '}\n'+
        'function remove(s) {\n'+
        '    var idx=sprites.indexOf(s);\n'+
        '    if (idx<0) return;\n'+
        '    sprites.splice(idx,1);\n'+
        '    delete s.__addedToSprites;\n'+
        '}\n'+
        'function clear() {sprites.splice(0,sprites.length);}\n'+
        'function compOrder(obj1, obj2){\n'+
        '    var val1=obj1.zOrder;\n'+
        '    var val2=obj2.zOrder;\n'+
        '    if(val1>val2){\n'+
        '        return -1;\n'+
        '    }else if(val1<val2){\n'+
        '        return 1;\n'+
        '    }else if(val1==val2){\n'+
        '        if(obj1.__genId>obj2.__genId){\n'+
        '            return 1;\n'+
        '        }else{\n'+
        '            return -1;\n'+
        '        }\n'+
        '        return 0;\n'+
        '    }\n'+
        '}\n'+
        'function draw(cv) {\n'+
        '    var ctx=cv.getContext("2d");\n'+
        '    ctx.save();\n'+
        '    /*\n'+
        '    ctx.fillStyle=$Screen.color;\n'+
        '    ctx.fillRect(0,0,cv.width,cv.height);\n'+
        '    if (isDrawGrid) drawGrid(cv);\n'+
        '    */\n'+
        '    var orderArray=[];\n'+
        '    orderArray=orderArray.concat(sprites);\n'+
        '    orderArray.sort(compOrder);\n'+
        '    ctx.translate(-sx,-sy);\n'+
        '    orderArray.forEach(\\(s){\n'+
        '        s.draw(ctx);\n'+
        '    });\n'+
        '    ctx.restore();\n'+
        '}\n'+
        'function checkHit() {\n'+
        '    hitWatchers.forEach(function (w) {\n'+
        '        sprites.forEach(function (a) {\n'+
        '            //console.log("a:",  a.owner);\n'+
        '            var a_owner=a;//a.owner|| a;\n'+
        '            if (! (a_owner instanceof w.A)) return;\n'+
        '            sprites.forEach(function (b) {\n'+
        '                var b_owner=b;//b.owner|| b;\n'+
        '                if (a===b) return;\n'+
        '                if (! (b_owner instanceof w.B)) return;\n'+
        '                //console.log("b:",  b.owner);\n'+
        '                if (a.crashTo1(b)) {\n'+
        '                    //console.log("hit", a.owner, b.owner);\n'+
        '                    w.h(a_owner,b_owner);\n'+
        '                }\n'+
        '            });\n'+
        '        });\n'+
        '    });\n'+
        '}\n'+
        'function watchHit(typeA, typeB, onHit) {\n'+
        '    var p={A: typeA, B:typeB, h:onHit};\n'+
        '    //console.log(p);\n'+
        '    hitWatchers.push(p);\n'+
        '}\n'+
        'function drawGrid(c) {\n'+
        '    var ctx=c.getContext("2d");\n'+
        '    ctx.textBaseline="top";\n'+
        '    ctx.save();\n'+
        '    ctx.strokeStyle="rgb(40,100,200)";\n'+
        '    for (var i=0 ; i<c.width ; i+=10) {\n'+
        '        ctx.beginPath();\n'+
        '        ctx.lineWidth=(i % 100 ==0 ? 4 : 1);\n'+
        '        ctx.moveTo(i,0);\n'+
        '        ctx.lineTo(i,c.height);\n'+
        '        ctx.closePath();\n'+
        '        ctx.stroke();\n'+
        '    }\n'+
        '    \n'+
        '    for (var i=0 ; i<c.height ; i+=10) {\n'+
        '        ctx.beginPath();\n'+
        '        ctx.lineWidth=(i % 100 ==0 ? 4 : 1);\n'+
        '        ctx.moveTo(0,i);\n'+
        '        ctx.lineTo(c.width,i);\n'+
        '        ctx.closePath();\n'+
        '        ctx.stroke();\n'+
        '    }\n'+
        '    ctx.fillStyle="white";\n'+
        '    ctx.font="15px monospaced";\n'+
        '    for (var i=100 ; i<c.width ; i+=100) {\n'+
        '        ctx.fillText(i, i,0);\n'+
        '    }\n'+
        '    for (var i=100 ; i<c.height ; i+=100) {\n'+
        '        ctx.fillText(i, 0,i);\n'+
        '    }\n'+
        '    ctx.restore();\n'+
        '}\n'+
        'function setImageList(il) {\n'+
        '    imageList=il;\n'+
        '}\n'+
        'function getImageList() {\n'+
        '    return imageList;\n'+
        '}\n'+
        'function scrollTo(scrollX,scrollY){\n'+
        '    sx=scrollX;\n'+
        '    sy=scrollY;\n'+
        '}'
      ,
      'T1Line.tonyu': 
        'extends Actor;\n'+
        '\\draw(ctx) {\n'+
        '    if (hidden) return;\n'+
        '    \n'+
        '    ctx.strokeStyle=col;\n'+
        '    ctx.beginPath();\n'+
        '    ctx.moveTo(x,y);\n'+
        '    ctx.lineTo(tx,ty);\n'+
        '    ctx.stroke();\n'+
        '    hidden=true;\n'+
        '}\n'
      ,
      'T1Map.tonyu': 
        'extends Map;\n'+
        'native Tonyu;\n'+
        'native $;\n'+
        '\n'+
        '\\setBGColor(c) {\n'+
        '    $Screen.setBGColor(c);\n'+
        '}\n'+
        '\\load(fileName) {\n'+
        '    /*\n'+
        '    o={\n'+
        '        "chipWidth":"32","chipHeight":"32",\n'+
        '        "pTable":[{name:"$pat_aaa", p:10}, {name:"$pat_bbb","p":25} ],\n'+
        '        "baseData":[\n'+
        '        [//map\n'+
        '        [0,6],[0,5],[1,3],\n'+
        '        [1,3],[1,2],[0,5]\n'+
        '        ],\n'+
        '        [//mapOn\n'+
        '        [-1,-1],[1,4],[0,2],\n'+
        '        [-1,-1],[-1,-1],[1,8]\n'+
        '        ]\n'+
        '        ]\n'+
        '    }\n'+
        '    */\n'+
        '    var f=file("../maps/").rel(fileName);\n'+
        '    var o=f.obj();\n'+
        '    chipWidth=o.chipWidth;\n'+
        '    chipHeight=o.chipHeight;\n'+
        '    baseData=o.baseData;\n'+
        '    mapTable=conv(baseData[0],o.pTable);\n'+
        '    mapData=mapTable;\n'+
        '    row=mapTable.length;\n'+
        '    col=mapTable[0].length;\n'+
        '    mapOnTable=conv(baseData[1],o.pTable);\n'+
        '    mapOnData=mapOnTable;\n'+
        '    \n'+
        '    buf=$("<canvas>").attr{width:col*chipWidth,height:row*chipHeight};\n'+
        '    initMap();   \n'+
        '}\n'+
        '\\conv(mat, tbl) {\n'+
        '    var res=[];\n'+
        '    mat.forEach \\(row) {\n'+
        '        var rrow=[];\n'+
        '        res.push(rrow);\n'+
        '        row.forEach \\(dat) {// dat:[0,20]\n'+
        '            var t=tbl[dat[0]];\n'+
        '            if (t) rrow.push(Tonyu.globals[t.name]+dat[1]);\n'+
        '            else rrow.push(dat[1]);\n'+
        '        };\n'+
        '    };\n'+
        '    return res;\n'+
        '}'
      ,
      'T1Page.tonyu': 
        'extends PlainChar;\n'+
        '\n'+
        '\\initGlobals() {\n'+
        '    $chars=$Sprites.sprites;\n'+
        '    $Boot.setFrameRate(60);\n'+
        '    $clBlack=color(0,0,0);\n'+
        '    $clRed=color(255,0,0);\n'+
        '    $clGreen=color(0,255,0);\n'+
        '    $clYellow=color(255,255,0);\n'+
        '    $clBlue=color(0,0,255);\n'+
        '    $clPink=color(255,0,255);\n'+
        '    $clAqua=color(0,255,255);\n'+
        '    $clWhite=color(255,255,255);\n'+
        '    $mplayer=new MediaPlayer;\n'+
        '}'
      ,
      'T1Text.tonyu': 
        'extends Actor;\n'+
        '\\draw(c) {\n'+
        '    if (hidden) return;\n'+
        '    c.font=size+"px \'ＭＳ Ｐゴシック\'";\n'+
        '    \n'+
        '    super.draw(c);\n'+
        '    hidden=true;\n'+
        '}\n'
      ,
      'T2Body.tonyu': 
        'extends BodyActor;\n'
      ,
      'T2Mod.tonyu': 
        'native Box2D;\n'+
        '\n'+
        '\\bvec(tx,ty) {\n'+
        '    var b2Vec2 = Box2D.Common.Math.b2Vec2;\n'+
        '    return new b2Vec2(tx/scale,ty/scale);  \n'+
        '}'
      ,
      'T2World.tonyu': 
        'extends Actor;\n'+
        '\n'+
        'includes T2Mod;\n'+
        '\n'+
        'native Box2D;\n'+
        'native Tonyu;\n'+
        '\\onAppear() {\n'+
        '    $currentProject.requestPlugin("box2d");  \n'+
        '    initWorld();\n'+
        '}\n'+
        'loop();\n'+
        '\n'+
        '\n'+
        '\\initWorld() {\n'+
        '    gravity=gravity || 9.8;\n'+
        '    gravityX=gravityX || 0;\n'+
        '    var b2World = Box2D.Dynamics.b2World;\n'+
        '    var b2Vec2 = Box2D.Common.Math.b2Vec2;\n'+
        '    scale=scale || 32;\n'+
        '    world = new b2World(\n'+
        '    new b2Vec2(gravityX, gravity)    //gravity\n'+
        '    ,  true                 //allow sleep\n'+
        '    );\n'+
        '    $t2World=this;\n'+
        '    $Boot.on("stop",releaseWorld);\n'+
        '    on("die",releaseWorld);\n'+
        '}\n'+
        '\\releaseWorld() {\n'+
        '    if ($t2World===this) $t2World=null;\n'+
        '}\n'+
        '\n'+
        '\\loop() {\n'+
        '    while(true) {\n'+
        '        world.Step(\n'+
        '        1 / $Boot.getFrameRate()  //frame-rate\n'+
        '        ,  10       //velocity iterations\n'+
        '        ,  10       //position iterations\n'+
        '        );\n'+
        '        world.DrawDebugData();\n'+
        '        world.ClearForces();\n'+
        '        updatePos();\n'+
        '        update();\n'+
        '    }\n'+
        '}\n'+
        '\\updatePos() {\n'+
        '    for (var b=world.GetBodyList();b;b=b.GetNext()) {\n'+
        '        var d=b.GetUserData();\n'+
        '        if(d) d.updatePos();\n'+
        '    }\n'+
        '}\n'
      ,
      'TObject.tonyu': 
        'extends null;\n'+
        'native Tonyu;\n'+
        '\\new (options) {\n'+
        '    if (typeof options=="object") extend(options);\n'+
        '    this.main();\n'+
        '}\n'+
        'nowait \\extend(obj) {\n'+
        '    return Tonyu.extend(this,obj);\n'+
        '}'
      ,
      'TQuery.tonyu': 
        'extends TObject;\n'+
        'includes MathMod;\n'+
        '\\new () {\n'+
        '    length=0;\n'+
        '}\n'+
        '\\tonyuIterator(arity) {\n'+
        '    var res={};\n'+
        '    res.i=0;\n'+
        '    if (arity==1) {\n'+
        '        res.next=function () {\n'+
        '            if (res.i>=this.length) return false;\n'+
        '            res[0]=this[res.i];\n'+
        '            res.i++;\n'+
        '            return true;\n'+
        '        };\n'+
        '    } else {\n'+
        '        res.next=function () {\n'+
        '            if (res.i>=this.length) return false;\n'+
        '            res[0]=res.i;\n'+
        '            res[1]=this[res.i];\n'+
        '            res.i++;\n'+
        '            return true;\n'+
        '        };\n'+
        '    }\n'+
        '    return res;\n'+
        '}\n'+
        '\\attr() {\n'+
        '    var values;\n'+
        '    if (length==0) return;\n'+
        '    if (arguments.length==1 && typeof arguments[0]=="string") {\n'+
        '        return this[0][arguments[0]];\n'+
        '    }\n'+
        '    if (arguments.length>=2) {\n'+
        '        values={};\n'+
        '        for (var i=0 ; i<arguments.length-1 ;i+=2) {\n'+
        '            values[arguments[i]]=arguments[i+1];\n'+
        '        }\n'+
        '    } else {\n'+
        '        values=arguments[0];\n'+
        '    }\n'+
        '    if (values) {\n'+
        '        for (var e in this) {\n'+
        '            e.extend( values);\n'+
        '        }\n'+
        '    }\n'+
        '}\n'+
        '\\genKeyfunc(key) {\n'+
        '    if (typeof key!="function") {\n'+
        '        return \\(o) {return o[key];};\n'+
        '    } else {\n'+
        '        return key;\n'+
        '    }\n'+
        '}\n'+
        '\\maxs(key) {\n'+
        '    var f=genKeyfunc(key);\n'+
        '    var res,reso=new TQuery;\n'+
        '    for (var o in this) {\n'+
        '        var v=f(o);\n'+
        '        if (res==null || v>=res) {\n'+
        '            if (v>res) reso=new TQuery;\n'+
        '            reso.push(o);\n'+
        '            res=v;\n'+
        '        }\n'+
        '    }\n'+
        '    return reso;\n'+
        '}\n'+
        '\\mins(key) {\n'+
        '    var f=genKeyfunc(key);\n'+
        '    var res,reso=new TQuery;\n'+
        '    for (var o in this) {\n'+
        '        var v=f(o);\n'+
        '        if (res==null || v<=res) {\n'+
        '            if (v<res) reso=new TQuery;\n'+
        '            reso.push(o);\n'+
        '            res=v;\n'+
        '        }\n'+
        '    }\n'+
        '    return reso;\n'+
        '}\n'+
        '\\minObj(key) {\n'+
        '    return mins(key)[0];\n'+
        '}\n'+
        '\\maxObj(key) {\n'+
        '    return maxs(key)[0];\n'+
        '}\n'+
        '\\nearests(x,y) {\n'+
        '    if (typeof x=="object") {y=x.y;x=x.x;}\n'+
        '    return mins \\(o) {\n'+
        '        return dist(o.x-x,o.y-y);\n'+
        '    };\n'+
        '}\n'+
        '\\nearest(x,y) {\n'+
        '    return nearests(x,y)[0];\n'+
        '}\n'+
        '\\withins(xo,yd,d) {\n'+
        '    var x,y;\n'+
        '    if (typeof xo=="object") {\n'+
        '        x=xo.x;y=xo.y;d=yd;\n'+
        '    } else {\n'+
        '        x=xo;y=yd;\n'+
        '    }\n'+
        '    return find \\(o) {\n'+
        '        return dist(o.x-x,o.y-y)<=d;\n'+
        '    };\n'+
        '}\n'+
        '\\within(xo,yd,d) {\n'+
        '    return withins(xo,yd,d).nearest();\n'+
        '}\n'+
        '\n'+
        '\\max(key) {\n'+
        '    var f=genKeyfunc(key);\n'+
        '    var res;\n'+
        '    for (var o in this) {\n'+
        '        var v=f(o);\n'+
        '        if (res==null || v>res) res=v;\n'+
        '    }\n'+
        '    return res;\n'+
        '}\n'+
        '\\min(key) {\n'+
        '    var f=genKeyfunc(key);\n'+
        '    var res;\n'+
        '    for (var o in this) {\n'+
        '        var v=f(o);\n'+
        '        if (res==null || v<res) res=v;\n'+
        '    }\n'+
        '    return res;\n'+
        '}\n'+
        '\\push(e) {\n'+
        '    this[length]=e;\n'+
        '    length++;\n'+
        '}\n'+
        '\\size() {return length;}\n'+
        '\\find(f) {\n'+
        '    var no=new TQuery;\n'+
        '    for (var o in this) {\n'+
        '        if (f(o)) no.push(o);\n'+
        '    }\n'+
        '    return no;\n'+
        '} \n'+
        '\\apply(name, args) {\n'+
        '    var res;\n'+
        '    if (!args) args=[];\n'+
        '    for (var o in this) {\n'+
        '        var f=o[name];\n'+
        '        if (typeof f=="function") {\n'+
        '            res=f.apply(o, args);\n'+
        '        }\n'+
        '    }\n'+
        '    return res;\n'+
        '}\n'+
        '// \\alive => find \\(o) => !o.isDead()  //  (in future)\n'+
        '\\alive() {\n'+
        '    return find \\(o) {\n'+
        '        return !o.isDead();\n'+
        '    };\n'+
        '}\n'+
        '\\die() {\n'+
        '    var a=alive();\n'+
        '    if (a.length==0) return false;\n'+
        '    a.apply("die");\n'+
        '    return true;\n'+
        '}\n'+
        '\n'+
        '\\klass(k) {\n'+
        '    return find \\(o) { return o instanceof k; };\n'+
        '}'
      ,
      'TextChar.tonyu': 
        'extends PlainChar;\n'+
        'native TextRect;\n'+
        '\n'+
        '\\new (xx,yy,t,c,s){\n'+
        '    super(xx,yy);\n'+
        '    text="";\n'+
        '    col=$clWhite;\n'+
        '    size=20;\n'+
        '    if (!this.x) this.x=0;\n'+
        '    if (!this.y) this.y=0;\n'+
        '    if (t) text=t;\n'+
        '    if (c) fillStyle=c;\n'+
        '    if (s) size=s;\n'+
        '}\n'+
        '\\draw(ctx) {\n'+
        '    if (!size) size=15;\n'+
        '    if (!align) align="left";\n'+
        '    if (!fillStyle) fillStyle="white";\n'+
        '    ctx.fillStyle=fillStyle;\n'+
        '    ctx.globalAlpha=this.alpha/255;\n'+
        '    ctx.font=size+"px \'ＭＳ Ｐゴシック\'";\n'+
        '    var rect=TextRect.draw(ctx, text, x, y, size, align , "fill");\n'+
        '    width=rect.w;\n'+
        '    height=rect.h;\n'+
        '    \n'+
        '    //    fillStyle=col;\n'+
        '    //super.draw(ctx);\n'+
        '}'
      ,
      'TextRectMod.tonyu': 
        'extends null;\n'+
        '\n'+
        'nowait function drawTextRect(ctx, text, x, topY, h, align , type) {\n'+
        '    if (!align) align="center";\n'+
        '    ctx.textBaseline="top";\n'+
        '    setFontSize(ctx, h);\n'+
        '    var met=ctx.measureText(text);\n'+
        '    var res={y:topY, w: met.width, h:h};\n'+
        '    var t=align.substring(0,1).toLowerCase();\n'+
        '    if (t=="l") res.x=x;\n'+
        '    else if (t=="r") res.x=x-met.width;\n'+
        '    else if (t=="c") res.x=x-met.width/2;\n'+
        '    if (type=="fill") ctx.fillText(text, res.x,topY);\n'+
        '    if (type=="stroke") ctx.strokeText(text, res.x,topY);\n'+
        '    return res;\n'+
        '}\n'+
        'nowait function setFontSize(ctx,sz) {\n'+
        '    var post=ctx.font.replace(/^[0-9\\.]+/,"");\n'+
        '    ctx.font=sz+post;\n'+
        '}\n'+
        '\n'+
        'nowait function fukidashi(ctx, text, x, y, sz) {\n'+
        '    var align="c";\n'+
        '    var theight=20;\n'+
        '    var margin=5;\n'+
        '    var r=drawTextRect(ctx, text, x,y-theight-margin-sz, sz, align);\n'+
        '    ctx.beginPath();\n'+
        '    ctx.moveTo(x , y);\n'+
        '    ctx.lineTo(x+margin , y-theight);\n'+
        '    ctx.lineTo(x+r.w/2+margin , y-theight);\n'+
        '    ctx.lineTo(x+r.w/2+margin , y-theight-r.h-margin*2);\n'+
        '    ctx.lineTo(x-r.w/2-margin , y-theight-r.h-margin*2);\n'+
        '    ctx.lineTo(x-r.w/2-margin , y-theight);\n'+
        '    ctx.lineTo(x-margin , y-theight);\n'+
        '    ctx.closePath();\n'+
        '    ctx.fill();\n'+
        '    ctx.stroke();\n'+
        '    \n'+
        '    var fs=ctx.fillStyle;\n'+
        '    ctx.fillStyle=ctx.strokeStyle;\n'+
        '    drawTextRect(ctx, text, x, y-theight-margin-sz, sz, align, "fill");\n'+
        '    ctx.fillStyle=fs;\n'+
        '}\n'+
        '\n'
      ,
      'WaveTable.tonyu': 
        'extends TObject;\n'+
        'native T;\n'+
        '\n'+
        'wav={};\n'+
        'env={};\n'+
        '\\setWav(num, synth) {\n'+
        '    wav[num]=synth;\n'+
        '}\n'+
        '\\setEnv(num, synth) {\n'+
        '    env[num]=synth;\n'+
        '}\n'+
        '\\get(w,e) {\n'+
        '    var synth=T("OscGen") {osc:wav[w], env:env[e], mul:0.25};\n'+
        '    return synth;\n'+
        '}\n'+
        '\\stop() {\n'+
        '    /*for (var k,v in tbl) {\n'+
        '        v.pause();\n'+
        '        v.stop();\n'+
        '    }*/\n'+
        '}\n'+
        '\n'+
        'if (typeof T!=="undefined") {\n'+
        '    //env=T("adsr", {a:0,d:200,s:0.5,r:10});\n'+
        '    env = T("env",{table:[1, [0.6, 50], [0, 100]], releaseNode:2});\n'+
        '    setEnv(0, env);\n'+
        '    setWav(0, T("pulse"));\n'+
        '    //    synth=T("OscGen") {wave:"pulse", env, mul:0.25};\n'+
        '    //set(0,synth);    \n'+
        '}\n'
      ,
      'js/': '{"concat.js":{"lastUpdate":1427976764696}}',
      'js/concat.js': 
        'Tonyu.klass.ensureNamespace(Tonyu.classes,\'kernel\');\n'+
        'Tonyu.classes.kernel.EventMod=Tonyu.klass([],{\n'+
        '  main :function _trc_func_1000000_0() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  fiber$main :function _trc_func_1000000_1(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  getEventHandlers :function _trc_func_1000017_2(type) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=1000048;\n'+
        '    if (! _this._handlers) {\n'+
        '      $LASTPOS=1000064;\n'+
        '      _this._handlers={};\n'+
        '    }\n'+
        '    $LASTPOS=1000083;\n'+
        '    if (! _this._handlers[type]) {\n'+
        '      $LASTPOS=1000105;\n'+
        '      _this._handlers[type]=[];\n'+
        '    }\n'+
        '    return _this._handlers[type];\n'+
        '  },\n'+
        '  fiber$getEventHandlers :function _trc_func_1000017_3(_thread,type) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=1000048;\n'+
        '    if (! _this._handlers) {\n'+
        '      $LASTPOS=1000064;\n'+
        '      _this._handlers={};\n'+
        '    }\n'+
        '    $LASTPOS=1000083;\n'+
        '    if (! _this._handlers[type]) {\n'+
        '      $LASTPOS=1000105;\n'+
        '      _this._handlers[type]=[];\n'+
        '    }\n'+
        '    _thread.retVal=_this._handlers[type];return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  on :function _trc_func_1000158_4(type,handler) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=1000184;\n'+
        '    _this.getEventHandlers(type).push(handler);\n'+
        '  },\n'+
        '  fiber$on :function _trc_func_1000158_5(_thread,type,handler) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=1000184;\n'+
        '    _this.getEventHandlers(type).push(handler);\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  fireEvent :function _trc_func_1000228_6(type,args) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var h;\n'+
        '    var _it_1;\n'+
        '    \n'+
        '    $LASTPOS=1000257;\n'+
        '    if (! args) {\n'+
        '      $LASTPOS=1000268;\n'+
        '      args=[];\n'+
        '    }\n'+
        '    $LASTPOS=1000282;\n'+
        '    _it_1=Tonyu.iterator(_this.getEventHandlers(type),1);\n'+
        '    while(_it_1.next()) {\n'+
        '      h=_it_1[0];\n'+
        '      \n'+
        '      $LASTPOS=1000331;\n'+
        '      h.apply(_this,args);\n'+
        '      \n'+
        '    }\n'+
        '  },\n'+
        '  fiber$fireEvent :function _trc_func_1000228_7(_thread,type,args) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var h;\n'+
        '    var _it_1;\n'+
        '    \n'+
        '    $LASTPOS=1000257;\n'+
        '    if (! args) {\n'+
        '      $LASTPOS=1000268;\n'+
        '      args=[];\n'+
        '    }\n'+
        '    $LASTPOS=1000282;\n'+
        '    _it_1=Tonyu.iterator(_this.getEventHandlers(type),1);\n'+
        '    while(_it_1.next()) {\n'+
        '      h=_it_1[0];\n'+
        '      \n'+
        '      $LASTPOS=1000331;\n'+
        '      h.apply(_this,args);\n'+
        '      \n'+
        '    }\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  __dummy: false\n'+
        '});\n'+
        'Tonyu.klass.addMeta(Tonyu.classes.kernel.EventMod,{"fullName":"kernel.EventMod","namespace":"kernel","shortName":"EventMod","decls":{"methods":{"main":{"nowait":false},"getEventHandlers":{"nowait":false},"on":{"nowait":false},"fireEvent":{"nowait":false}}}});\n'+
        '\n'+
        'Tonyu.klass.ensureNamespace(Tonyu.classes,\'kernel\');\n'+
        'Tonyu.classes.kernel.InputDevice=Tonyu.klass([],{\n'+
        '  main :function _trc_func_2000000_0() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  fiber$main :function _trc_func_2000000_1(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  initialize :function _trc_func_2000057_2() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=2000071;\n'+
        '    _this.listeners=[];\n'+
        '    $LASTPOS=2000090;\n'+
        '    _this.touchEmu=true;\n'+
        '  },\n'+
        '  handleListeners :function _trc_func_2000109_3() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var l;\n'+
        '    \n'+
        '    $LASTPOS=2000135;\n'+
        '    l = _this.listeners;\n'+
        '    $LASTPOS=2000157;\n'+
        '    _this.listeners=[];\n'+
        '    $LASTPOS=2000176;\n'+
        '    while (l.length>0) {\n'+
        '      $LASTPOS=2000197;\n'+
        '      (l.shift())();\n'+
        '      \n'+
        '    }\n'+
        '  },\n'+
        '  fiber$handleListeners :function _trc_func_2000109_4(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var l;\n'+
        '    \n'+
        '    $LASTPOS=2000135;\n'+
        '    l = _this.listeners;\n'+
        '    $LASTPOS=2000157;\n'+
        '    _this.listeners=[];\n'+
        '    $LASTPOS=2000176;\n'+
        '    while (l.length>0) {\n'+
        '      $LASTPOS=2000197;\n'+
        '      (l.shift())();\n'+
        '      \n'+
        '    }\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  addOnetimeListener :function _trc_func_2000218_5(l) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=2000247;\n'+
        '    _this.listeners.push(l);\n'+
        '  },\n'+
        '  fiber$addOnetimeListener :function _trc_func_2000218_6(_thread,l) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=2000247;\n'+
        '    _this.listeners.push(l);\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  initCanvasEvents :function _trc_func_2000270_7(cvj) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var cv;\n'+
        '    var handleMouse;\n'+
        '    var handleTouch;\n'+
        '    var handleTouchEnd;\n'+
        '    var d;\n'+
        '    \n'+
        '    $LASTPOS=2000300;\n'+
        '    cv = cvj[0];\n'+
        '    $LASTPOS=2000320;\n'+
        '    Tonyu.globals.$handleMouse=function (e) {\n'+
        '      var p;\n'+
        '      var mp;\n'+
        '      \n'+
        '      $LASTPOS=2000349;\n'+
        '      p = cvj.offset();\n'+
        '      $LASTPOS=2000378;\n'+
        '      mp = {x: e.clientX-p.left,y: e.clientY-p.top};\n'+
        '      $LASTPOS=2000435;\n'+
        '      mp=Tonyu.globals.$Screen.canvas2buf(mp);\n'+
        '      $LASTPOS=2000471;\n'+
        '      Tonyu.globals.$mouseX=mp.x;\n'+
        '      $LASTPOS=2000494;\n'+
        '      Tonyu.globals.$mouseY=mp.y;\n'+
        '      $LASTPOS=2000517;\n'+
        '      if (_this.touchEmu) {\n'+
        '        $LASTPOS=2000546;\n'+
        '        Tonyu.globals.$touches[0].x=mp.x;\n'+
        '        $LASTPOS=2000579;\n'+
        '        Tonyu.globals.$touches[0].y=mp.y;\n'+
        '        \n'+
        '      }\n'+
        '      $LASTPOS=2000619;\n'+
        '      _this.handleListeners();\n'+
        '    };\n'+
        '    $LASTPOS=2000651;\n'+
        '    Tonyu.globals.$touches=[{},{},{},{},{}];\n'+
        '    $LASTPOS=2000683;\n'+
        '    Tonyu.globals.$touches.findById=function (id) {\n'+
        '      var j;\n'+
        '      \n'+
        '      $LASTPOS=2000718;\n'+
        '      $LASTPOS=2000723;\n'+
        '      j = 0;\n'+
        '      while(j<Tonyu.globals.$touches.length) {\n'+
        '        {\n'+
        '          $LASTPOS=2000773;\n'+
        '          if (Tonyu.globals.$touches[j].identifier==id) {\n'+
        '            return Tonyu.globals.$touches[j];\n'+
        '            \n'+
        '          }\n'+
        '        }\n'+
        '        j++;\n'+
        '      }\n'+
        '    };\n'+
        '    $LASTPOS=2000883;\n'+
        '    Tonyu.globals.$handleTouch=function (e) {\n'+
        '      var p;\n'+
        '      var ts;\n'+
        '      var i;\n'+
        '      var src;\n'+
        '      var dst;\n'+
        '      var j;\n'+
        '      \n'+
        '      $LASTPOS=2000912;\n'+
        '      _this.touchEmu=false;\n'+
        '      $LASTPOS=2000937;\n'+
        '      p = cvj.offset();\n'+
        '      $LASTPOS=2000966;\n'+
        '      e.preventDefault();\n'+
        '      $LASTPOS=2000995;\n'+
        '      ts = e.originalEvent.changedTouches;\n'+
        '      $LASTPOS=2001043;\n'+
        '      $LASTPOS=2001048;\n'+
        '      i = 0;\n'+
        '      while(i<ts.length) {\n'+
        '        {\n'+
        '          $LASTPOS=2001093;\n'+
        '          src = ts[i];\n'+
        '          $LASTPOS=2001121;\n'+
        '          dst = Tonyu.globals.$touches.findById(src.identifier);\n'+
        '          $LASTPOS=2001177;\n'+
        '          if (! dst) {\n'+
        '            $LASTPOS=2001206;\n'+
        '            $LASTPOS=2001211;\n'+
        '            j = 0;\n'+
        '            while(j<Tonyu.globals.$touches.length) {\n'+
        '              {\n'+
        '                $LASTPOS=2001269;\n'+
        '                if (! Tonyu.globals.$touches[j].touched) {\n'+
        '                  $LASTPOS=2001322;\n'+
        '                  dst=Tonyu.globals.$touches[j];\n'+
        '                  $LASTPOS=2001364;\n'+
        '                  dst.identifier=src.identifier;\n'+
        '                  break;\n'+
        '                  \n'+
        '                  \n'+
        '                }\n'+
        '              }\n'+
        '              j++;\n'+
        '            }\n'+
        '            \n'+
        '          }\n'+
        '          $LASTPOS=2001497;\n'+
        '          if (dst) {\n'+
        '            $LASTPOS=2001525;\n'+
        '            _this.mp={x: src.pageX-p.left,y: src.pageY-p.top};\n'+
        '            $LASTPOS=2001586;\n'+
        '            _this.mp=Tonyu.globals.$Screen.canvas2buf(_this.mp);\n'+
        '            $LASTPOS=2001630;\n'+
        '            dst.x=_this.mp.x;\n'+
        '            $LASTPOS=2001659;\n'+
        '            dst.y=_this.mp.y;\n'+
        '            $LASTPOS=2001688;\n'+
        '            if (! dst.touched) {\n'+
        '              $LASTPOS=2001705;\n'+
        '              dst.touched=1;\n'+
        '            }\n'+
        '            \n'+
        '          }\n'+
        '        }\n'+
        '        i++;\n'+
        '      }\n'+
        '      $LASTPOS=2001755;\n'+
        '      Tonyu.globals.$mouseX=Tonyu.globals.$touches[0].x;\n'+
        '      $LASTPOS=2001787;\n'+
        '      Tonyu.globals.$mouseY=Tonyu.globals.$touches[0].y;\n'+
        '      $LASTPOS=2001819;\n'+
        '      _this.handleListeners();\n'+
        '    };\n'+
        '    $LASTPOS=2001851;\n'+
        '    Tonyu.globals.$handleTouchEnd=function (e) {\n'+
        '      var ts;\n'+
        '      var i;\n'+
        '      var src;\n'+
        '      var dst;\n'+
        '      \n'+
        '      $LASTPOS=2001883;\n'+
        '      ts = e.originalEvent.changedTouches;\n'+
        '      $LASTPOS=2001931;\n'+
        '      $LASTPOS=2001936;\n'+
        '      i = 0;\n'+
        '      while(i<ts.length) {\n'+
        '        {\n'+
        '          $LASTPOS=2001981;\n'+
        '          src = ts[i];\n'+
        '          $LASTPOS=2002009;\n'+
        '          dst = Tonyu.globals.$touches.findById(src.identifier);\n'+
        '          $LASTPOS=2002065;\n'+
        '          if (dst) {\n'+
        '            $LASTPOS=2002093;\n'+
        '            dst.touched=0;\n'+
        '            $LASTPOS=2002125;\n'+
        '            dst.identifier=- 1;\n'+
        '            \n'+
        '          }\n'+
        '        }\n'+
        '        i++;\n'+
        '      }\n'+
        '      $LASTPOS=2002179;\n'+
        '      _this.handleListeners();\n'+
        '    };\n'+
        '    $LASTPOS=2002211;\n'+
        '    handleMouse = function (e) {\n'+
        '      \n'+
        '      $LASTPOS=2002232;\n'+
        '      Tonyu.globals.$handleMouse(e);\n'+
        '    };\n'+
        '    $LASTPOS=2002256;\n'+
        '    handleTouch = function (e) {\n'+
        '      \n'+
        '      $LASTPOS=2002277;\n'+
        '      Tonyu.globals.$handleTouch(e);\n'+
        '    };\n'+
        '    $LASTPOS=2002301;\n'+
        '    handleTouchEnd = function (e) {\n'+
        '      \n'+
        '      $LASTPOS=2002325;\n'+
        '      Tonyu.globals.$handleTouchEnd(e);\n'+
        '    };\n'+
        '    $LASTPOS=2002352;\n'+
        '    d = $.data(cv,"events");\n'+
        '    $LASTPOS=2002384;\n'+
        '    if (! d) {\n'+
        '      $LASTPOS=2002403;\n'+
        '      $.data(cv,"events","true");\n'+
        '      $LASTPOS=2002440;\n'+
        '      cvj.mousedown(handleMouse);\n'+
        '      $LASTPOS=2002477;\n'+
        '      cvj.mousemove(handleMouse);\n'+
        '      $LASTPOS=2002514;\n'+
        '      cvj.on("touchstart",handleTouch);\n'+
        '      $LASTPOS=2002557;\n'+
        '      cvj.on("touchmove",handleTouch);\n'+
        '      $LASTPOS=2002599;\n'+
        '      cvj.on("touchend",handleTouchEnd);\n'+
        '      \n'+
        '    }\n'+
        '  },\n'+
        '  fiber$initCanvasEvents :function _trc_func_2000270_8(_thread,cvj) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var cv;\n'+
        '    var handleMouse;\n'+
        '    var handleTouch;\n'+
        '    var handleTouchEnd;\n'+
        '    var d;\n'+
        '    \n'+
        '    $LASTPOS=2000300;\n'+
        '    cv = cvj[0];\n'+
        '    \n'+
        '    _thread.enter(function _trc_func_2000270_9(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=2000320;\n'+
        '          Tonyu.globals.$handleMouse=function (e) {\n'+
        '            var p;\n'+
        '            var mp;\n'+
        '            \n'+
        '            $LASTPOS=2000349;\n'+
        '            p = cvj.offset();\n'+
        '            $LASTPOS=2000378;\n'+
        '            mp = {x: e.clientX-p.left,y: e.clientY-p.top};\n'+
        '            $LASTPOS=2000435;\n'+
        '            mp=Tonyu.globals.$Screen.canvas2buf(mp);\n'+
        '            $LASTPOS=2000471;\n'+
        '            Tonyu.globals.$mouseX=mp.x;\n'+
        '            $LASTPOS=2000494;\n'+
        '            Tonyu.globals.$mouseY=mp.y;\n'+
        '            $LASTPOS=2000517;\n'+
        '            if (_this.touchEmu) {\n'+
        '              $LASTPOS=2000546;\n'+
        '              Tonyu.globals.$touches[0].x=mp.x;\n'+
        '              $LASTPOS=2000579;\n'+
        '              Tonyu.globals.$touches[0].y=mp.y;\n'+
        '              \n'+
        '            }\n'+
        '            $LASTPOS=2000619;\n'+
        '            _this.handleListeners();\n'+
        '          };\n'+
        '          $LASTPOS=2000651;\n'+
        '          Tonyu.globals.$touches=[{},{},{},{},{}];\n'+
        '          $LASTPOS=2000683;\n'+
        '          Tonyu.globals.$touches.findById=function (id) {\n'+
        '            var j;\n'+
        '            \n'+
        '            $LASTPOS=2000718;\n'+
        '            $LASTPOS=2000723;\n'+
        '            j = 0;\n'+
        '            while(j<Tonyu.globals.$touches.length) {\n'+
        '              {\n'+
        '                $LASTPOS=2000773;\n'+
        '                if (Tonyu.globals.$touches[j].identifier==id) {\n'+
        '                  return Tonyu.globals.$touches[j];\n'+
        '                  \n'+
        '                }\n'+
        '              }\n'+
        '              j++;\n'+
        '            }\n'+
        '          };\n'+
        '          $LASTPOS=2000883;\n'+
        '          Tonyu.globals.$handleTouch=function (e) {\n'+
        '            var p;\n'+
        '            var ts;\n'+
        '            var i;\n'+
        '            var src;\n'+
        '            var dst;\n'+
        '            var j;\n'+
        '            \n'+
        '            $LASTPOS=2000912;\n'+
        '            _this.touchEmu=false;\n'+
        '            $LASTPOS=2000937;\n'+
        '            p = cvj.offset();\n'+
        '            $LASTPOS=2000966;\n'+
        '            e.preventDefault();\n'+
        '            $LASTPOS=2000995;\n'+
        '            ts = e.originalEvent.changedTouches;\n'+
        '            $LASTPOS=2001043;\n'+
        '            $LASTPOS=2001048;\n'+
        '            i = 0;\n'+
        '            while(i<ts.length) {\n'+
        '              {\n'+
        '                $LASTPOS=2001093;\n'+
        '                src = ts[i];\n'+
        '                $LASTPOS=2001121;\n'+
        '                dst = Tonyu.globals.$touches.findById(src.identifier);\n'+
        '                $LASTPOS=2001177;\n'+
        '                if (! dst) {\n'+
        '                  $LASTPOS=2001206;\n'+
        '                  $LASTPOS=2001211;\n'+
        '                  j = 0;\n'+
        '                  while(j<Tonyu.globals.$touches.length) {\n'+
        '                    {\n'+
        '                      $LASTPOS=2001269;\n'+
        '                      if (! Tonyu.globals.$touches[j].touched) {\n'+
        '                        $LASTPOS=2001322;\n'+
        '                        dst=Tonyu.globals.$touches[j];\n'+
        '                        $LASTPOS=2001364;\n'+
        '                        dst.identifier=src.identifier;\n'+
        '                        break;\n'+
        '                        \n'+
        '                        \n'+
        '                      }\n'+
        '                    }\n'+
        '                    j++;\n'+
        '                  }\n'+
        '                  \n'+
        '                }\n'+
        '                $LASTPOS=2001497;\n'+
        '                if (dst) {\n'+
        '                  $LASTPOS=2001525;\n'+
        '                  _this.mp={x: src.pageX-p.left,y: src.pageY-p.top};\n'+
        '                  $LASTPOS=2001586;\n'+
        '                  _this.mp=Tonyu.globals.$Screen.canvas2buf(_this.mp);\n'+
        '                  $LASTPOS=2001630;\n'+
        '                  dst.x=_this.mp.x;\n'+
        '                  $LASTPOS=2001659;\n'+
        '                  dst.y=_this.mp.y;\n'+
        '                  $LASTPOS=2001688;\n'+
        '                  if (! dst.touched) {\n'+
        '                    $LASTPOS=2001705;\n'+
        '                    dst.touched=1;\n'+
        '                  }\n'+
        '                  \n'+
        '                }\n'+
        '              }\n'+
        '              i++;\n'+
        '            }\n'+
        '            $LASTPOS=2001755;\n'+
        '            Tonyu.globals.$mouseX=Tonyu.globals.$touches[0].x;\n'+
        '            $LASTPOS=2001787;\n'+
        '            Tonyu.globals.$mouseY=Tonyu.globals.$touches[0].y;\n'+
        '            $LASTPOS=2001819;\n'+
        '            _this.handleListeners();\n'+
        '          };\n'+
        '          $LASTPOS=2001851;\n'+
        '          Tonyu.globals.$handleTouchEnd=function (e) {\n'+
        '            var ts;\n'+
        '            var i;\n'+
        '            var src;\n'+
        '            var dst;\n'+
        '            \n'+
        '            $LASTPOS=2001883;\n'+
        '            ts = e.originalEvent.changedTouches;\n'+
        '            $LASTPOS=2001931;\n'+
        '            $LASTPOS=2001936;\n'+
        '            i = 0;\n'+
        '            while(i<ts.length) {\n'+
        '              {\n'+
        '                $LASTPOS=2001981;\n'+
        '                src = ts[i];\n'+
        '                $LASTPOS=2002009;\n'+
        '                dst = Tonyu.globals.$touches.findById(src.identifier);\n'+
        '                $LASTPOS=2002065;\n'+
        '                if (dst) {\n'+
        '                  $LASTPOS=2002093;\n'+
        '                  dst.touched=0;\n'+
        '                  $LASTPOS=2002125;\n'+
        '                  dst.identifier=- 1;\n'+
        '                  \n'+
        '                }\n'+
        '              }\n'+
        '              i++;\n'+
        '            }\n'+
        '            $LASTPOS=2002179;\n'+
        '            _this.handleListeners();\n'+
        '          };\n'+
        '          $LASTPOS=2002211;\n'+
        '          handleMouse = function (e) {\n'+
        '            \n'+
        '            $LASTPOS=2002232;\n'+
        '            Tonyu.globals.$handleMouse(e);\n'+
        '          };\n'+
        '          $LASTPOS=2002256;\n'+
        '          handleTouch = function (e) {\n'+
        '            \n'+
        '            $LASTPOS=2002277;\n'+
        '            Tonyu.globals.$handleTouch(e);\n'+
        '          };\n'+
        '          $LASTPOS=2002301;\n'+
        '          handleTouchEnd = function (e) {\n'+
        '            \n'+
        '            $LASTPOS=2002325;\n'+
        '            Tonyu.globals.$handleTouchEnd(e);\n'+
        '          };\n'+
        '          $LASTPOS=2002352;\n'+
        '          d = $.data(cv,"events");\n'+
        '          $LASTPOS=2002384;\n'+
        '          if (! d) {\n'+
        '            $LASTPOS=2002403;\n'+
        '            $.data(cv,"events","true");\n'+
        '            $LASTPOS=2002440;\n'+
        '            cvj.mousedown(handleMouse);\n'+
        '            $LASTPOS=2002477;\n'+
        '            cvj.mousemove(handleMouse);\n'+
        '            $LASTPOS=2002514;\n'+
        '            cvj.on("touchstart",handleTouch);\n'+
        '            $LASTPOS=2002557;\n'+
        '            cvj.on("touchmove",handleTouch);\n'+
        '            $LASTPOS=2002599;\n'+
        '            cvj.on("touchend",handleTouchEnd);\n'+
        '            \n'+
        '          }\n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  update :function _trc_func_2002647_10() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var i;\n'+
        '    var _it_30;\n'+
        '    \n'+
        '    $LASTPOS=2002664;\n'+
        '    _it_30=Tonyu.iterator(Tonyu.globals.$touches,1);\n'+
        '    while(_it_30.next()) {\n'+
        '      i=_it_30[0];\n'+
        '      \n'+
        '      $LASTPOS=2002699;\n'+
        '      if (i.touched>0) {\n'+
        '        $LASTPOS=2002717;\n'+
        '        i.touched++;\n'+
        '        \n'+
        '      }\n'+
        '      $LASTPOS=2002740;\n'+
        '      if (i.touched==- 1) {\n'+
        '        $LASTPOS=2002759;\n'+
        '        i.touched=1;\n'+
        '      }\n'+
        '      \n'+
        '    }\n'+
        '  },\n'+
        '  fiber$update :function _trc_func_2002647_11(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var i;\n'+
        '    var _it_30;\n'+
        '    \n'+
        '    $LASTPOS=2002664;\n'+
        '    _it_30=Tonyu.iterator(Tonyu.globals.$touches,1);\n'+
        '    while(_it_30.next()) {\n'+
        '      i=_it_30[0];\n'+
        '      \n'+
        '      $LASTPOS=2002699;\n'+
        '      if (i.touched>0) {\n'+
        '        $LASTPOS=2002717;\n'+
        '        i.touched++;\n'+
        '        \n'+
        '      }\n'+
        '      $LASTPOS=2002740;\n'+
        '      if (i.touched==- 1) {\n'+
        '        $LASTPOS=2002759;\n'+
        '        i.touched=1;\n'+
        '      }\n'+
        '      \n'+
        '    }\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  __dummy: false\n'+
        '});\n'+
        'Tonyu.klass.addMeta(Tonyu.classes.kernel.InputDevice,{"fullName":"kernel.InputDevice","namespace":"kernel","shortName":"InputDevice","decls":{"methods":{"main":{"nowait":false},"new":{"nowait":false},"handleListeners":{"nowait":false},"addOnetimeListener":{"nowait":false},"initCanvasEvents":{"nowait":false},"update":{"nowait":false}}}});\n'+
        '\n'+
        'Tonyu.klass.ensureNamespace(Tonyu.classes,\'kernel\');\n'+
        'Tonyu.classes.kernel.MathMod=Tonyu.klass([],{\n'+
        '  main :function _trc_func_3000000_0() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  fiber$main :function _trc_func_3000000_1(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  sin :function _trc_func_3000031_2(d) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return Math.sin(_this.rad(d));\n'+
        '  },\n'+
        '  cos :function _trc_func_3000082_3(d) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return Math.cos(_this.rad(d));\n'+
        '  },\n'+
        '  rad :function _trc_func_3000133_4(d) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return d/180*Math.PI;\n'+
        '  },\n'+
        '  deg :function _trc_func_3000181_5(d) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return d/Math.PI*180;\n'+
        '  },\n'+
        '  abs :function _trc_func_3000231_6(v) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return Math.abs(v);\n'+
        '  },\n'+
        '  atan2 :function _trc_func_3000277_7(x,y) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return _this.deg(Math.atan2(x,y));\n'+
        '  },\n'+
        '  floor :function _trc_func_3000336_8(x) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return Math.floor(x);\n'+
        '  },\n'+
        '  angleDiff :function _trc_func_3000386_9(a,b) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var c;\n'+
        '    \n'+
        '    $LASTPOS=3000416;\n'+
        '    c;\n'+
        '    $LASTPOS=3000428;\n'+
        '    a=_this.floor(a);\n'+
        '    $LASTPOS=3000445;\n'+
        '    b=_this.floor(b);\n'+
        '    $LASTPOS=3000462;\n'+
        '    if (a>=b) {\n'+
        '      $LASTPOS=3000483;\n'+
        '      c=(a-b)%360;\n'+
        '      $LASTPOS=3000507;\n'+
        '      if (c>=180) {\n'+
        '        $LASTPOS=3000519;\n'+
        '        c-=360;\n'+
        '      }\n'+
        '      \n'+
        '    } else {\n'+
        '      $LASTPOS=3000550;\n'+
        '      c=- ((b-a)%360);\n'+
        '      $LASTPOS=3000577;\n'+
        '      if (c<- 180) {\n'+
        '        $LASTPOS=3000589;\n'+
        '        c+=360;\n'+
        '      }\n'+
        '      \n'+
        '    }\n'+
        '    return c;\n'+
        '  },\n'+
        '  sqrt :function _trc_func_3000623_10(t) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return Math.sqrt(t);\n'+
        '  },\n'+
        '  dist :function _trc_func_3000671_11(dx,dy) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var t;\n'+
        '    \n'+
        '    $LASTPOS=3000698;\n'+
        '    if (typeof  dx=="object") {\n'+
        '      $LASTPOS=3000734;\n'+
        '      t = dx;\n'+
        '      $LASTPOS=3000753;\n'+
        '      dx=t.x-_this.x;\n'+
        '      $LASTPOS=3000762;\n'+
        '      dy=t.y-_this.y;\n'+
        '      \n'+
        '    }\n'+
        '    return _this.sqrt(dx*dx+dy*dy);\n'+
        '  },\n'+
        '  trunc :function _trc_func_3000814_12(f) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=3000838;\n'+
        '    if (f>=0) {\n'+
        '      return Math.floor(f);\n'+
        '    } else {\n'+
        '      return Math.ceil(f);\n'+
        '    }\n'+
        '  },\n'+
        '  ceil :function _trc_func_3000904_13(f) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return Math.ceil(f);\n'+
        '  },\n'+
        '  rnd :function _trc_func_3000953_14(r) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=3000975;\n'+
        '    if (typeof  r=="number") {\n'+
        '      return Math.floor(Math.random()*r);\n'+
        '      \n'+
        '    }\n'+
        '    return Math.random();\n'+
        '  },\n'+
        '  __dummy: false\n'+
        '});\n'+
        'Tonyu.klass.addMeta(Tonyu.classes.kernel.MathMod,{"fullName":"kernel.MathMod","namespace":"kernel","shortName":"MathMod","decls":{"methods":{"main":{"nowait":false},"sin":{"nowait":true},"cos":{"nowait":true},"rad":{"nowait":true},"deg":{"nowait":true},"abs":{"nowait":true},"atan2":{"nowait":true},"floor":{"nowait":true},"angleDiff":{"nowait":true},"sqrt":{"nowait":true},"dist":{"nowait":true},"trunc":{"nowait":true},"ceil":{"nowait":true},"rnd":{"nowait":true}}}});\n'+
        '\n'+
        'Tonyu.klass.ensureNamespace(Tonyu.classes,\'kernel\');\n'+
        'Tonyu.classes.kernel.MediaPlayer=Tonyu.klass([],{\n'+
        '  main :function _trc_func_4000000_0() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  fiber$main :function _trc_func_4000000_1(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  play :function _trc_func_4000002_2() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  fiber$play :function _trc_func_4000002_3(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  stop :function _trc_func_4000022_4() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  fiber$stop :function _trc_func_4000022_5(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  playSE :function _trc_func_4000042_6() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  fiber$playSE :function _trc_func_4000042_7(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  setDelay :function _trc_func_4000064_8() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  fiber$setDelay :function _trc_func_4000064_9(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  setVolume :function _trc_func_4000087_10() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  fiber$setVolume :function _trc_func_4000087_11(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  __dummy: false\n'+
        '});\n'+
        'Tonyu.klass.addMeta(Tonyu.classes.kernel.MediaPlayer,{"fullName":"kernel.MediaPlayer","namespace":"kernel","shortName":"MediaPlayer","decls":{"methods":{"main":{"nowait":false},"play":{"nowait":false},"stop":{"nowait":false},"playSE":{"nowait":false},"setDelay":{"nowait":false},"setVolume":{"nowait":false}}}});\n'+
        '\n'+
        'Tonyu.klass.ensureNamespace(Tonyu.classes,\'kernel\');\n'+
        'Tonyu.classes.kernel.T2Mod=Tonyu.klass([],{\n'+
        '  main :function _trc_func_5000000_0() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  fiber$main :function _trc_func_5000000_1(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  bvec :function _trc_func_5000015_2(tx,ty) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var b2Vec2;\n'+
        '    \n'+
        '    $LASTPOS=5000034;\n'+
        '    b2Vec2 = Box2D.Common.Math.b2Vec2;\n'+
        '    return new b2Vec2(tx/_this.scale,ty/_this.scale);\n'+
        '  },\n'+
        '  fiber$bvec :function _trc_func_5000015_3(_thread,tx,ty) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var b2Vec2;\n'+
        '    \n'+
        '    $LASTPOS=5000034;\n'+
        '    b2Vec2 = Box2D.Common.Math.b2Vec2;\n'+
        '    _thread.retVal=new b2Vec2(tx/_this.scale,ty/_this.scale);return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  __dummy: false\n'+
        '});\n'+
        'Tonyu.klass.addMeta(Tonyu.classes.kernel.T2Mod,{"fullName":"kernel.T2Mod","namespace":"kernel","shortName":"T2Mod","decls":{"methods":{"main":{"nowait":false},"bvec":{"nowait":false}}}});\n'+
        '\n'+
        'Tonyu.klass.ensureNamespace(Tonyu.classes,\'kernel\');\n'+
        'Tonyu.classes.kernel.TextRectMod=Tonyu.klass([],{\n'+
        '  main :function _trc_func_6000000_0() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  fiber$main :function _trc_func_6000000_1(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  drawTextRect :function _trc_func_6000017_2(ctx,text,x,topY,h,align,type) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var met;\n'+
        '    var res;\n'+
        '    var t;\n'+
        '    \n'+
        '    $LASTPOS=6000090;\n'+
        '    if (! align) {\n'+
        '      $LASTPOS=6000102;\n'+
        '      align="center";\n'+
        '    }\n'+
        '    $LASTPOS=6000123;\n'+
        '    ctx.textBaseline="top";\n'+
        '    $LASTPOS=6000152;\n'+
        '    _this.setFontSize(ctx,h);\n'+
        '    $LASTPOS=6000178;\n'+
        '    met = ctx.measureText(text);\n'+
        '    $LASTPOS=6000214;\n'+
        '    res = {y: topY,w: met.width,h: h};\n'+
        '    $LASTPOS=6000256;\n'+
        '    t = align.substring(0,1).toLowerCase();\n'+
        '    $LASTPOS=6000303;\n'+
        '    if (t=="l") {\n'+
        '      $LASTPOS=6000315;\n'+
        '      res.x=x;\n'+
        '    } else {\n'+
        '      $LASTPOS=6000334;\n'+
        '      if (t=="r") {\n'+
        '        $LASTPOS=6000346;\n'+
        '        res.x=x-met.width;\n'+
        '      } else {\n'+
        '        $LASTPOS=6000375;\n'+
        '        if (t=="c") {\n'+
        '          $LASTPOS=6000387;\n'+
        '          res.x=x-met.width/2;\n'+
        '        }\n'+
        '      }\n'+
        '    }\n'+
        '    $LASTPOS=6000413;\n'+
        '    if (type=="fill") {\n'+
        '      $LASTPOS=6000431;\n'+
        '      ctx.fillText(text,res.x,topY);\n'+
        '    }\n'+
        '    $LASTPOS=6000468;\n'+
        '    if (type=="stroke") {\n'+
        '      $LASTPOS=6000488;\n'+
        '      ctx.strokeText(text,res.x,topY);\n'+
        '    }\n'+
        '    return res;\n'+
        '  },\n'+
        '  setFontSize :function _trc_func_6000543_3(ctx,sz) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var post;\n'+
        '    \n'+
        '    $LASTPOS=6000586;\n'+
        '    post = ctx.font.replace(/^[0-9\\.]+/,"");\n'+
        '    $LASTPOS=6000634;\n'+
        '    ctx.font=sz+post;\n'+
        '  },\n'+
        '  fukidashi :function _trc_func_6000658_4(ctx,text,x,y,sz) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var align;\n'+
        '    var theight;\n'+
        '    var margin;\n'+
        '    var r;\n'+
        '    var fs;\n'+
        '    \n'+
        '    $LASTPOS=6000712;\n'+
        '    align = "c";\n'+
        '    $LASTPOS=6000732;\n'+
        '    theight = 20;\n'+
        '    $LASTPOS=6000753;\n'+
        '    margin = 5;\n'+
        '    $LASTPOS=6000772;\n'+
        '    r = _this.drawTextRect(ctx,text,x,y-theight-margin-sz,sz,align);\n'+
        '    $LASTPOS=6000842;\n'+
        '    ctx.beginPath();\n'+
        '    $LASTPOS=6000864;\n'+
        '    ctx.moveTo(x,y);\n'+
        '    $LASTPOS=6000888;\n'+
        '    ctx.lineTo(x+margin,y-theight);\n'+
        '    $LASTPOS=6000927;\n'+
        '    ctx.lineTo(x+r.w/2+margin,y-theight);\n'+
        '    $LASTPOS=6000972;\n'+
        '    ctx.lineTo(x+r.w/2+margin,y-theight-r.h-margin*2);\n'+
        '    $LASTPOS=6001030;\n'+
        '    ctx.lineTo(x-r.w/2-margin,y-theight-r.h-margin*2);\n'+
        '    $LASTPOS=6001088;\n'+
        '    ctx.lineTo(x-r.w/2-margin,y-theight);\n'+
        '    $LASTPOS=6001133;\n'+
        '    ctx.lineTo(x-margin,y-theight);\n'+
        '    $LASTPOS=6001172;\n'+
        '    ctx.closePath();\n'+
        '    $LASTPOS=6001194;\n'+
        '    ctx.fill();\n'+
        '    $LASTPOS=6001211;\n'+
        '    ctx.stroke();\n'+
        '    $LASTPOS=6001236;\n'+
        '    fs = ctx.fillStyle;\n'+
        '    $LASTPOS=6001263;\n'+
        '    ctx.fillStyle=ctx.strokeStyle;\n'+
        '    $LASTPOS=6001299;\n'+
        '    _this.drawTextRect(ctx,text,x,y-theight-margin-sz,sz,align,"fill");\n'+
        '    $LASTPOS=6001372;\n'+
        '    ctx.fillStyle=fs;\n'+
        '  },\n'+
        '  __dummy: false\n'+
        '});\n'+
        'Tonyu.klass.addMeta(Tonyu.classes.kernel.TextRectMod,{"fullName":"kernel.TextRectMod","namespace":"kernel","shortName":"TextRectMod","decls":{"methods":{"main":{"nowait":false},"drawTextRect":{"nowait":true},"setFontSize":{"nowait":true},"fukidashi":{"nowait":true}}}});\n'+
        '\n'+
        'Tonyu.klass.ensureNamespace(Tonyu.classes,\'kernel\');\n'+
        'Tonyu.classes.kernel.TObject=Tonyu.klass([],{\n'+
        '  main :function _trc_func_7000000_0() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  fiber$main :function _trc_func_7000000_1(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  initialize :function _trc_func_7000030_2(options) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=7000052;\n'+
        '    if (typeof  options=="object") {\n'+
        '      $LASTPOS=7000082;\n'+
        '      _this.extend(options);\n'+
        '    }\n'+
        '    $LASTPOS=7000104;\n'+
        '    _this.main();\n'+
        '  },\n'+
        '  extend :function _trc_func_7000121_3(obj) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return Tonyu.extend(_this,obj);\n'+
        '  },\n'+
        '  __dummy: false\n'+
        '});\n'+
        'Tonyu.klass.addMeta(Tonyu.classes.kernel.TObject,{"fullName":"kernel.TObject","namespace":"kernel","shortName":"TObject","decls":{"methods":{"main":{"nowait":false},"new":{"nowait":false},"extend":{"nowait":true}}}});\n'+
        '\n'+
        'Tonyu.klass.ensureNamespace(Tonyu.classes,\'kernel\');\n'+
        'Tonyu.classes.kernel.TQuery=Tonyu.klass(Tonyu.classes.kernel.TObject,[Tonyu.classes.kernel.MathMod],{\n'+
        '  main :function _trc_func_8000000_0() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  fiber$main :function _trc_func_8000000_1(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  initialize :function _trc_func_8000035_2() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=8000049;\n'+
        '    _this.length=0;\n'+
        '  },\n'+
        '  tonyuIterator :function _trc_func_8000061_3(arity) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var res;\n'+
        '    \n'+
        '    $LASTPOS=8000089;\n'+
        '    res = {};\n'+
        '    $LASTPOS=8000105;\n'+
        '    res.i=0;\n'+
        '    $LASTPOS=8000118;\n'+
        '    if (arity==1) {\n'+
        '      $LASTPOS=8000142;\n'+
        '      res.next=function () {\n'+
        '        \n'+
        '        $LASTPOS=8000177;\n'+
        '        if (res.i>=_this.length) {\n'+
        '          return false;\n'+
        '        }\n'+
        '        $LASTPOS=8000227;\n'+
        '        res[0]=_this[res.i];\n'+
        '        $LASTPOS=8000259;\n'+
        '        res.i++;\n'+
        '        return true;\n'+
        '      };\n'+
        '      \n'+
        '    } else {\n'+
        '      $LASTPOS=8000325;\n'+
        '      res.next=function () {\n'+
        '        \n'+
        '        $LASTPOS=8000360;\n'+
        '        if (res.i>=_this.length) {\n'+
        '          return false;\n'+
        '        }\n'+
        '        $LASTPOS=8000410;\n'+
        '        res[0]=res.i;\n'+
        '        $LASTPOS=8000436;\n'+
        '        res[1]=_this[res.i];\n'+
        '        $LASTPOS=8000468;\n'+
        '        res.i++;\n'+
        '        return true;\n'+
        '      };\n'+
        '      \n'+
        '    }\n'+
        '    return res;\n'+
        '  },\n'+
        '  fiber$tonyuIterator :function _trc_func_8000061_4(_thread,arity) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var res;\n'+
        '    \n'+
        '    $LASTPOS=8000089;\n'+
        '    res = {};\n'+
        '    $LASTPOS=8000105;\n'+
        '    res.i=0;\n'+
        '    $LASTPOS=8000118;\n'+
        '    if (arity==1) {\n'+
        '      $LASTPOS=8000142;\n'+
        '      res.next=function () {\n'+
        '        \n'+
        '        $LASTPOS=8000177;\n'+
        '        if (res.i>=_this.length) {\n'+
        '          return false;\n'+
        '        }\n'+
        '        $LASTPOS=8000227;\n'+
        '        res[0]=_this[res.i];\n'+
        '        $LASTPOS=8000259;\n'+
        '        res.i++;\n'+
        '        return true;\n'+
        '      };\n'+
        '      \n'+
        '    } else {\n'+
        '      $LASTPOS=8000325;\n'+
        '      res.next=function () {\n'+
        '        \n'+
        '        $LASTPOS=8000360;\n'+
        '        if (res.i>=_this.length) {\n'+
        '          return false;\n'+
        '        }\n'+
        '        $LASTPOS=8000410;\n'+
        '        res[0]=res.i;\n'+
        '        $LASTPOS=8000436;\n'+
        '        res[1]=_this[res.i];\n'+
        '        $LASTPOS=8000468;\n'+
        '        res.i++;\n'+
        '        return true;\n'+
        '      };\n'+
        '      \n'+
        '    }\n'+
        '    _thread.retVal=res;return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  attr :function _trc_func_8000537_5() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var values;\n'+
        '    var i;\n'+
        '    var e;\n'+
        '    var _it_46;\n'+
        '    \n'+
        '    $LASTPOS=8000551;\n'+
        '    values;\n'+
        '    $LASTPOS=8000567;\n'+
        '    if (_this.length==0) {\n'+
        '      return _this;\n'+
        '    }\n'+
        '    $LASTPOS=8000594;\n'+
        '    if (arguments.length==1&&typeof  arguments[0]=="string") {\n'+
        '      return _this[0][arguments[0]];\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=8000702;\n'+
        '    if (arguments.length>=2) {\n'+
        '      $LASTPOS=8000737;\n'+
        '      values={};\n'+
        '      $LASTPOS=8000756;\n'+
        '      $LASTPOS=8000761;\n'+
        '      i = 0;\n'+
        '      while(i<arguments.length-1) {\n'+
        '        {\n'+
        '          $LASTPOS=8000813;\n'+
        '          values[arguments[i]]=arguments[i+1];\n'+
        '        }\n'+
        '        i+=2;\n'+
        '      }\n'+
        '      \n'+
        '    } else {\n'+
        '      $LASTPOS=8000881;\n'+
        '      values=arguments[0];\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=8000912;\n'+
        '    if (values) {\n'+
        '      $LASTPOS=8000934;\n'+
        '      _it_46=Tonyu.iterator(_this,1);\n'+
        '      while(_it_46.next()) {\n'+
        '        e=_it_46[0];\n'+
        '        \n'+
        '        $LASTPOS=8000968;\n'+
        '        e.extend(values);\n'+
        '        \n'+
        '      }\n'+
        '      \n'+
        '    }\n'+
        '  },\n'+
        '  fiber$attr :function _trc_func_8000537_6(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var values;\n'+
        '    var i;\n'+
        '    var e;\n'+
        '    var _it_46;\n'+
        '    \n'+
        '    $LASTPOS=8000551;\n'+
        '    values;\n'+
        '    $LASTPOS=8000567;\n'+
        '    if (_this.length==0) {\n'+
        '      _thread.retVal=_this;return;\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=8000594;\n'+
        '    if (_arguments.length==1&&typeof  _arguments[0]=="string") {\n'+
        '      _thread.retVal=_this[0][_arguments[0]];return;\n'+
        '      \n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=8000702;\n'+
        '    if (_arguments.length>=2) {\n'+
        '      $LASTPOS=8000737;\n'+
        '      values={};\n'+
        '      $LASTPOS=8000756;\n'+
        '      $LASTPOS=8000761;\n'+
        '      i = 0;\n'+
        '      while(i<_arguments.length-1) {\n'+
        '        {\n'+
        '          $LASTPOS=8000813;\n'+
        '          values[_arguments[i]]=_arguments[i+1];\n'+
        '        }\n'+
        '        i+=2;\n'+
        '      }\n'+
        '      \n'+
        '    } else {\n'+
        '      $LASTPOS=8000881;\n'+
        '      values=_arguments[0];\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=8000912;\n'+
        '    if (values) {\n'+
        '      $LASTPOS=8000934;\n'+
        '      _it_46=Tonyu.iterator(_this,1);\n'+
        '      while(_it_46.next()) {\n'+
        '        e=_it_46[0];\n'+
        '        \n'+
        '        $LASTPOS=8000968;\n'+
        '        e.extend(values);\n'+
        '        \n'+
        '      }\n'+
        '      \n'+
        '    }\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  genKeyfunc :function _trc_func_8001005_7(key) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=8001028;\n'+
        '    if (typeof  key!="function") {\n'+
        '      return function (o) {\n'+
        '        \n'+
        '        return o[key];\n'+
        '      };\n'+
        '      \n'+
        '    } else {\n'+
        '      return key;\n'+
        '      \n'+
        '    }\n'+
        '  },\n'+
        '  fiber$genKeyfunc :function _trc_func_8001005_8(_thread,key) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=8001028;\n'+
        '    if (typeof  key!="function") {\n'+
        '      _thread.retVal=function (o) {\n'+
        '        \n'+
        '        return o[key];\n'+
        '      };return;\n'+
        '      \n'+
        '      \n'+
        '    } else {\n'+
        '      _thread.retVal=key;return;\n'+
        '      \n'+
        '      \n'+
        '    }\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  maxs :function _trc_func_8001137_9(key) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var f;\n'+
        '    var res;\n'+
        '    var reso;\n'+
        '    var o;\n'+
        '    var _it_52;\n'+
        '    var v;\n'+
        '    \n'+
        '    $LASTPOS=8001154;\n'+
        '    f = _this.genKeyfunc(key);\n'+
        '    $LASTPOS=8001181;\n'+
        '    res;reso = new Tonyu.classes.kernel.TQuery;\n'+
        '    $LASTPOS=8001210;\n'+
        '    _it_52=Tonyu.iterator(_this,1);\n'+
        '    while(_it_52.next()) {\n'+
        '      o=_it_52[0];\n'+
        '      \n'+
        '      $LASTPOS=8001240;\n'+
        '      v = f(o);\n'+
        '      $LASTPOS=8001260;\n'+
        '      if (res==null||v>=res) {\n'+
        '        $LASTPOS=8001299;\n'+
        '        if (v>res) {\n'+
        '          $LASTPOS=8001310;\n'+
        '          reso=new Tonyu.classes.kernel.TQuery;\n'+
        '        }\n'+
        '        $LASTPOS=8001339;\n'+
        '        reso.push(o);\n'+
        '        $LASTPOS=8001365;\n'+
        '        res=v;\n'+
        '        \n'+
        '      }\n'+
        '      \n'+
        '    }\n'+
        '    return reso;\n'+
        '  },\n'+
        '  fiber$maxs :function _trc_func_8001137_10(_thread,key) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var f;\n'+
        '    var res;\n'+
        '    var reso;\n'+
        '    var o;\n'+
        '    var _it_52;\n'+
        '    var v;\n'+
        '    \n'+
        '    $LASTPOS=8001154;\n'+
        '    f = _this.genKeyfunc(key);\n'+
        '    $LASTPOS=8001181;\n'+
        '    res;reso = new Tonyu.classes.kernel.TQuery;\n'+
        '    $LASTPOS=8001210;\n'+
        '    _it_52=Tonyu.iterator(_this,1);\n'+
        '    while(_it_52.next()) {\n'+
        '      o=_it_52[0];\n'+
        '      \n'+
        '      $LASTPOS=8001240;\n'+
        '      v = f(o);\n'+
        '      $LASTPOS=8001260;\n'+
        '      if (res==null||v>=res) {\n'+
        '        $LASTPOS=8001299;\n'+
        '        if (v>res) {\n'+
        '          $LASTPOS=8001310;\n'+
        '          reso=new Tonyu.classes.kernel.TQuery;\n'+
        '        }\n'+
        '        $LASTPOS=8001339;\n'+
        '        reso.push(o);\n'+
        '        $LASTPOS=8001365;\n'+
        '        res=v;\n'+
        '        \n'+
        '      }\n'+
        '      \n'+
        '    }\n'+
        '    _thread.retVal=reso;return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  mins :function _trc_func_8001407_11(key) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var f;\n'+
        '    var res;\n'+
        '    var reso;\n'+
        '    var o;\n'+
        '    var _it_59;\n'+
        '    var v;\n'+
        '    \n'+
        '    $LASTPOS=8001424;\n'+
        '    f = _this.genKeyfunc(key);\n'+
        '    $LASTPOS=8001451;\n'+
        '    res;reso = new Tonyu.classes.kernel.TQuery;\n'+
        '    $LASTPOS=8001480;\n'+
        '    _it_59=Tonyu.iterator(_this,1);\n'+
        '    while(_it_59.next()) {\n'+
        '      o=_it_59[0];\n'+
        '      \n'+
        '      $LASTPOS=8001510;\n'+
        '      v = f(o);\n'+
        '      $LASTPOS=8001530;\n'+
        '      if (res==null||v<=res) {\n'+
        '        $LASTPOS=8001569;\n'+
        '        if (v<res) {\n'+
        '          $LASTPOS=8001580;\n'+
        '          reso=new Tonyu.classes.kernel.TQuery;\n'+
        '        }\n'+
        '        $LASTPOS=8001609;\n'+
        '        reso.push(o);\n'+
        '        $LASTPOS=8001635;\n'+
        '        res=v;\n'+
        '        \n'+
        '      }\n'+
        '      \n'+
        '    }\n'+
        '    return reso;\n'+
        '  },\n'+
        '  fiber$mins :function _trc_func_8001407_12(_thread,key) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var f;\n'+
        '    var res;\n'+
        '    var reso;\n'+
        '    var o;\n'+
        '    var _it_59;\n'+
        '    var v;\n'+
        '    \n'+
        '    $LASTPOS=8001424;\n'+
        '    f = _this.genKeyfunc(key);\n'+
        '    $LASTPOS=8001451;\n'+
        '    res;reso = new Tonyu.classes.kernel.TQuery;\n'+
        '    $LASTPOS=8001480;\n'+
        '    _it_59=Tonyu.iterator(_this,1);\n'+
        '    while(_it_59.next()) {\n'+
        '      o=_it_59[0];\n'+
        '      \n'+
        '      $LASTPOS=8001510;\n'+
        '      v = f(o);\n'+
        '      $LASTPOS=8001530;\n'+
        '      if (res==null||v<=res) {\n'+
        '        $LASTPOS=8001569;\n'+
        '        if (v<res) {\n'+
        '          $LASTPOS=8001580;\n'+
        '          reso=new Tonyu.classes.kernel.TQuery;\n'+
        '        }\n'+
        '        $LASTPOS=8001609;\n'+
        '        reso.push(o);\n'+
        '        $LASTPOS=8001635;\n'+
        '        res=v;\n'+
        '        \n'+
        '      }\n'+
        '      \n'+
        '    }\n'+
        '    _thread.retVal=reso;return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  minObj :function _trc_func_8001677_13(key) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return _this.mins(key)[0];\n'+
        '  },\n'+
        '  fiber$minObj :function _trc_func_8001677_14(_thread,key) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    _thread.retVal=_this.mins(key)[0];return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  maxObj :function _trc_func_8001719_15(key) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return _this.maxs(key)[0];\n'+
        '  },\n'+
        '  fiber$maxObj :function _trc_func_8001719_16(_thread,key) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    _thread.retVal=_this.maxs(key)[0];return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  nearests :function _trc_func_8001761_17(x,y) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=8001782;\n'+
        '    if (typeof  x=="object") {\n'+
        '      $LASTPOS=8001807;\n'+
        '      y=x.y;\n'+
        '      $LASTPOS=8001813;\n'+
        '      x=x.x;\n'+
        '      \n'+
        '    }\n'+
        '    return _this.mins(function (o) {\n'+
        '      \n'+
        '      return _this.dist(o.x-x,o.y-y);\n'+
        '    });\n'+
        '  },\n'+
        '  fiber$nearests :function _trc_func_8001761_18(_thread,x,y) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=8001782;\n'+
        '    if (typeof  x=="object") {\n'+
        '      $LASTPOS=8001807;\n'+
        '      y=x.y;\n'+
        '      $LASTPOS=8001813;\n'+
        '      x=x.x;\n'+
        '      \n'+
        '    }\n'+
        '    _thread.retVal=_this.mins(function (o) {\n'+
        '      \n'+
        '      return _this.dist(o.x-x,o.y-y);\n'+
        '    });return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  nearest :function _trc_func_8001887_19(x,y) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return _this.nearests(x,y)[0];\n'+
        '  },\n'+
        '  fiber$nearest :function _trc_func_8001887_20(_thread,x,y) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    _thread.retVal=_this.nearests(x,y)[0];return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  withins :function _trc_func_8001934_21(xo,yd,d) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var x;\n'+
        '    var y;\n'+
        '    \n'+
        '    $LASTPOS=8001958;\n'+
        '    x;y;\n'+
        '    $LASTPOS=8001971;\n'+
        '    if (typeof  xo=="object") {\n'+
        '      $LASTPOS=8002006;\n'+
        '      x=xo.x;\n'+
        '      $LASTPOS=8002013;\n'+
        '      y=xo.y;\n'+
        '      $LASTPOS=8002020;\n'+
        '      d=yd;\n'+
        '      \n'+
        '    } else {\n'+
        '      $LASTPOS=8002047;\n'+
        '      x=xo;\n'+
        '      $LASTPOS=8002052;\n'+
        '      y=yd;\n'+
        '      \n'+
        '    }\n'+
        '    return _this.find(function (o) {\n'+
        '      \n'+
        '      return _this.dist(o.x-x,o.y-y)<=d;\n'+
        '    });\n'+
        '  },\n'+
        '  fiber$withins :function _trc_func_8001934_22(_thread,xo,yd,d) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var x;\n'+
        '    var y;\n'+
        '    \n'+
        '    $LASTPOS=8001958;\n'+
        '    x;y;\n'+
        '    $LASTPOS=8001971;\n'+
        '    if (typeof  xo=="object") {\n'+
        '      $LASTPOS=8002006;\n'+
        '      x=xo.x;\n'+
        '      $LASTPOS=8002013;\n'+
        '      y=xo.y;\n'+
        '      $LASTPOS=8002020;\n'+
        '      d=yd;\n'+
        '      \n'+
        '    } else {\n'+
        '      $LASTPOS=8002047;\n'+
        '      x=xo;\n'+
        '      $LASTPOS=8002052;\n'+
        '      y=yd;\n'+
        '      \n'+
        '    }\n'+
        '    _thread.retVal=_this.find(function (o) {\n'+
        '      \n'+
        '      return _this.dist(o.x-x,o.y-y)<=d;\n'+
        '    });return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  within :function _trc_func_8002133_23(xo,yd,d) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return _this.withins(xo,yd,d).nearest();\n'+
        '  },\n'+
        '  fiber$within :function _trc_func_8002133_24(_thread,xo,yd,d) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    _thread.retVal=_this.withins(xo,yd,d).nearest();return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  max :function _trc_func_8002194_25(key) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var f;\n'+
        '    var res;\n'+
        '    var o;\n'+
        '    var _it_70;\n'+
        '    var v;\n'+
        '    \n'+
        '    $LASTPOS=8002210;\n'+
        '    f = _this.genKeyfunc(key);\n'+
        '    $LASTPOS=8002237;\n'+
        '    res;\n'+
        '    $LASTPOS=8002250;\n'+
        '    _it_70=Tonyu.iterator(_this,1);\n'+
        '    while(_it_70.next()) {\n'+
        '      o=_it_70[0];\n'+
        '      \n'+
        '      $LASTPOS=8002280;\n'+
        '      v = f(o);\n'+
        '      $LASTPOS=8002300;\n'+
        '      if (res==null||v>res) {\n'+
        '        $LASTPOS=8002324;\n'+
        '        res=v;\n'+
        '      }\n'+
        '      \n'+
        '    }\n'+
        '    return res;\n'+
        '  },\n'+
        '  fiber$max :function _trc_func_8002194_26(_thread,key) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var f;\n'+
        '    var res;\n'+
        '    var o;\n'+
        '    var _it_70;\n'+
        '    var v;\n'+
        '    \n'+
        '    $LASTPOS=8002210;\n'+
        '    f = _this.genKeyfunc(key);\n'+
        '    $LASTPOS=8002237;\n'+
        '    res;\n'+
        '    $LASTPOS=8002250;\n'+
        '    _it_70=Tonyu.iterator(_this,1);\n'+
        '    while(_it_70.next()) {\n'+
        '      o=_it_70[0];\n'+
        '      \n'+
        '      $LASTPOS=8002280;\n'+
        '      v = f(o);\n'+
        '      $LASTPOS=8002300;\n'+
        '      if (res==null||v>res) {\n'+
        '        $LASTPOS=8002324;\n'+
        '        res=v;\n'+
        '      }\n'+
        '      \n'+
        '    }\n'+
        '    _thread.retVal=res;return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  min :function _trc_func_8002355_27(key) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var f;\n'+
        '    var res;\n'+
        '    var o;\n'+
        '    var _it_76;\n'+
        '    var v;\n'+
        '    \n'+
        '    $LASTPOS=8002371;\n'+
        '    f = _this.genKeyfunc(key);\n'+
        '    $LASTPOS=8002398;\n'+
        '    res;\n'+
        '    $LASTPOS=8002411;\n'+
        '    _it_76=Tonyu.iterator(_this,1);\n'+
        '    while(_it_76.next()) {\n'+
        '      o=_it_76[0];\n'+
        '      \n'+
        '      $LASTPOS=8002441;\n'+
        '      v = f(o);\n'+
        '      $LASTPOS=8002461;\n'+
        '      if (res==null||v<res) {\n'+
        '        $LASTPOS=8002485;\n'+
        '        res=v;\n'+
        '      }\n'+
        '      \n'+
        '    }\n'+
        '    return res;\n'+
        '  },\n'+
        '  fiber$min :function _trc_func_8002355_28(_thread,key) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var f;\n'+
        '    var res;\n'+
        '    var o;\n'+
        '    var _it_76;\n'+
        '    var v;\n'+
        '    \n'+
        '    $LASTPOS=8002371;\n'+
        '    f = _this.genKeyfunc(key);\n'+
        '    $LASTPOS=8002398;\n'+
        '    res;\n'+
        '    $LASTPOS=8002411;\n'+
        '    _it_76=Tonyu.iterator(_this,1);\n'+
        '    while(_it_76.next()) {\n'+
        '      o=_it_76[0];\n'+
        '      \n'+
        '      $LASTPOS=8002441;\n'+
        '      v = f(o);\n'+
        '      $LASTPOS=8002461;\n'+
        '      if (res==null||v<res) {\n'+
        '        $LASTPOS=8002485;\n'+
        '        res=v;\n'+
        '      }\n'+
        '      \n'+
        '    }\n'+
        '    _thread.retVal=res;return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  push :function _trc_func_8002516_29(e) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=8002531;\n'+
        '    _this[_this.length]=e;\n'+
        '    $LASTPOS=8002551;\n'+
        '    _this.length++;\n'+
        '  },\n'+
        '  fiber$push :function _trc_func_8002516_30(_thread,e) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=8002531;\n'+
        '    _this[_this.length]=e;\n'+
        '    $LASTPOS=8002551;\n'+
        '    _this.length++;\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  size :function _trc_func_8002563_31() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return _this.length;\n'+
        '  },\n'+
        '  fiber$size :function _trc_func_8002563_32(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    _thread.retVal=_this.length;return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  find :function _trc_func_8002588_33(f) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var no;\n'+
        '    var o;\n'+
        '    var _it_82;\n'+
        '    \n'+
        '    $LASTPOS=8002603;\n'+
        '    no = new Tonyu.classes.kernel.TQuery;\n'+
        '    $LASTPOS=8002626;\n'+
        '    _it_82=Tonyu.iterator(_this,1);\n'+
        '    while(_it_82.next()) {\n'+
        '      o=_it_82[0];\n'+
        '      \n'+
        '      $LASTPOS=8002656;\n'+
        '      if (f(o)) {\n'+
        '        $LASTPOS=8002666;\n'+
        '        no.push(o);\n'+
        '      }\n'+
        '      \n'+
        '    }\n'+
        '    return no;\n'+
        '  },\n'+
        '  fiber$find :function _trc_func_8002588_34(_thread,f) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var no;\n'+
        '    var o;\n'+
        '    var _it_82;\n'+
        '    \n'+
        '    $LASTPOS=8002603;\n'+
        '    no = new Tonyu.classes.kernel.TQuery;\n'+
        '    $LASTPOS=8002626;\n'+
        '    _it_82=Tonyu.iterator(_this,1);\n'+
        '    while(_it_82.next()) {\n'+
        '      o=_it_82[0];\n'+
        '      \n'+
        '      $LASTPOS=8002656;\n'+
        '      if (f(o)) {\n'+
        '        $LASTPOS=8002666;\n'+
        '        no.push(o);\n'+
        '      }\n'+
        '      \n'+
        '    }\n'+
        '    _thread.retVal=no;return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  apply :function _trc_func_8002702_35(name,args) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var res;\n'+
        '    var o;\n'+
        '    var _it_86;\n'+
        '    var f;\n'+
        '    \n'+
        '    $LASTPOS=8002727;\n'+
        '    res;\n'+
        '    $LASTPOS=8002740;\n'+
        '    if (! args) {\n'+
        '      $LASTPOS=8002751;\n'+
        '      args=[];\n'+
        '    }\n'+
        '    $LASTPOS=8002764;\n'+
        '    _it_86=Tonyu.iterator(_this,1);\n'+
        '    while(_it_86.next()) {\n'+
        '      o=_it_86[0];\n'+
        '      \n'+
        '      $LASTPOS=8002794;\n'+
        '      f = o[name];\n'+
        '      $LASTPOS=8002817;\n'+
        '      if (typeof  f=="function") {\n'+
        '        $LASTPOS=8002857;\n'+
        '        res=f.apply(o,args);\n'+
        '        \n'+
        '      }\n'+
        '      \n'+
        '    }\n'+
        '    return res;\n'+
        '  },\n'+
        '  fiber$apply :function _trc_func_8002702_36(_thread,name,args) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var res;\n'+
        '    var o;\n'+
        '    var _it_86;\n'+
        '    var f;\n'+
        '    \n'+
        '    $LASTPOS=8002727;\n'+
        '    res;\n'+
        '    $LASTPOS=8002740;\n'+
        '    if (! args) {\n'+
        '      $LASTPOS=8002751;\n'+
        '      args=[];\n'+
        '    }\n'+
        '    $LASTPOS=8002764;\n'+
        '    _it_86=Tonyu.iterator(_this,1);\n'+
        '    while(_it_86.next()) {\n'+
        '      o=_it_86[0];\n'+
        '      \n'+
        '      $LASTPOS=8002794;\n'+
        '      f = o[name];\n'+
        '      $LASTPOS=8002817;\n'+
        '      if (typeof  f=="function") {\n'+
        '        $LASTPOS=8002857;\n'+
        '        res=f.apply(o,args);\n'+
        '        \n'+
        '      }\n'+
        '      \n'+
        '    }\n'+
        '    _thread.retVal=res;return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  alive :function _trc_func_8002968_37() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return _this.find(function (o) {\n'+
        '      \n'+
        '      return ! o.isDead();\n'+
        '    });\n'+
        '  },\n'+
        '  fiber$alive :function _trc_func_8002968_38(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    _thread.retVal=_this.find(function (o) {\n'+
        '      \n'+
        '      return ! o.isDead();\n'+
        '    });return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  die :function _trc_func_8003039_39() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var a;\n'+
        '    \n'+
        '    $LASTPOS=8003052;\n'+
        '    a = _this.alive();\n'+
        '    $LASTPOS=8003071;\n'+
        '    if (a.length==0) {\n'+
        '      return false;\n'+
        '    }\n'+
        '    $LASTPOS=8003106;\n'+
        '    a.apply("die");\n'+
        '    return true;\n'+
        '  },\n'+
        '  fiber$die :function _trc_func_8003039_40(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var a;\n'+
        '    \n'+
        '    $LASTPOS=8003052;\n'+
        '    a = _this.alive();\n'+
        '    $LASTPOS=8003071;\n'+
        '    if (a.length==0) {\n'+
        '      _thread.retVal=false;return;\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=8003106;\n'+
        '    a.apply("die");\n'+
        '    _thread.retVal=true;return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  klass :function _trc_func_8003142_41(k) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return _this.find(function (o) {\n'+
        '      \n'+
        '      return o instanceof k;\n'+
        '    });\n'+
        '  },\n'+
        '  fiber$klass :function _trc_func_8003142_42(_thread,k) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    _thread.retVal=_this.find(function (o) {\n'+
        '      \n'+
        '      return o instanceof k;\n'+
        '    });return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  __dummy: false\n'+
        '});\n'+
        'Tonyu.klass.addMeta(Tonyu.classes.kernel.TQuery,{"fullName":"kernel.TQuery","namespace":"kernel","shortName":"TQuery","decls":{"methods":{"main":{"nowait":false},"new":{"nowait":false},"tonyuIterator":{"nowait":false},"attr":{"nowait":false},"genKeyfunc":{"nowait":false},"maxs":{"nowait":false},"mins":{"nowait":false},"minObj":{"nowait":false},"maxObj":{"nowait":false},"nearests":{"nowait":false},"nearest":{"nowait":false},"withins":{"nowait":false},"within":{"nowait":false},"max":{"nowait":false},"min":{"nowait":false},"push":{"nowait":false},"size":{"nowait":false},"find":{"nowait":false},"apply":{"nowait":false},"alive":{"nowait":false},"die":{"nowait":false},"klass":{"nowait":false}}}});\n'+
        '\n'+
        'Tonyu.klass.ensureNamespace(Tonyu.classes,\'kernel\');\n'+
        'Tonyu.classes.kernel.WaveTable=Tonyu.klass(Tonyu.classes.kernel.TObject,[],{\n'+
        '  main :function _trc_func_9000000_0() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=9000028;\n'+
        '    _this.wav={};\n'+
        '    $LASTPOS=9000036;\n'+
        '    _this.env={};\n'+
        '    $LASTPOS=9000313;\n'+
        '    if (typeof  T!=="undefined") {\n'+
        '      $LASTPOS=9000392;\n'+
        '      _this.env=T("env",{table: [1,[0.6,50],[0,100]],releaseNode: 2});\n'+
        '      $LASTPOS=9000460;\n'+
        '      _this.setEnv(0,_this.env);\n'+
        '      $LASTPOS=9000480;\n'+
        '      _this.setWav(0,T("pulse"));\n'+
        '      \n'+
        '    }\n'+
        '  },\n'+
        '  fiber$main :function _trc_func_9000000_1(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=9000028;\n'+
        '    _this.wav={};\n'+
        '    $LASTPOS=9000036;\n'+
        '    _this.env={};\n'+
        '    \n'+
        '    _thread.enter(function _trc_func_9000000_2(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=9000313;\n'+
        '          if (!(typeof  T!=="undefined")) { __pc=3; break; }\n'+
        '          $LASTPOS=9000392;\n'+
        '          _this.env=T("env",{table: [1,[0.6,50],[0,100]],releaseNode: 2});\n'+
        '          $LASTPOS=9000460;\n'+
        '          _this.fiber$setEnv(_thread, 0, _this.env);\n'+
        '          __pc=1;return;\n'+
        '        case 1:\n'+
        '          \n'+
        '          $LASTPOS=9000480;\n'+
        '          _this.fiber$setWav(_thread, 0, T("pulse"));\n'+
        '          __pc=2;return;\n'+
        '        case 2:\n'+
        '          \n'+
        '        case 3:\n'+
        '          \n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  setWav :function _trc_func_9000044_3(num,synth) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=9000070;\n'+
        '    _this.wav[num]=synth;\n'+
        '  },\n'+
        '  fiber$setWav :function _trc_func_9000044_4(_thread,num,synth) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=9000070;\n'+
        '    _this.wav[num]=synth;\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  setEnv :function _trc_func_9000088_5(num,synth) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=9000114;\n'+
        '    _this.env[num]=synth;\n'+
        '  },\n'+
        '  fiber$setEnv :function _trc_func_9000088_6(_thread,num,synth) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=9000114;\n'+
        '    _this.env[num]=synth;\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  get :function _trc_func_9000132_7(w,e) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var synth;\n'+
        '    \n'+
        '    $LASTPOS=9000148;\n'+
        '    synth = T("OscGen",{osc: _this.wav[w],env: _this.env[e],mul: 0.25});\n'+
        '    return synth;\n'+
        '  },\n'+
        '  fiber$get :function _trc_func_9000132_8(_thread,w,e) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var synth;\n'+
        '    \n'+
        '    $LASTPOS=9000148;\n'+
        '    synth = T("OscGen",{osc: _this.wav[w],env: _this.env[e],mul: 0.25});\n'+
        '    _thread.retVal=synth;return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  stop :function _trc_func_9000226_9() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  fiber$stop :function _trc_func_9000226_10(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  __dummy: false\n'+
        '});\n'+
        'Tonyu.klass.addMeta(Tonyu.classes.kernel.WaveTable,{"fullName":"kernel.WaveTable","namespace":"kernel","shortName":"WaveTable","decls":{"methods":{"main":{"nowait":false},"setWav":{"nowait":false},"setEnv":{"nowait":false},"get":{"nowait":false},"stop":{"nowait":false}}}});\n'+
        '\n'+
        'Tonyu.klass.ensureNamespace(Tonyu.classes,\'kernel\');\n'+
        'Tonyu.classes.kernel.BaseActor=Tonyu.klass([Tonyu.classes.kernel.MathMod,Tonyu.classes.kernel.EventMod,Tonyu.classes.kernel.TextRectMod],{\n'+
        '  main :function _trc_func_10000000_0() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  fiber$main :function _trc_func_10000000_1(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  initialize :function _trc_func_10000143_2(x,y,p) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var thg;\n'+
        '    \n'+
        '    $LASTPOS=10000162;\n'+
        '    if (Tonyu.runMode) {\n'+
        '      $LASTPOS=10000192;\n'+
        '      thg = _this.currentThreadGroup();\n'+
        '      $LASTPOS=10000231;\n'+
        '      if (thg) {\n'+
        '        $LASTPOS=10000240;\n'+
        '        _this._th=thg.addObj(_this);\n'+
        '      }\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=10000274;\n'+
        '    if (typeof  x=="object") {\n'+
        '      $LASTPOS=10000298;\n'+
        '      Tonyu.extend(_this,x);\n'+
        '    } else {\n'+
        '      $LASTPOS=10000331;\n'+
        '      if (typeof  x=="number") {\n'+
        '        $LASTPOS=10000366;\n'+
        '        _this.x=x;\n'+
        '        $LASTPOS=10000385;\n'+
        '        _this.y=y;\n'+
        '        $LASTPOS=10000404;\n'+
        '        _this.p=p;\n'+
        '        \n'+
        '      }\n'+
        '    }\n'+
        '    $LASTPOS=10000426;\n'+
        '    if (_this.scaleX==null) {\n'+
        '      $LASTPOS=10000444;\n'+
        '      _this.scaleX=1;\n'+
        '    }\n'+
        '    $LASTPOS=10000459;\n'+
        '    if (_this.rotation==null) {\n'+
        '      $LASTPOS=10000479;\n'+
        '      _this.rotation=0;\n'+
        '    }\n'+
        '    $LASTPOS=10000496;\n'+
        '    if (_this.rotate==null) {\n'+
        '      $LASTPOS=10000514;\n'+
        '      _this.rotate=0;\n'+
        '    }\n'+
        '    $LASTPOS=10000529;\n'+
        '    if (_this.alpha==null) {\n'+
        '      $LASTPOS=10000546;\n'+
        '      _this.alpha=255;\n'+
        '    }\n'+
        '    $LASTPOS=10000562;\n'+
        '    if (_this.zOrder==null) {\n'+
        '      $LASTPOS=10000580;\n'+
        '      _this.zOrder=0;\n'+
        '    }\n'+
        '    $LASTPOS=10000595;\n'+
        '    if (_this.age==null) {\n'+
        '      $LASTPOS=10000610;\n'+
        '      _this.age=0;\n'+
        '    }\n'+
        '    $LASTPOS=10000622;\n'+
        '    if (_this.anim!=null&&typeof  _this.anim=="object") {\n'+
        '      $LASTPOS=10000673;\n'+
        '      _this.animMode=true;\n'+
        '      $LASTPOS=10000697;\n'+
        '      _this.animFrame=0;\n'+
        '      \n'+
        '    } else {\n'+
        '      $LASTPOS=10000731;\n'+
        '      _this.animMode=false;\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=10000759;\n'+
        '    if (_this.animFps==null) {\n'+
        '      $LASTPOS=10000778;\n'+
        '      _this.animFps=1;\n'+
        '    }\n'+
        '  },\n'+
        '  extend :function _trc_func_10000793_3(obj) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return Tonyu.extend(_this,obj);\n'+
        '  },\n'+
        '  print :function _trc_func_10000857_4(pt) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=10000882;\n'+
        '    console.log.apply(console,arguments);\n'+
        '    $LASTPOS=10000925;\n'+
        '    if (Tonyu.globals.$consolePanel) {\n'+
        '      $LASTPOS=10000953;\n'+
        '      Tonyu.globals.$consolePanel.scroll(0,20);\n'+
        '      $LASTPOS=10000990;\n'+
        '      Tonyu.globals.$consolePanel.setFillStyle("white");\n'+
        '      $LASTPOS=10001036;\n'+
        '      Tonyu.globals.$consolePanel.fillText(pt,0,Tonyu.globals.$consolePrintY,20,"left");\n'+
        '      \n'+
        '    }\n'+
        '  },\n'+
        '  setAnimFps :function _trc_func_10001104_5(f) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=10001132;\n'+
        '    _this.animFps=f;\n'+
        '    $LASTPOS=10001153;\n'+
        '    _this.animFrame=0;\n'+
        '    $LASTPOS=10001176;\n'+
        '    _this.animMode=true;\n'+
        '  },\n'+
        '  startAnim :function _trc_func_10001200_6() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=10001226;\n'+
        '    _this.animMode=true;\n'+
        '  },\n'+
        '  stopAnim :function _trc_func_10001250_7() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=10001275;\n'+
        '    _this.animMode=false;\n'+
        '  },\n'+
        '  update :function _trc_func_10001300_8() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=10001317;\n'+
        '    _this.onUpdate();\n'+
        '    $LASTPOS=10001334;\n'+
        '    if (null) {\n'+
        '      $LASTPOS=10001357;\n'+
        '      null.suspend();\n'+
        '      \n'+
        '    }\n'+
        '  },\n'+
        '  fiber$update :function _trc_func_10001300_9(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=10001317;\n'+
        '    _this.onUpdate();\n'+
        '    $LASTPOS=10001334;\n'+
        '    if (_thread) {\n'+
        '      $LASTPOS=10001357;\n'+
        '      _thread.suspend();\n'+
        '      \n'+
        '    }\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  onUpdate :function _trc_func_10001387_10() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  updateEx :function _trc_func_10001418_11(updateT) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var updateCount;\n'+
        '    \n'+
        '    $LASTPOS=10001443;\n'+
        '    $LASTPOS=10001447;\n'+
        '    updateCount = 0;\n'+
        '    while(updateCount<updateT) {\n'+
        '      {\n'+
        '        $LASTPOS=10001510;\n'+
        '        _this.update();\n'+
        '      }\n'+
        '      updateCount++;\n'+
        '    }\n'+
        '  },\n'+
        '  fiber$updateEx :function _trc_func_10001418_12(_thread,updateT) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var updateCount;\n'+
        '    \n'+
        '    \n'+
        '    _thread.enter(function _trc_func_10001418_13(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=10001443;\n'+
        '          $LASTPOS=10001447;\n'+
        '          updateCount = 0;;\n'+
        '        case 1:\n'+
        '          if (!(updateCount<updateT)) { __pc=3; break; }\n'+
        '          $LASTPOS=10001510;\n'+
        '          _this.fiber$update(_thread);\n'+
        '          __pc=2;return;\n'+
        '        case 2:\n'+
        '          \n'+
        '          updateCount++;\n'+
        '          __pc=1;break;\n'+
        '        case 3:\n'+
        '          \n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  getkey :function _trc_func_10001531_14(k) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return Tonyu.globals.$Keys.getkey(k);\n'+
        '  },\n'+
        '  hitTo :function _trc_func_10001584_15(t) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return _this.crashTo(t);\n'+
        '  },\n'+
        '  all :function _trc_func_10001631_16(c) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var res;\n'+
        '    \n'+
        '    $LASTPOS=10001653;\n'+
        '    res = new Tonyu.classes.kernel.TQuery;\n'+
        '    $LASTPOS=10001678;\n'+
        '    Tonyu.globals.$Sprites.sprites.forEach(function (s) {\n'+
        '      \n'+
        '      $LASTPOS=10001719;\n'+
        '      if (s===_this) {\n'+
        '        return _this;\n'+
        '      }\n'+
        '      $LASTPOS=10001750;\n'+
        '      if (! c||s instanceof c) {\n'+
        '        $LASTPOS=10001791;\n'+
        '        res.push(s);\n'+
        '        \n'+
        '      }\n'+
        '    });\n'+
        '    return res;\n'+
        '  },\n'+
        '  allCrash :function _trc_func_10001871_17(t) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var res;\n'+
        '    var sp;\n'+
        '    var t1;\n'+
        '    \n'+
        '    $LASTPOS=10001898;\n'+
        '    res = new Tonyu.classes.kernel.TQuery;\n'+
        '    $LASTPOS=10001923;\n'+
        '    sp = _this;\n'+
        '    $LASTPOS=10001960;\n'+
        '    t1 = _this.getCrashRect();\n'+
        '    $LASTPOS=10001988;\n'+
        '    if (! t1) {\n'+
        '      return res;\n'+
        '    }\n'+
        '    $LASTPOS=10002014;\n'+
        '    Tonyu.globals.$Sprites.sprites.forEach(function (s) {\n'+
        '      var t2;\n'+
        '      \n'+
        '      $LASTPOS=10002055;\n'+
        '      t2;\n'+
        '      $LASTPOS=10002072;\n'+
        '      if (s!==_this&&! s.excludeFromAll&&s instanceof t&&(t2=s.getCrashRect())&&Math.abs(t1.x-t2.x)*2<t1.width+t2.width&&Math.abs(t1.y-t2.y)*2<t1.height+t2.height) {\n'+
        '        $LASTPOS=10002300;\n'+
        '        res.push(s);\n'+
        '        \n'+
        '      }\n'+
        '    });\n'+
        '    return res;\n'+
        '  },\n'+
        '  crashTo :function _trc_func_10002358_18(t) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=10002384;\n'+
        '    if (! t) {\n'+
        '      return false;\n'+
        '    }\n'+
        '    $LASTPOS=10002411;\n'+
        '    if (typeof  t=="function") {\n'+
        '      return _this.allCrash(t)[0];\n'+
        '      \n'+
        '    }\n'+
        '    return _this.crashTo1(t);\n'+
        '  },\n'+
        '  crashTo1 :function _trc_func_10002507_19(t) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var t1;\n'+
        '    var t2;\n'+
        '    \n'+
        '    $LASTPOS=10002534;\n'+
        '    if (! t||t._isDead) {\n'+
        '      return false;\n'+
        '    }\n'+
        '    $LASTPOS=10002662;\n'+
        '    t1 = _this.getCrashRect();\n'+
        '    $LASTPOS=10002690;\n'+
        '    t2 = t.getCrashRect();\n'+
        '    return t1&&t2&&Math.abs(t1.x-t2.x)*2<t1.width+t2.width&&Math.abs(t1.y-t2.y)*2<t1.height+t2.height;\n'+
        '  },\n'+
        '  getCrashRect :function _trc_func_10002973_20() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var actWidth;\n'+
        '    var actHeight;\n'+
        '    \n'+
        '    $LASTPOS=10003003;\n'+
        '    actWidth = _this.width*_this.scaleX;actHeight;\n'+
        '    $LASTPOS=10003046;\n'+
        '    if (typeof  _this.scaleY==="undefined") {\n'+
        '      $LASTPOS=10003088;\n'+
        '      actHeight=_this.height*_this.scaleX;\n'+
        '      \n'+
        '    } else {\n'+
        '      $LASTPOS=10003134;\n'+
        '      actHeight=_this.height*_this.scaleY;\n'+
        '      \n'+
        '    }\n'+
        '    return typeof  _this.x=="number"&&typeof  _this.y=="number"&&typeof  _this.width=="number"&&typeof  _this.height=="number"&&{x: _this.x,y: _this.y,width: actWidth,height: actHeight};\n'+
        '  },\n'+
        '  within :function _trc_func_10003339_21(t,distance) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=10003372;\n'+
        '    if (! t||t._isDead) {\n'+
        '      return false;\n'+
        '    }\n'+
        '    $LASTPOS=10003411;\n'+
        '    if (Math.sqrt(Math.abs(_this.x-t.x)*Math.abs(_this.x-t.x)+Math.abs(_this.y-t.y)*Math.abs(_this.y-t.y))<distance) {\n'+
        '      return true;\n'+
        '      \n'+
        '    }\n'+
        '    return false;\n'+
        '  },\n'+
        '  watchHit :function _trc_func_10003553_22(typeA,typeB,onHit) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=10003596;\n'+
        '    Tonyu.globals.$Sprites.watchHit(typeA,typeB,function (a,b) {\n'+
        '      \n'+
        '      $LASTPOS=10003647;\n'+
        '      onHit.apply(_this,[a,b]);\n'+
        '    });\n'+
        '  },\n'+
        '  currentThreadGroup :function _trc_func_10003685_23() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return Tonyu.globals.$currentThreadGroup;\n'+
        '  },\n'+
        '  die :function _trc_func_10003754_24() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=10003775;\n'+
        '    if (_this._th) {\n'+
        '      $LASTPOS=10003795;\n'+
        '      _this._th.kill();\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=10003819;\n'+
        '    _this.hide();\n'+
        '    $LASTPOS=10003832;\n'+
        '    _this.fireEvent("die");\n'+
        '    $LASTPOS=10003855;\n'+
        '    _this._isDead=true;\n'+
        '  },\n'+
        '  hide :function _trc_func_10003873_25() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=10004034;\n'+
        '    if (_this.layer&&typeof  _this.layer.remove=="function") {\n'+
        '      $LASTPOS=10004089;\n'+
        '      _this.layer.remove(_this);\n'+
        '      \n'+
        '    } else {\n'+
        '      $LASTPOS=10004130;\n'+
        '      Tonyu.globals.$Sprites.remove(_this);\n'+
        '      \n'+
        '    }\n'+
        '  },\n'+
        '  show :function _trc_func_10004164_26(x,y,p) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=10004191;\n'+
        '    if (_this.layer&&typeof  _this.layer.add=="function") {\n'+
        '      $LASTPOS=10004243;\n'+
        '      _this.layer.add(_this);\n'+
        '      \n'+
        '    } else {\n'+
        '      $LASTPOS=10004281;\n'+
        '      Tonyu.globals.$Sprites.add(_this);\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=10004313;\n'+
        '    if (x!=null) {\n'+
        '      $LASTPOS=10004326;\n'+
        '      _this.x=x;\n'+
        '    }\n'+
        '    $LASTPOS=10004341;\n'+
        '    if (y!=null) {\n'+
        '      $LASTPOS=10004354;\n'+
        '      _this.y=y;\n'+
        '    }\n'+
        '    $LASTPOS=10004369;\n'+
        '    if (p!=null) {\n'+
        '      $LASTPOS=10004382;\n'+
        '      _this.p=p;\n'+
        '    }\n'+
        '  },\n'+
        '  detectShape :function _trc_func_10004398_27() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=10004427;\n'+
        '    if (typeof  _this.p!="number") {\n'+
        '      $LASTPOS=10004462;\n'+
        '      if (_this.text!=null) {\n'+
        '        return _this;\n'+
        '      }\n'+
        '      $LASTPOS=10004495;\n'+
        '      _this.p=0;\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=10004512;\n'+
        '    _this.p=Math.floor(_this.p);\n'+
        '    $LASTPOS=10004534;\n'+
        '    _this.pImg=Tonyu.globals.$Sprites.getImageList()[_this.p];\n'+
        '    $LASTPOS=10004572;\n'+
        '    if (! _this.pImg) {\n'+
        '      return _this;\n'+
        '    }\n'+
        '    $LASTPOS=10004596;\n'+
        '    _this.width=_this.pImg.width;\n'+
        '    $LASTPOS=10004619;\n'+
        '    _this.height=_this.pImg.height;\n'+
        '  },\n'+
        '  waitFor :function _trc_func_10004643_28(f) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    \n'+
        '    $LASTPOS=10004712;\n'+
        '    _this.update();\n'+
        '  },\n'+
        '  fiber$waitFor :function _trc_func_10004643_29(_thread,f) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.enter(function _trc_func_10004643_30(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          {\n'+
        '            $LASTPOS=10004680;\n'+
        '            _thread.waitFor(f);\n'+
        '          }\n'+
        '          $LASTPOS=10004712;\n'+
        '          _this.fiber$update(_thread);\n'+
        '          __pc=1;return;\n'+
        '        case 1:\n'+
        '          \n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  isDead :function _trc_func_10004726_31() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return _this._isDead;\n'+
        '  },\n'+
        '  animation :function _trc_func_10004772_32() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=10004798;\n'+
        '    _this.age++;\n'+
        '    $LASTPOS=10004810;\n'+
        '    if (_this.animMode&&_this.age%_this.animFps==0) {\n'+
        '      $LASTPOS=10004851;\n'+
        '      _this.p=_this.anim[_this.animFrame%_this.anim.length];\n'+
        '      $LASTPOS=10004891;\n'+
        '      _this.animFrame++;\n'+
        '      \n'+
        '    }\n'+
        '  },\n'+
        '  draw :function _trc_func_10004915_33(ctx) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var rect;\n'+
        '    \n'+
        '    $LASTPOS=10004940;\n'+
        '    if (_this.x==null||_this.y==null||_this._isInvisible) {\n'+
        '      return _this;\n'+
        '    }\n'+
        '    $LASTPOS=10004993;\n'+
        '    _this.detectShape();\n'+
        '    $LASTPOS=10005013;\n'+
        '    if (_this.pImg) {\n'+
        '      $LASTPOS=10005034;\n'+
        '      ctx.save();\n'+
        '      $LASTPOS=10005055;\n'+
        '      ctx.translate(_this.x,_this.y);\n'+
        '      $LASTPOS=10005199;\n'+
        '      _this.animation();\n'+
        '      $LASTPOS=10005221;\n'+
        '      if (_this.rotation!=0) {\n'+
        '        $LASTPOS=10005256;\n'+
        '        ctx.rotate(_this.rotation/180*Math.PI);\n'+
        '        \n'+
        '      } else {\n'+
        '        $LASTPOS=10005324;\n'+
        '        ctx.rotate(_this.rotate/180*Math.PI);\n'+
        '        \n'+
        '      }\n'+
        '      $LASTPOS=10005381;\n'+
        '      if (typeof  _this.scaleY==="undefined") {\n'+
        '        $LASTPOS=10005433;\n'+
        '        ctx.scale(_this.scaleX,_this.scaleX);\n'+
        '        \n'+
        '      } else {\n'+
        '        $LASTPOS=10005498;\n'+
        '        ctx.scale(_this.scaleX,_this.scaleY);\n'+
        '        \n'+
        '      }\n'+
        '      $LASTPOS=10005554;\n'+
        '      ctx.globalAlpha=_this.alpha/255;\n'+
        '      $LASTPOS=10005595;\n'+
        '      ctx.drawImage(_this.pImg.image,_this.pImg.x,_this.pImg.y,_this.pImg.width,_this.pImg.height,- _this.width/2,- _this.height/2,_this.width,_this.height);\n'+
        '      $LASTPOS=10005727;\n'+
        '      ctx.restore();\n'+
        '      \n'+
        '    } else {\n'+
        '      $LASTPOS=10005754;\n'+
        '      if (_this.text!==null&&_this.text!==undefined) {\n'+
        '        $LASTPOS=10005802;\n'+
        '        if (! _this.size) {\n'+
        '          $LASTPOS=10005813;\n'+
        '          _this.size=15;\n'+
        '        }\n'+
        '        $LASTPOS=10005831;\n'+
        '        if (! _this.align) {\n'+
        '          $LASTPOS=10005843;\n'+
        '          _this.align="center";\n'+
        '        }\n'+
        '        $LASTPOS=10005868;\n'+
        '        if (! _this.fillStyle) {\n'+
        '          $LASTPOS=10005884;\n'+
        '          _this.fillStyle="white";\n'+
        '        }\n'+
        '        $LASTPOS=10005912;\n'+
        '        ctx.fillStyle=_this.fillStyle;\n'+
        '        $LASTPOS=10005946;\n'+
        '        ctx.globalAlpha=_this.alpha/255;\n'+
        '        $LASTPOS=10005987;\n'+
        '        rect = _this.drawTextRect(ctx,_this.text,_this.x,_this.y,_this.size,_this.align,"fill");\n'+
        '        $LASTPOS=10006058;\n'+
        '        _this.width=rect.w;\n'+
        '        $LASTPOS=10006081;\n'+
        '        _this.height=rect.h;\n'+
        '        \n'+
        '      }\n'+
        '    }\n'+
        '    $LASTPOS=10006108;\n'+
        '    if (_this._fukidashi) {\n'+
        '      $LASTPOS=10006135;\n'+
        '      if (_this._fukidashi.c>0) {\n'+
        '        $LASTPOS=10006170;\n'+
        '        _this._fukidashi.c--;\n'+
        '        $LASTPOS=10006199;\n'+
        '        ctx.fillStyle="white";\n'+
        '        $LASTPOS=10006235;\n'+
        '        ctx.strokeStyle="black";\n'+
        '        $LASTPOS=10006273;\n'+
        '        _this.fukidashi(ctx,_this._fukidashi.text,_this.x,_this.y-_this.height/2-10,_this._fukidashi.size);\n'+
        '        \n'+
        '      }\n'+
        '      \n'+
        '    }\n'+
        '  },\n'+
        '  asyncResult :function _trc_func_10006380_34() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return Tonyu.asyncResult();\n'+
        '  },\n'+
        '  screenOut :function _trc_func_10006443_35(a) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var r;\n'+
        '    var viewX;\n'+
        '    var viewY;\n'+
        '    \n'+
        '    $LASTPOS=10006496;\n'+
        '    if (! a) {\n'+
        '      $LASTPOS=10006504;\n'+
        '      a=0;\n'+
        '    }\n'+
        '    $LASTPOS=10006514;\n'+
        '    r = 0;\n'+
        '    $LASTPOS=10006528;\n'+
        '    viewX = 0;viewY = 0;\n'+
        '    $LASTPOS=10006554;\n'+
        '    if (_this.x<viewX+a) {\n'+
        '      $LASTPOS=10006583;\n'+
        '      r+=viewX+a-_this.x;\n'+
        '    }\n'+
        '    $LASTPOS=10006602;\n'+
        '    if (_this.y<viewY+a) {\n'+
        '      $LASTPOS=10006631;\n'+
        '      r+=viewY+a-_this.y;\n'+
        '    }\n'+
        '    $LASTPOS=10006650;\n'+
        '    if (_this.x>Tonyu.globals.$screenWidth+viewX-a) {\n'+
        '      $LASTPOS=10006679;\n'+
        '      r+=_this.x-(Tonyu.globals.$screenWidth+viewX-a);\n'+
        '    }\n'+
        '    $LASTPOS=10006714;\n'+
        '    if (_this.y>Tonyu.globals.$screenHeight+viewY-a) {\n'+
        '      $LASTPOS=10006743;\n'+
        '      r+=_this.y-(Tonyu.globals.$screenHeight+viewY-a);\n'+
        '    }\n'+
        '    return r;\n'+
        '  },\n'+
        '  fiber$screenOut :function _trc_func_10006443_36(_thread,a) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var r;\n'+
        '    var viewX;\n'+
        '    var viewY;\n'+
        '    \n'+
        '    $LASTPOS=10006496;\n'+
        '    if (! a) {\n'+
        '      $LASTPOS=10006504;\n'+
        '      a=0;\n'+
        '    }\n'+
        '    $LASTPOS=10006514;\n'+
        '    r = 0;\n'+
        '    $LASTPOS=10006528;\n'+
        '    viewX = 0;viewY = 0;\n'+
        '    $LASTPOS=10006554;\n'+
        '    if (_this.x<viewX+a) {\n'+
        '      $LASTPOS=10006583;\n'+
        '      r+=viewX+a-_this.x;\n'+
        '    }\n'+
        '    $LASTPOS=10006602;\n'+
        '    if (_this.y<viewY+a) {\n'+
        '      $LASTPOS=10006631;\n'+
        '      r+=viewY+a-_this.y;\n'+
        '    }\n'+
        '    $LASTPOS=10006650;\n'+
        '    if (_this.x>Tonyu.globals.$screenWidth+viewX-a) {\n'+
        '      $LASTPOS=10006679;\n'+
        '      r+=_this.x-(Tonyu.globals.$screenWidth+viewX-a);\n'+
        '    }\n'+
        '    $LASTPOS=10006714;\n'+
        '    if (_this.y>Tonyu.globals.$screenHeight+viewY-a) {\n'+
        '      $LASTPOS=10006743;\n'+
        '      r+=_this.y-(Tonyu.globals.$screenHeight+viewY-a);\n'+
        '    }\n'+
        '    _thread.retVal=r;return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  file :function _trc_func_10006792_37(path) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var d;\n'+
        '    var files;\n'+
        '    \n'+
        '    $LASTPOS=10006811;\n'+
        '    d = Tonyu.currentProject.getDir();\n'+
        '    $LASTPOS=10006853;\n'+
        '    files = d.rel("files/");\n'+
        '    return FS.get(files.rel(path),{topDir: d});\n'+
        '  },\n'+
        '  fiber$file :function _trc_func_10006792_38(_thread,path) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var d;\n'+
        '    var files;\n'+
        '    \n'+
        '    $LASTPOS=10006811;\n'+
        '    d = Tonyu.currentProject.getDir();\n'+
        '    $LASTPOS=10006853;\n'+
        '    files = d.rel("files/");\n'+
        '    _thread.retVal=FS.get(files.rel(path),{topDir: d});return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  waitInputDevice :function _trc_func_10006932_39(fl) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=10006960;\n'+
        '    if (fl!==false) {\n'+
        '      $LASTPOS=10006987;\n'+
        '      if (! _this.origTG) {\n'+
        '        \n'+
        '        \n'+
        '      }\n'+
        '      $LASTPOS=10007139;\n'+
        '      _this.a=_this.asyncResult();\n'+
        '      $LASTPOS=10007165;\n'+
        '      Tonyu.globals.$InputDevice.addOnetimeListener(_this.a.receiver);\n'+
        '      $LASTPOS=10007219;\n'+
        '      _this.waitFor(_this.a);\n'+
        '      \n'+
        '    } else {\n'+
        '      $LASTPOS=10007254;\n'+
        '      if (_this.origTG) {\n'+
        '        \n'+
        '        \n'+
        '      }\n'+
        '      \n'+
        '    }\n'+
        '  },\n'+
        '  fiber$waitInputDevice :function _trc_func_10006932_40(_thread,fl) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.enter(function _trc_func_10006932_41(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=10006960;\n'+
        '          if (!(fl!==false)) { __pc=3; break; }\n'+
        '          $LASTPOS=10006987;\n'+
        '          if (!(! _this.origTG)) { __pc=1; break; }\n'+
        '          {\n'+
        '            $LASTPOS=10007041;\n'+
        '            _this.origTG=_thread.group;\n'+
        '            $LASTPOS=10007080;\n'+
        '            _thread.setGroup(null);\n'+
        '          }\n'+
        '        case 1:\n'+
        '          \n'+
        '          $LASTPOS=10007139;\n'+
        '          _this.a=_this.asyncResult();\n'+
        '          $LASTPOS=10007165;\n'+
        '          Tonyu.globals.$InputDevice.addOnetimeListener(_this.a.receiver);\n'+
        '          $LASTPOS=10007219;\n'+
        '          _this.fiber$waitFor(_thread, _this.a);\n'+
        '          __pc=2;return;\n'+
        '        case 2:\n'+
        '          \n'+
        '          __pc=5;break;\n'+
        '        case 3:\n'+
        '          $LASTPOS=10007254;\n'+
        '          if (!(_this.origTG)) { __pc=4; break; }\n'+
        '          {\n'+
        '            $LASTPOS=10007307;\n'+
        '            _thread.setGroup(_this.origTG);\n'+
        '            $LASTPOS=10007350;\n'+
        '            _this.origTG=null;\n'+
        '          }\n'+
        '        case 4:\n'+
        '          \n'+
        '        case 5:\n'+
        '          \n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  redrawScreen :function _trc_func_10007400_42() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=10007423;\n'+
        '    Tonyu.globals.$Sprites.draw(Tonyu.globals.$Screen.buf[0]);\n'+
        '    $LASTPOS=10007459;\n'+
        '    Tonyu.globals.$Screen.draw();\n'+
        '  },\n'+
        '  fiber$redrawScreen :function _trc_func_10007400_43(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=10007423;\n'+
        '    Tonyu.globals.$Sprites.draw(Tonyu.globals.$Screen.buf[0]);\n'+
        '    $LASTPOS=10007459;\n'+
        '    Tonyu.globals.$Screen.draw();\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  color :function _trc_func_10007500_44(r,g,b) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return "rgb("+[r,g,b].join(",")+")";\n'+
        '  },\n'+
        '  fiber$color :function _trc_func_10007500_45(_thread,r,g,b) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    _thread.retVal="rgb("+[r,g,b].join(",")+")";return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  drawText :function _trc_func_10007562_46(x,y,text,col,size) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var tp;\n'+
        '    \n'+
        '    $LASTPOS=10007598;\n'+
        '    if (Tonyu.globals.$debug) {\n'+
        '      return _this;\n'+
        '    }\n'+
        '    $LASTPOS=10007623;\n'+
        '    if (! size) {\n'+
        '      $LASTPOS=10007634;\n'+
        '      size=15;\n'+
        '    }\n'+
        '    $LASTPOS=10007648;\n'+
        '    if (! col) {\n'+
        '      $LASTPOS=10007658;\n'+
        '      col="cyan";\n'+
        '    }\n'+
        '    $LASTPOS=10007675;\n'+
        '    tp = _this.all(Tonyu.classes.kernel.T1Text).find(function (t) {\n'+
        '      \n'+
        '      return t.hidden;\n'+
        '    });\n'+
        '    $LASTPOS=10007729;\n'+
        '    if (tp.length>0) {\n'+
        '      $LASTPOS=10007757;\n'+
        '      tp[0].extend({x: x,y: y,text: text,fillStyle: col,size: size,hidden: false});\n'+
        '      \n'+
        '    } else {\n'+
        '      $LASTPOS=10007836;\n'+
        '      new Tonyu.classes.kernel.T1Text({x: x,y: y,text: text,fillStyle: col,size: size});\n'+
        '      \n'+
        '    }\n'+
        '  },\n'+
        '  fiber$drawText :function _trc_func_10007562_47(_thread,x,y,text,col,size) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var tp;\n'+
        '    \n'+
        '    $LASTPOS=10007598;\n'+
        '    if (Tonyu.globals.$debug) {\n'+
        '      _thread.retVal=_this;return;\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=10007623;\n'+
        '    if (! size) {\n'+
        '      $LASTPOS=10007634;\n'+
        '      size=15;\n'+
        '    }\n'+
        '    $LASTPOS=10007648;\n'+
        '    if (! col) {\n'+
        '      $LASTPOS=10007658;\n'+
        '      col="cyan";\n'+
        '    }\n'+
        '    $LASTPOS=10007675;\n'+
        '    tp = _this.all(Tonyu.classes.kernel.T1Text).find(function (t) {\n'+
        '      \n'+
        '      return t.hidden;\n'+
        '    });\n'+
        '    $LASTPOS=10007729;\n'+
        '    if (tp.length>0) {\n'+
        '      $LASTPOS=10007757;\n'+
        '      tp[0].extend({x: x,y: y,text: text,fillStyle: col,size: size,hidden: false});\n'+
        '      \n'+
        '    } else {\n'+
        '      $LASTPOS=10007836;\n'+
        '      new Tonyu.classes.kernel.T1Text({x: x,y: y,text: text,fillStyle: col,size: size});\n'+
        '      \n'+
        '    }\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  drawLine :function _trc_func_10007891_48(x,y,tx,ty,col) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var tp;\n'+
        '    \n'+
        '    $LASTPOS=10007923;\n'+
        '    if (! col) {\n'+
        '      $LASTPOS=10007933;\n'+
        '      col="white";\n'+
        '    }\n'+
        '    $LASTPOS=10007951;\n'+
        '    tp = _this.all(Tonyu.classes.kernel.T1Line).find(function (t) {\n'+
        '      \n'+
        '      return t.hidden;\n'+
        '    });\n'+
        '    $LASTPOS=10008005;\n'+
        '    if (tp.length>0) {\n'+
        '      $LASTPOS=10008033;\n'+
        '      tp[0].extend({x: x,y: y,tx: tx,ty: ty,col: col,hidden: false});\n'+
        '      \n'+
        '    } else {\n'+
        '      $LASTPOS=10008098;\n'+
        '      new Tonyu.classes.kernel.T1Line({x: x,y: y,tx: tx,ty: ty,col: col});\n'+
        '      \n'+
        '    }\n'+
        '  },\n'+
        '  fiber$drawLine :function _trc_func_10007891_49(_thread,x,y,tx,ty,col) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var tp;\n'+
        '    \n'+
        '    $LASTPOS=10007923;\n'+
        '    if (! col) {\n'+
        '      $LASTPOS=10007933;\n'+
        '      col="white";\n'+
        '    }\n'+
        '    $LASTPOS=10007951;\n'+
        '    tp = _this.all(Tonyu.classes.kernel.T1Line).find(function (t) {\n'+
        '      \n'+
        '      return t.hidden;\n'+
        '    });\n'+
        '    $LASTPOS=10008005;\n'+
        '    if (tp.length>0) {\n'+
        '      $LASTPOS=10008033;\n'+
        '      tp[0].extend({x: x,y: y,tx: tx,ty: ty,col: col,hidden: false});\n'+
        '      \n'+
        '    } else {\n'+
        '      $LASTPOS=10008098;\n'+
        '      new Tonyu.classes.kernel.T1Line({x: x,y: y,tx: tx,ty: ty,col: col});\n'+
        '      \n'+
        '    }\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  loadPage :function _trc_func_10008138_50(page,arg) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=10008164;\n'+
        '    _this.all().die();\n'+
        '    $LASTPOS=10008182;\n'+
        '    new page(arg);\n'+
        '    $LASTPOS=10008202;\n'+
        '    _this.die();\n'+
        '  },\n'+
        '  fiber$loadPage :function _trc_func_10008138_51(_thread,page,arg) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=10008164;\n'+
        '    _this.all().die();\n'+
        '    $LASTPOS=10008182;\n'+
        '    new page(arg);\n'+
        '    $LASTPOS=10008202;\n'+
        '    _this.die();\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  setVisible :function _trc_func_10008215_52(v) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=10008237;\n'+
        '    _this._isInvisible=! v;\n'+
        '  },\n'+
        '  fiber$setVisible :function _trc_func_10008215_53(_thread,v) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=10008237;\n'+
        '    _this._isInvisible=! v;\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  __dummy: false\n'+
        '});\n'+
        'Tonyu.klass.addMeta(Tonyu.classes.kernel.BaseActor,{"fullName":"kernel.BaseActor","namespace":"kernel","shortName":"BaseActor","decls":{"methods":{"main":{"nowait":false},"new":{"nowait":false},"extend":{"nowait":true},"print":{"nowait":true},"setAnimFps":{"nowait":true},"startAnim":{"nowait":true},"stopAnim":{"nowait":true},"update":{"nowait":false},"onUpdate":{"nowait":true},"updateEx":{"nowait":false},"getkey":{"nowait":true},"hitTo":{"nowait":true},"all":{"nowait":true},"allCrash":{"nowait":true},"crashTo":{"nowait":true},"crashTo1":{"nowait":true},"getCrashRect":{"nowait":true},"within":{"nowait":true},"watchHit":{"nowait":true},"currentThreadGroup":{"nowait":true},"die":{"nowait":true},"hide":{"nowait":true},"show":{"nowait":true},"detectShape":{"nowait":true},"waitFor":{"nowait":false},"isDead":{"nowait":true},"animation":{"nowait":true},"draw":{"nowait":true},"asyncResult":{"nowait":true},"screenOut":{"nowait":false},"file":{"nowait":false},"waitInputDevice":{"nowait":false},"redrawScreen":{"nowait":false},"color":{"nowait":false},"drawText":{"nowait":false},"drawLine":{"nowait":false},"loadPage":{"nowait":false},"setVisible":{"nowait":false}}}});\n'+
        '\n'+
        'Tonyu.klass.ensureNamespace(Tonyu.classes,\'kernel\');\n'+
        'Tonyu.classes.kernel.Keys=Tonyu.klass(Tonyu.classes.kernel.TObject,[],{\n'+
        '  main :function _trc_func_11000000_0() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var i;\n'+
        '    \n'+
        '    $LASTPOS=11000084;\n'+
        '    _this.stats={};\n'+
        '    $LASTPOS=11000094;\n'+
        '    _this.codes={left: 37,up: 38,right: 39,down: 40,space: 32,enter: 13,shift: 16,ctrl: 17,alt: 18,mouseleft: 1};\n'+
        '    $LASTPOS=11000212;\n'+
        '    $LASTPOS=11000217;\n'+
        '    i = 65;\n'+
        '    while(i<65+26) {\n'+
        '      {\n'+
        '        $LASTPOS=11000248;\n'+
        '        _this.codes[String.fromCharCode(i).toLowerCase()]=i;\n'+
        '      }\n'+
        '      i++;\n'+
        '    }\n'+
        '    $LASTPOS=11000297;\n'+
        '    $LASTPOS=11000302;\n'+
        '    i = 48;\n'+
        '    while(i<58) {\n'+
        '      {\n'+
        '        $LASTPOS=11000330;\n'+
        '        _this.codes[String.fromCharCode(i)]=i;\n'+
        '      }\n'+
        '      i++;\n'+
        '    }\n'+
        '    $LASTPOS=11000365;\n'+
        '    if (! $.data(document,"key_event")) {\n'+
        '      $LASTPOS=11000406;\n'+
        '      $.data(document,"key_event",true);\n'+
        '      $LASTPOS=11000445;\n'+
        '      $(document).keydown(function (e) {\n'+
        '        \n'+
        '        $LASTPOS=11000471;\n'+
        '        Tonyu.globals.$Keys.keydown(e);\n'+
        '      });\n'+
        '      $LASTPOS=11000495;\n'+
        '      $(document).keyup(function (e) {\n'+
        '        \n'+
        '        $LASTPOS=11000519;\n'+
        '        Tonyu.globals.$Keys.keyup(e);\n'+
        '      });\n'+
        '      $LASTPOS=11000541;\n'+
        '      $(document).mousedown(function (e) {\n'+
        '        \n'+
        '        $LASTPOS=11000578;\n'+
        '        if (Tonyu.globals.$InputDevice.touchEmu) {\n'+
        '          $LASTPOS=11000619;\n'+
        '          Tonyu.globals.$touches[0].touched=1;\n'+
        '          \n'+
        '        }\n'+
        '        $LASTPOS=11000660;\n'+
        '        Tonyu.globals.$Keys.keydown({keyCode: 1});\n'+
        '      });\n'+
        '      $LASTPOS=11000697;\n'+
        '      $(document).mouseup(function (e) {\n'+
        '        \n'+
        '        $LASTPOS=11000732;\n'+
        '        if (Tonyu.globals.$InputDevice.touchEmu) {\n'+
        '          $LASTPOS=11000773;\n'+
        '          Tonyu.globals.$touches[0].touched=0;\n'+
        '          \n'+
        '        }\n'+
        '        $LASTPOS=11000814;\n'+
        '        Tonyu.globals.$Keys.keyup({keyCode: 1});\n'+
        '      });\n'+
        '      \n'+
        '    }\n'+
        '  },\n'+
        '  fiber$main :function _trc_func_11000000_1(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var i;\n'+
        '    \n'+
        '    $LASTPOS=11000084;\n'+
        '    _this.stats={};\n'+
        '    $LASTPOS=11000094;\n'+
        '    _this.codes={left: 37,up: 38,right: 39,down: 40,space: 32,enter: 13,shift: 16,ctrl: 17,alt: 18,mouseleft: 1};\n'+
        '    $LASTPOS=11000212;\n'+
        '    $LASTPOS=11000217;\n'+
        '    i = 65;\n'+
        '    while(i<65+26) {\n'+
        '      {\n'+
        '        $LASTPOS=11000248;\n'+
        '        _this.codes[String.fromCharCode(i).toLowerCase()]=i;\n'+
        '      }\n'+
        '      i++;\n'+
        '    }\n'+
        '    $LASTPOS=11000297;\n'+
        '    $LASTPOS=11000302;\n'+
        '    i = 48;\n'+
        '    while(i<58) {\n'+
        '      {\n'+
        '        $LASTPOS=11000330;\n'+
        '        _this.codes[String.fromCharCode(i)]=i;\n'+
        '      }\n'+
        '      i++;\n'+
        '    }\n'+
        '    $LASTPOS=11000365;\n'+
        '    if (! $.data(document,"key_event")) {\n'+
        '      $LASTPOS=11000406;\n'+
        '      $.data(document,"key_event",true);\n'+
        '      $LASTPOS=11000445;\n'+
        '      $(document).keydown(function (e) {\n'+
        '        \n'+
        '        $LASTPOS=11000471;\n'+
        '        Tonyu.globals.$Keys.keydown(e);\n'+
        '      });\n'+
        '      $LASTPOS=11000495;\n'+
        '      $(document).keyup(function (e) {\n'+
        '        \n'+
        '        $LASTPOS=11000519;\n'+
        '        Tonyu.globals.$Keys.keyup(e);\n'+
        '      });\n'+
        '      $LASTPOS=11000541;\n'+
        '      $(document).mousedown(function (e) {\n'+
        '        \n'+
        '        $LASTPOS=11000578;\n'+
        '        if (Tonyu.globals.$InputDevice.touchEmu) {\n'+
        '          $LASTPOS=11000619;\n'+
        '          Tonyu.globals.$touches[0].touched=1;\n'+
        '          \n'+
        '        }\n'+
        '        $LASTPOS=11000660;\n'+
        '        Tonyu.globals.$Keys.keydown({keyCode: 1});\n'+
        '      });\n'+
        '      $LASTPOS=11000697;\n'+
        '      $(document).mouseup(function (e) {\n'+
        '        \n'+
        '        $LASTPOS=11000732;\n'+
        '        if (Tonyu.globals.$InputDevice.touchEmu) {\n'+
        '          $LASTPOS=11000773;\n'+
        '          Tonyu.globals.$touches[0].touched=0;\n'+
        '          \n'+
        '        }\n'+
        '        $LASTPOS=11000814;\n'+
        '        Tonyu.globals.$Keys.keyup({keyCode: 1});\n'+
        '      });\n'+
        '      \n'+
        '    }\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  getkey :function _trc_func_11000847_2(code) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=11000875;\n'+
        '    if (typeof  code=="string") {\n'+
        '      $LASTPOS=11000912;\n'+
        '      code=_this.codes[code.toLowerCase()];\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=11000954;\n'+
        '    if (! code) {\n'+
        '      return 0;\n'+
        '    }\n'+
        '    $LASTPOS=11000979;\n'+
        '    if (_this.stats[code]==- 1) {\n'+
        '      return 0;\n'+
        '    }\n'+
        '    $LASTPOS=11001014;\n'+
        '    if (! _this.stats[code]) {\n'+
        '      $LASTPOS=11001032;\n'+
        '      _this.stats[code]=0;\n'+
        '    }\n'+
        '    return _this.stats[code];\n'+
        '  },\n'+
        '  fiber$getkey :function _trc_func_11000847_3(_thread,code) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=11000875;\n'+
        '    if (typeof  code=="string") {\n'+
        '      $LASTPOS=11000912;\n'+
        '      code=_this.codes[code.toLowerCase()];\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=11000954;\n'+
        '    if (! code) {\n'+
        '      _thread.retVal=0;return;\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=11000979;\n'+
        '    if (_this.stats[code]==- 1) {\n'+
        '      _thread.retVal=0;return;\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=11001014;\n'+
        '    if (! _this.stats[code]) {\n'+
        '      $LASTPOS=11001032;\n'+
        '      _this.stats[code]=0;\n'+
        '    }\n'+
        '    _thread.retVal=_this.stats[code];return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  update :function _trc_func_11001073_4() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var i;\n'+
        '    var _it_128;\n'+
        '    \n'+
        '    $LASTPOS=11001097;\n'+
        '    _it_128=Tonyu.iterator(_this.stats,1);\n'+
        '    while(_it_128.next()) {\n'+
        '      i=_it_128[0];\n'+
        '      \n'+
        '      $LASTPOS=11001128;\n'+
        '      if (_this.stats[i]>0) {\n'+
        '        $LASTPOS=11001145;\n'+
        '        _this.stats[i]++;\n'+
        '        \n'+
        '      }\n'+
        '      $LASTPOS=11001166;\n'+
        '      if (_this.stats[i]==- 1) {\n'+
        '        $LASTPOS=11001184;\n'+
        '        _this.stats[i]=1;\n'+
        '      }\n'+
        '      \n'+
        '    }\n'+
        '  },\n'+
        '  fiber$update :function _trc_func_11001073_5(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var i;\n'+
        '    var _it_128;\n'+
        '    \n'+
        '    $LASTPOS=11001097;\n'+
        '    _it_128=Tonyu.iterator(_this.stats,1);\n'+
        '    while(_it_128.next()) {\n'+
        '      i=_it_128[0];\n'+
        '      \n'+
        '      $LASTPOS=11001128;\n'+
        '      if (_this.stats[i]>0) {\n'+
        '        $LASTPOS=11001145;\n'+
        '        _this.stats[i]++;\n'+
        '        \n'+
        '      }\n'+
        '      $LASTPOS=11001166;\n'+
        '      if (_this.stats[i]==- 1) {\n'+
        '        $LASTPOS=11001184;\n'+
        '        _this.stats[i]=1;\n'+
        '      }\n'+
        '      \n'+
        '    }\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  keydown :function _trc_func_11001204_6(e) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var s;\n'+
        '    \n'+
        '    $LASTPOS=11001222;\n'+
        '    s = _this.stats[e.keyCode];\n'+
        '    $LASTPOS=11001250;\n'+
        '    if (! s) {\n'+
        '      $LASTPOS=11001268;\n'+
        '      _this.stats[e.keyCode]=1;\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=11001298;\n'+
        '    Tonyu.globals.$InputDevice.handleListeners();\n'+
        '  },\n'+
        '  fiber$keydown :function _trc_func_11001204_7(_thread,e) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var s;\n'+
        '    \n'+
        '    $LASTPOS=11001222;\n'+
        '    s = _this.stats[e.keyCode];\n'+
        '    $LASTPOS=11001250;\n'+
        '    if (! s) {\n'+
        '      $LASTPOS=11001268;\n'+
        '      _this.stats[e.keyCode]=1;\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=11001298;\n'+
        '    Tonyu.globals.$InputDevice.handleListeners();\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  keyup :function _trc_func_11001332_8(e) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=11001348;\n'+
        '    _this.stats[e.keyCode]=0;\n'+
        '    $LASTPOS=11001372;\n'+
        '    Tonyu.globals.$InputDevice.handleListeners();\n'+
        '  },\n'+
        '  fiber$keyup :function _trc_func_11001332_9(_thread,e) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=11001348;\n'+
        '    _this.stats[e.keyCode]=0;\n'+
        '    $LASTPOS=11001372;\n'+
        '    Tonyu.globals.$InputDevice.handleListeners();\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  __dummy: false\n'+
        '});\n'+
        'Tonyu.klass.addMeta(Tonyu.classes.kernel.Keys,{"fullName":"kernel.Keys","namespace":"kernel","shortName":"Keys","decls":{"methods":{"main":{"nowait":false},"getkey":{"nowait":false},"update":{"nowait":false},"keydown":{"nowait":false},"keyup":{"nowait":false}}}});\n'+
        '\n'+
        'Tonyu.klass.ensureNamespace(Tonyu.classes,\'kernel\');\n'+
        'Tonyu.classes.kernel.MML=Tonyu.klass(Tonyu.classes.kernel.TObject,[Tonyu.classes.kernel.MathMod],{\n'+
        '  main :function _trc_func_12000000_0() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=12000050;\n'+
        '    _this.mmlBuf=[];\n'+
        '  },\n'+
        '  fiber$main :function _trc_func_12000000_1(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=12000050;\n'+
        '    _this.mmlBuf=[];\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  play :function _trc_func_12000062_2(mmls) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=12000081;\n'+
        '    _this.mmlBuf.push(mmls);\n'+
        '    $LASTPOS=12000105;\n'+
        '    if (! _this.isPlaying()) {\n'+
        '      $LASTPOS=12000134;\n'+
        '      _this.playNext();\n'+
        '      \n'+
        '    }\n'+
        '  },\n'+
        '  fiber$play :function _trc_func_12000062_3(_thread,mmls) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=12000081;\n'+
        '    _this.mmlBuf.push(mmls);\n'+
        '    \n'+
        '    _thread.enter(function _trc_func_12000062_4(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=12000105;\n'+
        '          if (!(! _this.isPlaying())) { __pc=2; break; }\n'+
        '          $LASTPOS=12000134;\n'+
        '          _this.fiber$playNext(_thread);\n'+
        '          __pc=1;return;\n'+
        '        case 1:\n'+
        '          \n'+
        '        case 2:\n'+
        '          \n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  playNext :function _trc_func_12000157_5() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var mml;\n'+
        '    \n'+
        '    $LASTPOS=12000220;\n'+
        '    if (_this.cTimeBase==null) {\n'+
        '      $LASTPOS=12000241;\n'+
        '      _this.cTimeBase=0;\n'+
        '    }\n'+
        '    $LASTPOS=12000259;\n'+
        '    if (_this.m) {\n'+
        '      $LASTPOS=12000277;\n'+
        '      _this.cTimeBase+=_this.m.currentTime;\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=12000348;\n'+
        '    mml = _this.mmlBuf.shift();\n'+
        '    $LASTPOS=12000377;\n'+
        '    if (! mml) {\n'+
        '      $LASTPOS=12000398;\n'+
        '      _this.m=null;\n'+
        '      $LASTPOS=12000415;\n'+
        '      _this.cTimeBase=0;\n'+
        '      return _this;\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=12000457;\n'+
        '    _this.mwav=Tonyu.globals.$WaveTable.get(0,0).play();\n'+
        '    $LASTPOS=12000495;\n'+
        '    _this.m=T("mml",{mml: mml},_this.mwav);\n'+
        '    $LASTPOS=12000525;\n'+
        '    _this.m.on("ended",Tonyu.bindFunc(_this,_this.playNext));\n'+
        '    $LASTPOS=12000555;\n'+
        '    _this.m.start();\n'+
        '    $LASTPOS=12000571;\n'+
        '    Tonyu.globals.$MMLS[_this.id()]=_this;\n'+
        '  },\n'+
        '  fiber$playNext :function _trc_func_12000157_6(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var mml;\n'+
        '    \n'+
        '    $LASTPOS=12000220;\n'+
        '    if (_this.cTimeBase==null) {\n'+
        '      $LASTPOS=12000241;\n'+
        '      _this.cTimeBase=0;\n'+
        '    }\n'+
        '    $LASTPOS=12000259;\n'+
        '    if (_this.m) {\n'+
        '      $LASTPOS=12000277;\n'+
        '      _this.cTimeBase+=_this.m.currentTime;\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=12000348;\n'+
        '    mml = _this.mmlBuf.shift();\n'+
        '    $LASTPOS=12000377;\n'+
        '    if (! mml) {\n'+
        '      $LASTPOS=12000398;\n'+
        '      _this.m=null;\n'+
        '      $LASTPOS=12000415;\n'+
        '      _this.cTimeBase=0;\n'+
        '      _thread.retVal=_this;return;\n'+
        '      \n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=12000457;\n'+
        '    _this.mwav=Tonyu.globals.$WaveTable.get(0,0).play();\n'+
        '    $LASTPOS=12000495;\n'+
        '    _this.m=T("mml",{mml: mml},_this.mwav);\n'+
        '    $LASTPOS=12000525;\n'+
        '    _this.m.on("ended",Tonyu.bindFunc(_this,_this.playNext));\n'+
        '    $LASTPOS=12000555;\n'+
        '    _this.m.start();\n'+
        '    $LASTPOS=12000571;\n'+
        '    Tonyu.globals.$MMLS[_this.id()]=_this;\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  id :function _trc_func_12000593_7() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=12000606;\n'+
        '    if (! _this._id) {\n'+
        '      $LASTPOS=12000616;\n'+
        '      _this._id=_this.rnd()+"";\n'+
        '    }\n'+
        '    return _this._id;\n'+
        '  },\n'+
        '  fiber$id :function _trc_func_12000593_8(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=12000606;\n'+
        '    if (! _this._id) {\n'+
        '      $LASTPOS=12000616;\n'+
        '      _this._id=_this.rnd()+"";\n'+
        '    }\n'+
        '    _thread.retVal=_this._id;return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  bufferCount :function _trc_func_12000651_9() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return _this.mmlBuf.length;\n'+
        '  },\n'+
        '  fiber$bufferCount :function _trc_func_12000651_10(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    _thread.retVal=_this.mmlBuf.length;return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  isPlaying :function _trc_func_12000699_11() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return _this.m;\n'+
        '  },\n'+
        '  fiber$isPlaying :function _trc_func_12000699_12(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    _thread.retVal=_this.m;return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  currentTime :function _trc_func_12000733_13() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=12000755;\n'+
        '    if (_this.m) {\n'+
        '      return _this.m.currentTime+_this.cTimeBase;\n'+
        '    }\n'+
        '    return - 1;\n'+
        '  },\n'+
        '  fiber$currentTime :function _trc_func_12000733_14(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=12000755;\n'+
        '    if (_this.m) {\n'+
        '      _thread.retVal=_this.m.currentTime+_this.cTimeBase;return;\n'+
        '      \n'+
        '    }\n'+
        '    _thread.retVal=- 1;return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  stop :function _trc_func_12000814_15() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=12000829;\n'+
        '    if (_this.m) {\n'+
        '      $LASTPOS=12000847;\n'+
        '      if (_this.mwav) {\n'+
        '        $LASTPOS=12000872;\n'+
        '        _this.mwav.pause();\n'+
        '        $LASTPOS=12000899;\n'+
        '        _this.mwav.stop();\n'+
        '        \n'+
        '      }\n'+
        '      $LASTPOS=12000932;\n'+
        '      _this.m.pause();\n'+
        '      $LASTPOS=12000952;\n'+
        '      _this.m.stop();\n'+
        '      $LASTPOS=12000971;\n'+
        '      _this.m=null;\n'+
        '      $LASTPOS=12000988;\n'+
        '      _this.mmlBuf=[];\n'+
        '      $LASTPOS=12001056;\n'+
        '      delete Tonyu.globals.$MMLS[_this.id()];\n'+
        '      \n'+
        '    }\n'+
        '  },\n'+
        '  fiber$stop :function _trc_func_12000814_16(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=12000829;\n'+
        '    if (_this.m) {\n'+
        '      $LASTPOS=12000847;\n'+
        '      if (_this.mwav) {\n'+
        '        $LASTPOS=12000872;\n'+
        '        _this.mwav.pause();\n'+
        '        $LASTPOS=12000899;\n'+
        '        _this.mwav.stop();\n'+
        '        \n'+
        '      }\n'+
        '      $LASTPOS=12000932;\n'+
        '      _this.m.pause();\n'+
        '      $LASTPOS=12000952;\n'+
        '      _this.m.stop();\n'+
        '      $LASTPOS=12000971;\n'+
        '      _this.m=null;\n'+
        '      $LASTPOS=12000988;\n'+
        '      _this.mmlBuf=[];\n'+
        '      $LASTPOS=12001056;\n'+
        '      delete Tonyu.globals.$MMLS[_this.id()];\n'+
        '      \n'+
        '    }\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  __dummy: false\n'+
        '});\n'+
        'Tonyu.klass.addMeta(Tonyu.classes.kernel.MML,{"fullName":"kernel.MML","namespace":"kernel","shortName":"MML","decls":{"methods":{"main":{"nowait":false},"play":{"nowait":false},"playNext":{"nowait":false},"id":{"nowait":false},"bufferCount":{"nowait":false},"isPlaying":{"nowait":false},"currentTime":{"nowait":false},"stop":{"nowait":false}}}});\n'+
        '\n'+
        'Tonyu.klass.ensureNamespace(Tonyu.classes,\'kernel\');\n'+
        'Tonyu.classes.kernel.NoviceActor=Tonyu.klass(Tonyu.classes.kernel.BaseActor,[],{\n'+
        '  main :function _trc_func_13000000_0() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  fiber$main :function _trc_func_13000000_1(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  sleep :function _trc_func_13000034_2(n) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=13000050;\n'+
        '    if (! n) {\n'+
        '      $LASTPOS=13000057;\n'+
        '      n=1;\n'+
        '    }\n'+
        '    $LASTPOS=13000066;\n'+
        '    $LASTPOS=13000070;\n'+
        '    n;\n'+
        '    while(n>0) {\n'+
        '      $LASTPOS=13000081;\n'+
        '      _this.update();\n'+
        '      n--;\n'+
        '    }\n'+
        '  },\n'+
        '  fiber$sleep :function _trc_func_13000034_3(_thread,n) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=13000050;\n'+
        '    if (! n) {\n'+
        '      $LASTPOS=13000057;\n'+
        '      n=1;\n'+
        '    }\n'+
        '    \n'+
        '    _thread.enter(function _trc_func_13000034_4(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=13000066;\n'+
        '          $LASTPOS=13000070;\n'+
        '          n;;\n'+
        '        case 1:\n'+
        '          if (!(n>0)) { __pc=3; break; }\n'+
        '          $LASTPOS=13000081;\n'+
        '          _this.fiber$update(_thread);\n'+
        '          __pc=2;return;\n'+
        '        case 2:\n'+
        '          \n'+
        '          n--;\n'+
        '          __pc=1;break;\n'+
        '        case 3:\n'+
        '          \n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  initSprite :function _trc_func_13000093_5() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=13000113;\n'+
        '    if (! _this._sprite) {\n'+
        '      $LASTPOS=13000137;\n'+
        '      _this._sprite=new Tonyu.classes.kernel.BaseActor({owner: _this});\n'+
        '      $LASTPOS=13000207;\n'+
        '      Tonyu.globals.$Sprites.add(_this);\n'+
        '      \n'+
        '    }\n'+
        '  },\n'+
        '  fiber$initSprite :function _trc_func_13000093_6(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=13000113;\n'+
        '    if (! _this._sprite) {\n'+
        '      $LASTPOS=13000137;\n'+
        '      _this._sprite=new Tonyu.classes.kernel.BaseActor({owner: _this});\n'+
        '      $LASTPOS=13000207;\n'+
        '      Tonyu.globals.$Sprites.add(_this);\n'+
        '      \n'+
        '    }\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  say :function _trc_func_13000235_7(text,size) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=13000257;\n'+
        '    if (! size) {\n'+
        '      $LASTPOS=13000268;\n'+
        '      size=15;\n'+
        '    }\n'+
        '    $LASTPOS=13000281;\n'+
        '    _this.initSprite();\n'+
        '    $LASTPOS=13000299;\n'+
        '    _this._sprite._fukidashi={text: text,size: size,c: 30};\n'+
        '  },\n'+
        '  fiber$say :function _trc_func_13000235_8(_thread,text,size) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=13000257;\n'+
        '    if (! size) {\n'+
        '      $LASTPOS=13000268;\n'+
        '      size=15;\n'+
        '    }\n'+
        '    \n'+
        '    _thread.enter(function _trc_func_13000235_9(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=13000281;\n'+
        '          _this.fiber$initSprite(_thread);\n'+
        '          __pc=1;return;\n'+
        '        case 1:\n'+
        '          \n'+
        '          $LASTPOS=13000299;\n'+
        '          _this._sprite._fukidashi={text: text,size: size,c: 30};\n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  sprite :function _trc_func_13000350_10(x,y,p) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=13000371;\n'+
        '    _this.go(x,y,p);\n'+
        '  },\n'+
        '  fiber$sprite :function _trc_func_13000350_11(_thread,x,y,p) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.enter(function _trc_func_13000350_12(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=13000371;\n'+
        '          _this.fiber$go(_thread, x, y, p);\n'+
        '          __pc=1;return;\n'+
        '        case 1:\n'+
        '          \n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  show :function _trc_func_13000384_13(x,y,p) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=13000403;\n'+
        '    _this.go(x,y,p);\n'+
        '  },\n'+
        '  draw :function _trc_func_13000416_14(ctx) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=13000440;\n'+
        '    _this._sprite.draw(ctx);\n'+
        '  },\n'+
        '  getCrashRect :function _trc_func_13000461_15() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return _this._sprite.getCrashRect();\n'+
        '  },\n'+
        '  go :function _trc_func_13000516_16(x,y,p) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=13000533;\n'+
        '    _this.initSprite();\n'+
        '    $LASTPOS=13000551;\n'+
        '    _this._sprite.x=x;\n'+
        '    $LASTPOS=13000568;\n'+
        '    _this._sprite.y=y;\n'+
        '    $LASTPOS=13000585;\n'+
        '    if (p!=null) {\n'+
        '      $LASTPOS=13000598;\n'+
        '      _this._sprite.p=p;\n'+
        '    }\n'+
        '  },\n'+
        '  fiber$go :function _trc_func_13000516_17(_thread,x,y,p) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.enter(function _trc_func_13000516_18(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=13000533;\n'+
        '          _this.fiber$initSprite(_thread);\n'+
        '          __pc=1;return;\n'+
        '        case 1:\n'+
        '          \n'+
        '          $LASTPOS=13000551;\n'+
        '          _this._sprite.x=x;\n'+
        '          $LASTPOS=13000568;\n'+
        '          _this._sprite.y=y;\n'+
        '          $LASTPOS=13000585;\n'+
        '          if (p!=null) {\n'+
        '            $LASTPOS=13000598;\n'+
        '            _this._sprite.p=p;\n'+
        '          }\n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  change :function _trc_func_13000629_19(p) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=13000646;\n'+
        '    _this.initSprite();\n'+
        '    $LASTPOS=13000664;\n'+
        '    _this._sprite.p=p;\n'+
        '  },\n'+
        '  fiber$change :function _trc_func_13000629_20(_thread,p) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.enter(function _trc_func_13000629_21(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=13000646;\n'+
        '          _this.fiber$initSprite(_thread);\n'+
        '          __pc=1;return;\n'+
        '        case 1:\n'+
        '          \n'+
        '          $LASTPOS=13000664;\n'+
        '          _this._sprite.p=p;\n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  __dummy: false\n'+
        '});\n'+
        'Tonyu.klass.addMeta(Tonyu.classes.kernel.NoviceActor,{"fullName":"kernel.NoviceActor","namespace":"kernel","shortName":"NoviceActor","decls":{"methods":{"main":{"nowait":false},"sleep":{"nowait":false},"initSprite":{"nowait":false},"say":{"nowait":false},"sprite":{"nowait":false},"show":{"nowait":true},"draw":{"nowait":true},"getCrashRect":{"nowait":true},"go":{"nowait":false},"change":{"nowait":false}}}});\n'+
        '\n'+
        'Tonyu.klass.ensureNamespace(Tonyu.classes,\'kernel\');\n'+
        'Tonyu.classes.kernel.PlayMod=Tonyu.klass(Tonyu.classes.kernel.BaseActor,[],{\n'+
        '  main :function _trc_func_14000000_0() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  fiber$main :function _trc_func_14000000_1(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  initMML :function _trc_func_14000020_2() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=14000045;\n'+
        '    if (_this.mmlInited) {\n'+
        '      return _this;\n'+
        '    }\n'+
        '    $LASTPOS=14000073;\n'+
        '    _this.mmlInited=true;\n'+
        '    $LASTPOS=14000094;\n'+
        '    Tonyu.globals.$currentProject.requestPlugin("timbre");\n'+
        '    $LASTPOS=14000140;\n'+
        '    if (! Tonyu.globals.$MMLS) {\n'+
        '      $LASTPOS=14000162;\n'+
        '      Tonyu.globals.$MMLS={};\n'+
        '      $LASTPOS=14000180;\n'+
        '      Tonyu.globals.$WaveTable=new Tonyu.classes.kernel.WaveTable;\n'+
        '      $LASTPOS=14000214;\n'+
        '      Tonyu.globals.$Boot.on("stop",Tonyu.bindFunc(_this,_this.releaseMML));\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=14000256;\n'+
        '    _this.on("die",function () {\n'+
        '      \n'+
        '      $LASTPOS=14000272;\n'+
        '      _this.play().stop();\n'+
        '    });\n'+
        '  },\n'+
        '  releaseMML :function _trc_func_14000294_3() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var k;\n'+
        '    var v;\n'+
        '    var _it_133;\n'+
        '    \n'+
        '    $LASTPOS=14000322;\n'+
        '    if (Tonyu.globals.$MMLS) {\n'+
        '      $LASTPOS=14000343;\n'+
        '      _it_133=Tonyu.iterator(Tonyu.globals.$MMLS,2);\n'+
        '      while(_it_133.next()) {\n'+
        '        k=_it_133[0];\n'+
        '        v=_it_133[1];\n'+
        '        \n'+
        '        $LASTPOS=14000379;\n'+
        '        v.stop();\n'+
        '        \n'+
        '      }\n'+
        '      $LASTPOS=14000407;\n'+
        '      Tonyu.globals.$MMLS=null;\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=14000432;\n'+
        '    if (Tonyu.globals.$WaveTable) {\n'+
        '      $LASTPOS=14000458;\n'+
        '      Tonyu.globals.$WaveTable.stop();\n'+
        '      $LASTPOS=14000485;\n'+
        '      Tonyu.globals.$WaveTable=null;\n'+
        '      \n'+
        '    }\n'+
        '  },\n'+
        '  play :function _trc_func_14000513_4() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var mmls;\n'+
        '    var i;\n'+
        '    \n'+
        '    $LASTPOS=14000528;\n'+
        '    _this.initMML();\n'+
        '    $LASTPOS=14000544;\n'+
        '    if (! _this._mml) {\n'+
        '      $LASTPOS=14000555;\n'+
        '      _this._mml=new Tonyu.classes.kernel.MML;\n'+
        '    }\n'+
        '    $LASTPOS=14000574;\n'+
        '    if (_this.isDead()||arguments.length==0) {\n'+
        '      return _this._mml;\n'+
        '    }\n'+
        '    $LASTPOS=14000629;\n'+
        '    mmls = [];\n'+
        '    $LASTPOS=14000647;\n'+
        '    $LASTPOS=14000652;\n'+
        '    i = 0;\n'+
        '    while(i<arguments.length) {\n'+
        '      {\n'+
        '        $LASTPOS=14000697;\n'+
        '        mmls.push(arguments[i]);\n'+
        '      }\n'+
        '      i++;\n'+
        '    }\n'+
        '    $LASTPOS=14000734;\n'+
        '    _this._mml.play(mmls);\n'+
        '    $LASTPOS=14000756;\n'+
        '    while (_this._mml.bufferCount()>2) {\n'+
        '      $LASTPOS=14000796;\n'+
        '      _this.update();\n'+
        '      \n'+
        '    }\n'+
        '    return _this._mml;\n'+
        '  },\n'+
        '  fiber$play :function _trc_func_14000513_5(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var mmls;\n'+
        '    var i;\n'+
        '    \n'+
        '    $LASTPOS=14000528;\n'+
        '    _this.initMML();\n'+
        '    $LASTPOS=14000544;\n'+
        '    if (! _this._mml) {\n'+
        '      $LASTPOS=14000555;\n'+
        '      _this._mml=new Tonyu.classes.kernel.MML;\n'+
        '    }\n'+
        '    $LASTPOS=14000574;\n'+
        '    if (_this.isDead()||_arguments.length==0) {\n'+
        '      _thread.retVal=_this._mml;return;\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=14000629;\n'+
        '    mmls = [];\n'+
        '    $LASTPOS=14000647;\n'+
        '    $LASTPOS=14000652;\n'+
        '    i = 0;\n'+
        '    while(i<_arguments.length) {\n'+
        '      {\n'+
        '        $LASTPOS=14000697;\n'+
        '        mmls.push(_arguments[i]);\n'+
        '      }\n'+
        '      i++;\n'+
        '    }\n'+
        '    $LASTPOS=14000734;\n'+
        '    _this._mml.play(mmls);\n'+
        '    \n'+
        '    _thread.enter(function _trc_func_14000513_6(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=14000756;\n'+
        '        case 1:\n'+
        '          if (!(_this._mml.bufferCount()>2)) { __pc=3; break; }\n'+
        '          $LASTPOS=14000796;\n'+
        '          _this.fiber$update(_thread);\n'+
        '          __pc=2;return;\n'+
        '        case 2:\n'+
        '          \n'+
        '          __pc=1;break;\n'+
        '        case 3:\n'+
        '          \n'+
        '          _thread.exit(_this._mml);return;\n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  playSE :function _trc_func_14000835_7() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var mml;\n'+
        '    var mmls;\n'+
        '    var i;\n'+
        '    \n'+
        '    $LASTPOS=14000859;\n'+
        '    _this.initMML();\n'+
        '    $LASTPOS=14000875;\n'+
        '    mml = new Tonyu.classes.kernel.MML;\n'+
        '    $LASTPOS=14000897;\n'+
        '    mmls = [];\n'+
        '    $LASTPOS=14000915;\n'+
        '    $LASTPOS=14000920;\n'+
        '    i = 0;\n'+
        '    while(i<arguments.length) {\n'+
        '      {\n'+
        '        $LASTPOS=14000965;\n'+
        '        mmls.push(arguments[i]);\n'+
        '      }\n'+
        '      i++;\n'+
        '    }\n'+
        '    $LASTPOS=14001002;\n'+
        '    mml.play(mmls);\n'+
        '    return mml;\n'+
        '  },\n'+
        '  __dummy: false\n'+
        '});\n'+
        'Tonyu.klass.addMeta(Tonyu.classes.kernel.PlayMod,{"fullName":"kernel.PlayMod","namespace":"kernel","shortName":"PlayMod","decls":{"methods":{"main":{"nowait":false},"initMML":{"nowait":true},"releaseMML":{"nowait":true},"play":{"nowait":false},"playSE":{"nowait":true}}}});\n'+
        '\n'+
        'Tonyu.klass.ensureNamespace(Tonyu.classes,\'kernel\');\n'+
        'Tonyu.classes.kernel.Actor=Tonyu.klass(Tonyu.classes.kernel.BaseActor,[Tonyu.classes.kernel.PlayMod],{\n'+
        '  main :function _trc_func_15000000_0() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  fiber$main :function _trc_func_15000000_1(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  initialize :function _trc_func_15000073_2(x,y,p) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=15000092;\n'+
        '    Tonyu.classes.kernel.BaseActor.apply( _this, [x,y,p]);\n'+
        '    $LASTPOS=15000111;\n'+
        '    if (Tonyu.runMode) {\n'+
        '      $LASTPOS=15000130;\n'+
        '      _this.initSprite();\n'+
        '    }\n'+
        '  },\n'+
        '  initSprite :function _trc_func_15000148_3() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=15000169;\n'+
        '    if (_this.layer&&typeof  _this.layer.add=="function") {\n'+
        '      $LASTPOS=15000221;\n'+
        '      _this.layer.add(_this);\n'+
        '      \n'+
        '    } else {\n'+
        '      $LASTPOS=15000259;\n'+
        '      Tonyu.globals.$Sprites.add(_this);\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=15000291;\n'+
        '    _this.onAppear();\n'+
        '  },\n'+
        '  fiber$initSprite :function _trc_func_15000148_4(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=15000169;\n'+
        '    if (_this.layer&&typeof  _this.layer.add=="function") {\n'+
        '      $LASTPOS=15000221;\n'+
        '      _this.layer.add(_this);\n'+
        '      \n'+
        '    } else {\n'+
        '      $LASTPOS=15000259;\n'+
        '      Tonyu.globals.$Sprites.add(_this);\n'+
        '      \n'+
        '    }\n'+
        '    \n'+
        '    _thread.enter(function _trc_func_15000148_5(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=15000291;\n'+
        '          _this.fiber$onAppear(_thread);\n'+
        '          __pc=1;return;\n'+
        '        case 1:\n'+
        '          \n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  onAppear :function _trc_func_15000307_6() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  fiber$onAppear :function _trc_func_15000307_7(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  __dummy: false\n'+
        '});\n'+
        'Tonyu.klass.addMeta(Tonyu.classes.kernel.Actor,{"fullName":"kernel.Actor","namespace":"kernel","shortName":"Actor","decls":{"methods":{"main":{"nowait":false},"new":{"nowait":false},"initSprite":{"nowait":false},"onAppear":{"nowait":false}}}});\n'+
        '\n'+
        'Tonyu.klass.ensureNamespace(Tonyu.classes,\'kernel\');\n'+
        'Tonyu.classes.kernel.BodyActor=Tonyu.klass(Tonyu.classes.kernel.Actor,[Tonyu.classes.kernel.T2Mod],{\n'+
        '  main :function _trc_func_16000000_0() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  fiber$main :function _trc_func_16000000_1(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  getWorld :function _trc_func_16000046_2() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=16000064;\n'+
        '    if (Tonyu.globals.$t2World) {\n'+
        '      return Tonyu.globals.$t2World;\n'+
        '    }\n'+
        '    $LASTPOS=16000099;\n'+
        '    Tonyu.globals.$t2World=new Tonyu.classes.kernel.T2World;\n'+
        '    return Tonyu.globals.$t2World;\n'+
        '  },\n'+
        '  fiber$getWorld :function _trc_func_16000046_3(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=16000064;\n'+
        '    if (Tonyu.globals.$t2World) {\n'+
        '      _thread.retVal=Tonyu.globals.$t2World;return;\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=16000099;\n'+
        '    Tonyu.globals.$t2World=new Tonyu.classes.kernel.T2World;\n'+
        '    _thread.retVal=Tonyu.globals.$t2World;return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  onAppear :function _trc_func_16000144_4() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var b2Vec2;\n'+
        '    var b2BodyDef;\n'+
        '    var b2Body;\n'+
        '    var b2FixtureDef;\n'+
        '    var b2Fixture;\n'+
        '    var b2PolygonShape;\n'+
        '    var b2CircleShape;\n'+
        '    var fixDef;\n'+
        '    var bodyDef;\n'+
        '    var w;\n'+
        '    var h;\n'+
        '    \n'+
        '    $LASTPOS=16000162;\n'+
        '    _this.world=_this.getWorld().world;\n'+
        '    $LASTPOS=16000190;\n'+
        '    _this.scale=_this.getWorld().scale;\n'+
        '    $LASTPOS=16000218;\n'+
        '    b2Vec2 = Box2D.Common.Math.b2Vec2;\n'+
        '    $LASTPOS=16000261;\n'+
        '    b2BodyDef = Box2D.Dynamics.b2BodyDef;\n'+
        '    $LASTPOS=16000307;\n'+
        '    b2Body = Box2D.Dynamics.b2Body;\n'+
        '    $LASTPOS=16000347;\n'+
        '    b2FixtureDef = Box2D.Dynamics.b2FixtureDef;\n'+
        '    $LASTPOS=16000399;\n'+
        '    b2Fixture = Box2D.Dynamics.b2Fixture;\n'+
        '    $LASTPOS=16000445;\n'+
        '    b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;\n'+
        '    $LASTPOS=16000509;\n'+
        '    b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;\n'+
        '    $LASTPOS=16000576;\n'+
        '    fixDef = new b2FixtureDef;\n'+
        '    $LASTPOS=16000611;\n'+
        '    fixDef.density=_this.density||1;\n'+
        '    $LASTPOS=16000648;\n'+
        '    fixDef.friction=_this.friction||0.5;\n'+
        '    $LASTPOS=16000687;\n'+
        '    fixDef.restitution=_this.restitution||0.2;\n'+
        '    $LASTPOS=16000737;\n'+
        '    bodyDef = new b2BodyDef;\n'+
        '    $LASTPOS=16000770;\n'+
        '    bodyDef.type=_this.isStatic?b2Body.b2_staticBody:b2Body.b2_dynamicBody;\n'+
        '    $LASTPOS=16000855;\n'+
        '    bodyDef.position.x=_this.x/_this.scale;\n'+
        '    $LASTPOS=16000890;\n'+
        '    bodyDef.position.y=_this.y/_this.scale;\n'+
        '    $LASTPOS=16000925;\n'+
        '    _this.shape=_this.shape||(_this.radius?"circle":"box");\n'+
        '    $LASTPOS=16000973;\n'+
        '    w = _this.width;h = _this.height;\n'+
        '    $LASTPOS=16000999;\n'+
        '    if (! w) {\n'+
        '      $LASTPOS=16001017;\n'+
        '      _this.detectShape();\n'+
        '      $LASTPOS=16001040;\n'+
        '      w=_this.width*(_this.scaleX||1);\n'+
        '      $LASTPOS=16001069;\n'+
        '      h=_this.height*(_this.scaleY||_this.scaleX||1);\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=16001109;\n'+
        '    if (_this.shape=="box") {\n'+
        '      $LASTPOS=16001137;\n'+
        '      if (! h) {\n'+
        '        $LASTPOS=16001145;\n'+
        '        h=w;\n'+
        '      }\n'+
        '      $LASTPOS=16001158;\n'+
        '      fixDef.shape=new b2PolygonShape;\n'+
        '      $LASTPOS=16001201;\n'+
        '      fixDef.shape.SetAsOrientedBox(w/2/_this.scale,h/2/_this.scale,new b2Vec2(0,0),0);\n'+
        '      \n'+
        '    } else {\n'+
        '      $LASTPOS=16001302;\n'+
        '      _this.radius=_this.radius||w/2||16;\n'+
        '      $LASTPOS=16001338;\n'+
        '      fixDef.shape=new b2CircleShape(_this.radius/_this.scale);\n'+
        '      $LASTPOS=16001412;\n'+
        '      _this.width=_this.height=_this.radius*2;\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=16001446;\n'+
        '    _this.body=_this.world.CreateBody(bodyDef);\n'+
        '    $LASTPOS=16001482;\n'+
        '    _this.body.CreateFixture(fixDef);\n'+
        '    $LASTPOS=16001514;\n'+
        '    _this.body.SetUserData(_this);\n'+
        '    $LASTPOS=16001542;\n'+
        '    _this.body.SetAngle(_this.rad(_this.rotation));\n'+
        '  },\n'+
        '  fiber$onAppear :function _trc_func_16000144_5(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var b2Vec2;\n'+
        '    var b2BodyDef;\n'+
        '    var b2Body;\n'+
        '    var b2FixtureDef;\n'+
        '    var b2Fixture;\n'+
        '    var b2PolygonShape;\n'+
        '    var b2CircleShape;\n'+
        '    var fixDef;\n'+
        '    var bodyDef;\n'+
        '    var w;\n'+
        '    var h;\n'+
        '    \n'+
        '    $LASTPOS=16000162;\n'+
        '    _this.world=_this.getWorld().world;\n'+
        '    $LASTPOS=16000190;\n'+
        '    _this.scale=_this.getWorld().scale;\n'+
        '    $LASTPOS=16000218;\n'+
        '    b2Vec2 = Box2D.Common.Math.b2Vec2;\n'+
        '    $LASTPOS=16000261;\n'+
        '    b2BodyDef = Box2D.Dynamics.b2BodyDef;\n'+
        '    $LASTPOS=16000307;\n'+
        '    b2Body = Box2D.Dynamics.b2Body;\n'+
        '    $LASTPOS=16000347;\n'+
        '    b2FixtureDef = Box2D.Dynamics.b2FixtureDef;\n'+
        '    $LASTPOS=16000399;\n'+
        '    b2Fixture = Box2D.Dynamics.b2Fixture;\n'+
        '    $LASTPOS=16000445;\n'+
        '    b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;\n'+
        '    $LASTPOS=16000509;\n'+
        '    b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;\n'+
        '    $LASTPOS=16000576;\n'+
        '    fixDef = new b2FixtureDef;\n'+
        '    $LASTPOS=16000611;\n'+
        '    fixDef.density=_this.density||1;\n'+
        '    $LASTPOS=16000648;\n'+
        '    fixDef.friction=_this.friction||0.5;\n'+
        '    $LASTPOS=16000687;\n'+
        '    fixDef.restitution=_this.restitution||0.2;\n'+
        '    $LASTPOS=16000737;\n'+
        '    bodyDef = new b2BodyDef;\n'+
        '    $LASTPOS=16000770;\n'+
        '    bodyDef.type=_this.isStatic?b2Body.b2_staticBody:b2Body.b2_dynamicBody;\n'+
        '    $LASTPOS=16000855;\n'+
        '    bodyDef.position.x=_this.x/_this.scale;\n'+
        '    $LASTPOS=16000890;\n'+
        '    bodyDef.position.y=_this.y/_this.scale;\n'+
        '    $LASTPOS=16000925;\n'+
        '    _this.shape=_this.shape||(_this.radius?"circle":"box");\n'+
        '    $LASTPOS=16000973;\n'+
        '    w = _this.width;h = _this.height;\n'+
        '    $LASTPOS=16000999;\n'+
        '    if (! w) {\n'+
        '      $LASTPOS=16001017;\n'+
        '      _this.detectShape();\n'+
        '      $LASTPOS=16001040;\n'+
        '      w=_this.width*(_this.scaleX||1);\n'+
        '      $LASTPOS=16001069;\n'+
        '      h=_this.height*(_this.scaleY||_this.scaleX||1);\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=16001109;\n'+
        '    if (_this.shape=="box") {\n'+
        '      $LASTPOS=16001137;\n'+
        '      if (! h) {\n'+
        '        $LASTPOS=16001145;\n'+
        '        h=w;\n'+
        '      }\n'+
        '      $LASTPOS=16001158;\n'+
        '      fixDef.shape=new b2PolygonShape;\n'+
        '      $LASTPOS=16001201;\n'+
        '      fixDef.shape.SetAsOrientedBox(w/2/_this.scale,h/2/_this.scale,new b2Vec2(0,0),0);\n'+
        '      \n'+
        '    } else {\n'+
        '      $LASTPOS=16001302;\n'+
        '      _this.radius=_this.radius||w/2||16;\n'+
        '      $LASTPOS=16001338;\n'+
        '      fixDef.shape=new b2CircleShape(_this.radius/_this.scale);\n'+
        '      $LASTPOS=16001412;\n'+
        '      _this.width=_this.height=_this.radius*2;\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=16001446;\n'+
        '    _this.body=_this.world.CreateBody(bodyDef);\n'+
        '    $LASTPOS=16001482;\n'+
        '    _this.body.CreateFixture(fixDef);\n'+
        '    $LASTPOS=16001514;\n'+
        '    _this.body.SetUserData(_this);\n'+
        '    $LASTPOS=16001542;\n'+
        '    _this.body.SetAngle(_this.rad(_this.rotation));\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  allContact :function _trc_func_16001574_6(klass) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var res;\n'+
        '    var c;\n'+
        '    var a;\n'+
        '    var b;\n'+
        '    \n'+
        '    $LASTPOS=16001599;\n'+
        '    res = [];\n'+
        '    $LASTPOS=16001615;\n'+
        '    $LASTPOS=16001620;\n'+
        '    c = _this.world.GetContactList();\n'+
        '    while(c) {\n'+
        '      {\n'+
        '        $LASTPOS=16001676;\n'+
        '        if (c.IsTouching()) {\n'+
        '          $LASTPOS=16001710;\n'+
        '          a = c.GetFixtureA().GetBody().GetUserData();\n'+
        '          $LASTPOS=16001769;\n'+
        '          b = c.GetFixtureB().GetBody().GetUserData();\n'+
        '          $LASTPOS=16001828;\n'+
        '          if (a===_this) {\n'+
        '            $LASTPOS=16001860;\n'+
        '            if (! klass||b===klass||b instanceof klass) {\n'+
        '              $LASTPOS=16001929;\n'+
        '              res.push(b);\n'+
        '              \n'+
        '            }\n'+
        '            \n'+
        '          } else {\n'+
        '            $LASTPOS=16001979;\n'+
        '            if (b===_this) {\n'+
        '              $LASTPOS=16002011;\n'+
        '              if (! klass||a===klass||a instanceof klass) {\n'+
        '                $LASTPOS=16002080;\n'+
        '                res.push(a);\n'+
        '                \n'+
        '              }\n'+
        '              \n'+
        '            }\n'+
        '          }\n'+
        '          \n'+
        '        }\n'+
        '      }\n'+
        '      c=c.GetNext();\n'+
        '    }\n'+
        '    return res;\n'+
        '  },\n'+
        '  fiber$allContact :function _trc_func_16001574_7(_thread,klass) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var res;\n'+
        '    var c;\n'+
        '    var a;\n'+
        '    var b;\n'+
        '    \n'+
        '    $LASTPOS=16001599;\n'+
        '    res = [];\n'+
        '    $LASTPOS=16001615;\n'+
        '    $LASTPOS=16001620;\n'+
        '    c = _this.world.GetContactList();\n'+
        '    while(c) {\n'+
        '      {\n'+
        '        $LASTPOS=16001676;\n'+
        '        if (c.IsTouching()) {\n'+
        '          $LASTPOS=16001710;\n'+
        '          a = c.GetFixtureA().GetBody().GetUserData();\n'+
        '          $LASTPOS=16001769;\n'+
        '          b = c.GetFixtureB().GetBody().GetUserData();\n'+
        '          $LASTPOS=16001828;\n'+
        '          if (a===_this) {\n'+
        '            $LASTPOS=16001860;\n'+
        '            if (! klass||b===klass||b instanceof klass) {\n'+
        '              $LASTPOS=16001929;\n'+
        '              res.push(b);\n'+
        '              \n'+
        '            }\n'+
        '            \n'+
        '          } else {\n'+
        '            $LASTPOS=16001979;\n'+
        '            if (b===_this) {\n'+
        '              $LASTPOS=16002011;\n'+
        '              if (! klass||a===klass||a instanceof klass) {\n'+
        '                $LASTPOS=16002080;\n'+
        '                res.push(a);\n'+
        '                \n'+
        '              }\n'+
        '              \n'+
        '            }\n'+
        '          }\n'+
        '          \n'+
        '        }\n'+
        '      }\n'+
        '      c=c.GetNext();\n'+
        '    }\n'+
        '    _thread.retVal=res;return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  applyForce :function _trc_func_16002159_8(fx,fy,px,py) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var b2Vec2;\n'+
        '    var scale;\n'+
        '    var fps;\n'+
        '    \n'+
        '    $LASTPOS=16002190;\n'+
        '    b2Vec2 = Box2D.Common.Math.b2Vec2;\n'+
        '    $LASTPOS=16002233;\n'+
        '    scale = _this.getWorld().scale;\n'+
        '    $LASTPOS=16002265;\n'+
        '    fps = 60;\n'+
        '    $LASTPOS=16002281;\n'+
        '    _this.body.ApplyForce(new b2Vec2(fx,fy),_this.body.GetPosition());\n'+
        '  },\n'+
        '  fiber$applyForce :function _trc_func_16002159_9(_thread,fx,fy,px,py) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var b2Vec2;\n'+
        '    var scale;\n'+
        '    var fps;\n'+
        '    \n'+
        '    $LASTPOS=16002190;\n'+
        '    b2Vec2 = Box2D.Common.Math.b2Vec2;\n'+
        '    $LASTPOS=16002233;\n'+
        '    scale = _this.getWorld().scale;\n'+
        '    $LASTPOS=16002265;\n'+
        '    fps = 60;\n'+
        '    $LASTPOS=16002281;\n'+
        '    _this.body.ApplyForce(new b2Vec2(fx,fy),_this.body.GetPosition());\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  applyImpulse :function _trc_func_16002339_10(fx,fy,px,py) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var b2Vec2;\n'+
        '    var scale;\n'+
        '    var fps;\n'+
        '    \n'+
        '    $LASTPOS=16002372;\n'+
        '    b2Vec2 = Box2D.Common.Math.b2Vec2;\n'+
        '    $LASTPOS=16002415;\n'+
        '    scale = _this.getWorld().scale;\n'+
        '    $LASTPOS=16002447;\n'+
        '    fps = 60;\n'+
        '    $LASTPOS=16002463;\n'+
        '    _this.body.ApplyImpulse(new b2Vec2(fx,fy),_this.body.GetPosition());\n'+
        '  },\n'+
        '  fiber$applyImpulse :function _trc_func_16002339_11(_thread,fx,fy,px,py) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var b2Vec2;\n'+
        '    var scale;\n'+
        '    var fps;\n'+
        '    \n'+
        '    $LASTPOS=16002372;\n'+
        '    b2Vec2 = Box2D.Common.Math.b2Vec2;\n'+
        '    $LASTPOS=16002415;\n'+
        '    scale = _this.getWorld().scale;\n'+
        '    $LASTPOS=16002447;\n'+
        '    fps = 60;\n'+
        '    $LASTPOS=16002463;\n'+
        '    _this.body.ApplyImpulse(new b2Vec2(fx,fy),_this.body.GetPosition());\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  applyTorque :function _trc_func_16002524_12(a) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=16002546;\n'+
        '    _this.body.ApplyTorque(a);\n'+
        '  },\n'+
        '  fiber$applyTorque :function _trc_func_16002524_13(_thread,a) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=16002546;\n'+
        '    _this.body.ApplyTorque(a);\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  moveBy :function _trc_func_16002569_14(dx,dy) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var pos;\n'+
        '    \n'+
        '    $LASTPOS=16002590;\n'+
        '    pos = _this.body.GetPosition();\n'+
        '    $LASTPOS=16002622;\n'+
        '    pos.x+=dx/_this.scale;\n'+
        '    $LASTPOS=16002643;\n'+
        '    pos.y+=dy/_this.scale;\n'+
        '    $LASTPOS=16002664;\n'+
        '    _this.body.SetPosition(pos);\n'+
        '  },\n'+
        '  fiber$moveBy :function _trc_func_16002569_15(_thread,dx,dy) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var pos;\n'+
        '    \n'+
        '    $LASTPOS=16002590;\n'+
        '    pos = _this.body.GetPosition();\n'+
        '    $LASTPOS=16002622;\n'+
        '    pos.x+=dx/_this.scale;\n'+
        '    $LASTPOS=16002643;\n'+
        '    pos.y+=dy/_this.scale;\n'+
        '    $LASTPOS=16002664;\n'+
        '    _this.body.SetPosition(pos);\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  contactTo :function _trc_func_16002689_16(t) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return _this.allContact(t)[0];\n'+
        '  },\n'+
        '  fiber$contactTo :function _trc_func_16002689_17(_thread,t) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    _thread.retVal=_this.allContact(t)[0];return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  die :function _trc_func_16002736_18() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=16002749;\n'+
        '    Tonyu.classes.kernel.Actor.prototype.die.apply( _this, []);\n'+
        '    $LASTPOS=16002766;\n'+
        '    _this.world.DestroyBody(_this.body);\n'+
        '  },\n'+
        '  updatePos :function _trc_func_16002793_19() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var scale;\n'+
        '    var pos;\n'+
        '    \n'+
        '    $LASTPOS=16002812;\n'+
        '    if (! _this.body) {\n'+
        '      return _this;\n'+
        '    }\n'+
        '    $LASTPOS=16002835;\n'+
        '    scale = _this.getWorld().scale;\n'+
        '    $LASTPOS=16002867;\n'+
        '    pos = _this.body.GetPosition();\n'+
        '    $LASTPOS=16002899;\n'+
        '    _this.x=pos.x*scale;\n'+
        '    $LASTPOS=16002918;\n'+
        '    _this.y=pos.y*scale;\n'+
        '    $LASTPOS=16002937;\n'+
        '    _this.rotation=_this.deg(_this.body.GetAngle());\n'+
        '  },\n'+
        '  fiber$updatePos :function _trc_func_16002793_20(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var scale;\n'+
        '    var pos;\n'+
        '    \n'+
        '    $LASTPOS=16002812;\n'+
        '    if (! _this.body) {\n'+
        '      _thread.retVal=_this;return;\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=16002835;\n'+
        '    scale = _this.getWorld().scale;\n'+
        '    $LASTPOS=16002867;\n'+
        '    pos = _this.body.GetPosition();\n'+
        '    $LASTPOS=16002899;\n'+
        '    _this.x=pos.x*scale;\n'+
        '    $LASTPOS=16002918;\n'+
        '    _this.y=pos.y*scale;\n'+
        '    $LASTPOS=16002937;\n'+
        '    _this.rotation=_this.deg(_this.body.GetAngle());\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  __dummy: false\n'+
        '});\n'+
        'Tonyu.klass.addMeta(Tonyu.classes.kernel.BodyActor,{"fullName":"kernel.BodyActor","namespace":"kernel","shortName":"BodyActor","decls":{"methods":{"main":{"nowait":false},"getWorld":{"nowait":false},"onAppear":{"nowait":false},"allContact":{"nowait":false},"applyForce":{"nowait":false},"applyImpulse":{"nowait":false},"applyTorque":{"nowait":false},"moveBy":{"nowait":false},"contactTo":{"nowait":false},"die":{"nowait":true},"updatePos":{"nowait":false}}}});\n'+
        '\n'+
        'Tonyu.klass.ensureNamespace(Tonyu.classes,\'kernel\');\n'+
        'Tonyu.classes.kernel.Boot=Tonyu.klass(Tonyu.classes.kernel.Actor,[],{\n'+
        '  main :function _trc_func_17000000_0() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=17001406;\n'+
        '    _this.initSprites();\n'+
        '    $LASTPOS=17001422;\n'+
        '    Tonyu.globals.$InputDevice=new Tonyu.classes.kernel.InputDevice;\n'+
        '    $LASTPOS=17001453;\n'+
        '    Tonyu.globals.$InputDevice.initCanvasEvents(_this.cvj);\n'+
        '    $LASTPOS=17001490;\n'+
        '    _this.initThread();\n'+
        '    $LASTPOS=17001507;\n'+
        '    Tonyu.globals.$pat_fruits=30;\n'+
        '    $LASTPOS=17001524;\n'+
        '    Tonyu.globals.$Keys=new Tonyu.classes.kernel.Keys;\n'+
        '    $LASTPOS=17001541;\n'+
        '    Tonyu.globals.$Math=Math;\n'+
        '    $LASTPOS=17001554;\n'+
        '    Tonyu.globals.$consolePanel=new Tonyu.classes.kernel.Panel({align: "center",x: 465/2,y: 465/2,width: 465,height: 465,zOrder: - 10,layer: Tonyu.globals.$FrontSprites});\n'+
        '    $LASTPOS=17001664;\n'+
        '    Tonyu.globals.$consolePrintY=465-15;\n'+
        '    $LASTPOS=17001688;\n'+
        '    Tonyu.globals.$panel=new Tonyu.classes.kernel.Panel({align: "center",x: Tonyu.globals.$screenWidth/2,y: Tonyu.globals.$screenHeight/2,width: Tonyu.globals.$screenWidth,height: Tonyu.globals.$screenHeight,zOrder: - 1,layer: Tonyu.globals.$FrontSprites});\n'+
        '    $LASTPOS=17001828;\n'+
        '    if (typeof  SplashScreen!="undefined") {\n'+
        '      $LASTPOS=17001866;\n'+
        '      SplashScreen.hide();\n'+
        '    }\n'+
        '    $LASTPOS=17001888;\n'+
        '    _this.initFPSParams();\n'+
        '    $LASTPOS=17001908;\n'+
        '    while (true) {\n'+
        '      $LASTPOS=17001928;\n'+
        '      _this.thg.steps();\n'+
        '      $LASTPOS=17001946;\n'+
        '      Tonyu.globals.$Keys.update();\n'+
        '      $LASTPOS=17001967;\n'+
        '      Tonyu.globals.$InputDevice.update();\n'+
        '      $LASTPOS=17001995;\n'+
        '      Tonyu.globals.$screenWidth=Tonyu.globals.$Screen.width;\n'+
        '      $LASTPOS=17002028;\n'+
        '      Tonyu.globals.$screenHeight=Tonyu.globals.$Screen.height;\n'+
        '      $LASTPOS=17002069;\n'+
        '      _this.doDraw=_this.now()<_this.deadLine;\n'+
        '      $LASTPOS=17002097;\n'+
        '      if (! _this.doDraw&&_this.frameSkipped>=_this.maxFrameSkip) {\n'+
        '        $LASTPOS=17002151;\n'+
        '        _this.doDraw=true;\n'+
        '        $LASTPOS=17002173;\n'+
        '        _this.resetDeadLine();\n'+
        '        \n'+
        '      }\n'+
        '      $LASTPOS=17002202;\n'+
        '      if (_this.doDraw) {\n'+
        '        $LASTPOS=17002245;\n'+
        '        Tonyu.globals.$Screen.fillCanvas(Tonyu.globals.$Screen.buf[0]);\n'+
        '        $LASTPOS=17002290;\n'+
        '        Tonyu.globals.$Sprites.draw(Tonyu.globals.$Screen.buf[0]);\n'+
        '        $LASTPOS=17002330;\n'+
        '        Tonyu.globals.$FrontSprites.draw(Tonyu.globals.$Screen.buf[0]);\n'+
        '        $LASTPOS=17002375;\n'+
        '        Tonyu.globals.$Screen.draw();\n'+
        '        $LASTPOS=17002400;\n'+
        '        _this.fps_fpsCnt++;\n'+
        '        $LASTPOS=17002424;\n'+
        '        _this.frameSkipped=0;\n'+
        '        \n'+
        '      } else {\n'+
        '        $LASTPOS=17002463;\n'+
        '        _this.frameSkipped++;\n'+
        '        \n'+
        '      }\n'+
        '      $LASTPOS=17002491;\n'+
        '      Tonyu.globals.$Sprites.checkHit();\n'+
        '      $LASTPOS=17002517;\n'+
        '      _this.fps_rpsCnt++;\n'+
        '      $LASTPOS=17002537;\n'+
        '      _this.measureFps();\n'+
        '      $LASTPOS=17002556;\n'+
        '      _this.waitFrame();\n'+
        '      $LASTPOS=17002583;\n'+
        '      while (_this.paused) {\n'+
        '        $LASTPOS=17002608;\n'+
        '        _this.waitFor(Tonyu.timeout(1));\n'+
        '        $LASTPOS=17002645;\n'+
        '        if (! _this.paused) {\n'+
        '          $LASTPOS=17002658;\n'+
        '          _this.resetDeadLine();\n'+
        '        }\n'+
        '        \n'+
        '      }\n'+
        '      \n'+
        '    }\n'+
        '  },\n'+
        '  fiber$main :function _trc_func_17000000_1(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.enter(function _trc_func_17000000_2(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=17001406;\n'+
        '          _this.fiber$initSprites(_thread);\n'+
        '          __pc=1;return;\n'+
        '        case 1:\n'+
        '          \n'+
        '          $LASTPOS=17001422;\n'+
        '          Tonyu.globals.$InputDevice=new Tonyu.classes.kernel.InputDevice;\n'+
        '          $LASTPOS=17001453;\n'+
        '          Tonyu.globals.$InputDevice.initCanvasEvents(_this.cvj);\n'+
        '          $LASTPOS=17001490;\n'+
        '          _this.fiber$initThread(_thread);\n'+
        '          __pc=2;return;\n'+
        '        case 2:\n'+
        '          \n'+
        '          $LASTPOS=17001507;\n'+
        '          Tonyu.globals.$pat_fruits=30;\n'+
        '          $LASTPOS=17001524;\n'+
        '          Tonyu.globals.$Keys=new Tonyu.classes.kernel.Keys;\n'+
        '          $LASTPOS=17001541;\n'+
        '          Tonyu.globals.$Math=Math;\n'+
        '          $LASTPOS=17001554;\n'+
        '          Tonyu.globals.$consolePanel=new Tonyu.classes.kernel.Panel({align: "center",x: 465/2,y: 465/2,width: 465,height: 465,zOrder: - 10,layer: Tonyu.globals.$FrontSprites});\n'+
        '          $LASTPOS=17001664;\n'+
        '          Tonyu.globals.$consolePrintY=465-15;\n'+
        '          $LASTPOS=17001688;\n'+
        '          Tonyu.globals.$panel=new Tonyu.classes.kernel.Panel({align: "center",x: Tonyu.globals.$screenWidth/2,y: Tonyu.globals.$screenHeight/2,width: Tonyu.globals.$screenWidth,height: Tonyu.globals.$screenHeight,zOrder: - 1,layer: Tonyu.globals.$FrontSprites});\n'+
        '          $LASTPOS=17001828;\n'+
        '          if (typeof  SplashScreen!="undefined") {\n'+
        '            $LASTPOS=17001866;\n'+
        '            SplashScreen.hide();\n'+
        '          }\n'+
        '          $LASTPOS=17001888;\n'+
        '          _this.initFPSParams();\n'+
        '          $LASTPOS=17001908;\n'+
        '        case 3:\n'+
        '          $LASTPOS=17001928;\n'+
        '          _this.thg.steps();\n'+
        '          $LASTPOS=17001946;\n'+
        '          Tonyu.globals.$Keys.update();\n'+
        '          $LASTPOS=17001967;\n'+
        '          Tonyu.globals.$InputDevice.update();\n'+
        '          $LASTPOS=17001995;\n'+
        '          Tonyu.globals.$screenWidth=Tonyu.globals.$Screen.width;\n'+
        '          $LASTPOS=17002028;\n'+
        '          Tonyu.globals.$screenHeight=Tonyu.globals.$Screen.height;\n'+
        '          $LASTPOS=17002069;\n'+
        '          _this.doDraw=_this.now()<_this.deadLine;\n'+
        '          $LASTPOS=17002097;\n'+
        '          if (! _this.doDraw&&_this.frameSkipped>=_this.maxFrameSkip) {\n'+
        '            $LASTPOS=17002151;\n'+
        '            _this.doDraw=true;\n'+
        '            $LASTPOS=17002173;\n'+
        '            _this.resetDeadLine();\n'+
        '            \n'+
        '          }\n'+
        '          $LASTPOS=17002202;\n'+
        '          if (_this.doDraw) {\n'+
        '            $LASTPOS=17002245;\n'+
        '            Tonyu.globals.$Screen.fillCanvas(Tonyu.globals.$Screen.buf[0]);\n'+
        '            $LASTPOS=17002290;\n'+
        '            Tonyu.globals.$Sprites.draw(Tonyu.globals.$Screen.buf[0]);\n'+
        '            $LASTPOS=17002330;\n'+
        '            Tonyu.globals.$FrontSprites.draw(Tonyu.globals.$Screen.buf[0]);\n'+
        '            $LASTPOS=17002375;\n'+
        '            Tonyu.globals.$Screen.draw();\n'+
        '            $LASTPOS=17002400;\n'+
        '            _this.fps_fpsCnt++;\n'+
        '            $LASTPOS=17002424;\n'+
        '            _this.frameSkipped=0;\n'+
        '            \n'+
        '          } else {\n'+
        '            $LASTPOS=17002463;\n'+
        '            _this.frameSkipped++;\n'+
        '            \n'+
        '          }\n'+
        '          $LASTPOS=17002491;\n'+
        '          Tonyu.globals.$Sprites.checkHit();\n'+
        '          $LASTPOS=17002517;\n'+
        '          _this.fps_rpsCnt++;\n'+
        '          $LASTPOS=17002537;\n'+
        '          _this.measureFps();\n'+
        '          $LASTPOS=17002556;\n'+
        '          _this.fiber$waitFrame(_thread);\n'+
        '          __pc=4;return;\n'+
        '        case 4:\n'+
        '          \n'+
        '          $LASTPOS=17002583;\n'+
        '        case 5:\n'+
        '          if (!(_this.paused)) { __pc=7; break; }\n'+
        '          $LASTPOS=17002608;\n'+
        '          _this.fiber$waitFor(_thread, Tonyu.timeout(1));\n'+
        '          __pc=6;return;\n'+
        '        case 6:\n'+
        '          \n'+
        '          $LASTPOS=17002645;\n'+
        '          if (! _this.paused) {\n'+
        '            $LASTPOS=17002658;\n'+
        '            _this.resetDeadLine();\n'+
        '          }\n'+
        '          __pc=5;break;\n'+
        '        case 7:\n'+
        '          \n'+
        '          __pc=3;break;\n'+
        '        case 8:\n'+
        '          \n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  initSprites :function _trc_func_17000160_3() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var a;\n'+
        '    var rs;\n'+
        '    var r;\n'+
        '    var name;\n'+
        '    var val;\n'+
        '    var _it_166;\n'+
        '    \n'+
        '    $LASTPOS=17000182;\n'+
        '    Tonyu.globals.$Sprites=new Tonyu.classes.kernel.Sprites();\n'+
        '    $LASTPOS=17000211;\n'+
        '    Tonyu.globals.$FrontSprites=new Tonyu.classes.kernel.Sprites();\n'+
        '    $LASTPOS=17000245;\n'+
        '    _this.print("Loading plugins..");\n'+
        '    $LASTPOS=17000279;\n'+
        '    a = _this.asyncResult();\n'+
        '    $LASTPOS=17000305;\n'+
        '    Tonyu.globals.$currentProject.loadPlugins(a.receiver);\n'+
        '    $LASTPOS=17000351;\n'+
        '    _this.waitFor(a);\n'+
        '    $LASTPOS=17000368;\n'+
        '    _this.print("Loading pats..");\n'+
        '    $LASTPOS=17000399;\n'+
        '    rs = Tonyu.globals.$currentProject.getResource();\n'+
        '    $LASTPOS=17000442;\n'+
        '    a=_this.asyncResult();\n'+
        '    $LASTPOS=17000464;\n'+
        '    ImageList.load(rs.images,a.receiver,{baseDir: Tonyu.globals.$currentProject.getDir()});\n'+
        '    $LASTPOS=17000549;\n'+
        '    _this.waitFor(a);\n'+
        '    $LASTPOS=17000566;\n'+
        '    r = a[0];\n'+
        '    $LASTPOS=17000583;\n'+
        '    Tonyu.globals.$Sprites.setImageList(r);\n'+
        '    $LASTPOS=17000614;\n'+
        '    _it_166=Tonyu.iterator(r.names,2);\n'+
        '    while(_it_166.next()) {\n'+
        '      name=_it_166[0];\n'+
        '      val=_it_166[1];\n'+
        '      \n'+
        '      $LASTPOS=17000655;\n'+
        '      Tonyu.setGlobal(name,val);\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=17000695;\n'+
        '    _this.print("Loading pats done.");\n'+
        '    $LASTPOS=17000730;\n'+
        '    _this.cvj=$("canvas");\n'+
        '    $LASTPOS=17000752;\n'+
        '    if (Tonyu.noviceMode) {\n'+
        '      $LASTPOS=17000785;\n'+
        '      Tonyu.globals.$Screen=new Tonyu.classes.kernel.ScaledCanvas({canvas: _this.cvj,width: 600,height: 300});\n'+
        '      \n'+
        '    } else {\n'+
        '      $LASTPOS=17000869;\n'+
        '      Tonyu.globals.$Screen=new Tonyu.classes.kernel.ScaledCanvas({canvas: _this.cvj,width: 465,height: 465});\n'+
        '      \n'+
        '    }\n'+
        '  },\n'+
        '  fiber$initSprites :function _trc_func_17000160_4(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var a;\n'+
        '    var rs;\n'+
        '    var r;\n'+
        '    var name;\n'+
        '    var val;\n'+
        '    var _it_166;\n'+
        '    \n'+
        '    $LASTPOS=17000182;\n'+
        '    Tonyu.globals.$Sprites=new Tonyu.classes.kernel.Sprites();\n'+
        '    $LASTPOS=17000211;\n'+
        '    Tonyu.globals.$FrontSprites=new Tonyu.classes.kernel.Sprites();\n'+
        '    $LASTPOS=17000245;\n'+
        '    _this.print("Loading plugins..");\n'+
        '    $LASTPOS=17000279;\n'+
        '    a = _this.asyncResult();\n'+
        '    $LASTPOS=17000305;\n'+
        '    Tonyu.globals.$currentProject.loadPlugins(a.receiver);\n'+
        '    \n'+
        '    _thread.enter(function _trc_func_17000160_5(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=17000351;\n'+
        '          _this.fiber$waitFor(_thread, a);\n'+
        '          __pc=1;return;\n'+
        '        case 1:\n'+
        '          \n'+
        '          $LASTPOS=17000368;\n'+
        '          _this.print("Loading pats..");\n'+
        '          $LASTPOS=17000399;\n'+
        '          rs = Tonyu.globals.$currentProject.getResource();\n'+
        '          $LASTPOS=17000442;\n'+
        '          a=_this.asyncResult();\n'+
        '          $LASTPOS=17000464;\n'+
        '          ImageList.load(rs.images,a.receiver,{baseDir: Tonyu.globals.$currentProject.getDir()});\n'+
        '          $LASTPOS=17000549;\n'+
        '          _this.fiber$waitFor(_thread, a);\n'+
        '          __pc=2;return;\n'+
        '        case 2:\n'+
        '          \n'+
        '          $LASTPOS=17000566;\n'+
        '          r = a[0];\n'+
        '          $LASTPOS=17000583;\n'+
        '          Tonyu.globals.$Sprites.setImageList(r);\n'+
        '          $LASTPOS=17000614;\n'+
        '          _it_166=Tonyu.iterator(r.names,2);\n'+
        '          while(_it_166.next()) {\n'+
        '            name=_it_166[0];\n'+
        '            val=_it_166[1];\n'+
        '            \n'+
        '            $LASTPOS=17000655;\n'+
        '            Tonyu.setGlobal(name,val);\n'+
        '            \n'+
        '          }\n'+
        '          $LASTPOS=17000695;\n'+
        '          _this.print("Loading pats done.");\n'+
        '          $LASTPOS=17000730;\n'+
        '          _this.cvj=$("canvas");\n'+
        '          $LASTPOS=17000752;\n'+
        '          if (Tonyu.noviceMode) {\n'+
        '            $LASTPOS=17000785;\n'+
        '            Tonyu.globals.$Screen=new Tonyu.classes.kernel.ScaledCanvas({canvas: _this.cvj,width: 600,height: 300});\n'+
        '            \n'+
        '          } else {\n'+
        '            $LASTPOS=17000869;\n'+
        '            Tonyu.globals.$Screen=new Tonyu.classes.kernel.ScaledCanvas({canvas: _this.cvj,width: 465,height: 465});\n'+
        '            \n'+
        '          }\n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  initThread :function _trc_func_17000945_6() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var o;\n'+
        '    var mainClassName;\n'+
        '    \n'+
        '    $LASTPOS=17000966;\n'+
        '    Tonyu.globals.$mainThreadGroup=_this.thg=Tonyu.threadGroup();\n'+
        '    $LASTPOS=17001013;\n'+
        '    o = Tonyu.currentProject.getOptions();\n'+
        '    $LASTPOS=17001059;\n'+
        '    mainClassName = o.run.mainClass;\n'+
        '    $LASTPOS=17001099;\n'+
        '    _this.print("MainClass= "+mainClassName);\n'+
        '    $LASTPOS=17001140;\n'+
        '    _this.mainClass=Tonyu.getClass(mainClassName);\n'+
        '    $LASTPOS=17001186;\n'+
        '    if (! _this.mainClass) {\n'+
        '      $LASTPOS=17001213;\n'+
        '      TError(mainClassName+" というクラスはありません","不明",0).raise();\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=17001292;\n'+
        '    Tonyu.runMode=true;\n'+
        '    $LASTPOS=17001317;\n'+
        '    Tonyu.globals.$currentThreadGroup=_this.thg;\n'+
        '    $LASTPOS=17001347;\n'+
        '    new _this.mainClass();\n'+
        '  },\n'+
        '  fiber$initThread :function _trc_func_17000945_7(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var o;\n'+
        '    var mainClassName;\n'+
        '    \n'+
        '    $LASTPOS=17000966;\n'+
        '    Tonyu.globals.$mainThreadGroup=_this.thg=Tonyu.threadGroup();\n'+
        '    $LASTPOS=17001013;\n'+
        '    o = Tonyu.currentProject.getOptions();\n'+
        '    $LASTPOS=17001059;\n'+
        '    mainClassName = o.run.mainClass;\n'+
        '    $LASTPOS=17001099;\n'+
        '    _this.print("MainClass= "+mainClassName);\n'+
        '    $LASTPOS=17001140;\n'+
        '    _this.mainClass=Tonyu.getClass(mainClassName);\n'+
        '    $LASTPOS=17001186;\n'+
        '    if (! _this.mainClass) {\n'+
        '      $LASTPOS=17001213;\n'+
        '      TError(mainClassName+" というクラスはありません","不明",0).raise();\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=17001292;\n'+
        '    Tonyu.runMode=true;\n'+
        '    $LASTPOS=17001317;\n'+
        '    Tonyu.globals.$currentThreadGroup=_this.thg;\n'+
        '    $LASTPOS=17001347;\n'+
        '    new _this.mainClass();\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  stop :function _trc_func_17001368_8() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=17001383;\n'+
        '    _this.fireEvent("stop");\n'+
        '  },\n'+
        '  fiber$stop :function _trc_func_17001368_9(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.enter(function _trc_func_17001368_10(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=17001383;\n'+
        '          _this.fiber$fireEvent(_thread, "stop");\n'+
        '          __pc=1;return;\n'+
        '        case 1:\n'+
        '          \n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  initFPSParams :function _trc_func_17002688_11() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=17002738;\n'+
        '    _this._fps=30;\n'+
        '    $LASTPOS=17002754;\n'+
        '    _this.maxframeSkip=5;\n'+
        '    $LASTPOS=17002804;\n'+
        '    _this.frameCnt=0;\n'+
        '    $LASTPOS=17002823;\n'+
        '    _this.resetDeadLine();\n'+
        '    $LASTPOS=17002845;\n'+
        '    Tonyu.globals.$Boot=_this;\n'+
        '    $LASTPOS=17002864;\n'+
        '    _this.lastMeasured=_this.now();\n'+
        '    $LASTPOS=17002889;\n'+
        '    _this.fps_fps=_this.fps_rps=_this.fps_fpsCnt=_this.fps_rpsCnt=0;\n'+
        '  },\n'+
        '  now :function _trc_func_17002934_12() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return new Date().getTime();\n'+
        '  },\n'+
        '  resetDeadLine :function _trc_func_17002988_13() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=17003019;\n'+
        '    _this.deadLine=_this.now()+1000/_this._fps;\n'+
        '    $LASTPOS=17003050;\n'+
        '    _this.frameSkipped=0;\n'+
        '  },\n'+
        '  waitFrame :function _trc_func_17003074_14() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var wt;\n'+
        '    \n'+
        '    $LASTPOS=17003094;\n'+
        '    wt = _this.deadLine-_this.now();\n'+
        '    $LASTPOS=17003122;\n'+
        '    if (wt<1) {\n'+
        '      $LASTPOS=17003143;\n'+
        '      if (wt<- 1000) {\n'+
        '        $LASTPOS=17003157;\n'+
        '        _this.resetDeadLine();\n'+
        '      }\n'+
        '      $LASTPOS=17003183;\n'+
        '      wt=1;\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=17003201;\n'+
        '    wt=_this.floor(wt);\n'+
        '    $LASTPOS=17003220;\n'+
        '    _this.waitFor(Tonyu.timeout(wt));\n'+
        '    $LASTPOS=17003253;\n'+
        '    _this.deadLine+=1000/_this._fps;\n'+
        '  },\n'+
        '  fiber$waitFrame :function _trc_func_17003074_15(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var wt;\n'+
        '    \n'+
        '    $LASTPOS=17003094;\n'+
        '    wt = _this.deadLine-_this.now();\n'+
        '    $LASTPOS=17003122;\n'+
        '    if (wt<1) {\n'+
        '      $LASTPOS=17003143;\n'+
        '      if (wt<- 1000) {\n'+
        '        $LASTPOS=17003157;\n'+
        '        _this.resetDeadLine();\n'+
        '      }\n'+
        '      $LASTPOS=17003183;\n'+
        '      wt=1;\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=17003201;\n'+
        '    wt=_this.floor(wt);\n'+
        '    \n'+
        '    _thread.enter(function _trc_func_17003074_16(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=17003220;\n'+
        '          _this.fiber$waitFor(_thread, Tonyu.timeout(wt));\n'+
        '          __pc=1;return;\n'+
        '        case 1:\n'+
        '          \n'+
        '          $LASTPOS=17003253;\n'+
        '          _this.deadLine+=1000/_this._fps;\n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  getFrameRate :function _trc_func_17003280_17() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return _this._fps;\n'+
        '  },\n'+
        '  setFrameRate :function _trc_func_17003366_18(fps,maxFrameSkip) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=17003413;\n'+
        '    _this._fps=fps;\n'+
        '    $LASTPOS=17003430;\n'+
        '    if (typeof  maxFrameSkip!="number") {\n'+
        '      $LASTPOS=17003465;\n'+
        '      maxFrameSkip=5;\n'+
        '    }\n'+
        '    $LASTPOS=17003486;\n'+
        '    _this.maxFrameSkip=maxFrameSkip;\n'+
        '    $LASTPOS=17003525;\n'+
        '    _this.resetDeadLine();\n'+
        '  },\n'+
        '  getMeasuredFps :function _trc_func_17003575_19() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return _this.fps_fps;\n'+
        '  },\n'+
        '  getMeasuredRps :function _trc_func_17003654_20() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return _this.fps_rps;\n'+
        '  },\n'+
        '  measureFps :function _trc_func_17003708_21() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=17003736;\n'+
        '    if (_this.now()>_this.lastMeasured+1000) {\n'+
        '      $LASTPOS=17003776;\n'+
        '      _this.fps_fps=_this.fps_fpsCnt;\n'+
        '      $LASTPOS=17003805;\n'+
        '      _this.fps_rps=_this.fps_rpsCnt;\n'+
        '      $LASTPOS=17003834;\n'+
        '      _this.fps_fpsCnt=0;\n'+
        '      $LASTPOS=17003857;\n'+
        '      _this.fps_rpsCnt=0;\n'+
        '      $LASTPOS=17003880;\n'+
        '      _this.lastMeasured=_this.now();\n'+
        '      \n'+
        '    }\n'+
        '  },\n'+
        '  __dummy: false\n'+
        '});\n'+
        'Tonyu.klass.addMeta(Tonyu.classes.kernel.Boot,{"fullName":"kernel.Boot","namespace":"kernel","shortName":"Boot","decls":{"methods":{"main":{"nowait":false},"initSprites":{"nowait":false},"initThread":{"nowait":false},"stop":{"nowait":false},"initFPSParams":{"nowait":true},"now":{"nowait":true},"resetDeadLine":{"nowait":true},"waitFrame":{"nowait":false},"getFrameRate":{"nowait":true},"setFrameRate":{"nowait":true},"getMeasuredFps":{"nowait":true},"getMeasuredRps":{"nowait":true},"measureFps":{"nowait":true}}}});\n'+
        '\n'+
        'Tonyu.klass.ensureNamespace(Tonyu.classes,\'kernel\');\n'+
        'Tonyu.classes.kernel.Map=Tonyu.klass(Tonyu.classes.kernel.Actor,[],{\n'+
        '  main :function _trc_func_18000000_0() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  fiber$main :function _trc_func_18000000_1(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  initialize :function _trc_func_18000041_2(param) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var j;\n'+
        '    var i;\n'+
        '    \n'+
        '    $LASTPOS=18000060;\n'+
        '    _this.sx=0;\n'+
        '    $LASTPOS=18000071;\n'+
        '    _this.sy=0;\n'+
        '    $LASTPOS=18000082;\n'+
        '    Tonyu.classes.kernel.Actor.apply( _this, [param]);\n'+
        '    $LASTPOS=18000101;\n'+
        '    _this.buf=$("<canvas>").attr({width: _this.col*_this.chipWidth,height: _this.row*_this.chipHeight});\n'+
        '    $LASTPOS=18000173;\n'+
        '    _this.mapObj=true;\n'+
        '    $LASTPOS=18000191;\n'+
        '    _this.mapTable=[];\n'+
        '    $LASTPOS=18000211;\n'+
        '    _this.mapOnTable=[];\n'+
        '    $LASTPOS=18000233;\n'+
        '    $LASTPOS=18000237;\n'+
        '    j = 0;\n'+
        '    while(j<_this.row) {\n'+
        '      {\n'+
        '        $LASTPOS=18000266;\n'+
        '        _this.rows=[];\n'+
        '        $LASTPOS=18000286;\n'+
        '        $LASTPOS=18000290;\n'+
        '        i = 0;\n'+
        '        while(i<_this.col) {\n'+
        '          {\n'+
        '            $LASTPOS=18000323;\n'+
        '            _this.rows.push(- 1);\n'+
        '          }\n'+
        '          i++;\n'+
        '        }\n'+
        '        $LASTPOS=18000358;\n'+
        '        _this.mapTable.push(_this.rows);\n'+
        '      }\n'+
        '      j++;\n'+
        '    }\n'+
        '    $LASTPOS=18000391;\n'+
        '    $LASTPOS=18000395;\n'+
        '    j = 0;\n'+
        '    while(j<_this.row) {\n'+
        '      {\n'+
        '        $LASTPOS=18000424;\n'+
        '        _this.rows=[];\n'+
        '        $LASTPOS=18000444;\n'+
        '        $LASTPOS=18000448;\n'+
        '        i = 0;\n'+
        '        while(i<_this.col) {\n'+
        '          {\n'+
        '            $LASTPOS=18000481;\n'+
        '            _this.rows.push(- 1);\n'+
        '          }\n'+
        '          i++;\n'+
        '        }\n'+
        '        $LASTPOS=18000516;\n'+
        '        _this.mapOnTable.push(_this.rows);\n'+
        '      }\n'+
        '      j++;\n'+
        '    }\n'+
        '    $LASTPOS=18000616;\n'+
        '    _this.initMap();\n'+
        '  },\n'+
        '  initMap :function _trc_func_18000631_3() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var i;\n'+
        '    var j;\n'+
        '    \n'+
        '    $LASTPOS=18000648;\n'+
        '    if (! _this.mapData) {\n'+
        '      return _this;\n'+
        '    }\n'+
        '    $LASTPOS=18000674;\n'+
        '    $LASTPOS=18000678;\n'+
        '    i = 0;\n'+
        '    while(i<_this.row) {\n'+
        '      {\n'+
        '        $LASTPOS=18000707;\n'+
        '        $LASTPOS=18000711;\n'+
        '        j = 0;\n'+
        '        while(j<_this.col) {\n'+
        '          {\n'+
        '            $LASTPOS=18000744;\n'+
        '            _this.set(j,i,_this.mapData[i][j]);\n'+
        '          }\n'+
        '          j++;\n'+
        '        }\n'+
        '      }\n'+
        '      i++;\n'+
        '    }\n'+
        '    $LASTPOS=18000791;\n'+
        '    if (! _this.mapOnData) {\n'+
        '      return _this;\n'+
        '    }\n'+
        '    $LASTPOS=18000819;\n'+
        '    $LASTPOS=18000823;\n'+
        '    i = 0;\n'+
        '    while(i<_this.row) {\n'+
        '      {\n'+
        '        $LASTPOS=18000852;\n'+
        '        $LASTPOS=18000856;\n'+
        '        j = 0;\n'+
        '        while(j<_this.col) {\n'+
        '          {\n'+
        '            $LASTPOS=18000889;\n'+
        '            _this.setOn(j,i,_this.mapOnData[i][j]);\n'+
        '          }\n'+
        '          j++;\n'+
        '        }\n'+
        '      }\n'+
        '      i++;\n'+
        '    }\n'+
        '  },\n'+
        '  fiber$initMap :function _trc_func_18000631_4(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var i;\n'+
        '    var j;\n'+
        '    \n'+
        '    $LASTPOS=18000648;\n'+
        '    if (! _this.mapData) {\n'+
        '      _thread.retVal=_this;return;\n'+
        '      \n'+
        '    }\n'+
        '    \n'+
        '    _thread.enter(function _trc_func_18000631_5(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=18000674;\n'+
        '          $LASTPOS=18000678;\n'+
        '          i = 0;;\n'+
        '        case 1:\n'+
        '          if (!(i<_this.row)) { __pc=5; break; }\n'+
        '          $LASTPOS=18000707;\n'+
        '          $LASTPOS=18000711;\n'+
        '          j = 0;;\n'+
        '        case 2:\n'+
        '          if (!(j<_this.col)) { __pc=4; break; }\n'+
        '          $LASTPOS=18000744;\n'+
        '          _this.fiber$set(_thread, j, i, _this.mapData[i][j]);\n'+
        '          __pc=3;return;\n'+
        '        case 3:\n'+
        '          \n'+
        '          j++;\n'+
        '          __pc=2;break;\n'+
        '        case 4:\n'+
        '          \n'+
        '          i++;\n'+
        '          __pc=1;break;\n'+
        '        case 5:\n'+
        '          \n'+
        '          $LASTPOS=18000791;\n'+
        '          if (!(! _this.mapOnData)) { __pc=6; break; }\n'+
        '          _thread.exit(_this);return;\n'+
        '        case 6:\n'+
        '          \n'+
        '          $LASTPOS=18000819;\n'+
        '          $LASTPOS=18000823;\n'+
        '          i = 0;;\n'+
        '        case 7:\n'+
        '          if (!(i<_this.row)) { __pc=11; break; }\n'+
        '          $LASTPOS=18000852;\n'+
        '          $LASTPOS=18000856;\n'+
        '          j = 0;;\n'+
        '        case 8:\n'+
        '          if (!(j<_this.col)) { __pc=10; break; }\n'+
        '          $LASTPOS=18000889;\n'+
        '          _this.fiber$setOn(_thread, j, i, _this.mapOnData[i][j]);\n'+
        '          __pc=9;return;\n'+
        '        case 9:\n'+
        '          \n'+
        '          j++;\n'+
        '          __pc=8;break;\n'+
        '        case 10:\n'+
        '          \n'+
        '          i++;\n'+
        '          __pc=7;break;\n'+
        '        case 11:\n'+
        '          \n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  load :function _trc_func_18000939_6(dataFile) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=18000961;\n'+
        '    _this.baseData=_this.file("../maps/").rel(dataFile).obj();\n'+
        '    $LASTPOS=18001013;\n'+
        '    if (! _this.baseData) {\n'+
        '      $LASTPOS=18001027;\n'+
        '      _this.baseData=_this.file(dataFile).obj();\n'+
        '    }\n'+
        '    $LASTPOS=18001063;\n'+
        '    _this.mapTable=_this.baseData[0];\n'+
        '    $LASTPOS=18001090;\n'+
        '    _this.mapData=_this.mapTable;\n'+
        '    $LASTPOS=18001113;\n'+
        '    _this.row=_this.mapTable.length;\n'+
        '    $LASTPOS=18001139;\n'+
        '    _this.col=_this.mapTable[0].length;\n'+
        '    $LASTPOS=18001168;\n'+
        '    _this.mapOnTable=_this.baseData[1];\n'+
        '    $LASTPOS=18001197;\n'+
        '    _this.mapOnData=_this.mapOnTable;\n'+
        '    $LASTPOS=18001224;\n'+
        '    _this.buf=$("<canvas>").attr({width: _this.col*_this.chipWidth,height: _this.row*_this.chipHeight});\n'+
        '    $LASTPOS=18001296;\n'+
        '    _this.initMap();\n'+
        '  },\n'+
        '  fiber$load :function _trc_func_18000939_7(_thread,dataFile) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=18000961;\n'+
        '    _this.baseData=_this.file("../maps/").rel(dataFile).obj();\n'+
        '    $LASTPOS=18001013;\n'+
        '    if (! _this.baseData) {\n'+
        '      $LASTPOS=18001027;\n'+
        '      _this.baseData=_this.file(dataFile).obj();\n'+
        '    }\n'+
        '    $LASTPOS=18001063;\n'+
        '    _this.mapTable=_this.baseData[0];\n'+
        '    $LASTPOS=18001090;\n'+
        '    _this.mapData=_this.mapTable;\n'+
        '    $LASTPOS=18001113;\n'+
        '    _this.row=_this.mapTable.length;\n'+
        '    $LASTPOS=18001139;\n'+
        '    _this.col=_this.mapTable[0].length;\n'+
        '    $LASTPOS=18001168;\n'+
        '    _this.mapOnTable=_this.baseData[1];\n'+
        '    $LASTPOS=18001197;\n'+
        '    _this.mapOnData=_this.mapOnTable;\n'+
        '    $LASTPOS=18001224;\n'+
        '    _this.buf=$("<canvas>").attr({width: _this.col*_this.chipWidth,height: _this.row*_this.chipHeight});\n'+
        '    \n'+
        '    _thread.enter(function _trc_func_18000939_8(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=18001296;\n'+
        '          _this.fiber$initMap(_thread);\n'+
        '          __pc=1;return;\n'+
        '        case 1:\n'+
        '          \n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  set :function _trc_func_18001311_9(setCol,setRow,p) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=18001339;\n'+
        '    if (setCol>=_this.col||setRow>=_this.row||setCol<0||setRow<0) {\n'+
        '      return _this;\n'+
        '    }\n'+
        '    $LASTPOS=18001407;\n'+
        '    _this.mapTable[setRow][setCol]=p;\n'+
        '    $LASTPOS=18001478;\n'+
        '    _this.ctx=_this.buf[0].getContext("2d");\n'+
        '    $LASTPOS=18001512;\n'+
        '    p=Math.floor(p);\n'+
        '    $LASTPOS=18001534;\n'+
        '    _this.pImg=Tonyu.globals.$Sprites.getImageList()[p];\n'+
        '    $LASTPOS=18001572;\n'+
        '    if (! _this.pImg) {\n'+
        '      $LASTPOS=18001594;\n'+
        '      _this.ctx.clearRect(setCol*_this.chipWidth,setRow*_this.chipHeight,_this.chipWidth,_this.chipHeight);\n'+
        '      return _this;\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=18001695;\n'+
        '    _this.ctx.clearRect(setCol*_this.chipWidth,setRow*_this.chipHeight,_this.chipWidth,_this.chipHeight);\n'+
        '    $LASTPOS=18001772;\n'+
        '    _this.ctx.save();\n'+
        '    $LASTPOS=18001789;\n'+
        '    _this.ctx.drawImage(_this.pImg.image,_this.pImg.x,_this.pImg.y,_this.pImg.width,_this.pImg.height,setCol*_this.chipWidth,setRow*_this.chipHeight,_this.chipWidth,_this.chipHeight);\n'+
        '    $LASTPOS=18001933;\n'+
        '    _this.ctx.restore();\n'+
        '  },\n'+
        '  fiber$set :function _trc_func_18001311_10(_thread,setCol,setRow,p) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=18001339;\n'+
        '    if (setCol>=_this.col||setRow>=_this.row||setCol<0||setRow<0) {\n'+
        '      _thread.retVal=_this;return;\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=18001407;\n'+
        '    _this.mapTable[setRow][setCol]=p;\n'+
        '    $LASTPOS=18001478;\n'+
        '    _this.ctx=_this.buf[0].getContext("2d");\n'+
        '    $LASTPOS=18001512;\n'+
        '    p=Math.floor(p);\n'+
        '    $LASTPOS=18001534;\n'+
        '    _this.pImg=Tonyu.globals.$Sprites.getImageList()[p];\n'+
        '    $LASTPOS=18001572;\n'+
        '    if (! _this.pImg) {\n'+
        '      $LASTPOS=18001594;\n'+
        '      _this.ctx.clearRect(setCol*_this.chipWidth,setRow*_this.chipHeight,_this.chipWidth,_this.chipHeight);\n'+
        '      _thread.retVal=_this;return;\n'+
        '      \n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=18001695;\n'+
        '    _this.ctx.clearRect(setCol*_this.chipWidth,setRow*_this.chipHeight,_this.chipWidth,_this.chipHeight);\n'+
        '    $LASTPOS=18001772;\n'+
        '    _this.ctx.save();\n'+
        '    $LASTPOS=18001789;\n'+
        '    _this.ctx.drawImage(_this.pImg.image,_this.pImg.x,_this.pImg.y,_this.pImg.width,_this.pImg.height,setCol*_this.chipWidth,setRow*_this.chipHeight,_this.chipWidth,_this.chipHeight);\n'+
        '    $LASTPOS=18001933;\n'+
        '    _this.ctx.restore();\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  setOn :function _trc_func_18001952_11(setCol,setRow,p) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=18001982;\n'+
        '    if (setCol>=_this.col||setRow>=_this.row||setCol<0||setRow<0) {\n'+
        '      return _this;\n'+
        '    }\n'+
        '    $LASTPOS=18002050;\n'+
        '    _this.set(setCol,setRow,_this.mapTable[setRow][setCol]);\n'+
        '    $LASTPOS=18002100;\n'+
        '    _this.mapOnTable[setRow][setCol]=p;\n'+
        '    $LASTPOS=18002135;\n'+
        '    _this.ctx=_this.buf[0].getContext("2d");\n'+
        '    $LASTPOS=18002169;\n'+
        '    p=Math.floor(p);\n'+
        '    $LASTPOS=18002191;\n'+
        '    _this.pImg=Tonyu.globals.$Sprites.getImageList()[p];\n'+
        '    $LASTPOS=18002229;\n'+
        '    if (! _this.pImg) {\n'+
        '      return _this;\n'+
        '    }\n'+
        '    $LASTPOS=18002253;\n'+
        '    _this.ctx.save();\n'+
        '    $LASTPOS=18002270;\n'+
        '    _this.ctx.drawImage(_this.pImg.image,_this.pImg.x,_this.pImg.y,_this.pImg.width,_this.pImg.height,setCol*_this.chipWidth,setRow*_this.chipHeight,_this.chipWidth,_this.chipHeight);\n'+
        '    $LASTPOS=18002414;\n'+
        '    _this.ctx.restore();\n'+
        '  },\n'+
        '  fiber$setOn :function _trc_func_18001952_12(_thread,setCol,setRow,p) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=18001982;\n'+
        '    if (setCol>=_this.col||setRow>=_this.row||setCol<0||setRow<0) {\n'+
        '      _thread.retVal=_this;return;\n'+
        '      \n'+
        '    }\n'+
        '    \n'+
        '    _thread.enter(function _trc_func_18001952_13(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=18002050;\n'+
        '          _this.fiber$set(_thread, setCol, setRow, _this.mapTable[setRow][setCol]);\n'+
        '          __pc=1;return;\n'+
        '        case 1:\n'+
        '          \n'+
        '          $LASTPOS=18002100;\n'+
        '          _this.mapOnTable[setRow][setCol]=p;\n'+
        '          $LASTPOS=18002135;\n'+
        '          _this.ctx=_this.buf[0].getContext("2d");\n'+
        '          $LASTPOS=18002169;\n'+
        '          p=Math.floor(p);\n'+
        '          $LASTPOS=18002191;\n'+
        '          _this.pImg=Tonyu.globals.$Sprites.getImageList()[p];\n'+
        '          $LASTPOS=18002229;\n'+
        '          if (!(! _this.pImg)) { __pc=2; break; }\n'+
        '          _thread.exit(_this);return;\n'+
        '        case 2:\n'+
        '          \n'+
        '          $LASTPOS=18002253;\n'+
        '          _this.ctx.save();\n'+
        '          $LASTPOS=18002270;\n'+
        '          _this.ctx.drawImage(_this.pImg.image,_this.pImg.x,_this.pImg.y,_this.pImg.width,_this.pImg.height,setCol*_this.chipWidth,setRow*_this.chipHeight,_this.chipWidth,_this.chipHeight);\n'+
        '          $LASTPOS=18002414;\n'+
        '          _this.ctx.restore();\n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  setOnAt :function _trc_func_18002433_14(setX,setY,p) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=18002461;\n'+
        '    _this.setOn(Math.floor(setX/_this.chipWidth),Math.floor(setY/_this.chipHeight),p);\n'+
        '  },\n'+
        '  fiber$setOnAt :function _trc_func_18002433_15(_thread,setX,setY,p) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.enter(function _trc_func_18002433_16(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=18002461;\n'+
        '          _this.fiber$setOn(_thread, Math.floor(setX/_this.chipWidth), Math.floor(setY/_this.chipHeight), p);\n'+
        '          __pc=1;return;\n'+
        '        case 1:\n'+
        '          \n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  setAt :function _trc_func_18002530_17(setX,setY,p) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=18002556;\n'+
        '    _this.set(Math.floor(setX/_this.chipWidth),Math.floor(setY/_this.chipHeight),p);\n'+
        '  },\n'+
        '  fiber$setAt :function _trc_func_18002530_18(_thread,setX,setY,p) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.enter(function _trc_func_18002530_19(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=18002556;\n'+
        '          _this.fiber$set(_thread, Math.floor(setX/_this.chipWidth), Math.floor(setY/_this.chipHeight), p);\n'+
        '          __pc=1;return;\n'+
        '        case 1:\n'+
        '          \n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  get :function _trc_func_18002623_20(getCol,getRow) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=18002649;\n'+
        '    if (getCol<_this.col&&getRow<_this.row&&getCol>=0&&getRow>=0) {\n'+
        '      return _this.mapTable[getRow][getCol];\n'+
        '    }\n'+
        '    return - 1;\n'+
        '  },\n'+
        '  fiber$get :function _trc_func_18002623_21(_thread,getCol,getRow) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=18002649;\n'+
        '    if (getCol<_this.col&&getRow<_this.row&&getCol>=0&&getRow>=0) {\n'+
        '      _thread.retVal=_this.mapTable[getRow][getCol];return;\n'+
        '      \n'+
        '    }\n'+
        '    _thread.retVal=- 1;return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  getAt :function _trc_func_18002757_22(getX,getY) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return _this.get(Math.floor(getX/_this.chipWidth),Math.floor(getY/_this.chipHeight));\n'+
        '  },\n'+
        '  fiber$getAt :function _trc_func_18002757_23(_thread,getX,getY) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    _thread.retVal=_this.get(Math.floor(getX/_this.chipWidth),Math.floor(getY/_this.chipHeight));return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  getOn :function _trc_func_18002853_24(getCol,getRow) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=18002881;\n'+
        '    if (getCol<_this.col&&getRow<_this.row&&getCol>=0&&getRow>=0) {\n'+
        '      return _this.mapOnTable[getRow][getCol];\n'+
        '    }\n'+
        '    return - 1;\n'+
        '  },\n'+
        '  fiber$getOn :function _trc_func_18002853_25(_thread,getCol,getRow) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=18002881;\n'+
        '    if (getCol<_this.col&&getRow<_this.row&&getCol>=0&&getRow>=0) {\n'+
        '      _thread.retVal=_this.mapOnTable[getRow][getCol];return;\n'+
        '      \n'+
        '    }\n'+
        '    _thread.retVal=- 1;return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  getOnAt :function _trc_func_18002991_26(getX,getY) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return _this.getOn(Math.floor(getX/_this.chipWidth),Math.floor(getY/_this.chipHeight));\n'+
        '  },\n'+
        '  fiber$getOnAt :function _trc_func_18002991_27(_thread,getX,getY) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    _thread.retVal=_this.getOn(Math.floor(getX/_this.chipWidth),Math.floor(getY/_this.chipHeight));return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  scrollTo :function _trc_func_18003091_28(scrollX,scrollY) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=18003124;\n'+
        '    _this.sx=- scrollX;\n'+
        '    $LASTPOS=18003142;\n'+
        '    _this.sy=- scrollY;\n'+
        '  },\n'+
        '  fiber$scrollTo :function _trc_func_18003091_29(_thread,scrollX,scrollY) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=18003124;\n'+
        '    _this.sx=- scrollX;\n'+
        '    $LASTPOS=18003142;\n'+
        '    _this.sy=- scrollY;\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  draw :function _trc_func_18003159_30(ctx) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=18003177;\n'+
        '    _this.pImg=_this.buf[0];\n'+
        '    $LASTPOS=18003195;\n'+
        '    ctx.save();\n'+
        '    $LASTPOS=18003212;\n'+
        '    ctx.drawImage(_this.pImg,0,0,_this.col*_this.chipWidth,_this.row*_this.chipHeight,_this.sx,_this.sy,_this.col*_this.chipWidth,_this.row*_this.chipHeight);\n'+
        '    $LASTPOS=18003324;\n'+
        '    ctx.restore();\n'+
        '  },\n'+
        '  __dummy: false\n'+
        '});\n'+
        'Tonyu.klass.addMeta(Tonyu.classes.kernel.Map,{"fullName":"kernel.Map","namespace":"kernel","shortName":"Map","decls":{"methods":{"main":{"nowait":false},"new":{"nowait":false},"initMap":{"nowait":false},"load":{"nowait":false},"set":{"nowait":false},"setOn":{"nowait":false},"setOnAt":{"nowait":false},"setAt":{"nowait":false},"get":{"nowait":false},"getAt":{"nowait":false},"getOn":{"nowait":false},"getOnAt":{"nowait":false},"scrollTo":{"nowait":false},"draw":{"nowait":true}}}});\n'+
        '\n'+
        'Tonyu.klass.ensureNamespace(Tonyu.classes,\'kernel\');\n'+
        'Tonyu.classes.kernel.MapEditor=Tonyu.klass(Tonyu.classes.kernel.Actor,[],{\n'+
        '  main :function _trc_func_19000000_0() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var i;\n'+
        '    var j;\n'+
        '    \n'+
        '    $LASTPOS=19000032;\n'+
        '    _this.loadMode=false;\n'+
        '    $LASTPOS=19000049;\n'+
        '    _this.print("Load Data?: Y or N");\n'+
        '    $LASTPOS=19000079;\n'+
        '    while (true) {\n'+
        '      $LASTPOS=19000097;\n'+
        '      if (_this.getkey("y")>0) {\n'+
        '        $LASTPOS=19000125;\n'+
        '        _this.loadMode=true;\n'+
        '        break;\n'+
        '        \n'+
        '        \n'+
        '      }\n'+
        '      $LASTPOS=19000168;\n'+
        '      if (_this.getkey("n")>0) {\n'+
        '        $LASTPOS=19000196;\n'+
        '        _this.loadMode=false;\n'+
        '        break;\n'+
        '        \n'+
        '        \n'+
        '      }\n'+
        '      $LASTPOS=19000240;\n'+
        '      _this.update();\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=19000254;\n'+
        '    if (_this.loadMode) {\n'+
        '      $LASTPOS=19000273;\n'+
        '      _this.fileName=prompt("Input json file (*.json)","map.json");\n'+
        '      $LASTPOS=19000334;\n'+
        '      if (_this.fileName) {\n'+
        '        $LASTPOS=19000357;\n'+
        '        _this.mapDataFile=_this.file("../maps/").rel(_this.fileName);\n'+
        '        \n'+
        '      }\n'+
        '      $LASTPOS=19000413;\n'+
        '      if (_this.mapDataFile.obj()) {\n'+
        '        $LASTPOS=19000445;\n'+
        '        _this.baseData=_this.mapDataFile.obj();\n'+
        '        \n'+
        '      } else {\n'+
        '        $LASTPOS=19000494;\n'+
        '        _this.mapDataFile=_this.file(_this.fileName);\n'+
        '        $LASTPOS=19000531;\n'+
        '        if (_this.mapDataFile.obj()) {\n'+
        '          $LASTPOS=19000567;\n'+
        '          _this.baseData=_this.mapDataFile.obj();\n'+
        '          \n'+
        '        }\n'+
        '        \n'+
        '      }\n'+
        '      $LASTPOS=19000618;\n'+
        '      if (_this.baseData==undefined) {\n'+
        '        $LASTPOS=19000652;\n'+
        '        _this.print("Load failed");\n'+
        '        $LASTPOS=19000683;\n'+
        '        _this.loadMode=false;\n'+
        '        \n'+
        '      } else {\n'+
        '        $LASTPOS=19000710;\n'+
        '        if (_this.baseData[0]&&_this.baseData[1]) {\n'+
        '          $LASTPOS=19000751;\n'+
        '          _this.mapData=_this.baseData[0];\n'+
        '          $LASTPOS=19000781;\n'+
        '          _this.mapOnData=_this.baseData[1];\n'+
        '          \n'+
        '        }\n'+
        '      }\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=19000815;\n'+
        '    _this.update();\n'+
        '    $LASTPOS=19001093;\n'+
        '    if (! _this.loadMode) {\n'+
        '      $LASTPOS=19001113;\n'+
        '      _this.row=prompt("input row");\n'+
        '      $LASTPOS=19001143;\n'+
        '      _this.update();\n'+
        '      $LASTPOS=19001158;\n'+
        '      _this.col=prompt("input col");\n'+
        '      $LASTPOS=19001188;\n'+
        '      _this.panel=new Tonyu.classes.kernel.Panel({width: _this.col*32,height: _this.row*32});\n'+
        '      $LASTPOS=19001238;\n'+
        '      _this.panel.x=_this.panel.width/2+10;\n'+
        '      $LASTPOS=19001269;\n'+
        '      _this.panel.y=_this.panel.height/2;\n'+
        '      $LASTPOS=19001298;\n'+
        '      _this.panel.setFillStyle("cyan");\n'+
        '      $LASTPOS=19001331;\n'+
        '      _this.panel.fillRect(0,0,_this.panel.width,_this.panel.height);\n'+
        '      $LASTPOS=19001382;\n'+
        '      Tonyu.globals.$map=new Tonyu.classes.kernel.Map({row: _this.row,col: _this.col,chipWidth: 32,chipHeight: 32});\n'+
        '      \n'+
        '    } else {\n'+
        '      $LASTPOS=19001445;\n'+
        '      if (! _this.mapOnData) {\n'+
        '        $LASTPOS=19001470;\n'+
        '        Tonyu.globals.$map=new Tonyu.classes.kernel.Map({row: _this.mapData.length,col: _this.mapData[0].length,chipWidth: 32,chipHeight: 32,mapData: _this.mapData});\n'+
        '        \n'+
        '      } else {\n'+
        '        $LASTPOS=19001582;\n'+
        '        Tonyu.globals.$map=new Tonyu.classes.kernel.Map({row: _this.mapData.length,col: _this.mapData[0].length,chipWidth: 32,chipHeight: 32,mapData: _this.mapData,mapOnData: _this.mapOnData});\n'+
        '        \n'+
        '      }\n'+
        '      $LASTPOS=19001695;\n'+
        '      _this.panel=new Tonyu.classes.kernel.Panel({width: Tonyu.globals.$map.col*32,height: Tonyu.globals.$map.row*32,zOrder: 100});\n'+
        '      $LASTPOS=19001766;\n'+
        '      _this.panel.x=_this.panel.width/2;\n'+
        '      $LASTPOS=19001794;\n'+
        '      _this.panel.y=_this.panel.height/2;\n'+
        '      $LASTPOS=19001823;\n'+
        '      _this.panel.setFillStyle("cyan");\n'+
        '      $LASTPOS=19001856;\n'+
        '      _this.panel.fillRect(0,0,_this.panel.width,_this.panel.height);\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=19001906;\n'+
        '    Tonyu.globals.$mp=new Tonyu.classes.kernel.Map({row: 16,col: 8,chipWidth: 32,chipHeight: 32});\n'+
        '    $LASTPOS=19001961;\n'+
        '    _this.counter=0;\n'+
        '    $LASTPOS=19001973;\n'+
        '    $LASTPOS=19001977;\n'+
        '    i = 0;\n'+
        '    while(i<16) {\n'+
        '      {\n'+
        '        $LASTPOS=19002001;\n'+
        '        $LASTPOS=19002005;\n'+
        '        j = 0;\n'+
        '        while(j<8) {\n'+
        '          {\n'+
        '            $LASTPOS=19002032;\n'+
        '            Tonyu.globals.$mp.set(j,i,Tonyu.globals.$pat_mapchip+_this.counter);\n'+
        '            $LASTPOS=19002076;\n'+
        '            _this.counter++;\n'+
        '          }\n'+
        '          j++;\n'+
        '        }\n'+
        '      }\n'+
        '      i++;\n'+
        '    }\n'+
        '    $LASTPOS=19002098;\n'+
        '    _this.mode="get";\n'+
        '    $LASTPOS=19002111;\n'+
        '    _this.prevMode="set";\n'+
        '    $LASTPOS=19002128;\n'+
        '    _this.mapp=0;\n'+
        '    $LASTPOS=19002137;\n'+
        '    _this.mx=0;\n'+
        '    $LASTPOS=19002144;\n'+
        '    _this.my=0;\n'+
        '    $LASTPOS=19002151;\n'+
        '    _this.chipX=0;\n'+
        '    $LASTPOS=19002161;\n'+
        '    _this.chipY=0;\n'+
        '    $LASTPOS=19002171;\n'+
        '    _this.x=Tonyu.globals.$screenWidth-16;\n'+
        '    $LASTPOS=19002191;\n'+
        '    _this.y=Tonyu.globals.$screenHeight-16;\n'+
        '    $LASTPOS=19002212;\n'+
        '    while (true) {\n'+
        '      $LASTPOS=19002230;\n'+
        '      _this.p=_this.mapp;\n'+
        '      $LASTPOS=19002243;\n'+
        '      if (_this.getkey("e")==1) {\n'+
        '        $LASTPOS=19002272;\n'+
        '        Tonyu.globals.$mp.scrollTo(1000,1000);\n'+
        '        $LASTPOS=19002306;\n'+
        '        _this.mode="erase";\n'+
        '        $LASTPOS=19002329;\n'+
        '        _this.print(_this.mode+" mode");\n'+
        '        \n'+
        '      }\n'+
        '      $LASTPOS=19002362;\n'+
        '      if (_this.getkey("s")==1) {\n'+
        '        $LASTPOS=19002391;\n'+
        '        Tonyu.globals.$mp.scrollTo(1000,1000);\n'+
        '        $LASTPOS=19002425;\n'+
        '        if (_this.mode=="set") {\n'+
        '          $LASTPOS=19002455;\n'+
        '          _this.mode="setOn";\n'+
        '          \n'+
        '        } else {\n'+
        '          $LASTPOS=19002498;\n'+
        '          _this.mode="set";\n'+
        '          \n'+
        '        }\n'+
        '        $LASTPOS=19002530;\n'+
        '        _this.print(_this.mode+" mode");\n'+
        '        \n'+
        '      }\n'+
        '      $LASTPOS=19002563;\n'+
        '      if (_this.getkey("o")==1) {\n'+
        '        $LASTPOS=19002592;\n'+
        '        Tonyu.globals.$mp.scrollTo(1000,1000);\n'+
        '        $LASTPOS=19002626;\n'+
        '        _this.mode="setOn";\n'+
        '        \n'+
        '      }\n'+
        '      $LASTPOS=19002652;\n'+
        '      if (_this.getkey("g")==1) {\n'+
        '        $LASTPOS=19002681;\n'+
        '        if (_this.mode!="get") {\n'+
        '          $LASTPOS=19002711;\n'+
        '          _this.prevMode=_this.mode;\n'+
        '          $LASTPOS=19002739;\n'+
        '          Tonyu.globals.$mp.scrollTo(0,0);\n'+
        '          $LASTPOS=19002771;\n'+
        '          _this.mode="get";\n'+
        '          $LASTPOS=19002796;\n'+
        '          _this.chipX=0;\n'+
        '          $LASTPOS=19002818;\n'+
        '          _this.chipY=0;\n'+
        '          \n'+
        '        } else {\n'+
        '          $LASTPOS=19002856;\n'+
        '          Tonyu.globals.$mp.scrollTo(1000,1000);\n'+
        '          $LASTPOS=19002894;\n'+
        '          _this.mode=_this.prevMode;\n'+
        '          \n'+
        '        }\n'+
        '        $LASTPOS=19002929;\n'+
        '        _this.print(_this.mode+" mode");\n'+
        '        \n'+
        '      }\n'+
        '      $LASTPOS=19002962;\n'+
        '      if (_this.getkey("p")==1) {\n'+
        '        $LASTPOS=19003006;\n'+
        '        _this.saveFileName=prompt("input json file(*.json)","map.json");\n'+
        '        $LASTPOS=19003495;\n'+
        '        _this.saveDataFile=_this.file("../maps/").rel(_this.saveFileName);\n'+
        '        $LASTPOS=19003553;\n'+
        '        _this.data=[Tonyu.globals.$map.mapTable,Tonyu.globals.$map.mapOnTable];\n'+
        '        $LASTPOS=19003668;\n'+
        '        _this.saveDataFile.obj(_this.data);\n'+
        '        $LASTPOS=19003701;\n'+
        '        _this.print(_this.saveFileName+" Saved");\n'+
        '        \n'+
        '      }\n'+
        '      $LASTPOS=19003793;\n'+
        '      if (_this.getkey("c")==1) {\n'+
        '        $LASTPOS=19003822;\n'+
        '        Tonyu.globals.$mp.scrollTo(1000,1000);\n'+
        '        $LASTPOS=19003856;\n'+
        '        _this.mode="spuit";\n'+
        '        $LASTPOS=19003879;\n'+
        '        _this.print(_this.mode+" mode");\n'+
        '        \n'+
        '      }\n'+
        '      $LASTPOS=19003912;\n'+
        '      if (_this.mode!="get") {\n'+
        '        $LASTPOS=19003938;\n'+
        '        if (_this.getkey("left")>0) {\n'+
        '          $LASTPOS=19003959;\n'+
        '          _this.mx=_this.mx+8;\n'+
        '        }\n'+
        '        $LASTPOS=19003977;\n'+
        '        if (_this.getkey("right")>0) {\n'+
        '          $LASTPOS=19003999;\n'+
        '          _this.mx=_this.mx-8;\n'+
        '        }\n'+
        '        $LASTPOS=19004017;\n'+
        '        if (_this.getkey("up")>0) {\n'+
        '          $LASTPOS=19004036;\n'+
        '          _this.my=_this.my+8;\n'+
        '        }\n'+
        '        $LASTPOS=19004054;\n'+
        '        if (_this.getkey("down")>0) {\n'+
        '          $LASTPOS=19004075;\n'+
        '          _this.my=_this.my-8;\n'+
        '        }\n'+
        '        $LASTPOS=19004093;\n'+
        '        Tonyu.globals.$map.scrollTo(_this.mx,_this.my);\n'+
        '        \n'+
        '      } else {\n'+
        '        $LASTPOS=19004136;\n'+
        '        if (_this.getkey("left")>0) {\n'+
        '          $LASTPOS=19004157;\n'+
        '          _this.chipX=_this.chipX+8;\n'+
        '        }\n'+
        '        $LASTPOS=19004181;\n'+
        '        if (_this.getkey("right")>0) {\n'+
        '          $LASTPOS=19004203;\n'+
        '          _this.chipX=_this.chipX-8;\n'+
        '        }\n'+
        '        $LASTPOS=19004227;\n'+
        '        if (_this.getkey("up")>0) {\n'+
        '          $LASTPOS=19004246;\n'+
        '          _this.chipY=_this.chipY+8;\n'+
        '        }\n'+
        '        $LASTPOS=19004270;\n'+
        '        if (_this.getkey("down")>0) {\n'+
        '          $LASTPOS=19004291;\n'+
        '          _this.chipY=_this.chipY-8;\n'+
        '        }\n'+
        '        $LASTPOS=19004315;\n'+
        '        Tonyu.globals.$mp.scrollTo(_this.chipX,_this.chipY);\n'+
        '        \n'+
        '      }\n'+
        '      $LASTPOS=19004354;\n'+
        '      _this.panel.x=_this.panel.width/2-_this.mx;\n'+
        '      $LASTPOS=19004385;\n'+
        '      _this.panel.y=_this.panel.height/2-_this.my;\n'+
        '      $LASTPOS=19004417;\n'+
        '      if (_this.mode=="set"&&_this.getkey(1)>0) {\n'+
        '        $LASTPOS=19004458;\n'+
        '        Tonyu.globals.$map.setAt(Tonyu.globals.$mouseX+_this.mx,Tonyu.globals.$mouseY+_this.my,_this.mapp);\n'+
        '        $LASTPOS=19004507;\n'+
        '        Tonyu.globals.$map.setOnAt(Tonyu.globals.$mouseX+_this.mx,Tonyu.globals.$mouseY+_this.my,- 1);\n'+
        '        \n'+
        '      } else {\n'+
        '        $LASTPOS=19004558;\n'+
        '        if (_this.mode=="erase"&&_this.getkey(1)>0) {\n'+
        '          $LASTPOS=19004601;\n'+
        '          Tonyu.globals.$map.setAt(Tonyu.globals.$mouseX+_this.mx,Tonyu.globals.$mouseY+_this.my,- 1);\n'+
        '          \n'+
        '        } else {\n'+
        '          $LASTPOS=19004650;\n'+
        '          if (_this.mode=="get"&&_this.getkey(1)>0) {\n'+
        '            $LASTPOS=19004691;\n'+
        '            _this.mapp=Tonyu.globals.$mp.getAt(Tonyu.globals.$mouseX+_this.chipX,Tonyu.globals.$mouseY+_this.chipY);\n'+
        '            $LASTPOS=19004745;\n'+
        '            _this.mode=_this.prevMode;\n'+
        '            $LASTPOS=19004769;\n'+
        '            Tonyu.globals.$mp.scrollTo(1000,1000);\n'+
        '            $LASTPOS=19004803;\n'+
        '            _this.print(_this.mode+" mode");\n'+
        '            $LASTPOS=19004833;\n'+
        '            _this.updateEx(10);\n'+
        '            \n'+
        '          } else {\n'+
        '            $LASTPOS=19004858;\n'+
        '            if (_this.mode=="setOn"&&_this.getkey(1)>0) {\n'+
        '              $LASTPOS=19004901;\n'+
        '              Tonyu.globals.$map.setOnAt(Tonyu.globals.$mouseX+_this.mx,Tonyu.globals.$mouseY+_this.my,_this.mapp);\n'+
        '              \n'+
        '            } else {\n'+
        '              $LASTPOS=19004954;\n'+
        '              if (_this.mode=="spuit"&&_this.getkey(1)>0) {\n'+
        '                $LASTPOS=19004997;\n'+
        '                _this.mapp=Tonyu.globals.$map.getAt(Tonyu.globals.$mouseX+_this.mx,Tonyu.globals.$mouseY+_this.my);\n'+
        '                $LASTPOS=19005046;\n'+
        '                _this.mode="set";\n'+
        '                $LASTPOS=19005067;\n'+
        '                _this.print(_this.mode+" mode");\n'+
        '                $LASTPOS=19005097;\n'+
        '                _this.updateEx(10);\n'+
        '                \n'+
        '              }\n'+
        '            }\n'+
        '          }\n'+
        '        }\n'+
        '      }\n'+
        '      $LASTPOS=19005123;\n'+
        '      _this.update();\n'+
        '      \n'+
        '    }\n'+
        '  },\n'+
        '  fiber$main :function _trc_func_19000000_1(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var i;\n'+
        '    var j;\n'+
        '    \n'+
        '    $LASTPOS=19000032;\n'+
        '    _this.loadMode=false;\n'+
        '    $LASTPOS=19000049;\n'+
        '    _this.print("Load Data?: Y or N");\n'+
        '    \n'+
        '    _thread.enter(function _trc_func_19000000_2(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=19000079;\n'+
        '        case 1:\n'+
        '          $LASTPOS=19000097;\n'+
        '          if (!(_this.getkey("y")>0)) { __pc=2; break; }\n'+
        '          $LASTPOS=19000125;\n'+
        '          _this.loadMode=true;\n'+
        '          __pc=5; break;\n'+
        '          \n'+
        '        case 2:\n'+
        '          \n'+
        '          $LASTPOS=19000168;\n'+
        '          if (!(_this.getkey("n")>0)) { __pc=3; break; }\n'+
        '          $LASTPOS=19000196;\n'+
        '          _this.loadMode=false;\n'+
        '          __pc=5; break;\n'+
        '          \n'+
        '        case 3:\n'+
        '          \n'+
        '          $LASTPOS=19000240;\n'+
        '          _this.fiber$update(_thread);\n'+
        '          __pc=4;return;\n'+
        '        case 4:\n'+
        '          \n'+
        '          __pc=1;break;\n'+
        '        case 5:\n'+
        '          \n'+
        '          $LASTPOS=19000254;\n'+
        '          if (!(_this.loadMode)) { __pc=9; break; }\n'+
        '          $LASTPOS=19000273;\n'+
        '          _this.fileName=prompt("Input json file (*.json)","map.json");\n'+
        '          $LASTPOS=19000334;\n'+
        '          if (_this.fileName) {\n'+
        '            $LASTPOS=19000357;\n'+
        '            _this.mapDataFile=_this.file("../maps/").rel(_this.fileName);\n'+
        '            \n'+
        '          }\n'+
        '          $LASTPOS=19000413;\n'+
        '          if (!(_this.mapDataFile.obj())) { __pc=6; break; }\n'+
        '          {\n'+
        '            $LASTPOS=19000445;\n'+
        '            _this.baseData=_this.mapDataFile.obj();\n'+
        '          }\n'+
        '          __pc=8;break;\n'+
        '        case 6:\n'+
        '          $LASTPOS=19000494;\n'+
        '          _this.fiber$file(_thread, _this.fileName);\n'+
        '          __pc=7;return;\n'+
        '        case 7:\n'+
        '          _this.mapDataFile=_thread.retVal;\n'+
        '          \n'+
        '          $LASTPOS=19000531;\n'+
        '          if (_this.mapDataFile.obj()) {\n'+
        '            $LASTPOS=19000567;\n'+
        '            _this.baseData=_this.mapDataFile.obj();\n'+
        '            \n'+
        '          }\n'+
        '        case 8:\n'+
        '          \n'+
        '          $LASTPOS=19000618;\n'+
        '          if (_this.baseData==undefined) {\n'+
        '            $LASTPOS=19000652;\n'+
        '            _this.print("Load failed");\n'+
        '            $LASTPOS=19000683;\n'+
        '            _this.loadMode=false;\n'+
        '            \n'+
        '          } else {\n'+
        '            $LASTPOS=19000710;\n'+
        '            if (_this.baseData[0]&&_this.baseData[1]) {\n'+
        '              $LASTPOS=19000751;\n'+
        '              _this.mapData=_this.baseData[0];\n'+
        '              $LASTPOS=19000781;\n'+
        '              _this.mapOnData=_this.baseData[1];\n'+
        '              \n'+
        '            }\n'+
        '          }\n'+
        '        case 9:\n'+
        '          \n'+
        '          $LASTPOS=19000815;\n'+
        '          _this.fiber$update(_thread);\n'+
        '          __pc=10;return;\n'+
        '        case 10:\n'+
        '          \n'+
        '          $LASTPOS=19001093;\n'+
        '          if (!(! _this.loadMode)) { __pc=12; break; }\n'+
        '          $LASTPOS=19001113;\n'+
        '          _this.row=prompt("input row");\n'+
        '          $LASTPOS=19001143;\n'+
        '          _this.fiber$update(_thread);\n'+
        '          __pc=11;return;\n'+
        '        case 11:\n'+
        '          \n'+
        '          $LASTPOS=19001158;\n'+
        '          _this.col=prompt("input col");\n'+
        '          $LASTPOS=19001188;\n'+
        '          _this.panel=new Tonyu.classes.kernel.Panel({width: _this.col*32,height: _this.row*32});\n'+
        '          $LASTPOS=19001238;\n'+
        '          _this.panel.x=_this.panel.width/2+10;\n'+
        '          $LASTPOS=19001269;\n'+
        '          _this.panel.y=_this.panel.height/2;\n'+
        '          $LASTPOS=19001298;\n'+
        '          _this.panel.setFillStyle("cyan");\n'+
        '          $LASTPOS=19001331;\n'+
        '          _this.panel.fillRect(0,0,_this.panel.width,_this.panel.height);\n'+
        '          $LASTPOS=19001382;\n'+
        '          Tonyu.globals.$map=new Tonyu.classes.kernel.Map({row: _this.row,col: _this.col,chipWidth: 32,chipHeight: 32});\n'+
        '          __pc=13;break;\n'+
        '        case 12:\n'+
        '          {\n'+
        '            $LASTPOS=19001445;\n'+
        '            if (! _this.mapOnData) {\n'+
        '              $LASTPOS=19001470;\n'+
        '              Tonyu.globals.$map=new Tonyu.classes.kernel.Map({row: _this.mapData.length,col: _this.mapData[0].length,chipWidth: 32,chipHeight: 32,mapData: _this.mapData});\n'+
        '              \n'+
        '            } else {\n'+
        '              $LASTPOS=19001582;\n'+
        '              Tonyu.globals.$map=new Tonyu.classes.kernel.Map({row: _this.mapData.length,col: _this.mapData[0].length,chipWidth: 32,chipHeight: 32,mapData: _this.mapData,mapOnData: _this.mapOnData});\n'+
        '              \n'+
        '            }\n'+
        '            $LASTPOS=19001695;\n'+
        '            _this.panel=new Tonyu.classes.kernel.Panel({width: Tonyu.globals.$map.col*32,height: Tonyu.globals.$map.row*32,zOrder: 100});\n'+
        '            $LASTPOS=19001766;\n'+
        '            _this.panel.x=_this.panel.width/2;\n'+
        '            $LASTPOS=19001794;\n'+
        '            _this.panel.y=_this.panel.height/2;\n'+
        '            $LASTPOS=19001823;\n'+
        '            _this.panel.setFillStyle("cyan");\n'+
        '            $LASTPOS=19001856;\n'+
        '            _this.panel.fillRect(0,0,_this.panel.width,_this.panel.height);\n'+
        '          }\n'+
        '        case 13:\n'+
        '          \n'+
        '          $LASTPOS=19001906;\n'+
        '          Tonyu.globals.$mp=new Tonyu.classes.kernel.Map({row: 16,col: 8,chipWidth: 32,chipHeight: 32});\n'+
        '          $LASTPOS=19001961;\n'+
        '          _this.counter=0;\n'+
        '          $LASTPOS=19001973;\n'+
        '          $LASTPOS=19001977;\n'+
        '          i = 0;\n'+
        '          while(i<16) {\n'+
        '            {\n'+
        '              $LASTPOS=19002001;\n'+
        '              $LASTPOS=19002005;\n'+
        '              j = 0;\n'+
        '              while(j<8) {\n'+
        '                {\n'+
        '                  $LASTPOS=19002032;\n'+
        '                  Tonyu.globals.$mp.set(j,i,Tonyu.globals.$pat_mapchip+_this.counter);\n'+
        '                  $LASTPOS=19002076;\n'+
        '                  _this.counter++;\n'+
        '                }\n'+
        '                j++;\n'+
        '              }\n'+
        '            }\n'+
        '            i++;\n'+
        '          }\n'+
        '          $LASTPOS=19002098;\n'+
        '          _this.mode="get";\n'+
        '          $LASTPOS=19002111;\n'+
        '          _this.prevMode="set";\n'+
        '          $LASTPOS=19002128;\n'+
        '          _this.mapp=0;\n'+
        '          $LASTPOS=19002137;\n'+
        '          _this.mx=0;\n'+
        '          $LASTPOS=19002144;\n'+
        '          _this.my=0;\n'+
        '          $LASTPOS=19002151;\n'+
        '          _this.chipX=0;\n'+
        '          $LASTPOS=19002161;\n'+
        '          _this.chipY=0;\n'+
        '          $LASTPOS=19002171;\n'+
        '          _this.x=Tonyu.globals.$screenWidth-16;\n'+
        '          $LASTPOS=19002191;\n'+
        '          _this.y=Tonyu.globals.$screenHeight-16;\n'+
        '          $LASTPOS=19002212;\n'+
        '        case 14:\n'+
        '          $LASTPOS=19002230;\n'+
        '          _this.p=_this.mapp;\n'+
        '          $LASTPOS=19002243;\n'+
        '          if (_this.getkey("e")==1) {\n'+
        '            $LASTPOS=19002272;\n'+
        '            Tonyu.globals.$mp.scrollTo(1000,1000);\n'+
        '            $LASTPOS=19002306;\n'+
        '            _this.mode="erase";\n'+
        '            $LASTPOS=19002329;\n'+
        '            _this.print(_this.mode+" mode");\n'+
        '            \n'+
        '          }\n'+
        '          $LASTPOS=19002362;\n'+
        '          if (_this.getkey("s")==1) {\n'+
        '            $LASTPOS=19002391;\n'+
        '            Tonyu.globals.$mp.scrollTo(1000,1000);\n'+
        '            $LASTPOS=19002425;\n'+
        '            if (_this.mode=="set") {\n'+
        '              $LASTPOS=19002455;\n'+
        '              _this.mode="setOn";\n'+
        '              \n'+
        '            } else {\n'+
        '              $LASTPOS=19002498;\n'+
        '              _this.mode="set";\n'+
        '              \n'+
        '            }\n'+
        '            $LASTPOS=19002530;\n'+
        '            _this.print(_this.mode+" mode");\n'+
        '            \n'+
        '          }\n'+
        '          $LASTPOS=19002563;\n'+
        '          if (_this.getkey("o")==1) {\n'+
        '            $LASTPOS=19002592;\n'+
        '            Tonyu.globals.$mp.scrollTo(1000,1000);\n'+
        '            $LASTPOS=19002626;\n'+
        '            _this.mode="setOn";\n'+
        '            \n'+
        '          }\n'+
        '          $LASTPOS=19002652;\n'+
        '          if (_this.getkey("g")==1) {\n'+
        '            $LASTPOS=19002681;\n'+
        '            if (_this.mode!="get") {\n'+
        '              $LASTPOS=19002711;\n'+
        '              _this.prevMode=_this.mode;\n'+
        '              $LASTPOS=19002739;\n'+
        '              Tonyu.globals.$mp.scrollTo(0,0);\n'+
        '              $LASTPOS=19002771;\n'+
        '              _this.mode="get";\n'+
        '              $LASTPOS=19002796;\n'+
        '              _this.chipX=0;\n'+
        '              $LASTPOS=19002818;\n'+
        '              _this.chipY=0;\n'+
        '              \n'+
        '            } else {\n'+
        '              $LASTPOS=19002856;\n'+
        '              Tonyu.globals.$mp.scrollTo(1000,1000);\n'+
        '              $LASTPOS=19002894;\n'+
        '              _this.mode=_this.prevMode;\n'+
        '              \n'+
        '            }\n'+
        '            $LASTPOS=19002929;\n'+
        '            _this.print(_this.mode+" mode");\n'+
        '            \n'+
        '          }\n'+
        '          $LASTPOS=19002962;\n'+
        '          if (_this.getkey("p")==1) {\n'+
        '            $LASTPOS=19003006;\n'+
        '            _this.saveFileName=prompt("input json file(*.json)","map.json");\n'+
        '            $LASTPOS=19003495;\n'+
        '            _this.saveDataFile=_this.file("../maps/").rel(_this.saveFileName);\n'+
        '            $LASTPOS=19003553;\n'+
        '            _this.data=[Tonyu.globals.$map.mapTable,Tonyu.globals.$map.mapOnTable];\n'+
        '            $LASTPOS=19003668;\n'+
        '            _this.saveDataFile.obj(_this.data);\n'+
        '            $LASTPOS=19003701;\n'+
        '            _this.print(_this.saveFileName+" Saved");\n'+
        '            \n'+
        '          }\n'+
        '          $LASTPOS=19003793;\n'+
        '          if (_this.getkey("c")==1) {\n'+
        '            $LASTPOS=19003822;\n'+
        '            Tonyu.globals.$mp.scrollTo(1000,1000);\n'+
        '            $LASTPOS=19003856;\n'+
        '            _this.mode="spuit";\n'+
        '            $LASTPOS=19003879;\n'+
        '            _this.print(_this.mode+" mode");\n'+
        '            \n'+
        '          }\n'+
        '          $LASTPOS=19003912;\n'+
        '          if (_this.mode!="get") {\n'+
        '            $LASTPOS=19003938;\n'+
        '            if (_this.getkey("left")>0) {\n'+
        '              $LASTPOS=19003959;\n'+
        '              _this.mx=_this.mx+8;\n'+
        '            }\n'+
        '            $LASTPOS=19003977;\n'+
        '            if (_this.getkey("right")>0) {\n'+
        '              $LASTPOS=19003999;\n'+
        '              _this.mx=_this.mx-8;\n'+
        '            }\n'+
        '            $LASTPOS=19004017;\n'+
        '            if (_this.getkey("up")>0) {\n'+
        '              $LASTPOS=19004036;\n'+
        '              _this.my=_this.my+8;\n'+
        '            }\n'+
        '            $LASTPOS=19004054;\n'+
        '            if (_this.getkey("down")>0) {\n'+
        '              $LASTPOS=19004075;\n'+
        '              _this.my=_this.my-8;\n'+
        '            }\n'+
        '            $LASTPOS=19004093;\n'+
        '            Tonyu.globals.$map.scrollTo(_this.mx,_this.my);\n'+
        '            \n'+
        '          } else {\n'+
        '            $LASTPOS=19004136;\n'+
        '            if (_this.getkey("left")>0) {\n'+
        '              $LASTPOS=19004157;\n'+
        '              _this.chipX=_this.chipX+8;\n'+
        '            }\n'+
        '            $LASTPOS=19004181;\n'+
        '            if (_this.getkey("right")>0) {\n'+
        '              $LASTPOS=19004203;\n'+
        '              _this.chipX=_this.chipX-8;\n'+
        '            }\n'+
        '            $LASTPOS=19004227;\n'+
        '            if (_this.getkey("up")>0) {\n'+
        '              $LASTPOS=19004246;\n'+
        '              _this.chipY=_this.chipY+8;\n'+
        '            }\n'+
        '            $LASTPOS=19004270;\n'+
        '            if (_this.getkey("down")>0) {\n'+
        '              $LASTPOS=19004291;\n'+
        '              _this.chipY=_this.chipY-8;\n'+
        '            }\n'+
        '            $LASTPOS=19004315;\n'+
        '            Tonyu.globals.$mp.scrollTo(_this.chipX,_this.chipY);\n'+
        '            \n'+
        '          }\n'+
        '          $LASTPOS=19004354;\n'+
        '          _this.panel.x=_this.panel.width/2-_this.mx;\n'+
        '          $LASTPOS=19004385;\n'+
        '          _this.panel.y=_this.panel.height/2-_this.my;\n'+
        '          $LASTPOS=19004417;\n'+
        '          if (!(_this.mode=="set"&&_this.getkey(1)>0)) { __pc=15; break; }\n'+
        '          {\n'+
        '            $LASTPOS=19004458;\n'+
        '            Tonyu.globals.$map.setAt(Tonyu.globals.$mouseX+_this.mx,Tonyu.globals.$mouseY+_this.my,_this.mapp);\n'+
        '            $LASTPOS=19004507;\n'+
        '            Tonyu.globals.$map.setOnAt(Tonyu.globals.$mouseX+_this.mx,Tonyu.globals.$mouseY+_this.my,- 1);\n'+
        '          }\n'+
        '          __pc=25;break;\n'+
        '        case 15:\n'+
        '          $LASTPOS=19004558;\n'+
        '          if (!(_this.mode=="erase"&&_this.getkey(1)>0)) { __pc=16; break; }\n'+
        '          {\n'+
        '            $LASTPOS=19004601;\n'+
        '            Tonyu.globals.$map.setAt(Tonyu.globals.$mouseX+_this.mx,Tonyu.globals.$mouseY+_this.my,- 1);\n'+
        '          }\n'+
        '          __pc=24;break;\n'+
        '        case 16:\n'+
        '          $LASTPOS=19004650;\n'+
        '          if (!(_this.mode=="get"&&_this.getkey(1)>0)) { __pc=18; break; }\n'+
        '          $LASTPOS=19004691;\n'+
        '          _this.mapp=Tonyu.globals.$mp.getAt(Tonyu.globals.$mouseX+_this.chipX,Tonyu.globals.$mouseY+_this.chipY);\n'+
        '          $LASTPOS=19004745;\n'+
        '          _this.mode=_this.prevMode;\n'+
        '          $LASTPOS=19004769;\n'+
        '          Tonyu.globals.$mp.scrollTo(1000,1000);\n'+
        '          $LASTPOS=19004803;\n'+
        '          _this.print(_this.mode+" mode");\n'+
        '          $LASTPOS=19004833;\n'+
        '          _this.fiber$updateEx(_thread, 10);\n'+
        '          __pc=17;return;\n'+
        '        case 17:\n'+
        '          \n'+
        '          __pc=23;break;\n'+
        '        case 18:\n'+
        '          $LASTPOS=19004858;\n'+
        '          if (!(_this.mode=="setOn"&&_this.getkey(1)>0)) { __pc=19; break; }\n'+
        '          {\n'+
        '            $LASTPOS=19004901;\n'+
        '            Tonyu.globals.$map.setOnAt(Tonyu.globals.$mouseX+_this.mx,Tonyu.globals.$mouseY+_this.my,_this.mapp);\n'+
        '          }\n'+
        '          __pc=22;break;\n'+
        '        case 19:\n'+
        '          $LASTPOS=19004954;\n'+
        '          if (!(_this.mode=="spuit"&&_this.getkey(1)>0)) { __pc=21; break; }\n'+
        '          $LASTPOS=19004997;\n'+
        '          _this.mapp=Tonyu.globals.$map.getAt(Tonyu.globals.$mouseX+_this.mx,Tonyu.globals.$mouseY+_this.my);\n'+
        '          $LASTPOS=19005046;\n'+
        '          _this.mode="set";\n'+
        '          $LASTPOS=19005067;\n'+
        '          _this.print(_this.mode+" mode");\n'+
        '          $LASTPOS=19005097;\n'+
        '          _this.fiber$updateEx(_thread, 10);\n'+
        '          __pc=20;return;\n'+
        '        case 20:\n'+
        '          \n'+
        '        case 21:\n'+
        '          \n'+
        '        case 22:\n'+
        '          \n'+
        '        case 23:\n'+
        '          \n'+
        '        case 24:\n'+
        '          \n'+
        '        case 25:\n'+
        '          \n'+
        '          $LASTPOS=19005123;\n'+
        '          _this.fiber$update(_thread);\n'+
        '          __pc=26;return;\n'+
        '        case 26:\n'+
        '          \n'+
        '          __pc=14;break;\n'+
        '        case 27:\n'+
        '          \n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  __dummy: false\n'+
        '});\n'+
        'Tonyu.klass.addMeta(Tonyu.classes.kernel.MapEditor,{"fullName":"kernel.MapEditor","namespace":"kernel","shortName":"MapEditor","decls":{"methods":{"main":{"nowait":false}}}});\n'+
        '\n'+
        'Tonyu.klass.ensureNamespace(Tonyu.classes,\'kernel\');\n'+
        'Tonyu.classes.kernel.Pad=Tonyu.klass(Tonyu.classes.kernel.Actor,[],{\n'+
        '  main :function _trc_func_20000000_0() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=20001202;\n'+
        '    _this.APAD_DIAG_SIZE=96;\n'+
        '    $LASTPOS=20003465;\n'+
        '    while (true) {\n'+
        '      $LASTPOS=20003484;\n'+
        '      _this.padUpdate();\n'+
        '      $LASTPOS=20003502;\n'+
        '      _this.update();\n'+
        '      \n'+
        '    }\n'+
        '  },\n'+
        '  fiber$main :function _trc_func_20000000_1(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=20001202;\n'+
        '    _this.APAD_DIAG_SIZE=96;\n'+
        '    \n'+
        '    _thread.enter(function _trc_func_20000000_2(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=20003465;\n'+
        '        case 1:\n'+
        '          $LASTPOS=20003484;\n'+
        '          _this.fiber$padUpdate(_thread);\n'+
        '          __pc=2;return;\n'+
        '        case 2:\n'+
        '          \n'+
        '          $LASTPOS=20003502;\n'+
        '          _this.fiber$update(_thread);\n'+
        '          __pc=3;return;\n'+
        '        case 3:\n'+
        '          \n'+
        '          __pc=1;break;\n'+
        '        case 4:\n'+
        '          \n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  initialize :function _trc_func_20000016_3(opt) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=20000033;\n'+
        '    Tonyu.classes.kernel.Actor.apply( _this, [opt]);\n'+
        '    $LASTPOS=20000050;\n'+
        '    _this.padImageP=Tonyu.globals.$pat_inputPad;\n'+
        '    $LASTPOS=20000082;\n'+
        '    _this.jujiKey=new Tonyu.classes.kernel.Actor({x: 96+1,y: Tonyu.globals.$screenHeight-96-1,p: _this.padImageP+0,zOrder: - 9,layer: Tonyu.globals.$FrontSprites});\n'+
        '    $LASTPOS=20000183;\n'+
        '    _this.no1Key=new Tonyu.classes.kernel.Actor({x: Tonyu.globals.$screenWidth-96,y: Tonyu.globals.$screenHeight-96,p: _this.padImageP+1,zOrder: - 9,layer: Tonyu.globals.$FrontSprites});\n'+
        '    $LASTPOS=20000292;\n'+
        '    _this.jujiKey.show();\n'+
        '    $LASTPOS=20000313;\n'+
        '    _this.no1Key.show();\n'+
        '    $LASTPOS=20000339;\n'+
        '    _this.jujiKeyPushU=new Tonyu.classes.kernel.Actor({x: _this.jujiKey.x,y: _this.jujiKey.y-60,p: _this.padImageP+2,zOrder: - 10,layer: Tonyu.globals.$FrontSprites});\n'+
        '    $LASTPOS=20000446;\n'+
        '    _this.jujiKeyPushL=new Tonyu.classes.kernel.Actor({x: _this.jujiKey.x-60,y: _this.jujiKey.y,p: _this.padImageP+2,zOrder: - 10,layer: Tonyu.globals.$FrontSprites});\n'+
        '    $LASTPOS=20000553;\n'+
        '    _this.jujiKeyPushR=new Tonyu.classes.kernel.Actor({x: _this.jujiKey.x+60,y: _this.jujiKey.y,p: _this.padImageP+2,zOrder: - 10,layer: Tonyu.globals.$FrontSprites});\n'+
        '    $LASTPOS=20000660;\n'+
        '    _this.jujiKeyPushD=new Tonyu.classes.kernel.Actor({x: _this.jujiKey.x,y: _this.jujiKey.y+60,p: _this.padImageP+2,zOrder: - 10,layer: Tonyu.globals.$FrontSprites});\n'+
        '    $LASTPOS=20000767;\n'+
        '    _this.jujiKeyPush1=new Tonyu.classes.kernel.Actor({x: _this.no1Key.x,y: _this.no1Key.y,p: _this.padImageP+2,scaleX: 2,zOrder: - 10,layer: Tonyu.globals.$FrontSprites});\n'+
        '    $LASTPOS=20000879;\n'+
        '    _this.jujiKeyPushU.hide();\n'+
        '    $LASTPOS=20000905;\n'+
        '    _this.jujiKeyPushL.hide();\n'+
        '    $LASTPOS=20000931;\n'+
        '    _this.jujiKeyPushR.hide();\n'+
        '    $LASTPOS=20000957;\n'+
        '    _this.jujiKeyPushD.hide();\n'+
        '    $LASTPOS=20000983;\n'+
        '    _this.jujiKeyPush1.hide();\n'+
        '  },\n'+
        '  die :function _trc_func_20001008_4() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=20001021;\n'+
        '    _this.jujiKey.die();\n'+
        '    $LASTPOS=20001041;\n'+
        '    _this.no1Key.die();\n'+
        '    $LASTPOS=20001060;\n'+
        '    _this.jujiKeyPushU.die();\n'+
        '    $LASTPOS=20001085;\n'+
        '    _this.jujiKeyPushL.die();\n'+
        '    $LASTPOS=20001110;\n'+
        '    _this.jujiKeyPushR.die();\n'+
        '    $LASTPOS=20001135;\n'+
        '    _this.jujiKeyPushD.die();\n'+
        '    $LASTPOS=20001160;\n'+
        '    _this.jujiKeyPush1.die();\n'+
        '    $LASTPOS=20001185;\n'+
        '    Tonyu.classes.kernel.Actor.prototype.die.apply( _this, []);\n'+
        '  },\n'+
        '  padUpdate :function _trc_func_20001224_5() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var i;\n'+
        '    var t;\n'+
        '    \n'+
        '    $LASTPOS=20001258;\n'+
        '    _this.keyPushL=0;\n'+
        '    $LASTPOS=20001277;\n'+
        '    _this.keyPushR=0;\n'+
        '    $LASTPOS=20001296;\n'+
        '    _this.keyPushU=0;\n'+
        '    $LASTPOS=20001315;\n'+
        '    _this.keyPushD=0;\n'+
        '    $LASTPOS=20001334;\n'+
        '    _this.keyPush1=0;\n'+
        '    $LASTPOS=20001359;\n'+
        '    _this.padKeyNotapCnt++;\n'+
        '    $LASTPOS=20001383;\n'+
        '    $LASTPOS=20001388;\n'+
        '    i = 0;\n'+
        '    while(i<5) {\n'+
        '      {\n'+
        '        $LASTPOS=20001436;\n'+
        '        t = Tonyu.globals.$touches[i];\n'+
        '        $LASTPOS=20001466;\n'+
        '        if (t.touched) {\n'+
        '          $LASTPOS=20001496;\n'+
        '          if (_this.isOnRectWH(t.x,t.y,_this.jujiKey.x-32-_this.APAD_DIAG_SIZE/2,_this.jujiKey.y-32-64,64+_this.APAD_DIAG_SIZE,64)) {\n'+
        '            $LASTPOS=20001593;\n'+
        '            _this.keyPushU=1;\n'+
        '          }\n'+
        '          $LASTPOS=20001620;\n'+
        '          if (_this.isOnRectWH(t.x,t.y,_this.jujiKey.x-32-_this.APAD_DIAG_SIZE/2,_this.jujiKey.y-32+64,64+_this.APAD_DIAG_SIZE,64)) {\n'+
        '            $LASTPOS=20001717;\n'+
        '            _this.keyPushD=1;\n'+
        '          }\n'+
        '          $LASTPOS=20001744;\n'+
        '          if (_this.isOnRectWH(t.x,t.y,_this.jujiKey.x-32-64,_this.jujiKey.y-32-_this.APAD_DIAG_SIZE/2,64,64+_this.APAD_DIAG_SIZE)) {\n'+
        '            $LASTPOS=20001841;\n'+
        '            _this.keyPushL=1;\n'+
        '          }\n'+
        '          $LASTPOS=20001868;\n'+
        '          if (_this.isOnRectWH(t.x,t.y,_this.jujiKey.x-32+64,_this.jujiKey.y-32-_this.APAD_DIAG_SIZE/2,64,64+_this.APAD_DIAG_SIZE)) {\n'+
        '            $LASTPOS=20001965;\n'+
        '            _this.keyPushR=1;\n'+
        '          }\n'+
        '          $LASTPOS=20001992;\n'+
        '          if (_this.isOnRectWH(t.x,t.y,_this.no1Key.x-64,_this.no1Key.y-64,128,128)) {\n'+
        '            $LASTPOS=20002054;\n'+
        '            _this.keyPush1=1;\n'+
        '          }\n'+
        '          $LASTPOS=20002081;\n'+
        '          _this.padKeySW=1;\n'+
        '          $LASTPOS=20002108;\n'+
        '          _this.padKeyNotapCnt=0;\n'+
        '          \n'+
        '        }\n'+
        '      }\n'+
        '      i++;\n'+
        '    }\n'+
        '    $LASTPOS=20002173;\n'+
        '    if (_this.keyPushL) {\n'+
        '      $LASTPOS=20002187;\n'+
        '      _this.keyCntL++;\n'+
        '    } else {\n'+
        '      $LASTPOS=20002204;\n'+
        '      _this.keyCntL=0;\n'+
        '    }\n'+
        '    $LASTPOS=20002222;\n'+
        '    if (_this.keyPushR) {\n'+
        '      $LASTPOS=20002236;\n'+
        '      _this.keyCntR++;\n'+
        '    } else {\n'+
        '      $LASTPOS=20002253;\n'+
        '      _this.keyCntR=0;\n'+
        '    }\n'+
        '    $LASTPOS=20002271;\n'+
        '    if (_this.keyPushU) {\n'+
        '      $LASTPOS=20002285;\n'+
        '      _this.keyCntU++;\n'+
        '    } else {\n'+
        '      $LASTPOS=20002302;\n'+
        '      _this.keyCntU=0;\n'+
        '    }\n'+
        '    $LASTPOS=20002320;\n'+
        '    if (_this.keyPushD) {\n'+
        '      $LASTPOS=20002334;\n'+
        '      _this.keyCntD++;\n'+
        '    } else {\n'+
        '      $LASTPOS=20002351;\n'+
        '      _this.keyCntD=0;\n'+
        '    }\n'+
        '    $LASTPOS=20002369;\n'+
        '    if (_this.keyPush1) {\n'+
        '      $LASTPOS=20002383;\n'+
        '      _this.keyCnt1++;\n'+
        '    } else {\n'+
        '      $LASTPOS=20002400;\n'+
        '      _this.keyCnt1=0;\n'+
        '    }\n'+
        '    $LASTPOS=20002435;\n'+
        '    if (_this.keyPushL) {\n'+
        '      $LASTPOS=20002449;\n'+
        '      _this.jujiKeyPushL.show();\n'+
        '    } else {\n'+
        '      $LASTPOS=20002475;\n'+
        '      _this.jujiKeyPushL.hide();\n'+
        '    }\n'+
        '    $LASTPOS=20002501;\n'+
        '    if (_this.keyPushR) {\n'+
        '      $LASTPOS=20002515;\n'+
        '      _this.jujiKeyPushR.show();\n'+
        '    } else {\n'+
        '      $LASTPOS=20002541;\n'+
        '      _this.jujiKeyPushR.hide();\n'+
        '    }\n'+
        '    $LASTPOS=20002567;\n'+
        '    if (_this.keyPushU) {\n'+
        '      $LASTPOS=20002581;\n'+
        '      _this.jujiKeyPushU.show();\n'+
        '    } else {\n'+
        '      $LASTPOS=20002607;\n'+
        '      _this.jujiKeyPushU.hide();\n'+
        '    }\n'+
        '    $LASTPOS=20002633;\n'+
        '    if (_this.keyPushD) {\n'+
        '      $LASTPOS=20002647;\n'+
        '      _this.jujiKeyPushD.show();\n'+
        '    } else {\n'+
        '      $LASTPOS=20002673;\n'+
        '      _this.jujiKeyPushD.hide();\n'+
        '    }\n'+
        '    $LASTPOS=20002699;\n'+
        '    if (_this.keyPush1) {\n'+
        '      $LASTPOS=20002713;\n'+
        '      _this.jujiKeyPush1.show();\n'+
        '    } else {\n'+
        '      $LASTPOS=20002739;\n'+
        '      _this.jujiKeyPush1.hide();\n'+
        '    }\n'+
        '  },\n'+
        '  fiber$padUpdate :function _trc_func_20001224_6(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var i;\n'+
        '    var t;\n'+
        '    \n'+
        '    $LASTPOS=20001258;\n'+
        '    _this.keyPushL=0;\n'+
        '    $LASTPOS=20001277;\n'+
        '    _this.keyPushR=0;\n'+
        '    $LASTPOS=20001296;\n'+
        '    _this.keyPushU=0;\n'+
        '    $LASTPOS=20001315;\n'+
        '    _this.keyPushD=0;\n'+
        '    $LASTPOS=20001334;\n'+
        '    _this.keyPush1=0;\n'+
        '    $LASTPOS=20001359;\n'+
        '    _this.padKeyNotapCnt++;\n'+
        '    $LASTPOS=20001383;\n'+
        '    $LASTPOS=20001388;\n'+
        '    i = 0;\n'+
        '    while(i<5) {\n'+
        '      {\n'+
        '        $LASTPOS=20001436;\n'+
        '        t = Tonyu.globals.$touches[i];\n'+
        '        $LASTPOS=20001466;\n'+
        '        if (t.touched) {\n'+
        '          $LASTPOS=20001496;\n'+
        '          if (_this.isOnRectWH(t.x,t.y,_this.jujiKey.x-32-_this.APAD_DIAG_SIZE/2,_this.jujiKey.y-32-64,64+_this.APAD_DIAG_SIZE,64)) {\n'+
        '            $LASTPOS=20001593;\n'+
        '            _this.keyPushU=1;\n'+
        '          }\n'+
        '          $LASTPOS=20001620;\n'+
        '          if (_this.isOnRectWH(t.x,t.y,_this.jujiKey.x-32-_this.APAD_DIAG_SIZE/2,_this.jujiKey.y-32+64,64+_this.APAD_DIAG_SIZE,64)) {\n'+
        '            $LASTPOS=20001717;\n'+
        '            _this.keyPushD=1;\n'+
        '          }\n'+
        '          $LASTPOS=20001744;\n'+
        '          if (_this.isOnRectWH(t.x,t.y,_this.jujiKey.x-32-64,_this.jujiKey.y-32-_this.APAD_DIAG_SIZE/2,64,64+_this.APAD_DIAG_SIZE)) {\n'+
        '            $LASTPOS=20001841;\n'+
        '            _this.keyPushL=1;\n'+
        '          }\n'+
        '          $LASTPOS=20001868;\n'+
        '          if (_this.isOnRectWH(t.x,t.y,_this.jujiKey.x-32+64,_this.jujiKey.y-32-_this.APAD_DIAG_SIZE/2,64,64+_this.APAD_DIAG_SIZE)) {\n'+
        '            $LASTPOS=20001965;\n'+
        '            _this.keyPushR=1;\n'+
        '          }\n'+
        '          $LASTPOS=20001992;\n'+
        '          if (_this.isOnRectWH(t.x,t.y,_this.no1Key.x-64,_this.no1Key.y-64,128,128)) {\n'+
        '            $LASTPOS=20002054;\n'+
        '            _this.keyPush1=1;\n'+
        '          }\n'+
        '          $LASTPOS=20002081;\n'+
        '          _this.padKeySW=1;\n'+
        '          $LASTPOS=20002108;\n'+
        '          _this.padKeyNotapCnt=0;\n'+
        '          \n'+
        '        }\n'+
        '      }\n'+
        '      i++;\n'+
        '    }\n'+
        '    $LASTPOS=20002173;\n'+
        '    if (_this.keyPushL) {\n'+
        '      $LASTPOS=20002187;\n'+
        '      _this.keyCntL++;\n'+
        '    } else {\n'+
        '      $LASTPOS=20002204;\n'+
        '      _this.keyCntL=0;\n'+
        '    }\n'+
        '    $LASTPOS=20002222;\n'+
        '    if (_this.keyPushR) {\n'+
        '      $LASTPOS=20002236;\n'+
        '      _this.keyCntR++;\n'+
        '    } else {\n'+
        '      $LASTPOS=20002253;\n'+
        '      _this.keyCntR=0;\n'+
        '    }\n'+
        '    $LASTPOS=20002271;\n'+
        '    if (_this.keyPushU) {\n'+
        '      $LASTPOS=20002285;\n'+
        '      _this.keyCntU++;\n'+
        '    } else {\n'+
        '      $LASTPOS=20002302;\n'+
        '      _this.keyCntU=0;\n'+
        '    }\n'+
        '    $LASTPOS=20002320;\n'+
        '    if (_this.keyPushD) {\n'+
        '      $LASTPOS=20002334;\n'+
        '      _this.keyCntD++;\n'+
        '    } else {\n'+
        '      $LASTPOS=20002351;\n'+
        '      _this.keyCntD=0;\n'+
        '    }\n'+
        '    $LASTPOS=20002369;\n'+
        '    if (_this.keyPush1) {\n'+
        '      $LASTPOS=20002383;\n'+
        '      _this.keyCnt1++;\n'+
        '    } else {\n'+
        '      $LASTPOS=20002400;\n'+
        '      _this.keyCnt1=0;\n'+
        '    }\n'+
        '    $LASTPOS=20002435;\n'+
        '    if (_this.keyPushL) {\n'+
        '      $LASTPOS=20002449;\n'+
        '      _this.jujiKeyPushL.show();\n'+
        '    } else {\n'+
        '      $LASTPOS=20002475;\n'+
        '      _this.jujiKeyPushL.hide();\n'+
        '    }\n'+
        '    $LASTPOS=20002501;\n'+
        '    if (_this.keyPushR) {\n'+
        '      $LASTPOS=20002515;\n'+
        '      _this.jujiKeyPushR.show();\n'+
        '    } else {\n'+
        '      $LASTPOS=20002541;\n'+
        '      _this.jujiKeyPushR.hide();\n'+
        '    }\n'+
        '    $LASTPOS=20002567;\n'+
        '    if (_this.keyPushU) {\n'+
        '      $LASTPOS=20002581;\n'+
        '      _this.jujiKeyPushU.show();\n'+
        '    } else {\n'+
        '      $LASTPOS=20002607;\n'+
        '      _this.jujiKeyPushU.hide();\n'+
        '    }\n'+
        '    $LASTPOS=20002633;\n'+
        '    if (_this.keyPushD) {\n'+
        '      $LASTPOS=20002647;\n'+
        '      _this.jujiKeyPushD.show();\n'+
        '    } else {\n'+
        '      $LASTPOS=20002673;\n'+
        '      _this.jujiKeyPushD.hide();\n'+
        '    }\n'+
        '    $LASTPOS=20002699;\n'+
        '    if (_this.keyPush1) {\n'+
        '      $LASTPOS=20002713;\n'+
        '      _this.jujiKeyPush1.show();\n'+
        '    } else {\n'+
        '      $LASTPOS=20002739;\n'+
        '      _this.jujiKeyPush1.hide();\n'+
        '    }\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  getPadUp :function _trc_func_20002772_7() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return _this.keyCntU;\n'+
        '  },\n'+
        '  fiber$getPadUp :function _trc_func_20002772_8(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    _thread.retVal=_this.keyCntU;return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  getPadDown :function _trc_func_20002808_9() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return _this.keyCntD;\n'+
        '  },\n'+
        '  fiber$getPadDown :function _trc_func_20002808_10(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    _thread.retVal=_this.keyCntD;return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  getPadLeft :function _trc_func_20002844_11() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return _this.keyCntL;\n'+
        '  },\n'+
        '  fiber$getPadLeft :function _trc_func_20002844_12(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    _thread.retVal=_this.keyCntL;return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  getPadRight :function _trc_func_20002880_13() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return _this.keyCntR;\n'+
        '  },\n'+
        '  fiber$getPadRight :function _trc_func_20002880_14(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    _thread.retVal=_this.keyCntR;return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  getPadButton :function _trc_func_20002916_15(i) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var value;\n'+
        '    \n'+
        '    $LASTPOS=20002940;\n'+
        '    value;\n'+
        '    $LASTPOS=20002956;\n'+
        '    if (i==0) {\n'+
        '      $LASTPOS=20002968;\n'+
        '      value=_this.keyCnt1;\n'+
        '    }\n'+
        '    return value;\n'+
        '  },\n'+
        '  fiber$getPadButton :function _trc_func_20002916_16(_thread,i) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var value;\n'+
        '    \n'+
        '    $LASTPOS=20002940;\n'+
        '    value;\n'+
        '    $LASTPOS=20002956;\n'+
        '    if (i==0) {\n'+
        '      $LASTPOS=20002968;\n'+
        '      value=_this.keyCnt1;\n'+
        '    }\n'+
        '    _thread.retVal=value;return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  getUp :function _trc_func_20003010_17() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return _this.keyCntU;\n'+
        '  },\n'+
        '  fiber$getUp :function _trc_func_20003010_18(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    _thread.retVal=_this.keyCntU;return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  getDown :function _trc_func_20003043_19() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return _this.keyCntD;\n'+
        '  },\n'+
        '  fiber$getDown :function _trc_func_20003043_20(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    _thread.retVal=_this.keyCntD;return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  getLeft :function _trc_func_20003076_21() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return _this.keyCntL;\n'+
        '  },\n'+
        '  fiber$getLeft :function _trc_func_20003076_22(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    _thread.retVal=_this.keyCntL;return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  getRight :function _trc_func_20003109_23() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return _this.keyCntR;\n'+
        '  },\n'+
        '  fiber$getRight :function _trc_func_20003109_24(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    _thread.retVal=_this.keyCntR;return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  getButton :function _trc_func_20003142_25(i) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var value;\n'+
        '    \n'+
        '    $LASTPOS=20003163;\n'+
        '    value;\n'+
        '    $LASTPOS=20003179;\n'+
        '    if (i==0) {\n'+
        '      $LASTPOS=20003191;\n'+
        '      value=_this.keyCnt1;\n'+
        '    }\n'+
        '    return value;\n'+
        '  },\n'+
        '  fiber$getButton :function _trc_func_20003142_26(_thread,i) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var value;\n'+
        '    \n'+
        '    $LASTPOS=20003163;\n'+
        '    value;\n'+
        '    $LASTPOS=20003179;\n'+
        '    if (i==0) {\n'+
        '      $LASTPOS=20003191;\n'+
        '      value=_this.keyCnt1;\n'+
        '    }\n'+
        '    _thread.retVal=value;return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  isOnRect :function _trc_func_20003243_27(mx,my,rx,ry,rx2,ry2) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return (rx<=mx&&mx<rx2&&ry<=my&&my<ry2);\n'+
        '  },\n'+
        '  fiber$isOnRect :function _trc_func_20003243_28(_thread,mx,my,rx,ry,rx2,ry2) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    _thread.retVal=(rx<=mx&&mx<rx2&&ry<=my&&my<ry2);return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  isOnRectWH :function _trc_func_20003357_29(mx,my,rx,ry,rw,rh) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return (rx<=mx&&mx<rx+rw&&ry<=my&&my<ry+rh);\n'+
        '  },\n'+
        '  fiber$isOnRectWH :function _trc_func_20003357_30(_thread,mx,my,rx,ry,rw,rh) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    _thread.retVal=(rx<=mx&&mx<rx+rw&&ry<=my&&my<ry+rh);return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  __dummy: false\n'+
        '});\n'+
        'Tonyu.klass.addMeta(Tonyu.classes.kernel.Pad,{"fullName":"kernel.Pad","namespace":"kernel","shortName":"Pad","decls":{"methods":{"main":{"nowait":false},"new":{"nowait":false},"die":{"nowait":true},"padUpdate":{"nowait":false},"getPadUp":{"nowait":false},"getPadDown":{"nowait":false},"getPadLeft":{"nowait":false},"getPadRight":{"nowait":false},"getPadButton":{"nowait":false},"getUp":{"nowait":false},"getDown":{"nowait":false},"getLeft":{"nowait":false},"getRight":{"nowait":false},"getButton":{"nowait":false},"isOnRect":{"nowait":false},"isOnRectWH":{"nowait":false}}}});\n'+
        '\n'+
        'Tonyu.klass.ensureNamespace(Tonyu.classes,\'kernel\');\n'+
        'Tonyu.classes.kernel.Panel=Tonyu.klass(Tonyu.classes.kernel.Actor,[],{\n'+
        '  main :function _trc_func_21000000_0() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  fiber$main :function _trc_func_21000000_1(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  initialize :function _trc_func_21000056_2(opt) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=21000072;\n'+
        '    Tonyu.classes.kernel.Actor.apply( _this, [opt]);\n'+
        '    $LASTPOS=21000089;\n'+
        '    _this.width=_this.width;\n'+
        '    $LASTPOS=21000112;\n'+
        '    _this.height=_this.height;\n'+
        '    $LASTPOS=21000137;\n'+
        '    if (_this.align==null) {\n'+
        '      $LASTPOS=21000153;\n'+
        '      _this.align="center";\n'+
        '    }\n'+
        '    $LASTPOS=21000174;\n'+
        '    if (_this.alpha==null) {\n'+
        '      $LASTPOS=21000190;\n'+
        '      _this.alpha=255;\n'+
        '    }\n'+
        '    $LASTPOS=21000206;\n'+
        '    if (_this._drawn==null) {\n'+
        '      $LASTPOS=21000223;\n'+
        '      _this._drawn=false;\n'+
        '    }\n'+
        '    $LASTPOS=21000242;\n'+
        '    _this.buf=$("<canvas>").attr({width: _this.width,height: _this.height});\n'+
        '  },\n'+
        '  setPanel :function _trc_func_21000284_3(width,height) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=21000314;\n'+
        '    _this.width=width;\n'+
        '    $LASTPOS=21000337;\n'+
        '    _this.height=height;\n'+
        '    $LASTPOS=21000362;\n'+
        '    _this.buf=$("<canvas>").attr({width: width,height: height});\n'+
        '  },\n'+
        '  fiber$setPanel :function _trc_func_21000284_4(_thread,width,height) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=21000314;\n'+
        '    _this.width=width;\n'+
        '    $LASTPOS=21000337;\n'+
        '    _this.height=height;\n'+
        '    $LASTPOS=21000362;\n'+
        '    _this.buf=$("<canvas>").attr({width: width,height: height});\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  resize :function _trc_func_21000404_5(width,height) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=21000432;\n'+
        '    _this.setPanel(width,height);\n'+
        '  },\n'+
        '  fiber$resize :function _trc_func_21000404_6(_thread,width,height) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.enter(function _trc_func_21000404_7(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=21000432;\n'+
        '          _this.fiber$setPanel(_thread, width, height);\n'+
        '          __pc=1;return;\n'+
        '        case 1:\n'+
        '          \n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  getContext :function _trc_func_21000460_8() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=21000480;\n'+
        '    _this._drawn=true;\n'+
        '    return _this.buf[0].getContext("2d");\n'+
        '  },\n'+
        '  fiber$getContext :function _trc_func_21000460_9(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=21000480;\n'+
        '    _this._drawn=true;\n'+
        '    _thread.retVal=_this.buf[0].getContext("2d");return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  setFillStyle :function _trc_func_21000534_10(color) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=21000561;\n'+
        '    _this.fillStyle=color;\n'+
        '  },\n'+
        '  fiber$setFillStyle :function _trc_func_21000534_11(_thread,color) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=21000561;\n'+
        '    _this.fillStyle=color;\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  fillRect :function _trc_func_21000587_12(x,y,rectWidth,rectHeight) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=21000629;\n'+
        '    _this.ctx=_this.getContext();\n'+
        '    $LASTPOS=21000652;\n'+
        '    _this.ctx.save();\n'+
        '    $LASTPOS=21000719;\n'+
        '    _this.ctx.fillStyle=_this.fillStyle;\n'+
        '    $LASTPOS=21000749;\n'+
        '    _this.ctx.fillRect(x,y,rectWidth,rectHeight);\n'+
        '    $LASTPOS=21000794;\n'+
        '    _this.ctx.restore();\n'+
        '  },\n'+
        '  fiber$fillRect :function _trc_func_21000587_13(_thread,x,y,rectWidth,rectHeight) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.enter(function _trc_func_21000587_14(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=21000629;\n'+
        '          _this.fiber$getContext(_thread);\n'+
        '          __pc=1;return;\n'+
        '        case 1:\n'+
        '          _this.ctx=_thread.retVal;\n'+
        '          \n'+
        '          $LASTPOS=21000652;\n'+
        '          _this.ctx.save();\n'+
        '          $LASTPOS=21000719;\n'+
        '          _this.ctx.fillStyle=_this.fillStyle;\n'+
        '          $LASTPOS=21000749;\n'+
        '          _this.ctx.fillRect(x,y,rectWidth,rectHeight);\n'+
        '          $LASTPOS=21000794;\n'+
        '          _this.ctx.restore();\n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  fillText :function _trc_func_21000813_15(text,x,y,size,align) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=21000850;\n'+
        '    _this.ctx=_this.getContext();\n'+
        '    $LASTPOS=21000873;\n'+
        '    _this.ctx.save();\n'+
        '    $LASTPOS=21000940;\n'+
        '    _this.ctx.textAlign=align;\n'+
        '    $LASTPOS=21000968;\n'+
        '    _this.ctx.fillStyle=_this.fillStyle;\n'+
        '    $LASTPOS=21000998;\n'+
        '    _this.ctx.font=size+"px \'Courier New\'";\n'+
        '    $LASTPOS=21001037;\n'+
        '    _this.ctx.fillText(text,x,y);\n'+
        '    $LASTPOS=21001066;\n'+
        '    _this.ctx.restore();\n'+
        '  },\n'+
        '  fiber$fillText :function _trc_func_21000813_16(_thread,text,x,y,size,align) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.enter(function _trc_func_21000813_17(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=21000850;\n'+
        '          _this.fiber$getContext(_thread);\n'+
        '          __pc=1;return;\n'+
        '        case 1:\n'+
        '          _this.ctx=_thread.retVal;\n'+
        '          \n'+
        '          $LASTPOS=21000873;\n'+
        '          _this.ctx.save();\n'+
        '          $LASTPOS=21000940;\n'+
        '          _this.ctx.textAlign=align;\n'+
        '          $LASTPOS=21000968;\n'+
        '          _this.ctx.fillStyle=_this.fillStyle;\n'+
        '          $LASTPOS=21000998;\n'+
        '          _this.ctx.font=size+"px \'Courier New\'";\n'+
        '          $LASTPOS=21001037;\n'+
        '          _this.ctx.fillText(text,x,y);\n'+
        '          $LASTPOS=21001066;\n'+
        '          _this.ctx.restore();\n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  clearRect :function _trc_func_21001085_18(clearX,clearY,clearW,clearH) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=21001131;\n'+
        '    _this.ctx=_this.getContext();\n'+
        '    $LASTPOS=21001154;\n'+
        '    _this.ctx.save();\n'+
        '    $LASTPOS=21001171;\n'+
        '    _this.ctx.clearRect(clearX,clearY,clearW,clearH);\n'+
        '    $LASTPOS=21001220;\n'+
        '    _this.ctx.restore();\n'+
        '  },\n'+
        '  fiber$clearRect :function _trc_func_21001085_19(_thread,clearX,clearY,clearW,clearH) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.enter(function _trc_func_21001085_20(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=21001131;\n'+
        '          _this.fiber$getContext(_thread);\n'+
        '          __pc=1;return;\n'+
        '        case 1:\n'+
        '          _this.ctx=_thread.retVal;\n'+
        '          \n'+
        '          $LASTPOS=21001154;\n'+
        '          _this.ctx.save();\n'+
        '          $LASTPOS=21001171;\n'+
        '          _this.ctx.clearRect(clearX,clearY,clearW,clearH);\n'+
        '          $LASTPOS=21001220;\n'+
        '          _this.ctx.restore();\n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  getPixel :function _trc_func_21001239_21(getX,getY) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=21001266;\n'+
        '    if (typeof  getX=="number"&&! isNaN(getX)&&typeof  getY=="number"&&! isNaN(getY)) {\n'+
        '      $LASTPOS=21001365;\n'+
        '      _this.ctx=_this.getContext();\n'+
        '      $LASTPOS=21001392;\n'+
        '      _this.imagedata=_this.ctx.getImageData(getX,getY,1,1);\n'+
        '      $LASTPOS=21001444;\n'+
        '      _this.colordata=[_this.imagedata.data[0],_this.imagedata.data[1],_this.imagedata.data[2],_this.imagedata.data[3]];\n'+
        '      \n'+
        '    } else {\n'+
        '      $LASTPOS=21001584;\n'+
        '      _this.colordata=[0,0,0,0];\n'+
        '      \n'+
        '    }\n'+
        '    return (_this.colordata);\n'+
        '  },\n'+
        '  fiber$getPixel :function _trc_func_21001239_22(_thread,getX,getY) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.enter(function _trc_func_21001239_23(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=21001266;\n'+
        '          if (!(typeof  getX=="number"&&! isNaN(getX)&&typeof  getY=="number"&&! isNaN(getY))) { __pc=2; break; }\n'+
        '          $LASTPOS=21001365;\n'+
        '          _this.fiber$getContext(_thread);\n'+
        '          __pc=1;return;\n'+
        '        case 1:\n'+
        '          _this.ctx=_thread.retVal;\n'+
        '          \n'+
        '          $LASTPOS=21001392;\n'+
        '          _this.imagedata=_this.ctx.getImageData(getX,getY,1,1);\n'+
        '          $LASTPOS=21001444;\n'+
        '          _this.colordata=[_this.imagedata.data[0],_this.imagedata.data[1],_this.imagedata.data[2],_this.imagedata.data[3]];\n'+
        '          __pc=3;break;\n'+
        '        case 2:\n'+
        '          {\n'+
        '            $LASTPOS=21001584;\n'+
        '            _this.colordata=[0,0,0,0];\n'+
        '          }\n'+
        '        case 3:\n'+
        '          \n'+
        '          _thread.exit((_this.colordata));return;\n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  scroll :function _trc_func_21001640_24(scrollX,scrollY) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=21001671;\n'+
        '    _this.ctx=_this.getContext();\n'+
        '    $LASTPOS=21001694;\n'+
        '    _this.ctx.save();\n'+
        '    $LASTPOS=21001711;\n'+
        '    _this.imagedata=_this.ctx.getImageData(0,0,_this.width,_this.height);\n'+
        '    $LASTPOS=21001772;\n'+
        '    _this.clearRect(0,0,_this.width,_this.height);\n'+
        '    $LASTPOS=21001806;\n'+
        '    _this.ctx.putImageData(_this.imagedata,- scrollX,- scrollY);\n'+
        '    $LASTPOS=21001858;\n'+
        '    _this.ctx.restore();\n'+
        '  },\n'+
        '  fiber$scroll :function _trc_func_21001640_25(_thread,scrollX,scrollY) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.enter(function _trc_func_21001640_26(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=21001671;\n'+
        '          _this.fiber$getContext(_thread);\n'+
        '          __pc=1;return;\n'+
        '        case 1:\n'+
        '          _this.ctx=_thread.retVal;\n'+
        '          \n'+
        '          $LASTPOS=21001694;\n'+
        '          _this.ctx.save();\n'+
        '          $LASTPOS=21001711;\n'+
        '          _this.imagedata=_this.ctx.getImageData(0,0,_this.width,_this.height);\n'+
        '          $LASTPOS=21001772;\n'+
        '          _this.fiber$clearRect(_thread, 0, 0, _this.width, _this.height);\n'+
        '          __pc=2;return;\n'+
        '        case 2:\n'+
        '          \n'+
        '          $LASTPOS=21001806;\n'+
        '          _this.ctx.putImageData(_this.imagedata,- scrollX,- scrollY);\n'+
        '          $LASTPOS=21001858;\n'+
        '          _this.ctx.restore();\n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  draw :function _trc_func_21001877_27(ctx) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=21001894;\n'+
        '    if (_this._drawn) {\n'+
        '      $LASTPOS=21001915;\n'+
        '      _this.pImg=_this.buf[0];\n'+
        '      $LASTPOS=21001937;\n'+
        '      ctx.save();\n'+
        '      $LASTPOS=21001958;\n'+
        '      if (_this.align=="left") {\n'+
        '        $LASTPOS=21001990;\n'+
        '        ctx.translate(_this.x+_this.width/2,_this.y+_this.height/2);\n'+
        '        \n'+
        '      } else {\n'+
        '        $LASTPOS=21002042;\n'+
        '        if (_this.align=="center") {\n'+
        '          $LASTPOS=21002076;\n'+
        '          ctx.translate(_this.x,_this.y);\n'+
        '          \n'+
        '        } else {\n'+
        '          $LASTPOS=21002111;\n'+
        '          if (_this.align=="right") {\n'+
        '            $LASTPOS=21002144;\n'+
        '            ctx.translate(_this.x-_this.width/2,_this.y-_this.height/2);\n'+
        '            \n'+
        '          }\n'+
        '        }\n'+
        '      }\n'+
        '      $LASTPOS=21002201;\n'+
        '      if (_this.rotation!=0) {\n'+
        '        $LASTPOS=21002236;\n'+
        '        ctx.rotate(_this.rotation/180*Math.PI);\n'+
        '        \n'+
        '      } else {\n'+
        '        $LASTPOS=21002304;\n'+
        '        ctx.rotate(_this.rotate/180*Math.PI);\n'+
        '        \n'+
        '      }\n'+
        '      $LASTPOS=21002361;\n'+
        '      ctx.globalAlpha=_this.alpha/255;\n'+
        '      $LASTPOS=21002402;\n'+
        '      ctx.drawImage(_this.pImg,0,0,_this.width,_this.height,- _this.width/2,- _this.height/2,_this.width,_this.height);\n'+
        '      $LASTPOS=21002506;\n'+
        '      ctx.restore();\n'+
        '      \n'+
        '    }\n'+
        '  },\n'+
        '  __dummy: false\n'+
        '});\n'+
        'Tonyu.klass.addMeta(Tonyu.classes.kernel.Panel,{"fullName":"kernel.Panel","namespace":"kernel","shortName":"Panel","decls":{"methods":{"main":{"nowait":false},"new":{"nowait":false},"setPanel":{"nowait":false},"resize":{"nowait":false},"getContext":{"nowait":false},"setFillStyle":{"nowait":false},"fillRect":{"nowait":false},"fillText":{"nowait":false},"clearRect":{"nowait":false},"getPixel":{"nowait":false},"scroll":{"nowait":false},"draw":{"nowait":true}}}});\n'+
        '\n'+
        'Tonyu.klass.ensureNamespace(Tonyu.classes,\'kernel\');\n'+
        'Tonyu.classes.kernel.PlainChar=Tonyu.klass(Tonyu.classes.kernel.Actor,[],{\n'+
        '  main :function _trc_func_22000000_0() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  fiber$main :function _trc_func_22000000_1(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  initialize :function _trc_func_22000047_2(x,y,p) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var thg;\n'+
        '    \n'+
        '    $LASTPOS=22000066;\n'+
        '    if (Tonyu.runMode) {\n'+
        '      $LASTPOS=22000096;\n'+
        '      thg = _this.currentThreadGroup();\n'+
        '      $LASTPOS=22000135;\n'+
        '      if (thg) {\n'+
        '        $LASTPOS=22000144;\n'+
        '        _this._th=thg.addObj(_this,"tMain");\n'+
        '      }\n'+
        '      $LASTPOS=22000183;\n'+
        '      _this.initSprite();\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=22000209;\n'+
        '    if (typeof  x=="object") {\n'+
        '      $LASTPOS=22000233;\n'+
        '      Tonyu.extend(_this,x);\n'+
        '    } else {\n'+
        '      $LASTPOS=22000266;\n'+
        '      if (typeof  x=="number") {\n'+
        '        $LASTPOS=22000301;\n'+
        '        _this.x=x;\n'+
        '        $LASTPOS=22000320;\n'+
        '        _this.y=y;\n'+
        '        $LASTPOS=22000339;\n'+
        '        _this.p=p;\n'+
        '        \n'+
        '      }\n'+
        '    }\n'+
        '  },\n'+
        '  draw :function _trc_func_22000360_3(c) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=22000376;\n'+
        '    _this.onDraw();\n'+
        '    $LASTPOS=22000391;\n'+
        '    if (_this._isInvisible) {\n'+
        '      return _this;\n'+
        '    }\n'+
        '    $LASTPOS=22000422;\n'+
        '    Tonyu.classes.kernel.Actor.prototype.draw.apply( _this, [c]);\n'+
        '  },\n'+
        '  setVisible :function _trc_func_22000441_4(v) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=22000463;\n'+
        '    _this._isInvisible=! v;\n'+
        '  },\n'+
        '  fiber$setVisible :function _trc_func_22000441_5(_thread,v) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=22000463;\n'+
        '    _this._isInvisible=! v;\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  onDraw :function _trc_func_22000484_6() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  fiber$onDraw :function _trc_func_22000484_7(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  update :function _trc_func_22000506_8() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=22000523;\n'+
        '    _this.onUpdate();\n'+
        '    $LASTPOS=22000540;\n'+
        '    Tonyu.classes.kernel.Actor.prototype.update.apply( _this, []);\n'+
        '  },\n'+
        '  fiber$update :function _trc_func_22000506_9(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=22000523;\n'+
        '    _this.onUpdate();\n'+
        '    \n'+
        '    _thread.enter(function _trc_func_22000506_10(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=22000540;\n'+
        '          Tonyu.classes.kernel.Actor.prototype.fiber$update.apply( _this, [_thread]);\n'+
        '          __pc=1;return;\n'+
        '        case 1:\n'+
        '          \n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  onUpdate :function _trc_func_22000560_11() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  initSprite :function _trc_func_22000584_12() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=22000605;\n'+
        '    if (_this.layer&&typeof  _this.layer.add=="function") {\n'+
        '      $LASTPOS=22000657;\n'+
        '      _this.layer.add(_this);\n'+
        '      \n'+
        '    } else {\n'+
        '      $LASTPOS=22000695;\n'+
        '      Tonyu.globals.$Sprites.add(_this);\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=22000727;\n'+
        '    _this.onAppear();\n'+
        '  },\n'+
        '  fiber$initSprite :function _trc_func_22000584_13(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=22000605;\n'+
        '    if (_this.layer&&typeof  _this.layer.add=="function") {\n'+
        '      $LASTPOS=22000657;\n'+
        '      _this.layer.add(_this);\n'+
        '      \n'+
        '    } else {\n'+
        '      $LASTPOS=22000695;\n'+
        '      Tonyu.globals.$Sprites.add(_this);\n'+
        '      \n'+
        '    }\n'+
        '    \n'+
        '    _thread.enter(function _trc_func_22000584_14(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=22000727;\n'+
        '          _this.fiber$onAppear(_thread);\n'+
        '          __pc=1;return;\n'+
        '        case 1:\n'+
        '          \n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  tMain :function _trc_func_22000743_15() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=22000759;\n'+
        '    _this.main();\n'+
        '    $LASTPOS=22000772;\n'+
        '    _this.die();\n'+
        '  },\n'+
        '  fiber$tMain :function _trc_func_22000743_16(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.enter(function _trc_func_22000743_17(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=22000759;\n'+
        '          _this.fiber$main(_thread);\n'+
        '          __pc=1;return;\n'+
        '        case 1:\n'+
        '          \n'+
        '          $LASTPOS=22000772;\n'+
        '          _this.die();\n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  color :function _trc_func_22000783_18(r,g,b) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return "rgb("+[r,g,b].join(",")+")";\n'+
        '  },\n'+
        '  fiber$color :function _trc_func_22000783_19(_thread,r,g,b) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    _thread.retVal="rgb("+[r,g,b].join(",")+")";return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  drawText :function _trc_func_22000845_20(x,y,text,col,size) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var tp;\n'+
        '    \n'+
        '    $LASTPOS=22000881;\n'+
        '    if (Tonyu.globals.$debug) {\n'+
        '      return _this;\n'+
        '    }\n'+
        '    $LASTPOS=22000906;\n'+
        '    if (! size) {\n'+
        '      $LASTPOS=22000917;\n'+
        '      size=15;\n'+
        '    }\n'+
        '    $LASTPOS=22000931;\n'+
        '    if (! col) {\n'+
        '      $LASTPOS=22000941;\n'+
        '      col="cyan";\n'+
        '    }\n'+
        '    $LASTPOS=22000958;\n'+
        '    tp = _this.all(Tonyu.classes.kernel.T1Text).find(function (t) {\n'+
        '      \n'+
        '      return t.hidden;\n'+
        '    });\n'+
        '    $LASTPOS=22001012;\n'+
        '    if (tp.length>0) {\n'+
        '      $LASTPOS=22001040;\n'+
        '      tp[0].extend({x: x,y: y,text: text,fillStyle: col,size: size,hidden: false});\n'+
        '      \n'+
        '    } else {\n'+
        '      $LASTPOS=22001119;\n'+
        '      new Tonyu.classes.kernel.T1Text({x: x,y: y,text: text,fillStyle: col,size: size});\n'+
        '      \n'+
        '    }\n'+
        '  },\n'+
        '  fiber$drawText :function _trc_func_22000845_21(_thread,x,y,text,col,size) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var tp;\n'+
        '    \n'+
        '    $LASTPOS=22000881;\n'+
        '    if (Tonyu.globals.$debug) {\n'+
        '      _thread.retVal=_this;return;\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=22000906;\n'+
        '    if (! size) {\n'+
        '      $LASTPOS=22000917;\n'+
        '      size=15;\n'+
        '    }\n'+
        '    $LASTPOS=22000931;\n'+
        '    if (! col) {\n'+
        '      $LASTPOS=22000941;\n'+
        '      col="cyan";\n'+
        '    }\n'+
        '    $LASTPOS=22000958;\n'+
        '    tp = _this.all(Tonyu.classes.kernel.T1Text).find(function (t) {\n'+
        '      \n'+
        '      return t.hidden;\n'+
        '    });\n'+
        '    $LASTPOS=22001012;\n'+
        '    if (tp.length>0) {\n'+
        '      $LASTPOS=22001040;\n'+
        '      tp[0].extend({x: x,y: y,text: text,fillStyle: col,size: size,hidden: false});\n'+
        '      \n'+
        '    } else {\n'+
        '      $LASTPOS=22001119;\n'+
        '      new Tonyu.classes.kernel.T1Text({x: x,y: y,text: text,fillStyle: col,size: size});\n'+
        '      \n'+
        '    }\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  drawLine :function _trc_func_22001174_22(x,y,tx,ty,col) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var tp;\n'+
        '    \n'+
        '    $LASTPOS=22001206;\n'+
        '    if (! col) {\n'+
        '      $LASTPOS=22001216;\n'+
        '      col="white";\n'+
        '    }\n'+
        '    $LASTPOS=22001234;\n'+
        '    tp = _this.all(Tonyu.classes.kernel.T1Line).find(function (t) {\n'+
        '      \n'+
        '      return t.hidden;\n'+
        '    });\n'+
        '    $LASTPOS=22001288;\n'+
        '    if (tp.length>0) {\n'+
        '      $LASTPOS=22001316;\n'+
        '      tp[0].extend({x: x,y: y,tx: tx,ty: ty,col: col});\n'+
        '      \n'+
        '    } else {\n'+
        '      $LASTPOS=22001367;\n'+
        '      new Tonyu.classes.kernel.T1Line({x: x,y: y,tx: tx,ty: ty,col: col});\n'+
        '      \n'+
        '    }\n'+
        '  },\n'+
        '  fiber$drawLine :function _trc_func_22001174_23(_thread,x,y,tx,ty,col) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var tp;\n'+
        '    \n'+
        '    $LASTPOS=22001206;\n'+
        '    if (! col) {\n'+
        '      $LASTPOS=22001216;\n'+
        '      col="white";\n'+
        '    }\n'+
        '    $LASTPOS=22001234;\n'+
        '    tp = _this.all(Tonyu.classes.kernel.T1Line).find(function (t) {\n'+
        '      \n'+
        '      return t.hidden;\n'+
        '    });\n'+
        '    $LASTPOS=22001288;\n'+
        '    if (tp.length>0) {\n'+
        '      $LASTPOS=22001316;\n'+
        '      tp[0].extend({x: x,y: y,tx: tx,ty: ty,col: col});\n'+
        '      \n'+
        '    } else {\n'+
        '      $LASTPOS=22001367;\n'+
        '      new Tonyu.classes.kernel.T1Line({x: x,y: y,tx: tx,ty: ty,col: col});\n'+
        '      \n'+
        '    }\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  appear :function _trc_func_22001407_24(t) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return t;\n'+
        '  },\n'+
        '  fiber$appear :function _trc_func_22001407_25(_thread,t) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    _thread.retVal=t;return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  trunc :function _trc_func_22001439_26(f) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return Math.trunc(f);\n'+
        '  },\n'+
        '  loadPage :function _trc_func_22001482_27(page,arg) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=22001508;\n'+
        '    _this.all().die();\n'+
        '    $LASTPOS=22001526;\n'+
        '    new page(arg);\n'+
        '    $LASTPOS=22001546;\n'+
        '    _this.die();\n'+
        '  },\n'+
        '  fiber$loadPage :function _trc_func_22001482_28(_thread,page,arg) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=22001508;\n'+
        '    _this.all().die();\n'+
        '    $LASTPOS=22001526;\n'+
        '    new page(arg);\n'+
        '    $LASTPOS=22001546;\n'+
        '    _this.die();\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  __dummy: false\n'+
        '});\n'+
        'Tonyu.klass.addMeta(Tonyu.classes.kernel.PlainChar,{"fullName":"kernel.PlainChar","namespace":"kernel","shortName":"PlainChar","decls":{"methods":{"main":{"nowait":false},"new":{"nowait":false},"draw":{"nowait":true},"setVisible":{"nowait":false},"onDraw":{"nowait":false},"update":{"nowait":false},"onUpdate":{"nowait":true},"initSprite":{"nowait":false},"tMain":{"nowait":false},"color":{"nowait":false},"drawText":{"nowait":false},"drawLine":{"nowait":false},"appear":{"nowait":false},"trunc":{"nowait":true},"loadPage":{"nowait":false}}}});\n'+
        '\n'+
        'Tonyu.klass.ensureNamespace(Tonyu.classes,\'kernel\');\n'+
        'Tonyu.classes.kernel.ScaledCanvas=Tonyu.klass(Tonyu.classes.kernel.Actor,[],{\n'+
        '  main :function _trc_func_23000000_0() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  fiber$main :function _trc_func_23000000_1(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  initialize :function _trc_func_23000077_2(opt) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=23000095;\n'+
        '    _this.extend(opt);\n'+
        '    $LASTPOS=23000142;\n'+
        '    _this.resize(_this.width,_this.height);\n'+
        '    $LASTPOS=23000170;\n'+
        '    _this.cw=_this.canvas.width();\n'+
        '    $LASTPOS=23000194;\n'+
        '    _this.ch=_this.canvas.height();\n'+
        '    $LASTPOS=23000219;\n'+
        '    _this.cctx=_this.canvas[0].getContext("2d");\n'+
        '    $LASTPOS=23000257;\n'+
        '    _this.color="rgb(20,80,180)";\n'+
        '    $LASTPOS=23000291;\n'+
        '    _this.sx=0;\n'+
        '    $LASTPOS=23000302;\n'+
        '    _this.sy=0;\n'+
        '    $LASTPOS=23000313;\n'+
        '    _this.isDrawGrid=Tonyu.globals.$Sprites.isDrawGrid;\n'+
        '  },\n'+
        '  resize :function _trc_func_23000349_3(width,height) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=23000378;\n'+
        '    _this.width=width;\n'+
        '    $LASTPOS=23000401;\n'+
        '    _this.height=height;\n'+
        '    $LASTPOS=23000426;\n'+
        '    _this.buf=$("<canvas>").attr({width: width,height: height});\n'+
        '    $LASTPOS=23000469;\n'+
        '    _this.ctx=_this.buf[0].getContext("2d");\n'+
        '    $LASTPOS=23000505;\n'+
        '    Tonyu.globals.$screenWidth=width;\n'+
        '    $LASTPOS=23000530;\n'+
        '    Tonyu.globals.$screenHeight=height;\n'+
        '    $LASTPOS=23000557;\n'+
        '    if (Tonyu.globals.$panel) {\n'+
        '      $LASTPOS=23000578;\n'+
        '      Tonyu.globals.$panel.setPanel(Tonyu.globals.$screenWidth,Tonyu.globals.$screenHeight);\n'+
        '      \n'+
        '    }\n'+
        '  },\n'+
        '  fiber$resize :function _trc_func_23000349_4(_thread,width,height) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=23000378;\n'+
        '    _this.width=width;\n'+
        '    $LASTPOS=23000401;\n'+
        '    _this.height=height;\n'+
        '    $LASTPOS=23000426;\n'+
        '    _this.buf=$("<canvas>").attr({width: width,height: height});\n'+
        '    $LASTPOS=23000469;\n'+
        '    _this.ctx=_this.buf[0].getContext("2d");\n'+
        '    $LASTPOS=23000505;\n'+
        '    Tonyu.globals.$screenWidth=width;\n'+
        '    $LASTPOS=23000530;\n'+
        '    Tonyu.globals.$screenHeight=height;\n'+
        '    $LASTPOS=23000557;\n'+
        '    if (Tonyu.globals.$panel) {\n'+
        '      $LASTPOS=23000578;\n'+
        '      Tonyu.globals.$panel.setPanel(Tonyu.globals.$screenWidth,Tonyu.globals.$screenHeight);\n'+
        '      \n'+
        '    }\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  shouldDraw1x1 :function _trc_func_23000634_5(srcw,srch,dstw,dsth) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var larger;\n'+
        '    var smaller;\n'+
        '    \n'+
        '    $LASTPOS=23000712;\n'+
        '    larger = 200;\n'+
        '    $LASTPOS=23000733;\n'+
        '    smaller = 5;\n'+
        '    return srcw-smaller<=dstw&&dstw<=srcw+larger&&srch-smaller<=dsth&&dsth<=srch+larger;\n'+
        '  },\n'+
        '  fiber$shouldDraw1x1 :function _trc_func_23000634_6(_thread,srcw,srch,dstw,dsth) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var larger;\n'+
        '    var smaller;\n'+
        '    \n'+
        '    $LASTPOS=23000712;\n'+
        '    larger = 200;\n'+
        '    $LASTPOS=23000733;\n'+
        '    smaller = 5;\n'+
        '    _thread.retVal=srcw-smaller<=dstw&&dstw<=srcw+larger&&srch-smaller<=dsth&&dsth<=srch+larger;return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  draw :function _trc_func_23000853_7() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var calcw;\n'+
        '    var calch;\n'+
        '    var marginw;\n'+
        '    var marginh;\n'+
        '    \n'+
        '    $LASTPOS=23000868;\n'+
        '    _this.cw=_this.canvas.width();\n'+
        '    $LASTPOS=23000892;\n'+
        '    _this.ch=_this.canvas.height();\n'+
        '    $LASTPOS=23000917;\n'+
        '    calcw = _this.ch/_this.height*_this.width;\n'+
        '    $LASTPOS=23000961;\n'+
        '    calch = _this.cw/_this.width*_this.height;\n'+
        '    $LASTPOS=23001005;\n'+
        '    if (calch>_this.ch) {\n'+
        '      $LASTPOS=23001019;\n'+
        '      calch=_this.ch;\n'+
        '    }\n'+
        '    $LASTPOS=23001034;\n'+
        '    if (calcw>_this.cw) {\n'+
        '      $LASTPOS=23001048;\n'+
        '      calcw=_this.cw;\n'+
        '    }\n'+
        '    $LASTPOS=23001063;\n'+
        '    _this.cctx.clearRect(0,0,_this.cw,_this.ch);\n'+
        '    $LASTPOS=23001095;\n'+
        '    if (_this.shouldDraw1x1(_this.width,_this.height,calcw,calch)) {\n'+
        '      $LASTPOS=23001151;\n'+
        '      calcw=_this.width;\n'+
        '      $LASTPOS=23001163;\n'+
        '      calch=_this.height;\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=23001189;\n'+
        '    marginw = Math.floor((_this.cw-calcw)/2);\n'+
        '    $LASTPOS=23001232;\n'+
        '    marginh = Math.floor((_this.ch-calch)/2);\n'+
        '    $LASTPOS=23001275;\n'+
        '    _this.cctx.drawImage(_this.buf[0],0,0,_this.width,_this.height,marginw,marginh,calcw,calch);\n'+
        '  },\n'+
        '  canvas2buf :function _trc_func_23001364_8(point) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var calcw;\n'+
        '    var calch;\n'+
        '    var marginw;\n'+
        '    var marginh;\n'+
        '    \n'+
        '    $LASTPOS=23001390;\n'+
        '    calcw = _this.ch/_this.height*_this.width;\n'+
        '    $LASTPOS=23001434;\n'+
        '    calch = _this.cw/_this.width*_this.height;\n'+
        '    $LASTPOS=23001478;\n'+
        '    if (calch>_this.ch) {\n'+
        '      $LASTPOS=23001492;\n'+
        '      calch=_this.ch;\n'+
        '    }\n'+
        '    $LASTPOS=23001507;\n'+
        '    if (calcw>_this.cw) {\n'+
        '      $LASTPOS=23001521;\n'+
        '      calcw=_this.cw;\n'+
        '    }\n'+
        '    $LASTPOS=23001536;\n'+
        '    if (_this.shouldDraw1x1(_this.width,_this.height,calcw,calch)) {\n'+
        '      $LASTPOS=23001592;\n'+
        '      calcw=_this.width;\n'+
        '      $LASTPOS=23001604;\n'+
        '      calch=_this.height;\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=23001630;\n'+
        '    marginw = Math.floor((_this.cw-calcw)/2);\n'+
        '    $LASTPOS=23001673;\n'+
        '    marginh = Math.floor((_this.ch-calch)/2);\n'+
        '    return {x: (point.x-marginw)/calcw*_this.width,y: (point.y-marginh)/calch*_this.height};\n'+
        '  },\n'+
        '  fiber$canvas2buf :function _trc_func_23001364_9(_thread,point) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var calcw;\n'+
        '    var calch;\n'+
        '    var marginw;\n'+
        '    var marginh;\n'+
        '    \n'+
        '    $LASTPOS=23001390;\n'+
        '    calcw = _this.ch/_this.height*_this.width;\n'+
        '    $LASTPOS=23001434;\n'+
        '    calch = _this.cw/_this.width*_this.height;\n'+
        '    $LASTPOS=23001478;\n'+
        '    if (calch>_this.ch) {\n'+
        '      $LASTPOS=23001492;\n'+
        '      calch=_this.ch;\n'+
        '    }\n'+
        '    $LASTPOS=23001507;\n'+
        '    if (calcw>_this.cw) {\n'+
        '      $LASTPOS=23001521;\n'+
        '      calcw=_this.cw;\n'+
        '    }\n'+
        '    $LASTPOS=23001536;\n'+
        '    if (_this.shouldDraw1x1(_this.width,_this.height,calcw,calch)) {\n'+
        '      $LASTPOS=23001592;\n'+
        '      calcw=_this.width;\n'+
        '      $LASTPOS=23001604;\n'+
        '      calch=_this.height;\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=23001630;\n'+
        '    marginw = Math.floor((_this.cw-calcw)/2);\n'+
        '    $LASTPOS=23001673;\n'+
        '    marginh = Math.floor((_this.ch-calch)/2);\n'+
        '    _thread.retVal={x: (point.x-marginw)/calcw*_this.width,y: (point.y-marginh)/calch*_this.height};return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  setBGColor :function _trc_func_23001810_10(color) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=23001835;\n'+
        '    _this.color=color;\n'+
        '  },\n'+
        '  fiber$setBGColor :function _trc_func_23001810_11(_thread,color) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=23001835;\n'+
        '    _this.color=color;\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  fillCanvas :function _trc_func_23001857_12(cv) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var ctx;\n'+
        '    \n'+
        '    $LASTPOS=23001879;\n'+
        '    ctx = cv.getContext("2d");\n'+
        '    $LASTPOS=23001913;\n'+
        '    ctx.save();\n'+
        '    $LASTPOS=23001930;\n'+
        '    ctx.fillStyle=Tonyu.globals.$Screen.color;\n'+
        '    $LASTPOS=23001964;\n'+
        '    ctx.fillStyle=Tonyu.bindFunc(_this,_this.color);\n'+
        '    $LASTPOS=23001990;\n'+
        '    ctx.fillRect(0,0,cv.width,cv.height);\n'+
        '    $LASTPOS=23002033;\n'+
        '    if (_this.isDrawGrid) {\n'+
        '      $LASTPOS=23002049;\n'+
        '      _this.drawGrid(cv);\n'+
        '    }\n'+
        '    $LASTPOS=23002068;\n'+
        '    ctx.restore();\n'+
        '  },\n'+
        '  fiber$fillCanvas :function _trc_func_23001857_13(_thread,cv) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var ctx;\n'+
        '    \n'+
        '    $LASTPOS=23001879;\n'+
        '    ctx = cv.getContext("2d");\n'+
        '    $LASTPOS=23001913;\n'+
        '    ctx.save();\n'+
        '    $LASTPOS=23001930;\n'+
        '    ctx.fillStyle=Tonyu.globals.$Screen.color;\n'+
        '    $LASTPOS=23001964;\n'+
        '    ctx.fillStyle=Tonyu.bindFunc(_this,_this.color);\n'+
        '    $LASTPOS=23001990;\n'+
        '    ctx.fillRect(0,0,cv.width,cv.height);\n'+
        '    $LASTPOS=23002033;\n'+
        '    if (_this.isDrawGrid) {\n'+
        '      $LASTPOS=23002049;\n'+
        '      _this.drawGrid(cv);\n'+
        '    }\n'+
        '    $LASTPOS=23002068;\n'+
        '    ctx.restore();\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  scrollTo :function _trc_func_23002087_14(scrollX,scrollY) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=23002412;\n'+
        '    Tonyu.globals.$Sprites.scrollTo(scrollX,scrollY);\n'+
        '  },\n'+
        '  fiber$scrollTo :function _trc_func_23002087_15(_thread,scrollX,scrollY) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=23002412;\n'+
        '    Tonyu.globals.$Sprites.scrollTo(scrollX,scrollY);\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  __dummy: false\n'+
        '});\n'+
        'Tonyu.klass.addMeta(Tonyu.classes.kernel.ScaledCanvas,{"fullName":"kernel.ScaledCanvas","namespace":"kernel","shortName":"ScaledCanvas","decls":{"methods":{"main":{"nowait":false},"new":{"nowait":false},"resize":{"nowait":false},"shouldDraw1x1":{"nowait":false},"draw":{"nowait":true},"canvas2buf":{"nowait":false},"setBGColor":{"nowait":false},"fillCanvas":{"nowait":false},"scrollTo":{"nowait":false}}}});\n'+
        '\n'+
        'Tonyu.klass.ensureNamespace(Tonyu.classes,\'kernel\');\n'+
        'Tonyu.classes.kernel.SecretChar=Tonyu.klass(Tonyu.classes.kernel.PlainChar,[],{\n'+
        '  main :function _trc_func_24000000_0() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  fiber$main :function _trc_func_24000000_1(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  draw :function _trc_func_24000022_2(c) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  __dummy: false\n'+
        '});\n'+
        'Tonyu.klass.addMeta(Tonyu.classes.kernel.SecretChar,{"fullName":"kernel.SecretChar","namespace":"kernel","shortName":"SecretChar","decls":{"methods":{"main":{"nowait":false},"draw":{"nowait":true}}}});\n'+
        '\n'+
        'Tonyu.klass.ensureNamespace(Tonyu.classes,\'kernel\');\n'+
        'Tonyu.classes.kernel.SpriteChar=Tonyu.klass(Tonyu.classes.kernel.PlainChar,[],{\n'+
        '  main :function _trc_func_25000000_0() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  fiber$main :function _trc_func_25000000_1(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  initialize :function _trc_func_25000022_2(x,y,p,f) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=25000043;\n'+
        '    Tonyu.classes.kernel.PlainChar.apply( _this, [x,y,p]);\n'+
        '    $LASTPOS=25000062;\n'+
        '    _this.f=f;\n'+
        '    $LASTPOS=25000077;\n'+
        '    if (! _this.x) {\n'+
        '      $LASTPOS=25000090;\n'+
        '      _this.x=0;\n'+
        '    }\n'+
        '    $LASTPOS=25000105;\n'+
        '    if (! _this.y) {\n'+
        '      $LASTPOS=25000118;\n'+
        '      _this.y=0;\n'+
        '    }\n'+
        '    $LASTPOS=25000133;\n'+
        '    if (! _this.p) {\n'+
        '      $LASTPOS=25000146;\n'+
        '      _this.p=0;\n'+
        '    }\n'+
        '  },\n'+
        '  draw :function _trc_func_25000160_3(c) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=25000176;\n'+
        '    if (_this.f) {\n'+
        '      $LASTPOS=25000194;\n'+
        '      if (! _this.scaleY) {\n'+
        '        $LASTPOS=25000207;\n'+
        '        _this.scaleY=_this.scaleX;\n'+
        '      }\n'+
        '      $LASTPOS=25000231;\n'+
        '      _this.scaleX*=- 1;\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=25000255;\n'+
        '    Tonyu.classes.kernel.PlainChar.prototype.draw.apply( _this, [c]);\n'+
        '    $LASTPOS=25000275;\n'+
        '    if (_this.f) {\n'+
        '      $LASTPOS=25000282;\n'+
        '      _this.scaleX*=- 1;\n'+
        '    }\n'+
        '  },\n'+
        '  __dummy: false\n'+
        '});\n'+
        'Tonyu.klass.addMeta(Tonyu.classes.kernel.SpriteChar,{"fullName":"kernel.SpriteChar","namespace":"kernel","shortName":"SpriteChar","decls":{"methods":{"main":{"nowait":false},"new":{"nowait":false},"draw":{"nowait":true}}}});\n'+
        '\n'+
        'Tonyu.klass.ensureNamespace(Tonyu.classes,\'kernel\');\n'+
        'Tonyu.classes.kernel.Sprites=Tonyu.klass(Tonyu.classes.kernel.Actor,[],{\n'+
        '  main :function _trc_func_26000000_0() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  fiber$main :function _trc_func_26000000_1(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  initialize :function _trc_func_26000031_2() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=26000045;\n'+
        '    _this.sprites=[];\n'+
        '    $LASTPOS=26000062;\n'+
        '    _this.imageList=[];\n'+
        '    $LASTPOS=26000081;\n'+
        '    _this.hitWatchers=[];\n'+
        '    $LASTPOS=26000102;\n'+
        '    _this.isDrawGrid=Tonyu.noviceMode;\n'+
        '    $LASTPOS=26000136;\n'+
        '    _this.sx=0;\n'+
        '    $LASTPOS=26000147;\n'+
        '    _this.sy=0;\n'+
        '    $LASTPOS=26000158;\n'+
        '    _this.objId=0;\n'+
        '  },\n'+
        '  add :function _trc_func_26000171_3(s) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=26000194;\n'+
        '    if (s.__addedToSprites) {\n'+
        '      return _this;\n'+
        '    }\n'+
        '    $LASTPOS=26000231;\n'+
        '    _this.sprites.push(s);\n'+
        '    $LASTPOS=26000253;\n'+
        '    if (s.__genId==null) {\n'+
        '      $LASTPOS=26000283;\n'+
        '      s.__genId=_this.objId;\n'+
        '      $LASTPOS=26000309;\n'+
        '      _this.objId++;\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=26000330;\n'+
        '    s.__addedToSprites=_this;\n'+
        '    return s;\n'+
        '  },\n'+
        '  fiber$add :function _trc_func_26000171_4(_thread,s) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=26000194;\n'+
        '    if (s.__addedToSprites) {\n'+
        '      _thread.retVal=_this;return;\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=26000231;\n'+
        '    _this.sprites.push(s);\n'+
        '    $LASTPOS=26000253;\n'+
        '    if (s.__genId==null) {\n'+
        '      $LASTPOS=26000283;\n'+
        '      s.__genId=_this.objId;\n'+
        '      $LASTPOS=26000309;\n'+
        '      _this.objId++;\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=26000330;\n'+
        '    s.__addedToSprites=_this;\n'+
        '    _thread.retVal=s;return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  remove :function _trc_func_26000374_5(s) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var idx;\n'+
        '    \n'+
        '    $LASTPOS=26000400;\n'+
        '    idx = _this.sprites.indexOf(s);\n'+
        '    $LASTPOS=26000433;\n'+
        '    if (idx<0) {\n'+
        '      return _this;\n'+
        '    }\n'+
        '    $LASTPOS=26000457;\n'+
        '    _this.sprites.splice(idx,1);\n'+
        '    $LASTPOS=26000485;\n'+
        '    delete s.__addedToSprites;\n'+
        '  },\n'+
        '  fiber$remove :function _trc_func_26000374_6(_thread,s) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var idx;\n'+
        '    \n'+
        '    $LASTPOS=26000400;\n'+
        '    idx = _this.sprites.indexOf(s);\n'+
        '    $LASTPOS=26000433;\n'+
        '    if (idx<0) {\n'+
        '      _thread.retVal=_this;return;\n'+
        '      \n'+
        '    }\n'+
        '    $LASTPOS=26000457;\n'+
        '    _this.sprites.splice(idx,1);\n'+
        '    $LASTPOS=26000485;\n'+
        '    delete s.__addedToSprites;\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  clear :function _trc_func_26000516_7() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=26000534;\n'+
        '    _this.sprites.splice(0,_this.sprites.length);\n'+
        '  },\n'+
        '  fiber$clear :function _trc_func_26000516_8(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=26000534;\n'+
        '    _this.sprites.splice(0,_this.sprites.length);\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  compOrder :function _trc_func_26000570_9(obj1,obj2) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var val1;\n'+
        '    var val2;\n'+
        '    \n'+
        '    $LASTPOS=26000607;\n'+
        '    val1 = obj1.zOrder;\n'+
        '    $LASTPOS=26000634;\n'+
        '    val2 = obj2.zOrder;\n'+
        '    $LASTPOS=26000661;\n'+
        '    if (val1>val2) {\n'+
        '      return - 1;\n'+
        '      \n'+
        '    } else {\n'+
        '      $LASTPOS=26000707;\n'+
        '      if (val1<val2) {\n'+
        '        return 1;\n'+
        '        \n'+
        '      } else {\n'+
        '        $LASTPOS=26000752;\n'+
        '        if (val1==val2) {\n'+
        '          $LASTPOS=26000777;\n'+
        '          if (obj1.__genId>obj2.__genId) {\n'+
        '            return 1;\n'+
        '            \n'+
        '          } else {\n'+
        '            return - 1;\n'+
        '            \n'+
        '          }\n'+
        '          return 0;\n'+
        '          \n'+
        '        }\n'+
        '      }\n'+
        '    }\n'+
        '  },\n'+
        '  fiber$compOrder :function _trc_func_26000570_10(_thread,obj1,obj2) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var val1;\n'+
        '    var val2;\n'+
        '    \n'+
        '    $LASTPOS=26000607;\n'+
        '    val1 = obj1.zOrder;\n'+
        '    $LASTPOS=26000634;\n'+
        '    val2 = obj2.zOrder;\n'+
        '    $LASTPOS=26000661;\n'+
        '    if (val1>val2) {\n'+
        '      _thread.retVal=- 1;return;\n'+
        '      \n'+
        '      \n'+
        '    } else {\n'+
        '      $LASTPOS=26000707;\n'+
        '      if (val1<val2) {\n'+
        '        _thread.retVal=1;return;\n'+
        '        \n'+
        '        \n'+
        '      } else {\n'+
        '        $LASTPOS=26000752;\n'+
        '        if (val1==val2) {\n'+
        '          $LASTPOS=26000777;\n'+
        '          if (obj1.__genId>obj2.__genId) {\n'+
        '            _thread.retVal=1;return;\n'+
        '            \n'+
        '            \n'+
        '          } else {\n'+
        '            _thread.retVal=- 1;return;\n'+
        '            \n'+
        '            \n'+
        '          }\n'+
        '          _thread.retVal=0;return;\n'+
        '          \n'+
        '          \n'+
        '        }\n'+
        '      }\n'+
        '    }\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  draw :function _trc_func_26000912_11(cv) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var ctx;\n'+
        '    var orderArray;\n'+
        '    \n'+
        '    $LASTPOS=26000937;\n'+
        '    ctx = cv.getContext("2d");\n'+
        '    $LASTPOS=26000971;\n'+
        '    ctx.save();\n'+
        '    $LASTPOS=26001116;\n'+
        '    orderArray = [];\n'+
        '    $LASTPOS=26001140;\n'+
        '    orderArray=orderArray.concat(_this.sprites);\n'+
        '    $LASTPOS=26001184;\n'+
        '    orderArray.sort(Tonyu.bindFunc(_this,_this.compOrder));\n'+
        '    $LASTPOS=26001217;\n'+
        '    ctx.translate(- _this.sx,- _this.sy);\n'+
        '    $LASTPOS=26001246;\n'+
        '    orderArray.forEach(function (s) {\n'+
        '      \n'+
        '      $LASTPOS=26001280;\n'+
        '      s.draw(ctx);\n'+
        '    });\n'+
        '    $LASTPOS=26001307;\n'+
        '    ctx.restore();\n'+
        '  },\n'+
        '  checkHit :function _trc_func_26001326_12() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=26001353;\n'+
        '    _this.hitWatchers.forEach(function (w) {\n'+
        '      \n'+
        '      $LASTPOS=26001397;\n'+
        '      _this.sprites.forEach(function (a) {\n'+
        '        var a_owner;\n'+
        '        \n'+
        '        $LASTPOS=26001485;\n'+
        '        a_owner = a;\n'+
        '        $LASTPOS=26001527;\n'+
        '        if (! (a_owner instanceof w.A)) {\n'+
        '          return _this;\n'+
        '        }\n'+
        '        $LASTPOS=26001580;\n'+
        '        _this.sprites.forEach(function (b) {\n'+
        '          var b_owner;\n'+
        '          \n'+
        '          $LASTPOS=26001628;\n'+
        '          b_owner = b;\n'+
        '          $LASTPOS=26001674;\n'+
        '          if (a===b) {\n'+
        '            return _this;\n'+
        '          }\n'+
        '          $LASTPOS=26001710;\n'+
        '          if (! (b_owner instanceof w.B)) {\n'+
        '            return _this;\n'+
        '          }\n'+
        '          $LASTPOS=26001815;\n'+
        '          if (a.crashTo1(b)) {\n'+
        '            $LASTPOS=26001918;\n'+
        '            w.h(a_owner,b_owner);\n'+
        '            \n'+
        '          }\n'+
        '        });\n'+
        '      });\n'+
        '    });\n'+
        '  },\n'+
        '  fiber$checkHit :function _trc_func_26001326_13(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=26001353;\n'+
        '    _this.hitWatchers.forEach(function (w) {\n'+
        '      \n'+
        '      $LASTPOS=26001397;\n'+
        '      _this.sprites.forEach(function (a) {\n'+
        '        var a_owner;\n'+
        '        \n'+
        '        $LASTPOS=26001485;\n'+
        '        a_owner = a;\n'+
        '        $LASTPOS=26001527;\n'+
        '        if (! (a_owner instanceof w.A)) {\n'+
        '          return _this;\n'+
        '        }\n'+
        '        $LASTPOS=26001580;\n'+
        '        _this.sprites.forEach(function (b) {\n'+
        '          var b_owner;\n'+
        '          \n'+
        '          $LASTPOS=26001628;\n'+
        '          b_owner = b;\n'+
        '          $LASTPOS=26001674;\n'+
        '          if (a===b) {\n'+
        '            return _this;\n'+
        '          }\n'+
        '          $LASTPOS=26001710;\n'+
        '          if (! (b_owner instanceof w.B)) {\n'+
        '            return _this;\n'+
        '          }\n'+
        '          $LASTPOS=26001815;\n'+
        '          if (a.crashTo1(b)) {\n'+
        '            $LASTPOS=26001918;\n'+
        '            w.h(a_owner,b_owner);\n'+
        '            \n'+
        '          }\n'+
        '        });\n'+
        '      });\n'+
        '    });\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  watchHit :function _trc_func_26002002_14(typeA,typeB,onHit) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var p;\n'+
        '    \n'+
        '    $LASTPOS=26002048;\n'+
        '    p = {A: typeA,B: typeB,h: onHit};\n'+
        '    $LASTPOS=26002112;\n'+
        '    _this.hitWatchers.push(p);\n'+
        '  },\n'+
        '  drawGrid :function _trc_func_26002137_15(c) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var ctx;\n'+
        '    var i;\n'+
        '    \n'+
        '    $LASTPOS=26002165;\n'+
        '    ctx = c.getContext("2d");\n'+
        '    $LASTPOS=26002198;\n'+
        '    ctx.textBaseline="top";\n'+
        '    $LASTPOS=26002227;\n'+
        '    ctx.save();\n'+
        '    $LASTPOS=26002244;\n'+
        '    ctx.strokeStyle="rgb(40,100,200)";\n'+
        '    $LASTPOS=26002284;\n'+
        '    $LASTPOS=26002289;\n'+
        '    i = 0;\n'+
        '    while(i<c.width) {\n'+
        '      {\n'+
        '        $LASTPOS=26002329;\n'+
        '        ctx.beginPath();\n'+
        '        $LASTPOS=26002355;\n'+
        '        ctx.lineWidth=(i%100==0?4:1);\n'+
        '        $LASTPOS=26002401;\n'+
        '        ctx.moveTo(i,0);\n'+
        '        $LASTPOS=26002427;\n'+
        '        ctx.lineTo(i,c.height);\n'+
        '        $LASTPOS=26002460;\n'+
        '        ctx.closePath();\n'+
        '        $LASTPOS=26002486;\n'+
        '        ctx.stroke();\n'+
        '      }\n'+
        '      i+=10;\n'+
        '    }\n'+
        '    $LASTPOS=26002518;\n'+
        '    $LASTPOS=26002523;\n'+
        '    i = 0;\n'+
        '    while(i<c.height) {\n'+
        '      {\n'+
        '        $LASTPOS=26002564;\n'+
        '        ctx.beginPath();\n'+
        '        $LASTPOS=26002590;\n'+
        '        ctx.lineWidth=(i%100==0?4:1);\n'+
        '        $LASTPOS=26002636;\n'+
        '        ctx.moveTo(0,i);\n'+
        '        $LASTPOS=26002662;\n'+
        '        ctx.lineTo(c.width,i);\n'+
        '        $LASTPOS=26002694;\n'+
        '        ctx.closePath();\n'+
        '        $LASTPOS=26002720;\n'+
        '        ctx.stroke();\n'+
        '      }\n'+
        '      i+=10;\n'+
        '    }\n'+
        '    $LASTPOS=26002746;\n'+
        '    ctx.fillStyle="white";\n'+
        '    $LASTPOS=26002774;\n'+
        '    ctx.font="15px monospaced";\n'+
        '    $LASTPOS=26002807;\n'+
        '    $LASTPOS=26002812;\n'+
        '    i = 100;\n'+
        '    while(i<c.width) {\n'+
        '      {\n'+
        '        $LASTPOS=26002855;\n'+
        '        ctx.fillText(i,i,0);\n'+
        '      }\n'+
        '      i+=100;\n'+
        '    }\n'+
        '    $LASTPOS=26002889;\n'+
        '    $LASTPOS=26002894;\n'+
        '    i = 100;\n'+
        '    while(i<c.height) {\n'+
        '      {\n'+
        '        $LASTPOS=26002938;\n'+
        '        ctx.fillText(i,0,i);\n'+
        '      }\n'+
        '      i+=100;\n'+
        '    }\n'+
        '    $LASTPOS=26002972;\n'+
        '    ctx.restore();\n'+
        '  },\n'+
        '  fiber$drawGrid :function _trc_func_26002137_16(_thread,c) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var ctx;\n'+
        '    var i;\n'+
        '    \n'+
        '    $LASTPOS=26002165;\n'+
        '    ctx = c.getContext("2d");\n'+
        '    $LASTPOS=26002198;\n'+
        '    ctx.textBaseline="top";\n'+
        '    $LASTPOS=26002227;\n'+
        '    ctx.save();\n'+
        '    $LASTPOS=26002244;\n'+
        '    ctx.strokeStyle="rgb(40,100,200)";\n'+
        '    $LASTPOS=26002284;\n'+
        '    $LASTPOS=26002289;\n'+
        '    i = 0;\n'+
        '    while(i<c.width) {\n'+
        '      {\n'+
        '        $LASTPOS=26002329;\n'+
        '        ctx.beginPath();\n'+
        '        $LASTPOS=26002355;\n'+
        '        ctx.lineWidth=(i%100==0?4:1);\n'+
        '        $LASTPOS=26002401;\n'+
        '        ctx.moveTo(i,0);\n'+
        '        $LASTPOS=26002427;\n'+
        '        ctx.lineTo(i,c.height);\n'+
        '        $LASTPOS=26002460;\n'+
        '        ctx.closePath();\n'+
        '        $LASTPOS=26002486;\n'+
        '        ctx.stroke();\n'+
        '      }\n'+
        '      i+=10;\n'+
        '    }\n'+
        '    $LASTPOS=26002518;\n'+
        '    $LASTPOS=26002523;\n'+
        '    i = 0;\n'+
        '    while(i<c.height) {\n'+
        '      {\n'+
        '        $LASTPOS=26002564;\n'+
        '        ctx.beginPath();\n'+
        '        $LASTPOS=26002590;\n'+
        '        ctx.lineWidth=(i%100==0?4:1);\n'+
        '        $LASTPOS=26002636;\n'+
        '        ctx.moveTo(0,i);\n'+
        '        $LASTPOS=26002662;\n'+
        '        ctx.lineTo(c.width,i);\n'+
        '        $LASTPOS=26002694;\n'+
        '        ctx.closePath();\n'+
        '        $LASTPOS=26002720;\n'+
        '        ctx.stroke();\n'+
        '      }\n'+
        '      i+=10;\n'+
        '    }\n'+
        '    $LASTPOS=26002746;\n'+
        '    ctx.fillStyle="white";\n'+
        '    $LASTPOS=26002774;\n'+
        '    ctx.font="15px monospaced";\n'+
        '    $LASTPOS=26002807;\n'+
        '    $LASTPOS=26002812;\n'+
        '    i = 100;\n'+
        '    while(i<c.width) {\n'+
        '      {\n'+
        '        $LASTPOS=26002855;\n'+
        '        ctx.fillText(i,i,0);\n'+
        '      }\n'+
        '      i+=100;\n'+
        '    }\n'+
        '    $LASTPOS=26002889;\n'+
        '    $LASTPOS=26002894;\n'+
        '    i = 100;\n'+
        '    while(i<c.height) {\n'+
        '      {\n'+
        '        $LASTPOS=26002938;\n'+
        '        ctx.fillText(i,0,i);\n'+
        '      }\n'+
        '      i+=100;\n'+
        '    }\n'+
        '    $LASTPOS=26002972;\n'+
        '    ctx.restore();\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  setImageList :function _trc_func_26002991_17(il) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=26003024;\n'+
        '    _this.imageList=il;\n'+
        '  },\n'+
        '  fiber$setImageList :function _trc_func_26002991_18(_thread,il) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=26003024;\n'+
        '    _this.imageList=il;\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  getImageList :function _trc_func_26003042_19() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    return _this.imageList;\n'+
        '  },\n'+
        '  fiber$getImageList :function _trc_func_26003042_20(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    _thread.retVal=_this.imageList;return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  scrollTo :function _trc_func_26003095_21(scrollX,scrollY) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=26003136;\n'+
        '    _this.sx=scrollX;\n'+
        '    $LASTPOS=26003153;\n'+
        '    _this.sy=scrollY;\n'+
        '  },\n'+
        '  fiber$scrollTo :function _trc_func_26003095_22(_thread,scrollX,scrollY) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=26003136;\n'+
        '    _this.sx=scrollX;\n'+
        '    $LASTPOS=26003153;\n'+
        '    _this.sy=scrollY;\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  __dummy: false\n'+
        '});\n'+
        'Tonyu.klass.addMeta(Tonyu.classes.kernel.Sprites,{"fullName":"kernel.Sprites","namespace":"kernel","shortName":"Sprites","decls":{"methods":{"main":{"nowait":false},"new":{"nowait":false},"add":{"nowait":false},"remove":{"nowait":false},"clear":{"nowait":false},"compOrder":{"nowait":false},"draw":{"nowait":true},"checkHit":{"nowait":false},"watchHit":{"nowait":true},"drawGrid":{"nowait":false},"setImageList":{"nowait":false},"getImageList":{"nowait":false},"scrollTo":{"nowait":false}}}});\n'+
        '\n'+
        'Tonyu.klass.ensureNamespace(Tonyu.classes,\'kernel\');\n'+
        'Tonyu.classes.kernel.T1Line=Tonyu.klass(Tonyu.classes.kernel.Actor,[],{\n'+
        '  main :function _trc_func_27000000_0() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  fiber$main :function _trc_func_27000000_1(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  draw :function _trc_func_27000016_2(ctx) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=27000034;\n'+
        '    if (_this.hidden) {\n'+
        '      return _this;\n'+
        '    }\n'+
        '    $LASTPOS=27000065;\n'+
        '    ctx.strokeStyle=_this.col;\n'+
        '    $LASTPOS=27000091;\n'+
        '    ctx.beginPath();\n'+
        '    $LASTPOS=27000113;\n'+
        '    ctx.moveTo(_this.x,_this.y);\n'+
        '    $LASTPOS=27000135;\n'+
        '    ctx.lineTo(_this.tx,_this.ty);\n'+
        '    $LASTPOS=27000159;\n'+
        '    ctx.stroke();\n'+
        '    $LASTPOS=27000178;\n'+
        '    _this.hidden=true;\n'+
        '  },\n'+
        '  __dummy: false\n'+
        '});\n'+
        'Tonyu.klass.addMeta(Tonyu.classes.kernel.T1Line,{"fullName":"kernel.T1Line","namespace":"kernel","shortName":"T1Line","decls":{"methods":{"main":{"nowait":false},"draw":{"nowait":true}}}});\n'+
        '\n'+
        'Tonyu.klass.ensureNamespace(Tonyu.classes,\'kernel\');\n'+
        'Tonyu.classes.kernel.T1Map=Tonyu.klass(Tonyu.classes.kernel.Map,[],{\n'+
        '  main :function _trc_func_28000000_0() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  fiber$main :function _trc_func_28000000_1(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  setBGColor :function _trc_func_28000042_2(c) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=28000064;\n'+
        '    Tonyu.globals.$Screen.setBGColor(c);\n'+
        '  },\n'+
        '  fiber$setBGColor :function _trc_func_28000042_3(_thread,c) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=28000064;\n'+
        '    Tonyu.globals.$Screen.setBGColor(c);\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  load :function _trc_func_28000091_4(fileName) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var f;\n'+
        '    var o;\n'+
        '    \n'+
        '    $LASTPOS=28000469;\n'+
        '    f = _this.file("../maps/").rel(fileName);\n'+
        '    $LASTPOS=28000512;\n'+
        '    o = f.obj();\n'+
        '    $LASTPOS=28000532;\n'+
        '    _this.chipWidth=o.chipWidth;\n'+
        '    $LASTPOS=28000560;\n'+
        '    _this.chipHeight=o.chipHeight;\n'+
        '    $LASTPOS=28000590;\n'+
        '    _this.baseData=o.baseData;\n'+
        '    $LASTPOS=28000616;\n'+
        '    _this.mapTable=_this.conv(_this.baseData[0],o.pTable);\n'+
        '    $LASTPOS=28000658;\n'+
        '    _this.mapData=_this.mapTable;\n'+
        '    $LASTPOS=28000681;\n'+
        '    _this.row=_this.mapTable.length;\n'+
        '    $LASTPOS=28000707;\n'+
        '    _this.col=_this.mapTable[0].length;\n'+
        '    $LASTPOS=28000736;\n'+
        '    _this.mapOnTable=_this.conv(_this.baseData[1],o.pTable);\n'+
        '    $LASTPOS=28000780;\n'+
        '    _this.mapOnData=_this.mapOnTable;\n'+
        '    $LASTPOS=28000813;\n'+
        '    _this.buf=$("<canvas>").attr({width: _this.col*_this.chipWidth,height: _this.row*_this.chipHeight});\n'+
        '    $LASTPOS=28000885;\n'+
        '    _this.initMap();\n'+
        '  },\n'+
        '  fiber$load :function _trc_func_28000091_5(_thread,fileName) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var f;\n'+
        '    var o;\n'+
        '    \n'+
        '    $LASTPOS=28000469;\n'+
        '    f = _this.file("../maps/").rel(fileName);\n'+
        '    $LASTPOS=28000512;\n'+
        '    o = f.obj();\n'+
        '    $LASTPOS=28000532;\n'+
        '    _this.chipWidth=o.chipWidth;\n'+
        '    $LASTPOS=28000560;\n'+
        '    _this.chipHeight=o.chipHeight;\n'+
        '    $LASTPOS=28000590;\n'+
        '    _this.baseData=o.baseData;\n'+
        '    \n'+
        '    _thread.enter(function _trc_func_28000091_6(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=28000616;\n'+
        '          _this.fiber$conv(_thread, _this.baseData[0], o.pTable);\n'+
        '          __pc=1;return;\n'+
        '        case 1:\n'+
        '          _this.mapTable=_thread.retVal;\n'+
        '          \n'+
        '          $LASTPOS=28000658;\n'+
        '          _this.mapData=_this.mapTable;\n'+
        '          $LASTPOS=28000681;\n'+
        '          _this.row=_this.mapTable.length;\n'+
        '          $LASTPOS=28000707;\n'+
        '          _this.col=_this.mapTable[0].length;\n'+
        '          $LASTPOS=28000736;\n'+
        '          _this.fiber$conv(_thread, _this.baseData[1], o.pTable);\n'+
        '          __pc=2;return;\n'+
        '        case 2:\n'+
        '          _this.mapOnTable=_thread.retVal;\n'+
        '          \n'+
        '          $LASTPOS=28000780;\n'+
        '          _this.mapOnData=_this.mapOnTable;\n'+
        '          $LASTPOS=28000813;\n'+
        '          _this.buf=$("<canvas>").attr({width: _this.col*_this.chipWidth,height: _this.row*_this.chipHeight});\n'+
        '          $LASTPOS=28000885;\n'+
        '          _this.fiber$initMap(_thread);\n'+
        '          __pc=3;return;\n'+
        '        case 3:\n'+
        '          \n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  conv :function _trc_func_28000903_7(mat,tbl) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var res;\n'+
        '    \n'+
        '    $LASTPOS=28000926;\n'+
        '    res = [];\n'+
        '    $LASTPOS=28000943;\n'+
        '    mat.forEach(function (row) {\n'+
        '      var rrow;\n'+
        '      \n'+
        '      $LASTPOS=28000973;\n'+
        '      rrow = [];\n'+
        '      $LASTPOS=28000995;\n'+
        '      res.push(rrow);\n'+
        '      $LASTPOS=28001020;\n'+
        '      row.forEach(function (dat) {\n'+
        '        var t;\n'+
        '        \n'+
        '        $LASTPOS=28001067;\n'+
        '        t = tbl[dat[0]];\n'+
        '        $LASTPOS=28001099;\n'+
        '        if (t) {\n'+
        '          $LASTPOS=28001106;\n'+
        '          rrow.push(Tonyu.globals[t.name]+dat[1]);\n'+
        '        } else {\n'+
        '          $LASTPOS=28001165;\n'+
        '          rrow.push(dat[1]);\n'+
        '        }\n'+
        '      });\n'+
        '    });\n'+
        '    return res;\n'+
        '  },\n'+
        '  fiber$conv :function _trc_func_28000903_8(_thread,mat,tbl) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var res;\n'+
        '    \n'+
        '    $LASTPOS=28000926;\n'+
        '    res = [];\n'+
        '    $LASTPOS=28000943;\n'+
        '    mat.forEach(function (row) {\n'+
        '      var rrow;\n'+
        '      \n'+
        '      $LASTPOS=28000973;\n'+
        '      rrow = [];\n'+
        '      $LASTPOS=28000995;\n'+
        '      res.push(rrow);\n'+
        '      $LASTPOS=28001020;\n'+
        '      row.forEach(function (dat) {\n'+
        '        var t;\n'+
        '        \n'+
        '        $LASTPOS=28001067;\n'+
        '        t = tbl[dat[0]];\n'+
        '        $LASTPOS=28001099;\n'+
        '        if (t) {\n'+
        '          $LASTPOS=28001106;\n'+
        '          rrow.push(Tonyu.globals[t.name]+dat[1]);\n'+
        '        } else {\n'+
        '          $LASTPOS=28001165;\n'+
        '          rrow.push(dat[1]);\n'+
        '        }\n'+
        '      });\n'+
        '    });\n'+
        '    _thread.retVal=res;return;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  __dummy: false\n'+
        '});\n'+
        'Tonyu.klass.addMeta(Tonyu.classes.kernel.T1Map,{"fullName":"kernel.T1Map","namespace":"kernel","shortName":"T1Map","decls":{"methods":{"main":{"nowait":false},"setBGColor":{"nowait":false},"load":{"nowait":false},"conv":{"nowait":false}}}});\n'+
        '\n'+
        'Tonyu.klass.ensureNamespace(Tonyu.classes,\'kernel\');\n'+
        'Tonyu.classes.kernel.T1Page=Tonyu.klass(Tonyu.classes.kernel.PlainChar,[],{\n'+
        '  main :function _trc_func_29000000_0() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  fiber$main :function _trc_func_29000000_1(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  initGlobals :function _trc_func_29000022_2() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=29000044;\n'+
        '    Tonyu.globals.$chars=Tonyu.globals.$Sprites.sprites;\n'+
        '    $LASTPOS=29000074;\n'+
        '    Tonyu.globals.$Boot.setFrameRate(60);\n'+
        '    $LASTPOS=29000103;\n'+
        '    Tonyu.globals.$clBlack=_this.color(0,0,0);\n'+
        '    $LASTPOS=29000131;\n'+
        '    Tonyu.globals.$clRed=_this.color(255,0,0);\n'+
        '    $LASTPOS=29000159;\n'+
        '    Tonyu.globals.$clGreen=_this.color(0,255,0);\n'+
        '    $LASTPOS=29000189;\n'+
        '    Tonyu.globals.$clYellow=_this.color(255,255,0);\n'+
        '    $LASTPOS=29000222;\n'+
        '    Tonyu.globals.$clBlue=_this.color(0,0,255);\n'+
        '    $LASTPOS=29000251;\n'+
        '    Tonyu.globals.$clPink=_this.color(255,0,255);\n'+
        '    $LASTPOS=29000282;\n'+
        '    Tonyu.globals.$clAqua=_this.color(0,255,255);\n'+
        '    $LASTPOS=29000313;\n'+
        '    Tonyu.globals.$clWhite=_this.color(255,255,255);\n'+
        '    $LASTPOS=29000347;\n'+
        '    Tonyu.globals.$mplayer=new Tonyu.classes.kernel.MediaPlayer;\n'+
        '  },\n'+
        '  fiber$initGlobals :function _trc_func_29000022_3(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=29000044;\n'+
        '    Tonyu.globals.$chars=Tonyu.globals.$Sprites.sprites;\n'+
        '    $LASTPOS=29000074;\n'+
        '    Tonyu.globals.$Boot.setFrameRate(60);\n'+
        '    \n'+
        '    _thread.enter(function _trc_func_29000022_4(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=29000103;\n'+
        '          _this.fiber$color(_thread, 0, 0, 0);\n'+
        '          __pc=1;return;\n'+
        '        case 1:\n'+
        '          Tonyu.globals.$clBlack=_thread.retVal;\n'+
        '          \n'+
        '          $LASTPOS=29000131;\n'+
        '          _this.fiber$color(_thread, 255, 0, 0);\n'+
        '          __pc=2;return;\n'+
        '        case 2:\n'+
        '          Tonyu.globals.$clRed=_thread.retVal;\n'+
        '          \n'+
        '          $LASTPOS=29000159;\n'+
        '          _this.fiber$color(_thread, 0, 255, 0);\n'+
        '          __pc=3;return;\n'+
        '        case 3:\n'+
        '          Tonyu.globals.$clGreen=_thread.retVal;\n'+
        '          \n'+
        '          $LASTPOS=29000189;\n'+
        '          _this.fiber$color(_thread, 255, 255, 0);\n'+
        '          __pc=4;return;\n'+
        '        case 4:\n'+
        '          Tonyu.globals.$clYellow=_thread.retVal;\n'+
        '          \n'+
        '          $LASTPOS=29000222;\n'+
        '          _this.fiber$color(_thread, 0, 0, 255);\n'+
        '          __pc=5;return;\n'+
        '        case 5:\n'+
        '          Tonyu.globals.$clBlue=_thread.retVal;\n'+
        '          \n'+
        '          $LASTPOS=29000251;\n'+
        '          _this.fiber$color(_thread, 255, 0, 255);\n'+
        '          __pc=6;return;\n'+
        '        case 6:\n'+
        '          Tonyu.globals.$clPink=_thread.retVal;\n'+
        '          \n'+
        '          $LASTPOS=29000282;\n'+
        '          _this.fiber$color(_thread, 0, 255, 255);\n'+
        '          __pc=7;return;\n'+
        '        case 7:\n'+
        '          Tonyu.globals.$clAqua=_thread.retVal;\n'+
        '          \n'+
        '          $LASTPOS=29000313;\n'+
        '          _this.fiber$color(_thread, 255, 255, 255);\n'+
        '          __pc=8;return;\n'+
        '        case 8:\n'+
        '          Tonyu.globals.$clWhite=_thread.retVal;\n'+
        '          \n'+
        '          $LASTPOS=29000347;\n'+
        '          Tonyu.globals.$mplayer=new Tonyu.classes.kernel.MediaPlayer;\n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  __dummy: false\n'+
        '});\n'+
        'Tonyu.klass.addMeta(Tonyu.classes.kernel.T1Page,{"fullName":"kernel.T1Page","namespace":"kernel","shortName":"T1Page","decls":{"methods":{"main":{"nowait":false},"initGlobals":{"nowait":false}}}});\n'+
        '\n'+
        'Tonyu.klass.ensureNamespace(Tonyu.classes,\'kernel\');\n'+
        'Tonyu.classes.kernel.T1Text=Tonyu.klass(Tonyu.classes.kernel.Actor,[],{\n'+
        '  main :function _trc_func_30000000_0() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  fiber$main :function _trc_func_30000000_1(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  draw :function _trc_func_30000016_2(c) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=30000032;\n'+
        '    if (_this.hidden) {\n'+
        '      return _this;\n'+
        '    }\n'+
        '    $LASTPOS=30000057;\n'+
        '    c.font=_this.size+"px \'ＭＳ Ｐゴシック\'";\n'+
        '    $LASTPOS=30000097;\n'+
        '    Tonyu.classes.kernel.Actor.prototype.draw.apply( _this, [c]);\n'+
        '    $LASTPOS=30000117;\n'+
        '    _this.hidden=true;\n'+
        '  },\n'+
        '  __dummy: false\n'+
        '});\n'+
        'Tonyu.klass.addMeta(Tonyu.classes.kernel.T1Text,{"fullName":"kernel.T1Text","namespace":"kernel","shortName":"T1Text","decls":{"methods":{"main":{"nowait":false},"draw":{"nowait":true}}}});\n'+
        '\n'+
        'Tonyu.klass.ensureNamespace(Tonyu.classes,\'kernel\');\n'+
        'Tonyu.classes.kernel.T2Body=Tonyu.klass(Tonyu.classes.kernel.BodyActor,[],{\n'+
        '  main :function _trc_func_31000000_0() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  fiber$main :function _trc_func_31000000_1(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  __dummy: false\n'+
        '});\n'+
        'Tonyu.klass.addMeta(Tonyu.classes.kernel.T2Body,{"fullName":"kernel.T2Body","namespace":"kernel","shortName":"T2Body","decls":{"methods":{"main":{"nowait":false}}}});\n'+
        '\n'+
        'Tonyu.klass.ensureNamespace(Tonyu.classes,\'kernel\');\n'+
        'Tonyu.classes.kernel.T2World=Tonyu.klass(Tonyu.classes.kernel.Actor,[Tonyu.classes.kernel.T2Mod],{\n'+
        '  main :function _trc_func_32000000_0() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=32000150;\n'+
        '    _this.loop();\n'+
        '  },\n'+
        '  fiber$main :function _trc_func_32000000_1(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.enter(function _trc_func_32000000_2(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=32000150;\n'+
        '          _this.fiber$loop(_thread);\n'+
        '          __pc=1;return;\n'+
        '        case 1:\n'+
        '          \n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  onAppear :function _trc_func_32000067_3() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=32000086;\n'+
        '    Tonyu.globals.$currentProject.requestPlugin("box2d");\n'+
        '    $LASTPOS=32000133;\n'+
        '    _this.initWorld();\n'+
        '  },\n'+
        '  fiber$onAppear :function _trc_func_32000067_4(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=32000086;\n'+
        '    Tonyu.globals.$currentProject.requestPlugin("box2d");\n'+
        '    \n'+
        '    _thread.enter(function _trc_func_32000067_5(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=32000133;\n'+
        '          _this.fiber$initWorld(_thread);\n'+
        '          __pc=1;return;\n'+
        '        case 1:\n'+
        '          \n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  initWorld :function _trc_func_32000163_6() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var b2World;\n'+
        '    var b2Vec2;\n'+
        '    \n'+
        '    $LASTPOS=32000183;\n'+
        '    _this.gravity=_this.gravity||9.8;\n'+
        '    $LASTPOS=32000212;\n'+
        '    _this.gravityX=_this.gravityX||0;\n'+
        '    $LASTPOS=32000241;\n'+
        '    b2World = Box2D.Dynamics.b2World;\n'+
        '    $LASTPOS=32000284;\n'+
        '    b2Vec2 = Box2D.Common.Math.b2Vec2;\n'+
        '    $LASTPOS=32000328;\n'+
        '    _this.scale=_this.scale||32;\n'+
        '    $LASTPOS=32000352;\n'+
        '    _this.world=new b2World(new b2Vec2(_this.gravityX,_this.gravity),true);\n'+
        '    $LASTPOS=32000477;\n'+
        '    Tonyu.globals.$t2World=_this;\n'+
        '    $LASTPOS=32000497;\n'+
        '    Tonyu.globals.$Boot.on("stop",Tonyu.bindFunc(_this,_this.releaseWorld));\n'+
        '    $LASTPOS=32000533;\n'+
        '    _this.on("die",Tonyu.bindFunc(_this,_this.releaseWorld));\n'+
        '  },\n'+
        '  fiber$initWorld :function _trc_func_32000163_7(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var b2World;\n'+
        '    var b2Vec2;\n'+
        '    \n'+
        '    $LASTPOS=32000183;\n'+
        '    _this.gravity=_this.gravity||9.8;\n'+
        '    $LASTPOS=32000212;\n'+
        '    _this.gravityX=_this.gravityX||0;\n'+
        '    $LASTPOS=32000241;\n'+
        '    b2World = Box2D.Dynamics.b2World;\n'+
        '    $LASTPOS=32000284;\n'+
        '    b2Vec2 = Box2D.Common.Math.b2Vec2;\n'+
        '    $LASTPOS=32000328;\n'+
        '    _this.scale=_this.scale||32;\n'+
        '    $LASTPOS=32000352;\n'+
        '    _this.world=new b2World(new b2Vec2(_this.gravityX,_this.gravity),true);\n'+
        '    $LASTPOS=32000477;\n'+
        '    Tonyu.globals.$t2World=_this;\n'+
        '    $LASTPOS=32000497;\n'+
        '    Tonyu.globals.$Boot.on("stop",Tonyu.bindFunc(_this,_this.releaseWorld));\n'+
        '    \n'+
        '    _thread.enter(function _trc_func_32000163_8(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=32000533;\n'+
        '          _this.fiber$on(_thread, "die", Tonyu.bindFunc(_this,_this.releaseWorld));\n'+
        '          __pc=1;return;\n'+
        '        case 1:\n'+
        '          \n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  releaseWorld :function _trc_func_32000561_9() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=32000584;\n'+
        '    if (Tonyu.globals.$t2World===_this) {\n'+
        '      $LASTPOS=32000605;\n'+
        '      Tonyu.globals.$t2World=null;\n'+
        '    }\n'+
        '  },\n'+
        '  fiber$releaseWorld :function _trc_func_32000561_10(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    $LASTPOS=32000584;\n'+
        '    if (Tonyu.globals.$t2World===_this) {\n'+
        '      $LASTPOS=32000605;\n'+
        '      Tonyu.globals.$t2World=null;\n'+
        '    }\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  loop :function _trc_func_32000626_11() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=32000641;\n'+
        '    while (true) {\n'+
        '      $LASTPOS=32000664;\n'+
        '      _this.world.Step(1/Tonyu.globals.$Boot.getFrameRate(),10,10);\n'+
        '      $LASTPOS=32000831;\n'+
        '      _this.world.DrawDebugData();\n'+
        '      $LASTPOS=32000863;\n'+
        '      _this.world.ClearForces();\n'+
        '      $LASTPOS=32000893;\n'+
        '      _this.updatePos();\n'+
        '      $LASTPOS=32000915;\n'+
        '      _this.update();\n'+
        '      \n'+
        '    }\n'+
        '  },\n'+
        '  fiber$loop :function _trc_func_32000626_12(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.enter(function _trc_func_32000626_13(_thread) {\n'+
        '      if (_thread.lastEx) __pc=_thread.catchPC;\n'+
        '      for(var __cnt=100 ; __cnt--;) {\n'+
        '        switch (__pc) {\n'+
        '        case 0:\n'+
        '          $LASTPOS=32000641;\n'+
        '        case 1:\n'+
        '          $LASTPOS=32000664;\n'+
        '          _this.world.Step(1/Tonyu.globals.$Boot.getFrameRate(),10,10);\n'+
        '          $LASTPOS=32000831;\n'+
        '          _this.world.DrawDebugData();\n'+
        '          $LASTPOS=32000863;\n'+
        '          _this.world.ClearForces();\n'+
        '          $LASTPOS=32000893;\n'+
        '          _this.fiber$updatePos(_thread);\n'+
        '          __pc=2;return;\n'+
        '        case 2:\n'+
        '          \n'+
        '          $LASTPOS=32000915;\n'+
        '          _this.fiber$update(_thread);\n'+
        '          __pc=3;return;\n'+
        '        case 3:\n'+
        '          \n'+
        '          __pc=1;break;\n'+
        '        case 4:\n'+
        '          \n'+
        '          _thread.exit(_this);return;\n'+
        '        }\n'+
        '      }\n'+
        '    });\n'+
        '  },\n'+
        '  updatePos :function _trc_func_32000936_14() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var b;\n'+
        '    var d;\n'+
        '    \n'+
        '    $LASTPOS=32000956;\n'+
        '    $LASTPOS=32000961;\n'+
        '    b = _this.world.GetBodyList();\n'+
        '    while(b) {\n'+
        '      {\n'+
        '        $LASTPOS=32001015;\n'+
        '        d = b.GetUserData();\n'+
        '        $LASTPOS=32001047;\n'+
        '        if (d) {\n'+
        '          $LASTPOS=32001053;\n'+
        '          d.updatePos();\n'+
        '        }\n'+
        '      }\n'+
        '      b=b.GetNext();\n'+
        '    }\n'+
        '  },\n'+
        '  fiber$updatePos :function _trc_func_32000936_15(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    var b;\n'+
        '    var d;\n'+
        '    \n'+
        '    $LASTPOS=32000956;\n'+
        '    $LASTPOS=32000961;\n'+
        '    b = _this.world.GetBodyList();\n'+
        '    while(b) {\n'+
        '      {\n'+
        '        $LASTPOS=32001015;\n'+
        '        d = b.GetUserData();\n'+
        '        $LASTPOS=32001047;\n'+
        '        if (d) {\n'+
        '          $LASTPOS=32001053;\n'+
        '          d.updatePos();\n'+
        '        }\n'+
        '      }\n'+
        '      b=b.GetNext();\n'+
        '    }\n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  __dummy: false\n'+
        '});\n'+
        'Tonyu.klass.addMeta(Tonyu.classes.kernel.T2World,{"fullName":"kernel.T2World","namespace":"kernel","shortName":"T2World","decls":{"methods":{"main":{"nowait":false},"onAppear":{"nowait":false},"initWorld":{"nowait":false},"releaseWorld":{"nowait":false},"loop":{"nowait":false},"updatePos":{"nowait":false}}}});\n'+
        '\n'+
        'Tonyu.klass.ensureNamespace(Tonyu.classes,\'kernel\');\n'+
        'Tonyu.classes.kernel.TextChar=Tonyu.klass(Tonyu.classes.kernel.PlainChar,[],{\n'+
        '  main :function _trc_func_33000000_0() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  fiber$main :function _trc_func_33000000_1(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  initialize :function _trc_func_33000040_2(xx,yy,t,c,s) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=33000065;\n'+
        '    Tonyu.classes.kernel.PlainChar.apply( _this, [xx,yy]);\n'+
        '    $LASTPOS=33000084;\n'+
        '    _this.text="";\n'+
        '    $LASTPOS=33000098;\n'+
        '    _this.col=Tonyu.globals.$clWhite;\n'+
        '    $LASTPOS=33000117;\n'+
        '    _this.size=20;\n'+
        '    $LASTPOS=33000131;\n'+
        '    if (! _this.x) {\n'+
        '      $LASTPOS=33000144;\n'+
        '      _this.x=0;\n'+
        '    }\n'+
        '    $LASTPOS=33000159;\n'+
        '    if (! _this.y) {\n'+
        '      $LASTPOS=33000172;\n'+
        '      _this.y=0;\n'+
        '    }\n'+
        '    $LASTPOS=33000187;\n'+
        '    if (t) {\n'+
        '      $LASTPOS=33000194;\n'+
        '      _this.text=t;\n'+
        '    }\n'+
        '    $LASTPOS=33000207;\n'+
        '    if (c) {\n'+
        '      $LASTPOS=33000214;\n'+
        '      _this.fillStyle=c;\n'+
        '    }\n'+
        '    $LASTPOS=33000232;\n'+
        '    if (s) {\n'+
        '      $LASTPOS=33000239;\n'+
        '      _this.size=s;\n'+
        '    }\n'+
        '  },\n'+
        '  draw :function _trc_func_33000251_3(ctx) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    var rect;\n'+
        '    \n'+
        '    $LASTPOS=33000269;\n'+
        '    if (! _this.size) {\n'+
        '      $LASTPOS=33000280;\n'+
        '      _this.size=15;\n'+
        '    }\n'+
        '    $LASTPOS=33000294;\n'+
        '    if (! _this.align) {\n'+
        '      $LASTPOS=33000306;\n'+
        '      _this.align="left";\n'+
        '    }\n'+
        '    $LASTPOS=33000325;\n'+
        '    if (! _this.fillStyle) {\n'+
        '      $LASTPOS=33000341;\n'+
        '      _this.fillStyle="white";\n'+
        '    }\n'+
        '    $LASTPOS=33000365;\n'+
        '    ctx.fillStyle=_this.fillStyle;\n'+
        '    $LASTPOS=33000395;\n'+
        '    ctx.globalAlpha=_this.alpha/255;\n'+
        '    $LASTPOS=33000432;\n'+
        '    ctx.font=_this.size+"px \'ＭＳ Ｐゴシック\'";\n'+
        '    $LASTPOS=33000468;\n'+
        '    rect = TextRect.draw(ctx,_this.text,_this.x,_this.y,_this.size,_this.align,"fill");\n'+
        '    $LASTPOS=33000536;\n'+
        '    _this.width=rect.w;\n'+
        '    $LASTPOS=33000555;\n'+
        '    _this.height=rect.h;\n'+
        '  },\n'+
        '  __dummy: false\n'+
        '});\n'+
        'Tonyu.klass.addMeta(Tonyu.classes.kernel.TextChar,{"fullName":"kernel.TextChar","namespace":"kernel","shortName":"TextChar","decls":{"methods":{"main":{"nowait":false},"new":{"nowait":false},"draw":{"nowait":true}}}});\n'+
        '\n'+
        'Tonyu.klass.ensureNamespace(Tonyu.classes,\'kernel\');\n'+
        'Tonyu.classes.kernel.DxChar=Tonyu.klass(Tonyu.classes.kernel.SpriteChar,[],{\n'+
        '  main :function _trc_func_34000000_0() {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '  },\n'+
        '  fiber$main :function _trc_func_34000000_1(_thread) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    //var _arguments=Tonyu.A(arguments);\n'+
        '    var __pc=0;\n'+
        '    \n'+
        '    \n'+
        '    _thread.retVal=_this;return;\n'+
        '  },\n'+
        '  initialize :function _trc_func_34000023_2(xx,yy,pp,ff,sz,rt,al) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=34000057;\n'+
        '    Tonyu.classes.kernel.SpriteChar.apply( _this, [xx,yy,pp,ff]);\n'+
        '    $LASTPOS=34000082;\n'+
        '    _this.scaleX=1;\n'+
        '    $LASTPOS=34000097;\n'+
        '    if (sz) {\n'+
        '      $LASTPOS=34000105;\n'+
        '      _this.scaleX=sz;\n'+
        '    }\n'+
        '    $LASTPOS=34000121;\n'+
        '    _this.angle=0;\n'+
        '    $LASTPOS=34000135;\n'+
        '    if (rt) {\n'+
        '      $LASTPOS=34000143;\n'+
        '      _this.angle=rt;\n'+
        '    }\n'+
        '    $LASTPOS=34000158;\n'+
        '    _this.alpha=255;\n'+
        '    $LASTPOS=34000174;\n'+
        '    if (al) {\n'+
        '      $LASTPOS=34000182;\n'+
        '      _this.alpha=al;\n'+
        '    }\n'+
        '  },\n'+
        '  draw :function _trc_func_34000196_3(c) {\n'+
        '    var _this=this.isTonyuObject?this:Tonyu.not_a_tonyu_object(this);\n'+
        '    \n'+
        '    $LASTPOS=34000212;\n'+
        '    _this.rotation=_this.angle;\n'+
        '    $LASTPOS=34000233;\n'+
        '    Tonyu.classes.kernel.SpriteChar.prototype.draw.apply( _this, [c]);\n'+
        '  },\n'+
        '  __dummy: false\n'+
        '});\n'+
        'Tonyu.klass.addMeta(Tonyu.classes.kernel.DxChar,{"fullName":"kernel.DxChar","namespace":"kernel","shortName":"DxChar","decls":{"methods":{"main":{"nowait":false},"new":{"nowait":false},"draw":{"nowait":true}}}});\n'+
        '\n'
      ,
      'options.json': 
        '{\n'+
        '    "compiler":{\n'+
        '        "namespace": "kernel",\n'+
        '        "outputFile": "js/concat.js"\n'+
        '    }\n'+
        '}\n'
      
    }
  };
  if (WebSite.devMode || WebSite.disableROM['ROM_k.js'] || WebSite.isNW) {
    rom.base='/ROM'+rom.base;
  } else {
    FS.mountROM(rom);
  }
})();