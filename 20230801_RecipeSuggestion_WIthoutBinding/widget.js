
 //   function () {
//    let tmpl = document.createElement('template');
//    tmpl.innerHTML = `

//    <head>
//        <title>Recipe Suggestion App</title>
//    </head>
//    <body>
//        <h1>Recipe Suggestion App</h1>
//        <form>
//            <label for="ingredients">Enter Ingredients:</label>
//            <input type="text" id="ingredients" name="ingredients" required>
//            <button type="button" onclick="generateRecipe()">Generate Recipe</button>
//        </form>
//        <div id="recipeOutput"></div>

//        <script src="app.js"></script>
//    </body>

//`;
//const apiKey = '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';
//const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

//function generateRecipe() {
//    const ingredients = document.getElementById('ingredients').value;
//    const prompt = `Can you suggest a recipe using these Ingredients: ${ingredients}`;

//    fetch(apiUrl, {
//        method: 'POST',
//        headers: {
//            'Content-Type': 'application/json',
//            'Authorization': `Bearer ${apiKey}`,
//        },
//        body: JSON.stringify({
//            prompt: prompt,
//            max_tokens: 200, // You can adjust this value based on the desired length of the response.
//        }),
//    })
//    .then(response => response.json())
//    .then(data => displayRecipe(data.choices[0].text))
//    .catch(error => console.error('Error:', error));
//}

//function displayRecipe(recipe) {
//    const outputDiv = document.getElementById('recipeOutput');
//    outputDiv.innerHTML = `<p><strong>Recipe Suggestion:</strong></p><p>${recipe}</p>`;
//};

//const apiKey = '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';
//const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

//function generateRecipe() {
//    const ingredients = document.getElementById('ingredients').value;
//    const prompt = `Can you suggest a recipe using these Ingredients: ${ingredients}`;

//    fetch(apiUrl, {
//        method: 'POST',
//        headers: {
//            'Content-Type': 'application/json',
//            'Authorization': `Bearer ${apiKey}`,
//        },
//        body: JSON.stringify({
//            prompt: prompt,
//            max_tokens: 200, // You can adjust this value based on the desired length of the response.
//        }),
//    })
//        .then(response => response.json())
//        .then(data => displayRecipe(data.choices[0].text))
//        .catch(error => console.error('Error:', error));
//}

//function displayRecipe(recipe) {
//    const outputDiv = document.getElementById('recipeOutput');
//    outputDiv.innerHTML = `<p><strong>Recipe Suggestion:</strong></p><p>${recipe}</p>`;
//};

const axios = require('axios');

// Replace 'YOUR_OPENAI_API_KEY' with your actual API key
const apiKey = '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';
const apiUrl = 'https://api.openai.com/v1/completions';

function generateRecipe(ingredients) {
    const prompt = `Can you suggest a recipe using these Ingredients: ${ingredients}`;

    axios.post(apiUrl, {
        prompt: prompt,
        max_tokens: 200, // You can adjust this value based on the desired length of the response.
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
    })
        .then(response => {
            const recipe = response.data.choices[0].text;
            displayRecipe(recipe);
        })
        .catch(error => console.error('Error:', error.message));
}

function displayRecipe(recipe) {
    console.log('Recipe Suggestion:');
    console.log(recipe);
}

// Example usage:
const ingredients = "chicken, potatoes, carrots, onions";
generateRecipe(ingredients);