module.exports = (app) =>{  //함수형식으로 보냄
    /*
    const bodyParser = require("body-parser");
    app.use(bodyParser.urlencoded({extended :true})); //app에서 라우터 위에 저장하거나 이 위치에 저장
    */

    const memberRouter = require("./member/member_router");
    app.use("/member", memberRouter);

    const router = require("express").Router();
    router.get("/", (req, res)=>{
        //res.send("기본 경로 연동1111");
        res.render("index");
    })
    return router;
} ;