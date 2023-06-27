const express = require('express');

const router = express.Router();

router.get('/add-product',(req,res,next)=>{
    res.send('<form action="/admin.add-product" method="POST"><input type="text" name="title"></input><input type="text" name="size" placeholder="Product Size"><button type=""submit>Add product</button></form>');
});


router.post('/product',(res,req,next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = router; 