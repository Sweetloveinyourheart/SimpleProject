const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

//Connect to MongoDB
const uri = process.env.ATLAS;
mongoose.connect(uri, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('Connect to DB successfully !')
})
//MiddleWare
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

//router


const PORT = process.env.PORT || 9999;
const sever = http.createServer(app);

sever.listen(PORT, () => {
    console.log(`Sever is running at http://localhost/${PORT}`)
})