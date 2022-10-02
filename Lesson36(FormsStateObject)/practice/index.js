
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
            />
            <input 
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
            />            
            <input 
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
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
