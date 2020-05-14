var http = require('http');

// http协议 1991 html 应答式
http.createServer((req,res) => {
    if(req.url === '/newpage'){
        res.writeHead(200);
        res.end('newpage')
        return;
    }
    // http 头 体
    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
    // 七层模型 物理层 数据链路层 网络层(IP) 传输层(TCP) 应用层(HTTP)
    res.write('HELLO WORLD');
    res.end(`
        <html>
            <head></head>
            <body>
                <a href="http://www.baidu.com">baidu</a>
                <a href="/newpage">去新页面</a>
            </body>
        </html>
    `)
})

.listen(3000)