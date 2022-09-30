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

    function changeSquareOn2Method(id) {
        setSquares(prevSquares => {
            return(
                prevSquares.map((square) => {
                     return square.id === id ? {...square, on: !square.on} : square
                })
            )
        })

    }

    const squareElements = squares.map(square => <Box 
        key={square.id}
        id={square.id}
        on={square.on}

        changeOnFunction = {changeSquareOn2Method}
    />)


    return (
        <main>
            {squareElements}
        </main>
    );
}

export default App;
