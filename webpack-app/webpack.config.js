var htmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path');

module.exports = {
    entry:'./src/app.js',
    output:{
        path: path.resolve(__dirname,'./dist'),
        filename: 'js/[name].app.js',
    },
    module: {
        rules: [
            {
                test:/\.html$/,
                use:["html-loader"]
            },
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname,'node_modules'),
                include:path.resolve(__dirname,'src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer')({
                                    browsers: [
                                        // 加这个后可以出现额外的兼容性前缀
                                       "last 5 version"
                                    ]
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",   // css less 混用的时候 不写importLoaders
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer')({
                                    browsers: [
                                        // 加这个后可以出现额外的兼容性前缀
                                        "> 0.01%"
                                    ]
                                })
                            ]
                        }
                    },
                    "less-loader"
                ]
            },
            {
                test:/\.(png|jpg|gif|svg)$/i,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:1000,
                            name:'assets/[name]-[hash:5].[ext]',
                            outputPath: 'images/'
                        }
                    },
                    "image-webpack-loader"
                ]
            }
        ]
    },
    plugins:[
       new htmlWebpackPlugin({
           template:'index.html',
           filename: 'index.html',
           inject:'body'
       })
    ]

}
