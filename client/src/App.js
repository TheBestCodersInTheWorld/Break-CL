import './App.css';
import Main from './pages/Main.js';
import Standings from './pages/Standings.js';
import { useRoutes } from 'react-router-dom'

function App() {
  const routes = [
    {
      path: "/", 
      element: <Main />

     
    },
    { 
      path: "/standings",
    element: <Standings />
  
  }

  
    // {
    //   path: "/competitions",
    //   element: <Competition />,
    // }
    //  {
    //   path: "/competitions/mls-cup-playoffs",
    //   element: <Playoff />,
    // }
  ]
  return (
    
    useRoutes(routes)


  );
}

export default App;
