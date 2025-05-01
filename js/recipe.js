const recipeId = window.location.hash.substring(1);
let recipe = null;
fetch('./testdata.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        recipe = data.find(r => r.id === parseInt(recipeId));
        if (recipe) {
            populateRecipe();
        } else {
            console.error('Recipe not found');
        }
    })
    .catch(error => {
        console.error('Failed to load JSON:', error);
    });

function populateRecipe() {
    document.getElementById('title').textContent = recipe.Title;
    document.getElementById('cuisine').textContent = recipe.Cuisine;
    document.getElementById('price').textContent = "$$$";
    document.getElementById('card').style.backgroundImage = `url(${recipe.PictureOfProduct})`;
    document.getElementById('time').textContent = recipe.TimeToPrepare;
    document.getElementById('difficulty').textContent = recipe.Difficulty;
    document.getElementById('servings').textContent = recipe.ServingSize;
    document.getElementById('description').textContent = recipe.Description;

    const ingredientsList = document.getElementById('ingredients');
    recipe.Ingredients.forEach(ingredient => {
        const listItem = document.createElement('li');
        listItem.textContent = ingredient.item;
        ingredientsList.appendChild(listItem);
    });

    const instructionsList = document.getElementById('instructions');
    recipe.Instructions.forEach(instruction => {
        const listItem = document.createElement('li');
        listItem.textContent = instruction;
        instructionsList.appendChild(listItem);
    });
}