import React from 'react';
// import logo from './logo.svg';
import './App.css';
import AppRouter from './router/router'
function App() {
  return (
    <div className="App">
      {/* <button>主页</button> */}
      <AppRouter></AppRouter>
    </div>
  );
}

export default App;
