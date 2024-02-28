function Log({ turns }) {
  return (
    <>
      <ol id="log">
        <h3>Ruchy:</h3>
        {turns.map((turn) => (
          <li key={`${turn.square.row}${turn.square.col}`}>
            {turn.player} zaznaczył {turn.square.row},{turn.square.col}
          </li>
        ))}
      </ol>
    </>
  );
}

export default Log;
