const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',  // You can change to 'development' if needed

  // Entry point for your TypeScript app
  entry: './src/index.ts',

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  // Module rules for processing TypeScript files
  module: {
    rules: [
      {
        test: /\.ts$/,            // Match any `.ts` file
        exclude: /node_modules/,
        use: 'ts-loader',         // Use the ts-loader to transpile TypeScript to JavaScript
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.js'], // Resolve both .ts and .js files
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
};
