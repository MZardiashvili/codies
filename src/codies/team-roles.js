import React from 'react';

function TeamRoles({ handleGuesser, handleSpymaster }) {
  return (
    <div>
      <button className="codies-item__team-info" onClick={handleGuesser}>
        GUESSER
      </button>
      <button className="codies-item__team-info" onClick={handleSpymaster}>
        SPYMASTER
      </button>
    </div>
  );
}

export default TeamRoles;
