import React from "react"

export default function Box(props){

    //* In this way we have given each box, its own state to change
    const [squaresOn, setSquaresOn] = React.useState(props.on)

    function changeSquareOn(){
        setSquaresOn(prevOnStatus => !prevOnStatus)
    }

    //* This should look at the state value(squaresOn) instead of props.on
    const dynamicSquareStyles ={
        backgroundColor: squaresOn ? "#413F42" : "#fff",
    }

    return(
        <div onClick={changeSquareOn} style={dynamicSquareStyles} key={props.square.id} className="square" ></div>
    )
}