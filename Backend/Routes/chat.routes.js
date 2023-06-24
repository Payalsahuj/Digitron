const express = require("express")
const chatRoute = express.Router()
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();


const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);

//=> Route for General chat bot
chatRoute.post("/generalChat", async (req, res) => {
  const message = req.body.msg
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${message}.`,
    max_tokens: 100,
    temperature: 0,
  })
  res.send(response.data.choices[0].text)
})

//=> Route for Interview chat bot
chatRoute.post("/interviewChat", async (req, res) => {
  const message = req.body.msg
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Pretend like you are an interviewer name Batman and you are taking interview for the role of web developer, ask conceptual questions about react not about experience as if you are receiving answers from a interviewee. interviewee: ${message}.`,
    max_tokens: 100,
    temperature: 0,
  })
  res.send(response.data.choices[0].text)
})

module.exports = { chatRoute }