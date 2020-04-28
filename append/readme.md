- DOM document 文档就是网页， js内存里， 文档对象模型
    js--> html的转化
    DOM JS 数据结构tree appendChild   组成一棵树
    ul>li>textnode
    document.createElement('tag') 标签节点
    document.createTextNode("lalala")   文本节点


    哪怕是文字  都是节点，都是对象
    前端js,html,css  js是王者， js 可操控html,css这些API  DOm结构


    - 昨天讲的是API
```js
    document.createElement('div')
    document.appendChild()
    document.createTextNode()  面向API编程
```

- 面向业务编程
  this.state.liked true/false html 更新
1.分步
    动态的讲like button 添加到页面上
    linkButton class方便复用
    既要用html迅速完成dom  又要能添加事件
    1. 要dom节点对象
    2. innerhtml

- js this指向 你不知道的JavaScript this
    this动态决定 在每个函数里都有this 是个指针
    具体只要谁？ 由调用方式决定
1. 作为对象的方法调用， 用this指向对象本身
2. 作为事件函数， this指向事件发生的元素
    bind可以强制绑定函数内部的this指向谁
    call 立即执行
- 封装 class 复用
constructor 申明属性 this.state
render() 渲染到页面上
changeLikeText()

class LikeButton {
    constructor() {

    }
    render() {

    }
    changeLikeText() {

    }
}

createDOMFromString 为什么要写到方法外面？
代码思维的顶级，
createDOMFromString 不该属于Likebutton类 他独立的
unit方法 万精油






