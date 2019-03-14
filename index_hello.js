// expressモジュールを読み込む
const express = require('express');

// expressアプリを生成する
const app = express();

// ルートパスに接続されたときに、コンソールにLOGGERと出力させる.
var myLogger = function(req,res,next){
    console.log('LOGGED');
    next(); //関数の実行(app.useで指定した関数を実行する)
};

app.use(myLogger); //myLogger関数を実行

// ルート(http://localhost/)にアクセスしてきたときにHELLOと返す.
app.get('/',function(req,res){
    res.send('HELLO')}
    );



// ポート番号3000でサーバーを立てる
app.listen(3000,()=>console.log('Listening on port'));