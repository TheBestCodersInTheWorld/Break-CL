import React from 'react'
import "../styles/Components.css"

import Afc from "../images/afclogo.jpeg"

const RosterBlock = (props) => {
  const logo = "../images/afclogo.jpeg"

  const handleRoster = () => [
    console.log("button pressed!")
    
  ]

  return (
    <div className="RosterBlockContainer">
      <div className="RosterButton" onClick={handleRoster} >Roster</div>
      <div className="RosterTeam" >Team A</div>
      <div className="RosterLogo" >
        <img className="RosterImage" src={Afc} />
      </div>
      {/* <div className="RosterTeam" >{props.team}</div>
      <div className="RosterLogo" >
        <img src={props.teamLogo} />
      </div> */}
    </div>
    
  )
}

export default RosterBlock