const express=require('express');
const app=express();
const expressLayouts=require('express-ejs-layouts');

const PORT = process.env.PORT || 3000;

//ejs
app.use(expressLayouts);
app.set('view engine', 'ejs');

//bodypharaser
app.use(express.urlencoded({extended:false}));

//routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));

app.listen(PORT, console.log(`server started on port ${PORT}`));