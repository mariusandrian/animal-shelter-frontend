import React, { Component } from 'react';
import './App.css';
import AnimalList from './components/AnimalList';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3002/animals";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: []
    }
  }

  loadData = async () => {
    const response = await fetch(BACKEND_URL);
    const results = await response.json();
    this.setState({animals: results});
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <div className="App" >
        <h1>My Animals</h1>
        <AnimalList animals={this.state.animals} />
      </div>
    );
  }
}

export default App
