/* 
* React team create a syntax that's called JSX
* JSX made it. so, that react was very declarative instead of imperative
*/

// * Vanilla JavaScript ( Imperative Way )
const h1 = document.createElement("h1");
h1.textContent = " This is an imperative way to program";
h1.className = "header";
console.log(h1);
document.getElementById("root-imperative").append(h1);


// * React JSX ( Declarative Way ) 
const element = <h1 className="header">This is JSX</h1>;
console.log(element);
ReactDOM.render(element,document.getElementById("root-declarative"));

/*
 * JSX Object
    {$$typeof: Symbol(react.element), type: 'h1', key: null, ref: null, props: {…}, …}
    $$typeof: Symbol(react.element)
    key: null
    props: {className: 'header', children: 'This is JSX'}
    ref: null
    type: "h1"
    _owner: null
    _store: {validated: false}
    _self: null
    _source: null
    [[Prototype]]: Object


    * JSX is kind of like a function 
    * that when it's run 
    * returns us objects that react can interpret  
    * and use to create actual elements  
    * that get put on the webpage for us
 */

// ! With JSX we need to make sure that we are only returning a single parent element
/*
 ? const element = <h1 className="header">This is JSX</h1> <p>This is a paragraph</p>  - WRONG (CANNOT BE DONE IN JSX)
 ? const element = <div> <h1 className="header">This is JSX</h1> <p>This is a paragraph</p> </div> - RIGHT (ONE PARENT ELEMENT)
*/  


const town =( 
<div>
    <h1 className="header">What is your home city?</h1>
    <p>My home city is  Los Angeles</p>
</div>
);

ReactDOM.render(town, document.getElementById("root"));