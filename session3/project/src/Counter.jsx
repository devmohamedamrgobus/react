import { Component } from 'react'

export default class Counter extends Component {

    state = {
       number:0
    }

  render() {
    let {number} = this.state
    return (
        <>
            <h1>counter is : {number}</h1>
            <button onClick={this.increment}>increment</button>
            <button onClick={this.decrement}>decrement</button>
            <button onClick={this.rest}>rest</button>

        </>
    )
  }

   increment = () => {
        this.setState({number:++this.state.number})
  }

  decrement = () => {
    this.setState({number:--this.state.number})
}   

    rest = () => {
        this.setState({number:0})
    }
}
