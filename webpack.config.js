const _ = require('underscore');
const webpack = require('webpack');
const path = require('path');


let dev = true;

function prodOrDev(ifProd, ifDev) {
	if (!dev) {
		return ifProd != null ? ifProd : true;
	} else {
		return ifDev != null ? ifDev : false;
	}
}

let webpackMode = prodOrDev('production', 'development');



module.exports = {
	mode: webpackMode,

	entry: {
		app: './app/index.js',
	},

	watch: false,
	watchOptions: {
		ignored: /node_modules/
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					test: /node_modules\\(?!bbmn)/,
					chunks: "all",
					filename: `js/vendors.js`,
				}
			}
		}
	},

	output: {
		path: path.resolve(__dirname, `www/bndls`),
		filename: `js/app.js`
	},
	resolve: {
		alias: {
			'pages': path.resolve('src/pages'),
			'mods': path.resolve('src/mods'),
			'base': path.resolve('src/base'),
			'common': path.resolve('src/common'),
			'app': path.resolve('src/app'),
			'helpers': path.resolve('src/helpers'),
			'components': path.resolve('src/components'),
			'controls': path.resolve('src/controls'),
			'bus': path.resolve('src/bus'),
			'locales': path.resolve('src/locales'),
		},
	},
	plugins: [
		
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery',
			'_': 'underscore'
		}),
	],
	module: {
		rules: [
			// {
			// 	test: /\.js$/,
			// 	//exclude: /(node_modules)/,
			// 	loader: 'babel-loader',
			// 	query: {
			// 		presets: ['@babel/env']
			// 	},
			// },
			{
				test: /\.html$/,
				loader: "underscore-template-loader",
				query: {
					engine: 'underscore',
				}
			},
		],
	},
};
