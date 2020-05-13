var Zone = require('../models/Zone');


Zone.getByName = (req, res, next) => {
    var zoneName = `^${String(req.params.zoneName)}$`;
    Zone.findOne({
        name: {$regex: new RegExp(zoneName, "i")}
        }, (err, zone) => {
        if (err) {
            res.status(err.status || 500);
            res.json({
            message: err.message,
            error: err
            });
        }
        else {
            res.status(200);
            res.json({
                message: "Record(s) received.",
                data: zone
            });
        }
    });

}

Zone.getAll = (req, res, next) => {
    Zone.find({}, (err, zones) => {
        if (err) {
            res.status(err.status || 500);
            res.json({
            message: err.message,
            error: err
            });
        }
        else {
            res.status(200);
            res.json({
               message: "Record(s) received.",
               data: zones
            });
        }       
    });
}

Zone.getAllNames = (req, res, next) => {
    Zone.find({}, 'name zone_type continent', (err, zones) => {
        if (err) {
            res.status(err.status || 500);
            res.json({
            message: err.message,
            error: err
            });
        }
        else {
            res.status(200);
            res.json({
               message: "Record(s) received.",
               data: zones
            });
        }       
    });
}


Zone.getMapById  = (req, res, next) => {
    //console.log(req.params);
    var zoneName = `^${String(req.params.zoneName).replace('-', ' ')}$`;
    //console.log(`Zone Name: ${zoneName}\n`);
    Zone.findOne({
        name: {$regex: new RegExp(zoneName, "i")}
        }, 'continent maps', 
        (err, zone) => {
            if (err) {
                res.status(err.status || 500);
                res.json({
                message: err.message,
                error: err
                });
            }
            else {
                var map = zone.maps.filter(map => map.id == req.params.mapId)[0];
                map.continent = zone.continent;
                //console.log(map);
                res.status(200);
                res.json({
                    message: "Record(s) received.",
                    data: map
                });
        }
    });
}

Zone.getZonesByContinentName = (req, res, next) => {
    var continentName = `^${String(req.params.continentName).replace('-', ' ')}$`;
    Zone.find({continent: {$regex: new RegExp(continentName, "i")}}, 'name zone_type',
    (err, zones) => {
        if (err) {
            res.status(err.status || 500);
            res.json({
            message: err.message,
            error: err
            });
        }
        else {
            res.status(200);
            //console.log(zones);
            res.json({
               message: "Record(s) received.",
               data: zones
            });
        }       
    });
}


module.exports = Zone;
