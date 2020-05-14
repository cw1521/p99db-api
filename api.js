const database = require('./database/database');
const router = require('./routes/routes');

const express = require('express');
const bodyParser = require('body-parser');

const cors = require("cors");

const PORT = process.env.PORT || 3500;

const corsOptions = {
    origin: "*"
}


server = express();


server.use(cors());

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());


server.use("*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // res.header("Content-Type", "application/json");
    console.log(req.params);
    if ("OPTIONS" === req.method) { 
      
      res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
      return res.status(200).json({});
    }
    next();
  });





server.use("/api", router);

database.start();





server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

