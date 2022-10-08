function App() {
    const [starWarsData, setStarWArsData] = React.useState({})
    const [count, setCount] = React.useState(0)
    console.log("Component Rendered") 

    /*
        ! Let's start refactoring the code here to use the useEffect hook 
        * as we did with the useState with do same with the useEffect 
            ? So I can create a side effect just by using React.useEffect()
        
        ! useEffect() has one required parameter and an optional second parameter
            ? 1.) First parameter is a function (callback function)
    */

    // ! side effect 
        /* 
            ! first parameter 
                * this function acts as a place for us to be able to put our side effects code 
                    ? that fetch request is considered as a sideEffect because it's reaching outside of react's ecosystem 
                    ? but also trying to set some state in the process 
                    ? but before it was running infinitely
            ! Second parameter
                * dependencies array
                    ? this array we pass as a second parameter to useEffect will contain values that if they change from one render to
                        ? the next render will cause this effect to run.
                    ? it limits the number of times that this effect will run or rather it determines when this effect will run 
                        ? instead of running after eery single render 

                * if I leaves it as an empty array, this tells react i want to run this function on the very first render of my component
                    * but then there are no dependencies to watch and trigger this effect to run again. so it ends up being it runs once when 
                    * component first loads and that's it never again
                    ? React.useEffect(function() {}, [])

                * but if wanted to render this effect every time count change
                    * i have to make sure that my effect knew that count was one of the dependencies that signaled to the effect to run again
                    ? under the hood what happening is 
                        * when I hit refresh state[count] start out as 0 and the component will take count and replace it with a 0 everywhere including in the effect
                        * then I update the count from 0 to 1 and it will re-render my "App" component where everywhere i'm using count is now 1 including in the effect
                            * now in the dependencies array it's going to compare an array with the number 0 and array with the number 1
                            * if any of the values in the array is different it will rerun the function
        */
       
    // * If you haven't give the second parameter to useEffect it will be same as before it will run infinitely but it will run after the return()
    React.useEffect(function() {
        console.log("Effect ran")}, [count])

    return (
        <main>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
        </main>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


/*
    ! What is a "side effect" in React? What are some examples? 
        ? Any code that affects an outside system.
        ? examples - local storage, API, websocket, two states to keep in sync with each other

    ! What is NOT a "side effect" in React? Examples?
        ? Anything that React is in charge of 
        ? maintaining state between one render to the next, keeping the UI in sync with the data
        ? render DOM elements

    ! When does React run your useEffect function? When does it NOT run the effect function?
        ? As soon as the component loads (first render)
        ? On every re-render of the component (assuming no dependencies array)
        ? will NOT run the effect when the values of the dependencies in the array stay the same between renders

    ! How would you explain what the "dependencies array" is?
        ? Second parameter to the useEffect function
        ? A way for React to know whether it should re-run the effect function 

*/