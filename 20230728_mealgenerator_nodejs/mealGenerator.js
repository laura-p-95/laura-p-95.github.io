const axios = require('axios');

// Replace 'YOUR_OPENAI_API_KEY' with your actual API key
const apiKey = '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';
const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-003/completions';

async function generateMealSuggestion(userInput) {
    try {
        const response = await axios.post(apiUrl, {
            prompt: userInput,
            max_tokens: 500, // Adjust the number of tokens as needed for the response length
            temperature: 0.7
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            }
        });

        // Parse the API response and extract the suggested meal information
        const apiResponse = response.data.choices[0].text.trim();
        const mealPossible = apiResponse.includes('MealPossible: yes');
        const suggestedMeal = mealPossible ? apiResponse.match(/SuggestedMeal: (.*)/)?.[1] : null;
        const quantities = mealPossible ? apiResponse.match(/Quantities: (.*)/)?.[1] : null;
        const steps = mealPossible ? apiResponse.match(/Steps: (.*)/)?.[1] : null;

        // Build the JSON object based on the extracted information
        const result = {
            MealPossible: mealPossible ? 'yes' : 'no'
        };

        if (mealPossible) {
            result.SuggestedMeal = suggestedMeal;
            result.Quantities = quantities.split(',').map(item => item.trim());
            result.Steps = steps.split(',').map(item => item.trim());
        }

        return JSON.stringify(result);
    } catch (error) {
        console.error('Error generating meal suggestion:', error.message);
        return '{"MealPossible": "no"}'; // Return a JSON object with MealPossible: no in case of an error.
    }
}

module.exports = generateMealSuggestion;