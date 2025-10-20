// There is already an event listener on the div1 node, placed there in the HTML. That one is 
// listening for 'click' events, and uses the default bubbling mode.

// This event listener looks for click events in the capturing phase
let captureDiv = document.getElementById("captureDiv")
captureDiv.addEventListener('click', alertFunction, true)

// This event listener looks for click events in the bubbling phase
let bubbleDiv = document.getElementById("bubbleDiv")
bubbleDiv.addEventListener('click', alertFunction, false)

// This is the function that the event listeners call when they hear about an event
function alertFunction(e) {
    alert("Event!")

    // This function will stop event propagation so the event doesn't continue to other nodes
    e.stopPropagation() 

    // This function will stop event propagation immediately so that it doesn't continue
    // even to other event listeners on this node, let alone other nodes.
    e.stopImmediatePropagation()
}
