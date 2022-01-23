const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	devtool: 'source-map',
	entry: './src',
	output: {
		filename: '[name].[hash].js', // contenthash
		path: path.resolve(__dirname, './docs'),
		// publicPath: '/assets/'
	},
	resolve: {
		alias: {},
		modules: [
			path.resolve('./src/client/static'),
			path.resolve('./src'),
			path.resolve('./node_modules')
		]
	},
	// Loaders
	module: {
		rules: [{
				test: /\.css$/i,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [
									[
										"postcss-preset-env",
										{
											features: {
												// stage: 1,
												'nesting-rules': true
											}
										},
									],
								],
							},
						},
					},
				],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.worker\.js$/,
				use: {
					loader: "worker-loader"
				},
			}
		],
	},
	devServer: {
		static: path.join(__dirname, 'docs'), // for serving static files only
		// compress: true,
		// host: 'local.derek.care',
		// port: 443,
		// historyApiFallback: true,
		// https: true,
		// stats: 'errors-only',
		hot: true
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				__BUILD__: JSON.stringify(new Date()),
				__VERSION__: JSON.stringify(process.env.npm_package_version),
				__DEBUG__: JSON.stringify(true)
			}
		}),
		new webpack.HotModuleReplacementPlugin(),
		// new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			// hash: true
			inject: true
		})
		// new CopyPlugin({
		// 	patterns: [{
		// 			from: '**/*',
		// 			to: '',
		// 			context: 'src/client/static/'
		// 		},
		// 		{
		// 			from: '**/*',
		// 			to: 'assets/',
		// 			context: 'src/assets/'
		// 		}
		// 	],
		// })
	]
}