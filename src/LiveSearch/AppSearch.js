import React, {Component} from 'react';
import './App.css'

class AppSearch extends Component{
  state={
    search: "",
    profiles: [],
    cards: [],
  }
  handleChange = (evt) =>{
    // console.log("test")

    const cards = this.state.profiles.map( (profile, index) => {
      if ((profile.name.first + " " +  profile.name.last).toLowerCase().indexOf(evt.target.value.toLowerCase()) != -1){
        return <div className="box" key={index}><img src={profile.picture.medium}/><p>{profile.name.first + " " + profile.name.last}</p></div>
      }
    })

    this.setState({
      search: evt.target.value,
      cards: cards
    })
  }

  componentDidMount(){
    for(let i = 0; i<1000; i++){
      if (this.state.profiles.length>10) continue;
      fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
          const profiles = data.results[0];

          console.log(profiles);
          this.setState(prevState=>{
            let newProfiles = prevState.profiles;
            // console.log(newProfiles)
            newProfiles.push(profiles);
            return{
              profiles: newProfiles
            }
          })
        })
    }
  }

  componentDidUpdate(){
    if (this.state.profiles.length==10 && this.state.cards.length == 0){
      const cards = this.state.profiles.map( (profile, index) => {
        return <div className="box" key={index}><img src={profile.picture.medium}/><p>{profile.name.first + " " + profile.name.last}</p></div>
      })
      this.setState({
        cards: cards
      })
    }
  }
  render(){
    return(
      <div className="search-app">
        <span>Input text to search user by name</span>
        <input type="text" name="search" id="" onChange={this.handleChange} value={this.state.search}/>
        <div className="boxes">
          {/* <div className="box">
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
          </div> */}
        
        {this.state.cards}          
        </div>

      </div>
    )
  }
}

export default AppSearch;