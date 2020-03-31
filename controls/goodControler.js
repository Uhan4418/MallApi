// 将数据库相关的操作抽离处理
const GoodModel = require("../db/model/goodsModel")

// 删除商品信息
let delGood = async (_id)=>{
  // 根据id删除对应的商品信息
  let result = await GoodModel.deleteOne({_id})
  return result
}

// 更新商品信息
let updateGood = async (_id,updateInfos)=>{
  // 根据id更新对应的商品信息
  let result = await GoodModel.updateOne({_id},updateInfos)
  return result
}

// 添加商品信息
let insertGood =async (obj)=>{
  // 根据商品数据模型插入商品信息
  let result = await GoodModel.insertMany(obj)
  return result
}

// 根据id查询商品信息
let findGoodsById = async (_id)=>{
  let result = await GoodModel.find({_id})
  return result
}

// 查询所有商品信息
let findAll = async ()=>{
  let result = await GoodModel.find()
  return result
}

// 分页查询
let findGoodsByPage = async (page,pageSize) => {
  let allGoods = await GoodModel.find()
  // 总数据条数
  let allCount = allGoods.length
  // 每一页的数据
  let result = await GoodModel.find().skip((Number(page)-1)*pageSize).limit(Number(pageSize))
  return {result,allCount}
}

// 分类查询
let findGoodsByType = async (type,page,pageSize) => {
  let typeGoods = await GoodModel.find({type})
  // 总数据条数
  let allCount = typeGoods.length
  // 每一页的数据
  let result = await GoodModel.find({type}).skip((Number(page)-1)*pageSize).limit(Number(pageSize))
  return {result,allCount}
}

// 商品名称查询
let findGoodsByName = async (name,page,pageSize) => {
  let nameGoods = await GoodModel.find({name})
  // 总数据条数
  let allCount = nameGoods.length
  // 每一页的数据
  let result = await GoodModel.find({name}).skip((Number(page)-1)*pageSize).limit(Number(pageSize))
  return {result,allCount}
}

// 商品状态查询
let findGoodsByStatus = async (status,page,pageSize) => {
  let statusGoods = await GoodModel.find({status})
  // 总数据条数
  let allCount = statusGoods.length
  // 每一页的数据
  let result = await GoodModel.find({status}).skip((Number(page)-1)*pageSize).limit(Number(pageSize))
  return {result,allCount}
}

// 修改商品状态值 根据id
let updateStatusById = async (_id,status) => {
  let result = await GoodModel.updateOne({_id},status)
  return result
}


module.exports = {
  delGood,
  updateGood,
  insertGood,
  findAll,
  findGoodsById,
  findGoodsByPage,
  findGoodsByType,
  findGoodsByName,
  findGoodsByStatus,
  updateStatusById
}