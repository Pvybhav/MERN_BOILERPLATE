const express = require('express'); // importing experss
const router = express.Router();

router.get('/route_name', (req, res) =>{
    res.send('success');
})