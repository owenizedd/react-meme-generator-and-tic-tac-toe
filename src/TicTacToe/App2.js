import React, {Component} from 'react';
import Board from './Board'
import './App.css'

class App2 extends Component {
  state = {
    counter: 0,
    status: Array(9).fill(null),
    savedStatus: [Array(9).fill(null)],
    winner: '',

  }


  componentDidUpdate = () =>{
    let win = this.state.winner;
 
    let g = this.state.status;
    if (g[0] === g[4] && g[4] === g[8]) win = g[0];
    else if (g[1] === g[4] && g[4] === g[7]) win = g[1];
    else if (g[2] === g[4] && g[4] === g[6]) win = g[2];
    else if (g[3] === g[4] && g[4] === g[5]) win = g[3];
    else if (g[0] === g[3] && g[3] === g[6]) win = g[0];
    else if (g[1] === g[4] && g[4] === g[7]) win = g[1];
    else if (g[2] === g[5] && g[5] === g[8]) win = g[8];
    else if (g[0] === g[1] && g[1] === g[2]) win = g[2];
    else if (g[3] === g[4] && g[4] === g[5]) win =g[5];
    else if (g[6] === g[7] && g[7] === g[8]) win =g[8];
    
    if (win !== this.state.winner){
      this.setState({
        winner: win
      })
    }
  } 

  handleButtonClick = (i) => {
    let newStatus = [...this.state.status];

    if (newStatus[i] === null && !this.state.winner){
      newStatus[i] = this.state.counter % 2 === 0 ? 'X' : 'O';
      let newCounter = this.state.counter + 1;
      let newSavedStatus = this.state.savedStatus;
      newSavedStatus.push(newStatus);
      this.setState({
        status: newStatus,
        counter: newCounter,
        savedStatus: newSavedStatus
      })
    }
  }


  handleHistory = i => {
    this.setState(prevState => {
      return{
        status: prevState.savedStatus[i],
        savedStatus: prevState.savedStatus.slice(0,i+1),
        counter: i,
        winner: ''
      }
    })
  }
  render(){
    const currentPlayer = this.state.counter % 2 === 0 ? 'X' : 'O';
    const buttons = this.state.savedStatus.map( (stat,index) => <button key={index} onClick={() => this.handleHistory(index)}>Go to state {index + 1}</button>);
    return(
      <div id="tic-tac-toe" className="game-container">
        <div className="game-board">
          
          <div><h3>Next Player: {currentPlayer}</h3></div>
          <Board status={this.state.status} onClick = {this.handleButtonClick} />
        </div>
        <div className="game-info">
          <div style={ {margin: "10px"} }> 
            <div>{this.state.winner && "Game ended!"} <br/> { this.state.winner && "The winner is " + this.state.winner} <hr/></div>
            
            <div>Game History</div>
            <ol>
              {buttons}
            </ol>
          </div>
        </div>
      
      </div>
    )
  }
}

export default App2