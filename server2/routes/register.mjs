import express from "express";
import User from "../model/User.js"
import  AES  from "crypto-js/aes.js";


const router = express.Router();


router.post("/register", async (req, res) => {
    
    let {name, email, password, confirmPassword} = req.body
    const emailExists = await User.findOne({email})
    
    if(confirmPassword !== password){
        res.status(400).json({message: "Passwords Doesn't match"})
    } else if(emailExists){
        res.status(400).json({ message: "Email is already Registered." });
    }else{
        const encryptedPass = AES.encrypt(
            password,
            "1234"
          ).toString();
      
            const user = new User({
                name, email, password: encryptedPass
            }
            )

            try {
                const result = await user.save();
                res.status(200).json({ message: "Registered Successfully" });
              } catch (error) {
                res.status(400).json({ error });
              }

    }

})


export default router