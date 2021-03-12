module.exports = {
  lintOnSave: false,
  configureWebpack:{
    resolve: {
      extensions:[],
      alias:{ //解决路径 配置别名
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
      }
    }
  }
}