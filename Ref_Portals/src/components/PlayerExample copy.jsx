import { useRef, useState } from "react";

export default function PlayerExample() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayedName] = useState(null);

  const handleClick = () => {
    setEnteredPlayedName(playerName.current.value)
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input 
        type="text" 
        ref={playerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
