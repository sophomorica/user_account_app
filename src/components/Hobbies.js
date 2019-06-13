import React, {useContext} from 'react'
import { Card } from 'semantic-ui-react'
import {HobbiesContext, }from '../providers/UserHobbies'
import{UserContext} from '../providers/UserProvider'

const Hobbies = () =>{
  const {hobbies} = useContext(HobbiesContext)
  // const {firstName} =useContext(UserContext)

return(

  <Card >
      <Card.Content>
        <Card.Header>{hobbies}</Card.Header>
      </Card.Content>
      <Card.Content extra>
       
       {/* {firstName} */}
      </Card.Content>
    </Card>

)
}

export default Hobbies
