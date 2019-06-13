import React from 'react'


export const AnimalsContext = React.createContext();

export const AnimalsConsumer = AnimalsContext.Consumer

class UserAnimals extends React.Component{
  state = {animals:[{id:1, name:"Cats"},
  {id:2, name: "Dogs"}]
}
  render(){
    return(
      <AnimalsContext.Provider value={this.state}>
      {this.props.children}
    </AnimalsContext.Provider>
  )
}
}
export default UserAnimals 