const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	devServer: {
		static: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000,
	},
};
