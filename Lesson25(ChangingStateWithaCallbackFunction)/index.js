function App() {
    const [number, setNumber] = React.useState(0)
    console.log(number)

    
    function plusOne(){
        /*
            ! Note:
                ?      if you ever need the old value of state
                ? to help you determine the new value of state,
                ? you should pass a callback function to your
                ? state setter function instead of using
                ? state directly. This callback function will
                ? receive the old value of state as its parameter,
                ? which you can then use to determine your new
                ? value of state.
        */
        setNumber(function(oldValue){
            return oldValue + 1
        })
    }
    
    function minusOne(){
        setNumber(oldValue => oldValue - 1)
    }

    return (
        <div className="state">
            <div className="state-value">
                <h1>{number}</h1>
            </div>
            <div className="state-minus" onClick={minusOne}>
                <h2 className="minus"> - </h2>
            </div>
            <div className="state-plus" onClick={plusOne}>
                <h2 className="plus"> + </h2>
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