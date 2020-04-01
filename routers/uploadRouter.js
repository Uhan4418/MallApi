// 负责文件上传的路由

const  express = require('express')
const  multer = require('multer')
const  fs = require('fs')
const  path = require('path')
//  创建一个multer对象
const  upload = multer({})
const router = express.Router()


/**
 * @api {post} /admin/uploads/uploadImg   图片上传
 * @apiName uploadImg
 * @apiGroup Upload
 *
 * @apiParam {String} img 图片字段
 *
 * @apiSuccess {String} err 状态码r.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {String} path  保存路径.
 */
//注意:上传图片必须用post方式
//req.file 上传的文件信息默认是不存在的,只有被multer中间件处理之后才有
router.post('/uploadImg',upload.single('img'),(req,res)=>{
  console.log(req.file)
  //buffer 上传图片的数据
  let {buffer,mimetype,size} = req.file 
  // 判断尺寸 1.前端判断 2.后端判断
  if(size >= 1000000){
    return res.send({err:-1,msg:'图片尺寸过大'})
  }
  // 限制文件类型 1.前端判断 2.后端判断
  let typs=['jpg','gif','png','jpeg']
  //让后缀名和源文件保持一致
  let extName = mimetype.split('/')[1]
  if(typs.indexOf(extName)===-1){
    return  res.send({err:-2,msg:'图片类型错误'})
  }
  // 将文件写到静态资源目录下
  //  防止文件被覆盖,保证文件名的唯一性
  let name= (new Date()).getTime()+`_`+parseInt(Math.random()*999999)
  fs.writeFile(path.join(__dirname,`../public/img/${name}.${extName}`),buffer,(err)=>{
    if(err){
      res.send({err:-3,msg:'图片上传失败,请重试'})
    }else{
      res.send({err:0,msg:'图片上传成功',path:`/public/img/${name}.${extName}`})
    }
  })
})

module.exports = router