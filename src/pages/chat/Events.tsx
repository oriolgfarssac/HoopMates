import { Link } from "react-router-dom";
import Game from "../../components/game";
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from 'react'

const Events = () =>{
  const [events, setEvents] = useState<string[]>([]);
  const history = useNavigate();
  const createEvent = () =>{
    history('/createEvent/')
  }

  useEffect(() => {
    const getStoredU = localStorage.getItem('events');
    if (getStoredU) {
      try {
        const storedUsersReal = JSON.parse(getStoredU);
        if(storedUsersReal){
          setEvents(storedUsersReal);
        }
      } catch (error) {
        console.error('Error parsing stored users:', error);
      }
    }
  }, []);

    return(
        <>
<main className='mainContainer11'>
      <header className='header'>
        <Link to={'/account/'} className='account'><img src="/icons/usuario.png" className='account' /></Link>
        <h1 className='t1'>Hoopers Events</h1>
        <Link to={'/settings/'} className='account'><img src="/icons/ajustes.png" className='account'/></Link>
      </header>
      <ol className='list'>
      <button className="create" onClick={createEvent}>Create Event</button>
      {events.map((event) => (
  <li>
  <Game
    gameName={event.gameName}
    gameDescription={event.gameDescription}
    gameCourt={event.gameCourt}
    gameDate={event.gameDate}
  />
  </li>
))}
      </ol>
    <footer className='footer'>
      <Link to="/courts/" className='navIcon'><img src="/icons/main.png" alt="" className='navIcon'/></Link>
      <Link to="/rank/" className='navIcon'><img src="/icons/users.png" alt="" className='navIcon'/></Link>
      <Link to="/hotCourts/" className='navIcon'><img src="/icons/pelota.png" alt="" className='navIcon'/></Link>
      <Link to="/chat/" className='navIcon'><img src="/icons/team1.png" alt="" className='navIcon'/></Link>
      <Link to="/configuration/" className='navIcon'><img src="/icons/help.png" alt="" className='navIcon'/></Link>
    </footer>
    </main>
        </>
    );
}

export default Events;