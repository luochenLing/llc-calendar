const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
//把css从JS中单独提取做压缩
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production", //production  development
  entry: {
    calendar: "./src/index.ts",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    //Webpack 会在输出的 bundle 中生成路径信息。然而，在打包数千个模块的项目中，
    //这会导致造成垃圾回收性能压力。在 options.output.pathinfo 设置中关闭：
    pathinfo: false,
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    // alias: {
    //   "@components": path.resolve(__dirname, "./src/components"),
    // },
  },
  optimization: {
    //设置为true以后webpack会启动摇树算法过滤掉未引用的文件，false的话则有自己的规则定义哪些文件可以包含到项目
    usedExports: true,
    moduleIds: "deterministic",
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
  },
  // devServer: {
  //   // static: "./dist",
  //   port: 3000,
  //   hot: true,
  // },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          // // 将 JS 字符串生成为 style 节点
          // "style-loader",
          // 将 CSS 转化成 CommonJS 模块
          "css-loader",
          // 将 Sass 编译成 CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: path.join(__dirname, "index.html"), //指定项目的index.html的所在路径
    //   filename: "index.html", //指定打包出来的html名称
    //   title: "日历组件",
    // }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
};
