-- Create the database and use it
CREATE DATABASE IF NOT EXISTS recipe_app;
USE recipe_app;

-- Drop the recipes table if it exists and create a new one
DROP TABLE IF EXISTS recipes;
CREATE TABLE recipes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    Meal VARCHAR(100),
    Difficulty VARCHAR(50),
    TimeToPrepare VARCHAR(50),
    Cuisine VARCHAR(100) NOT NULL,
    Ingredients JSON,
    ServingSize INT,
    Description TEXT,
    Instructions JSON,
    PictureOfProduct VARCHAR(255),
    Rating DECIMAL(3,2),
    NutritionalInfo JSON
);

-- Insert sample data from testdata.json (all recipes)
INSERT INTO recipes (Title, Meal, Difficulty, TimeToPrepare, Cuisine, Ingredients, ServingSize, Description, Instructions, PictureOfProduct, Rating, NutritionalInfo) VALUES
(
  'Scrambled Eggs with Toast',
  'Breakfast',
  'Easy',
  '15 minutes',
  'American',
  JSON_ARRAY(
      JSON_OBJECT('item', 'Eggs', 'cost', 1.5),
      JSON_OBJECT('item', 'Bread', 'cost', 1.0),
      JSON_OBJECT('item', 'Butter', 'cost', 0.5),
      JSON_OBJECT('item', 'Salt', 'cost', 0.1),
      JSON_OBJECT('item', 'Pepper', 'cost', 0.1)
  ),
  2,
  'Classic scrambled eggs with toast.',
  JSON_ARRAY(
      'Crack the eggs into a bowl and whisk with salt and pepper.',
      'Heat butter in a skillet over medium heat.',
      'Pour the eggs into the skillet and stir until cooked.',
      'Toast the bread and serve with the scrambled eggs.'
  ),
  'https://www.budgetbytes.com/wp-content/uploads/2024/09/Scrambled-Eggs-Close.jpg',
  4.50,
  JSON_OBJECT('Calories', 250, 'Protein', '12g', 'Carbohydrates', '20g', 'Fat', '12g')
),
(
  'Spaghetti Bolognese',
  'Lunch',
  'Medium',
  '30 minutes',
  'Italian',
  JSON_ARRAY(
      JSON_OBJECT('item', 'Pasta', 'cost', 2.0),
      JSON_OBJECT('item', 'Tomato Sauce', 'cost', 1.5),
      JSON_OBJECT('item', 'Ground Beef', 'cost', 4.0),
      JSON_OBJECT('item', 'Garlic', 'cost', 0.5),
      JSON_OBJECT('item', 'Parmesan Cheese', 'cost', 1.5)
  ),
  4,
  'A hearty spaghetti Bolognese with rich tomato sauce.',
  JSON_ARRAY(
      'Cook the pasta according to package instructions.',
      'In a skillet, cook the ground beef until browned.',
      'Add garlic and tomato sauce to the skillet and simmer.',
      'Serve the sauce over the pasta and top with Parmesan cheese.'
  ),
  'https://www.tamingtwins.com/wp-content/uploads/2025/01/spaghetti-bolognese-10.jpg',
  4.70,
  JSON_OBJECT('Calories', 600, 'Protein', '25g', 'Carbohydrates', '70g', 'Fat', '20g')
),
(
  'Chicken Fajitas',
  'Dinner',
  'Medium',
  '45 minutes',
  'Mexican',
  JSON_ARRAY(
      JSON_OBJECT('item', 'Chicken Breast', 'cost', 5.0),
      JSON_OBJECT('item', 'Tortillas', 'cost', 2.0),
      JSON_OBJECT('item', 'Bell Peppers', 'cost', 1.5),
      JSON_OBJECT('item', 'Onion', 'cost', 0.5),
      JSON_OBJECT('item', 'Cheese', 'cost', 1.5),
      JSON_OBJECT('item', 'Sour Cream', 'cost', 1.0),
      JSON_OBJECT('item', 'Taco Seasoning', 'cost', 0.5)
  ),
  4,
  'A flavorful chicken fajitas dinner with fresh vegetables and warm tortillas.',
  JSON_ARRAY(
      'Slice the chicken breast, bell peppers, and onion into strips.',
      'Heat a large skillet over medium-high heat and cook the chicken until browned.',
      'Add the bell peppers, onion, and taco seasoning to the skillet and cook until the vegetables are tender.',
      'Warm the tortillas in a separate pan or microwave.',
      'Assemble the fajitas by placing the chicken and vegetables onto the tortillas.',
      'Top with cheese and sour cream, then serve.'
  ),
  'https://feelgoodfoodie.net/wp-content/uploads/2024/08/Chicken-Fajitas-16.jpg',
  4.80,
  JSON_OBJECT('Calories', 450, 'Protein', '30g', 'Carbohydrates', '35g', 'Fat', '18g')
),
(
  'Apple Slices with Peanut Butter',
  'Snack',
  'Easy',
  '10 minutes',
  'American',
  JSON_ARRAY(
      JSON_OBJECT('item', 'Apple', 'cost', 0.5),
      JSON_OBJECT('item', 'Peanut Butter', 'cost', 1.0)
  ),
  1,
  'A quick and healthy apple slices with peanut butter snack.',
  JSON_ARRAY(
      'Slice the apple into wedges.',
      'Spread peanut butter on each slice and serve.'
  ),
  'https://images.heb.com/is/image/HEBGrocery/Large/apple-slices-with-peanut-butter-snack-recipe-1.jpg',
  4.60,
  JSON_OBJECT('Calories', 200, 'Protein', '6g', 'Carbohydrates', '25g', 'Fat', '8g')
),
(
  'French Vanilla Custard Tart',
  'Dessert',
  'Medium',
  '1 hour',
  'French',
  JSON_ARRAY(
      JSON_OBJECT('item', 'Flour', 'cost', 1.0),
      JSON_OBJECT('item', 'Butter', 'cost', 1.5),
      JSON_OBJECT('item', 'Sugar', 'cost', 1.0),
      JSON_OBJECT('item', 'Eggs', 'cost', 1.5),
      JSON_OBJECT('item', 'Vanilla Extract', 'cost', 0.5),
      JSON_OBJECT('item', 'Milk', 'cost', 1.0)
  ),
  6,
  'A classic French vanilla custard dessert.',
  JSON_ARRAY(
      'Preheat the oven to 350°F (175°C).',
      'Mix flour, sugar, and butter to form a dough.',
      'Press the dough into a tart pan and bake for 15 minutes.',
      'Whisk eggs, milk, and vanilla extract to make the custard filling.',
      'Pour the custard into the tart shell and bake for 30 minutes.',
      'Cool before serving.'
  ),
  'https://simmeringstarfruit.com/wp-content/uploads/2024/02/flan-patisserie-1c.jpeg?w=1024',
  4.90,
  JSON_OBJECT('Calories', 300, 'Protein', '8g', 'Carbohydrates', '35g', 'Fat', '12g')
),
(
  'Breakfast Burrito',
  'Breakfast',
  'Easy',
  '10 minutes',
  'Mexican',
  JSON_ARRAY(
      JSON_OBJECT('item', 'Tortilla', 'cost', 0.5),
      JSON_OBJECT('item', 'Eggs', 'cost', 1.5),
      JSON_OBJECT('item', 'Cheese', 'cost', 1.0),
      JSON_OBJECT('item', 'Salsa', 'cost', 1.0)
  ),
  1,
  'A quick breakfast burrito with eggs and cheese.',
  JSON_ARRAY(
      'Scramble the eggs in a skillet.',
      'Warm the tortilla in a pan or microwave.',
      'Place the eggs, cheese, and salsa on the tortilla.',
      'Roll up the tortilla and serve.'
  ),
  'https://images.themodernproper.com/production/posts/BreakfastBurritos_13.jpg?w=1200&h=1200&q=60&fm=jpg&fit=crop&dm=1712004278&s=744bbf8f96f8f7b3cc1ebf5c7c614007',
  4.70,
  JSON_OBJECT('Calories', 300, 'Protein', '15g', 'Carbohydrates', '20g', 'Fat', '15g')
),
(
  'Vegetable Fried Rice',
  'Lunch',
  'Easy',
  '20 minutes',
  'Asian',
  JSON_ARRAY(
      JSON_OBJECT('item', 'Rice', 'cost', 1.0),
      JSON_OBJECT('item', 'Soy Sauce', 'cost', 0.5),
      JSON_OBJECT('item', 'Eggs', 'cost', 1.5),
      JSON_OBJECT('item', 'Green Onions', 'cost', 0.5),
      JSON_OBJECT('item', 'Carrots', 'cost', 0.5)
  ),
  2,
  'A simple fried rice dish with vegetables and eggs.',
  JSON_ARRAY(
      'Cook the rice and let it cool.',
      'Scramble the eggs in a skillet and set aside.',
      'Stir-fry the carrots and green onions in the skillet.',
      'Add the rice and soy sauce, then mix in the scrambled eggs.',
      'Serve hot.'
  ),
  'https://omnivorescookbook.com/wp-content/uploads/2023/06/230515_Vegetable-Fried-Rice_550.jpg',
  4.60,
  JSON_OBJECT('Calories', 350, 'Protein', '10g', 'Carbohydrates', '50g', 'Fat', '10g')
),
(
  'Classic Lasagna',
  'Dinner',
  'Hard',
  '1 hour 30 minutes',
  'Italian',
  JSON_ARRAY(
      JSON_OBJECT('item', 'Lasagna Noodles', 'cost', 2.0),
      JSON_OBJECT('item', 'Ground Beef', 'cost', 4.0),
      JSON_OBJECT('item', 'Tomato Sauce', 'cost', 2.0),
      JSON_OBJECT('item', 'Ricotta Cheese', 'cost', 3.0),
      JSON_OBJECT('item', 'Mozzarella Cheese', 'cost', 2.0),
      JSON_OBJECT('item', 'Parmesan Cheese', 'cost', 1.5),
      JSON_OBJECT('item', 'Garlic', 'cost', 0.5)
  ),
  6,
  'A rich and cheesy lasagna with layers of meat and sauce.',
  JSON_ARRAY(
      'Cook the lasagna noodles according to package instructions.',
      'Brown the ground beef in a skillet and add garlic and tomato sauce.',
      'Layer the noodles, meat sauce, ricotta, and mozzarella in a baking dish.',
      'Repeat the layers and top with Parmesan cheese.',
      'Bake at 375°F (190°C) for 45 minutes.',
      'Let cool for 10 minutes before serving.'
  ),
  'https://hips.hearstapps.com/hmg-prod/images/classic-lasagna-secondary-6430791f9451c.jpg',
  4.90,
  JSON_OBJECT('Calories', 600, 'Protein', '30g', 'Carbohydrates', '40g', 'Fat', '30g')
),
(
  'Yogurt Parfait',
  'Snack',
  'Easy',
  '5 minutes',
  'American',
  JSON_ARRAY(
      JSON_OBJECT('item', 'Yogurt', 'cost', 1.0),
      JSON_OBJECT('item', 'Granola', 'cost', 1.0),
      JSON_OBJECT('item', 'Berries', 'cost', 2.0)
  ),
  1,
  'A quick and healthy yogurt parfait with granola and berries.',
  JSON_ARRAY(
      'Layer yogurt, granola, and berries in a glass.',
      'Repeat the layers and serve immediately.'
  ),
  'https://www.thecountrycook.net/wp-content/uploads/2024/03/thumbnail-Yogurt-Parfaits-scaled.jpg',
  4.80,
  JSON_OBJECT('Calories', 200, 'Protein', '8g', 'Carbohydrates', '30g', 'Fat', '5g')
),
(
  'Homemade Brownies',
  'Dessert',
  'Medium',
  '1 hour',
  'American',
  JSON_ARRAY(
      JSON_OBJECT('item', 'Flour', 'cost', 1.0),
      JSON_OBJECT('item', 'Sugar', 'cost', 1.0),
      JSON_OBJECT('item', 'Butter', 'cost', 1.5),
      JSON_OBJECT('item', 'Cocoa Powder', 'cost', 1.0),
      JSON_OBJECT('item', 'Eggs', 'cost', 1.5),
      JSON_OBJECT('item', 'Vanilla Extract', 'cost', 0.5)
  ),
  8,
  'Rich and fudgy homemade brownies.',
  JSON_ARRAY(
      'Preheat the oven to 350°F (175°C).',
      'Mix flour, sugar, cocoa powder, and butter in a bowl.',
      'Add eggs and vanilla extract and stir until smooth.',
      'Pour the batter into a greased baking pan.',
      'Bake for 30 minutes and let cool before cutting into squares.'
  ),
  'https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2020/07/Homemade-Bronwies-square-1200.jpg',
  4.90,
  JSON_OBJECT('Calories', 300, 'Protein', '5g', 'Carbohydrates', '40g', 'Fat', '15g')
);

-- Create a table for user login information
DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Optionally, insert a sample user (note: in a production system, passwords should be stored hashed)
INSERT INTO users (username, password, email) VALUES
('testuser', 'password123', 'testuser@example.com');
