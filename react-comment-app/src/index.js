import React from 'react';
import ReactDOM from 'react-dom'; // index.js  入口文件
import CommentApp from './CommentApp'; // 模块机制
// css in js   webpack  
import './index.css';  // 像js 引入  
// 跟link 标签say byebye

ReactDOM.render(
  // react 的逐渐世界
  // JSX js in html
  <CommentApp />,
  // 奈何桥畔， 孟婆  DOM document.createElement
  // 真实DOM
  document.getElementById('root')
)