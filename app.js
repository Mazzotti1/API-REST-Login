require('dotenv').config();;
const express = require('express');
const app = express();
const userRouter = require('./routes/userRouter')
const adminRouter = require('./routes/adminRouter')
const mongoose = require('mongoose');
const path = require("path")



mongoose.connect(process.env.MONGO_CONNECTION_URL,
     {
      useNewUrlParser: true,
      useUnifiedTopology: true,

    },
    (error)=>{
        if(error)
            console.log(error)
        else
            console.log("Mongo Connected")
    })

app.use('/user', express.json(), userRouter);

app.use('/admin', express.json() ,adminRouter);


app.use( '/user/register', express.static(path.join(__dirname,"template register")));
app.use( '/user/login', express.static(path.join(__dirname,"template")));


app.listen(process.env.PORT, ()=> {console.log("Server Running") } )