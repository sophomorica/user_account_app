import React from 'react';
import Navbar from './components/Navbar'
import About from './components/About'
import NoMatch from './components/NoMatch'
import UserProfile from './components/UserProfile'
import {Switch, Route, } from 'react-router-dom'
import {Container, Header } from 'semantic-ui-react'
import Hobbies from './components/Hobbies'
import Animals from './components/Animals'

function App() {
  return (
   <>
    <Navbar/>
    <Container>
      <Switch>
        <Route exact path = '/' render = {()=><Header as = 'h1'>Home</Header>}/>
        <Route exact path = '/user/profile' 
          render ={()=><UserProfile/>}
          />
        <Route exact path = '/user/hobbies' 
          render ={()=><Hobbies/>}
          />
        <Route exact path = '/user/animals' 
          render ={()=><Animals/>}
          />
        <Route exact path = '/about' component={About}/>
        <Route component={NoMatch}/>
      </Switch>
    </Container>
   </>
  );
}

export default App;
