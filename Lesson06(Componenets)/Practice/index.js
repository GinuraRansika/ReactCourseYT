function MainContent() {
    return(
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer if I know React</li>
            </ol>
        </div>
    )
};

function Header() {
    return(
        <header>
            <nav className="header-nav">
                <img src="../../Project01/img/React-icon.svg.png" className="nav-logo"></img>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
};

function Footer() {
    return (
        <footer>
             <small>@2021 De Seram development. All rights reserved.</small>
        </footer>
    )
};

// ! Page is a Parent component
// ! Header, MainContent, Footer are Child component
function Page() {
    return(
        <div>
            <Header/>  {/* You can create an instance of the Header component */}
            <MainContent/> {/* You can create an instance of the MainContent component */}
            <Footer/>  {/* You can create an instance of the Footer component */}
        </div>
    )
};


ReactDOM.render(<Page/>, document.getElementById("root"));




// ? Don't add everything in one component, Divide those into separate components
function DoNot(){
    return(
        <div>
            <header>
                <nav>
                    <img src="../../Project01/img/React-icon.svg.png" width="40px"></img>
                </nav>
            </header>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer if I know React</li>
            </ol>
            <footer>
                <small>@2021 De Seram development. All rights reserved.</small>
            </footer>
        </div>
    )
}