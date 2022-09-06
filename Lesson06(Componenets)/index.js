// ! You need to capitalize the component name  
        //? instead of (temporaryName) use (TemporaryName)
// ! When you calling it, You need wrap it in angle brackets 
        //? instead of (TemporaryName()) use (<TemporaryName>)
function TemporaryName() {
    return (
        <div>
            <div><img src="../Project01/img/React-icon.svg.png" width="50px"></img></div>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
};

ReactDOM.render(<TemporaryName/>, document.getElementById("root"));