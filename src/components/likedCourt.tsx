import React from 'react';
import './styles/court.css';
import {useState, useEffect} from 'react'
import courtsInfo from '../data/courtsInfo';

interface CourtProps {
  courtName: string;
  courtPicture: string;
  courtUbication: string;
}

const LikedCourt: React.FC<CourtProps> = ({ courtName, courtPicture, courtUbication,}) => {
  const openUbication = () => {
    window.location.href = courtUbication;
};

const [court, setCourt] = useState<any[]>([]);
const [index, setIndex] = useState(0);
const hearth = ['/icons/quit.png','/icons/playyy.png',];
const [rCourt,setRCourt] = useState(Number);

useEffect(() => {
  const getStoredU = localStorage.getItem('usuaris');
  let storedUsersReal: any[] = [];
  setCourt(courtsInfo);
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
  const findedCourt = court.find((pista: any) => pista.name === courtName);
  if(findedCourt){
  const updatedPeople = findedCourt.people;
  setRCourt(updatedPeople);
  }
  
}, [courtName]);

const playCourt = () => {
  const findedCourt = court.find((pista: any) => pista.name === courtName);
  const updatedPeople = findedCourt.people;
  setRCourt(updatedPeople);
  if (findedCourt) {
    setIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    
    if (index === 1) {
      const updatedPeople = findedCourt.people + 1;
      setRCourt(updatedPeople);
      findedCourt.people = updatedPeople;
    } else {
      const updatedPeople = findedCourt.people - 1;
      setRCourt(updatedPeople);
      findedCourt.people = updatedPeople;
    }

    // Update the state of court array with the modified findedCourt
    setCourt((prevCourt) => {
      const updatedCourt = [...prevCourt];
      const indexToUpdate = updatedCourt.findIndex((pista: any) => pista.name === courtName);
      if (indexToUpdate !== -1) {
        updatedCourt[indexToUpdate] = findedCourt;
      }
      return updatedCourt;
    });

    // Save the updated court array in localStorage
    localStorage.setItem('pistes', JSON.stringify(court));
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
            <h2 className='infoPeople'>  Players: {rCourt}</h2>
            <a className='like'>
              <img src={hearth[index]} className="iconImg" alt="Favorite" onClick={playCourt}/>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LikedCourt;
