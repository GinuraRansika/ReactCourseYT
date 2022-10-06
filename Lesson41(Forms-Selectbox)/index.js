function Form() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email:"",
        comments:"",
        isFriendly: true,
        employment: "",
        favColor:"",
    })
    console.log(formData)


    function handleChange(event){
        const {name, value, type, checked} = event.target
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

            <textarea 
                placeholder="Any Comments" 
                onChange={handleChange}
                name="comments"
                value={formData.comments} 
            />
            
            <div className="checkbox-container">
                <input
                    type="checkbox"
                    id="isFriendly"
                    className="checkbox"
                    checked={formData.isFriendly}
                    name="isFriendly"
                    onChange={handleChange}
                />
                <label htmlFor="isFriendly">Are You Friendly?</label>
            </div>
             
            <fieldset>
                <legend>Current Employment Status</legend>
                <div className="radio-container">
                    <input
                        type="radio"
                        id="unemployed"
                        name="employment"
                        value ="unemployed"
                        checked={formData.employment === "unemployed"}
                        onChange={handleChange}
                    />
                    <label htmlFor="unemployed">Unemployed</label>
                </div>

                <div className="radio-container">
                    <input
                        type="radio"
                        id="part-time"
                        name="employment"
                        value="part-time"
                        checked={formData.employment === "part-time"}
                        onChange={handleChange}
                    />
                    <label htmlFor="part-time">Part-time</label>
                </div>

                <div className="radio-container">
                    <input
                        type="radio"
                        id="full-time"
                        name="employment"
                        value="full-time"
                        checked={formData.employment === "full-time"}
                        onChange={handleChange}
                    />
                    <label htmlFor="full-time">Full-time</label>
                </div>
            </fieldset>

            <div className="select-box-container">
                    {/* 
                        // * Below value property is similar to our text inputs value property  
                        // * we can use the previous handleChange
                        // * And to make our handleChange to work correctly we need to make sure that we mirror name with the state property
                    */}

                    {/*
                        // ? But we have an issue if i hit refresh i'm initializing state as an empty string for the favColor
                        // ? but currently we don't have an option that represent the empty string value
                        // ? one way to solve this is
                            // * by providing a new option where the value is an empty string
                     */}
                    <label htmlFor="favColor">What is your Favorite color?</label>
                    <select 
                        id="favColor"
                        value={formData.favColor}
                        onChange={handleChange}
                        name="favColor"
                    >
                        <option value=""> -- Choose -- </option>
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="indigo">Indigo</option>
                        <option value="violet">Violet</option>

                    </select>
                </div>

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
