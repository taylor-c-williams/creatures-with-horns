import React, { Component } from 'react'

export default class dropdown extends Component {
    render() {
        return (
            <div>

                <select onChange={this.props.handleChange} >
                    <option value="">All</option>

                    {this.props.options.map (optionName => < option value= {optionName} key={optionName} >{optionName}</option>)}
                </select>
    
            </div>
        )
    }
}