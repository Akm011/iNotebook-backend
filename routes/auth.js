const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    obj = {
        a: 'ashutosh',
        number: 52
    }
    res.json(obj)
})

module.exports = router