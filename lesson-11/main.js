// main.js
"use strict";
const  port = 3000,
    express = require(`express`),
    layouts = require('express-ejs-layouts'),
    homeController =require('./controllers/homeController'),
    errorController = require('./controllers/errorController'),
    app = express();
// @TODO: 웹 서버를 만들고 실행한다.
//Best 습관 : 2단계 앱 설정 (set 함수 )

app.set("port",process.env.PORT || port);
app.set("view engine","ejs");

app.get("/", homeController.getHome);
app.get("/name/myName",homeController.respondWithName);
app.get ("/test", (req,res) => {
    res.sendFile("./public/test.html");
})
app.use(layouts);
app.use(express.static("public"));
app.use(errorController.logErrors);
app.use(errorController.resNotFound);
app.use(errorController.resInternalError);
//e


app.listen(app.get("port"), () =>{
    console.log(`server at : http://localhost${app.get("port")}`)
})
//Best 습관 : 마지막 listen 함수