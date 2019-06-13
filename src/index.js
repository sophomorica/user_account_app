import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import UserProvider from './providers/UserProvider'

import App from './App';

ReactDOM.render(
<BrowserRouter>
  <App /> 
</BrowserRouter>,

document.getElementById('root'));


