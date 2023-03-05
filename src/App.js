import React from 'react';

import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import Main from './components/Main'


function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: 'flex', height: '100vw' }}>
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
