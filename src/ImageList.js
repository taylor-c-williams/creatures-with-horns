import React, { Component } from 'react'
import ImageItem from './ImageItem.js'
import Creatures from './data.js'
import Dropdown from './Dropdown'
export default class ImageList extends Component {
    state = {
        keyword: '',
        horns: ''
    }
    
    handleChange = (e) => {
    this.setState({ keyword: e.target.value })
    
    }

    handleHorns = (e) => {
        this.setState({ horns: e.target.value })
    }    

    render() {
        const FilteredCreatures = Creatures.filter (creature => (!this.state.keyword || creature.keyword === this.state.keyword)&& (!Number(this.state.horns) || Number(creature.horns) === Number(this.state.horns)))
        

        console.log(this.state.keyword)
        console.log(this.state.horns)

        return (
            <div>
                 <Dropdown handleChange = {this.handleChange}
                 handleHorns = {this.handleHorns} />


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