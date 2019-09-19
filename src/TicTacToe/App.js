import React, {Component} from 'react'
import './App.css'

class App extends Component{

  render(){
    return(
      <div className="game-container">
        <div className="game-board">
          <Board  />
        </div>
        <div className="game-info">
          <div></div>
          <ol></ol>
        </div>
      </div>
    )
  }
}


class Board extends Component{
  state = {
    status: Array(9).fill(null),
    counter: 0,
    savedStates: [Array(9).fill(null)],
  }

  handleClick = (i) => {
    this.setState(prevState => {
      let status = prevState.status;
      let counter = prevState.counter;
      if (status[i] == null) {
        status[i] = prevState.counter % 2 === 0 ? "X" : "O"
        counter = prevState.counter + 1;
      }
      let savedStates = prevState.savedStates;
      savedStates.push(status);
      return{
        status: status,
        counter: counter,
        savedStates: savedStates
      }
    })
  }
  
  renderSquare(i){
    return(
      <Square value={this.state.status[i]} pos={i} onClick={this.handleClick}/>
    )
  }
  render(){
    const playerTurn = this.state.counter % 2 === 0 ? 'X' : 'O';

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