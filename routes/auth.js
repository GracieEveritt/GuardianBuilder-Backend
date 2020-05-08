const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const Account = require('../models/Account');

// POST = create; PUT = update

//@route  GET api/auth
//@desc   Get logged in user
//@access Private
router.get('/', auth, async (req, res) => {
    try {
        const account = await Account.findById(req.account.id).select('-password');
        res.json(account);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route  POST api/auth
//@desc   Auth user & get token
//@access Public
router.post('/', [
    check('email', 'Please include a valide email').isEmail(),
    check('password', 'Password is required').exists()
], async (req, res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const { email, password } = req.body

    try {
        let account = await Account.findOne({email});
        if(!account) {
            return res.status(400).json({msg: 'Invalid Credentials'});
        }
        //check password
        const isMatch = await bcrypt.compare(password, account.password);
        if(!isMatch) {
            return res.status(400).json({msg: 'Invalid Credentials'});
        }
        const payload = {
            account: {
                id: account.id
            }
        }
        jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn: 360000 //change this back to 3600 aka 1 hr
        }, (err, token) => {
            if(err) throw err;
            res.json({token});
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }


});

module.exports = router