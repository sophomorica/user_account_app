import React from 'react'


export const HobbiesContext = React.createContext();

class UserHobbies extends React.Component{
  state = {hobbies: ["battign", "boating", "breathing"]}
  render(){
    return(
      <HobbiesContext.Provder value={this.state}>
      {this.props.children}
    </HobbiesContext.Provder>
  )
}
}
export default UserHobbies 