const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/Main.ts',
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
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'final'),
	},
	devServer: {
		static: path.resolve(__dirname, 'final'),
		port: 8800,
	},
};
