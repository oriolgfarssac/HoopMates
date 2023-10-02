import { Link } from 'react-router-dom';
import React from 'react';
import "../../styles/rank.css"
import Ranking from '../../components/ranking';

const rank: React.FC = () => {
  return (
    <main className='mainContainer11'>
      <header className='header'>
        <img src="/icons/usuario.png" className='account'/> 
        <h1 className='t1'>Ranking</h1>
        <img src="/icons/ajustes.png" className='account'/>
      </header>
      <ol className='list'>
      <li className='item'><Ranking></Ranking></li>
      </ol>
    <footer className='footer'>
      <Link to="/courts/" className='navIcon'><img src="/icons/main.png" alt="" className='navIcon'/></Link>
      <Link to="/rank/" className='navIcon'><img src="/icons/trofeo.png" alt="" className='navIcon'/></Link>
      <Link to="/hotCourts/" className='navIcon'><img src="/icons/pelota.png" alt="" className='navIcon'/></Link>
      <Link to="/chat/" className='navIcon'><img src="/icons/chat.png" alt="" className='navIcon'/></Link>
      <Link to="/configuration/" className='navIcon'><img src="/icons/help.png" alt="" className='navIcon'/></Link>
    </footer>
    </main>
  );
};

export default rank;
