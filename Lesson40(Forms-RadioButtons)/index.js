function Form() {

    /*
        !How to hook these radio buttons 
            * First we need a place to hold these information in state 
            * You can add another property called employment to the state
            * and radio buttons similar to text inputs so we will get some kind of a text value to them
    */
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email:"",
        comments:"",
        isFriendly: true,
        employment: ""
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

            {/* 
                // * to associate my inputs with the correct piece of state and also make it so that i can
                // * click all of my inputs we need to add the name property 
                // * it should be exactly same as the state property 
                
                // ? each one of these inputs will have its own unique value and  
                // ? this value is what will actually get saved as the value in state 

                // * Next, we need make sure that we listen to the change event
                // * So, I will add my onChange and we could use same handleChange function
            */}

            {/* 
                // * we need to specify what value the state should take on if the radio button is selected or checked (already)
                // ? but we can't do controlled components in the same way tht we did with our inputs by setting the value equal to whatever the current value of state is (value={formData.lastName}) 
                // ! But that doesn't mean we can't control our components that just that radio buttons are controlled in the same way that checkboxes  are controlled
                // * in radio buttons when we are controlling the checked property we don't simply say checked={formData.isFriendly}
                // ? because unlike a checkbox this is not a boolean value but we make it a boolean value
                // * checked={formData.employment === "specific checkbox's value"}
                // * and now react is in charge of the controlling this input rather than the input having its own html state
             */}
             
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
