## GET和POST
一个是 querstring(a=1&b=2)  一个是req body （协议没有规定死，但这是最佳的时间）
浏览器
用户输入url
img link script GET请求， 参数只能放到url里

xmlhttprequest  http postMan 只要客户端服务端约定好，参数放到哪里是不受限制的

baidu.com/search?s=js
组成url的一部分

从协议本身看 并没有限制GET传递参数不能放到body
POST 传递参数也可以放到 querstring

一个url有哪些部分组成

- get post 
1. 语义不一样，get发出请求获取数据，post发出数据更改数据
2. GET 资源可以缓存， POST 要实时校验
3. GET url 长度有限(浏览器限制的)， POST req body 不受限制的
4. GET 不安全 POST更安全。 其实都是不安全的， http 明文传输 ，https加密传输