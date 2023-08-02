const generateMealSuggestion = require('./mealGenerator');

// Function to get user input (you can use other methods to get user input in a web application)
function getUserInput() {
    return new Promise(resolve => {
        //const readline = require('readline').createInterface({
        //    input: process.stdin,
        //    output: process.stdout
        //});

        //readline.question('Enter your meal preference or type "exit" to quit: ', userInput => {
        //    readline.close();
        //    resolve(userInput);
        //});

        const ingredients = document.getElementById('ingredients').value;
        const prompt = `Can you suggest a recipe using these Ingredients: ${ingredients}`;
    });
}

// Main function to generate and display meal suggestions
async function main() {
    console.log('Welcome to the Meal Generator!');
    let userInput;

    do {
        userInput = await getUserInput();

        if (userInput.toLowerCase().trim() !== 'exit') {
            const mealSuggestion = await generateMealSuggestion(userInput);
            console.log('Suggestion:', mealSuggestion);
        }
    } while (userInput.toLowerCase().trim() !== 'exit');

    console.log('Thank you for using the Meal Generator. Goodbye!');
}

main();