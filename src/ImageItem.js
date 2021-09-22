import React, { Component } from 'react'

export default class ImageItem extends Component {
    render()
    {
        return (
            <div className = "creatures">                
            <p>{this.props.keyword}, {this.props.horns} horn </p>
            <img src= {this.props.url} alt ="creature"/>
            </div>
        )
    }
}
