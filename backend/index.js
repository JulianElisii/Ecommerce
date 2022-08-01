const express = require("express")
const morgan = require('morgan');
const cors = require("cors");
require('dotenv').config()

const app = express();

// Db connection
const { mongoose } = require("./database");

// Settings 
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Routes
app.use('/', require('./routes/productRoute'));
app.use("/user", require("./routes/userRoutes"));

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});