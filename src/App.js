import "./App.css";
import { useState } from "react";
import { raceRange, raceCombos, rates, raceCombosForBoard, hello } from "pec";

function App() {
  const [board, setBoard] = useState("Ah9s8s");
  const [heroCard, setHeroCard] = useState("5h5s5c5d");
  const [villainCard, setVillainCard] = useState("6s6h6c6d");
  const [shouldRun, setShouldRun] = useState(false);

  const changeBoard = (event) => setBoard(event.target.value);
  const changeHeroCard = (event) => setHeroCard(event.target.value);
  const changeVillainCard = (event) => setVillainCard(event.target.value);

  let w, wr, l, lr, t;
  if (shouldRun) {
    const hero = [
      heroCard[0] + heroCard[1],
      heroCard[2] + heroCard[3],
      heroCard[4] + heroCard[5],
      heroCard[6] + heroCard[7],
    ];
    const villain = [
      villainCard[0] + villainCard[1],
      villainCard[2] + villainCard[3],
      villainCard[4] + villainCard[5],
      villainCard[6] + villainCard[7],
    ];
    const boardf = [];
    for (let i = 0; i < board.length; i += 2)
      boardf.push(board[i] + board[i + 1]);

    let { win, loose, tie } = raceCombosForBoard(hero, villain, 1e4, boardf);
    const { winRate, looseRate } = rates({ win, loose, tie });
    w = win;
    wr = winRate;
    l = loose;
    lr = looseRate;
    t = tie;
  }

  return (
    <div className="App">
      <div id="board">
        <form>
          <label>
            BOARD: <input type="text" value={board} onChange={changeBoard} />
          </label>
        </form>
      </div>
      <div id="heroCards">
        <form>
          <label>
            HERO CARDS:{" "}
            <input type="text" value={heroCard} onChange={changeHeroCard} />
          </label>
        </form>
      </div>
      <div id="villainCards">
        <form>
          <label>
            VILLAIN CARDS:{" "}
            <input
              type="text"
              value={villainCard}
              onChange={changeVillainCard}
            />
          </label>
        </form>
      </div>
      <button onClick={() => setShouldRun(true)}>RUN</button>
      <button onClick={() => setShouldRun(false)}>STOP</button>
      <br />
      <br />
      <div id="heroEquity">
        HERO EQUITY: {wr} ({w})
      </div>
      <div id="villainEquity">
        VILLAIN EQUITY: {lr} ({l})
      </div>
      <div id="tie">
        TIES: ({t})
      </div>
      <br />
      <br />
      <br />
      <div>{hello()}</div>
    </div>
  );
}

export default App;
