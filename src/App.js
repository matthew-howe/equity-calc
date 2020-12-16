import './App.css';
import { useState } from 'react';
import { raceRange, raceCombos, rates } from 'pec';

function App() {
  const [board, setBoard] = useState('');
  const [heroCard, setHeroCard] = useState('QhQs');
  const [villainCard, setVillainCard] = useState('JsJh');

  const changeBoard = (event) => setBoard(event.target.value);
  const changeHeroCard = event => setHeroCard(event.target.value);
  const changeVillainCard = event => setVillainCard(event.target.value);

  const hero = [ heroCard[0] + heroCard[1], heroCard[2] + heroCard[3] ]; 
  const villain = [ villainCard[0] + villainCard[1], villainCard[2] + villainCard[3] ]; 

  const { win, loose, tie } = raceCombos(hero, villain, 1E4)
  const { winRate, looseRate, tieRate } = rates({ win, loose, tie })

  console.log('JJ performs as follows vs. [ KK, QQ ]')
  console.log('win: %d%% (%d times)', winRate, win)
  console.log('loose: %d%% (%d times)', looseRate, loose)
  console.log('tie: %d%% (%d times)', tieRate, tie)

  return (
    <div className="App">
      <div id="board">
        <form><label>
          BOARD: <input type="text" value={board} onChange={changeBoard} />
        </label></form>
       </div>
      <div id="heroCards"> 
        <form><label>
          HERO CARDS: <input type="text" value={heroCard} onChange={changeHeroCard} />
        </label></form>
      </div>
      <div id="villainCards">
        <form><label>
          VILLAIN CARDS: <input type="text" value={villainCard} onChange={changeVillainCard} />
        </label></form>
      </div>
      <br />
      <br />
      <div id="heroEquity">HERO EQUITY: {winRate} ({win})</div>
      <div id="villainEquity">VILLAIN EQUITY: {looseRate} ({loose})</div>
    </div>
  );
}

export default App;
