import { useState } from "react";

function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        <div className="player-symbol">
          <img src={symbol === "x" ? "x.png" : "circle.png"} />
        </div>
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}

        <button onClick={handleEditClick}>
          {isEditing ? "Zapisz" : "Edytuj"}
        </button>
      </span>
    </li>
  );
}

export default Player;
