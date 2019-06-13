import React from "react"
import { NavLink, } from 'react-router-dom'
import { Menu, } from "semantic-ui-react"

const Navbar = () =>(
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
        username
      </Menu.Item>
    </NavLink>
  </Menu>
)