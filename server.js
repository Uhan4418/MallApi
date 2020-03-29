const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
// const tokenMiddleWare = require('./middleware/tokenMiddleWare')
const app = express()

// 引入数据库连接文件 启动服务器的时候同时启动数据库
const db = require('./db/connect')

//post 数据的解析 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//静态资源路径
app.use('/public',express.static(path.join(__dirname,'./public')))

/*
  路由
  1、用户登录路由
  2、商品操作路由
*/
let  userRouter = require("./routers/userRouter")
app.use('/admin/user',userRouter) //登录注册不需要加锁
let  goodRouter = require("./routers/goodRouter")
app.use('/admin/goods',goodRouter) 
// let  uploadRouter = require('./router/uploadRouter')
// let  foodRouter = require('./router/foodRouter')
// app.use('/admin/food',tokenMiddleWare,foodRouter) //需要加锁的
// app.use('/admin/upload',uploadRouter)
app.listen(3000,()=>{
	console.log("server start!")
  console.log(`/**
  *　　　　　　　 ┏┓　 ┏┓+ +
  *　　　　　　　┏┛┻━━━┛┻┓ + +
  *　　　　　　　┃　　　　　　┃ 　
  *　　　　　　　┃　　　━　　 ┃ ++ + + +
  *　　　　　　 ████━████  ┃+
  *　　　　　　　┃　　　　　　　┃ +
  *　　　　　　　┃　　　┻　　　┃
  *　　　　　　　┃　　　　　　┃ + +
  *　　　　　　　┗━┓　　　┏━┛
  *　　　　　　　　 ┃　　　┃　　　　　　　　　　　
  *　　　　　　　　 ┃　　　┃ + + + +
  *　　　　　　　　 ┃　　　┃　　　　Code is far away from bug with the animal protecting　　　　　　　
  *　　　　　　　　 ┃　　　┃ + 　　　　神兽保佑,代码无bug　　
  *　　　　　　　　 ┃　　　┃
  *　　　　　　　　 ┃　　　┃　　+　　　　　　　　　
  *　　　　　　　　 ┃　 　 ┗━━━┓ + +
  *　　　　　　　　 ┃ 　　　　   ┣┓
  *　　　　　　　　 ┃ 　　　　　 ┏┛
  *　　　　　　　　 ┗┓┓┏━┳┓┏┛ + + + +
  *　　　　　　　　  ┃┫┫ ┃┫┫
  *　　　　　　　　  ┗┻┛ ┗┻┛+ + + +
  */`)
})