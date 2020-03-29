const express = require('express')
const router = express.Router()
const {
  findGood,
  findAll,
  delGood,
  updateGood,
  insertGood,
} = require("../controls/goodControler")


/**
 * @api {post} /admin/goods/getGoodsById  商品查询
 * @apiName getInfoById
 * @apiGroup Goods
 *
 * @apiParam {String} _id  商品主键id
 * 
 * @apiSuccess {String} err 状态码r.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {Array} list  查询到的数据.
 * @apiSuccess {Array} ps1  如果不传id,则查询所有商品信息;
 * @apiSuccess {Array} ps2  如果传id,则根据id查询对应商品信息
 */
// 查询商品信息  
// 如果不传id,则查询所有商品信息;
// 如果传id,则根据id查询对应商品信息
router.post('/getGoodsById',(req,res) => {
  let {_id} = req.body
  if(_id){
    findGood(_id)
    .then((infos)=>{
      res.send({list:infos,err:0,msg:"查询成功"})
      console.log(infos)
    })
    .catch((err)=>{
      res.send({err:-1,msg:"查询失败,请重试!"})
      console.log(err)
    })
  }else{
    findAll().then((infos)=>{
      res.send({list:infos,err:0,msg:"查询成功"})
      console.log(infos)
    })
    .catch((err)=>{
      res.send({err:-1,msg:"查询失败,请重试!"})
      console.log(err)
    })
  }
})

/**
 * @api {delete} /admin/goods/delGoods  商品删除
 * @apiName delGoods
 * @apiGroup Goods
 *
 * @apiParam   {String} _id  商品主键id
 * @apiSuccess {String} err 状态码r.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {String} ps  根据商品id删除对应的商品信息.
 */
// 删除商品信息 
router.delete('/delGoods',(req,res) => {
  let {_id} = req.query
  delGood({_id})
  .then((data) => {
    console.log("商品删除成功")
    res.send({err:0,msg:'商品删除成功'})
  })
  .catch((err) => {
    console.log(err);
    console.log({err:-1,msg:'商品删除失败,请重试!'});
  })
})

/**
 * @api {get} /admin/goods/updateGoods   商品更新
 * @apiName updateGoods
 * @apiGroup Goods
 *
 * @apiParam {String} name 商品名称.
 * @apiParam {String} type 商品类型.
 * @apiParam {String} price 商品价格.
 * @apiParam {String} remark 商品备注.
 * @apiParam {Number} data 商品限期.
 * @apiParam {Number} stock 商品库存.
 * @apiParam {Number} detail 商品详情.
 * @apiParam {Number} img 商品展示.
 *
 * @apiSuccess {String} _id  商品主键id
 * @apiSuccess {String} err 状态码r.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {String} ps  根据商品id更新对应的商品信息.
 */
// 更新商品信息
router.get('/updateGoods',(req,res) => {
  // 获取要更新数据的参数
  let {_id,name,type,price,remark,data,stock,detail,img} = req.query
  console.log({_id,name,type,price,remark,data,stock,detail,img})
  updateGood(_id,{name,type,price,remark,data,stock,detail,img})
  .then((infos) => {
    console.log(infos,"商品信息更新成功")
    res.send({err:0,msg:'商品信息更新成功'})
  })
  .catch((err) => {
    console.log(err);
    res.send({err:-1,msg:'商品信息更新失败'});
  })
})

/**
 * @api {post} /admin/goods/addGoods   商品添加
 * @apiName addGoods
 * @apiGroup Goods
 *
 * @apiParam {String} name 商品名称.
 * @apiParam {String} type 商品类型.
 * @apiParam {String} price 商品价格.
 * @apiParam {String} remark 商品备注.
 * @apiParam {Number} data 商品限期.
 * @apiParam {Number} stock 商品库存.
 * @apiParam {Number} detail 商品详情.
 * @apiParam {Number} img 商品展示.
 *
 * @apiSuccess {String} err 状态码r.
 * @apiSuccess {String} msg  信息提示.
 */
// 添加商品
router.post('/addGoods',(req,res) => {
  // 接收请求插入的数据
  let {name,type,price,remark,data,stock,detail,img} = req.body
  // 处理数据 将数据插入到数据库中
  insertGood({name,type,price,remark,data,stock,detail,img})
  .then((data)=>{
    console.log("数据插入成功",data )
    res.send({err:0,msg:"数据插入成功"})
  })
  .catch((err)=>{
    res.send({err:-1,msg:"数据插入失败,请重试!"})
    console.log(err,"数据插入失败,请重试!")
  })
})


module.exports = router
