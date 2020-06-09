## req
浏览器：xhr fetch
node: http.get

不同的apixxx -> http -> 这里都一样

http:超文本传输
```js
const xhr = new XMLhttprequest();
xhr.setheader('Content-Type':'application/json');
xhr.open('POST','api.com', true);
xhr.send({a:1,b:2})
```

浏览器拼接报文
  基于报文传输http1.1（纯文本）
  - 首行（请求行）
  - 首部
  - -r-n
  - 实体

## 解析报文
split('\r\n');

限制：必须等到拿到一个完整的报文
现实：报文传输，可以允许我们，分段传输

### 解析
FSM（finate, state, machine）
infinity: 正无穷 负无穷 除法

浏览器解析报文：body(html) headers, 响应行
html怎么让渲染出来了？ 浏览器也需要解析html
js 怎么就被执行？ 浏览器 也要解析 js
解析成什么？

## 编译原理

代码都是字符串
- 词法分析（分词）

- 语法分析

- 生成中间代码

- 生成目标代码


DOM 树 AST抽象语法树

## 浏览器匹配css规则
**按照 css 选择器 从后往前匹配的**目的是保证css选择的效率

## layout
display: flex | block | inline-block | grid
justify-content: center;
position:
float:
...
用这些 对位置产生影响的元素， 计算元素的位置信息，算出坐标系里的（x,y）

## 正常的文档流
脱离文档流：float：left position

## normal flow
行内元素（inline-block） : 水平从左往右一个接着一个布局，垂直方向默认会以baseline对齐 解决方法（vertical-align:center）会以中间为基线对齐
块级元素（block-level-box）: 垂直方向从上往下一个接着一个布局
relative定位：会保留原有的位置

## flex
容器：
flex-direction: row / cloum
justify-content: cernter/start/end
align-item: center/start/end

