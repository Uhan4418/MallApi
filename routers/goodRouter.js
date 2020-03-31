const express = require('express')
const router = express.Router()
const {
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
} = require("../controls/goodControler")

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
  let {_id,name,type,price,remark,data,stock,detail,img,status} = req.query
  console.log({_id,name,type,price,remark,data,stock,detail,img,status})
  updateGood(_id,{name,type,price,remark,data,stock,detail,img,status})
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
  let {name,type,price,remark,data,stock,detail,img,status} = req.body
  // 处理数据 将数据插入到数据库中
  insertGood({name,type,price,remark,data,stock,detail,img,status})
  .then((data)=>{
    console.log("数据插入成功",data )
    res.send({err:0,msg:"数据插入成功"})
  })
  .catch((err)=>{
    res.send({err:-1,msg:"数据插入失败,请重试!"})
    console.log(err,"数据插入失败,请重试!")
  })
})

/**
 * @api {post} /admin/goods/getGoodsById  商品id查询
 * @apiName getGoodsById
 * @apiGroup Goods
 *
 * @apiParam {String} _id  商品主键id
 * 
 * @apiSuccess {String} err 状态码r.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {Array} list  查询到的数据.
 */
// 根据商品id查询商品信息  
router.post('/getGoodsById',(req,res) => {
  let {_id} = req.body
  console.log(_id)
  findGoodsById(_id)
  .then((data)=>{
    res.send({list:data,err:0,msg:"查询成功"})
    console.log(data)
  })
  .catch((err)=>{
    res.send({err:-1,msg:"查询失败,请重试!"})
    console.log(err)
  })
})

/**
 * @api {post} /admin/goods/getGoodsList  商品查询所有
 * @apiName getGoodsList
 * @apiGroup Goods
 * 
 * @apiSuccess {String} err 状态码r.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {String} allCount  数据总数.
 * @apiSuccess {Array} list  查询到的数据.
 */
// 查询所有商品信息  
router.post('/getGoodsList',(req,res) => {
  findAll().then((infos)=>{
    let allCount = infos.length
    res.send({err:0,msg:"查询成功",allCount,list:infos})
    console.log(infos)
  })
  .catch((err)=>{
    res.send({err:-1,msg:"查询失败,请重试!"})
    console.log(err)
  })
})

/**
 * @api {post} /admin/goods/getInfosByPage   分页查询
 * @apiName getInfosByPage
 * @apiGroup Goods
 *
 * @apiParam {String} page 查询页码数.
 * @apiParam {String} pageSize 每页的数据条数.
 *
 * @apiSuccess {String} err 状态码r.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {Array} list  查询到的数据.
 */
// 分页查询
router.post("/getInfosByPage",(req,res)=>{
  let page = req.body.page || 1  // 查询的第几页数据 默认第一页
  let pageSize = req.body.pageSize || 2  // 每页几条数据 默认两条
  findGoodsByPage(page,pageSize)
  .then((data)=>{
    console.log(data)
    let {result,allCount} = data
    let limit = page/Math.ceil(allCount/pageSize)
    if(limit>1){
      console.log("输入查询页数过大")
      res.send({err:-2,msg:"输入查询页数过大"})
    }else{
      res.send({err:0,msg:"查询成功",list:result,page,pageSize,allCount})
    console.log("page：" + page + "/" + Math.ceil(allCount/pageSize))
    }
  })
  .catch((err)=>{
    res.send({err:-1,msg:"查询失败,请重试!"})
  })
})

/**
 * @api {post} /admin/goods/getInfosByType   分类查询
 * @apiName getInfosByType
 * @apiGroup Goods
 *
 * @apiParam {String} type 商品类型.
 * @apiParam {String} page 查询页码数.
 * @apiParam {String} pageSize 每页的数据条数.
 *
 * @apiSuccess {String} err 状态码r.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {Array} list  查询到的数据.
 */
