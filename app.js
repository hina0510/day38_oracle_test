const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended :true}));   //위치 중요(라우터 위에서 사용)
const router = require("./src/routers/router")(app);   //함수형식으로 불러옴

app.use("/", router);

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.listen(3000, ()=>{console.log("3000 server")});