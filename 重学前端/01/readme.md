阿里windter

![](https://static001.geekbang.org/resource/image/96/9e/9684130e423b6734b23652f4f0b6359e.jpg)

mdn网站开发标准
- https://developer.mozilla.org/zh-CN/docs/Web
- 对传统div 块级元素 + span 行内 css 的重构
        em i span 
       1. p > div
       - 爬虫是看不懂文章的， 加入h5语义化标签来使算法了解网页的意义 SEO(搜索引擎优化)


 语义化
 1. html5语义化标签
 2. 找出不合理的地方
        结构相关？
        header + footer 二线公司
        1. aside + article（main、content）
        2. nav + ol/li
        3. hgroup 原则
        ```js
        <hgroup>
            <h1>welcome to my wwf</h1>
            <hr/>//不用
            <h4>qqqqq</h4>
        </hgroup>
        ```
        4. <abbr title="World Wide Web">WWW</abbr>
        爬虫是看不懂文章的， 加入h5语义化标签来使算法了解网页的意义

        5. <figure>   <figcaption>

        6. pre + code
            pre + samp

article
section
aside
hgroup
header
footer
nav
time
mark
figure
figcaption
contextmenu+menu
h5语义化标签
http://caibaojian.com/html5/ele.html