// 根据商品类别type查询商品信息
router.post('/getInfosByType',(req,res)=>{
  let {type} = req.body
  let page = req.body.page || 1  // 查询的第几页数据 默认第一页
  let pageSize = req.body.pageSize || 2  // 每页几条数据 默认两条
  findGoodsByType(type,page,pageSize)
  .then((data)=>{
    console.log(data)
    let {result,allCount} = data
    let limit = page/Math.ceil(allCount/pageSize)
    if(limit>1){
      console.log("输入查询页数过大")
      res.send({err:-2,msg:"输入查询页数过大"})
    }else{
      res.send({err:0,msg:"查询成功",list:result,page,pageSize,allCount})
      console.log("page：" + page + "/" + Math.ceil(allCount/pageSize))
    }
  })
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:"查询失败,请重试!"})
  })
})

/**
 * @api {post} /admin/goods/getInfosByName   名称查询
 * @apiName getInfosByName
 * @apiGroup Goods
 *
 * @apiParam {String} name 商品名称.
 * @apiParam {String} page 查询页码数.
 * @apiParam {String} pageSize 每页的数据条数.
 *
 * @apiSuccess {String} err 状态码r.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {Array} list  查询到的数据.
 */
// 根据商品名称name查询商品信息
router.post('/getInfosByName',(req,res)=>{
  let {name} = req.body
  let page = req.body.page || 1  // 查询的第几页数据 默认第一页
  let pageSize = req.body.pageSize || 2  // 每页几条数据 默认两条
  findGoodsByName(name,page,pageSize)
  .then((data)=>{
    console.log(data)
    let {result,allCount} = data
    let limit = page/Math.ceil(allCount/pageSize)
    if(limit>1){
      console.log("输入查询页数过大")
      res.send({err:-2,msg:"输入查询页数过大"})
    }else{
      res.send({err:0,msg:"查询成功",list:result,page,pageSize,allCount})
      console.log("page：" + page + "/" + Math.ceil(allCount/pageSize))
    }
  })
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:"查询失败,请重试!"})
  })
})

/**
 * @api {post} /admin/goods/getInfosByStatus   状态查询
 * @apiName getInfosByStatus
 * @apiGroup Goods
 *
 * @apiParam {String} status 商品状态.
 * @apiParam {String} page 查询页码数.
 * @apiParam {String} pageSize 每页的数据条数.
 *
 * @apiSuccess {String} err 状态码r.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {Array} list  查询到的数据.
 */
// 根据商品状态status查询商品信息
router.post('/getInfosByStatus',(req,res)=>{
  let {status} = req.body
  let page = req.body.page || 1  // 查询的第几页数据 默认第一页
  let pageSize = req.body.pageSize || 2  // 每页几条数据 默认两条
  findGoodsByStatus(status,page,pageSize)
  .then((data)=>{
    console.log(data)
    let {result,allCount} = data
    let limit = page/Math.ceil(allCount/pageSize)
    if(limit>1){
      console.log("输入查询页数过大")
      res.send({err:-2,msg:"输入查询页数过大"})
    }else{
      res.send({err:0,msg:"查询成功",list:result,page,pageSize,allCount})
      console.log("page：" + page + "/" + Math.ceil(allCount/pageSize))
    }
  })
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:"查询失败,请重试!"})
  })
})

/**
 * @api {post} /admin/goods/updateStatusById   状态修改
 * @apiName updateStatusById
 * @apiGroup Goods
 *
 * @apiParam {String} _id 商品id.
 * @apiParam {String} status 商品状态.
 *
 * @apiSuccess {String} err 状态码r.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {Array} list  查询到的数据.
 */
// 根据id只修改商品的状态值
router.post('/updateStatusById',(req,res)=>{
  let {_id,status} = req.body
  console.log({_id,status})
  updateStatusById(_id,{status})
  .then((infos) => {
    console.log(infos,"商品状态更新成功")
    res.send({err:0,msg:'商品状态更新成功'})
  })
  .catch((err) => {
    console.log(err);
    res.send({err:-1,msg:'商品状态更新失败'});
  })
})


module.exports = router
