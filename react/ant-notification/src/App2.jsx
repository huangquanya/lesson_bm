import React from 'react';
import Notification from './Notification';
import logo from './logo.svg';


function App() {
  return (
    <div className="App">
      <Notification>
        成功
        <h2>失败</h2>
      </Notification>
    </div>
  );
}

export default App;
