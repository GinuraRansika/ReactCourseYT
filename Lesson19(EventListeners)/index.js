

function App() {
    function handleClick(){
        alert("I was clicked!");
    }

    function mouseHover(){
        alert("I was Hovered!")
    }

    return(
        <div className="container">
            <img src="https://picsum.photos/640/360" onMouseOver={mouseHover} />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))