if (!localStorage.norom) {
    FS.mountROM(
{
  "base": "/Tonyu/doc/",
  "data": {
    "": "{\"novice/\":{\"lastUpdate\":1392703531568},\"index.txt\":{\"lastUpdate\":1392869454452},\"tonyu2/\":{\"lastUpdate\":1392973016049}}",
    "novice/": "{\"true.txt\":1387515762325,\"left.txt\":1387515762370,\"sleep.txt\":1387515762327,\"udlr.txt\":1387515762360,\"variable.txt\":1387515762334,\"while.txt\":1387515762342,\"variable3.txt\":1387515762345,\"xy.txt\":1387515762346,\"index.txt\":1387515762348,\"variable2.txt\":1387515762349,\"item.txt\":1387515762362,\"key.txt\":1387515762356,\"getkey.txt\":1387515762355,\"projectIndex.txt\":1387515762359,\"inc.txt\":1387515762326,\"firstRun.txt\":1387515762329,\"sprite.txt\":1387515762332,\"trouble1.txt\":1387515762330,\"dec.txt\":1387515762339,\"param.txt\":1387515762365,\"newFile.txt\":1387515762351,\"say.txt\":1387515762352,\"say2.txt\":1387515762368,\"new.txt\":1387515762364,\"toc.json\":{\"lastUpdate\":1392703531568},\"spriteMove.txt\":1387515762358,\"crash.txt\":1387515762367}",
    "novice/true.txt": "* ずっと繰り返すようにしましょう\n\nさきほどのプログラムでは，[[@cfrag x<=300]]，つまりxが300以下の間は絵が右に動き，xが300をを超えたら止まりました．\n\nゲームなどにおいては，キャラクタは（ゲームオーバーやクリアにならなければ）半永久的に動き続けます．このようにずっと動く処理を書くには，[[@plistref true]]のようにします．\n\n<<code Cat true\nx=50;\nwhile(true) {\n   go(x,100);sleep();\n   x+=10;\n}\n>>\n\n実行すると，猫の画像が途中で止まらずに，そのまま画面外に出ていきます．\n\nもう一度F9を押せば，また同じ動きを見ることができます．\n\nwhile文の条件に書いてある [[@cfrag true]]という条件は，「必ず成り立つ」という意味です．この条件を書いておくと，{  } で囲まれた処理がずっと動き続けます．",
    "novice/left.txt": "*ゲームクリアの判定をしましょう\n\nすべてのリンゴを取ったら，猫が「ごちそうさま」といって，\nゲームクリアになるようにしましょう．\n\nそれには，「リンゴがあといくつ残っているか」を数える必要があります．\nそこで，リンゴの残り数を表す[[@cfrag left]]という変数を用意します．\nリンゴは2つあるので，2を覚えさせておきます．\n\n[[@plistref addl]]の[[@editadd]]の部分を追加しましょう．\n\n<<code Game addl\nsiro=new Cat;\nsiro.say(\"いただきまーす\");\napple1=new Apple;\napple1.x=200;\napple1.y=150;\napple2=new Apple;\napple2.x=300;\napple2.y=100;\nwatchHit(Cat, Apple, hitCatApple);\nleft=2;[[@editadd]]\nfunction hitCatApple(cat,apple) {\n    apple.hide();\n}\n>>\n\nさらに，リンゴを取った時に，[[@cfrag left]]の値を減らします．\n\n<<code\n変数名--; \n>>\nと書くと，変数の値を1減らすことができます．\n\n<<code Game(hitCatApple内部のみ) adddec\nfunction hitCatApple(cat,apple) {\n    apple.hide();\n    left--;[[@editadd]]\n}\n>>\n\nさらに，[[@cfrag left]] が0になったときに，猫に「ごちそうさま」というメッセージを表示させます．\n\n<<code Game(hitCatApple内部のみ) addif\nfunction hitCatApple(cat,apple) {\n    apple.hide();\n    left--;\n    if (left<=0) {[[@editadd]]\n        cat.say(\"ごちそうさま\");[[@editadd]]\n    }[[@editadd]]\n}\n>>\n",
    "novice/sleep.txt": "[[前へ>say]]\n\n*メッセージを順番に表示させてみましょう\n\nプログラムは上から順番に実行されます．\n\n今度は「こんにちは」に続けて，「さようなら」と表示させてみたいと思います．\n[[@plistref nonsleep]]を入力します．\n\n@@@@nonsleep\ngo(50,100);\nsay(\"こんにちは\");\nsay(\"さようなら\");\n@@@@\n\n実行してみましょう.\n\n[[[[@plistref nonsleep]]の実行結果>sayonara.png]]\n\nあれ！いきなり「さようなら」が表示されました．「こんにちは」は表示されなかったのでしょうか？\n\n実は，コンピュータは確かに[[@plistref nonsleep]]のプログラムを上から順番に\n\n- 猫の絵を表示する\n- 「こんにちは」と表示する\n- 「さようなら」と表示する\n\nと実行したのです．しかし，コンピュータはとても高速に動作しているので\n「こんにちは」と表示してから，人間の目に見えないうちに，すぐに「さようなら」\nと表示してしまっています．\n\nこれでは，「こんにちは」が見えないので，コンピュータに少し待ってもらうように命令を追加しましょう．\n\n@@@@sleep\ngo(50,100);\nsay(\"こんにちは\");\nsleep(30); // 追加\nsay(\"さようなら\");\n@@@@\n\n実行すると，今度は「こんにちは」が表示されてから「さようなら」が表示されました．\n\n[[@plistref sleep]]で追加した sleep という命令は，その名の通りコンピュータにしばらく寝てもらいます．\nつまり，プログラムの実行を少し待ってもらいます．\n後ろに書いた30 は，どれくらい待つかを表す数値で，単位は「フレーム」です．\nフレームについては後ほど詳しく説明しますが，1フレームは30分の1秒(約0.03秒)に相当します．\n\nsleep(30)は30フレーム，つまり1秒ほど実行を待ちます．つまり，このプログラムは，次の順番で実行されます．\n\n- 猫の絵を表示する\n- 「こんにちは」と表示する\n- 30フレーム（1秒ほど）待つ\n- 「さようなら」と表示する\n\n\n[[次へ>spriteMove]]",
    "novice/udlr.txt": "* 画像をキーボードで上下左右に動かしましょう\n\nさきほどのキーボードを使って右に動かす仕組みを使って，\n画像を上下左右に動かしましょう\n\n<<code Cat k\nx=50;\ny=100;\nwhile(true) {\n   k=getkey(\"right\");\n   if (k>0) {\n      x+=10;\n   }\n   k=getkey(\"left\");\n   if (k>0) {\n      x-=10;\n   }\n   k=getkey(\"down\");\n   if (k>0) {\n      y+=10;\n   }\n   k=getkey(\"up\");\n   if (k>0) {\n      y-=10;\n   }\n   go(x,y);sleep();\n}\n>>",
    "novice/variable.txt": "* 画像をもっと長い時間動かしてみましょう\n\nさきほどの実行したプログラム([[@plistref 50_100]]は，\n横の位置を50 から始めて，100まで動かしました．\n\n@@@@\ngo(50,100);sleep();\ngo(60,100);sleep();\ngo(70,100);sleep();\ngo(80,100);sleep();\ngo(90,100);sleep();\ngo(100,100);sleep();\n@@@@\n\n今度はもっと遠くまで動かしてみましょう．\n例えば，横の位置を50から300まで動かしてみるには，[[@figref 50_300.png]] のように，\nsleepを，[[@cfrag go(300,100);]] になるまで書けばよいでしょう\n\n[[300まで動かすプログラム>50_300.png]]\n\n実行してみましょう．さっきよりも長く動きますね．\n",
    "novice/while.txt": "* 繰り返しを使ってプログラムを短くしましょう\n\nさきほどのプログラムをよく見てみましょう．\n\n<<code Cat 50to100inc\nx=50;\ngo(x,100);sleep();\nx+=10;\ngo(x,100);sleep();\nx+=10;\ngo(x,100);sleep();\nx+=10;\ngo(x,100);sleep();\nx+=10;\ngo(x,100);sleep();\nx+=10;\ngo(x,100);sleep();\n>>\n\n最初の[[@cfrag x=50;]]を除いて，あとはずっと\n\n<<code \ngo(x,100);sleep();\nx+=10;\n>>\nが繰り返されていることがわかります．\n\nこのように，同じことを何度も繰り返すときは，コンピュータに「この部分は繰り返してください」\nと指示することによって，プログラムをもっと短くすることができます．\n\n[[@plistref 50to100inc]] を，[[@plistref firstWhile]]のように書き換えてみましょう．\n\n<<code Cat firstWhile\nx=50;\nwhile (x<=100) {\n  go(x,100);sleep();\n  x+=10;\n}\n>>\n\n実行してみると，先ほど同じように動きます．\n\nここでは，「while文」という書き方を用いています．これは，次のような形式で使います\n\n<<code while文の書式\nwhile([[@arg 条件]]) {\n   [[@arg 動作]]\n}\n>>\n\n- while文は， {  と } で囲まれた[[@arg 動作]]を繰り返し実行します．\n- どのくらいまで繰り返せばよいかを，[[@arg 条件]] に指定します．\n\n[[@plistref firstWhile]]の動作は，次のようになります．\n\n- [[@cfrag x=50;]] 変数xに50を覚えさせる\n- [[@cfrag x<=100]]， つまり変数xの値が100以下の間は，次のことを繰り返す\n-- [[@cfrag go(x,100);]] (x,100)の場所に絵を表示し，\n-- [[@cfrag x+=10;]] xを10増やす\n\nさて，この仕組みを使って，猫の絵を横位置300まで動かしてみましょう．\n\n<<code Cat w300\nx=50;\nwhile (x<=300) {\n  go(x,100);sleep();\n  x+=10;\n}\n>>\n\n[[@plistref firstWhile]]と変わった部分は，while の後ろの [[@cfrag x<=300]]だけです．\nつまり，数値を1個変えるだけで，もっと遠くまで動かせるのです．\n\n以前は，300まで動かすにはたくさんのプログラムを書かなければならなかったのに比べると\nかなり楽になりました．",
    "novice/variable3.txt": "*変数の値を変えてみましょう．\n\nさて，変数を使って，猫を右方向に動かしてみたいと思います．\n[[@plistref c5060]]のように変更しましょう\n（動いている様子が見えるように，[[@cfrag sleep();]]も忘れずにつけてください．）\n\n<<code Cat c5060\nx=50;\ngo(x,100);sleep();\nx=60;\ngo(x,100);sleep();\n>>\n\nこのプログラムは，まず，変数xに50を覚えさせてから，[[@cfrag go(x,100);]]を実行しています．\nつまり[[@cfrag go(50,100);]]を実行したのと同じ結果になります．\n\nそして，xに60を覚えさせています．\n\nこのとき，その前にxが覚えていた50はどうなってしまうのでしょうか．\n実は，変数に値を覚えさせると，それまで覚えていた値のことは上書きされてなくなってしまいます．\n\nつまり，最後の行で[[@cfrag go(x,100);]]を実行すると，\n[[@cfrag go(60,100);]]を実行したのと同じ結果になります．\n",
    "novice/xy.txt": "*画像を縦や斜めにも動かしてみましょう\n\n今まで，猫の画像は横にしか動きませんでしたが，縦にも動かすことができます．\n\n<<code Cat y\ny=50;\nwhile (true) {\n  y+=10;\n  go(100,y);sleep();\n}\n>>\n\n実行してみると，猫の画像が上から下に移動します．\n\nさらに，横と縦に同時に動かすこともできます\n\n<<code Cat xy\ny=50;\nx=100;\nwhile (true) {\n  y+=10;\n  x+=10;\n  go(x,y);sleep();\n}\n>>\n\n実行してみると，猫の画像が左上から右下に斜めに移動します．\n\n[[@plistref xy]]のように，\n変数は同時に2つ使うこともできます．\n\n変数を区別するために，それぞれの変数には名前が必要になります．ここでは x と y \nという名前の変数を使っています．\n\n名前は，半角英字とアンダースコア(_)が使えます．2文字以上でも構いません．2文字目以降は数字も使うことができます．",
    "novice/index.txt": "\n\n* プログラミングを始めましょう\n\n- まず，プロジェクトを作ります．\n-「[[@blink 新規作成>#newPrj]]」ボタンを押しましょう\n- プロジェクトの名前を入力してください\n-- 半角文字で入力します\n-- ここでは  Hello と入力してみましょう\n\n",
    "novice/variable2.txt": "* 画像をもっと楽に動かしましょう\n\nしかし，前のプログラムは書くのが大変です．\nそこで，もう少し簡単に書くための工夫を行います．\n\nさきほどのプログラムは，次のように，go の直後の数値が50,60,70,80.... と増えていることがわかります．\n\n@@@@\ngo(50,100);sleep();\ngo(60,100);sleep();\ngo(70,100);sleep();\ngo(80,100);sleep();\n// 以下略\n@@@@\n\n\nここで，「変数」という仕組みを紹介します．\n変数とは，文字通り「変わる数」のことです．\n\n今のプログラムで数値が変わっている部分は，[[@cfrag go(★,100);]]の★で示した部分ですね．\nそこで，「★の部分の数は変わるんですよ」ということをコンピュータに教えてあげます．\n\nもったいないのですが一旦プログラムを全部消して，次のように書いてみましょう．まだ実行はしないでください\n\n@@@@\ngo(x,100);\n@@@@\n\nここで出てきた x が変数です．\n\n「xと書いた部分は，何か数値が入るけど，それは変化することがあるよ」ということを表しています．\n\nところで，「何か数値が入る」と書きましたが，何が入っているのでしょうか？\n何が入っているのかは，最初に変数を使う前に決めないといけません．\n\n次のように[[@cfrag x=50;]]を追加してみましょう．\n\n@@@@firstVar\nx=50;\ngo(x,100);\n@@@@\n\nここで[[@blink 実行>#run]]してみましょう．\n[[@figref firstRunRes.png]]のように猫の絵が(50,100)の位置に表示されます．\n\n[[[[@plistref firstVar]]の実行結果>firstRunRes.png]]\n\n[[@cfrag x=50;]] という命令は，「変数 xに50という値を覚えさせる」という意味です．この状態で\n\n@@@@\ngo(x,100);\n@@@@\nを実行すると\n@@@@\ngo(50,100);\n@@@@\nを実行したのと同じ結果が得られます．",
    "novice/item.txt": "* アイテムを配置しましょう\n\n猫を動かして，リンゴのアイテムを取るゲームを作ってみましょう．\n\nまず，アイテムのためのプログラムを作成します．\n\n- メニューの「[[@blink ファイル>#fileMenu]]」→「[[@blink 新規>#newFile]]」を選びます\n- ファイル名を入力します\n-- ここでは Apple と入力してみます\n\n<<code Apple\ngo(200,150);\n>>\n\n[[@blink 実行>#run]]メニューから，「Appleを実行」選びましょう．\nすると，今まで通り猫の画像が表示されます．\n\nこれを，リンゴの画像にしてみましょう．\n\n<<code Apple\nchange($pat_fruits);\ngo(200,150);\n>>\n\n[[@cfrag change]]という命令は，画像の絵柄を変える命令です．\n( ) 内に書くのは，絵柄の名前を指定します．[[@cfrag $pat_fruits]] は，\n標準に用意されているリンゴの画像データを指します．\n\n\n",
    "novice/key.txt": "* キーボードを使って絵を動かしましょう\n\nさきほどのプログラムでは，猫が勝手に外にでていってしまうので\nキーボードを使って好きな方向に動くようにしてみましょう\n\n<<code Cat getkey\nx=50;\ny=100;\nwhile(true) {\n   k=getkey(\"right\");\n   if (k>0) {\n      x+=10;\n   }\n   go(x,y);sleep();\n}\n>>\n\n実行したら，まず，猫のいる画面をクリックしてください．\nそのあと，右矢印キーを押すと，猫が右に動きます．\n\nここでは，新しく2つの命令が出てきました．\n\nまず[[@cfrag getkey]]は，キーが押されているかを判定する命令です．\n[[@cfrag k=getkey(\"right\"); ]]は，右矢印キーが押されているかを判定し，判定結果を変数kに書き込みます．\n-もし右矢印キーが押されていなければ，変数kに0を書き込みます．\n-もし右矢印キーが押されていれば，変数kに0より大きい値を書き込みます（押されている時間が長いほど大きい値になります）．\n\nそして， [[@cfrag if]]という命令も登場しました．これは，次のような形式で使います．\n\n<<code\nif ([[@arg 条件]]) {\n  [[@arg 命令]]\n}\n>>\n\n-[[@arg 条件]]が成り立つ（正しい）ときに，  [[@arg 命令]]を実行します．\n-[[@arg 条件]]が成り立たない（正しくない）ときには，[[@arg 命令]]を実行しません．\n\nここでは，[[@arg 条件]]の部分に[[@cfrag k>0]]，[[@arg 命令]] の部分に[[@cfrag x+=10]] と書いてあります．つまり，\n\n-[[@cfrag k>0]]が成り立つ（正しい）ときに，  [[@cfrag x+=10;]]を実行します．\n-[[@cfrag k>0]]が成り立たない（正しくない）ときには，[[@cfrag x+=10;]]を実行しません．\n\n[[@cfrag k>0]]が成り立つのは，右キーが押されているときです．また，[[@cfrag x+=10;]]は，右に移動する命令ですので，次のように動作します\n\n-右キーが押されているならば，右に動きます．\n-右キーが押されていないならば，右に移動しません．\n",
    "novice/getkey.txt": "[[projectIndex]]",
    "novice/projectIndex.txt": "\n* 目次\n\n<<toc\n-[[新しくファイルを作りましょう>newFile]]\n-[[プログラムを実行しましょう>firstRun]]\n-[[値を変えてみましょう>sprite]]\n-[[画像を動かしてみましょう>spriteMove]]\n-[[画像をもっと長い時間動かしてみましょう>variable]]\n-[[画像をもっと楽に動かしましょう>variable2]]\n-[[変数の値を変えてみましょう>variable3]]\n-[[変数の値を増やしてみましょう>inc]]\n-[[繰り返しを使ってプログラムを短くしましょう>while]]\n-[[ずっと繰り返すようにしましょう>true]]\n-[[画像を左方向に動かしてみましょう>dec]]\n-[[画像を縦や斜めにも動かしてみましょう>xy]]\n-[[画像をキーボードで動かしましょう>key]]\n-[[画像をキーボードで上下左右に動かしましょう>udlr]]\n-[[アイテムを配置しましょう>item]]\n-[[複数のキャラクタを配置しましょう>new]]\n-[[複数のキャラクタを配置しましょう(2)>param]]\n-[[メッセージを表示しましょう>say2]]\n-[[キャラクタの衝突判定をしましょう>crash]]\n-[[ゲームクリアの判定をしましょう>left]]\n>>\n\n\n\n\n\n\n\n",
    "novice/inc.txt": "* 変数の値を増やしてみましょう\n\nさて，さきほどのプログラムをもう一度みてみましょう，\n\n<<code Cat 50to60\nx=50;\ngo(x,100);sleep();\nx=60;\ngo(x,100);sleep();\n>>\n\n[[@plistref 50to60]]では，[[@cfrag x=50;]]で，xに50覚えさせてから，\n[[@cfrag x=60;]]で，xに60覚えさせています．\n\nここでは，\n「xに60を覚えさせる」代わりに，「（すでに覚えている）50 を10だけ増やす」\nという書き方を紹介します．\n\n<<code Cat 50to60inc\nx=50;\ngo(x,100);sleep();\nx+=10;\ngo(x,100);sleep();\n>>\n\n[[@cfrag x+=10;]]という書き方が出てきました．これは\n「今覚えているxの値に，10を足す」という意味です．\n\n[[@plistref 50to60inc]]では，\n[[@cfrag x+=10;]]が実行される時点では，\nxは50を覚えていますので，\n[[@cfrag x+=10;]]が実行されると，50に10を足した値である\n60を新しくxに覚えさせます．結果として，\n[[@plistref 50to60inc]]は，\n[[@plistref 50to60]]と同じ結果になります．\n\nこれを利用して，xを100まで増やしながら，絵を動かしてみましょう．\n\n<<code Cat 50to100inc\nx=50;\ngo(x,100);sleep();\nx+=10;\ngo(x,100);sleep();\nx+=10;\ngo(x,100);sleep();\nx+=10;\ngo(x,100);sleep();\nx+=10;\ngo(x,100);sleep();\nx+=10;\ngo(x,100);sleep();\n>>",
    "novice/firstRun.txt": "* プログラムを実行しましょう\n\n実行するには [[@blink 実行>#run]] メニューをクリックするか，F9 キーを押します．\n\n[[@figref firstRunRes.png]]のように，猫の絵が表示されたら成功です．\n\n[[実行結果>firstRunRes.png]]\n\n[[うまくいかないときは>trouble1]]\n\n\n\n\n\n\n",
    "novice/sprite.txt": "* 値を変えてみましょう\n\nプログラムは，命令を実行します．\nここでは，go という命令を使って，画面に絵を表示させています．\n\n@@@@\ngo(50,100);\n@@@@\n\nここで， 50 や 100 などの数値を別の数値に変えてみましょう\n\n@@@@\ngo(150,100);\n@@@@\n\nもう一度， [[@blink 実行>#run]] メニューをクリックするか，F9 キーを押して実行します．\n\n画面上の位置を決めるには，2つの数値が必要になります．\nそれは，「横の位置」と「縦の位置」です．\n-横の位置は「画面左端から何ピクセル離れているか」をあらわした数値です\n-縦の位置は「画面上端から何ピクセル離れているか」をあらわした数値です\n\n横の位置と縦の位置をまとめてあらわしたものを「座標」といい，\n\n(横の位置,縦の位置)\n\nという形式であらわします．\n\n例えば(50,100) という座標は，次のような位置をあらわします．\n-画面左端から50ピクセル離れた位置\n-画面上端から100ピクセル離れた位置\n\n[[座標>50_100.png]]\n\nいろいろな位置の座標を[[@figref coords.png]]にまとめました．それぞれの数値の違いに注目しましょう．\n\n[[位置と座標>coords.png]]\n\nここで出てきたgo という命令は，go の後ろに書いた座標の位置に，絵を表示します．\n\n命令は，次のような形式で書きます．\n\n<<code\n命令の名前 ( 引数 , 引数 ...);\n>>\n引数（ひきすう）とは，命令を行うときに必要な情報をあらわします．\n\n例えば，[[@cfrag go(100,50);]] は [[@cfrag go]]という名前の命令を，\n100 と 50 という2つの引数（どこに移動するか，という情報）を\n使って行います．",
    "novice/trouble1.txt": "プログラムを書き間違えていると，エラーが表示されます．\n\n[[文法エラー>syntaxError.png]]\n\n[[@figref syntaxError.png]]の例では，命令の最後にセミコロン ;  をつけていないためにエラーになっています．\nセミコロンを追加して，再度実行してください．\n\n[[@figref runtimeError.png]]の例では，命令の名前を間違えています．(goo ではなく go ）\n正しい命令になおしてください．\n\n[[命令の名前が違うエラー>runtimeError.png]]\n\nなお，命令の名前は大文字と小文字が区別されます．[[@cfrag go]]の代わりに[[@cfrag Go]]と書くことはできません．\n\n[[戻る>firstRun]]",
    "novice/dec.txt": "*画像を左方向にも動かしてみましょう\n\n今まで，猫の画像は左から右にしか動いていませんでしたが，右から左にも動かすことが\nできます．\n\n<<code Cat dec\nx=300;\nwhile(true) {\n   go(x,100);sleep();\n   x-=10;\n}\n>>\n\nここに出てきた[[@cfrag x-=10]]は，「xの値を10減らす」という命令です．\n",
    "novice/param.txt": "*複数のキャラクタを配置しましょう(2)\n\n猫とリンゴが表示できたので，\n今度はリンゴを2つ置いてみましょう．それには，Gameを次のようにすればよさそうですね．\n\n<<code Game g1\nnew Cat;\nnew Apple;\nnew Apple;\n>>\n\n実行すると... あれ？リンゴは1つしか表示されません．\n\nここで，Appleのプログラムを確認してみましょう．\n\n<<code Apple\nchange($pat_fruits);\ngo(200,150);\n>>\n\nAppleでは，リンゴを(200,150)の位置に移動させる，と書いてあります．\n\n実は，リンゴは2つできているのですが，どちらも(200,150)という\nピッタリ同じ位置に重なっているので\n１つにしか見えないのです．\n\nそれでは，2つのリンゴを違う位置に表示させましょう．\nそれには，リンゴの位置が(200,150)ではなく，リンゴごとに変わるようにすればよいでしょう．つまり，200や150という「数」が「変わる」ようにする... そうです「変数」を使えばよいのです．\n\nそこで，Appleの[[@cfrag 200]]と[[@cfrag 150]] を，それぞれ変数[[@cfrag x]]と[[@cfrag y]]に置き換えてみましょう．\n\n<<code Apple xy1\nchange($pat_fruits);\ngo(x,y);\n>>\n\n実行すると... あれ！今度はリンゴが1つも出てきません．\n\nなぜかというと，[[@plistref xy1]]の状態では，変数 x や y は何も値を覚えていないため，[[@cfrag go(x,y)]]と命令されても，どこに表示していいかわからないからです．\n\nかといって，[[@plistref xy1]]に[[@cfrag x=200]]や[[@cfrag y=150]]などの，変数に値を覚えさせる命令を書くわけにもいきません．なぜなら，xやy の値はリンゴごとに違っていなければならないからです．\n\nそこで，ここでは，Appleではなく，Gameのほうでリンゴに具体的なx や y の値を設定させます． \n\nまず，Gameを次のように書き換えます．まだ実行はしないでください．\n\n<<code Game\nnew Cat;\napple1=new Apple;\napple2=new Apple;\n>>\n\n[[@plistref g1]]と変わったのは，[[@cfrag new Apple]]の前に，\n[[@cfrag apple1=]]と[[@cfrag apple2=]]がついたところです．\n\n[[@cfrag apple1=new Apple;]]は，新しくできたリンゴのキャラクタに「apple1」という名前をつけています．同様に，2つ目のリンゴのキャラクタに「apple2」という名前をつけています．\n\n名前をつけることによって，それらのキャラクタに命令をしたり，キャラクタがもっている変数の値を変更させることができます．\n\n<<code Game a1a2\nnew Cat;\napple1=new Apple;\napple1.x=200;\napple1.y=150;\napple2=new Apple;\napple2.x=300;\napple2.y=100;\n>>\n\n実行すると，今度はちゃんとリンゴが2つ表示されますね．\n\n[[@cfrag apple1.x=200;]] という命令は，その1行上で新しく作ったリンゴのキャラクタ，つまりapple1 がもっている x という変数に 200 を覚えさせています．\n\n今，「キャラクタがもっている変数」という表現をしましたが，変数は名前が同じでも，キャラクタごとに違う値をもたせる（覚えさせる）ことができます．\n例えば，[[@plistref a1a2]]では，apple1 の もっている変数xの値は200ですが，apple2 がもっている変数x は300になっています．\n\n[[キャラクタごとに変数の値は異なる>apple1apple2.png]]\n\n\n\n",
    "novice/newFile.txt": "* 新しくファイルを作りましょう\n\n- メニューの「[[@blink ファイル>#fileMenu]]」→「[[@blink 新規>#newFile]]」を選びます\n- ファイル名を入力します\n-- ファイル名には，半角英数字とアンダースコア(_)のみが使えます．先頭は英大文字にしてください．\n-- ここでは Cat と入力してみます(後で猫の画像が登場します）\n\n* ファイルを編集しましょう\n\n- [[@blink ファイル一覧>#fileItemList]] から，ファイルを選びます．\n- [[@blink プログラム編集欄>#prog]] に，[[@plistref first]]のようにプログラムを書いてみましょう\n\n<<code Cat first\ngo(50,100);\n>>",
    "novice/say.txt": "[[前へ>sprite]]\n\n* メッセージを表示させてみましょう．\n\nプログラムは複数行書くこともできます．go 命令に続けて，次のように書いてみましょう\n\n@@@@\ngo(50,100);\nsay(\"こんにちは!!\");\n@@@@\n\n注意： こんにちは と書かれた部分以外はすべて半角で入力してください．\n\n[[@blink 実行>#run]]すると，猫の上に「こんにちは」というセリフが表示されます．\n\n[[次へ>sleep]]",
    "novice/say2.txt": "* メッセージを表示しましょう．\n\nゲームスタートしたときに，\n猫に[[@figref itadaki.png]]のようなメッセージを表示させてみましょう．\n\n[[メッセージの表示>itadaki.png]]\n\n\nそれにはまず，猫に名前をつける必要があります．\nなんでもかまいませんが，白いので[[@cfrag siro]] と名前をつけましょう．\n\n<<code Game\nsiro=new Cat;\napple1=new Apple;\napple1.x=200;\napple1.y=150;\napple2=new Apple;\napple2.x=300;\napple2.y=100;\n>>\n\nそして，[[@cfrag siro]]にメッセージを表示させます．\nメッセージを表示するには，[[@cfrag say]]という命令を使います．\n\n<<code Game itadaki\nsiro=new Cat;\nsiro.say(\"いただきまーす\");\napple1=new Apple;\napple1.x=200;\napple1.y=150;\napple2=new Apple;\napple2.x=300;\napple2.y=100;\n>>\n\n\n命令を実行するとき，実行する相手のキャラクタを指定するときは次の形式を使います．\n\n<<code\nキャラクタ名 . 命令名 ( 引数  )\n>>\n\n[[@plistref itadaki]] では，キャラクタ名は [[@cfrag siro]]，\n 命令名は[[@cfrag say]] です．つまり[[@cfrag siro]] に対して，\n[[@cfrag say]]という命令を行わせています．\n\nそして，引数の部分に，表示させるメッセージである[[@cfrag \"いただきまーす\"]] という文字列（文字が並んだもの）を指定しています．文字列は [[@cfrag \"]]で囲む点に注意してください．",
    "novice/new.txt": "*複数のキャラクタを配置しましょう\n\nさて，Appleを実行すると，リンゴが表示されますが，猫は出てこなくなってしまいました．ゲームには，猫とリンゴが同時に出てくる必要があります．\n\nそこで「リンゴと猫を置く」ための別のプログラムを作りましょう．\n\n- メニューの「[[@blink ファイル>#fileMenu]]」→「[[@blink 新規>#newFile]]」を選びます\n- ファイル名を入力します\n-- ここでは Game と入力してみます\n\nGameに，次のように入力してみましょう．\n\n<<code Game\nnew Cat;\nnew Apple;\n>>\n\n[[@blink 実行>#run]]メニューから，「Gameを実行」選びましょう．\nすると，猫とリンゴが同じ画面に表示されます．\n\nここで出てきた[[@cfrag new]] という命令は，\n新しくキャラクタを作るための命令です．\n\n次のように，[[@arg プログラム名]]を指定します．\n新しく出現したキャラクタは，\n指定された[[@arg プログラム名]]のプログラムを実行します．\n\n<<code\nnew [[@arg プログラム名]];\n>>\n\nなお，今後はしばらく Game を実行していきますので「実行する」と書いてあったら，\n[[@blink 実行>#run]]メニューから，「Gameを実行」選ぶようにしてください．\nF9キーを押すと，前回実行したプログラムと同じプログラムが実行されるので便利です．\n",
    "novice/toc.json": "[\"projectIndex\",\"newFile\",\"firstRun\",\"sprite\",\"spriteMove\",\"variable\",\"variable2\",\"variable3\",\"inc\",\"while\",\"true\",\"dec\",\"xy\",\"key\",\"udlr\",\"item\",\"new\",\"param\",\"say2\",\"crash\",\"left\"]",
    "novice/spriteMove.txt": "* 画像を動かしてみましょう\n\ngo 命令を使うと，指定した座標で示した位置に画像を動かすことができます．\nこれを利用して，画像を少しずつ違う位置に動かしていき，\n猫が動くアニメーションを作ってみましょう．\n\n<<code Cat now\ngo(50,100);\ngo(60,100);\ngo(70,100);\ngo(80,100);\ngo(90,100);\ngo(100,100);\n>>\n\n実行すると... 猫が動いていないようですね．いきなり(100,100)の\n位置に表示されたようです．\n\n[[[[@plistref now]]の実行結果>noWaitCat.png]]\n\n実は，猫はちゃんと(50,100)の位置から始まって，(60,100)  (70,100) \n(80,100)  (90,100) と少しずつ動きながら\n(100,100)の位置まで移動したのですが，\nコンピュータは，とても素早く命令を実行するため，\n途中の動作が見えなかったのです．\n\nそこで，命令の実行を少しゆっくりに実行してもらいます．\n[[@cfrag sleep]] という命令を使うと，途中で実行を待つことができます．\n\n<<code Cat now2\ngo(50,100);sleep();\ngo(60,100);sleep();\ngo(70,100);sleep();\ngo(80,100);sleep();\ngo(90,100);sleep();\ngo(100,100);sleep();\n>>\n\n今度は，猫が少しずつ動く様子が見えると思います．\n\n\n\n\n\n",
    "novice/crash.txt": "*キャラクタの衝突判定をしましょう\n\n次に，猫(Cat)がリンゴ(Apple)にぶつかると，リンゴを取る（リンゴが消える）ようにしてみましょう．\n\n[[@cfrag watchHit]] という命令を使うと，２つのキャラクタがぶつかったときに，\n特定の命令を実行することができます．\n\n[[@plistref addw]]の[[@editadd]]で示した部分を追加してみましょう．\n（まだプログラムは実行しないでください）\n\n<<code Game addw\nsiro=new Cat;\nsiro.say(\"いただきまーす\");\napple1=new Apple;\napple1.x=200;\napple1.y=150;\napple2=new Apple;\napple2.x=300;\napple2.y=100;\nwatchHit(Cat, Apple, hitCatApple);[[@editadd]]\n>>\n\n[[@cfrag watchHit(Cat, Apple, hitCatApple)]]と書くと，\n猫（[[@cfrag Cat]]）とリンゴ（[[@cfrag Apple]]）がぶつかったときに，\n[[@cfrag hitCatApple]] という命令が実行されるようになります．\n\nところで，[[@cfrag hitCatApple]] ってどんな命令でしょうか？\n実はこの時点ではそんな命令はありません．この命令は自分で作ってあげる必要があります．\nさらに[[@plistref addf]]のように追加してみましょう．\n\n<<code Game addf\nsiro=new Cat;\nsiro.say(\"いただきまーす\");\napple1=new Apple;\napple1.x=200;\napple1.y=150;\napple2=new Apple;\napple2.x=300;\napple2.y=100;\nwatchHit(Cat, Apple, hitCatApple);\nfunction hitCatApple(cat,apple) {[[@editadd]]\n    apple.hide();[[@editadd]]\n}[[@editadd]]\n>>\n\n実行すると，猫とリンゴが触れたときにリンゴが消えるようになります．\n\n最後に書いた[[@cfrag function]] で始まる部分は，\n自分で新しい命令を作るための書き方です．\nここでは，[[@cfrag hitCatApple]]という名前の命令を作っています．\nその後ろにある[[@cfrag (cat, apple)]] という部分は，この命令を実行するに\nあたって，必要な情報を受け取るためのものです．\nここでは，「どのキャラクタと，どのキャラクタがぶつかったか」という情報を受け取り，\nそれぞれに，[[@cfrag cat]] と [[@cfrag apple]] という名前をつけています．\n\n[[@cfrag cat]] は，もちろん最初に作った猫ですが，\nもうひとつの[[@cfrag apple]] は，そのとき猫に触れていたリンゴです．\nそれは[[@cfrag apple1]] かもしれないし，\n[[@cfrag apple2]] かもしれませんが，とにかく猫が触れていたほうのリンゴに，[[@cfrag apple]]という名前がつけられます．\n\nそして，その[[@cfrag apple]] に， [[@cfrag apple.hide()]] という命令を行っています．これは，そのキャラクタ（ここでは[[@cfrag apple]]）を隠す（画面から見えなくする）命令です．\n\n\n\n\n",
    "index.txt": "* サンプルを見る\n\n左の[[@blink プロジェクト一覧>#prjItemList]]からサンプルを選びます\n\n* 新しくプロジェクトを作る\n\n-「[[@blink 新規作成>#newPrj]]」ボタンを押しましょう\n- プロジェクトの名前を入力してください\n\n* リファレンス\n\n-[[リファレンス>tonyu2/index]]\n",
    "tonyu2/": "{\"index.txt\":{\"lastUpdate\":1392869584327},\"lang.txt\":{\"lastUpdate\":1392707927268},\"fs.txt\":{\"lastUpdate\":1392103001573},\"sugar.txt\":{\"lastUpdate\":1392110815047},\"waitmode.txt\":{\"lastUpdate\":1392345488813},\"api.txt\":{\"lastUpdate\":1392973009007},\"Actor.txt\":{\"lastUpdate\":1392214830161},\"BaseActor.txt\":{\"lastUpdate\":1392703622033},\"update.txt\":{\"lastUpdate\":1392358195081},\"classDef.txt\":{\"lastUpdate\":1392345631228},\"frame.txt\":{\"lastUpdate\":1392358186176},\"ScaledCanvas.txt\":{\"lastUpdate\":1392705321629},\"getkey.txt\":{\"lastUpdate\":1392700948127},\"crashTo.txt\":{\"lastUpdate\":1392700986255},\"allCrash.txt\":{\"lastUpdate\":1392689586893},\"getCrashRect.txt\":{\"lastUpdate\":1392701116311},\"crashTo1.txt\":{\"lastUpdate\":1392700995145},\"die.txt\":{\"lastUpdate\":1392693366942},\"isDead.txt\":{\"lastUpdate\":1392693474100},\"hide.txt\":{\"lastUpdate\":1392700848961},\"show.txt\":{\"lastUpdate\":1392700902957},\"rnd.txt\":{\"lastUpdate\":1392701292615},\"draw.txt\":{\"lastUpdate\":1392701592956},\"extend.txt\":{\"lastUpdate\":1392701825602},\"print.txt\":{\"lastUpdate\":1392703099009},\"console.txt\":{\"lastUpdate\":1392703197227},\"asyncResult.txt\":{\"lastUpdate\":1392704305168},\"waitFor.txt\":{\"lastUpdate\":1392704348467},\"forin.txt\":{\"lastUpdate\":1392704692777},\"super.txt\":{\"lastUpdate\":1392704906597},\"resize.txt\":{\"lastUpdate\":1392705695014},\"ide.txt\":{\"lastUpdate\":1392707777855},\"cpats.txt\":{\"lastUpdate\":1392706547246},\"options.txt\":{\"lastUpdate\":1392707707764},\"$mouseX/\":{\"lastUpdate\":1392972986031},\"$touches.txt\":{\"lastUpdate\":1392709858131},\"Boot.txt\":{\"lastUpdate\":1392869817146},\"$mouseX, $mouseY.txt\":{\"lastUpdate\":1392973016049}}",
    "tonyu2/index.txt": "*Tonyu2 リファレンス\n\n-[[言語仕様>lang]]\n-[[標準ライブラリ>api]]\n-[[開発環境>ide]]\n-[[ファイルシステム>fs]]\n\n-[[トップへ>../index]]\n",
    "tonyu2/lang.txt": "[[index]]\n\n*言語仕様\n\n-Tonyu2は，そのプログラムをJavaScriptに変換してから実行します．\n-Tonyu2で用いられる値やオブジェクトはJavaScriptの値やオブジェクトそのものです．そのため，Tonyu2からJavaScriptのオブジェクトを操作したり，JavaScriptからTonyu2のオブジェクトを操作したりできます．\n\nTonyu2 の言語仕様は，基本的にはJavaScriptの言語仕様に準じますが，JavaScriptとは次のような違いがあります．\n\n-[[ファイル>fs]]全体が１つの[[クラス定義>classDef]]になります．\n-親クラスのメソッド・コンストラクタ呼び出しは[[super]]を用います\n-「待機可能モード」「待機不能モード」という2つの[[動作モード>waitmode]]があります．\n-[[拡張構文>sugar]]があります\n-[[for (.. in ..)>forin]]の挙動が違います\n\n\n\n\n",
    "tonyu2/fs.txt": "[[index]]\n*ファイルシステム\n\n-Tonyu2 は，WebブラウザのJavascriptだけで動作するように設計されています．\n-プログラムなどを保存・読み出しするために，サーバとの通信は行わず，localStorage を用いています．\n-localStorageでは，単純なキー/値の格納・読み出しの仕組みだけが提供されていますが，Tonyu2は，localStorage上でディレクトリ構造を再現するためのライブラリ(fs.js)を搭載しています．\n--詳細は[[fs.js>https://github.com/hoge1e3/Tonyu2/blob/master/js/fs/fs.js]] のプログラムを参照してください．\n--ファイルを直接操作するための[[シェル>sh]]も用意されています．\n\n*注意点\n\nプログラムがlocalStorageに保存されるため，他のPCや他のWebブラウザではプログラムは共有されません．\n\n今のところ，他のWebブラウザ等とプログラムを送受信するには，[[jsdo.itへのインポート・エクスポート>jsdoit]]を用いてください．\n\n",
    "tonyu2/sugar.txt": "[[lang]]\n\n*拡張構文\n\n** \\ による関数・メソッド定義\n\n-[[@cfrag function]] と書く代わりに [[@cfrag \\]] と書くことができます．[[@plistref fun]]と[[@plistref back]]は等価です．\n\n<<code functionでメソッド定義 fun\nfunction a(x,y) {\n   return x+y;\n}\n>>\n<<code \\でメソッド定義 back\n\\a(x,y) {\n   return x+y;\n}\n>>\n\n-無名関数にも使えます．\n\n<<code\nonComplete=\\(evt) { alert(\"Complete\") };\n>>\n\n**引数渡しにおける()の省略\n\n関数・メソッド呼び出し時に，オブジェクトリテラルで書かれた引数１つだけを渡す場合，()を省略できます．\n\n<<code\n$(\"a\").attr{target:\"_top\"};\n// $(\"a\").attr({target:\"_top\"}); と等価\n>>\n\n**オブジェクトリテラルの省略記法\n\n[[@cfrag {x:x}]]のように，属性名と値が同じ場合，[[@cfrag {x}]]と記述できます．\n\n\n",
    "tonyu2/waitmode.txt": "[[lang]]\n\n*動作モード\n\nTonyu2には「待機可能モード」と「待機不能モード」という2つの動作モードがあります．\n\n** 待機可能モード\n\n待機可能モードで動作している間は，[[update]]などの，途中で動作を中断する（つまり，プログラムの動作を待機状態にする）メソッド（これを「待機系メソッド」と呼びます）が呼ばれたときに，一旦処理を中断し，描画や入力状態の更新などの処理を行います．\n\n待機可能モードで動作する条件として，次のものがあります\n\n-[[Actor]]クラスを継承したオブジェクトでは，mainメソッドは待機可能モードで動作します．\n--ただし，mainメソッドから呼び出される他のメソッドが待機可能モードで動作しない場合もあります．次の条件を参照してください．\n-待機可能モードで動作している間に，次のいずれかの形式をもつ文から呼び出されるメソッドは，待機可能モードで動作します．ただし，メソッド名はそのオブジェクト自身がもつメソッドを指しており，それが待機不能メソッド（後述）でない場合に限ります．\n-- [[@cfrag メソッド名(引数...); ]]\n-- [[@cfrag 戻り値=メソッド名(引数...); ]]\n\n**待機不能モード\n\n上で述べた条件にあてはまらない場合，「待機不能モード」で動作します．\n待機不能モードでは，待機系メソッドが呼ばれても，途中で動作を中断しません．例えば，待機不能モード中にupdateメソッドが呼ばれても，何も動作を行いません．\n\n**待機不能メソッド\n\n待機可能モードでは，待機不能モードより動作が遅くなることがあります．そこで，待機系メソッドが呼び出されないことが明らかな場合，必ず待機不能モードで動作したほうが効率がよくなります．このようなメソッドを「待機不能メソッド」と呼びます．\n\n待機不能メソッドは，メソッドの定義の先頭に[[@cfrag nowait]]キーワードを追加して定義します．\n\n<<code\nnowait \\myNoWaitMethod(arg1,arg2) {\n\n}\n>>\n\n**例\n\n<<code\n\nmethod1();        //待機可能モードで動作\na=method1();      //待機可能モードで動作\na=10+method1();   //待機不能モードで動作\nother.method1();  //待機不能モードで動作\nmethod2();        //待機不能モードで動作\n\n\\method1() {\n   for (i=0 ; i<20 ; i++) {\n      x++;\n      update(); // 待機可能モードなら，ここで待機する\n   }\n   return x;\n}\nnowait \\method2() {\n   for (i=0 ; i<20 ; i++) {\n      x--;\n      update(); // ここでは待機しない\n   }\n}\n>>\n\n\n\n\n\n\n",
    "tonyu2/api.txt": "[[index]]\n\n*標準クラス\n\nTonyu2で最初から使えるクラス群です．[[ファイルシステム>fs]]上の/Tonyu/Kernel/ で定義されています．\n\n-[[Actor]]\n-[[BaseActor]]\n-[[Boot]]\n-[[Sprites]]\n-[[ScaledCanvas]]\n-[[NoviceActor]]\n\n*グローバル変数\n\n-[[$Screen>ScaledCanvas]]\n-[[$mouseX, $mouseY]]\n-[[$touches]]\n",
    "tonyu2/Actor.txt": "[[api]]\n\n*Actorクラス\n\n画面に表示されるオブジェクトの基本クラスです．\n\n継承：  [[BaseActor]]\n\n※ほとんどのメソッドはBaseActorに宣言されています．\n\n**コンストラクタ\n\n<<code\n\\new(x,y,p)\n>>\n\n引数の仕様は[[BaseActor]]の処理と同じです．\nBaseActorと同様，mainメソッドの動作を行うよう[[スレッド>thread]]を作成します．\n\nまた，コンストラクタが呼ばれた時点で自分自身を画面に表示します．\n\n**initSprite\n\n自分自身を画面に表示します．\nコンストラクタから自動的に呼ばれるので，通常は呼び出す必要はありません．\n\n",
    "tonyu2/BaseActor.txt": "[[api]]\n\n*BaseActor\n\n画面に表示されるオブジェクトの基本クラスです．実際には[[Actor]]を継承してクラスを作成してください．\n\n* コンストラクタ(1)\n\n<<code\n\\new(params)\n>>\n\nparamsにはオブジェクトを指定します．paramsの値をフィールドに書き込みます\n\n例： \n<<code\n// MyActorはBaseActorの子クラスとする\na=new MyActor{x:50,y:30, power:20, hp:50};\n// a.x=50  a.y=30 a.power=20  a.hp=50 となる\n>>\n\n* コンストラクタ(2)\n\n<<code\n\\new(x,y,p)\n>>\n\nx,y,pの値をフィールドに書き込みます\n\n* フィールド\n\n-x : オブジェクトのx座標をあらわします\n-y : オブジェクトのy座標をあらわします\n-p : 表示する[[キャラクタパターン]]の番号をあらわします \n-text : textに値がセットされると，文字を表示します（キャラクタパターンは表示されなくなります）\n--size : 文字の大きさをあらわします\n--fillStyle : 文字の色などをあらわします(JavascriptのCanvasにおけるfillStyleと同じ書式です）\n--align:  \"center\" \"left\" \"right\"のいずれかを指定します．xの値であらわされる横位置がそれぞれ文字の中央，左端，右端になるように表示します．\n\n* メソッド\n\n-[[update]]\n-[[getkey]]\n-[[crashTo]]\n-[[crashTo1]]\n-[[allCrash]]\n-[[getCrashRect]]\n-[[die]]\n-[[isDead]] \n-[[hide]]\n-[[show]]\n-[[rnd]]\n-[[draw]]\n-[[extend]]\n-[[print]]\n-[[asyncResult]]\n-[[waitFor]]\n-[[currentThreadGroup]]\n-[[detectShape]]\n-[[hitTo]]\n-[[watchHit]]\n\n",
    "tonyu2/update.txt": "[[BaseActor]]\n\n*updateメソッド\n\n現在の処理を中断し，描画などの処理を行います．\n\n詳しい処理内容については[[フレーム>frame]]を参照してください．\n\n*書式\n\n<<code\nupdate();\n>>\n\n*その他\n\nこのメソッドは待機系メソッドです．待機不能モードでは何も動作を行いません．（詳細は[[動作モード>waitmode]]を参照してください）",
    "tonyu2/classDef.txt": "[[lang]]\n\n*クラス定義\n\nTonyu2では，1つの[[ファイル>fs]]に1つのクラスを定義します．\n\n-ファイル名は <<クラス名>>.tonyu という形式になります．\n-- 例えば，Hello.tonyu という名前のファイルは，Hello という名前のクラスを定義します．\n-クラスを定義するための構文（例えば，Javaの[[@cfrag class クラス名 {...  }]]など）はありません．\n- ファイルには，次のいずれかを記述します．\n--継承宣言\n--native宣言\n--mainメソッドの処理内容\n--非mainメソッドの定義\n- 定義された(Tonyu2の)クラスは，Javascriptのいわゆる「クラス」(function+prototypeによるメソッド定義）として機能します．\n\n**継承宣言\n\nこのクラスの親クラスを設定します．ファイルの先頭に次のように宣言します\n\n<<code 継承宣言の書式\nextends 親クラス名;\n>>\n\n-継承宣言を省略すると，[[プロジェクト設定>options]]によって設定されている親クラスを自動的に継承します．\n-親クラス名 に [[@cfrag null]]を設定すると，親クラスがないクラスになります．\n\n**native宣言\n\nnative宣言は，Tonyu2のプログラムからJavascriptのネイティブオブジェクトにアクセスするために用います．ファイル中で次のように宣言します．\n\n<<code native宣言の書式\nnative 変数名;\n>>\n\n- 指定された変数名を，このファイル中ではJavascriptのトップレベルスコープ（一般的にはwindowオブジェクト）に定義されている変数の値として扱います．\n- 親クラスに書いてあるnative宣言は子クラスには適用されません．必要に応じて子クラスにも同じnative宣言を書く必要があります．\n\n**mainメソッドの処理内容\n\nmainメソッドは，mainという名前をもつメソッドです．[[Actor]]クラスなどでは，オブジェクトが出現してから停止するまでの動作を記述するのに用いられます．\n\nファイルのトップレベル（メソッド定義に囲まれていない部分）に書かれた文はmainメソッドの内容として定義されます．\n\nmainメソッドは引数を受け取ることはできません．\n\n**非mainメソッドの定義\n\n名前がmainでないメソッドは非mainメソッドです．\n\nファイルのトップレベルにおいて次の形式で定義します．\n\n<<code メソッド定義 methodef\nfunction メソッド名(引数リスト) {\n   処理内容\n}\n>>\n※function の代わりに \\ が使用可能です（[[拡張構文>sugar]]参照)\n\n*変数の種類\n\n-引数\n--１つのメソッドに渡される値です．メソッド宣言の引数リストに記述されます．１回のメソッド呼び出しが終わると破棄されます．\n-ローカル変数\n--メソッド宣言の処理中でvar で宣言されます．１回のメソッド呼び出しが終わると破棄されます．\n-グローバル変数\n--名前が$で始まる変数はグローバル変数です．すべてのTonyu2オブジェクトから直接参照できます．\n--Javascriptからは[[@cfrag Tonyu.globals.グローバル変数名]]で参照できます．\n-クラス変数\n--現在のプロジェクトおよび[[標準ライブラリ>api]]で定義されているクラス名と同じ名前の変数はクラス変数です．そのクラスをあらわす関数オブジェクトを参照します．\n--Javascriptからは[[@cfrag Tonyu.classes.クラス変数名]]で参照できます．\n-native変数\n--native宣言によって宣言された名前の変数です．Javascriptのトップレベルスコープにおける同名の変数を参照します．\n-フィールド\n--そのクラスのオブジェクトがもつ値です．上のどれにもあてはまらない変数はフィールドとして解釈されます．\n--Javascriptではいわゆる[[@cfrag this.x]]という形式で参照されるものです．\n\n*例\n\n<<code MyClass.tonyu example\nextends Actor;\nnative alert;\n// main関数\nx=3;\nrate=5;\ny=mult(x);\nalert(y); // 15\n// main関数終わり\n\\mult(a) {\n  var res=a*rate;\n  return res;\n}\n>>\n\n-クラス名はMyClass\n-親クラスはActor\n-Javascriptの [[@cfrag alert]] 関数を利用する\n-[[@cfrag x,rate,y]] はフィールド\n-multメソッドを定義\n-- [[@cfrag a]]は引数，[[@cfrag res]]はローカル変数，[[@cfrag rate]]はフィールド",
    "tonyu2/frame.txt": "[[update]]\n\n*フレーム\n\nフレームとは，ゲームの画面1枚が表示されるまでの動作を指します．\n1つのフレーム（1フレーム）の動作は次の構成されます．\n\n-各オブジェクトの移動\n-各オブジェクトの表示\n\nゲーム全体は，フレームが1秒間に数十回(30～60程度．この数値をfpsと呼びます）動作して進行していきます．\n\nTonyu2では，各オブジェクトに[[スレッド>thread]]が割り当てられており，1フレームごとにスレッドが少しずつ実行されていきます．\n\nスレッドの実行中に[[update]]メソッドが呼ばれるとそのフレームでの処理を終了させ，他のオブジェクトのスレッドに動作を譲ります．\n\n",
    "tonyu2/ScaledCanvas.txt": "[[api]]\n\n*ScaledCanvasクラス\n\nゲーム画面をあらわすオブジェクトです．[[Boot]]クラスで[[@cfrag $Screen]] というオブジェクトで初期化されます．\n\n**メソッド\n\n-[[resize]]\n\n ",
    "tonyu2/getkey.txt": "[[BaseActor]]\n\n*getkeyメソッド\n\nキーの押下状態を取得します．\n\n**書式\n\n<<code\ngetkey(code);\n>>\n\n-code に調べたいキーのキーコード（数値）またはキーの名前（文字列）を指定します．\n-キーの状態に応じて次の数値を返します\n-- 0: 押されていない\n-- 1: 押されたばかり\n-- 2以上:  押しっぱなしになっている（押されて続けているフレーム数）\n\n* キーの名前とキーコード一覧\n\n<<code\nleft: 37 , up:38 , right: 39, down:40, \nspace:32, enter:13, shift:16, ctrl:17, alt:18, \nA-Z: 65-90,  0-9: 48-57\n>>\n\n",
    "tonyu2/crashTo.txt": "[[BaseActor]]\n\n*crashToメソッド\n\n他のオブジェクトと衝突しているかを判定します．\n\n**書式1\n\n<<code\ncrashTo(obj)\n>>\n\nこのオブジェクトが[[@arg obj]]と衝突していれば[[@cfrag true]]，そうでなければ[[@cfrag false]]を返します．\n\n*書式2\n\n<<code\ncrashTo(Class)\n>>\n\nこのオブジェクトが[[@arg Class]]で指定されるクラスのオブジェクトのうちどれかと衝突していれば，そのうちどれか1つのオブジェクトを返します．そうでなければ[[@cfrag null]]を返します\n\n*例\n\n<<code\n// $playerというオブジェクトにぶつかっていたら，$playerを消します\nif (crashTo($player)) {\n   $player.die();\n}\n>>\n\n*参考\n\n-[[crashTo1]]\n-[[allCrash]]\n-[[getCrashRect]]\n",
    "tonyu2/allCrash.txt": "[[BaseActor]]\n\n* allCrashメソッド\n\n指定されたクラスのオブジェクトのうち，自分と衝突しているすべてのオブジェクトを配列で返します．\n\n**書式\n<<code\nallCrash(Class)\n>>\n\n[[@arg Class]]で指定されたクラスのオブジェクトのうち，自分と衝突しているすべてのオブジェクトを配列で返します．\n\n\n*例\n\n<<code\n    // このオブジェクトがTargetクラスのオブジェクトとぶつかっていたら，\n    // そのオブジェクトを消す\n    for (t in allCrash(Target)) {\n        t.die();\n    }\n>>\n",
    "tonyu2/getCrashRect.txt": "[[BaseActor]]\n\n*getCrashRect\n\n当たり判定に使う矩形領域を返します．[[crashTo]]，[[crashTo1]]，[[allCrash]]で用いられます\n\n**書式\n\n<<code\ngetCrashRect()\n>>\n\nこのオブジェクトの当たり判定に使う矩形領域を返します．\n\n戻り値を[[@arg r]]とすると：\n-([[@arg r]].x,[[@arg r]].y)が矩形領域の中心位置です（左上ではありません）\n-[[@arg r]].widthと[[@arg r]].heightが，矩形領域の幅と高さです．\n\n**オーバライド\n\nデフォルトのgetCrashRectは，画像の大きさを基準に当たり判定を計算しますが，\ngetCrashRectをオーバーライドすると，当たり判定の大きさを変更できます．\n\n[[@plistref chg]]の例では，当たり判定の大きさを5*5に設定しています．\n\n<<code ChangeCrashRect.tonyu chg\n\\getCrashRect() {\n   return {x,y,width:5, height:5};\n}\n>>\n",
    "tonyu2/crashTo1.txt": "[[BaseActor]]\n\n*crashTo1メソッド\n\n[[crashTo]]メソッドと同様，衝突判定を行います．引数にはオブジェクトのみを指定ことができ，クラスは指定できません．引数の種類判定がない分，[[crashTo]]より若干処理速度が速くなります\n\n**書式\n\n<<code\ncrashTo1(obj)\n>>\n\nこのオブジェクトが[[@arg obj]]と衝突していれば[[@cfrag true]]，そうでなければ[[@cfrag false]]を返します．\n",
    "tonyu2/die.txt": "[[BaseActor]]\n\n*dieメソッド\n\nオブジェクトを画面から消去し，処理を中断します．\n\n**書式\n\n<<code\ndie();\n>>\n",
    "tonyu2/isDead.txt": "[[BaseActor]]\n\n*isDeadメソッド\n\nオブジェクトに[[die]]メソッドが呼ばれたかどうかを返します\n\n<<code\nb=isDead();\n>>\n\nこのオブジェクトにdieメソッドが呼ばれていれば，[[@arg b]]に[[@cfrag true]]を，そうでなければ[[@cfrag false]]を返します．\n\n",
    "tonyu2/hide.txt": "[[BaseActor]]\n\n*hideメソッド\n\nオブジェクトを非表示にします．\n[[die]]メソッドと異なり，動作は続きます．再び表示するときは[[show]]メソッドを用います．\n\n**書式\n\n<<code\nhide();\n>>\n\n",
    "tonyu2/show.txt": "[[BaseActor]]\n\n*showメソッド\n\nオブジェクトを表示します．\n\n*書式\n\n<<code\nshow(x,y,p)\n>>\n\n\n",
    "tonyu2/rnd.txt": "[[BaseActor]]\n\n*rndメソッド\n\n乱数を返します\n\n*書式1\n\n<<code\nrnd()\n>>\n\n0以上1未満の実数乱数を返します\n\n*書式2\n\n<<code\nrnd(n)\n>>\n\n0以上n未満の整数乱数を返します\n\n*ヒント\n\na以上b未満の実数乱数を返すには，次の式を用います．\n\n<<code\nrnd()*(b-a)+a\n>>\n\na以上b未満の整数乱数を返すには，次の式を用います．\n\n<<code\nrnd(b-a)+a\n>>\n\n",
    "tonyu2/draw.txt": "[[BaseActor]]\n\n*drawメソッド\n\nオブジェクトが描画される時に自動的に呼び出されます．ユーザのプログラムからは通常呼び出す必要はありません．\n\n*書式\n\n<<code\ndraw(ctx)\n>>\n\nctxに，描画先のcanvasオブジェクトのコンテキスト(canvas.getContext(\"2d\")で取得)を渡します．\n\n*オーバーライド\n\ndrawメソッドをオーバーライドすると，オブジェクトの表示方法をカスタマイズできます．\n\n例\n<<code\n\\draw(ctx) {\n   // 赤い四角形を表示\n   ctx.fillStyle=\"red\";\n   ctx.fillRect(x,y,20,20);\n}\n>>\n\n\n",
    "tonyu2/extend.txt": "[[BaseActor]]\n\n*extendメソッド\n\nオブジェクトを受け取り，それらの属性値を書き込みます．\n\n**書式\n<<code\nextend(obj)\n>>\n[[@arg obj]]のもつ値をすべて自分自身に書き込みます．\n\n\n**例\n\n<<code\nextend{x:5, y:10, score:20};\n// x=5 y=10 score=20 になる\nprint (x);\nprint (y);\nprint (score);\n>>\n\n",
    "tonyu2/print.txt": "[[BaseActor]]\n\n*printメソッド\n\n[[コンソール>console]]に値を表示します．(JavaScriptのconsole.logと同じ)\n\n**書式\n\n<<code\nprint(value...);\n>>\nvalue（複数指定可）の値をコンソールに表示します．\n\n",
    "tonyu2/console.txt": "[[print]]\n\n*コンソール\n\nTonyu2のコンソールは，JavaScriptのコンソールと同じです．次のキーで表示できます．\n\n-Chrome/Firefox: Ctrl+Shift+J\n-IE: F12\n\n",
    "tonyu2/asyncResult.txt": "[[BaseActor]]\n\n*asyncResultメソッド\n\nAsyncResultオブジェクトを作成します\n\nAsyncResultオブジェクトは，ajaxなどの「非同期で実行を行い，結果をコールバック関数で受け取る」形式のメソッド（非同期メソッド）を[[待機可能モード>waitmode]]で扱うためのオブジェクトです．\n\n**使い方\n\n※必ず待機可能モードで実行してください．\n\n-asyncResult()メソッドで，AsyncResultオブジェクトを作成します．これを[[@cfrag a]]とします．\n-非同期メソッドを呼び出します． このとき，[[@cfrag a.receiver]] をコールバック関数として渡します．\n-[[waitFor]]メソッドを呼び出します．非同期メソッドが結果を返すまで処理を待機します．\n-非同期メソッドの結果が[[@cfrag a[n]]]に返されます．[[@cfrag a[n]]]はコールバック関数に渡された第n引数（0が最初の引数）です．\n\n**使用例\n\n<<code\nnative $;\n//asyncResultオブジェクトを作成\na=asyncResult();\n//jqueryのgetメソッドを呼び出す．コールバック関数に a.receiverを指定\n$.get(\"http://tonyuedit.appspot.com/edit/\", a.receiver);\n//getメソッドが終わるまで待つ\nwaitFor(a);\n//結果がa[0]に返される\nprint(a[0]);\n>>\n",
    "tonyu2/waitFor.txt": "[[asyncResult]]\n\n*waitForメソッド\n\n使い方は[[asyncResult]]を参照してください．\n",
    "tonyu2/forin.txt": "[[lang]]\n\n* for(..in..)の動作\n\n[[@cfrag for (e in set)]] はJavaScriptとは動作が異なります．\n\n-setが配列の場合，eには（添字ではなく）値を入れながら繰り返します．\n-setがオブジェクトの場合，eには(キーではなく）値を入れながら繰り返します．\n\nまた，[[@cfrag for (k,v in set)]]という構文があります． \n\n-setがオブジェクトの場合，kにキー，vに値を入れながら繰り返します．\n\n\n\n",
    "tonyu2/super.txt": "[[lang]]\n\n*super\n\n**親クラスのコンストラクタを呼ぶ\n\n<<code\nsuper(引数)\n>>\n\n**親クラスと子クラスに同じ名前のメソッドがある場合，親クラスのメソッドを呼ぶ\n\n<<code\nsuper.メソッド名(引数)\n>>\n\n",
    "tonyu2/resize.txt": "[[ScaledCanvas]]\n\n*$Screen.resizeメソッド\n\nゲーム画面のサイズを変更します．\n\n<<code\n$Screen.resize(w,h);\n>>\n\nwとh に画面幅と高さを指定します．\n\n\n*例\n\n<<code\n$Screen.resize(500,300);\n>>\n\n\n※実際の画面（Canvas）の大きさが変わるのではなく，画面内に表示される仮想画面の大きさが変わります．\n",
    "tonyu2/ide.txt": "[[index]]\n\n*プロジェクト選択画面(index.html)\n\n-「新規」ボタンでプロジェクトを作成します．作成すると自動的にプロジェクト編集画面に移動します．\n-既存のプロジェクトを選択して，プロジェクト編集画面に移動します．\n\n*プロジェクト編集画面(project.html)\n\n**メニュー\n\n-Home\n-- プロジェクト選択画面に戻ります．\n-ファイル\n-- 新規作成\n---新しくTonyu2のクラス（=ファイル）を作成します．\n-- 名前変更\n---現在開いているクラスの名前を変更します．\n-- 削除\n---現在開いているクラスを削除します．\n--初期状態に戻す\n---現在開いているプロジェクトが[[サンプルプロジェクト>samples]]の場合，プロジェクトを初期状態に戻します．\n--このプロジェクト自身を削除\n--- プロジェクト全体を削除します．\n\n-実行\n-- ～を実行\n--- 指定されたクラスのオブジェクトを1つ作成し，実行を始めます．\n--停止\n--- プログラムを停止させます．\n-ウィンドウ\n--[[画像リスト>cpats]]\n--[[プロジェクト オプション>options]]\n\n\n",
    "tonyu2/cpats.txt": "[[ide]]\n\n*画像リスト\n\nメニュー階層： ウィンドウ → 画像リスト\n\nオブジェクトに用いるキャラクタパターン（画像）を追加します．\n\n一番下の「追加」ボタンを押し，各項目を設定します．\n\n-名前\n--この画像につける名前です．名前は$ で始めます．先頭のキャラクタパターンの番号を指す数値が同名の[[グローバル変数]]に入ります．\n--通常は，URLを指定すると自動的に設定されます．\n-URL  \n-- 画像のURLを記述します．はpngまたはgifを指定してください．\n-- URL欄にローカルの画像ファイルをドラッグ＆ドロップすると，その画像をあらわすURL（Base64エンコーディング）が自動的に設定されます．\n-パターン解析方法\n-- Tonyu1フォーマット ： Tonyu1で利用されている画像をそのまま使う場合はこちらを選びます\n--- URL欄に他ドメインの画像ファイルを指定する場合，「Tonyu1フォーマット」は使えません．\n--  固定サイズ：   画像内を決められた大きさ（例えば32x32）で区切って描かれた画像の場合，こちらを選びます．\n\nキャラクタパターンには，それぞれキャラクタパターン番号が割り振られます．\n変数pにキャラクタパターン番号を代入することでそのキャラクタパターンを表示できます．\n\n 例えば， $pat_chr という名前の画像ファイルの中の，4番目のキャラクタパターン（一番最初は0番目とする）を指定するには\n<<code\n    p=$pat_chr + 4; \n>>\n    とします．\n\n*例\n\n※ $pat_ballsという名前の画像が追加されているものとします．\n<<code\nt=0;\nwhile(true) {\n    if (t%5==0) {\n        // 新しく作るBall オブジェクトの変数pに，\n        // $pat_balls の0 - 15番目のキャラクタパターンをランダムに設定\n        new Ball{x:rnd($screenWidth),y:0, p:$pat_balls+rnd(16)};\n    }\n    t++;\n    update();\n}\n>>\n\n",
    "tonyu2/options.txt": "[[ide]]\n\n*プロジェクト オプション\n\nプロジェクトオプションは，通常は操作する必要はありません．主にTonyu2自身の開発時に設定を変える場合に用います．\n\n-デフォルトの親クラス\n-- [[クラスの定義>classDef]]において， extends を省略したときに継承される親クラスです．通常は[[Actor]]に設定します．\n-実行\n-- Mainクラス\n--- 実行するときに最初に作成されるオブジェクトのクラスです．通常，「実行」メニューで最後に選ばれたクラスになっています．\n-- Bootクラス\n--- Mainクラスより前に，プログラム全体の初期化を行うクラスです．通常は[[Boot]]クラスです．ここに別のクラスを指定することで，初期化方法をカスタマイズできます．\n-Kernelの開発を行う\n-- 通常，ファイル →  新規 を選び，クラス名を入力したときに，それが[[標準ライブラリ>api]]に存在するクラス名と同名である場合は作成ができません\n-- このチェックをonにすることで標準ライブラリと同名のクラスを作成できます．さらに，新規作成時に標準ライブラリにある同名のクラスの内容が現在のプロジェクトフォルダにコピーされます．\n-- 標準ライブラリと同名のクラスの内容を変更することで，標準ライブラリの挙動を変更できます．ただし，変更が有効なのはこのプロジェクトのみです．\n\n\n\n\n\n",
    "tonyu2/$mouseX/": "{}",
    "tonyu2/$touches.txt": "[[api]]\n\n* $touches\n\nタッチパネルのタッチされた座標を返します．\n\n[[@cfrag $touches[i] ]]は，i番目（0が最初の指）の指がタッチした場所についての情報を格納するオブジェクトです．\n\n-[[@cfrag $touches[i].x]]と[[@cfrag $touches[i].y]]は，タッチされた場所のx,y座標です．\n-[[@cfrag $touches[i].touched]]は，今その場所がタッチされていれば[[@cfrag true]]，タッチされていなければ[[@cfrag false]]を返します\n\n\n\n",
    "tonyu2/Boot.txt": "[[api]]\n\n*Bootクラス\n\nプログラム実行時に最初に起動するクラスです．次のような動作を行います．\nこれらの処理は実行時に自動的に行われるので，通常は呼び出す必要はありません．\n\n-画面の初期化\n-マウス・タッチイベントの初期化\n-[[スレッド]]の初期化\n-Mainクラスのオブジェクトの配置\n-メインループ\n--スレッドの実行\n--描画\n\n",
    "tonyu2/$mouseX, $mouseY.txt": "[[api]]\n\n*$mouseX/$mouseY\n\nマウスカーソルまたはタッチパネルの0番目の指のx,y座標を返します．"
  }
}
    );
}