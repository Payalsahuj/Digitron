
const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const { userRoute } = require("./Routes/user.routes");
const app = express();
require("dotenv").config();
app.use(express.json());



app.use("/user",userRoute)






// Start the server
app.listen(process.env.port, () => {
  console.log("**************Connected to DB***************");
});

