import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'

const mapStateToProps = ({users}) => ({users})

class Users extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  render () {
    const { users } = this.props

    return (
      <div>
        <h3>This is a list of users</h3>
        <ul>
          {users.map(({name, id}) => 
            <li key={id}>{name}</li>
          )}
        </ul>
      </div>
    )
  }
}

export const loadData = () => console.log('Trying to load sum data')

export default connect(
  mapStateToProps,
  { fetchUsers },
)(Users)
