const memberDAO = require("../../database/member/member_dao");
const getList = async ()=>{
    const result = await memberDAO.getList();//서비스에 결과값을 받아올 수 있다
    console.log("service getList : ",result);
    return result.rows; //행만 보여줌
}
const insert = async (body)=>{
    const result = await memberDAO.insert(body);
    console.log("service insert => ", result);
    let msg="", url="";
    if(result==0){
        msg="문제 발생";
        url="/member/register_form";
    }else{
        msg="등록 성공";
        url="/member/list";
    }
    const msgPack = getMassage(msg, url);
    return msgPack;
}
const getMassage = (msg, url) => {
    return `<script>alert("${msg}"); location.href="${url}";</script>`;
}
const getMember = (mId) => {
    console.log("service => ", memberDAO.getMember(mId));
    return memberDAO.getMember(mId);
}
/*
const getMember = async (mId)=>{
    console.log("service => ",await memberDAO.getMember(mId));
    //약속된 값이 없기 때문에 memberDAO.getMember(mId).rows 사용할 수 없다
    return memberDAO.getMember(mId);
}
*/
const modify = async(body) => {
    const result = await memberDAO.modify(body);
    let msg="", url="";
    if(result==0){
        msg="문제 발생";
        url="/member/modify_form?id="+body.id;
    }else{
        msg="수정되었습니다";
        url="/member/member_view/"+body.id;
    } 
    return getMassage(msg, url);
}
const deleteMember = async(body) => {
    const result = await memberDAO.deleteMember(body);
    let msg="", url="";
    if(result==0){
        msg="문제 발생";
        url="/member/member_view/"+body.id;
    }else{
        msg="삭제되었습니다";
        url="/member/list";
    } 
    return getMassage(msg, url);
}
module.exports = {getList, insert, getMember, modify, deleteMember};