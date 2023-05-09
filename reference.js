//Fetch request - use this to access APIs - can use swapi.dev for the star wars API
let nextPage = ""

fetch(`https://swapi.dev/api/people/`)
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        nextPage = json.next
    })
    .catch((error) => console.error(error));

    function goToNextPage() {
        fetch(`https://swapi.dev/api/people/${nextPage}`) //only needed if large dataset
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            nextPage = json.next
        })
        .catch((error) => console.error(error)); 
    }

<button onclick="goToNextPage">Next</button> //add a button to go to next page if necessary