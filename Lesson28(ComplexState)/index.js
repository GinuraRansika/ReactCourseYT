function App() {
    // const thingsArray = ["Thing 1", "Thing 2"] 
    const [thingsArray, setThings] = React.useState(["Thing 1", "Thing 2"])

    function addNewThing()
    {
        const newThing = "Thing "+ (thingsArray.length + 1)
        setThings(prevState => [...prevState, newThing])  //* Array Spread Operator
        /*
            setThings(prevState => {
                return([...prevState, newThing])
            }) 
        */
    }

    const thingsElementsArray = thingsArray.map(thing => {
        return(<p key={thing}>{thing}</p>)
    })
    console.log(thingsElementsArray)
    
    return (
        <div>
            <button onClick={addNewThing}>Add Item</button>
            {thingsElementsArray}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));