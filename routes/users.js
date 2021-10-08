const express=require('express');
const router=express.Router();

//login page
router.get('/form',(req,res)=>res.render('form'));

//register page
router.get('/result',(req,res)=>res.render('result'));

//login handle
router.post('/form',(req,res)=>{
    const {name,age}=req.body;
    res.render('result');
    
});

module.exports=router;