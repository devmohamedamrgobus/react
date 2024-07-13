import React, { Component } from 'react'
import axios from 'axios'
export default class Users extends Component {

    state = {
        users:[]
    }
  render() {
    let {users} = this.state
    return (
        <>
                
        <ul>
            {users.map((user)=><li key={user.id}>{user.name}</li>)}
        </ul>
        
        </>
    )
  }


  getUsers = ()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((resp)=>{
        console.log(resp.data)
        this.setState({users:resp.data})
    })
  }


  componentDidMount(){
        this.getUsers()
    }
}
