const express = require('express');

const router = express.Router();

router.get('/regular', (req,res) => {
    res.render("regular");
});



module.exports = router;