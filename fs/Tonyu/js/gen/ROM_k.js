(function () {
  var rom={
    base: '/Tonyu/Kernel/',
    data: {
      '': '{".desktop":{"lastUpdate":1424849946377},"Actor.tonyu":{"lastUpdate":1425004177938},"BaseActor.tonyu":{"lastUpdate":1425018531557},"BodyActor.tonyu":{"lastUpdate":1425265847796},"Boot.tonyu":{"lastUpdate":1425019818961},"DxChar.tonyu":{"lastUpdate":1421384204610},"EventMod.tonyu":{"lastUpdate":1425010352383},"InputDevice.tonyu":{"lastUpdate":1416890086000},"Keys.tonyu":{"lastUpdate":1412697666000},"Map.tonyu":{"lastUpdate":1421122943495},"MapEditor.tonyu":{"lastUpdate":1421122943503},"MathMod.tonyu":{"lastUpdate":1424849946395},"MediaPlayer.tonyu":{"lastUpdate":1421384204625},"MML.tonyu":{"lastUpdate":1424849946399},"NoviceActor.tonyu":{"lastUpdate":1412697666000},"Pad.tonyu":{"lastUpdate":1421122943510},"Panel.tonyu":{"lastUpdate":1424849946404},"PlainChar.tonyu":{"lastUpdate":1421384204651},"PlayMod.tonyu":{"lastUpdate":1425018365373},"ScaledCanvas.tonyu":{"lastUpdate":1421122943524},"SecretChar.tonyu":{"lastUpdate":1421384204695},"SpriteChar.tonyu":{"lastUpdate":1421384204710},"Sprites.tonyu":{"lastUpdate":1421122943538},"T1Line.tonyu":{"lastUpdate":1421384204718},"T1Map.tonyu":{"lastUpdate":1421384204728},"T1Page.tonyu":{"lastUpdate":1421384204737},"T1Text.tonyu":{"lastUpdate":1421384204745},"T2Body.tonyu":{"lastUpdate":1425264703379},"T2Mod.tonyu":{"lastUpdate":1425020004839},"T2World.tonyu":{"lastUpdate":1425266002500},"TextChar.tonyu":{"lastUpdate":1421384204762},"TObject.tonyu":{"lastUpdate":1421122943543},"TQuery.tonyu":{"lastUpdate":1412697666000},"WaveTable.tonyu":{"lastUpdate":1412697666000}}',
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
        'includes MathMod,EventMod;\n'+
        'native Tonyu;\n'+
        'native Key;\n'+
        'native console;\n'+
        'native Math;\n'+
        'native fukidashi;\n'+
        'native TextRect;\n'+
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
        '        var rect=TextRect.draw(ctx, text, x, y, size, align , "fill");\n'+
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
        '        tp[0].extend{x,y,tx,ty,col};\n'+
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
        '    buf=$("<canvas>").attr{width,height};\n'+
        '}\n'+
        '\\setPanel(width,height){\n'+
        '    this.width=width;\n'+
        '    this.height=height;\n'+
        '    buf=$("<canvas>").attr{width,height};\n'+
        '}\n'+
        '\\setFillStyle(color){\n'+
        '    this.fillStyle=color;\n'+
        '}\n'+
        '\\fillRect(x,y,rectWidth,rectHeight){\n'+
        '    ctx=buf[0].getContext("2d");\n'+
        '    ctx.save();\n'+
        '    //ctx.clearRect(0,0,this.width,this.height);\n'+
        '    ctx.fillStyle=fillStyle;\n'+
        '    ctx.fillRect(x,y,rectWidth,rectHeight);\n'+
        '    ctx.restore();\n'+
        '}\n'+
        '\\fillText(text,x,y,size,align){\n'+
        '    ctx=buf[0].getContext("2d");\n'+
        '    ctx.save();\n'+
        '    //ctx.clearRect(0,0,this.width,this.height);\n'+
        '    ctx.textAlign = align;\n'+
        '    ctx.fillStyle=fillStyle;\n'+
        '    ctx.font=size+"px \'Courier New\'";\n'+
        '    ctx.fillText(text,x,y);\n'+
        '    ctx.restore();\n'+
        '}\n'+
        '\\clearRect(clearX,clearY,clearW,clearH){\n'+
        '    ctx=buf[0].getContext("2d");\n'+
        '    ctx.save();\n'+
        '    ctx.clearRect(clearX,clearY,clearW,clearH);\n'+
        '    ctx.restore();\n'+
        '}\n'+
        '\\getPixel(getX,getY){\n'+
        '    if(typeof getX=="number" && !isNaN(getX) && \n'+
        '    typeof getY=="number" && !isNaN(getY)){\n'+
        '        ctx=buf[0].getContext("2d");\n'+
        '        imagedata=ctx.getImageData(getX,getY,1,1);\n'+
        '        colordata=[imagedata.data[0],imagedata.data[1],imagedata.data[2],imagedata.data[3]];\n'+
        '        //print(imagedata.data);\n'+
        '    }else{\n'+
        '        colordata=[0,0,0,0];\n'+
        '    }\n'+
        '    return(colordata);\n'+
        '}\n'+
        '\\scroll(scrollX,scrollY){\n'+
        '    ctx=buf[0].getContext("2d");\n'+
        '    ctx.save();\n'+
        '    imagedata=ctx.getImageData(0,0,this.width,this.height);\n'+
        '    clearRect(0,0,width,height);\n'+
        '    ctx.putImageData(imagedata,-scrollX,-scrollY);\n'+
        '    ctx.restore();\n'+
        '}\n'+
        '\\draw(ctx){\n'+
        '    pImg=buf[0];\n'+
        '    ctx.save();\n'+
        '    if(align=="left"){\n'+
        '        ctx.translate(x+width/2,y+height/2);\n'+
        '    }else if(align=="center"){\n'+
        '        ctx.translate(x,y);\n'+
        '    }else if(align=="right"){\n'+
        '        ctx.translate(x-width/2,y-height/2);\n'+
        '    }\n'+
        '    if(this.rotation!=0){\n'+
        '        ctx.rotate(this.rotation/180*Math.PI);\n'+
        '    }else{\n'+
        '        ctx.rotate(this.rotate/180*Math.PI);\n'+
        '    }\n'+
        '    ctx.globalAlpha=this.alpha/255;\n'+
        '    ctx.drawImage(\n'+
        '    pImg, 0, 0,width,height,\n'+
        '    -width/2, -height/2, width ,height);\n'+
        '    ctx.restore();\n'+
        '}'
      ,
      'PlainChar.tonyu': 
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
        '\\draw(c) {\n'+
        '    if (hidden) return;\n'+
        '    c.font=size+"px \'ＭＳ Ｐゴシック\'";\n'+
        '    \n'+
        '    super.draw(c);\n'+
        '    hidden=true;\n'+
        '}'
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
      
    }
  };
  if (WebSite.devMode || WebSite.disableROM['ROM_k.js'] || WebSite.isNW) {
    rom.base='/ROM'+rom.base;
  } else {
    FS.mountROM(rom);
  }
})();