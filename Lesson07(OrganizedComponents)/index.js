import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"



// ! Page is a Parent component
// ! Header, MainContent, Footer are Child component
function App() {
    return(
        <div>
            <Header/>  {/* You can create an instance of the Header component */}
            <MainContent/> {/* You can create an instance of the MainContent component */}
            <Footer/>  {/* You can create an instance of the Footer component */}
        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById("root"))

