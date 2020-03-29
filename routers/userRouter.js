// 管理员路由设置
const  express = require('express')
const  {userLogin} = require("../controls/userControler")
// 退出功能使用tokenMiddlWare
// const tokenMiddlWare = require("../middleware/tokenMiddlWare") 
const router = express.Router()

 /**
 * @api {post} /admin/user/login  管理员登录
 * @apiName login
 * @apiGroup User
 *
 * @apiParam {String} userName  管路员账号.
 * @apiParam {String} passWord  登录密码.
 *
 * @apiSuccess {String} err 状态码r.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {String} userInfo  管理员信息.
 */
router.post('/login',(req,res)=>{
  let {userName,passWord} = req.body 
  userLogin(userName,passWord)
  .then((info)=>{ 
    // // 登录成功之后产生token 并返回
    // let token =createToken()
    res.send({err:0,msg:'登录成功',userInfo:info})
    console.log("登录成功");
    
  })
  .catch((err)=>{ 
    res.send({err:-1,msg:err})
    console.log(err)
  })
})

module.exports = router