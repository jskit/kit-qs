
babel对于 export default {} 支持不好
需要插件 babel-plugin-add-module-exports：

```babelrc
{
  "comments": false,
  "presets": [
    ["env", { "modules": false }],
    "es2015",
    "stage-2"
  ],
  "plugins": [
    "add-module-exports",
    "syntax-dynamic-import",
    "transform-object-rest-spread",
    "transform-runtime"
  ]
}

需要配置 `babel-preset-stage-2`，不能使用 `babel-preset-stage-0`
不然输出没有 `module.exports = exports['default'];`
```
