const css = require('css');
const layout = require('./layout');
const images = require('images');

let htmlStr = `
<html>
  <head>
   <style>
   </style>
  </head>
  <body>
    <div class="wrap">
      <div class="main"></div>
      <div class="aside"></div>
    </div>
  </body>
</html>
`

let cssStr = `
.wrap {
    display: flex;
    justify-content: center;
    width: 500px;
    height: 500px;
    background-color: rgb(255, 0, 0);
  }
  .main {
    width: 200px;
    height: 200px;
    background-color: rgb(0, 255, 0);
  }
  .aside {
    width: 100px;
    height: 100px;
    background-color: rgb(0, 0, 255);
  }
`
let rules = css.parse(cssStr).stylesheet.rules
// console.log(rules)

// 可以：KMP 正则 原理都是 FSM
// 正则 split(): 完整的 html 
// token: html tag
let currentToken = null;
let stack = [{ type: 'document', children: [] }]
// let tree = {type:'document', children: []}
parse(htmlStr);
// 拿到整棵树
// 遍历树 渲染每个element
let tree = stack[0];
// 绘制到哪里去
const viewPort = images(800, 600);

function render(view, element) {
  if(element.style) {
    let img = images(element.style.width, element.style.height);
    if (element.style['background-color']) {
      let color = element.style['background-color'];
      let start = color.indexOf('('), end = color.lastIndexOf(')');
      let rgb = color.substring(start + 1, end).split(',').map(e => parseInt(e));
      img.fill(rgb[0],rgb[1],rgb[2]);
    }
    view.draw(img, element.style.x, element.style.y);
  }
  if (element.children) {
    for(let child of element.children) {
      render(view, child);
    }
  }
}
render(viewPort, tree)
viewPort.save('render.jpg')

function match(selector, ele) {
  if (!selector || !ele.attributes) {
    return false;
  }
  // #myid
  // {name: id, value：‘myid’}
  if (selector.charAt(0) === '#') {
    let idAttr = ele.attributes.find(e => e.name === 'id');
    if (idAttr && idAttr.value === selector.replace('#', '')) return true;
  } else if (selector.charAt(0) === '.') {
    let classAttr = ele.attributes.find(e => e.name === 'class');
    if (classAttr && classAttr.value === selector.replace('.', '')) return true;
  } else {
    if (ele.tagName === selector) return true;
  }
  return false;
}
function computerCss(ele) {
  // 计算符合这个ele的所有css规则，css规则 应用到这个节点上面
  // 1： 靠ele属性父节点，和css 里面选择器匹配
  // 2：匹配 从后往前匹配 .parent .cls
  // tagName #id .className

  let elements = stack.slice(0).reverse();
  if (!ele.computerStyle)ele.computerStyle = {};
  for (let rule of rules) {
    let selector = rule.selectors[0].split(' ').reverse();
    // 最后一项能匹配上
    if (!match(selector[0], ele)) {
      // 跳过本轮循环，往后的步骤
      continue;
    }
    // 看父级满不满足
    // [{type: 'doc'}, {html}, {header}]
    // [#id .parent #parentId span]
    let j = 1;
    for (let i = 0; i < elements.length; i++) {
      if (match(selector[j], elements[i])) j++
    }
    // 匹配
    if (j >= selector.length) {
      // rule添加到ele
      for (let delecare of rule.declarations) {
        const { property,value } = delecare;
        ele.computerStyle[property] = value
      }
    }
  }
}
console.log(JSON.stringify(stack[0], null, 2));

function emit(token) {
  let top = stack[stack.length - 1];
  if (token.type === 'startTag') {
    // push pop 处理配对关系
    let element = {
      type: 'element',
      children: [],
      attributes: token.attributes,
      tagName: token.tagName
    }
    computerCss(element)
    stack.push(element);
    // 作为栈顶元素的节点，生成树
    // if(!top.children) top.children = [];
    top.children.push(element);
  } else if (token.type === 'endTag') {
    if (token.tagName !== top.tagName) {
      throw new Error('tagname match error')
    } else {
        //flex布局放到结束标签位置
        //因为像alignItems justifyContent 需要知道子元索的宽高的
        //先保证子元素宽高已经解析出来了
        // 在这里计算（x,y）
        // 栈顶元素就是要布局的容器
        layout(top)
      stack.pop();
    }
  } else if (token.type === 'selfCloseToken') {
    let element = {
      type: 'element',
      children: [],
      attributes: token.attributes,
      tagName: token.tagName
    }
    top.children.push(element);
  }
  currentToken = null;
}

// function emit(token) {
//   console.log(token);
//   currentToken = null;
// }
function parse(htmlString) {
  state = start;
  for (let c of htmlString) {
    state = state(c);
  }
}
function start(c) {
  if (c === '<') {
    return tagOpen
  } else {
    return start
  }
}
function tagOpen(c) {
  // <html>: html tag 由 a-zA-Z  div span p 
  // </html>
  //  h t m l
  // console.log(c);
  if (c === '/') {
    return endTagOpen
  } else if (c.match(/[a-zA-Z]/)) {
    currentToken = {
      type: 'startTag',
      tagName: c
    }
    return tagName
  }
}
function tagName(c) {
  if (c.match(/[a-zA-Z]/)) {
    currentToken.tagName += c;
    return tagName
  } else if (c.match(/[\t\n\f ]/)) {
    return beforeAttaibuteName
  }
  else if (c === '>') {
    // tag 拼接结束
    emit(currentToken);
    return start
  }
}
function beforeAttaibuteName(c) {
  if (c === '/') {
    currentToken.type = 'selfCloseToken';
    return tagName
  } else if (c.match(/[a-zA-Z]/)) {
    currentAttribute = {
      name: c,
      value: ''
    }
    return attributeName
  } else if (c.match(/[\t\n\f ]/)) {
    return beforeAttaibuteName
  } else if (c === '>') {
    return tagName(c);
  }
}

function attributeName(c) {
  if (c.match(/[a-zA-Z]/)) {
    currentAttribute.name += c;
    return attributeName;
  } else if (c === '=') {
    return attributeValue;
  }
}

function attributeValue(c) {
  if (c === '"') {
    return attributeValue
  } else if (c.match(/[a-zA-Z]/)) {
    currentAttribute.value += c;
    return attributeValue;
  } else {
    if (!currentToken.attributes) currentToken.attributes = [];
    currentToken.attributes.push(currentAttribute);
    currentAttribute = null;
    // 代理
    // method（）本状态和下一个状态都要针对c这个字符进行处理
    // method本状态处理完了c，下一个状态处理的是c之后的字符
    return beforeAttaibuteName(c);
  }
}

function endTagOpen(c) {
  // </html>
  if (c.match(/[a-zA-Z]/)) {
    currentToken = {
      type: 'endTag',
      tagName: c
    }
    return tagName;
  }
}