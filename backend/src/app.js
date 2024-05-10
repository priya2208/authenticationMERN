const express = require("express");
const signupRoute = require("./routes/signupRoute");
const loginRoute = require("./routes/loginRoute");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const createAdminAccount = require("./scripts/admin");
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

createAdminAccount();

app.use("/user", signupRoute);
app.use("/auth", loginRoute);
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
