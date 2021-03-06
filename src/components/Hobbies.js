import React, {useContext} from 'react'
import { Card, Button } from 'semantic-ui-react'
import {HobbiesContext, }from '../providers/UserHobbies'
import {UserContext} from '../providers/UserProvider'

const Hobbies = () =>{
  const {hobbies} = useContext(HobbiesContext)
  const {firstName, lastName} =useContext(UserContext)



  return (
    <Card>  
      <Card.Content>
        <Card.Header>{firstName} Hobbies</Card.Header>
      </Card.Content>
      {hobbies.map(hobby =>(
        <Card.Content>
        <Card.Header as ='h3'>{hobby.name}</Card.Header>
      </Card.Content>
     
      ))}
      <Card.Content extra>
        <Button>Add Hobbie</Button>
      </Card.Content>
    </Card>
  )
      }
     
     






export default Hobbies
