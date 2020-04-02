const express = require('express')
const router = express.Router()
const {
  findAll,
  findOrdersByGName,
  findOrdersByStatus,
  findOrdersByCName,
  findOrdersByTel
} = require("../controls/orderControler")

/**
 * @api {get} /admin/orders/getOrderList  订单查询所有
 * @apiName getOrderList
 * @apiGroup Orders
 * 
 * @apiParam {String} page 查询页码数.
 * @apiParam {String} pageSize 每页的数据条数.
 * 
 * @apiSuccess {String} err 状态码r.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {String} allCount  数据总数.
 * @apiSuccess {Array} list  查询到的数据.
 */
// 查询所有商品信息  
router.get('/getOrderList',(req,res) => {
  let page = req.body.page || 1  // 查询的第几页数据 默认第一页
  let pageSize = req.body.pageSize || 2  // 每页几条数据 默认两条
  findAll(page,pageSize)
  .then((data)=>{
    console.log(data)
    let {result,allCount} = data
    let limit = page/Math.ceil(allCount/pageSize)
    if(limit>1){
      console.log("输入查询页数过大,请处输入有效值")
      res.send({err:-2,msg:"输入查询页数过大,请处输入有效值"})
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
 * @api {post} /admin/orders/getOrdersByGName   商品名称查询订单
 * @apiName getOrdersByGName
 * @apiGroup Orders
 *
 * @apiParam {String} gname 商品名称.
 * @apiParam {String} page 查询页码数.
 * @apiParam {String} pageSize 每页的数据条数.
 *
 * @apiSuccess {String} err 状态码r.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {Array} list  查询到的数据.
 */
//  根据商品名称查询订单
router.post('/getOrdersByGName',(req,res)=>{
  let {gname} = req.body
  let page = req.body.page || 1  // 查询的第几页数据 默认第一页
  let pageSize = req.body.pageSize || 2  // 每页几条数据 默认两条
  findOrdersByGName(gname,page,pageSize)
  .then((data)=>{
    console.log(data)
    let {result,allCount} = data
    let limit = page/Math.ceil(allCount/pageSize)
    if(limit>1){
      console.log("输入查询页数过大或商品不存在,请处输入有效值")
      res.send({err:-2,msg:"输入查询页数过大或商品不存在,请处输入有效值"})
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
 * @api {post} /admin/goods/getOrdersByStatus   订单状态查询
 * @apiName getOrdersByStatus
 * @apiGroup Orders
 *
 * @apiParam {String} status 订单状态.
 * @apiParam {String} page 查询页码数.
 * @apiParam {String} pageSize 每页的数据条数.
 *
 * @apiSuccess {String} err 状态码r.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {Array} list  查询到的数据.
 */
// 根据订单状态status查询商品信息
router.post('/getOrdersByStatus',(req,res)=>{
  let {status} = req.body
  let page = req.body.page || 1  // 查询的第几页数据 默认第一页
  let pageSize = req.body.pageSize || 2  // 每页几条数据 默认两条
  findOrdersByStatus(status,page,pageSize)
  .then((data)=>{
    console.log(data)
    let {result,allCount} = data
    let limit = page/Math.ceil(allCount/pageSize)
    if(limit>1){
      console.log("输入查询页数过大或状态值查询失败，请输入有效值")
      res.send({err:-2,msg:"输入查询页数过大或状态值查询失败，请输入有效值"})
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
 * @api {post} /admin/orders/getOrdersByCName   顾客名称查询订单
 * @apiName getOrdersByCName
 * @apiGroup Orders
 *
 * @apiParam {String} excname 顾客名称.
 * @apiParam {String} page 查询页码数.
 * @apiParam {String} pageSize 每页的数据条数.
 *
 * @apiSuccess {String} err 状态码r.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {Array} list  查询到的数据.
 */
//  根据顾客名称查询订单
router.post('/getOrdersByCName',(req,res)=>{
  let {excname} = req.body
  let page = req.body.page || 1  // 查询的第几页数据 默认第一页
  let pageSize = req.body.pageSize || 1  // 每页几条数据 默认两条
  console.log("excname:",excname)
  findOrdersByCName(excname,page,pageSize)
  .then((data)=>{
    console.log(data)
    let {result,allCount} = data
    let limit = page/Math.ceil(allCount/pageSize)
    if(limit>1){
      console.log("输入查询页数过大或顾客不存在,请输入有效值")
      res.send({err:-2,msg:"输入查询页数过大或顾客不存在,请输入有效值"})
    }
    res.send({err:0,msg:"查询成功",list:result,page,pageSize,allCount})
    console.log("page：" + page + "/" + Math.ceil(allCount/pageSize))
  })
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:"查询失败,请正确输入顾客名称"})
  })
})

/**
 * @api {post} /admin/orders/getOrdersByTel   顾客手机号查询订单
 * @apiName getOrdersByTel
 * @apiGroup Orders
 *
 * @apiParam {String} tel 顾客名称.
 * @apiParam {String} page 查询页码数.
 * @apiParam {String} pageSize 每页的数据条数.
 *
 * @apiSuccess {String} err 状态码r.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {Array} list  查询到的数据.
 */
//  根据顾客名称查询订单
router.post('/getOrdersByTel',(req,res)=>{
  let {tel} = req.body
  let page = req.body.page || 1  // 查询的第几页数据 默认第一页
  let pageSize = req.body.pageSize || 1  // 每页几条数据 默认两条
  console.log("tel:",tel)
  findOrdersByTel(tel,page,pageSize)
  .then((data)=>{
    console.log(data)
    let {result,allCount} = data
    let limit = page/Math.ceil(allCount/pageSize)
    if(limit>1){
      console.log("输入查询页数过大或顾客手机号不存在,请输入有效值")
      res.send({err:-2,msg:"输入查询页数过大或顾客手机号不存在,请输入有效值"})
    }
    res.send({err:0,msg:"查询成功",list:result,page,pageSize,allCount})
    console.log("page：" + page + "/" + Math.ceil(allCount/pageSize))
  })
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:"查询失败,请正确输入顾客手机号"})
  })
})


/**
 * @api {post} /admin/orders/getOrdersByCNameOrTel   商品名称/手机号查询订单
 * @apiName getOrdersByCNameOrTel
 * @apiGroup Orders
 *
 * @apiParam {String} excname 顾客名称.
 * @apiParam {String} tel 顾客手机号码.
 * @apiParam {String} page 查询页码数.
 * @apiParam {String} pageSize 每页的数据条数.
 *
 * @apiSuccess {String} err 状态码r.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {Array} list  查询到的数据.
 */
//  根据顾客名称或顾客手机号查询订单
router.post('/getOrdersByCNameOrTel',(req,res)=>{
  let {excname,tel} = req.body
  let page = req.body.page || 1  // 查询的第几页数据 默认第一页
  let pageSize = req.body.pageSize || 2  // 每页几条数据 默认两条
  if(excname&&tel){
    console.log("请单独输入顾客名或顾客手机号")
    res.send({err:-2,msg:"请单独输入顾客名或顾客手机号"})
  }
  if(excname){
    findOrdersByCName(excname,page,pageSize)
    .then((data)=>{
      console.log(data)
      let {result,allCount} = data
      let limit = page/Math.ceil(allCount/pageSize)
      if(limit>1){
        console.log("输入查询页数过大或顾客不存在,请输入有效值")
        res.send({err:-2,msg:"输入查询页数过大或顾客不存在,请输入有效值"})
      }else{
        res.send({err:0,msg:"查询成功",list:result,page,pageSize,allCount})
        console.log("page：" + page + "/" + Math.ceil(allCount/pageSize))
      }
    })
    .catch((err)=>{
      console.log(err)
      res.send({err:-1,msg:"查询失败,请重试!"})
    })
  }
  if(tel){
    findOrdersByTel(tel,page,pageSize)
    .then((data)=>{
      console.log(data)
      let {result,allCount} = data
      let limit = page/Math.ceil(allCount/pageSize)
      if(limit>1){
        console.log("输入查询页数过大或顾客手机号无效,请输入有效值")
        res.send({err:-2,msg:"输入查询页数过大或顾客手机号无效,请输入有效值"})
      }else{
        res.send({err:0,msg:"查询成功",list:result,page,pageSize,allCount})
        console.log("page：" + page + "/" + Math.ceil(allCount/pageSize))
      }
    })
    .catch((err)=>{
      console.log(err)
      res.send({err:-1,msg:"查询失败,请重试!"})
    })
  }
})


module.exports = router