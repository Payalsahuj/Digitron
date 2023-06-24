const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const { userRoute } = require("./Routes/user.routes");
const { connection } = require("./db");
const { chatRoute } = require("./Routes/chat.routes");
const app = express();
require("dotenv").config();
app.use(express.json());



app.use("/user",userRoute)
app.use("/chat", chatRoute)






// Start the server
app.listen(process.env.port,async () => {
  try {
    await connection
    console.log("connected to db")
} catch (error) {
    console.log(error.message)
}
console.log("connected to server")
});

