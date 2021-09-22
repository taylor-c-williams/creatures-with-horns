import React, { Component } from 'react'
import Creatures from './data.js'
import ImageItem from './ImageItem'

export default class Filters extends Component {

 
    render() {

        const FilteredCreatures = Creatures.filter (creature => (!this.props.keyword || creature.keyword === this.props.keyword)&& (!Number(this.props.horns) || Number(creature.horns) === Number(this.props.horns)))
        

        return (
            <div>
                {FilteredCreatures.map(creature =>(<ImageItem
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
