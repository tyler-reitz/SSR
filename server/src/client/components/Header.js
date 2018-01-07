import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = (props) => (
  <nav>
    <Link to="/">React SSR</Link>
    <div>
      <Link to="/users">Users</Link>
      <Link to="/admines">Admins</Link>
      <a href="/api/logout">Logout</a> 
      <a href="/api/auth/google">Login</a> 
    </div>
  </nav>
)

export default connect(
  ({ auth }) => ({ auth }),
)(Header)
