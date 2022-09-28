function Count(props) {
    // ! Child component receiving a state value via props 
    console.log("Count Component Rendered")
    return(
        <div className="state-value">
            <h1>{props.count}</h1>
        </div>
    )
}

function App() {
    const [number, setNumber] = React.useState(0)

    function plusOne(){
        setNumber(oldValue => oldValue + 1)
    }
    
    function minusOne(){
        setNumber(oldValue => oldValue - 1)
    }

    console.log("App component Rendered")

    /**
     ** Every time we change our state 
     ** It's re-rendering the component in which the state is declared
     ** and any children component like <Count/> that may or may not depend  on the state value for count
     */

    return (
        <div className="state">
            <Count count= {number}/>
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
