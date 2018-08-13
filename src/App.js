// create your App component here
import React from 'react'

class App extends React.Component {
  state ={
    peopleInSpace: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(resp => {
      this.setState({
        peopleInSpace: resp.people
      })
  })
}

  render() {
    return(
      <div>
      <h1>People In Space:</h1>
      {this.state.peopleInSpace.map((person) => {
        return <h3>{person.name}</h3>
      })}
      </div>
    )
  }
}

export default App
