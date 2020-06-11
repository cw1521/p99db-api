const database = require('./database/database');
const router = require('./routes/routes');

const https = require('https');
const fs = require('fs');

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





// if (process.env.NODE_ENV === 'production') {
//   const httpsOptions = {
//     cert: fs.readFileSync('/etc/letsencrypt/live/www.project1999atlas.com/fullchain.pem'),
//     key: fs.readFileSync('/etc/letsencrypt/live/www.project1999atlas.com/privkey.pem'),
//     dhparam: fs.readFileSync('/etc/ssl/certs/dhparam.pem')
//   }
//   https.createServer(httpsOptions, server)
//   .listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}`);
//   });
// }
// else {
  server.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
  });
// }

