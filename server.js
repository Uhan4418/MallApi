const express = require('express')
//  用来解析post请求的数据
const bodyParser = require('body-parser')
const path = require('path')
// const tokenMiddleWare = require('./middleware/tokenMiddleWare')
const app = express()

//解决跨域跨域
const cors = require('cors');
//通过第三方中间件cors来实现跨域的问题
app.use(cors());

// 引入数据库连接文件 启动服务器的时候同时启动数据库
const db = require('./db/connect')

// 解析post数据
// 解析表单格式的数据 x-www-form-urlencode
app.use(bodyParser.urlencoded({extended: false}));
// 解析json数据格式
app.use(bodyParser.json());

//静态资源路径
app.use('/public',express.static(path.join(__dirname,'./public/img')))

/*
  路由
  1、用户登录路由
  2、商品操作路由
  3、订单操作路由
*/

let  userRouter = require("./routers/userRouter")
app.use('/admin/user',userRouter) //登录注册不需要加锁

let  goodRouter = require("./routers/goodRouter")
app.use('/admin/goods',goodRouter) 

let  orderRouter = require("./routers/orderRouter")
app.use('/admin/orders',orderRouter) 

let  uploadRouter = require("./routers/uploadRouter")
app.use('/admin/upload',uploadRouter)

// let  foodRouter = require('./router/foodRouter')
// app.use('/admin/food',tokenMiddleWare,foodRouter) //需要加锁的

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