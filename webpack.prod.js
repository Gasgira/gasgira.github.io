const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
	mode: 'production',
	entry: './src',
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, './docs'),
		publicPath: '/'
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				extractComments: false,
			}),
		],
	},
	resolve: {
		alias: {},
		modules: [
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
				test: /\.(png|jpg|gif)$/,
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
		static: path.join(__dirname, 'docs'),
		hot: true,
		historyApiFallback: true,
		allowedHosts: [
			'cylix.guide',
			'hi.cylix.guide'
		],
		headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': '*',
				'Access-Control-Allow-Methods': '*',
		},
		proxy: {
			'/api': {
				target: 'https://cylix.guide',
				changeOrigin: true,
				secure: false,
			}
		}
	},
	plugins: [
		// new webpack.DefinePlugin({
		// 	'process.env': {
		// 		__BUILD__: JSON.stringify(new Date()),
		// 		__VERSION__: JSON.stringify(process.env.npm_package_version),
		// 		__DEBUG__: JSON.stringify(true)
		// 	}
		// }),
		new webpack.HotModuleReplacementPlugin(),
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: [
				'**/*',
				'!CNAME*',
				'!sitemap.xml*',
				'!robots.txt*',
				'!404.html*',
				'!_redirects',
				'!db/**',
				'!7/**',
				'!i18n/**'
			],
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
			// hash: true
			inject: true
		}),
		new CopyPlugin({
			patterns: [
				{
					from: '**/*',
					to: '',
					context: 'src/assets/'
				}
			],
		}),
		new Dotenv({
			path: './.env'
		})
	]
}