function App() {
    const [messages, setMessages] = React.useState(["a", "b", "c"])
    
    let display;
    if(messages.length === 1) {display = <h1>You have {messages.length} unread message!</h1>}
    else if(messages.length === 0) {display = <h1>You're all caught up!</h1>}
    else {display = <h1>You have {messages.length} unread messages!</h1>}

    return (
        <main>
            {/* {messages.length !== 0 ? <h1>You have {messages.length} unread messages!</h1>:<h1>You're all caught up!</h1>} */}
            {display}

            {/*
                  {
                    messages.length === 0 ?
                    <h1>You're all caught up!</h1> :
                    <h1>You have {messages.length} unread 
                    {messages.length > 1 ? "messages" : "message"}</h1>
                  }
             */}
        </main>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
    ! What is "conditional rendering" ?
        * When we want to only sometimes display something on the page based on a condition of some sort

    ! When would you use && ?
        * When you want to either display something or NOT display it 

    ! When would you use a ternary?
        * When you need to decide which thing among 2 options to display 

    ? if you use 'if..else' 'if...else if...else' or 'switch' statements you need to add those outside of the return of your function
*/