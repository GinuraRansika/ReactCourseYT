function App() {
    const [number, setNumber] = React.useState(0)
    console.log(number)

    function plusOne(){
        setNumber(number + 1)
    }
    
    function minusOne(){
        setNumber(number - 1)
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