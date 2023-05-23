import React, { Component } from 'react';
import Searchbar from "./Searchbar/Searchbar";

export class App extends Component {
  state = {
    page: 1,
    query: '',
    items: [],
  }

  onSubmit = query =>{

    this.setState({
      query,
    });
  }

  render() {
    return (
      <>
      <Searchbar onSubmit={this.onSubmit}/>
      </>
    );
  } 
};
