// require： 导入node中的模块 导入http模块（处理网络）
//                           导入fs模块（处理文件）
const http = require('http');
const fs = require('fs');
// 1:前端ajax传输数据给后端，后端接受前端数据
// 2：响应数据给前端
// baidu.com -> html->浏览器发现是html 渲染成了页面
// mine
// text/html
// http:127.0.0.1：8081 =>把ajax.html的内容返回给前端
const server = http.createServer(
    function(req, res){
        console.log('当前正在请求', req.url)
        if(req.url.includes('search')){
            // search搜索功能
            // 首页的功能
            res.end(req.url.split('?')[1])
            return;
        }
        res.writeHead(200, {
            'Content-Type':'text/html;charset=utf-8'
        })
        const file = fs.readFileSync('./ajax-http.html', {encoding:'utf8'})
        // console.log(file);
        res.end(file);
        // res.end('<h1>hello world东华理工</h1>');
})
server.listen(8081, function(){
    console.log('server is running http:127.0.0.1:8081')
})
// server有可能失败