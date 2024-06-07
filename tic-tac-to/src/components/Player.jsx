import React, { useState } from 'react'

const Player = ({initialName, symbol, isActive, pName}) => {
    const [isEditing, setIsEditing] = React.useState(false)
    const [playerName, setplayerName] = useState(initialName)
    const handleEditClick = () =>{
        setIsEditing(editing => !editing) // best practice
        // setIsEditing(!isEditing);
    }
    pName(playerName);
    function handleChange(event){
        setplayerName(event.target.value)
    }
    return (
        <li className={isActive? "active": undefined}>
            <span className="player">
                {
                    isEditing === true ?
                    <input type='text' onChange={handleChange} value={playerName} required/>
                    :<span className="player-name">{playerName}</span> 
                }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing? "Save": "Edit"}</button>
        </li>
    )
}

export default Player
