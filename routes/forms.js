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
    console.log('children-req',req.body)
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
router.put('/:id/parents', auth, async (req, res) =>{
    console.log('parents-api')
    const {parents, limitations, guardians, draft, final} = req.body;
    //Build object based on fields submitted
    console.log('api-req.body', req.body)
    // const formFields = {};
    // formFields.parents = parents;
    // if(limitations) formFields.limitations = limitations;
    // if(guardians) formFields.guardians = guardians;
    // if(draft) formFields.draft = draft;
    // if(birth) formFields.final = final;
    console.log('api-id', req.params.id)
    console.log('api-field', req.params.field)
    try {
        let form = await Guardianship.findById(req.params.id);
        if(!form) return res.status(404).json({msg: 'Form not found.'})
        //make sure account owns child -- not sure req.account.id is corret...
        if(form.createdby.toString() !==req.account.id){
            return res.status(401).json({msg: 'Not authorized.'});
        }
        const filter = { _id: req.params.id}
        const update = { "parents" : req.body }
        form = await Guardianship.findByIdAndUpdate(filter,update, {new:true});
        const uform = await form.save();
            res.json(uform);
            console.log('after api form update', form)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.put('/:id/parents/limitations', auth, async (req, res) =>{
   console.log('limitations-api')
    try {
        let form = await Guardianship.findById(req.params.id);
        if(!form) return res.status(404).json({msg: 'Form not found.'})
        //make sure account owns child -- not sure req.account.id is corret...
        if(form.createdby.toString() !==req.account.id){
            return res.status(401).json({msg: 'Not authorized.'});
        }
        const filter = { _id: req.params.id}
        const update =  req.body 
        
        form = await Guardianship.findByIdAndUpdate(filter,update, {new:true});
        const uform = await form.save();
            res.json(uform);
            console.log('after api form update', form)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//addGuardians: api/forms/${formID}/?/guardians
router.put('/:id/x/x/guardians', auth, async (req, res) =>{
    console.log('api-req.body-guardians', req.body)
    console.log('api-id', req.params.id)
    try {
        let form = await Guardianship.findById(req.params.id);
        if(!form) return res.status(404).json({msg: 'Form not found.'})
        //make sure account owns child -- not sure req.account.id is corret...
        if(form.createdby.toString() !==req.account.id){
            return res.status(401).json({msg: 'Not authorized.'});
        }
        const filter = { _id: req.params.id}
        const update = { "guardians" : req.body }
        form = await Guardianship.findByIdAndUpdate(filter,update, {new:true});
        const uform = await form.save();
            res.json(uform);
            
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route  DELETE api/forms/:id
//@desc   Delete form
//@access Private
router.delete('/:id', (req, res) =>{
    res.send('Delete form');
});

module.exports = router