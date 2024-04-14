import React from 'react'
// components
import Nav from "../components/Nav.js"
import RosterBlock from '../components/RosterBlock.js'

// style
import '../styles/Rosters.css' 


const Rosters = () => {
  const data = [
    {
      "teamName": "Los Cocos Locos FC",
      "players": [
        {
          "name": "Ben Sandberg",
        },
        {
          "name": "Ian Byrne",
        }
      ],
    },
    {
      "teamName": "Asians FC",
      "players": [
        {
          "name": "Ryan Vo",
        },
        {
          "name": "Zach Estrera",
        }
      ]
    },
    {
      "teamName": "Gufenshlachen FC",
      "players": [
        {
          "name": "Nathaniel Dow",
        },
        {
          "name": "George Hricik",
        }
      ]
    },
    {
      "teamName": "Dingaling FC",
      "players": [
        {
          "name": "Noah Prati",
        },
        {
          "name": "Zaidan Gbadamosi",
        }
      ]
    },
    {
      "teamName": "White Boys Elite FC",
      "players": [
        {
          "name": "Hudson Peakes",
        },
        {
          "name": "Wells Stimming",
        }
      ]
    }
  ]


  

  return (
    <div className="Rosters"> 
      
      <Nav/>
      <div className="RosterContainer">
        {data.map((team, i) =>
          <RosterBlock teamName={team.teamName} players={team.players} />
        )}

        {/* // <RosterBlock />
        // <RosterBlock />
        // <RosterBlock />
        // <RosterBlock /> */}
      </div>

    
      
    
    </div>
    

  )
}

export default Rosters