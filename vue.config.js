const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭eslint校验
  devServer: {
    proxy: {
      //  '/api'为请求前缀，用于控制是不是走代理，想走代理时就在请求前缀前边加上这个请求前缀
      '/api': {
        target: 'https://121.196.234.244:8081',
        ws: true, //用于支持websocket
        changeOrigin: true, //用于控制请求头中的host值
        pathRewrite:{
          '^/api' : '' // 重写请求
        }
      },
    }
  }


})