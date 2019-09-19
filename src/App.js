import React from 'react';
import './App.css';
import Header from './Header';
import MainContent from './MainContent'
function App() {
  return (
    <div className="App">
      <Header item1="Haha" item2="Hehe"/>
      <MainContent />
    </div>
  );
}

export default App;
