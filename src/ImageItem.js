import React, { Component } from 'react'
import data from './data.js'


export default class ImageItem extends Component {

    render() {
        return (
            <div>
                <p>Data has this many images: {data.length}</p>
            </div>
        )
    }
}
