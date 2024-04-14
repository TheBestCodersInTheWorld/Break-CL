import React, { useState } from 'react'
import "../styles/Components.css"

import Afc from "../images/afclogo.jpeg"

const RosterBlock = (props) => {
  const logo = "../images/afclogo.jpeg"

  // let teambutton = false;/
  const [teambutton, setTeambutton] = useState(false)
  // let [teambu

  const handleRoster = () => {
    setTeambutton(!teambutton)
  }

  return (
    <div>
      <div className="RosterBlockContainer">
        <div className="RosterButton" onClick={handleRoster} >Roster</div>
        <div className="RosterTeam" >{props.teamName}</div>
        <div className="RosterLogo" >
          <img className="RosterImage" src={Afc} />
        </div>


      </div>

      {teambutton && <div className="RosterBlockList">
        {
          props.players.map((player) => 
            <div className="RosterPlayer">{player.name}</div>
          )
        }
       {/* <div className="RosterPlayer">(props.)</div>
       <div className="RosterPlayer">Ian Byrne</div> */}
      </div>}
      

    </div>

    
    
  )
}
export default RosterBlock;
