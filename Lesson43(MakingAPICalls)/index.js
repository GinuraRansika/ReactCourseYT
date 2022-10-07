/*
    * Very common thing you'll need to do in react is interact with api that lives out side of your application 
    * usually you're doing is either requesting information from an API or sometimes submitting information to an API 
    * whenever you're requesting information from an API in react usually you want to display or use that information somehow
    ! So, Getting data from an API in React consists of essentially 2 parts,
        ? 1.) First of all you need get the data
            * That would be using something like (fetch) or another tool for getting data like (axios)
        ? 2.) Second step would be to then take that data and save it to state
            * Once it's saved in state your application can interact with it, it can display it on the screen and other things
*/


function App() {
    const [starWarsData, setStarWArsData] = React.useState({})
    console.log("Component Rendered")

    /* 
        * Let's do a fetch request to the star wars API 
            ? this is a simple API that will get us some info about star wars, characters, planets and movies stuff like that
        * then resolve the promise that i get back from fetch it will receive a response which will be json, 
        * I want to turn that into a javascript object that i can use
        * Then with that data (let's console.log() it for now)
    */

    /*
        ! The reason we were stuck in an infinite loop
            * is because this fetch lives on sort of the top level of our component 
            * Because of that anytime the component renders it's going to call fetch
            * and every time it calls fetch it's going to set the star wars data which is updating our state 
            * and therefor causing react to re-render this component 
            * eg :
                ? re-render this component and then
                ? it's running fetch again
                ? setting the state 
                ? re-rendering the component
                ? again calling the fetch 
                ? so on...
    */
    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => {
            console.log(data)

        })
    return (
        <main>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </main>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);