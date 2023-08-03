
//OpenAI call
this.on('msgFridge', async (req) => {
    try {
        const id req.data.param1;
        const tx cds.transaction(req);
        const cs = await cds.connect.to('CatalogService');
        //const foods = await cs.run(SELECT.from('Foods', ['Name', 'Quantity', 'UOM']));
        const foods = await cs.run(SELECT.from('Foods', ['Name', 'Quantity', 'UOM']));
        // const items foods.map(food => '${ food.Quantity } ${ food.UOM } of ${ food.Name } ');
        
        const items foods.map(food =>  ${ food.Name });
        const result items.join(',');
        const message = 'I have in my fridge ${result}. I want you to suggest me a ${id} that I can make with these ingredients. I need you to reply ONLY WITH a JSON-format message with 4 nodes: MealPossible with values yes/no if there is any meal that you can suggest, SuggestedMeal where you put the suggested meal name and Quantities node that contains an array with necessary quantities(meal for one) in kg and the ingredient name. Forth node will be Steps which contains all the steps required to make the dish. If the MealPossible node value is no, do not send the other nodes.';
        const { Configuration, OpenAIApi } = require('openai');

        const configuration = new Configuration({
            apikey: "",
            organization: ""
        });

        const openai = new OpenAIApi(configuration);

        const completion = await openal.createChatCompletion({
            model: "gpt-3.5-turbo",
            max_tokens: 1000,
            temperature: 0.3,
            messages: [{ role: "user", content: message }]
        });

        return completion.data.choices[0].message;
    }
    catch (error) {
        console.error('Error fetching entries:', error);
        throw error;
    }
});



//CAP application
const express = require('express');
const cds = require('@sap/cds');
const router = express.Router();

router.delete('/deleteAllFoods', async (req, res) => {
    try {
        const db = await cds.connect.to('db');
        const Foods = db.entities.Foods;

        await Foods.deleteAll();
        
        res.sendStatus(204); // Return success status code
        
        
    } catch (error) {
        res.status(500).json({ error: error.message }); // Return error status code and message
    }
});

module.exports = router;


