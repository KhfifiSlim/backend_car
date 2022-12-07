
const mongoose = require('mongoose')
const url = "mongodb+srv://slim:slim@cluster0.3fnqp.mongodb.net/mernstack?retryWrites=true&w=majority"
const connectDB = async () => {
    try{
        const conn = await mongoose.connect(url)
        console.log(`mongoDB connected : ${conn.connection.host}`);
    }catch(error){
        console.log(error);
    }
}

module.exports = connectDB