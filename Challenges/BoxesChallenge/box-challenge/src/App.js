import './App.css';
import boxes from'./boxes';
import React from 'react';

function App() {
  const [squares, setSquares] = React.useState(boxes)
  const squareElements = squares.map(square => <div key={square.id} className="square"></div>)
  return (
  <main>
    {squareElements}
  </main>
  );
}

export default App;
