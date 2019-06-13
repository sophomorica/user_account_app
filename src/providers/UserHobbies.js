import React from 'react'


export const HobbiesContext = React.createContext();

export const HobbiesConsumer = HobbiesContext.Consumer

class UserHobbies extends React.Component{
  state = {hobbies:"Eating"}
  render(){
    return(
      <HobbiesContext.Provider value={this.state}>
      {this.props.children}
    </HobbiesContext.Provider>
  )
}
}
export default UserHobbies 