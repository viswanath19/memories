import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

const PORT = process.env.PORT || 9000;
const mongodbUrl = "mongodb+srv://viswanath:sarma1901@cluster0.zeryh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(mongodbUrl,{useNewUrlParser:true,useUnifiedTopology:true})
.then(() => {app.listen(PORT,()=>{console.log(`Server started on Post ${PORT}`)})})
.catch((e)=>{console.log("Error occured while connecting",e)});

mongoose.set('useFindAndModify',false);