// expressモジュールを読み込む
const express = require('express');

// expressアプリを生成する
const app = express();

// ルート(http://localhost/)にアクセスしてきたときにHELLOと返す.
app.get('/',function(req,res){
    res.send('HELLO')}
    );

// ポート番号3000でサーバーを立てる
app.listen(3000,()=>console.log('Listening on port'));