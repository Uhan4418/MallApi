// 管理员模型
const  mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
  userName:{type:String,required:true},
  passWord:{type:String,required:true},
  token:{type:String,required:true},
  root:{type:String}
})

let UserModel = mongoose.model('admins',UserSchema)

module.exports = UserModel