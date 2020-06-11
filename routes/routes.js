const Continent = require("../controllers/continentController");
const Zone = require("../controllers/zoneController");
const Item = require("../controllers/itemController");


const express = require("express");

function notSupportedHandler(req, res, next) {    
    res.status(403);
    res.json({
        message: "Not Supported."
    });
}

    let router = express.Router();


    router.route("/continent")
    .get(Continent.getAll)
    .post(notSupportedHandler)
    .put(notSupportedHandler)
    .delete(notSupportedHandler);

    router.route("/continent/:continentName")
    .get(Continent.getByName)
    .post(notSupportedHandler)
    .put(notSupportedHandler)
    .delete(notSupportedHandler);

    router.route("/maps/:zoneName/:mapId")
    .get(Zone.getMapById)
    .put(notSupportedHandler)
    .post(notSupportedHandler)
    .delete(notSupportedHandler);

    
    router.route("/zones")
    .get(Zone.getAllNames)
    .post(notSupportedHandler)
    .put(notSupportedHandler)
    .delete(notSupportedHandler);


    router.route("/zones/:zoneName")
    .get(Zone.getByName)
    .post(notSupportedHandler)
    .put(notSupportedHandler)
    .delete(notSupportedHandler);


    router.route("/zones/continent/:continentName")
    .get(Zone.getZonesByContinentName)
    .post(notSupportedHandler)
    .put(notSupportedHandler)
    .delete(notSupportedHandler);
    

    router.route("/items/:itemName")
    .get(Item.getByName)
    .post(notSupportedHandler)
    .put(notSupportedHandler)
    .delete(notSupportedHandler);

    


module.exports = router;