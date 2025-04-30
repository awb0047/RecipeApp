const recipeId = window.location.hash.substring(1);
console.log(recipeId);

//now just append the text into the elements.
document.getElementById('title').appendChild(document.createTextNode(title));
document.getElementById('content').appendChild(document.createTextNode(content));