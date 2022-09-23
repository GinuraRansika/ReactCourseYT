function App() {
    const [isImportant, setIsImportant] = React.useState("Yes!")
    /*
        * when you're working with state you can't change value 
        * simple just saying
            ? isImportant = "Something Different" 
        * Instead
        * we are given a function that allow us to make these changes 
            ? setIsImportant("Something Different")
    */
    console.log(isImportant)

    function handleClick(){
        if(isImportant === "Yes!"){
            setIsImportant("No!")
        }else{
            setIsImportant("Yes!")
        }
        console.log(isImportant)
    }


    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value" onClick={handleClick}>
                <h1>{isImportant}</h1>
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