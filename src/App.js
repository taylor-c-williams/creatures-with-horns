import './App.css'
import Header from './Header.js'
import ImageList from './ImageList.js'
import ImageItem from './ImageItem.js'
import Creatures from './data.js'
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    keyword: ''
    }

  handleChange = (e) => {
    this.setState({ keyword: e.target.value })
}
  render (){

const FilteredCreatures = Creatures.filter ( creature => !this.state.keyword || creature.keyword === this.state.keyword )

    return(
    <div className="App">
      <Header />
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
      <ImageList />
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