const { config } = require('dotenv');
const express = require('express');
const openai = require('openai');
require("dotenv").config();





const app = express();
const apiKey = process.env.OPENAI_API_KEY;
openai.api_key = apiKey;




// Serve static files in a public directory
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




// Render the interview form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/interview.html');
});

// Handle form submission
app.post('/submit', async (req, res) => {
  const question = req.body.question;
  const answer = req.body.answer;

  const prompt = `
    You are providing feedback on the interview response of a candidate.
    ---
    Interview Question: ${question}
    Candidate's Response: ${answer}
    ---
    Feedback:
  `;

  const parameters = {
    engine: 'davinci',
    prompt: prompt,
    max_tokens: 100,
    temperature: 0.5,
    n: 1,
    stop: '\n'
  };

  try {
    const { choices } = await openai.completions.create(parameters);
    const feedback = choices[0].text.trim();
    res.send(feedback);
  } catch (error) {
    console.log('Error analyzing interview response:', error);
    res.status(500).send('Unable to generate feedback at the moment. Please try again later.');
  }
});






// Start the server
app.listen(process.env.port, () => {
  console.log("**************Connected to DB***************");
});








// ****************************************************************************************

// mongoURL= mongodb+srv://krunalgurao:krunalgurao@digitron.zojf4xp.mongodb.net/Digitron?retryWrites=true&w=majority
// port = 0619


// *********************************************************************************************