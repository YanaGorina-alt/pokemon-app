const {Schema, model} = require("mongoose");

const pokeSchema = new Schema({
    name: {type: String, required: true},
    img: {type: String, required:true}
});

const Poke = model('Poke', pokeSchema);

module.exports = Poke;