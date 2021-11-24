const express = require("express");
const port = 3000;
const db = require('./config/mongoose')
const Contact = require('./model/contact')
const bodyParser=require("body-parser");
const path=require("path");
const app = express();


//Seting up middlewares
app.use(express.static("Public"));
app.use(express.urlencoded())


//Declaring the view engine and setting up views directory
app.set("view engine","ejs")
app.set('views', path.join(__dirname, "views"))





app.get("/",(req,res)=>{
    
    Contact.find({},(err,contacts)=>{
        if(err){
            console.log(err);
            rerturn;
        }else{
            return res.render("home",{
                title:"Contact List",
                contactList : contacts
            });
        }
    })


})


app.post("/createContact",(req,res)=>{
    // contactList.push(req.body)

    Contact.create({
       name: req.body.name,
       phone:req.body.phone
    },(err,newContact)=>{
        if(err){
            console.log("Error: ", err)
        }else{
            console.log("********", newContact)
        }
    })
    return res.redirect("back")
})

app.get("/delete-contact",(req,res)=>{
   console.log(req.query)   
    let phoneNo = req.query.phone
   
        Contact.deleteOne({ phone: phoneNo },(err)=>{
            if (err){
                console.log(err)
            } else{
                console.log("Contact Deleted")
                return res.redirect("back")
            }
        }); 
    });


app.listen(port,()=>{
console.log("Server is up and running on port: ",port)
})