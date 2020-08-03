## z-inex
网页是沿着一条 Z 轴排开的(类似ps图层)，z轴与屏幕平面垂直

## 层叠上下文形成 z-index 调整的就是层叠上下文
1. position不为static
2. filter transform perspective 不为none
3. will-change
4. opacity不为1

## layers
共同点：都是z-轴顺序
transform：translate3d
backface-visibility 为 hidden
willchage 
video
有 3D transform
css3动画里面的animation动画开始的时候

对 opacity、transform、fliter、backdropfilter 应用了 animation 或者 transition（需要是 active 的 animation 或者 transition，当 animation 或者 transition 效果未开始或结束后，提升合成层也会失效）
will-change 设置为 opacity、transform、top、left、bottom、right（其中 top、left 等需要设置明确的定位属性，如 relative 等）

## 
js -> relayout -> repaint -> composite(合成) -> GPU

## 初始的时候提升layers的好处

- 对于当前这个layers变化不会影响其他layers
- 对于transform、opacity产生了变化，不会经过relayout repaint 跳到composite

### flex
主轴 交叉轴

flex容器父级元素
flex-direction: row column
flex-wrap
justify-content:主轴
align-items
align-content
#### align-items 和 align-content


### flex 容器中的子元素
order
flex-grow
flex-basis
flex-shrink
align-self