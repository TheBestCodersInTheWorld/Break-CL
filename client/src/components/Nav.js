import React from 'react'
import '../styles/Components.css';

import { useNavigate } from "react-router-dom"


const Nav = () => {

  const navigate = useNavigate()

  return (
    <div className="MainContainer">
        <div className="NavOption" onClick={() => navigate('/about')}>About</div>
        <div className="NavOption" onClick={() => navigate('/standings')}>Standings</div>
        <div className="NavOption" onClick={() => navigate('/rosters')}>Rosters</div>
        <div className="NavOption" onClick={() => navigate('/schedule')}>Schedule</div>

    </div>
  )
}

export default Nav