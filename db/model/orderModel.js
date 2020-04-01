// 订单相关的数据模型

const  mongoose = require('mongoose')

let OrderSchema = new mongoose.Schema({
  code:{type:String}, //  订单编号
  gname:{type:String},  // 商品名称
  gtype:{type:String},  //  商品类型
  score:{type:String},  //  积分
  exnum:{type:String},  //  兑换数量
  extime:{type:String}, //  兑换时间
  excname:{type:String},  // 兑换客户
  tel:{type:String}, // 手机号
  status:{type:String},// 订单状态
  address:{type:String},  // 快递地址
  cmp:{type:String},  //快递公司
  expnum:{type:String} // 快递单号
})

let OrderModel = mongoose.model('orders',OrderSchema)

module.exports = OrderModel