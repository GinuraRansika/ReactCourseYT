import React from "react"

/*
    ! Previously,
        * what we did is we created new state inside each of our box components and
        * initialized that state based on the incoming prop of on 
        ? when you create state that is initialized by incoming props and it's called derived state 
*/

/*
    * in App.js we actually created some state to maintain all of the squares already 
    * So, when we set state in each one of our Boxes we had state both in the app and in every one of our Boxes
    * which in the end means that there are two sources of truth 
    * when the Box is updating its own state but it was not updating the state on the App component 
    * (it was only updating its local state that it had derived based on the incoming props)

*/

/*
    !Now
        * instead of putting state and setter inside of each one of our boxes 
        * we're going to make use of the state already exists in our App
        ? Todo : do that we going to create the toggle function inside of our App component then 
        ?           pass that toggle function down to each one of our box instances 


*/
export default function Box(props){
    
    const dynamicSquareStyles ={
        backgroundColor: props.on ? "#413F42" : "#fff",
    }

    // * when we call the function we can't pass our custom arguments
    //  <div onClick={props.changeOnFunction} style={dynamicSquareStyles} key={props.square.id} className="square" ></div>

    // ? To work around this we can run our own function which then runs props.changeOnFunction
            //? now you can pass whatever we want as an argument
    return(
        <div onClick={()=>props.changeOnFunction(props.id)} style={dynamicSquareStyles} className="square" ></div>
    )
}