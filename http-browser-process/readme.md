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

