import React from 'react';
import './styles/court.css';
import {useState, useEffect} from 'react'

interface CourtProps {
  courtName: string;
  courtPicture: string;
  courtUbication: string;
  courtPeople: number;
}

const LikedCourt: React.FC<CourtProps> = ({ courtName, courtPicture, courtUbication, courtPeople}) => {
  const openUbication = () => {
    window.location.href = courtUbication;
};

const [index, setIndex] = useState(0);
const hearth = ['/icons/quit.png','/icons/playyy.png',];

useEffect(() => {
  const getStoredU = localStorage.getItem('usuaris');
  let storedUsersReal: any[] = [];

  if (getStoredU) {
    try {
      storedUsersReal = JSON.parse(getStoredU);
    } catch (error) {
      console.error('Error parsing stored users:', error);
    }
  }

  const realUser = storedUsersReal.find((user) => {
    return user.loged === true;
  });

  if (realUser) {
    const liked = realUser.liked.find((item: any) => item === courtName);

    if (liked) {
      setIndex(1);
    } else {
      setIndex(0);
    }
  }
}, [courtName]);

const setFavourite = () => {
  const getStoredU = localStorage.getItem('usuaris');
  let storedUsersReal = [];

  if (getStoredU) {
    try {
      storedUsersReal = JSON.parse(getStoredU);
    } catch (error) {
      console.error('Error parsing stored users:', error);
    }
  }

  const realUser = storedUsersReal.find((user: any) => {
    return user.loged === true;
  });

  if (realUser) {
    setIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    if(index == 1){
      courtPeople++;
    }
    else{
      courtPeople--;
    }
  }
};
  

  return (
    <>
      <div className="mainContainer">
        <div id='seconDiv'>
          <img src={courtPicture} className='infoImg' alt={courtName} />
          <br />
          <h1 className='name'>{courtName}</h1>
          <div className='navigation2'>
            <a onClick={openUbication} className='maps'>
              <img src="/icons/mapa.png" className="iconImg" alt="Google Maps" />
            </a>
            <h2 className='infoPeople'>  Players: {courtPeople}</h2>
            <a className='like'>
              <img src={hearth[index]} className="iconImg" alt="Favorite" onClick={setFavourite}/>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LikedCourt;
