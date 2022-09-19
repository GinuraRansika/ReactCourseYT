import './App.css';
import './index.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Cards from './Cards'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <Cards/>
    </div>
  );
}

export default App;
