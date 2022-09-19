const jokesData = [
    {
        setup: "I got my daughter a fridge for her birthday.",
        punchline: "I can't wait to see her face light up when she opens it."
    },
    {
        setup: "How did the hacker escape the police?",
        punchline: "He just ransomware!"
    },
    {
        setup: "Why don't pirates travel on mountain roads?",
        punchline: "Scurvy."
    },
    {
        setup: "Why do bees stay in the hive in the winter?",
        punchline: "Swarm."
    },
    {
        setup: "What's the best thing about Switzerland?",
        punchline: "I don't know, but the flag is a big plus!"
    }
]

// ! Example 
function App() {
    const colors = [
        <h3>Red</h3>, 
        <h3>Orange</h3>, 
        <h3>Yellow</h3>,
        <h3>Green</h3>,
        <h3>Blue</h3>,
        <h3>Indigo</h3>,
        <h3>Violet</h3>
    ]

    return(
        <div>
            {colors}
        </div>
    )
}


function Joke(props){
    console.log(props)
    return (    
        <div>
            <hr/>
            <h2>Setup : {props.setup}</h2>
            <h6>Punchline : {props.punchline}</h6>
            <hr/>
        </div>
    )
}

console.log(jokesData)
function Jokes() {
    const jokeELements = jokesData.map(joke => {
        return <Joke setup = {joke.setup} punchline={joke.punchline} />
    })
    return(
        <div>
            {jokeELements}
        </div>
    )
}

ReactDOM.render(<Jokes/>,document.getElementById('root'))

/*
    * What does the  `.map()` array method do?
        ? Returns a new array. Whatever gets returned from the callback 
        ? function provided is placed at the same index in the new  array
        ? Usually we take the items from the original array and modify them in some way.

    * WHat do we usually use `.map()` for in React?
        ? Convert an array of raw data into an array of JSX elements that can be displayed on the page.
        

 */