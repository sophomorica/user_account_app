import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import UserProvider from './providers/UserProvider'
import UserHobbies from './providers/UserHobbies'
import UserAnimals from './providers/UserAnimals'

import App from './App';

ReactDOM.render(

<UserProvider>
  <UserAnimals>

  <UserHobbies>
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
  </UserHobbies>
  </UserAnimals>
</UserProvider>,

document.getElementById('root'));


