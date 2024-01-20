/* eslint-disable */
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = [
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
    // externals: [webpackNodeExternals()],
    externals: {
      react: 'commonjs react',
      'react-dom': 'commonjs react-dom',
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
    plugins: [
      new MiniCssExtractPlugin({
        filename: "node-styles.css",
      }),
    ],
  },

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
        filename: "web-styles.css",
      }),
    ],
  },
]
