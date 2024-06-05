import React, { useState } from 'react'
import Player from './components/Player'
import GameBoard from './components/GameBoard'

const App = () => {

  const [activePlayer, setActivePlayer] = useState("X")

  function handleSelectPlayer(){
    setActivePlayer(curActivePlayer => curActivePlayer === "X"? "O":"X");
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard onSelectSquare={handleSelectPlayer} activePlayerSymbol={activePlayer} />
      </div>
      LOG
    </main>
  )
}

export default App