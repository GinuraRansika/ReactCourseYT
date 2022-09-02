// * Vanilla JavaScript ( Imperative Way )
const h1 = document.createElement("h1");
h1.textContent = " This is an imperative way to program";
h1.className = "header";
document.getElementById("root-imperative").append(h1);

// * React ( Declarative Way )
ReactDOM.render(<h1 className="header">This is a Declarative way to Program</h1>,document.getElementById("root-declarative"));