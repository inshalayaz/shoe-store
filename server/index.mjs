import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import session from "express-session"

const app = express()



app.use(session({
    name: "mySession",
    secret: "456644",
    maxAge: 10000
}));


// Routes
import registerRoute from "./routes/register.mjs"
import loginRoute from "./routes/login.mjs"

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "DELETE", "PATCH"],
      credentials: true,
    })
);

app.use(express.json())
app.use(express.urlencoded());


app.use(registerRoute)
app.use(loginRoute)



mongoose.connect('mongodb://localhost:27017/shoe-store').then(() => {
    
    app.listen(3001, () => {
        console.log("server running")
    })
    
}).catch((err) => {
    console.log(err.message)
})

