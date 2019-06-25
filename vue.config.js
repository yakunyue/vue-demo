// let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    // 选项...
    // configureWebpack: {
    //     plugins: [
    //         new BundleAnalyzerPlugin()]
    // }
    css: { // 配置css模块
        loaderOptions: { // 向预处理器 Loader 传递配置选项
            less: { // 配置less（其他样式解析用法一致）
                javascriptEnabled: true // 设置为true
            }
        }
    }
}
