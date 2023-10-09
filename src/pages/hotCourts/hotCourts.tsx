import React, { useEffect, useState } from 'react';
import LikedCourt from '../../components/likedCourt';
import courtsInfo from '../../data/courtsInfo';
import { Link } from 'react-router-dom';

const HotCourts: React.FC = () => {
  const [likedCourts, setLikedCourts] = useState<string[]>([]);

  useEffect(() => {
    const getStoredU = localStorage.getItem('usuaris');
    if (getStoredU) {
      try {
        const storedUsersReal = JSON.parse(getStoredU);
        const realUser = storedUsersReal.find((user: any) => user.loged === true);
        if (realUser && Array.isArray(realUser.liked)) {
          setLikedCourts(realUser.liked);
        }
      } catch (error) {
        console.error('Error parsing stored users:', error);
      }
    }
  }, []);

  return (
    <>
      <main className='mainContainer11'>
        <header className='header'>
          <Link to={'/account/'} className='account'>
            <img src="/icons/usuario.png" className='account' alt="User Account" />
          </Link>
          <h1 className='t1'>Hot Courts</h1>
          <Link to={''} className='account'>
          <Link to={'/settings/'} className='account'><img src="/icons/ajustes.png" className='account'/></Link>
          </Link>
        </header>
        <ol className='list'>
          {courtsInfo
            .filter((court) => likedCourts.includes(court.name))
            .map((court) => (
              <li key={court.id} className='list-item'>
                <LikedCourt
                  courtName={court.name}
                  courtPicture={court.picture}
                  courtUbication={court.ubication}
                  courtPeople={court.people}
                />
              </li>
            ))}
        </ol>
        <footer className='footer'>
          <Link to="/courts/" className='navIcon'><img src="/icons/main.png" alt="" className='navIcon' /></Link>
          <Link to="/rank/" className='navIcon'><img src="/icons/users.png" alt="" className='navIcon' /></Link>
          <Link to="/hotCourts/" className='navIcon'><img src="/icons/pelota2.png" alt="" className='navIcon' /></Link>
          <Link to="/chat/" className='navIcon'><img src="/icons/chat.png" alt="" className='navIcon' /></Link>
          <Link to="/configuration/" className='navIcon'><img src="/icons/help.png" alt="" className='navIcon' /></Link>
        </footer>
      </main>
    </>
  );
};

export default HotCourts;
