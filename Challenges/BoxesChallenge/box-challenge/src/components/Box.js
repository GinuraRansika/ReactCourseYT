import React from "react"

export default function Box(props){

    const dynamicSquareStyles ={
        backgroundColor: props.on ? "#413F42" : "none",
    }
    return(
        <div style={dynamicSquareStyles} key={props.square.id} className="square"></div>
    )
}