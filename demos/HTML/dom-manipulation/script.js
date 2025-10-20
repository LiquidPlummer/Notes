// Dom Manipulation

//First we need an element to work with.
let body = document.getElementById("myBody")

//Let's create a new element.
let stuff = document.createElement('h1')
stuff.innerText = "This is stuff..."


//Next we define a couple functions to do our manipulation.
function addStuff() {
    //This will append the new element as a child of body, after its other children.
    body.appendChild(stuff)
}

function removeStuff() {
    //This will find the instance of the element in the DOM tree and remove it.
    body.removeChild(stuff)
}


