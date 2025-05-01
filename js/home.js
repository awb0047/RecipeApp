// Load recipes from database here
let recipes = [];
fetch('./testdata.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        recipes = data;
        populateRecipes();
    })
    .catch(error => {
        console.error('Failed to load JSON:', error);
    });

function populateRecipes() {
    const recipesDiv = document.getElementById("recipes");
    recipes.forEach((recipeData, index) => {
        const recipe = document.createElement("a");
        recipe.href = `/recipe.html#${recipeData.id}`;
        recipe.className = "card";
        recipe.style.backgroundImage = `url(${recipeData.PictureOfProduct})`;
        recipesDiv.appendChild(recipe);

        // Add blur card over
        const cardContent = document.createElement("div");
        cardContent.className = "recipe-card-content";

        const innerContent = document.createElement("div");
        innerContent.className = "inner-recipe-card-content";

        const title = document.createElement("h1");
        title.id = "title";
        title.textContent = recipeData.Title;

        const cardInfo = document.createElement("div");
        cardInfo.className = "recipe-card-info";

        const cuisine = document.createElement("h4");
        cuisine.textContent = recipeData.Cuisine;

        const price = document.createElement("span");
        price.textContent = "$$$";

        cardInfo.appendChild(cuisine);
        cardInfo.appendChild(price);

        innerContent.appendChild(title);
        innerContent.appendChild(cardInfo);

        cardContent.appendChild(innerContent);

        recipe.appendChild(cardContent);
    });
}