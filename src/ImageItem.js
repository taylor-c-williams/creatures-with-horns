import React, { Component } from 'react'

export default class ImageItem extends Component {
    render()
    {
        return (
            <>
            <section className = "creatures" >                
            {this.props.keyword},
            {this.props.horns} horn
            <img src= {this.props.url} alt ="creature"/>
            </section>
            </>
        )
    }
}
