import React from 'react';
import Navbar from './components/Navbar'
import About from './components/About'
import NoMatch from './components/NoMatch'
import UserProfile from './components/UserProfile'
import {Switch, Route, } from 'react-router-dom'
import {Container, Header } from 'semantic-ui-react'

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
        <Route exact path = '/about' component={About}/>
        <Route component={NoMatch}/>
      </Switch>
    </Container>
   </>
  );
}

export default App;
