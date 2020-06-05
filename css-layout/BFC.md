# layout
normal flow
position
float
flex

## normal flow

### 格式化上下文
koa：ctx === context

token：泛指
```js
let a = 123
function foo() {
    return a + 1;
}
foo()
```

### BFC
Block Formatting contexts 
#### 新建一个BFC
- float
- absolute
- display： inline-block|| block || table-cell || table-caption || flex || grid
- overflow：不为visiable

#### flex布局
react-native
#### float 
文字环绕 （设计本职）
float用来布局还需清除
clear：both(left,right)

#### BFC规则
- 盒子在垂直方向上，从上往下布局
- 垂直方向上的距离由margin 决定，**同一个BFC之内**，垂直方向上block-level-box margin会折叠
- 由于有float元素，一个盒子大小可能会缩小 除非他新建一个bfc（overflow清理浮动）
- bfc 区域 不会 float 重叠（两栏，左侧固定，右边自适应）






