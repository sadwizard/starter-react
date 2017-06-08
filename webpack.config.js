var path = require('path');

module.exports= {
	entry: './src/app.js',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname , 'app')
	},
	module: {
		rules: [
			{
		      test: /\.js$/,
		      exclude: /(node_modules|bower_components)/,
		      use: {
		        loader: 'babel-loader',
		        options: {
		          presets: ['env', 'react', 'es2015']
		        }
		      }
		    },
			{
				test: /\.sass$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}

		]
	},
	watch: true,
	devServer: {
	  contentBase: path.join(__dirname, "app"),
	  compress: true,
	  port: 9000
	}
};