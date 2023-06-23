const express = require("express")

const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();

const app = express()
app.use(express.json())

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);

//=> Route for General chat bot
app.post("/generalChat", async(req, res)=>{
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
app.post("/interviewChat", async(req, res)=>{
  const message = req.body.msg
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Pretend like you are an interviewer name Batman and you are taking interview for the role of web developer, ask conceptual questions about react not about experience as if you are receiving answers from a interviewee. interviewee: ${message}.`,
    max_tokens: 100,
    temperature: 0,
  })
  res.send(response.data.choices[0].text)
})

app.listen(3000, ()=>{
  console.log("Server is running")
})
