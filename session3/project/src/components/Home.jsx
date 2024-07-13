import React, { Component } from 'react'
import Card from './Card'

export default class Home extends Component {
    state = {
        products:[
            {id:1,name:"tv",price:100},
            {id:2,name:"tv1",price:400},
            {id:3,name:"tv2",price:1500},
            {id:3,name:"tv3",price:1500}

        ]
    }
  render() {
    let {products} = this.state
    return (
        <>
            <div className='container'>
                <div className='row'>
                    {products.map((item)=> <Card name={item.name} price={item.price} />)}
                </div>
            </div>

        </>
    )
  }
}
