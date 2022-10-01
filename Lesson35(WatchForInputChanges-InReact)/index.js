/*
    ! In JavaScript - 
        * we would have a submit button and whe we clicked that submit button it would run 
            * run a function gather al the data at that time and then submit it to an api or wherever
            
    ! But In React - 
        * We are maintaining up-to-date state for every change that happens in any input in our form
        Todo - steps   
            ? 1. we need some state to hold the current data that's typed into our input 
            ? 2. now what we need to do is listen for any changes that happen to that input (using Event Listener like onChange)
            ? 3. Then you can add a function to trigger

            
*/

function Form(){
    const [firstName, setFirstName] = React.useState("")  // ? 1.
    const [LastName, setLastName] = React.useState("")
    console.log(firstName + " " + LastName)

    function handleFirstNameChange(event){   // ? 3.
        // console.log(event.target)  // * event.target - DOM object that triggered this event 
        // console.log(event.target.value)  // * that dom object has properties like value-property(event.target.value)

        setFirstName(event.target.value)
    }

    function handleLastNameChange(event){
        setLastName(event.target.value)
    }

    return(
        <form>
            <input 
                type="text"
                placeholder="First Name"
                onChange={handleFirstNameChange}  //? 2.
            />
            <input 
                type="text"
                placeholder="Last Name"
                onChange={handleLastNameChange}
            />
        </form>
    )
}

function App() {
    return (
        <main>
            <Form/>
        </main>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
