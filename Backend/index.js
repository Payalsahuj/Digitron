const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const { userRoute } = require("./Routes/user.routes");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use("/user",userRoute)
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
