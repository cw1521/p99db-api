var Item = require('../models/Item');


Item.getByName = (req, res, next) => {
    var itemName = `^${String(req.params.itemName)}$`;
    Item.findOne({
        name: {$regex: new RegExp(itemName, "i")}
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

module.exports = Item;