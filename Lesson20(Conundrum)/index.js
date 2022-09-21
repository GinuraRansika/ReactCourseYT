/*
    * react isn't looking at local arrays that are just saved within a component
    *       to determine whether or not something should get re-rendered
    ? since react is declarative library we just need to update our data and react will 
    ?        automatically react to the change and update our ui to display what has changed in the data
    ! for the above to work we need to access something called react state
    ! state will allow us to sort of hook into the component
    ! whenever we update our state(which is just values inside of a component)
    !       react will update the ui based on any changes that happens to the values 
    !       that being save in state
*/

// ? Lets do this with the States
function App() {
    // const thingsArray = ["Thing 1", "Thing 2"] 
    const [thingsArray, setThings] = React.useState(["Thing 1", "Thing 2"])

    function addNewThing()
    {
        const newThing = "Thing "+ (thingsArray.length + 1)
        console.log(newThing)

        // thingsArray.push(newThing);
        setThings(prevState => [...prevState, newThing])
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