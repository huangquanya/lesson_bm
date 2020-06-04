import React from 'react';
import ReactDOM from 'react-dom';
import {  createStore } from 'redux'; // 创建单一状态树
import './index.css';
import App from './App';
import counter from './reducers/index';
import Counter from './components/Counter'


const store = createStore(counter); // reducer

console.log(store);

const render = () => ReactDOM.render(
  <Counter 
    value = {store.getState()}
    onIncrement={() => store.dispatch({ type : 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type : 'DECREMENT' })}

  />,
  document.getElementById('root')
);

render()
store.subscribe(render)