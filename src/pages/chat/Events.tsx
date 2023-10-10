import React from 'react';
import { Link } from 'react-router-dom';
import Game from '../../components/game';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface neWEvent {
  gameName: string;
  gameDescription: string;
  gameCourt: string;
  gameDate: string;
}

const Events: React.FC = () => {
  const [events, setEvents] = useState<neWEvent[]>([]);
  const history = useNavigate();
  const createEvent = () => {
    history('/createEvent/');
  }

  useEffect(() => {
    const getStoredEvents = localStorage.getItem('events');
    if (getStoredEvents) {
      try {
        const storedEvents = JSON.parse(getStoredEvents);
        if (Array.isArray(storedEvents)) {
          setEvents(storedEvents);
        }
      } catch (error) {
        console.error('Error parsing stored events:', error);
      }
    }
  }, []);

  return (
    <>
      <main className='mainContainer11'>
        <header className='header'>
          <Link to={'/account/'} className='account'><img src="/icons/usuario.png" className='account' /></Link>
          <h1 className='t1'>Hoopers Events</h1>
          <Link to={'/settings/'} className='account'><img src="/icons/ajustes.png" className='account'/></Link>
        </header>
        <ol className='list'>
          <button className="create" onClick={createEvent}>Create Event</button>
          {events.map((event, index) => (
            <li key={index}>
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