const express = require('express');
const router = express.Router();

// POST = create; PUT = update

//@route  POST api/accounts
//@desc   Register an account
//@access Public
router.post('/', (req, res) =>{
    res.send('Registers User');
})

module.exports = router