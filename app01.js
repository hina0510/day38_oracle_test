const express = require("express");
const app = express();
let con;
app.get("/", (req,res)=>{
    console.log("1. 연동 전");
    con = connect();
    con.then((msg)=>{
        console.log("3. 연동 완료 후 특정 기능 사용");
        res.send("con =>"+msg);
    });
    /*
    console.log("3. 연동 완료 후 특정 기능 사용");
    res.send("con =>"+con);
    */
});
app.get("/async", async(req,res)=>{
    console.log("1. 연동 전. async");
    con = await connect();
    console.log("3. 연동 완료 후 특정 기능 사용. async");
    res.send("con =>"+con);
});
const connect=()=>{
    let msg;
    return new Promise ((resolve)=>setTimeout(()=>{   //객체 형식으로 바꾸어 비동기방식을 동기방식으로 처리 
        msg = "DB 연동 되었습니다. async";
        console.log("2. DB 연동하는 중... async");
        resolve(msg);
    }, 1000));
    /*
    setTimeout(()=>{   //비동기 방식(1, 3, 2 순서로 출력) => 동기 방식으로 처리해야함
        msg = "DB 연동 되었습니다";
        console.log("2. DB 연동하는 중... ");
    }, 1000));
    */
    /*
    msg = "DB 연동 되었습니다";
    console.log("2. DB 연동하는 중... ");   //동기 방식(1, 2, 3 순서로 출력)
    return msg;
    */
    
}
app.listen(3000, ()=>{console.log("3000 server");});