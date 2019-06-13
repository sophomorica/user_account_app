import React from "react"
import { NavLink, } from 'react-router-dom'
import { Menu, } from "semantic-ui-react"
import {UserConsumer,} from '../providers/UserProvider'
import { validate } from "@babel/types";

const Navbar = () =>(
  <UserConsumer>
    {val =>(

      <Menu>
    <NavLink to='/'>
      <Menu.Item>
        Home
      </Menu.Item>
    </NavLink>
    <NavLink to='/about'>
      <Menu.Item>
        About
      </Menu.Item>
    </NavLink>
    <NavLink to='/user/profile'>
      <Menu.Item>
        {val.firstName}
      </Menu.Item>
    </NavLink>
    <NavLink to='/user/hobbies'>
      <Menu.Item>
        Hobbies
      </Menu.Item>
    </NavLink>
  </Menu>
  )}
  </UserConsumer>
)

export default Navbar