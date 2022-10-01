function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)
    console.log(isShown)

    function toggleShown(){
        setIsShown(prevState => !prevState)
    }

    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {/* //* will show if the isShown is true */}
            {isShown && <p>{props.punchline}</p> }
            <button onClick={toggleShown}>Show Punchline: {isShown? "true":"false"}</button>
            <hr/>
        </div>
    )
}


function App() {
    const jokeElements = jokesData.map(joke => {
        return(
            <Joke
                key={joke.id}
                setup={joke.setup}
                punchline={joke.punchline}
            />
        )
    })

    return (
        <main>
            {jokeElements}
        </main>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




const jokesData = [
    {
        id: 1,
        setup: "I got my daughter a fridge for her birthday.",
        punchline: "I can't wait to see her face light up when she opens it."
    },
    {
        id: 2,
        setup: "How did the hacker escape the police?",
        punchline: "He just ransomware!"
    },
    {
        id: 3,
        setup: "Why don't pirates travel on mountain roads?",
        punchline: "Scurvy."
    },
    {
        id: 4,
        setup: "Why do bees stay in the hive in the winter?",
        punchline: "Swarm."
    },
    {
        id: 5,
        setup: "What's the best thing about Switzerland?",
        punchline: "I don't know, but the flag is a big plus!"
    }
]