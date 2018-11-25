const mongoose = require('mongoose');
const dbName = "Counter"
module.exports = () => {
    mongoose.connect(`mongodb://localhost:27017/${dbName}`, { useNewUrlParser: true }).then(() => {
        console.log("Connected to MongoDB..!!");
    }).catch((err) => {
        console.log("Failed to Connect MongoDB..!!");
    });
}