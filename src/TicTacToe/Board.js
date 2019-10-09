import React, {Component} from 'react';
import './App.css'

class Board extends Component {
  renderButton = i => <Button status={this.props.status[i]} pos={i} onClick={this.props.onClick}/>
  

  
  render(){
    return(
      <div className="board">
        <div>
          {this.renderButton(0)}
          {this.renderButton(1)}
          {this.renderButton(2)}
        </div>
        <div>
          {this.renderButton(3)}
          {this.renderButton(4)}
          {this.renderButton(5)}
        </div>
        <div>
          {this.renderButton(6)}
          {this.renderButton(7)}
          {this.renderButton(8)}
        </div>
      </div>
    );
  }
}



class Button extends Component {

  render(){
    return(
      <button className="square" onClick = { () => this.props.onClick(this.props.pos)}>{this.props.status}</button>
    )
  }
}
export default Board