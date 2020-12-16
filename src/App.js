import './App.css';
import { useState } from 'react';
import { raceRange, raceCombos, rates, raceCombosForBoard } from 'pec';

function App() {
  const [board, setBoard] = useState('Ah9s8s');
  const [heroCard, setHeroCard] = useState('QhQs');
  const [villainCard, setVillainCard] = useState('JsJh');

  const changeBoard = (event) => setBoard(event.target.value);
  const changeHeroCard = event => setHeroCard(event.target.value);
  const changeVillainCard = event => setVillainCard(event.target.value);

  const hero = [ heroCard[0] + heroCard[1], heroCard[2] + heroCard[3] ]; 
  const villain = [ villainCard[0] + villainCard[1], villainCard[2] + villainCard[3] ]; 
  const boardf = [];
  for (let i = 0; i < board.length; i+=2) {
    boardf.push(board[i] + board[i+1])
  }

  const { win, loose, tie } = raceCombosForBoard(hero, villain, 1E4, boardf)
  const { winRate, looseRate, tieRate } = rates({ win, loose, tie })

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
