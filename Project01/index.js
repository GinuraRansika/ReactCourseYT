
const pageContent = (
    <div>
        <div><img src="./img/React-icon.svg.png" width="50px"></img></div>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
);

ReactDOM.render(pageContent, document.getElementById("root"));

/* 
* saving our JSX to a single variable isn't really that common or convenient
* that common way is by creating custom components  
*/