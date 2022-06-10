const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭语法检查
  devServer: {  // 开启代理服务器
    // proxy:{
    //   '/api':{
    //     target: 'http://localhost:8000',
    //     pathRewrite:{'^/api':''}, //url重写
    //     ws:true, //支持websocket
    //     changeOrigin: true,  //把请求源改为地理服务器
    //   }
    // }
  }
})
