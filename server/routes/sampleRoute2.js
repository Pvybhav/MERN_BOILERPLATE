const express = require('express'); // importing experss
const router = express.Router();

router.get('/route_name', (req, res) =>{
    res.send('success');
});

// exporting router(mandatory), if not --> Router.use() requires a middleware function but got a Object
module.exports = router; 