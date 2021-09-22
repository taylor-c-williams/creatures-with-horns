import React, { Component } from 'react'
import Filter from './Filter'
import Dropdown from './Dropdown'
import Creatures from './data'

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

        return (
            <div>
                 <Dropdown handleChange = {this.handleChange}
                 handleHorns = {this.handleHorns} />

                 <Filter FilteredCreatures = {FilteredCreatures}/>
            </div>
            )
        }   
    }