const express=require("express");
const mysql=require("mysql");
const app=express();
const path=require('path');
const dotenv= require('dotenv');
dotenv.config({path:'./.env'});
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'rabs'

});
const publicDirectory=path.join(__dirname,'./public');
app.use(express.static(publicDirectory));
app.use(express.static(path.join(__dirname,'./content')))


app.use(express.urlencoded({extended:false}))
app.use(express.json());


app.set('view engine','hbs');
db.connect((error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log("mysql");
    }
});
//routes
app.use('/',require('./routes/pages'));
app.use('/auth',require('./routes/auth'));
// for parsing application/json
// app.use(bodyParser.json()) 
// app.use(bodyParser.urlencoded({ extended: true })) 

// app.use(express.urlencoded({extended:false}));
// app.use(express.json());

app.listen(5001,()=>{
    console.log("server ok")
})
///////
//////////////