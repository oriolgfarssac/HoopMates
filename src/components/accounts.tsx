import React from 'react';
import './styles/accounts.css'
import { useEffect } from 'react';
interface AccountsProps {
  username: string;
  positon: string;
  favourite: string;
  instagram: string;
  twitter: string;
}

const Accounts: React.FC<AccountsProps> = ({ username, positon, favourite, instagram, twitter}) => {

  useEffect(() => {
    const getStoredU = localStorage.getItem("usuaris");
    let storedUsersReal: any[] = [];

    if (getStoredU) {
      try {
        storedUsersReal = JSON.parse(getStoredU);
      } catch (error) {
        console.error("Error parsing stored users:", error);
      }
    }

    const realUser = storedUsersReal.find((user) => {
      return user.loged === true;
    });

  }, []);

  const goInstagram = () => {
    window.open(`https://www.instagram.com/${instagram}/`);
  }

  const goTwitter= () => {
    window.open(`https://twitter.com/${twitter}/`);
  }

  return (
    <>
      <div className="userContainer">
      <div className='socials'>
      <img src='/icons/instagram.png' className='userImg' alt={`Profile of ${username}`} onClick={goInstagram}/>
      <img src='/icons/twitter.png' className='userImg' alt={`Profile of ${username}`} onClick={goTwitter}/>
      </div>
      <div id='infoUserDiv'>
        <div className='row1'>
          <h1 className='user-name'>{username}</h1>
        </div>
        <div className='row3'>
          <h3 className='info'>{favourite}</h3>
          <h3 className='info'>{positon}</h3>
        </div>
      </div>
      
    </div>
    </>
  );
};

export default Accounts;
