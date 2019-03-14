// expressモジュールを読み込む
const express = require('express');

// expressアプリを生成する
const app = express();

// ルート(http://localhost:3000/api/vi/list)にアクセスしてきたときにTODOリストを返す.
app.get('/api/vi/list',function(req,res){
    // クライアントに送るJSON
    const todoList = [
        {title:'JavaScriptを勉強する', done:true},
        {title:'Node JSを勉強にする', done:false},
        {title:'WebAPIを作成する', done:false}
    ];
    res.json(todoList); //JSONを送信する
});


// ポート番号3000でサーバーを立てる
app.listen(3000,()=>console.log('Listening on port'));