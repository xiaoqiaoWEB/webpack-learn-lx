var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main:'./src/script/main.js',
        index:'./src/script/index.js',
        a:'./src/script/a.js',
        b:'./src/script/b.js',
        c:'./src/script/c.js'
    },
    output: {//输出多文件
        path: path.resolve('./dist'),
        filename: 'js/[name]-[chunkhash].js',
        publicPath: "http://cnd.com/"
    },
    plugins: [ //自动生成HTML 且引入最新打包的JS
        new htmlWebpackPlugin({
            template: 'index.html',  //指定模板文件
            filename:'index.html',
            inject: false,           //设置脚本植入的地方
            title:'webpack is good',
            chunks:['main','index'],  //设置引入的js 文件
            minify: {
                removeComments:true, //删除注释
                collapseWhitespace:false //删除标签之前的空白区域
            }
        }),
        new htmlWebpackPlugin({
            template: 'index.html',
            filename:'a.html',
            inject: false,
            chunks:['main','a','c']     //不设置全部引入
           // excludeChunks: ['a']  //排除 a  之外的 全部引入
        }),
        new htmlWebpackPlugin({
            template: 'index.html',
            filename:'b.html',
            inject: false,
            chunks:['main','b']
        }),
        new htmlWebpackPlugin({
            template: 'news.html',
            filename:'c.html',
            inject: 'body',         //设置脚本植入的地方
            chunks:['main','c'],
            minify: {
                removeComments:true, //删除注释
                collapseWhitespace:true //删除标签之前的空白区域
            }
        }),

    ]
};
