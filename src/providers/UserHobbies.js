import React from 'react'


export const HobbiesContext = React.createContext();

export const HobbiesConsumer = HobbiesContext.Consumer

class UserHobbies extends React.Component{
  state = {hobbies:"Eating"}
  render(){
    return(
      <HobbiesContext.Provder value={this.state}>
      {this.props.children}
    </HobbiesContext.Provder>
  )
}
}
export default UserHobbies 