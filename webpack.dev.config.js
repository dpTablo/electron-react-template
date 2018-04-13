const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: './src/index.jsx',
	resolve: {
		extensions: ['.js', '.jsx']
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	devServer: {
		contentBase: './dist',
		hot: true
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new CopyWebpackPlugin([
			{ from: './src/index.html' }
		])  
	],
	module: {
		rules: [
			{
				test: [/\.js$/, /\.jsx$/],
				use: ['source-map-loader'],
				enforce: 'pre'
			},
			{
				test: [/\.js$/, /\.jsx$/],
				loader: 'babel-loader', 
				exclude: /(node_modules)/,
				query: {
					cacheDirectory: true,
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader'
					}, 
					{
						loader: 'css-loader'
					}, 
					{
						loader: 'sass-loader'
					}
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]'
						}  
					}
				]
			}
		]
	}
}