import React, { Component } from 'react'
import ImageItem from './ImageItem.js'
import Creatures from './data.js'

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
        const KeywordCreatures = Creatures.filter (creature => !this.state.keyword || creature.keyword === this.state.keyword)
        
        const HornedCreatures = Creatures.filter (creature => !Number(this.state.horns) || Number(creature.horns) === Number(this.state.horns))

        const Both = KeywordCreatures.concat(HornedCreatures)

        console.log(this.state.keyword)
        console.log(this.state.horns)
        console.log(Both)

        return (
            <div>
                  <p>Show all {this.state.keyword} Creatures</p>
                <select onChange={this.handleChange} >
                    <option value="">All Creatures</option>
                    <option value="narwhal">Narwhal</option>
                    <option value="rhino">Rhino</option>
                    <option value="unicorn">Unicorn</option>
                    <option value="unilego">Unilego</option>
                    <option value="triceratops">Triceratops</option>
                    <option value="Markhor">Markhor</option>
                    <option value="mouflon">Mouflon</option>
                    <option value="addax">Addax</option>
                    <option value="chameleon">Chameleon</option>
                    <option value="lizard">Lizard</option>
                    <option value="dragon">Dragon</option>
                </select>
                Number of horns
                <select onChange={this.handleHorns} >
                    <option value="">All Creatures</option>
                    <option value= {Number(1)}>1</option>
                    <option value={Number(2)}>2</option>
                    <option value={Number(3)}>3</option>
                    <option value={Number(100)}>100</option>
                </select>

                {Both.map(creature =>(<ImageItem
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