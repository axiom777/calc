const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const fs = require('fs');

module.exports = (_, options) => {
  const isDev = options.mode === 'development';
  return {
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        scss: path.resolve(__dirname, 'src/scss/'),
        fonts: path.resolve(__dirname, 'src/fonts/'),
      },
      modules: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'node_modules'),
      ],
    },
    entry: {
      index: './src/index.ts',
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: ['ts-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.pug$/,
          loader: 'pug-loader',
          options: {
            pretty: isDev,
            root: path.resolve(__dirname, 'src'),
          },
        },
        {
          test: /\.s?css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'resolve-url-loader',
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)$/,
          include: [
            path.resolve(__dirname, 'src/fonts'),
            path.resolve(__dirname, 'node_modules'),
          ],
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts',
            },
          },
        },
        {
          test: /\.(png|jpg|jpeg|svg|gif)$/,
          exclude: [path.resolve(__dirname, 'src/fonts')],
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images',
            },
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.pug',
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'styles.css',
      }),
    ],
    devServer: {
      contentBase: path.join(__dirname, 'build'),
      compress: true,
      port: 9000,
      overlay: {
        warnings: true,
        errors: true,
      },
    },
    stats: {
      children: true,
    },
  };
};
