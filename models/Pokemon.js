const mongoose = require('mongoose');

//Model com que as informações são salvas no BD
const PokemonSchema = new mongoose.Schema({
    pokedex_number: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    generation: {
        type: Number,
        required: true
    },
    evolution_stage: {
        type: Number,
        required: true
    },
    evolved: {
        type: Boolean,
        required: true
    },
    family_id: {
        type: Number,
        required: true
    },
    cross_gen: {
        type: Boolean,
        required: true
    },
    type_1: {
        type: String,
        required: true
    },
    type_2: {
        type: String,
        required: false
    },
    weather_1: {
        type: String,
        required: true
    },
    weather_2: {
        type: String,
        required: false
    },
    stat_total: {
        type: Number,
        required: true
    },
    atk: {
        type: Number,
        required: true
    },
    def: {
        type: Number,
        required: true
    },
    sta: {
        type: Number,
        required: true
    },
    legendary: {
        type: Boolean,
        required: true
    },
    aquireable: {
        type: Boolean,
        required: true
    },
    spawns: {
        type: Boolean,
        required: true
    },
    regional: {
        type: Boolean,
        required: true
    },
    raidable: {
        type: Boolean,
        required: true
    },
    hatchable: {
        type: Boolean,
        required: true
    },
    shiny: {
        type: Boolean,
        required: true
    },
    nest: {
        type: Boolean,
        required: true
    },
    new_pokemon: {
        type: Boolean,
        required: true
    },
    not_gettable: {
        type: Boolean,
        required: true
    },
    future_evolve: {
        type: Boolean,
        required: true
    },
    full_cp_40: {
        type: Number,
        required: true
    },
    full_cp_39: {
        type: Number,
        required: true
    },
    
})

module.exports = mongoose.model('pokemon', PokemonSchema);