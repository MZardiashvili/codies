import React, { useState } from 'react';
import './cards.css';
import words from '../data/words';
import shuffle from '../common/utils/shuffle';
import colors from '../data/colors';
import TeamRoles from './team-roles';

function Cards() {
  const [teamRole, setTeamRole] = useState('guesser');
  const [endTurn, setEndTurn] = useState(false);
  const [pointBlue, setPointBlue] = useState(0);
  const [pointRed, setPointRed] = useState(0);

  const [shuffledColors] = useState(() => shuffle(colors));
  let coloredWords = words.map((word, i) => {
    return {
      word: words[i],
      color: shuffledColors[i],
      selected: false,
    };
  });
  const [codies, setCodies] = useState(coloredWords);

  const onWordClick = (event) => {
    let word = event.target.innerHTML;
    const selectedWords = codies.map((item) => {
      if (word.toUpperCase() === item.word.toUpperCase()) {
        return { ...item, selected: true };
      }
      return item;
    });
    setCodies(selectedWords);
  };

  return (
    <div>
      <div>
        <button className="codies-item__end-turn">END TURN</button>
      </div>
      <ul className="codies-item__words">
        {codies.map((codie, i) => {
          let className = 'codies-item__button';

          if (teamRole === 'spymaster') {
            if (codie.color === 'blue') {
              className =
                'codies-item__button codies-item__button-spymaster--bluish disabled';
            } else if (codie.color === 'red') {
              className =
                'codies-item__button codies-item__button-spymaster--reddish disabled';
            } else if (codie.color === 'default') {
              className = 'codies-item__button disabled';
            } else if (codie.color === 'bomb') {
              className =
                'codies-item__button codies-item__button-spymaster--bomb disabled';
            }
          }

          if (codie.color === 'blue' && codie.selected) {
            className = 'codies-item__button codies-item__button-guesser--blue';

            // if (item.color === 'blue' && item.selected) {
            //   setPointBlue(() => pointBlue + 1);
            // } else if (item.color === 'red' && item.selected) {
            //   setPointRed(() => pointRed + 1);
            // }
          } else if (codie.color === 'red' && codie.selected) {
            className = 'codies-item__button codies-item__button-guesser--red';
          } else if (codie.color === 'default' && codie.selected) {
            className =
              'codies-item__button codies-item__button-guesser--default';
          } else if (codie.color === 'bomb' && codie.selected) {
            className = 'codies-item__button codies-item__button-guesser--bomb';
          }

          return (
            <li key={i}>
              <button className={className} onClick={onWordClick}>
                {codie.word.toUpperCase()}
              </button>
            </li>
          );
        })}
      </ul>
      <h1>
        {pointBlue} - {pointRed}
      </h1>
      <TeamRoles
        handleGuesser={() => setTeamRole('guesser')}
        handleSpymaster={() => setTeamRole('spymaster')}
      />
    </div>
  );
}

export default Cards;
