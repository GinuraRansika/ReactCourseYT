function Star(props){
    let starIcon = props.isFilled ?"./images/filled-star.png":"./images/empty-star.png"
    return(
        <img 
            src={starIcon} 
            className="card--favorite"
            onClick={props.handleClick}
        />
    )
}

function App() {
    const [contact, setContact] = React.useState ({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    function toggleFavorite() {
        console.log("Toggle Favorite")
        setContact(prevContact => {
            return {
                    // * You need to copy all of the prevState Properties and copy to the new with the
                    // * the changed value like below
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })
    }
    
    return (
        <main>
            <article className="card">
                <img src="./images/user.jpg" className="card--image" />
                <div className="card--info">

                    {/* //* since Star is not a real dom element onClick won't be converted */}
                    {/* //? below onClick is a custom prop so you can rename it */}
                    {/* //* In here App component is passing this toggleFavorite function to a chjild */}
                    <Star isFilled={contact.isFavorite} handleClick={toggleFavorite}/>

                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
            </article>
        </main>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));