const express = require("express")
const chatRoute = express.Router()
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();


const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);

//=> Route for General chat bot
chatRoute.post("/generalChat", async(req, res)=>{
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
chatRoute.post("/interviewChat", async(req, res)=>{
  const message = req.body.msg
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "system", content: `Act as a senior developer, you will be taking interview of tech students.
    
    Follow this rules:
    1. Ask only conceptual questions from given tech stacks list [ React, Nodejs, Java] to the user.
    2. First ask user to choose one of the tech stack from given list and then ask question related to that stack.
    3. Don't ask question about experience, only ask about concepts.
    4. You need to ask one question one by one.
    5. Don't ask any question which is already asked.
    6. Don't give list of questions to user.
   ` },
    { role: "user", content: `${message}` }],
    max_tokens: 100,
    temperature:0,
  })
  res.send(response.data.choices[0].message.content)
})


// chatRoute.post("/chatbot", async(req,res)=>{
//   const message = req.body.msg
//   const response = await openai.createChatCompletion({
//     model: "gpt-3.5-turbo",
//     messages: [{ role: "system", content: "Pretend like you are an interviewer name Jarvis and you are taking interview for the role of web developer, ask conceptual questions about react not about experience as if you are receiving answers from a interviewee." }, { role: "user", content: `${message}` }],
//     max_tokens: 100,
//     temperature:0.2,
//   })
//   res.send(response.data.choices[0].message.content)
// })

module.exports = {chatRoute}