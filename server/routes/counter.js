const express = require('express'); // importing experss
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

router.get('/getCounterValue', (req, res) => {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        const dbo = db.db("Counter");
        dbo.collection("CounterValue").find({}).toArray((err, result) => {
            if (err) throw err;
            res.send(result);
        });
    });
});

router.post('/updateCounterValue', (req, res) => {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        const dbo = db.db("Counter");
        const { number } = req.body;
        dbo.collection("CounterValue").findOneAndUpdate({ name: "counter_value" }, { $set: { number } }, { upsert: true }, (err) => {
            if (err) throw err;
            res.sendStatus(200);
        });
    });
});


// exporting router(mandatory), if not --> Router.use() requires a middleware function but got a Object
module.exports = router; 