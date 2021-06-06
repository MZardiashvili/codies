import React from 'react';
import Game from './codies/game';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Game />
    </BrowserRouter>
  );
}

export default App;
