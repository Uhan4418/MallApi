// 管理员控制器
const UserModel = require("../db/model/userModel")
const {createToken} = require('../utils/jwt')

// 管理员登录
let userLogin = async (userName,passWord)=>{
  let result = await UserModel.findOne({userName,passWord})

  if(result){
    //  登录成功 产生新的token
    let {_id,userName} = result
    let token =createToken({_id,userName}) 
    //将token更新数据库
    let updateResult  = await UserModel.updateOne({_id},{token})
    // 错误处理判断
    console.log(updateResult)
    return {_id,userName,token}
  }else{
    throw '用户名或密码不正确,请重试!'
  }
}

//  判断token 和用户是否统一 
let tokenCheck = async (_id,token)=>{
  let result = await UserModel.findOne({_id,token})
  if(result){
    return result 
  }else{
    throw '用户token不匹配'
  }
}

module.exports={
  userLogin,
  tokenCheck
}