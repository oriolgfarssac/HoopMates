import '../../components/styles/court.css'
import '../../styles/courts.css'
import React from 'react';
import Court from '../../components/court';
import courtsInfo from '../../data/courtsInfo';
import { Link } from 'react-router-dom';

const Courts: React.FC = () => {


  return (
    <main className='mainContainer11'>
      <header className='header'>
        <Link to={'/account/'} className='account'><img src="/icons/usuario.png" className='account' /></Link>
        <h1 className='t1'>Court Locations</h1>
        <Link to={'/settings/'} className='account'><img src="/icons/ajustes.png" className='account'/></Link>
      </header>
      <ol className='list'>
      {courtsInfo.map((court) => (
      <li key={court.id} className='list-item'>
      <Court
      courtName={court.name}
      courtPicture={court.picture}
      courtUbication={court.ubication}
      courtPeople={court.people}
      />
      </li>
))}
      </ol>
    <footer className='footer'>
      <Link to="/courts/" className='navIcon'><img src="/icons/main1.png" alt="" className='navIcon'/></Link>
      <Link to="/rank/" className='navIcon'><img src="/icons/users.png" alt="" className='navIcon'/></Link>
      <Link to="/hotCourts/" className='navIcon'><img src="/icons/pelota.png" alt="" className='navIcon'/></Link>
      <Link to="/Events/" className='navIcon'><img src="/icons/team.png" alt="" className='navIcon'/></Link>
      <Link to="/configuration/" className='navIcon'><img src="/icons/help.png" alt="" className='navIcon'/></Link>
    </footer>
    </main>
  );
};

export default Courts;
