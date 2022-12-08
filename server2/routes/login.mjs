import express from "express";
import User from "../model/User.js"
import CryptoJS from "crypto-js";

const router = express.Router();


router.post("/login", async (req, res) => {
    


  if(req.session.loginStatus == true) {
    console.log("check")
    res.status(200).json({message: "already Logged In"})
  }else{
    console.log(req.session)
  }


    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    const bytes = CryptoJS.AES.decrypt(user.password, "1234");
    const originalPass = bytes.toString(CryptoJS.enc.Utf8);
    

    if (user && password === originalPass) {
       
      req.session.loginStatus = "true"
        console.log(req.session)
        res.status(200).json({
         message: "Logged In Successfully", loginStatus: req.session.loginStatus 
        });
      } else {
        res.status(400).json({ message: "Invalid Username or Password" });
      }
    
})


export default router