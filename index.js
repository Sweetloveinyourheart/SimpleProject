const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dashBoardRouter = require('./router/dashboardRouter');
const homePageRouter = require('./router/homePageRouter');
const shopRouter = require('./router/shopRouter');
const morgan = require('morgan');

require('dotenv').config();

const app = express();

//Connect to MongoDB
const uri = process.env.ATLAS;
mongoose.connect(uri, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) {
        console.log(err);
    }
    console.log('Connect to DB successfully !')
})
//MiddleWare
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan('dev'))
//router
app.use('/api', dashBoardRouter);
app.use('/api', shopRouter);
app.use('/api', homePageRouter);

const PORT = process.env.PORT || 9999;
const sever = http.createServer(app);

sever.listen(PORT, () => {
    console.log(`Sever is running at http://localhost/${PORT}`)
})