// create your App component here
import React, { Component } from 'react'

export default class App extends Component {

  state={
    data : []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(data => this.setState({data:data}))
  }
  render() {
    return( <div>this.state.data</div>)
  }
}
