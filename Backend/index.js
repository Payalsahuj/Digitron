
const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const { userRoute } = require("./Routes/user.routes");

const app = express();
const port = 3000;

require("dotenv").config();





const app = express();





app.use(express.json());









app.use("/user",userRoute)
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);





// Start the server
app.listen(process.env.port, () => {
  console.log("**************Connected to DB***************");
});








// ****************************************************************************************

// mongoURL= mongodb+srv://krunalgurao:krunalgurao@digitron.zojf4xp.mongodb.net/Digitron?retryWrites=true&w=majority
// port = 0619


// *********************************************************************************************