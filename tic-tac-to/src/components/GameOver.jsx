import React from 'react'

const GameOver = ({ winner, onReStart, winnerName }) => {
    return (
        <div id='game-over'>
            <h2>Game Over!</h2>
            {winner && <p>{winnerName} Won!</p>}
            {!winner && <p>It's a draw!</p>}
            <p><button onClick={onReStart}>Rematch!</button></p>
        </div>
    )
}
export default GameOver