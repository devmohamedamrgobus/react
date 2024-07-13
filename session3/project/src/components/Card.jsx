import React, { Component } from 'react'

export default class Card extends Component {

    render() {
        return (
            <>
                <div className="card col-md-3">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <p className="card-text">{this.props.price}</p>
                        <a href="#" className="btn btn-primary">click</a>
                    </div>
                </div>
            </>
        )
    }
}
