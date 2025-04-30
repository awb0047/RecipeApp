// Load recipes from database here

// Find recipes div and add children
const recipesDiv = document.getElementById("recipes");
for (let i = 1; i <= 3; i++) {
    const recipe = document.createElement("a");
    recipe.href = `/recipe.html#${i}`;
    recipe.className = "card";
    const img = document.createElement("img");
    img.src = "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2023-01-Caramelized-Tomato-Paste-Pasta%2F06-CARAMELIZED-TOMATO-PASTE-PASTA-039";
    recipe.appendChild(img);
    recipesDiv.appendChild(recipe);
}