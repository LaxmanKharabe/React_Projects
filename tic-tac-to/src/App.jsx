import React, { useState } from 'react'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './components/winning-combinations';
import GameOver from './components/GameOver';
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]
function derivedActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "0"
  }
  return currentPlayer;
}
const App = () => {
  const [gameTurns, setGameTurns] = useState([])
  const [acceptName, setAcceptName] = useState("")
  const activePlayer = derivedActivePlayer(gameTurns)
  let winner = null;
  let gameBoard = [...initialGameBoard.map(arr => [...arr])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if(firstSquareSymbol && 
      firstSquareSymbol === secondSquareSymbol && 
      firstSquareSymbol === thirdquareSymbol){
        winner = firstSquareSymbol;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectPlayer(rowIndex, colIndex) {
    setGameTurns(preTurns => {
      const currentPlayer = derivedActivePlayer(preTurns);
      const updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: currentPlayer
        },
        ...preTurns
      ];

      return updatedTurns;
    });
  }
  function handleRestart(){
    setGameTurns([])
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" pName={setAcceptName} isActive={activePlayer === "X"} />
          <Player initialName="Player 2" symbol="O" pName={setAcceptName} isActive={activePlayer === "O"} />
        </ol>
        {(winner || hasDraw) && <GameOver 
        winner={winner} winnerName={acceptName} onReStart={handleRestart} />}
        <GameBoard
          onSelectSquare={handleSelectPlayer}
          board={gameBoard}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App