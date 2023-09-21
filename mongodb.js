const mongoose = require('mongoose')
require('dotenv').config()

const connectMongo = async()=>{
    try {
        await mongoose.connect(
            process.env.MDB_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log('MongoDB connected')
    } catch (err) {
        console.log(err.message)
        process.exit(1)
    }
}

module.exports = connectMongo