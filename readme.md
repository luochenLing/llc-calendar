## 介绍
- 基于react16+版本做的一个仿携程的H5日历，支持时间段设置
- 可以获取包括当前日期后面的十二个月
- 当前日期
  curDay?: Date;
  //不可选日期(从x天到X天)
  disableDay?: {
    from?: Date;
    to?: Date;
  };
  //选中日期
  selDay?: {
    from: Date;
    to: Date;
  };
  //是否显示日历
  showCalendar: boolean | string;
  //关闭日历
  closeCalendar: Function;
  //获取日历的dom
  calendarRef: any;

## 打包
- npm login 登录
- npm publish 
- 发布的时候会遇到
  You do not have permission to publish "calendar". Are you logged in as the correct user? : calendar
  类似这样的问题说明你的包名在npm上已经有人使用过了，改一下package.json的name就可以了
- 替换版本，先声明版本号，然后再执行发布
  npm version  1.0.1  遵从X.Y.Z版本号规则
  npm publish 
## 可能遇见的问题：
- react-jsx-dev-runtime.development.js:117 Warning: React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.
- 参考：
  https://stackoverflow.com/questions/61706057/webpack-typscript-library-import-is-undefined-in-react-project 
  我这里用到的是webpack5.所以没法使用4的一些插件因为不支持，我只配置了
    ```json
    libraryTarget: 'umd',
    globalObject: 'this',
    ```
  这两个属性，在output中，
  另外又发现启动后会爆出
   Minified React error #321
  这个错误，这里是因为插件本身的react引用要使用外部的，不是插件自身的react引用，在webpack 配置如下：
    ```json
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
    ```
  此外可以在 package.json 中为 react 和 react-dom 添加同伴依赖 peerDependencies 的映射，这是为了检测宿主环境中这两项依赖的版本如果低于你规定的最低版本，那么在 npm@3 中会给出警告（npm@1 和 npm@2 中会自动安装）。
  参考：
  https://zhuanlan.zhihu.com/p/93773786
