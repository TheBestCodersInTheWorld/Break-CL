import React from 'react'
import StandingsTableEntry from "../components/StandingsTableEntry.js"

const StandingsTable = () => {

  const data = [
    {
      "teamName": "Asians FC", 
      "gamesPlayed": 0,
      "goals": 0,
      "endInGoal": 0,
      "points": 0,
    },
    {
      "teamName": "Los Cocos Locos FC", 
      "gamesPlayed": 0,
      "goals": 0,
      "endInGoal": 0,
      "points": 0,
    },
    {
      "teamName": "Gufenshlachen FC", 
      "gamesPlayed": 0,
      "goals": 0,
      "endInGoal": 0,
      "points": 0,
    },
    {
      "teamName": "White Boys Elite FC", 
      "gamesPlayed": 0,
      "goals": 0,
      "endInGoal": 0,
      "points": 0,
    },
    {
      "teamName": "Dingaling FC", 
      "gamesPlayed": 0,
      "goals": 0,
      "endInGoal": 0,
      "points": 0,
    },
  ]

  return (
    <div>
      <StandingsTableEntry />
      <StandingsTableEntry team="Asians FC" gamesPlayed={0} goals={0} endInGoal={0} points={0}/>
      <StandingsTableEntry />
      <StandingsTableEntry />
      <StandingsTableEntry />
      <StandingsTableEntry />
    </div>
    )
    
}

export default StandingsTable