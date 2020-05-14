# 计算机网络 HTTP

- a 怎么点击它不跳转？
- 浏览器上输入  http://www.baidu.com
    会发生什么？ 状态码？
        307：307 Temporary Redirect（临时重定向）是表示重定向的响应状态码，说明请求的资源暂时地被移动到  Location 首部所指向的 URL 上
        200
    https://www.baidu.com  跳转到 加密的htp协议 https
    浏览器可以读懂状态码 并根据状态码做出相应
    1. http://www.baidu.com
        res writeHead(307) Location: https://www.baidu.com/
        redirect
    2. https://wwww.baidu.com/

    1XX  表示正在处理中，  
    2XX  表示成功
    3XX 表示跳转
    4XX  客户端错误    404
    5XX  服务器端错误  500   503  服务器端不能相应