function Form() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email:"",
        comments:"",
        isFriendly: true
    })
    console.log(formData)


    function handleChange(event){
        const {name, value, type, checked} = event.target  // * we need name, value from event.target
        // * we will need type to check whether it is a checkbox type or not if it is we also need the checked property

        /*
            * When I'm setting my from data i want everything else essentially to be the same and
            * piece of state that i want to update if it's a checkbox it shouldn't take on value but 
            * rather should take on the value of checked so we can use a ternary here
        */
        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value,
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
                className="text-input"
            />

            <input 
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
                className="text-input"
            />    

            <input 
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
                className="text-input"
            />

            {/* //* In react they slightly changed the textarea input (example: now it's a self closing tag) */}
            <textarea 
                placeholder="Any Comments" 
                onChange={handleChange}
                name="comments"
                value={formData.comments} 
            />
            
            {/* //* There's not gonna be a string text of checkbox instead it is a checked property that will either be true or false */}
            {/* //? name property should be same as the state property name */}
            <input
                type="checkbox"
                id="isFriendly"
                className="checkbox"
                checked={formData.isFriendly}
                name="isFriendly"
                onChange={handleChange}
            />
            <label htmlFor="isFriendly">Are You Friendly?</label>

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
