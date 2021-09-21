import './App.css';
import Counter from './Counter.js';
import ImageList from './ImageList.js';
import React, { Component } from 'react'

export default class App extends Component {
  render (){
    return(
    <div className="App">
      <Counter />
      <ImageList />
    </div>
    )
  }
}