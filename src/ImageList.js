import React, { Component } from 'react'
import ImageItem from './ImageItem.js'
import data from './data.js'

export default class ImageList extends Component {
    state = { }
    render() {

        return (
            <div>

            {data.map(creature => 
             (<ImageItem
            url = {creature.url} 
            title = {creature.title}
            description = {creature.description}
            keyword = {creature.keyword}
            horns = {creature.horns}
            />))}

            </div>
        )
    }
}

