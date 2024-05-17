const mysql=require("mysql");
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'rabs'

});
exports.log=async(req,res)=>{
    try{
        const{email,password}=req.body;
    if(!email||!password){
        return res.status(400).render('login',{
            message:'Please enter provide an email and password'
        });
    }
    db.query('SELECT * FROM user WHERE email=?',[email],async(error,result)=>{
        console.log(result);
        if(email=="hossamelzoghpy@yahoo.com"&&password=="1234"){
            
            res.render('search');
        }
        else{
            res.status(401).render('login',{
                message:'incorrect'
            })
        }
    })


}catch(error){
    console.log(error); 
}finally{
    console.log("error");
}

// res.send("form success");



}
exports.register=(req,res)=>{
    console.log(req.body);
    const fname=req.body.fname;
    const lname=req.body.lname;
    const id=req.body.id;
    const phone=req.body.phone;
    const email=req.body.email;
    const password=req.body.password;
    db.query('INSERT INTO user SET ?',{f_name:fname,l_name:lname,u_ID:id,phone_number:phone,email:email,password:password},
    (error,result)=>{
        if(error){
            console.log(error);
        }
        else{
            
            return res.render('register',{
                message:'!User Register!'
            });
        }
    });
    }