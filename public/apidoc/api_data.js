define({ "api": [
  {
    "type": "post",
    "url": "/admin/goods/addGoods",
    "title": "商品添加",
    "name": "addGoods",
    "group": "Goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>商品名称.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>商品类型.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>商品价格.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>商品备注.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "data",
            "description": "<p>商品限期.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "stock",
            "description": "<p>商品库存.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "detail",
            "description": "<p>商品详情.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "img",
            "description": "<p>商品展示.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码r.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/goodRouter.js",
    "groupTitle": "Goods"
  },
  {
    "type": "delete",
    "url": "/admin/goods/delGoods",
    "title": "商品删除",
    "name": "delGoods",
    "group": "Goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>商品主键id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码r.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ps",
            "description": "<p>根据商品id删除对应的商品信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/goodRouter.js",
    "groupTitle": "Goods"
  },
  {
    "type": "post",
    "url": "/admin/goods/getGoodsById",
    "title": "商品查询",
    "name": "getInfoById",
    "group": "Goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>商品主键id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码r.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>查询到的数据.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "ps1",
            "description": "<p>如果不传id,则查询所有商品信息;</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "ps2",
            "description": "<p>如果传id,则根据id查询对应商品信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/goodRouter.js",
    "groupTitle": "Goods"
  },
  {
    "type": "get",
    "url": "/admin/goods/updateGoods",
    "title": "商品更新",
    "name": "updateGoods",
    "group": "Goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>商品名称.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>商品类型.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>商品价格.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>商品备注.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "data",
            "description": "<p>商品限期.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "stock",
            "description": "<p>商品库存.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "detail",
            "description": "<p>商品详情.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "img",
            "description": "<p>商品展示.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>商品主键id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码r.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ps",
            "description": "<p>根据商品id更新对应的商品信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/goodRouter.js",
    "groupTitle": "Goods"
  },
  {
    "type": "post",
    "url": "/admin/user/login",
    "title": "管理员登录",
    "name": "login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>管路员账号.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passWord",
            "description": "<p>登录密码.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码r.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userInfo",
            "description": "<p>管理员信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/userRouter.js",
    "groupTitle": "User"
  }
] });
