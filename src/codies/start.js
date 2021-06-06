import React from 'react';
import './start.css';

function Start({ onNickChange, handlePlay }) {
  return (
    <div className="start__page">
      <h1>CODENAMES</h1>
      <form className="start__page">
        <label>
          <input
            className="input__field"
            type="text"
            placeholder=" Nickname"
            onChange={onNickChange}
          />
        </label>
        <button className="play__button" onClick={handlePlay}>
          Play
        </button>
      </form>
    </div>
  );
}

export default Start;
