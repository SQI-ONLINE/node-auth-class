const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require ('dotenv').config();
const app = express();

const port = process.env.PORT;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
    next();
});

const URI = process.env.MONGO_URI;
mongoose.connect(URI,  { useUnifiedTopology: true, useNewUrlParser: true });

const userRouter = require('./routes/user.route');
app.use('/user', userRouter);

const appRouter = require('./routes/user.route');
const verifyToken = require('./middlewares/auth.middleware');

app.get('/app/testAuth', verifyToken);

// app.use('/app', verifyToken, appRouter)

app.listen(port, (res)=>{
    console.log(`Server started and listening on port ${port} `)
})