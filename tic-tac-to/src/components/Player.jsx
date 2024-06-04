import React from 'react'

const Player = ({name, symbol}) => {
    const [isEditing, setIsEditing] = React.useState(false)
    const handleEditClick = () =>{
        // setIsEditing(isEditing? false: true)
        setIsEditing(!isEditing)
    }
    return (
        <li>
            <span className="player">
                {
                    isEditing ?
                    <input type='text' value={name} required/>
                    :<span className="player-name">{name}</span> 
                }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing? "Save": "Edit"}</button>
        </li>
    )
}

export default Player
