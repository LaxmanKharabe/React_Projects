import { useRef, useState } from "react";
export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayedName] = useState(null);

  const handleClick = () => {
    setEnteredPlayedName(playerName.current.value);
    playerName.current.value = "" // It will clear the input box when clicked on the submit button
    playerName.current.focus() // when the cleared it will focus the input element
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
