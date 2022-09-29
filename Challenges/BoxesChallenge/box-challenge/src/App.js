import './App.css';
import boxes from'./boxes';
import React from 'react';

function App(props) {

  const [squares, setSquares] = React.useState(boxes)
  //* when we use style in React we don't use style="String"  we use style={{object}}
  /* 
    ? you need to use two curly braces first one to enter JavaScript and Second one to put the Object or 
      * const squareElements = squares.map(square => <div style={{}} key={square.id} className="square"></div>)
    ? you can create a separate variable and set that equal to an object like below
      * const styles = {}
      * const squareElements = squares.map(square => <div style={styles} key={square.id} className="square"></div>)
  */

    // ! styles need to be in camelCase like we did using dom elements in JS
        // * example : document.getElementById("id").style.backgroundColor = color;
    const boxStyles = {
      backgroundColor: props.darkMode?"#E80F88":"#F07DEA",
      borderColor:props.darkMode?"white":"black",
    }
    const backgroundStyles ={
      backgroundColor:props.darkMode?"black":"white",
      height:"100vh"
    }
    const squareElements = squares.map(square => <div style={boxStyles} key={square.id} className="square"></div>)

  return (
  <main style={backgroundStyles}>
    {squareElements}
  </main>
  );
}

export default App;
