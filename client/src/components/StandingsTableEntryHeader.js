import React from 'react'
import '../styles/Components.css'

const StandingsTableEntryHeader = (props) => {
  return (
    <div className="TableEntry">

        <div className="RankingCell">Ranking</div>
        <div className="TextCell">Team</div>
        <div className="NumberCell">Games Played</div>
        <div className="NumberCell">Goals</div>
        <div className="NumberCell">End in Goal</div>
        <div className="NumberCell">Points</div>


    </div>

  )
}

export default StandingsTableEntryHeader