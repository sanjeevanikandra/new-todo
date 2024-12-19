const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const todoRouter = require('./router/todoRouter');
const cors = require('cors');

app.use(cors());

app.use(express.json());

// Connect to MongoDB

mongoose.connect(process.env.Uri)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));


  //  mongoose.set('bufferTimeoutMS', 5000);
app.listen(process.env.Port, () => {
    console.log('Server is running on port 5000');
});

app.use(todoRouter);