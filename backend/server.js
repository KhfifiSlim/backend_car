const express = require("express");
const app = express();
const port = 8000
const connectDB = require('./db/conn')
const cors = require ("cors");
const router = require("./routers/router");

connectDB()

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(port, ()=>{
    console.log(`server is start port number ${port}`);
    });

    