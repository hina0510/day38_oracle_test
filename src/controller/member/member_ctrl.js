const oracledb = require("oracledb");
const dbConfig = require("../../../config/database/db_config");
oracledb.autoCommit = true; //자동으로 commit

const ser = require("../../service/member/member_service");


const list = async(req, res)=>{    //async, await : 비동기 방식을 동기 방식으로 처리
    const list = await ser.getList();
    console.log("controller list : ", list); // , : 저장된 정보를 보여줌.+ : 형식을 보여줌
    /*
const list = async (req, res)=>{
    console.log(dbConfig);
    let con = await oracledb.getConnection(dbConfig); //dbConfig의 정보로 oracle 접속
    console.log("con : ", con);
    oracledb.outFormat = oracledb.OBJECT;   //oracle에 지정한 형식으로 보여줌
    let result = await con.execute("select * from members02");
    console.log("result : ", result);
    res.send("list 페이지 연동 : "+result);
    */
    //res.send(list);
    res.render("member/member_index", {list});
}
const registerForm = (req,res) => {
    res.render("member/register_form");
}
const register = async (req,res) => {
    console.log("register : ", req.body);
    let msg = await ser.insert(req.body);
    res.send(msg);
}
const memberView = async(req,res) => {      //  /:id일 때는 req.params
    console.log("memberView ctrl : ",req.params);   //mId
    const member = await ser.getMember(req.params);
    console.log("controller memberview : ", member);
    //res.send("memberview");
    res.render("member/member_view", {member}); //mId와 일치하는 행 출력
}
const modifyForm = async (req,res) => {      //  ?id=일 때는 req.query
    console.log("ctrl modify : ",req.query);
    
    const member = await ser.getMember(req.query);
    console.log("ctrl modify : ", member);
    res.render("member/modify_form", {member});
}
const modify = async (req,res) => {      
    console.log("ctrl modify : ", req.body);
    const msg = await ser.modify(req.body);
    res.send(msg);
}
const deleteMember = async(req,res) => {
    const msg = await ser.deleteMember(req.params);
    res.send(msg);
    //res.redirect("");
}
module.exports = {list, registerForm, register, memberView, modifyForm, modify, deleteMember};