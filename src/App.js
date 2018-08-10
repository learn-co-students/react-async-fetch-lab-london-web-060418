import React from 'react'

class App extends React.Component {

  state = {
    people: [],
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then( resp => resp.json() )
      .then( spacePeople => this.setState({
                              people: spacePeople.people
                            })
      )
  }

  render() {
    const spacePeople = this.state.people.map( p => <div>{p.name}</div>)

    return (
      <React.Fragment>{spacePeople}</React.Fragment>
    )
  }
}

export default App
