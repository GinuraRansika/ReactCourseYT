import './App.css';
import boxes from'./boxes';
import React from 'react';
import Box from './components/Box'

function App(props) {

    const [squares, setSquares] = React.useState(boxes)
    const squareElements = squares.map(square => <Box 
        square={square}
        key={square.id}
        on={square.on}
    />)

  return (
  <main>
    {squareElements}
  </main>
  );
}

export default App;
