import React, {Component} from 'react';
import './App.css'

class App extends Component{
  state={
    search: "",
    profiles: [],
  }
  handleChange = (evt) =>{
    // console.log("test")
    this.setState({
      search: evt.target.value
    })
  }

  componentDidMount(){
    for(let i = 0; i<10; i++){
      fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
          console.log(data.results);
          const profiles = data.results.map((profile,index) => {
            return (<div className="box" key={index}>
                    <img src={profile.picture.medium} width="100" height="auto"/>
                    <p>{profile.name.first} {profile.name.last}</p>
                  </div>)
          })
          // console.log(profiles);
        
          this.setState(prevState=>{
            let newProfiles = prevState.profiles;
            console.log(newProfiles)
            newProfiles.push(profiles);
            return{
              profiles: newProfiles
            }
          })
        })
        .finally(()=>{
          console.log(i + " LAST")
          console.log(this.state.profiles)
        })
    }
  }
  render(){
    return(
      <div className="search-app">
        <input type="text" name="search" id="" onChange={this.handleChange} value={this.state.search}/>
        <div className="boxes">
          <div className="box">
            <img src="" alt=""/>
            <p>Name</p>
          </div>
          <div className="box">
            <img src="" alt=""/>
            <p>Name</p>
          </div>
          <div className="box">
            <img src="" alt=""/>
            <p>Name</p>
          </div>
          <div className="box">
            <img src="" alt=""/>
            <p>Name</p>
          </div>
          <div className="box">
            <img src="" alt=""/>
            <p>Name</p>
          </div>
          
        </div>

        {this.state.profiles}
      </div>
    )
  }
}

export default App;