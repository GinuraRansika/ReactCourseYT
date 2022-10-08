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
function WindowTracker(){
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {
        window.addEventListener("resize", function(){
            console.log("resized", window.innerWidth)
            setWindowWidth(window.innerWidth)
        })

    }, [window.innerWidth])
    return(
        <h1>Window width: {windowWidth}</h1>
    )
}


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