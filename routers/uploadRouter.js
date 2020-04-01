const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

//图片传输  格式为form-data
var multer = require('multer');
//	创建一个multer对象
var upload = multer({});



/**
 * @api {post} /admin/upload/file  文件上传接口
 * @apiName upload
 * @apiGroup File
 *
 * @apiParam {String} pic  file 
 * 
 * @apiSuccess {String} err 状态码
 * @apiSuccess {String} msg  信息提示
 * @apiSuccess {String} path  静态资源路径
 */
//注意:上传图片必须用post方式
//req.file 上传的文件信息默认是不存在的,只有被multer中间件处理之后才有
router.post('/file',upload.single('img'),(req,res)=>{
	console.log(req.file);
	let {buffer,mimetype,size} = req.file;
	
	//判断尺寸  1.前端判断  2.后端判断
	if(size >= 600000){
		return res.send({err:-1,msg:'图片尺寸过大'});
	}
	
	//文件命名  保证名字唯一性
	let name = (new Date()).getTime() + '_' + parseInt(Math.random()*99999);

	//限制文件类型  1.前端判断  2.后端判断
	let types = ['jpg','gif','png','jpeg'];
	//拓展文件类型设置
	let extName = mimetype.split('/')[1];
	if(types.indexOf(extName) === -1){
		return res.send({err:-2,msg:'图片类型错误'});
	}
	
	//将文件写到静态资源目录下  路径为上传到的位置
	fs.writeFile(path.join(__dirname,`../public/img/${name}.${extName}`),buffer,(err)=>{
		if(err){
			console.log("err:",err)
			res.send({err:err,msg:'上传失败,请重试'});
		}else{  //path为静态资源路径
			res.send({err:0,msg:'上传成功',path:`http://localhost:3000/public/img/${name}.${extName}`});
		}
	})
});


module.exports = router;
