/* 
    *if your Form has more than 2 or 3 inputs
  * you will more likely to create an object instead of variable for each of those to save the state
*/
function Form(){
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: ""
    })
    console.log(formData)



    /*
        * I need a way for the handle change event to distinguish between 
        * which input it was that triggered that event
        * Good practice : if we can give each  of our inputs a name property
        * in react name property is going to play a special role for us
            ? make the name property match exactly the property name in the state that we're saving 
    */
    function handleChange(event){
        // ? Now we are working with object (we have other properties) so we do need the previous State
        // * you can avoid the syntax error in the key by surrounding it in  square brackets
        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [event.target.name]: event.target.value,
            }
        })
    }

    return(
        <form>
            <input 
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
            />
            <input 
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
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
