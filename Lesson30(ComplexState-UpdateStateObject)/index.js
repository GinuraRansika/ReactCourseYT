function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    let starIcon = contact.isFavorite?"./images/filled-star.png":"./images/empty-star.png"
    function toggleFavorite() {
        console.log("Toggle Favorite")
        setContact(prevContact => {
            return{
                    // * You need to copy all of the prevState Properties and copy to the new with the
                    // * the changed value like below
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })
    }

    /**
     * ? Above spread operator method is same like the below method
     *  
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
        isFavorite: !prevContact.isFavorite
     */
    
    return (
        <main>
            <article className="card">
                <img src="./images/user.jpg" className="card--image" />
                <div className="card--info">
                    <img 
                        src={starIcon} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
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