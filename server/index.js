
// REQUIRED MODULES
const express = require('express'); // routing and middleware web framework
const cors = require('cors'); // cross-origin support
const bodyParser = require('body-parser'); // parses the json, buffer, string and URL encoded data submitted using HTTP POST request
const sampleRoute = require('./routes/sampleRoute'); // importing sampleRoute from routes folder

// GLOBAL VARIABLES DECLARATION
const app = express();
const PORT = process.env.NODE_ENV;

// MIDDLEWARE
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Routes
app.use('/api/sample/', sampleRoute);

// RUNNING APP
app.listen(PORT, (err) =>{
    console.log(`App is running on port: ${PORT}, Access it using http://localhost:${PORT}`);
})