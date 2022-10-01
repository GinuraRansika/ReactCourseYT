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

