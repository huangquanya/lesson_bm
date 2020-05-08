<div id="root">
  <span class="demo">
    This is a span.
  </span>
  <p>DOM</p>
</div>

对象字面量， 表达能力
JSON 描述一下

DOM 树 AST TREE Absract
｛
    tag: 'div'
    id:'root'
    value:｛
        tag:'span'
        class:'demo'
        value:{ this is a span}
        tag:'p'
        value: {DOM}
    ｝
｝

html document 什么关系？

- URL 输入后，打开页面，发生了什么？
     download  index.html  html标签
    1. 空白页面   背后发生了什么？
    启动了一个tab， 进程1（主进程）
    2. window.url = http://127.0.0.1:5500/js/ats/index.html
    html 文档标记语言
  - tab 主进程 url
  启动一个网络请求 进程2 url 127.0.0.1：5502/ html文档
  - GPU 高速计算绘制进程
  - 渲染页面进程
WEB应用 是多进程架构
进程 页面执行的最小单位，也是唯一的单位

当我们用chrome打开页面的时候
启动4个进程 
应用进程（pid 计算及资源调用的最小单元）浏览器运行
tab 负责一次页面渲染需要的 主进程
两个子进程 Network Service http 请求 200
GPU 计算 高速css 绘制

GPU 加速 Chrome为了让页面加载更快， 使用GPU来绘制页面， 这也是Chrome战胜IE的关键

html标签 文本 text/html

将我们的文本 -> dom对象 内存里面        浏览器是怎么写的
## chrome v8
获取当前页面的url
    document.url
    window.location.herf
    location.herf

    BOM Browser Object Model
    DOM Document Object Model

    abstract syntax tree 抽象语法树

    api 可以把所有css都查询出来
document.styleSheets

了解页面的生成过程，  浏览器， 操作系统中的应用， 进程来分阶段理解ta
text/html  html文本，  转变成js document
浏览器不知道怎么显示HTML， 靠代码一步步完成
html-> json ast
DOM BOM  stylesheets
