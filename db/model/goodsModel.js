// 商品相关的数据模型

const  mongoose = require('mongoose')

let GoodsSchema = new mongoose.Schema({
  // _id:{type:String},
  name:{type:String},
  type:{type:String},
  price:{type:String},
  remark:{type:String},// 商品备注，
  data:{type:String},
  stock:{type:Number}, // 库存
  detail:{type:String}, // 详情
  img:{type:Object},// 图片
  status:{type:String}
})

let GoodsModel = mongoose.model('goods',GoodsSchema)

module.exports = GoodsModel