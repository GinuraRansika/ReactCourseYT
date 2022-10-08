function App() {
    const [starWarsData, setStarWArsData] = React.useState({})
    const [count, setCount] = React.useState(0)
    console.log("Component Rendered") 


    React.useEffect(function() {
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                console.log("effect ran")
                setStarWArsData(data)
            })
    }, [])

    return (
        <main>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
        </main>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);