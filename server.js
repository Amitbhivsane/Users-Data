const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const connetDB = require("./config/db");

//env config
dotenv.config();

//Routers imports
const userRoutes = require("./routes/userRoutes");
//mogodb connection
connetDB();
//rest object
const app = express();

//middelware
app.use(cors()); //used connect to react to node
app.use(express.json()); //json data for used frent end
app.use(morgan("dev"));

//routes form router file
app.use("/api/v1/users", userRoutes);
// port
const PORT = process.env.PORT || 5000;
//listen
app.listen(PORT, () => {
  console.log(
    `server running on ${process.env.DEV_MODE} port ${PORT}`.bgCyan.white
  );
});
