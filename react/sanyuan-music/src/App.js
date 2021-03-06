import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom"
import { renderRoutes } from "react-router-config"
import routes from './routes/index'
import { Provider } from 'react-redux'
import store from './store'
import { GlobalStyle } from './style//GlobalStyle';
import { IconStyle } from './assets/iconfont/iconfont';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <GlobalStyle />
          <IconStyle />
          {renderRoutes(routes)}
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
