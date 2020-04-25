## node
- js  chrom: v8 解释执行js
- 页面
- 网络


js 只在浏览器内运行

v8单独拿到出到服务端，  node
node index.js

1. 双击
以文件路径打开file://....
file:协议，简单的本地文件的查找
2. liver-server
http://127.0.0.1:8080/ajax.html
等同localhost
http协议 在本地服务器的环境下打开

https://www.baidu.com
https://14.215.177.38/

端口存在的目的：端口号不同，访问不同功能
一台服务器（电脑），运行很多东西
port：区别每一个应用
ip地址能够找到你这台电脑
假设
数据库占用8060
提供搜索服务 占用443
...占用其他端口


## http规定
- 请求行
    - 方法：get juejin.comquery=js
    - url：juejin.comquery=js
    - 版本：1.1

- 首（头）部
    - key: value

- 实体
    - 传输的具体的数据