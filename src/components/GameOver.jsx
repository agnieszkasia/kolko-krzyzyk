function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Koniec gry</h2>
      {winner && <p>{winner} wygrał</p>}
      {!winner && <p>Remis</p>}
      <p>
        <button onClick={onRestart}> Zagraj ponownie</button>
      </p>
    </div>
  );
}

export default GameOver;
