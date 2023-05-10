const express = require('express');
const Ajv = require('ajv');
const ajv = new Ajv();

const router = express.Router();

router.get('/regular', (req,res) => {
    res.render("regular");
});


router.post('/regular', (req,res) =>{
    console.log(req.body);
    const data = req.body;

    const schema = {
        type: 'object',
        properties: {
            firstname: {
                type: 'string',
                minLength: 1,
                maxLength: 255
            },
            date: {
                type: 'string',
                minLength: 1,
                maxLength: 10
            },
            number: {
                type:'string',
                minLength:9,
                maxLength:13
            },
            math:{
                type: 'integer'
            }
        }
    };
    
    
    const validate = ajv.compile(schema);
    const valid = validate(data);

    if (!valid){
        res.json({status: "valid_data error", errors: validate.errors})
    }
    
    console.log('valid:', valid);
    console.log('errors:', validate.errors);

})










module.exports = router;