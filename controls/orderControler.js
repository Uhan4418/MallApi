// 将数据库相关的操作抽离处理
const OrderModel = require("../db/model/orderModel")

// 查询所有订单信息
let findAll = async (page,pageSize)=>{
  let nameOrders = await OrderModel.find()
  // 总数据条数
  let allCount = nameOrders.length
  // 每一页的数据
  let result = await OrderModel.find().skip((Number(page)-1)*pageSize).limit(Number(pageSize))
  return {result,allCount}
}

// 订单名称查询
let findOrdersByGName = async (gname,page,pageSize) => {
  let nameOrders = await OrderModel.find({gname})
  // 总数据条数
  let allCount = nameOrders.length
  // 每一页的数据
  let result = await OrderModel.find({gname}).skip((Number(page)-1)*pageSize).limit(Number(pageSize))
  return {result,allCount}
}

// 订单状态查询
let findOrdersByStatus = async (status,page,pageSize) => {
  let statusOrders = await OrderModel.find({status})
  // 总数据条数
  let allCount = statusOrders.length
  // 每一页的数据
  let result = await OrderModel.find({status}).skip((Number(page)-1)*pageSize).limit(Number(pageSize))
  return {result,allCount}
}

// 顾客名称查询
let findOrdersByCName = async (excname,page,pageSize) => {
  let cnameOrders = await OrderModel.find({excname})
  // 总数据条数
  let allCount = cnameOrders.length
  // 每一页的数据
  let result = await OrderModel.find({excname}).skip((Number(page)-1)*pageSize).limit(Number(pageSize))
  return {result,allCount}
}


// 顾客手机号查询
let findOrdersByTel = async (tel,page,pageSize) => {
  let telOrders = await OrderModel.find({tel})
  // 总数据条数
  let allCount = telOrders.length
  // 每一页的数据
  let result = await OrderModel.find({tel}).skip((Number(page)-1)*pageSize).limit(Number(pageSize))
  return {result,allCount}
}

module.exports = {
  findAll,
  findOrdersByGName,
  findOrdersByStatus,
  findOrdersByCName,
  findOrdersByTel
}