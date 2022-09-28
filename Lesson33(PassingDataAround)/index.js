function Body(props) {
    return (
        <section>
            <h1>Welcome back, {props.user} !</h1>
        </section>
    )
}

function Header(props) {
    return (
        <header>
            <p>Current user: {props.user}</p>
        </header>
    )
}

/*
    * If you want to use the state in same level components 
    ! You need level up the state and pass the data as props
*/

function App() {
    const [user, setUser] = React.useState("Ginura")
    return (
        <main>
            <Header user={user} />
            <Body user={user} />
        </main>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
