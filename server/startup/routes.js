const sampleRoute = require('../routes/sampleRoute')
const sampleRoute2 = require('../routes/sampleRoute2')
const counter = require('../routes/counter');
module.exports = (express, app) => {
    app.use(express.json());
    app.use('/api/sample/', sampleRoute);
    app.use('/api/sample/', sampleRoute2);
    app.use('/api/counter/', counter);
}