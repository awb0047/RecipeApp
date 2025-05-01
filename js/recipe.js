const recipeId = window.location.hash.substring(1);
let recipe = null;
fetch('http://localhost:3000/recipes')
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
        // Set header values using data returned from the database
        document.getElementById('title').textContent = recipe.Title;
        document.getElementById('cuisine').textContent = recipe.Cuisine;
        // You might display the meal type or difficulty/time if desired. Here we default some values.
        document.getElementById('time').textContent = recipe.TimeToPrepare || "N/A";
        document.getElementById('difficulty').textContent = recipe.Difficulty || "Medium";
        document.getElementById('servings').textContent = recipe.ServingSize || "N/A";
        // Use Description for a summary; Instructions is used later for details
        document.getElementById('description').textContent = recipe.Description;
    
        // Set the background image using PictureOfProduct
        document.getElementById('card').style.backgroundImage = `url("${recipe.PictureOfProduct}")`;
    
        // Price may not be in the database – default value
        document.getElementById('price').textContent = "$$$";
    
        // Populate ingredients list.
        const ingredientsList = document.getElementById('ingredients');
        // If Ingredients is stored as JSON array from MySQL, it will be parsed into an array automatically.
        if (Array.isArray(recipe.Ingredients)) {
            recipe.Ingredients.forEach(ingredientObj => {
                const listItem = document.createElement('li');
                listItem.textContent = ingredientObj.item; // Assumes the JSON object has an 'item' key.
                ingredientsList.appendChild(listItem);
            });
        } else if (typeof recipe.Ingredients === "string") {
            // Fallback if stored as a comma-separated string
            recipe.Ingredients.split(',').forEach(ingredient => {
                const listItem = document.createElement('li');
                listItem.textContent = ingredient.trim();
                ingredientsList.appendChild(listItem);
            });
        }
    
        // Populate instructions list.
        const instructionsList = document.getElementById('instructions');
        // If Instructions is stored as JSON array.
        if (Array.isArray(recipe.Instructions)) {
            recipe.Instructions.forEach(instruction => {
                const listItem = document.createElement('li');
                listItem.textContent = instruction;
                instructionsList.appendChild(listItem);
            });
        } else if (typeof recipe.Instructions === "string") {
            recipe.Instructions.split('\n').forEach(instruction => {
                const listItem = document.createElement('li');
                if (instruction.trim()) {
                    listItem.textContent = instruction.trim();
                    instructionsList.appendChild(listItem);
                }
            });
        }
    }

    const instructionsList = document.getElementById('instructions');
    recipe.instructions.split('\n').forEach(instruction => {
        const listItem = document.createElement('li');
        if (instruction.trim()) {
            listItem.textContent = instruction.trim();
            instructionsList.appendChild(listItem);
        }
    });