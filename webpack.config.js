const path= require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
/** @type {import('webpack').Configuration} */
module.exports={
    entry:['./src/index.js'],
    output:{
        path:path.resolve(__dirname,'dist'),
        filename: 'main.js'
    },
    resolve:{
        extensions:['.js'],
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin(
            {
                inject:true,
                template: './public/index.html',
                filename:'./index.html'
            }
        ),
        new CopyPlugin({
            patterns: [
              { from: './src/styles/style.css', to: '' },
            ],
          }),
    ]
}