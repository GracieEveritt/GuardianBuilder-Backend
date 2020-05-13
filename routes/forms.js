const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator/check');

const Account = require('../models/Account');
const Guardianship = require('../models/Guardianship')

// POST = create; PUT = update

//@route  GET api/forms
//@desc   Get all accounts forms
//@access Private
router.get('/', auth, async (req, res) =>{
    try {
        const forms = await Guardianship.find({account: req.account.id}).sort({date:-1});
        res.json(forms);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route  POST api/forms
//@desc   Add new form
//@access Private
router.post('/', [auth,[
    // check('name', 'Name is required').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const {children} = req.body;
    console.log('BE-req.body', req.body, children)
    try {
        const newForm = new Guardianship({
            children:req.body, createdby: req.account.id
        })
        const form = await newForm.save();
        res.json(form)
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route  PUT api/forms/:id
//@desc   Update form
//@access Private
router.put('/:id', (req, res) =>{
    res.send('Update form');
});

//@route  DELETE api/forms/:id
//@desc   Delete form
//@access Private
router.delete('/:id', (req, res) =>{
    res.send('Delete form');
});

module.exports = router