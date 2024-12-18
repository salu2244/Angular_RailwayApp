const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
var routers = require('./routes/routes');
const bookingRoutes = require('./routes/routes');
require("dotenv").config();




const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());


//database connection......
//const dbURL = "mongodb://localhost:27017/Rail_Helpline_Number";

// Database connection
const dbURL = process.env.DB_URL; // DB_URL from environment variables


mongoose.connect(dbURL);
const connection = mongoose.connection;

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('MongoDB connected successfully');
});

app.use('/', bookingRoutes);



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



app.use(routers);



