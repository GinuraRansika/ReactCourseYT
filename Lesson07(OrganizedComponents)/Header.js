
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
}

// ! To send the component to the outside of the file

/* 
    * To export it you can add 
        ? 1. export default Header like below or
        ? 2. export default function Header() {...} 
*/
export default Header