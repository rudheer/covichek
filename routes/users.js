const express=require('express');
const { on } = require('nodemon');
const router=express.Router();

const app=express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//form page
router.get('/form',(req,res)=>res.render('form'));

//result page
router.get('/result',(req,res)=>res.render('result'));



//form  handle
router.post('/form',(req,res)=>{
    console.log(req.body);
    const{name,age,vaccinated1,sex,temp,bp,head,rns,er,sob,lss,lat,met,cd,wk,cp,los}=req.body;
    var total=0;
    let problems=[];
    if(age<15){
      if(temp==="mild"){
        total+=10;
      }
      if(temp==="serious"){
        total+=20;
      }
      if(vaccinated1==='on'){
        total/=2;
      }
      if(bp==='on'){
        total+=10;
        problems.push("body pains");
      }
      if(head==='on'){
        total+=10;
        problems.push("headace");
      }
      if(rns==='on'){
        total+=10;
        problems.push("running nose and sneezing");
      }
      if(er==='on'){
        total+=10;
        problems.push("eyes are red");
      }
      if(sob==='on'){
        total+=10;
        problems.push("short of breath");
      }
      if(lss==='on'){
        total+=10;
        problems.push("lost sense of smell");
      }
      if(lat==='on'){
        total+=10;
        problems.push("lost assence of taste");
      }
      if(met==='on'){
        total+=10;
      }
      if(cd==='on'){
        total+=10;
      }
      if(wk==='on'){
        total+=10;
      }
      if(cp==='on'){
        total+=10;
        problems.push("chest pain");
      }
      if(los==='on'){
        total+=10;
      }
    }
    else if(age >=15 && age <=49){
      if(temp==="mild"){
        total+=10;
      }
      if(temp==="serious"){
        total+=10;
      }
      if(vaccinated1==='on'){
        total/=2;
      }
      if(bp==='on'){
        total+=10;
        problems.push("body pains");
      }
      if(head==='on'){
        total+=10;
        problems.push("headace");
      }
      if(rns==='on'){
        total+=10;
        problems.push("running nose and sneezing");
      }
      if(er==='on'){
        total+=10;
        problems.push("eyes are red");
      }
      if(sob==='on'){
        total+=10;
        problems.push("short of breath");
      }
      if(lss==='on'){
        total+=10;
        problems.push("lost sense of smell");
      }
      if(lat==='on'){
        total+=10;
        problems.push("lost assence of taste");
      }
      if(met==='on'){
        total+=10;
      }
      if(cd==='on'){
        total+=10;
      }
      if(wk==='on'){
        total+=10;
      }
      if(cp==='on'){
        total+=10;
        problems.push("chest pain");
      }
      if(los==='on'){
        total+=10;
      }
    }
    else{
      if(temp==="mild"){
        total+=10;
      }
      if(temp==="serious"){
        total+=20;
      }
      if(vaccinated1==='on'){
        total/=2;
      }
      if(bp==='on'){
        total+=10;
        problems.push("body pains");
      }
      if(head==='on'){
        total+=10;
        problems.push("headace");
      }
      if(rns==='on'){
        total+=10;
        problems.push("running nose and sneezing");
      }
      if(er==='on'){
        total+=10;
        problems.push("eyes are red");
      }
      if(sob==='on'){
        total+=10;
        problems.push("short of breath");
      }
      if(lss==='on'){
        total+=10;
        problems.push("lost sense of smell");
      }
      if(lat==='on'){
        total+=10;
        problems.push("lost assence of taste");
      }
      if(met==='on'){
        total+=10;
      }
      if(cd==='on'){
        total+=10;
      }
      if(wk==='on'){
        total+=10;
      }
      if(cp==='on'){
        total+=10;
        problems.push("chest pain");
      }
      if(los==='on'){
        total+=10;
      }
    }
    console.log(total);
    if(total===0){
      res.render('result',{"name":name,"age":age,"sex":sex,"msg":"You are completely healthy, Be safe and take precautions.","problems":problems});
    }
    else if(total<60){
      res.render('result',{"name":name,"age":age,"sex":sex,"msg":"Your health condition is not in a good state, some medical precations to be taken, Take rest","problems":problems});
    }
    else{
      res.render('result',{"name":name,"age":age,"sex":sex,"msg":"Your health conditions seems serious, Please consult an doctor immediately!! ","problems":problems});
    }
});

module.exports=router;