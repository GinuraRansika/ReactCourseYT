/*
    * when you change the values in the input box
    * it is maintaining its own state (so we have two pieces of state)
        ? one is being held by the input box just in regular html 
        ? other is updating on every keystroke held in our react code
    * To prevent that you need to add a value property and the state value inside the curly braces
*/ 
function Form() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email:"",
    })
    console.log(formData)


    function handleChange(event){
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
                value={formData.firstName}
            />
            <input 
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />            
            <input 
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
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
