import React, { Component } from 'react'
import ImageItem from './ImageItem'


export default class Filter extends Component {
    render() {
        return (
            <div>            
                {this.props.FilteredCreatures.map(creature =>(<ImageItem
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
