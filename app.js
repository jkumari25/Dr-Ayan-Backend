const express= require('express');
const errorMiddleware= require("./middleware/error");
const cors= require('cors');

const app= express();
app.use(express.json());
app.use(cors({
    origin:"*"
}));

app.get("/",(req,res)=>{
    res.send("HOME PAGE")
})

const patient= require("./routes/patientRoutes");
const time= require("./routes/delayTimingRoutes");

app.use("/api/v1",patient);
app.use("/api/v1",time);

//Middleware for errors
app.use(errorMiddleware);

module.exports= app