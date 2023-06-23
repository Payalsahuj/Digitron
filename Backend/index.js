
const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const { userRoute } = require("./Routes/user.routes");

const app = express();


require("dotenv").config();











app.use(express.json());













// Start the server
app.listen(process.env.port, () => {
  console.log("**************Connected to DB***************");
});








// ****************************************************************************************

// mongoURL= mongodb+srv://krunalgurao:krunalgurao@digitron.zojf4xp.mongodb.net/Digitron?retryWrites=true&w=majority
// port = 0619


// *********************************************************************************************