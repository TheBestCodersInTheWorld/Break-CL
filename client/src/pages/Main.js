import React from 'react'
import '../styles/Main.css';

import Nav from "../components/Nav.js"
// import '../styles/Components.css';

const Main = () => {
  return (
    <div className="App">
      <Nav />
      <div className="ImageContainer">
        <h1 className="Title">Break Soccer Champions League</h1>
      </div>

    </div>
    
  )
}

export default Main