- 路由的本质是什么？
- 路由级别的页面
二级路由
/path componnet放在的地方
嵌套

- router
    1. react-router
        react-router-dom
            react-router-config
    2. react-router 嵌套
        config routes配置一下清晰了
    路由比较复杂时，传统的手写router/route配置难以维护，
    企业级的router配置方案react-router-config，清晰，可维护的 routes/index.js配置。
    layout app里总有几套配置, 配置那个级别的所有路由

    routes react-router-config renderRoutes(route.routes)