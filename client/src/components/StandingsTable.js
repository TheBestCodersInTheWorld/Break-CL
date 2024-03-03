import React from 'react'
import StandingsTableEntry from "../components/StandingsTableEntry.js"
import StandingsTableEntryHeader from "../components/StandingsTableEntryHeader"

const StandingsTable = () => {

  const data = [
    {
      "teamName": "Asians FC", 
      "gamesPlayed": 0,
      "goals": 0,
      "endInGoal": 0,
      "points": 5,
    },
    {
      "teamName": "Los Cocos Locos FC", 
      "gamesPlayed": 0,
      "goals": 0,
      "endInGoal": 0,
      "points": 19,
    },
    {
      "teamName": "Gufenshlachen FC", 
      "gamesPlayed": 0,
      "goals": 0,
      "endInGoal": 7,
      "points": 2,
    },
    {
      "teamName": "White Boys Elite FC", 
      "gamesPlayed": 0,
      "goals": 0,
      "endInGoal": 0,
      "points": 10,
    },
    {
      "teamName": "Dingaling FC", 
      "gamesPlayed": 0,
      "goals": 0,
      "endInGoal": 0,
      "points": 30,
    },
  ]

  const compareTeams = (teamA, teamB) => {
      if (teamA.points > teamB.points) {
        return -1;
      }
      if (teamA.points < teamB.points) {
        return 1;
      }
      if (teamA.points == teamB.points) {
        if (teamA.goals > teamB.goals) {
          return -1;
        }
        if (teamA.goals < teamB.goals) {
          return 1;
        }
        if (teamA.goals == teamB.goals) {
          if (teamA.endInGoal > teamB.endInGoal) {
            return -1;
          }
          if (teamA.endInGoal < teamB.endInGoal) {
            return 1;
          }
          if (teamA.endInGoal == teamB.endInGoal) {
            return 0;
          }
        }   
      }

      return 0;
    
  }

  return (
    <div>
      <StandingsTableEntryHeader />

      {data.sort(compareTeams).map((team, i) => 
        <StandingsTableEntry ranking={i+1} team={team.teamName} gamesPlayed={team.gamesPlayed} goals={team.goals} endInGoal={team.endInGoal} points={team.points} />
      )}

    </div>
    )
    
}

export default StandingsTable