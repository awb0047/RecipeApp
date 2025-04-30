const recipeId = window.location.hash.substring(1);

//now just append the text into the elements.
document.getElementById('title').textContent = "Caramelized Tomato Pasta";
document.getElementById('time').textContent = "1 hour";
document.getElementById('difficulty').textContent = "Moderate";
document.getElementById('rating').textContent = "4.8";
document.getElementById('description').textContent = "If you have a can or two of tomato paste collecting dust in your pantry, look no further than this five-ingredient pasta. It unlocks the power of the humble staple, caramelizing it in a hot pan with olive oil, garlic, and red pepper flakes until it becomes rust-colored, deeply rich, and intensely savory. Combined with starchy pasta water, it magically transforms into a luscious tomato sauce you’ll have thought cooked slowly on the stove all day.";

const ingredientsList = document.getElementById('ingredients');
for (let i = 1; i <= 10; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `Test ingredient ${i}`;
    ingredientsList.appendChild(listItem);
}

const instructionsList = document.getElementById('instructions');
for (let i = 1; i <= 10; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `Instruction ${i}`;
    instructionsList.appendChild(listItem);
}