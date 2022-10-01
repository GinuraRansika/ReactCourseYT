function App() {
    const [messages, setMessages] = React.useState(["a", "b" ,"c"])
    return (
        <main>
            {messages.length !== 0 && <h1>You have {messages.length} unread messages!</h1>}

        </main>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

