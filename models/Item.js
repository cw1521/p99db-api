const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const itemSchema = new Schema({
    dex: String,
    sv_fire: String,
    sv_disease: String,
    lucy_img_id: String,
    skill: String,
    hp: String,
    size: String,
    str: String,
    sv_posion: String,
    sta: String,
    cha: String,
    lore: Boolean,
    effect: String,
    sv_magic: String,
    no_drop: Boolean,
    atk_delay: String,
    magic: Boolean,
    name: String,
    wt: String,
    dmg: String,
    all_instruments: String,
    sv_cold: String,
    id: Number,
    ac: String,
    int: String,
    wis: String,
    mana: String,
    agility: String,
    charges: String,
    notes: String,
    quest: Boolean,
    haste: String,
    expendable: Boolean,
    brass: String,
    wind: String,
    food: String,
    range: String,
    focus_effect: String,
    capacity: String,
    wt_reduction: String,
    size_capacity: String,
    stringed: String,
    skill_mod: String,
    hp_regen: String,
    temporary: Boolean,
    percussion: String,
    light_source: Boolean,
    mana_cost: String,
    misc: String,
    tradeskills: Boolean,
    deity: [String],
    slot: [String],
    classes: [String],
    races: [String],
    dropsfrom: [
        {
            monsters: [String],
            zone: String
        }
    ]
});


var itemModel = mongoose.model("Item", itemSchema);

module.exports = itemModel;