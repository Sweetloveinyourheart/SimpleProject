const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Connect to MongoDB


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