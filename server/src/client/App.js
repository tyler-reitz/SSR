import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'

class App extends Component {
  static loadData() {
    console.log('Heyo from App')
  }

  render() {
    const { route } = this.props

    return (
      <div>
        <h1>Im a header</h1>
        { renderRoutes(route.routes) }
      </div>
    )
  }
}

export default App
