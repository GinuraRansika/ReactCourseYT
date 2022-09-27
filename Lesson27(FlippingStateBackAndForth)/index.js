function App() {
    const [isGoingOut, setIsGoingOut] = React.useState(true)

    function goingOutButton(){
        if(isGoingOut){
            setIsGoingOut(prevState => !prevState)
            //? returns the opposite value of the previous state
        }else{
            setIsGoingOut(prevState => !prevState) 
            //? returns the opposite value of the previous state

            /*
                ? or you can use
                * setIsGoingOut(prevState => prevState ? false: true)
            */f
        }
    }
    return (
        <div className="state">
            <h1 className="state-title">Do I feel like going out tonight?</h1>
            <div className="state-value" onClick={goingOutButton}>
                <h1>{isGoingOut ? "Yes" : "No"}</h1>
            </div>     
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);