
// REQUIRED MODULES
const express = require('express'); // routing and middleware web framework
// const cors = require('cors'); // cross-origin support
const bodyParser = require('body-parser'); // parses the json, buffer, string and URL encoded data submitted using HTTP POST request
const morgan = require('morgan');

// GLOBAL VARIABLES DECLARATION
const app = express();
const PORT = process.env.PORT || 5000;

// MIDDLEWARE
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev')); // Available Options :==> combined, common, dev, short, tiny

require("./startup/cors")(app);
require("./startup/routes")(express, app);
require("./startup/db")();

app.get('/', (req, res) =>{
    res.json({name: "vybhav"});
})
// RUNNING APP
app.listen(PORT, (err) => {
    if(err) console.log(typeof(err));
    console.log(`App is running on port: ${PORT}, Access it using http://localhost:${PORT}`);
});
