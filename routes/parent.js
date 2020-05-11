const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator/check');

const Account = require('../models/Account');
const Child = require('../models/Child')
const Parent = require('../models/Parent')

//@route  GET api/parent
//@desc   Get all parents by child_id 
//@access Private
router.get('/:id', auth, async (req, res) =>{
    try {
        const parents = await Parent.find({children: req.params.id});
        res.json(parents);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route  POST api/parent
//@desc   Add new parent by childID
//@access Private
router.post('/:id', [auth,[
    check('first_name', 'First name is required').not().isEmpty(),
    check('last_name', 'Last name is required').not().isEmpty()
    ]], async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
    }
    const {first_name, middle_name, last_name, suffix, birth_parent, adoptee_parent, deceased} = req.body;


    try {
        const newParent = new Parent({
            first_name, middle_name, last_name, suffix, birth_parent, adoptee_parent, deceased, createdby: req.account.id,
            children: req.params.id
        })
        const parent = await newParent.save();
        const childFields = {}
        childFields.parents = parent.id
        let child = await Child.findById(req.params.id);
        if(child.createdby.toString() !==req.account.id){
            return res.status(401).json({msg: 'Not authorized.'});
        }
        child = await Child.findByIdAndUpdate(req.params.id,
            { $push:childFields },
            { new: true});
            res.json(child);

        res.json(parent)
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

  


//@route  PUT api/child/:id
//@desc   Update form
//@access Private
router.put('/:id', auth, async (req, res) =>{
    const {first_name, last_name, dob} = req.body;
    //Build object based on fields submitted
    const childFields = {};
    if(first_name) childFields.first_name = first_name;
    if(last_name) childFields.last_name = last_name;
    if(dob) childFields.dob = dob;

    try {
        let child = await Child.findById(req.params.id);
        if(!child) return res.status(404).json({msg: 'Child not found.'})
        //make sure account owns child -- not sure req.account.id is corret...
        if(child.createdby.toString() !==req.account.id){
            return res.status(401).json({msg: 'Not authorized.'});
        }
        child = await Child.findByIdAndUpdate(req.params.id,
            { $set:childFields },
            { new: true});
            res.json(child);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route  DELETE api/child/:id
//@desc   Delete form
//@access Private
router.delete('/:id',  auth, async (req, res) =>{
    
    
    try {
        let child = await Child.findById(req.params.id);
        if(!child) return res.status(404).json({msg: 'Child not found.'})
        //make sure account owns child -- not sure req.account.id is corret...
        if(child.createdby.toString() !==req.account.id){
            return res.status(401).json({msg: 'Not authorized.'});
        }
        await Child.findByIdAndRemove(req.params.id);
        res.json({msg: 'Child rmeoved'})
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router