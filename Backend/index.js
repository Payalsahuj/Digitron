

const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const { userRoute } = require("./Routes/user.routes");
const { connection } = require("./db");
const app = express();
require("dotenv").config();
app.use(express.json());



app.use("/user",userRoute)






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

