/*
    ! Props
        * refers to the properties being passed into a component in order for it 
        * to work correctly, similar to how a function receives parameters: 
        * "from above." A component receiving props is not allowed to modify those props
        * (they are "immutable")
        ? these values should not be changing


    ! State 
         * refers to values that are managed by the component, similar to variables declared
        * inside a function. Any time you have changing values that should be saved / displayed,
        * you'll likely be using state.
        ? these values should not be changing
*/

// ! Example for Props
function addTwoNumber(a, b){
    //* a = 42  don't do this!
    return a + b
}

console.log(addTwoNumber(1,2))

// ! Example for State
/*
    * In react values that are created by the function or the component itself
    * are usually handle with state
*/
function greeting(name){
    const date = new Date();
    const hours = date.getHours()
    const minutes = date.getMinutes()
    var timeOfDay = `${hours} : ${minutes}`
    console.log(timeOfDay)

    let greeting
    if ( 4 <= hours && hours < 12){
        greeting = "Morning"
    } else if ( 12 <= hours && hours < 17){
        greeting = "Afternoon"
    } else if ( 17 <= hours && hours < 20) {
        greeting = "Evening"
    } else {
        greeting = "Night"
    }
    console.log("Good " + greeting + ", " + name + "!") 
}
greeting("Bob")