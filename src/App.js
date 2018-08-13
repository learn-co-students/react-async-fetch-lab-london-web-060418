// create your App component here
import React, { Component } from 'react';

class App extends Component {

  state = {
    space: [],
  }


  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(space => {
      console.log(space.people)
      this.setState({
        space: [...space.people]
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Space</h1>
        </header>
      </div>
    );
  }
}

export default App;
