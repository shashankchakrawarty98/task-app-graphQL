const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:'../.env'});
mongoose.Promise = global.Promise
const connection= mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useFindAndModify:false,
    autoIndex: true
}).then(()=>{
    console.log('conneceted');
}).catch((error)=>{
    console.log(error);
})

module.exports = connection;
