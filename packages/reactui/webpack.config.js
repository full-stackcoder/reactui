/* eslint-disable */
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const nodeExternals = require('webpack-node-externals');

module.exports = [
  //Bundle intended to run in web browser environment
  {
    entry: './src/index.ts',
    target: 'web',
    mode: 'production',
    output: {
      path: path.resolve(__dirname, 'dist/esm'),
      clean: true,
      filename: 'esm_bundle.js',
      library: {
        type: 'module',
      },
    },
    externals: {
      react: 'react',
      'react-dom': 'react-dom',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
        {
          test: /\.(js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            },
          },
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ],
    },
    experiments: {
      outputModule: true,
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "reactui-styles.css",
      }),
    ],
    optimization: {
      minimize: true,
      minimizer: [
        new CssMinimizerPlugin(),
        new TerserPlugin({
          extractComments: false,
        }),
      ],
    },
  },

  //Bundle intended to run in node js environment
  {
    entry: './src/index.ts',
    target: 'node',
    mode: 'production',
    output: {
      path: path.resolve(__dirname, 'dist/cjs'),
      clean: true,
      filename: 'cjs_bundle.js',
      publicPath: '/dist/cjs/',
      library: {
        name: 'reactui',
        type: 'umd',
        umdNamedDefine: true,
      },
      globalObject: 'this',
    },
    externals: [nodeExternals()],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
        {
          test: /\.(js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            },
          },
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "reactui-styles.css",
      }),
    ],
    optimization: {
      minimize: true,
      minimizer: [
        new CssMinimizerPlugin(),
        new TerserPlugin({
          extractComments: false, // To prevent extraction of license comments
        }),
      ],
    },
  },
]
