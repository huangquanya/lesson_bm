# webpack优化
## 分离组件库
externals打包出来的js文件，需要手动在index.html中引入
splitChunksen自动化打包import的node_modules
## css
mini-css-extract-pluguin 把css文件拆出来
## 图片压缩
imagemin-webpack-plugin 图片压缩
## 打包速度
happypack 多线程打包
DLL X.dll 动态链接库