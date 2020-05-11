
const mongoose = require('mongoose');



const dbUri = 'mongodb://localhost:27017/p99';

const mongooseOptions = {
    useNewUrlParser: true,
    socketTimeoutMS: 10000,
    useUnifiedTopology: true
}


function start(uri = dbUri) {
    mongoose.connect(uri, mongooseOptions);

    mongoose.connection.on("connected", () => {
        console.log("Mongoose connection is open");
    });

    mongoose.connection.on("error", (error) => {
        console.log("Mongoose connection has ocurred " + error + " error.");
    });

    mongoose.connection.on("disconnected", ()=> {
        console.log("Mongoose default connection has disconnected.");
    });

    process.on("SIGINT", () => {
        mongoose.connection.close(() => {
            console.log("Mongoose connection is disconnected");
            process.exit(0);
        })
    })

}

exports.start = start;

