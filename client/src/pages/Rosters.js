import React from 'react'
// components
import Nav from "../components/Nav.js"
import RosterBlock from '../components/RosterBlock.js'

// style
import '../styles/Rosters.css' 


const Rosters = () => {
  return (
    <div className="Rosters"> 
      
      <Nav/>
      <div className="RosterContainer">
        <RosterBlock/>
        <RosterBlock/>
        <RosterBlock/>
        <RosterBlock />
      </div>

    
      
    
    </div>
    

  )
}

export default Rosters