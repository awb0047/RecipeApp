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

        const cuisineContainer = document.createElement("div");
        cuisineContainer.className = "recipe-rating";

        const cuisine = document.createElement("h4");
        cuisine.textContent = recipeData.Cuisine;

        const cuisineIcon = document.createElement("img");
        cuisineIcon.src = "./assets/pin.png";
        cuisineIcon.alt = "Location Icon";

        cuisineContainer.appendChild(cuisineIcon);
        cuisineContainer.appendChild(cuisine);

        const ratingContainer = document.createElement("div");
        ratingContainer.className = "recipe-rating";

        const rating = document.createElement("span");
        rating.textContent = recipeData.Rating;

        const ratingIcon = document.createElement("img");
        ratingIcon.src = "./assets/star.png";
        ratingIcon.alt = "Rating Icon";

        ratingContainer.appendChild(ratingIcon);
        ratingContainer.appendChild(rating);

        cardInfo.appendChild(cuisineContainer);
        cardInfo.appendChild(ratingContainer);

        innerContent.appendChild(title);
        innerContent.appendChild(cardInfo);

        cardContent.appendChild(innerContent);

        recipe.appendChild(cardContent);
    });
}