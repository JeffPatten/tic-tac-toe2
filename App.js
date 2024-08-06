import "./App.css";
import Square from "./Square";
import { useState } from "react";

function App() {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);

  const handleClick = () => {
    setSquares(['','','','','','','','','']);
    setPlayer(true);
  }

  return (
    <div className="App">
      <div className="container">
        {squares.map((square, index) => {
          return (
            <Square
              squares={squares}
              setSquares={setSquares}
              player={player}
              setPlayer={setPlayer}
              squareValue={square}
              index={index}
            />
          );
        })}
      </div>
      <button onClick={handleClick}>Reset</button>
    </div>
  );
}

export default App;
