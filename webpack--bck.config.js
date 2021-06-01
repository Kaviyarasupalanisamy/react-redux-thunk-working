const path = require("path");
const htmlwebpackplugin = require("html-webpack-plugin");

module.exports = {
	entry:["./main.js"],
	output:{
		path:path.resolve("__dirname","dist"),
		filename:"bundle.js",
		publicPath:"/",
		clean:true
	},
	devServer: {
		historyApiFallback:true
	},
	module: {
		rules:[{
			test:/\.jsx?$/,
			exclude:/node_modules/,
			loader:'babel-loader',
			options:{
			presets:["@babel/preset-react"],
			"plugins": ["@babel/plugin-proposal-class-properties","@babel/plugin-syntax-dynamic-import"]
		    },
		}]
	},
	plugins:[
		new htmlwebpackplugin({title:"Production"})
	]
}