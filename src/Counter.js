import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        counter: 0,
        color: 'black',
    }

    handleClick = () => {
        this.setState({ counter: this.state.counter +1 })
    }

    purpleClick = () => {
        this.setState ({ color: 'purple'})
    }

    render() {
        return (
            <div className = 'counter'>
                <h1 style ={{color: this.state.color}}>A Counter</h1>
                <p>Has been clicked this many times: {this.state.counter}</p>
                <button onClick = {this.handleClick}> INCREASE THE PRESSURE </button>
                <button onClick = {this.purpleClick}> PURPLE HER </button>
                
            </div>
        )
    }
}
