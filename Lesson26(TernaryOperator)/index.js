function App() {
    const isGoingOut = false;
    const isGoingHome = true;
    /*
        let answer
        if (isGoingOut === true){
            answer = "Yes"
        }else{
            answer = "No"
        }
    */

    // ! Ternary Operator
    let answer = isGoingOut === true ? "Yes": "No"

    return (
        <div className="state">
            <h1 className="state-title">Do I feel like going out tonight?</h1>
            <div className="state-value">
                <h1>{answer}</h1>
            </div>     
            <br/>       
            <h1 className="state-title">Do I feel like going Home tonight?</h1>
            <div className="state-value">
                <h1>{isGoingHome? "Yes": "No"}</h1>
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