import React, {useContext} from 'react'
import { Card, Button } from 'semantic-ui-react'
import {AnimalsContext, }from '../providers/UserAnimals'
import {UserContext} from '../providers/UserProvider'

const Animals = () =>{
  const {animals} = useContext(AnimalsContext)
  const {firstName, lastName} =useContext(UserContext)



  return (
    <Card>
      <Card.Content>
        <Card.Header>{firstName} has:</Card.Header>
      </Card.Content>
      {animals.map(animal =>(
        <Card.Content>
        <Card.Header>{animal.name}</Card.Header>
      </Card.Content>
     
      ))}
      <Card.Content extra>
        <Button>Add Animal</Button>
      </Card.Content>
    </Card>
  )
      }
     
     






export default Animals
