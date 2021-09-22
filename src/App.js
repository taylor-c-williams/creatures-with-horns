import React, { Component } from 'react'
import './App.css'
import Header from './Header.js'
import ImageList from './ImageList.js'
import Filters from './Filters'

export default class App extends Component {



  render ()
  
  {
    return(
    
    <div className="App">

      <Header />
      <ImageList items  = {Filters}/>
    </div>
    )
  }
}