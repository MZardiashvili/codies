import React, { useState } from 'react';
import './teams.css';

function Teams({ player }) {
  const [blue, setBlue] = useState('');
  const [red, setRed] = useState('');

  const handleBlue = () => {
    setBlue(player);
    setRed('');
  };

  const handleRed = () => {
    setRed(player);
    setBlue('');
  };

  return (
    <div className="codies-item__team">
      <button className="codies-item__team-red" onClick={handleBlue}>
        JOIN RED
      </button>
      <p className="player-name_team-red ">{blue}</p>
      <button className="codies-item__team-blue" onClick={handleRed}>
        JOIN BLUE
      </button>
      <p className="player-name_team-blue ">{red}</p>
    </div>
  );
}

export default Teams;
