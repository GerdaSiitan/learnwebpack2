import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { PurgeCSSPlugin } from 'purgecss-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';
import Dotenv from 'dotenv-webpack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let views = fs.readdirSync('./src/views')

export default {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public')
        },
        historyApiFallback: true,
        open: true,
        port: 9000,
        compress: true,
    },
    module:{
        rule: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader , 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.png/,
                type: 'asset/resource',
                generator: {
                    filename: '[name][ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),

        //new MiniCssExtractPlugin(),

        new PurgeCSSPlugin(),
        new VueLoaderPlugin(),
        new Dotenv()
    ],
}

