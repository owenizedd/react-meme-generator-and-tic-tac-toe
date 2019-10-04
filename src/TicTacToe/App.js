import React, {Component} from 'react'
import './App.css'

class App extends Component{
  state = {
    status: Array(9).fill(null),
    counter: 0,
    savedStates: [Array(9).fill(null)],
    winner: "",
  }
  handleClick = (i) => {
    // console.log(this.state.savedStates);
    this.setState(prevState => {
      //copy so each index not referenced each other.
      let status = [...prevState.status];
      let counter = prevState.counter;
      let savedStates = prevState.savedStates;
      if (status[i] == null && !prevState.winner) {
        status[i] = prevState.counter % 2 === 0 ? "X" : "O"
        counter = prevState.counter + 1;
        savedStates.push(status);
      }
  
      return{
        status: status,
        counter: counter,
        savedStates: savedStates
      }
    })

    
  }

  handleStateHistory = (i) =>{
    // console.log("GETIN " + i)
    const newState = this.state.savedStates[i];
    // uncomment to 2 line below to remove all new states when old states restored
    const savedStates = this.state.savedStates.slice(0,i+1); 
    console.log(newState);
    this.setState( prevState => {
      
      return{
        status: newState,
        savedStates: savedStates
      }
    })
  }

  componentDidUpdate = () =>{
    let win = this.state.winner;
 
    let g = this.state.status;
    if (g[0] === g[4] && g[4] == g[8]) win = g[0];
    else if (g[1] == g[4] && g[4] == g[7]) win = g[1];
    else if (g[2] == g[4] && g[4] == g[6]) win = g[2];
    else if (g[3] == g[4] && g[4] == g[5]) win = g[3];
    else if (g[0] == g[3] && g[3] == g[6]) win = g[0];
    else if (g[1] == g[4] && g[4] == g[7]) win = g[1];
    else if (g[2] == g[5] && g[5] == g[8]) win = g[8];
    else if (g[0] == g[1] && g[1]== g[2]) win = g[2];
    else if (g[3] == g[4] && g[4] == g[5]) win =g[5];
    else if (g[6] == g[7] && g[7] == g[8]) win =g[8];
    
    if (win != this.state.winner){
      this.setState({
        winner: win
      })
    }
  }  

  render(){
    const buttons = this.state.savedStates.map( (state, index) => {
      return <li key={index}><button  onClick={() => this.handleStateHistory(index)}>Go to State {index+1}</button> </li>
    } )
    return(
      
      <div className="game-container">
        <div className="game-board">
          <Board onClick={this.handleClick} counter={this.state.counter} status={this.state.status} />
        </div>
        <div className="game-info">
          <div style={ {margin: "10px"} }>{this.state.winner && "Game ended! The winner is " + this.state.winner}</div>
          <div>Game History</div>
          <ol>
            {buttons}
          </ol>
        </div>
      </div>
    )
  }
}


class Board extends Component{
  renderSquare(i){
    return(
      <Square value={this.props.status[i]} pos={i} onClick={() => this.props.onClick(i)} />
    )
  }
  render(){
    const playerTurn = this.props.counter % 2 === 0 ? 'X' : 'O';

    return (
      <div>
        <div>
          <h3>Next Player: {playerTurn}</h3>
        </div>
  
           <div className="board">
            <div>
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div>
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div>
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
          </div>

      </div>
    )
  }
}

class Square extends Component{
  
  render(){
    return(
      <button className="square" onClick={() => this.props.onClick(this.props.pos)}>{this.props.value}</button>
    )
  }
}


export default App