const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config')
const { check, validationResult } = require('express-validator/check');

const Account = require('../models/Account');

// POST = create; PUT = update

//@route  POST api/accounts
//@desc   Register an account
//@access Public
router.post('/', [
    check('first_name', 'Please add first name').not().isEmpty(),
    check('last_name', 'Please add last name').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    // check('phone', 'Please enter a valid phone number').isMobilePhone("en-US"),
    check('password', 'Please enter password with 6 or more characters').isLength({ min: 6})
],  async (req, res) =>{
    //accepts data and needs validation
    
    const errors = validationResult(req);
   
    if(!errors.isEmpty()){
        
        return res.status(400).json({errors: errors.array()});
    }
    
    const {first_name, middle_name, last_name, suffix, email, phone, password} = req.body;
   
    try {
        //check to see if user with that email
       
        let account = await Account.findOne({email});
        if (account) {
            return res.status(400).json({msg: "User already exists"})
        }
        account = new Account({
            first_name, 
            middle_name, 
            last_name, 
            suffix, 
            email, 
            phone, 
            password
        });
       
        //hash password
        const salt = await bcrypt.genSalt(10);
        account.password = await bcrypt.hash(password, salt);

        await account.save();

        //pass jtw token

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
})

module.exports = router