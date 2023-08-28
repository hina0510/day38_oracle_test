const router = require("express").Router();
const memberCtrl = require("../../controller/member/member_ctrl");

router.get("/", (req,res)=>{
    console.log("member 연동");
    res.send("member 연동");
})
router.get("/list", memberCtrl.list);
router.get("/register_form", memberCtrl.registerForm);
router.post("/register", memberCtrl.register);
router.get("/member_view/:id", memberCtrl.memberView);  // /:id 경로처럼 값을 받아올 때
router.get("/modify_form", memberCtrl.modifyForm);      // ?id= ?로 값을 받아올 때
router.post("/modify", memberCtrl.modify);
router.get("/delete/:id", memberCtrl.deleteMember);

module.exports = router;