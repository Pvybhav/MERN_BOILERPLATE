const express = require('express'); // importing experss
const router = express.Router();

router.get('/sampleRoute', (req, res) => {
    res.send({name: "vybhav"});
});

// exporting router(mandatory), if not --> Router.use() requires a middleware function but got a Object
module.exports = router; 