/*
-   on the details page retrieve the id from the query string
-   add the id to the URL below, make an API call using the final url and disply the
 name and occupation of the selected character
*/

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

if(id === null) {
    location.href = "/";
}

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
        detailContainer.innerHTML = error;
    }

}

fetchCharacter();

function createHtml(details) {
    detailContainer.innerHTML = `<h1>${details.name}</h1>
                                 <div>Occupation: <b>${details.occupation[0]}</b></div>`;
}