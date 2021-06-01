const path = require("path");
const htmlwebpackplugin = require("html-webpack-plugin");
const cssloader = require("css-loader");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')


module.exports = {
    entry: {
        app: './main.js',
      },
	output:{
		path:path.resolve(__dirname,"dist"),
		filename:"bundle.js",
		publicPath:"/",
		clean:true
	},
    module: {
		rules:[{
			test:/\.jsx?$/,
			exclude:/node_modules/,
			loader:'babel-loader',
			options:{
			presets:["@babel/preset-react"],
			"plugins": ["@babel/plugin-proposal-class-properties","@babel/plugin-syntax-dynamic-import"]
			}
		},
	    { 
			test: /\.css$/, 
			use:[MiniCssExtractPlugin.loader, "css-loader"] 
		}]
	},
	plugins:[new htmlwebpackplugin({title:"Production",template:"./index.html"}),new MiniCssExtractPlugin()],
	optimization: {
		minimize: true,
		minimizer: [
		  // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
		  // `...`,
		  new CssMinimizerPlugin(),
		],
	  },
	
}