let outputP = document.getElementById("output")
let pokeURL = 'https://pokeapi.co/api/v2'
let endpoint = '/pokemon/ditto'

let movieURL = '<INSERT URL HERE>'


async function makeGetRequest() {
    let response = await fetch(pokeURL+endpoint)
    outputP.innerText = await response.text()
}

async function sendPostRequest() {
    let movie = {
        title: "The Grand Budapest Hotel",
        description: "2014 Best Picture",
        releaseYear: 2014,
        genre: "Adventure/Drama",
        director: "Wes Anderson",
        posterUrl: "",
        averageRating: 10
    }

    let requestObj = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(movie)
    }

    let response = await fetch(movieURL, requestObj)
    alert(response.status)
}

function promiseChainingExample() {
    fetch("http://nothing-alskjdfgnlasdkdfbnaskdfjhbasdkfjhbasdfkjahsdbf.coimnsldifgjnbsd")
        .then(()=>{alert("THEN CALLBACK")})
        .catch(()=>{alert("CATCH CALLBACK")})
}


