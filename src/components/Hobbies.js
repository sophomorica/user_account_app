import React, {useContext} from 'react'
import { Card, Button } from 'semantic-ui-react'
import {HobbiesContext, }from '../providers/UserHobbies'
import {UserContext} from '../providers/UserProvider'

const Hobbies = () =>{
  const {hobbies} = useContext(HobbiesContext)
  const {firstName, lastName} =useContext(UserContext)



  return (
    <Card>
      {hobbies.map(hobby =>(
        <Card.Content>
        <Card.Header>{hobby.name}</Card.Header>
      </Card.Content>
     
      ))}
      <Card.Content extra>
        <Button>Add Hobbie</Button>
      </Card.Content>
    </Card>
  )
      }
     
     






export default Hobbies
