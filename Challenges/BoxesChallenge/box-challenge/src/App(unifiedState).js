import './App.css';
import boxes from'./boxes';
import React from 'react';
// import Box from './components/Box(localState)'
import Box from './components/Box(unifiedState)'

function App(props) {

    const [squares, setSquares] = React.useState(boxes)

    function changeSquareOn(id){
        console.log(id)
        setSquares(prevSquares => {
            const newSquares = []
            for(let i = 0; i < prevSquares.length; i++) {
                const currentSquare = prevSquares[i]
                if(currentSquare.id === id) {
                    const updatedSquare = {
                        ...currentSquare,
                        on: !currentSquare.on
                    }
                    newSquares.push(updatedSquare)
                } else {
                    newSquares.push(currentSquare)
                }
            }
            return newSquares
        })
    }

    console.log(squares)
    const squareElements = squares.map(square => <Box 
        key={square.id}
        id={square.id}
        on={square.on}
        changeOnFunction = {changeSquareOn}
    />)


    return (
        <main>
            {squareElements}
        </main>
    );
}

export default App;
