import React from 'react';
import logo from './logo.svg'


// function Header(){
//   return(
//     <nav className="nav-container">
//       <div>
//         <img src={logo} alt="logo" className="nav-logo"/>
//         <p>ReactLearn 2</p>
//       </div>
//       <div>
//         <a href="#">Menu</a>
//         <a href="#">Menu</a>
//         <a href="#">Menu</a>
//       </div>
//     </nav>
//   )
// }

class Header extends React.Component{
  render(){
    return(
      <nav className="nav-container">
        <div>
          <img src={logo} alt="logo" className="nav-logo"/>
          <p>ReactLearn 2</p>
        </div>
        <div>
          <a href="#">{this.props.item1}</a>
          <a href="#">{this.props.item2}</a>
          <a href="#">Menu</a>
        </div>
      </nav>
    )
  }
}

export default Header