// Lesson Task 3 Question
/*
-   When a user selects a number from the select box, build a number of anchor tags
 (`a` elements) that matches the selected number
-   the anchor tags should link to the details page with the id in the query string
 */


const select = document.querySelector("select");
const listContainer = document.querySelector(".list");

select.addEventListener("change", buildList);

function buildList(event) {
    console.log(event.target.value);

    const amount = event.target.value;

    listContainer.innerHTML = "";

    for(let i = 1; i <= amount; i++) {
        listContainer.innerHTML += `<a class="item" href="details.html?id=${i}">${i}</a>`;
    }
}