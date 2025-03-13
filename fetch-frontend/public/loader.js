window.onload = async () => {
    await loadRecipes();

    //handle the form submit
    document.querySelector("button").onclick = handleForm;
}

async function handleForm(event) {
    event.preventDefault(); //stop the default behavior of the event

    //read our form values
    const newRecipe = {
        name: document.querySelector("#name").value,
        ingredients: document.querySelector("#ingredients").value,
        cookingTime: document.querySelector("#cookingTime").value,
        instructions: document.querySelector("#instructions").value
    }
    
    //make a POST request
    const uri = "http://localhost:3000/recipes";
    const config = {
        method: "post",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newRecipe)
    }

    const response = await fetch(uri, config);
    const json = await response.json();

    const list = document.querySelector("#recipe-list");
    renderRecipe(json.data, list);
}

async function loadRecipes() {
    const uri = "http://localhost:3000/recipes";
    const config = {
        method: "get",
        mode: "cors"
    }

    const response = await fetch(uri, config);
    const json = await response.json();
    console.log(response);
    console.log(json);

    renderRecipes(json.data);
}

function renderRecipes(recipes) {
    const list = document.querySelector("#recipe-list");
    for (const recipe of recipes) {
        renderRecipe(recipe, list);
    }

    const table = document.querySelector("#recipe-table");
    const headers = ["Name", "Ingredients", "Cook Time", "Instructions"];

    //create headers
    let tr = document.createElement("tr");
    for (const header of headers) {
        const td = document.createElement("td");
        td.textContent = header;

        tr.appendChild(td);
    }
    table.appendChild(tr);

    //create the rows
    for (const recipe of recipes) {
        const row = document.createElement("tr");

        const values = [recipe.name, recipe.ingredients, recipe.cookingTime, recipe.instructions];

        for (const value of values) {
            addCell(row, value);
        }

        table.appendChild(row);
    }
}

function renderRecipe(recipe, list) {
    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");

    h2.textContent = recipe.name;
    p.textContent = recipe.instructions;
    section.className = "recipe";

    section.appendChild(h2);
    section.appendChild(p);

    list.appendChild(section);
}

function addCell(row, value) {
    const td = document.createElement("td");
    td.textContent = value;
    row.appendChild(td);
}