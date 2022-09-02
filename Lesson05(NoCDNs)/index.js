const element = (
    <div>
        <h1>My Awesome website in React</h1>
        <h3>Please Mention some of your Hobbies</h3>
        <ol>
            <li>Coding</li>
            <li>Learning New Things</li>
            <li>Watching TV Series</li>
            <li>Playing Badminton</li>
        </ol>
    </div>
);

// ? will show the Object not the values 
document.getElementById("root1").append(element) 

// ? but you can make above object appear (JS Object with value) by
document.getElementById("root2").append(JSON.stringify(element));


ReactDOM.render(element, document.getElementById("root3"));