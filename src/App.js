import React from 'react';
import './App.css';
import AppSearch from './LiveSearch/AppSearch';
import App2 from './TicTacToe/App2';
import Header from './Header';
import MainContent from './MainContent'
class App extends React.Component{

  render(){
    return(
      <div>
        <AppSearch/>
        <App2/>

        {/* <div className="App meme-generator">
          <Header item1="Haha" item2="Hehe"/>
          <MainContent />
        </div> */}
      </div>
    )
  }
}

export default App;
