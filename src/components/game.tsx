import React from 'react';
import './styles/court.css';
import './styles/game.css'

interface GameProps {
  gameName: string;
  gameDate: string;
  gameCourt: string;
  gameDescription: string;
}

const Game: React.FC<GameProps> = ({ gameName, gameDate, gameCourt, gameDescription}) => {

  

  return (
    <>
      <div className="mainContainer">
      <h1 className='gameTitle'>{gameName}</h1>
      <div className='description'>
      <p className='itemGame2'>{gameDescription}</p>
      </div>
      <div className='data'>
      <div className='infoGame'>
      <h4 className='itemGame'>{gameCourt}</h4>
      </div>
      <div className='infoGame'>
      <h4 className='itemGame'>{gameDate}</h4>
      </div>
      </div>
      </div>
    </>
  );
};

export default Game;
