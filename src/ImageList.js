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

        const FilteredCreatures = Creatures.filter (creature => (!this.state.keyword || creature.keyword === this.state.keyword) && (!Number(this.state.horns) || Number(creature.horns) === Number(this.state.horns)))

        return (
            <div>
                <p>Show all {this.state.keyword} Creatures</p>
                 <Dropdown handleChange = {this.handleChange}
                    options = {
                     [
                        "narwhal",
                        "rhino",
                        "unicorn",
                        "uni-Lego",
                        "triceratops",
                        "markhor",
                        "mouflon",
                        "addax",
                        "chameleon",
                        "lizard",
                        "dragon",
                     ]
                    }                      
                 />

                 <Dropdown handleChange = {this.handleHorns}
                    options = {
                        [
                            Number(1),
                            Number(2),
                            Number(3),
                            Number(100),
                        ]
                    }/>             

                 <Filter FilteredCreatures = {FilteredCreatures}/>
            </div>
            )
        }   
    }