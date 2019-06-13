import React from 'react'
import { Form } from 'semantic-ui-react'
import {UserConsumer} from '../providers/UserProvider'
import User from './User'


class UserForm extends React.Component{
  state= {firstName: this.props.firstName,
    lastName: this.props.lastName,
    email: this.props.email
  }
  handleChange = (e, {name, value}) => this.setState({[name]:value})
  handleSubmit = (e) =>{
    e.preventDefault()
    this.props.updateUser({...this.state,})
    // this.setState({username:"", membershipLevel:""})
  }

  render(){
    const {firstName, lastName, email} = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
        label="First Name"
        type="text"
        name="firstName"
        value={firstName}
        onChange={this.handleChange}
        />
        <Form.Input
        label="Last Name"
        type="text"
        name="lastName"
        value={lastName}
        onChange={this.handleChange}
        />
        <Form.Input
        label="Email"
        type="text"
        name="email"
        value={email}
        onChange={this.handleChange}
        />
        <Form.Button color="green" inverted>Save</Form.Button>
      </Form>

    )
  }
}

const ConnectedUserForm = (props) =>(
  <UserConsumer>
    {val =>(
      <UserForm
      {...props}
      firstName={val.firstName}
      lastName={val.lastName}
      lastName={val.lastName}
      email={val.email}
      updateUser={val.updateUser}
      updateUser={val.updateUser}
      />
    )}
  </UserConsumer>
)

export default ConnectedUserForm