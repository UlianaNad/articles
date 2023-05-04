const express = require('express');

const router = express.Router();

const articlesData = [
    {id:1, title:"Article 1", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid debitis nesciunt inventore quibusdam iste facere beatae? Asperiores exercitationem numquam quia, doloremque sapiente quis a tenetur nisi illum atque minima praesentium!"},
    {id:2, title:"Article 2", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid debitis nesciunt inventore quibusdam iste facere beatae? Asperiores exercitationem numquam quia, doloremque sapiente quis a tenetur nisi illum atque minima praesentium!"}
]


router.get('/', (req,res) => {
    res.render("articles");
});

router.get('/articles', (req,res) => {
    console.log('get', req.query);
    //console.log('get body', req.body);
    res.json(articlesData);

});

router.post('/articles', (req,res) => {
    //console.log('post', req.query);
    console.log('post body', req.body);
    const inputValue = req.body.title;
    const textValue = req.body.text;

    articlesData.push({
        id:"",
        title:inputValue,
        text:textValue
    })
    console.log(articlesData)
    res.json(articlesData);
});

module.exports = router;