/*
    * We can add an event listener to our window that listens for the resize event
    * to do that we need to interact with a system outside of our window tracker component 
    * we need to use useEffect
    * then
        ? we are going to listen for a resize event on our window 
        ? window.addEventListener
        ? window.addEventListener("resize", function(){}) - listen for the resize event and then run the following function 
        ? then add a state for the window width and set it inside the event listener
*/

/*
    ! Memory leak issue
        * because we set up an event listener on the window which registered it with our browser and 
            * even removing the window tracker component by toggling it off, does not automatically remove that event listener 
    ? You should always try to be aware of when you are interfacing with side effects using useEffect is any potential consequences that
        ? might happen if you don't clean up the things that you do in that side effect 
            * example : where we're adding an event listener that is not getting cleaned up when below component unmounts 
*/
function WindowTracker(){
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        function watchWidth(){
            console.log("setting up")
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener("resize", function(){
            console.log("cleaning up")
            setWindowWidth(watchWidth)
        })

        // * SO when react runs our useEffect function it will receive in return another function that it can use to then clean up 
        // * any side effects that you might have created
        return function() {
            // ? remove event listener the resize event and the event listener function i want to remove is this watchWidth function 
            window.removeEventListener("resize", watchWidth)
        }

    }, [])
    return(
        <h1>Window width: {windowWidth}</h1>
    )
}

/*
    ! Recap in useEffect()
        * it takes 2 parameters 
            ? 1st one is the effect that you want to run 
            ? 2nd one is any dependencies that react should watch for changes in to re-run your effect function 
                * and that effect function is allowed to return another function that can clean up after any side effects that might
                * be lingering in case you component dies 
*/


function App() {
    const [show, setShow] = React.useState(true)
    function toggleShow(){
        setShow(prevState => !prevState)
    }

    return (
        <main className="container">
            <button onClick={toggleShow}>Toggle WindowTracker</button>
            {show && <WindowTracker/> }
        </main>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);