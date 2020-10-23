// get the query string
const queryString = document.location.search;

const params = new URLSearchParams(queryString);

// get the id from the query string
const id = params.get("id");

// if the id is null (doesn't exist) redirect to the home page
if (id === null) {
    location.href = "/";
}

// create the url by addin the id to the end
const url = "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/breakingbad/" + id;

const idContainer = document.querySelector(".id");
const detailContainer = document.querySelector(".details");

idContainer.innerHTML = id;

async function fetchCharacter() {
    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHtml(details);
    } catch (error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);
    }
}

fetchCharacter();

function createHtml(details) {
    detailContainer.innerHTML = `<h1>${details.name}</h1>   
                                 <div>Occupation: <b>${details.occupation[0]}</b></div>`;
}
