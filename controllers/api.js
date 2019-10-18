const Pokemon = require('../models/Pokemon');

//Read
exports.getPokemons = async (req, res)=> {
    const pokemon = await Pokemon.find({});
    res.json(pokemon);
}

//Create
exports.createPokemons = async (req, res)=> {
    const { pokedex_number, name, img, generation, evolution_stage,
        evolved, family_id, cross_gen, type_1, type_2, weather_1,
        weather_2, stat_total, atk, def, sta, legendary, aquireable,
        spawns, regional, raidable, hatchable, shiny, nest, new_pokemon, 
        not_gettable, future_evolve, full_cp_40, full_cp_39 } = req.body;

    Pokemon.create({pokedex_number, name, img, generation, evolution_stage,
        evolved, family_id, cross_gen, type_1, type_2, weather_1,
        weather_2, stat_total, atk, def, sta, legendary, aquireable,
        spawns, regional, raidable, hatchable, shiny, nest, new_pokemon, 
        not_gettable, future_evolve, full_cp_40, full_cp_39});

    res.end();
}

//Update
exports.updatePokemons = async (req, res)=> {
    const { _id, pokedex_number, name, img, generation, evolution_stage,
    evolved, family_id, cross_gen, type_1, type_2, weather_1,
    weather_2, stat_total, atk, def, sta, legendary, aquireable,
    spawns, regional, raidable, hatchable, shiny, nest, new_pokemon, 
    not_gettable, future_evolve, full_cp_40, full_cp_39 } = req.body;

    await Pokemon.findOneAndUpdate({_id}, { pokedex_number, name, img, generation, evolution_stage,
        evolved, family_id, cross_gen, type_1, type_2, weather_1,
        weather_2, stat_total, atk, def, sta, legendary, aquireable,
        spawns, regional, raidable, hatchable, shiny, nest, new_pokemon, 
        not_gettable, future_evolve, full_cp_40, full_cp_39 }, {new: true});

    res.end();
}

//Delete
exports.deletePokemons = async (req, res)=> {
    const _id = req.body._id;
    await Pokemon.deleteOne({_id});
    res.end();
}


