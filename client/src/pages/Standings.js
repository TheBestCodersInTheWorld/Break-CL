import React from 'react'
// components
import Nav from "../components/Nav.js"
import StandingsTable from '../components/StandingsTable.js'
// style
import '../styles/Standings.css' 


const Standings = () => {
  return (
    <div className="Standings"> 
      
      <Nav/>

      <div className="StandingsTableContainer">
        <StandingsTable /> 
      </div>

      
    
    </div>
    

  )
}

export default Standings