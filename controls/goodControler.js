// 将数据库相关的操作抽离处理
const FoodModel = require("../db/model/goodsModel")

// 查询所有商品信息
let findAll = async ()=>{
  let result = await FoodModel.find()
  return result
}

// 根据id查询商品信息
let findGood = async (_id)=>{
  let result = await FoodModel.find({_id})
  return result
}

// 删除商品信息
let delGood = async (_id)=>{
  // 根据id删除对应的商品信息
  let result = await FoodModel.deleteOne({_id})
  return result
}

// 更新商品信息
let updateGood = async (_id,updateInfos)=>{
  // 根据id更新对应的商品信息
  let result = await FoodModel.updateOne({_id},updateInfos)
  return result
}

// 添加商品信息
let insertGood =async (obj)=>{
  // 根据商品数据模型插入商品信息
  let result = await FoodModel.insertMany(obj)
  return result
}

module.exports = {
  findAll,
  findGood,
  delGood,
  updateGood,
  insertGood,
}