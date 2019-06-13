import React, {useContext} from 'react'
import { Card } from 'semantic-ui-react'
import {HobbiesContext, }from '../providers/UserHobbies'
import{UserContext} from '../providers/UserProvider'

const Hobbies = () =>{
  const {hobbies} = useContext(HobbiesContext)
  const {firstName} =useContext(UserContext)

  return hobbies.map(hobby =>(
    <Card color='blue' key={hobby.id}>
      <Card.Content>
        <Card.Header>{hobby.name}</Card.Header>
      </Card.Content>
      <Card.Content extra>
       
       {firstName}
      </Card.Content>
    </Card>
  ))
}

export default Hobbies
