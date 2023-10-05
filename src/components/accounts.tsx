import React from 'react';
import './styles/accounts.css'
import {useEffect} from 'react'

interface AccountsProps {
  username: string;
  positon: string;
  favourite: string;
  img: string;
}

const Accounts: React.FC<AccountsProps> = ({ username, positon, favourite, img}) => {


useEffect(() => {
  const getStoredU = localStorage.getItem('usuaris');
  console.log(getStoredU);
  let storedUsersReal: any[] = [];

  if (getStoredU) {
    try {
      storedUsersReal = JSON.parse(getStoredU);
    } catch (error) {
      console.error('Error parsing stored users:', error);
    }
  }

}, []);

  

  return (
    <>
      <div className="userContainer">
      <img src={img} className='userImg' alt={`Profile of ${username}`} />
      <div id='infoUserDiv'>
        <div className='row1'>
          <h1 className='user-name'>{username}</h1>
          
        </div>
        <div className='row1'>
          <h3 className='info'>{favourite}</h3>
          <h3 className='info'>{positon}</h3>
        </div>
      </div>
    </div>
    </>
  );
};

export default Accounts;
