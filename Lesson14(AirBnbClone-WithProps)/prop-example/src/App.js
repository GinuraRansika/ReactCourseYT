import './App.css';
import './index.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

function App() {
  return (
    <div className="App">
      <div className='website'>
        <Navbar/>
        <Hero/>
        <div className='cards-container'>
          <Card
              img = {require('./images/card1.png')}
              rating = {5.0}
              reviewCount = {6}
              country = "USA"
              title = "Life Lessons with Katie Zaferes"
              price = {136}
          />
          <Card
              img = {require('./images/card2.png')}
              rating = {5.0}
              reviewCount = {30}
              country = "USA"
              title = "Learn wedding photography"
              price = {126}
          />
          <Card
              img = {require('./images/card3.jpeg')}
              rating = {4.8}
              reviewCount = {2}
              country = "USA"
              title = "Group Mountain Bike"
              price = {130}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
