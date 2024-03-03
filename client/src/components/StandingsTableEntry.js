import React from 'react'
import '../styles/Components.css'

const StandingsTableEntry = (props) => {
  return (
    <div className="TableEntry">

        <div className="RankingCell">{props.ranking}</div>
        <div className="TextCell">{props.team}</div>
        <div className="NumberCell">{props.gamesPlayed}</div>
        <div className="NumberCell">{props.goals}</div>
        <div className="NumberCell">{props.endInGoal}</div>
        <div className="NumberCell">{props.points}</div>


    </div>

  )
}

export default StandingsTableEntry