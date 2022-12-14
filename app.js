require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3005;
const dbConnect = require('./config/mongo');
const bodyParser = require('body-parser');

//midelwares
app.use(express.json({type: ['application/json', 'text/plain']}));
app.use(express.urlencoded({extended:true}));
app.use(express.json({limit:'1mb'}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
                  
//CORS middleware
app.use(cors());
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });
app.use(require("body-parser").json());

app.use('/api/', require('./app/routes/index'));

app.listen(PORT, () => {
    console.log("Api lista por el puerto", PORT)
});