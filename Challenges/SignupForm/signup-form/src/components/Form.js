import React from "react";

function Form(){
    const [formData, setFormData] = React.useState({
        email:"",
        password: "",
        confirmedPassword:"",
        newsletter: false,
    })

    function handleChange(event){
        // * Target represents the element that was modified in the event
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value,
            }
        })
    }

    function submitHandler(event){
        event.preventDefault()
        if(formData.password !== formData.confirmedPassword){
            console.log("Passwords don't match!")
        }else{
            console.log("Successfully signed Up!")
            if(formData.newsletter){
                console.log("Thanks for signing up for newsletter!")
            }
        }
    }

    return( 
        <div className="form-container">
            <form onSubmit={submitHandler}>
                <input 
                    type="email"
                    className="text-input"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    className="text-input"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    className="text-input"
                    placeholder="Confirm Password"
                    name="confirmedPassword"
                    value={formData.confirmedPassword}
                    onChange={handleChange}
                />
                <div className="checkbox-container">
                    <input
                        type="checkbox"
                        id="joinNewsletter"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleChange}
                    />
                    <label htmlFor="joinNewsletter">I want to join the newsletter</label>
                </div>

                <button>Sign Up</button>     
            </form>

        </div>
    )

}

export default Form;