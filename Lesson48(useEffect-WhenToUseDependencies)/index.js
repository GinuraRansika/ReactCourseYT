function App() {
    const [starWarsData, setStarWArsData] = React.useState({})
    const [count, setCount] = React.useState(1)
    console.log("Component Rendered") 


    React.useEffect(function() {
        const url = "https://swapi.dev/api/people/" + count;
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                console.log("effect ran")
                setStarWArsData(data)
            })
    }, [count])

    return (
        <main>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </main>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);