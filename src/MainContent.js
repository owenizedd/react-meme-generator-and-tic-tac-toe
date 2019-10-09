import React, { Component} from 'react'

class MainContent extends Component{
  constructor(){
    super()
    this.state = {
     firstName: "",
     lastName: "",
     age: "",
     gender: "",
     destination: "",
     dietaryRestrictions: {
       isVegetarian: false,
       isKosher: false,
       isLactoseFree: false
     }
    }
    this.handleChange = this.handleChange.bind(this)
  }
   
  handleChange(evt){
    const {name, value, type, checked} = evt.target
    type == "checkbox" ? this.setState(prevState =>{
      var updatedDietary = prevState
      updatedDietary[name] = checked 
      return {
        dietaryRestrictions: updatedDietary
      }
    }) : this.setState({ [name]: value }) 

  }



  render(){
    
    return(
      <div className="container">
        <form action="" style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
          <input type="text" name="firstName" id="" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange}/>
          <input type="text" name="lastName" id="" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange}/>
          <input type="number" name="age" id="" value={this.state.age} onChange={this.handleChange}/>
          <input type="radio" name="gender" value="male" checked={this.state.gender === 'male' } id="" onChange={this.handleChange} /> Male 
          <input type="radio" name="gender" value="female" checked={this.state.gender === 'female' } onChange={this.handleChange} id=""/> Female 
          <select name="destination" id="" value={this.state.destination} onChange={this.handleChange}>
            <option value="">-- Please choose a destination --</option>
            <option value="US">United State</option>
            <option value="Netherland">Netherland</option>
            <option value="Australia">Australia</option>
          </select>
          

          <label htmlFor="vegetarian">Are you vegetarian?</label>
          <input 
            type="checkbox" 
            name="isVegetarian" 
            id="" 
            checked={this.state.dietaryRestrictions.isVegetarian} 
            onChange={this.handleChange} />
            <label htmlFor="kosher">Are you kosher?</label>
          <input 
            type="checkbox" 
            name="isKosher" 
            id="" 
            checked={this.state.dietaryRestrictions.isKosher}
            onChange={this.handleChange} />
          <label htmlFor="lactoseFree">Are you lactose free?</label>
          <input 
            type="checkbox" 
            name="isLactoseFree" id="" 
            checked={this.state.dietaryRestrictions.isLactoseFree}
            onChange={this.handleChange}/>
        </form> 
        <h3>Entered Information</h3>
        <p>{this.state.firstName}</p>
        <p>{this.state.lastName}</p>
        <p>{this.state.age}</p>
        <p>{this.state.gender}</p>
        <p>{this.state.destination}</p>
        
        <p>{this.state.dietaryRestrictions.isVegetarian && "vegetarian"}</p>
        <p>{this.state.dietaryRestrictions.isKosher && "kosher"}</p>
        <p>{this.state.dietaryRestrictions.isLactoseFree && "lactose free"}</p>
      </div>

      
    )
  }

}

export default MainContent