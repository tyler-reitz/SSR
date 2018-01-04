import React from 'react'

const Home = () => (
  <div>
    <div>Hello from SSR</div>
    <button onClick={() => console.log('you clicked!')}>
      click me
    </button>
  </div>
)

export default {
  Home
}
