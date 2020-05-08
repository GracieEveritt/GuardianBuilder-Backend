const express = require('express');
const router = express.Router();

// POST = create; PUT = update

//@route  GET api/forms
//@desc   Get all accounts forms
//@access Private
router.get('/', (req, res) =>{
    res.send('Get all forms');
});

//@route  POST api/forms
//@desc   Add new form
//@access Private
router.post('/', (req, res) =>{
    res.send('Add form');
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