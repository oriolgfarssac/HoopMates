import React from 'react';
import './styles/clan.css'

interface ClanProps {
  name: string;
  description: string;
  maxClanMembers: number;
}

const Clan: React.FC<ClanProps> = ({ name, description, maxClanMembers }) => {
  return (
    <div className='bigDiv'>
        <div className='titleContainer'> 
        <h1 className='clanTitle'>{name}</h1>
        </div>
        <div className='infoContainer'>
        <p className='clanDescription'>{description}</p>
        <p className='clanMaxMembers'>Max Clan Members: {maxClanMembers}</p>
        </div>
    </div>
  );
};

export default Clan;