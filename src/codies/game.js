import React, { useState } from 'react';
import Cards from './cards';
import Start from './start';
import Teams from './teams';

function Game() {
  const [play, setPlay] = useState(false);
  const [nickname, setNickname] = useState('');

  const onNickChange = (e) => setNickname(e.target.value);

  const handlePlay = () => setPlay(true);

  let contents;
  if (!play) {
    contents = <Start onNickChange={onNickChange} handlePlay={handlePlay} />;
  } else if (play) {
    contents = (
      <div className="codies-item__buttons">
        <Teams player={nickname} />
        <Cards />
      </div>
    );
  }

  return <div>{contents}</div>;
}

export default Game;
