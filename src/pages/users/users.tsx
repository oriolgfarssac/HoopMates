import React from 'react';
import Accounts from '../../components/accounts';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Users: React.FC = () => {
  const [storedUsersReal, setStoredUsersReal] = useState<any[]>([]);
  useEffect(() => {
    const getStoredU = localStorage.getItem('usuaris');
    
    if (getStoredU) {
      try {
        setStoredUsersReal(JSON.parse(getStoredU));
      } catch (error) {
        console.error('Error parsing stored users:', error);
      }
    }
  }, []);


  return (
    <main className='mainContainer11'>
      <header className='header'>
        <Link to={'/account/'} className='account'><img src="/icons/usuario.png" className='account' /></Link>
        <h1 className='t1'>Hoop Players</h1>
        <Link to={''} className='account'><img src="/icons/ajustes.png" className='account'/></Link>
      </header>
      <ol className='list'>
      {storedUsersReal.map((user: any) => (
      <li  className='list-item'>
      <Accounts
      username={user.userName}
      positon={user.position}
      favourite={user.favourite}
      img={user.userImg}
      />
      </li>
))}
      </ol>
    <footer className='footer'>
      <Link to="/courts/" className='navIcon'><img src="/icons/main.png" alt="" className='navIcon'/></Link>
      <Link to="/rank/" className='navIcon'><img src="/icons/users2.png" alt="" className='navIcon'/></Link>
      <Link to="/hotCourts/" className='navIcon'><img src="/icons/pelota.png" alt="" className='navIcon'/></Link>
      <Link to="/chat/" className='navIcon'><img src="/icons/chat.png" alt="" className='navIcon'/></Link>
      <Link to="/configuration/" className='navIcon'><img src="/icons/help.png" alt="" className='navIcon'/></Link>
    </footer>
    </main>
  );
};

export default Users;
