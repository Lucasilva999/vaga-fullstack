<template>
  <div id="app">
    <div class="container my-3">
      <div class="row mx-auto">
        <div class="col text-center justify-content-center mb-4">
          <img class="img-fluid" src="./assets/pokeball.png" alt="Pokemon List" style="width:5rem;">
          <h1 class="text-uppercase text-monospace font-weight-bold">Pokemon List</h1>
        </div>
      </div>
      
      <ul class="nav mb-4">
        <li class="nav-item mr-3">
          <button href="#modal_insert" class="btn btn-primary"
              data-toggle="modal" data-target="#modal_insert">
              <span class="text-uppercase text-monospace font-weight-bold">
                  Add Pokemon!
              </span>
          </button>
        </li>
        <li class="nav-item mr-3">
          <input v-model="search" class="form-control" type="text" 
          placeholder="Search Pokemon..." style="width:20rem;">
        </li>
        <span class="nav-item text-uppercase text-monospace mr-2">Filter By:</span>
        <li class="nav-item text-uppercase text-monospace mr-3">
          <select v-model="filter" class="form-control form-control-sm">
            <option value="pokedex_number" selected>Pokedex Number</option>
            <option value="name">Alphabetical Order</option>
            <option value="atk">ATK</option>
            <option value="def">DEF</option>
            <option value="sta">STA</option>
            <option value="full_cp_39">100% CP @39</option>
            <option value="full_cp_40">100% CP @40</option>
            <option value="evolution_stage">EVOLUTION STAGE</option>
            <option value="family_id">FAMILY ID</option>
          </select>
        </li>
        <span class="nav-item text-uppercase text-monospace mr-2">Order By:</span>
        <li class="nav-item text-uppercase text-monospace mr-3">
          <select v-model="filter_order" class="form-control form-control-sm">
            <option value="asc" selected>ASC</option>
            <option value="desc">DESC</option>
          </select>
      </li>
      </ul>
      
      <!-- Modal Insert -->
      <div id="modal_insert" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered">
          <div class="modal-content mx-3 p-3">
            <div class="modal-header">
              <h5 class="modal-title">Add New Pokemon</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <div class="form-row">
              <div class="form-group col-md-1">
                <label for="pokedex_number">Pokedex</label>
                <input v-model.number="new_pokemon.pokedex_number" type="text" class="form-control" id="pokedex_number">
              </div>
              <div class="form-group col-md-3">
                <label for="name">Name</label>
                <input v-model.trim="new_pokemon.name" type="text" class="form-control" id="name">
              </div>
              <div class="form-group col-md-2">
                <label for="family_id">Family ID</label>
                <input  v-model.number="new_pokemon.family_id" type="text" class="form-control" id="family_id">
              </div>
              <div class="form-group col-md-2">
                <label for="generation">Generation</label>
                <select v-model="new_pokemon.generation" id="generation" class="form-control">
                  <option disabled selected>Choose...</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                </select>
              </div>
              <div class="form-group col-md-2">
                <label for="evolution_stage">Evolution Stage</label>
                <select v-model="new_pokemon.evolution_stage" id="evolution_stage" class="form-control">
                  <option disabled selected>Choose...</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-3">
                <label for="type_1">Type 1</label>
                <input v-model.trim="new_pokemon.type_1" type="text" class="form-control" id="type_1">
              </div>
              <div class="form-group col-md-3">
                <label for="type_2">Type 2</label>
                <input v-model.trim="new_pokemon.type_2" type="text" class="form-control" id="type_2">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-3">
                <label for="weather_1">Weather 1</label>
                <input v-model.trim="new_pokemon.weather_1" type="text" class="form-control" id="weather_1">
              </div>
              <div class="form-group col-md-3">
                <label for="weather_2">Weather 2</label>
                <input v-model.trim="new_pokemon.weather_2" type="text" class="form-control" id="weather_2">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-1">
                <label for="stat_total">Total Stat</label>
                <input v-model.number="new_pokemon.stat_total" type="text" class="form-control" id="stat_total">
              </div>
              <div class="form-group col-md-1">
                <label for="atk">ATK</label>
                <input v-model.number="new_pokemon.atk" type="text" class="form-control" id="atk">
              </div>
              <div class="form-group col-md-1">
                <label for="def">DEF</label>
                <input v-model.number="new_pokemon.def" type="text" class="form-control" id="def">
              </div>
              <div class="form-group col-md-1">
                <label for="sta">STA</label>
                <input v-model.number="new_pokemon.sta" type="text" class="form-control" id="sta">
              </div>
              <div class="form-group col-md-2">
                <label for="full_cp_39">100% CP @39</label>
                <input v-model.number="new_pokemon.full_cp_39" type="text" class="form-control" id="full_cp_39">
              </div>
              <div class="form-group col-md-2">
                <label for="full_cp_40">100% CP @40</label>
                <input v-model.number="new_pokemon.full_cp_40" type="text" class="form-control" id="full_cp_40">
              </div>
            </div>
            <div class="form-group">
              <label for="img">IMG Url</label>
              <input v-model="new_pokemon.img" type="text" class="form-control" id="img">
            </div>
            <hr>
            <div class="form-row">
              <div class="form-group col-md-2">
              <div class="form-check">
                <input v-model="new_pokemon.evolved" class="form-check-input" type="checkbox" id="evolved" value="true">
                <label class="form-check-label" for="evolved">
                  Evolved
                </label>
              </div>
            </div>
            <div class="form-group col-md-2">
              <div class="form-check">
                <input v-model="new_pokemon.cross_gen" class="form-check-input" type="checkbox" id="cross_gen" value="true">
                <label class="form-check-label" for="cross_gen">
                  Cross Gen
                </label>
              </div>
            </div>
            <div class="form-group col-md-2">
              <div class="form-check">
                <input v-model="new_pokemon.legendary" class="form-check-input" type="checkbox" id="legendary" value="true">
                <label class="form-check-label" for="legendary">
                  Legendary
                </label>
              </div>
            </div>
            <div class="form-group col-md-2">
              <div class="form-check">
                <input v-model="new_pokemon.aquireable" class="form-check-input" type="checkbox" id="aquireable" value="true">
                <label class="form-check-label" for="aquireable">
                  Aquireable
                </label>
              </div>
            </div>
            <div class="form-group col-md-2">
              <div class="form-check">
                <input v-model="new_pokemon.spawns" class="form-check-input" type="checkbox" id="spawns" value="true">
                <label class="form-check-label" for="spawns">
                  Spawns
                </label>
              </div>
            </div>
            <div class="form-group col-md-2">
              <div class="form-check">
                <input v-model="new_pokemon.regional" class="form-check-input" type="checkbox" id="regional" value="true">
                <label class="form-check-label" for="regional">
                  Regional
                </label>
              </div>
            </div>
            <div class="form-group col-md-2">
              <div class="form-check">
                <input v-model="new_pokemon.raidable" class="form-check-input" type="checkbox" id="raidable" value="true">
                <label class="form-check-label" for="raidable">
                  Raidable
                </label>
              </div>
            </div>
            <div class="form-group col-md-2">
              <div class="form-check">
                <input v-model="new_pokemon.shiny" class="form-check-input" type="checkbox" id="shiny" value="true">
                <label class="form-check-label" for="shiny">
                  Shiny
                </label>
              </div>
            </div>
            <div class="form-group col-md-2">
              <div class="form-check">
                <input v-model="new_pokemon.nest" class="form-check-input" type="checkbox" id="nest" value="true">
                <label class="form-check-label" for="nest">
                  Nest
                </label>
              </div>
            </div>
            <div class="form-group col-md-2">
              <div class="form-check">
                <input v-model="new_pokemon.new_pokemon"  class="form-check-input" type="checkbox" id="new_pokemon" value="true">
                <label class="form-check-label" for="new_pokemon">
                  New
                </label>
              </div>
            </div>
            <div class="form-group col-md-2">
              <div class="form-check">
                <input v-model="new_pokemon.not_gettable" class="form-check-input" type="checkbox" id="not_gettable" value="true">
                <label class="form-check-label" for="not_gettable">
                  Not Gettable
                </label>
              </div>
            </div>
            <div class="form-group col-md-2">
              <div class="form-check">
                <input v-model="new_pokemon.future_evolve" class="form-check-input" type="checkbox" id="future_evolve" value="true">
                <label class="form-check-label" for="future_evolve">
                  Future Evolve
                </label>
              </div>
            </div>
            <div class="form-group col-md-2">
              <div class="form-check">
                <input v-model="new_pokemon.hatchable" class="form-check-input" type="checkbox" id="hatchable" value="true">
                <label class="form-check-label" for="hatchable">
                  Hatchable
                </label>
              </div>
            </div>
          </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button @click="resetPokemonObject('new_pokemon')" type="button" class="btn btn-info">Clear</button>
            <button @click="insertNewPokemon" type="button" class="btn btn-primary" data-dismiss="modal">Add Pokemon!</button>
          </div>
          </div>
        </div>
      </div>
      <!-- End of Modal Insert -->
      
      <div v-for="(item, index) in paginatedAndFilteredPokemonList" :key="item._id">
          <div class="card p-2" style="border:none;">
            <div class="card-header bg-primary text-white">
              <span class="text-uppercase text-monospace font-weight-bold" style="font-size:1.5rem;">
                  {{item.name}}
              </span>
              <i class="far fa-trash-alt float-right ml-2 pointer" style="font-size:1.3rem;"
                data-toggle="modal" :data-target="'#modal_delete_' + item._id" title="Delete">
              </i>
              <i class="far fa-edit float-right pointer" style="font-size:1.3rem;"
              @click="updateValueEditPokemon(index)"
                data-toggle="modal" :data-target="'#modal_edit_' + item._id" title="Edit"></i>
              </div>
          <div class="card-body">
            <div class="row text-uppercase text-monospace">
                <div class="col-sm-2">
                    <div class="img-container" style="width: 10rem; height:10rem;">
                        <img class="card-img-top img-fluid" :src="item.img" :alt="item.name">
                    </div>
                </div>
                <div class="col-sm-2">
                    <p>Pokedex: <span class="badge badge-danger">{{item.pokedex_number}}</span></p>
                    <p>Generation: <span class="badge badge-danger">{{item.generation}}</span></p>
                    <p>Evolution Stage: <span class="badge badge-danger">{{item.evolution_stage}}</span></p>
                    <p>Family ID: <span class="badge badge-danger">{{item.family_id}}</span></p>
                    <p>Type 1: {{item.type_1}}</p>
                    <p>Type 2: {{item.type_2}}</p>                    
                </div>
                <div class="col-sm-2">
                    <p>Legendary: {{item.legendary === true ? 'Yes' : 'No'}}</p>
                    <p>Weather 1: {{item.weather_1}}</p>
                    <p>Weather 2: {{item.weather_2}}</p>
                    <p>Evolved: {{item.evolved === true ? 'Yes' : 'No'}}</p>
                    <p>Future Evolve: {{item.future_evolve === true ? 'Yes' : 'No'}}</p>
                </div>
                <div class="col-sm-2">
                    <p>Cross-Gen: {{item.cross_gen === true ? 'Yes' : 'No'}}</p>
                    <p>Shiny: {{item.shiny === true ? 'Yes' : 'No'}}</p>
                    <p>Aquireable: {{item.aquireable === true ? 'Yes' : 'No'}}</p>
                    <p>New: {{item.new_pokemon === true ? 'Yes' : 'No'}}</p>
                    <p>Nest: {{item.nest === true ? 'Yes' : 'No'}}</p>
                </div>
                <div class="col-sm-2">
                    <p>Spawns: {{item.spawns === true ? 'Yes' : 'No'}}</p>
                    <p>Regional: {{item.regional === true ? 'Yes' : 'No'}}</p>
                    <p>Raidable: {{item.raidable === true ? 'Yes' : 'No'}}</p>
                    <p>Hatchable: {{item.hatchable === true ? 'Yes' : 'No'}}</p>
                    <p>Not Gettable: {{item.not_gettable === true ? 'Yes' : 'No'}}</p>
                    
                    
                </div>
                <div class="col-sm-2">
                    <p>ATK: <span class="badge badge-primary">{{item.atk}}</span></p>
                    <p>DEF: <span class="badge badge-info">{{item.def}}</span></p>
                    <p>STA: <span class="badge badge-success">{{item.sta}}</span></p>
                    <p>100% CP @39: <span class="badge badge-warning">{{item.full_cp_39}}</span></p>
                    <p>100% CP @40: <span class="badge badge-warning">{{item.full_cp_40}}</span></p>
                    <p>Stat Total: <span class="badge badge-warning">{{item.stat_total}}</span></p>
                </div>
            </div>
          </div>
        </div>

        <!-- Modal Edit -->
        <div :id="'modal_edit_' + item._id" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content mx-3 p-3">
              <div class="modal-header">
                <h5 class="modal-title">Edit Pokemon - <span class="text-capitalize">{{item.name}}</span></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
              <div class="form-row">
                <div class="form-group col-md-1">
                  <label for="pokedex_number">Pokedex</label>
                  <input v-model.number="edit_pokemon.pokedex_number" type="text" class="form-control" id="pokedex_number">
                </div>
                <div class="form-group col-md-3">
                  <label for="name">Name</label>
                  <input v-model.trim="edit_pokemon.name" type="text" class="form-control" id="name">
                </div>
                <div class="form-group col-md-2">
                  <label for="family_id">Family ID</label>
                  <input  v-model.number="edit_pokemon.family_id" type="text" class="form-control" id="family_id">
                </div>
                <div class="form-group col-md-2">
                  <label for="generation">Generation</label>
                  <select v-model="edit_pokemon.generation" id="generation" class="form-control">
                    <option disabled selected>Choose...</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                  </select>
                </div>
                <div class="form-group col-md-2">
                  <label for="evolution_stage">Evolution Stage</label>
                  <select v-model="edit_pokemon.evolution_stage" id="evolution_stage" class="form-control">
                    <option disabled selected>Choose...</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-3">
                  <label for="type_1">Type 1</label>
                  <input v-model.trim="edit_pokemon.type_1" type="text" class="form-control" id="type_1">
                </div>
                <div class="form-group col-md-3">
                  <label for="type_2">Type 2</label>
                  <input v-model.trim="edit_pokemon.type_2" type="text" class="form-control" id="type_2">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-3">
                  <label for="weather_1">Weather 1</label>
                  <input v-model.trim="edit_pokemon.weather_1" type="text" class="form-control" id="weather_1">
                </div>
                <div class="form-group col-md-3">
                  <label for="weather_2">Weather 2</label>
                  <input v-model.trim="edit_pokemon.weather_2" type="text" class="form-control" id="weather_2">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-1">
                  <label for="stat_total">Total Stat</label>
                  <input v-model.number="edit_pokemon.stat_total" type="text" class="form-control" id="stat_total">
                </div>
                <div class="form-group col-md-1">
                  <label for="atk">ATK</label>
                  <input v-model.number="edit_pokemon.atk" type="text" class="form-control" id="atk">
                </div>
                <div class="form-group col-md-1">
                  <label for="def">DEF</label>
                  <input v-model.number="edit_pokemon.def" type="text" class="form-control" id="def">
                </div>
                <div class="form-group col-md-1">
                  <label for="sta">STA</label>
                  <input v-model.number="edit_pokemon.sta" type="text" class="form-control" id="sta">
                </div>
                <div class="form-group col-md-2">
                  <label for="full_cp_39">100% CP @39</label>
                  <input v-model.number="edit_pokemon.full_cp_39" type="text" class="form-control" id="full_cp_39">
                </div>
                <div class="form-group col-md-2">
                  <label for="full_cp_40">100% CP @40</label>
                  <input v-model.number="edit_pokemon.full_cp_40" type="text" class="form-control" id="full_cp_40">
                </div>
              </div>
              <div class="form-group">
                <label for="img">IMG Url</label>
                <input v-model="edit_pokemon.img" type="text" class="form-control" id="img">
              </div>
              <hr>
              <div class="form-row">
                <div class="form-group col-md-2">
                <div class="form-check">
                  <input v-model="edit_pokemon.evolved" class="form-check-input" type="checkbox" id="evolved" value="true">
                  <label class="form-check-label" for="evolved">
                    Evolved
                  </label>
                </div>
              </div>
              <div class="form-group col-md-2">
                <div class="form-check">
                  <input v-model="edit_pokemon.cross_gen" class="form-check-input" type="checkbox" id="cross_gen" value="true">
                  <label class="form-check-label" for="cross_gen">
                    Cross Gen
                  </label>
                </div>
              </div>
              <div class="form-group col-md-2">
                <div class="form-check">
                  <input v-model="edit_pokemon.legendary" class="form-check-input" type="checkbox" id="legendary" value="true">
                  <label class="form-check-label" for="legendary">
                    Legendary
                  </label>
                </div>
              </div>
              <div class="form-group col-md-2">
                <div class="form-check">
                  <input v-model="edit_pokemon.aquireable" class="form-check-input" type="checkbox" id="aquireable" value="true">
                  <label class="form-check-label" for="aquireable">
                    Aquireable
                  </label>
                </div>
              </div>
              <div class="form-group col-md-2">
                <div class="form-check">
                  <input v-model="edit_pokemon.spawns" class="form-check-input" type="checkbox" id="spawns" value="true">
                  <label class="form-check-label" for="spawns">
                    Spawns
                  </label>
                </div>
              </div>
              <div class="form-group col-md-2">
                <div class="form-check">
                  <input v-model="edit_pokemon.regional" class="form-check-input" type="checkbox" id="regional" value="true">
                  <label class="form-check-label" for="regional">
                    Regional
                  </label>
                </div>
              </div>
              <div class="form-group col-md-2">
                <div class="form-check">
                  <input v-model="edit_pokemon.raidable" class="form-check-input" type="checkbox" id="raidable" value="true">
                  <label class="form-check-label" for="raidable">
                    Raidable
                  </label>
                </div>
              </div>
              <div class="form-group col-md-2">
                <div class="form-check">
                  <input v-model="edit_pokemon.shiny" class="form-check-input" type="checkbox" id="shiny" value="true">
                  <label class="form-check-label" for="shiny">
                    Shiny
                  </label>
                </div>
              </div>
              <div class="form-group col-md-2">
                <div class="form-check">
                  <input v-model="edit_pokemon.nest" class="form-check-input" type="checkbox" id="nest" value="true">
                  <label class="form-check-label" for="nest">
                    Nest
                  </label>
                </div>
              </div>
              <div class="form-group col-md-2">
                <div class="form-check">
                  <input v-model="edit_pokemon.new_pokemon"  class="form-check-input" type="checkbox" id="new_pokemon" value="true">
                  <label class="form-check-label" for="new_pokemon">
                    New
                  </label>
                </div>
              </div>
              <div class="form-group col-md-2">
                <div class="form-check">
                  <input v-model="edit_pokemon.not_gettable" class="form-check-input" type="checkbox" id="not_gettable" value="true">
                  <label class="form-check-label" for="not_gettable">
                    Not Gettable
                  </label>
                </div>
              </div>
              <div class="form-group col-md-2">
                <div class="form-check">
                  <input v-model="edit_pokemon.future_evolve" class="form-check-input" type="checkbox" id="future_evolve" value="true">
                  <label class="form-check-label" for="future_evolve">
                    Future Evolve
                  </label>
                </div>
              </div>
              <div class="form-group col-md-2">
                <div class="form-check">
                  <input v-model="edit_pokemon.hatchable" class="form-check-input" type="checkbox" id="hatchable" value="true">
                  <label class="form-check-label" for="hatchable">
                    Hatchable
                  </label>
                </div>
              </div>
            </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button @click="resetPokemonObject('edit_pokemon')" type="button" class="btn btn-info">Clear</button>
              <button @click="updatePokemon" type="button" class="btn btn-primary" data-dismiss="modal">Update Pokemon!</button>
            </div>
            </div>
          </div>
        </div>
        <!-- End of Modal Edit -->

        <!-- Modal Delete -->
          <div :id="'modal_delete_' + item._id" class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Delete Pokemon - <span class="text-capitalize">{{item.name}}</span>?</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>Are you sure you want to delete this Pokemon?</p>
                    <p>All information associated with It will be lost</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button @click="deletePokemon(item._id)" class="btn btn-primary" data-dismiss="modal">Delete Pokemon</button>
                </div>
                </div>
            </div>
            </div>
            </div>
        <!-- End of Modal Delete -->

      </div>

      <nav class="my-3">
      <ul class="pagination">
          <li class="page-item pointer"><a class="page-link" v-if="pagination.page > 1"
          @click="goToPreviousPage">Previous</a></li>
          <li class="page-item pointer"><a class="page-link" v-if="pagination.page > 1"
          @click="goToPreviousPage">{{pagination.page - 1}}</a></li>
        
          <li class="page-item active pointer"><a class="page-link">{{pagination.page}}</a></li>
        
          <li class="page-item pointer"><a class="page-link" v-if="pagination.page < calcTotalPages"
          @click="goToNextPage">{{pagination.page + 1}}</a></li>
          <li class="page-item pointer"><a class="page-link" v-if="pagination.page < calcTotalPages"
          @click="goToNextPage">Next</a></li>
      </ul>
    </nav>
  </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'app',
  components: {
    
  },
  data() {
    return {
      search: '',
      filter: 'pokedex_number',
      filter_order: 'asc',
      pagination: {
        page: 1,
        limit: 3,
      },
      pokemon: [],
      new_pokemon: {
        pokedex_number: '',
        name: '',
        img: '',
        generation: '',
        evolution_stage: '',
        evolved: false,
        family_id: '',
        cross_gen: false,
        type_1: '',
        type_2: '',
        weather_1: '',
        weather_2: '',
        stat_total: '',
        atk: '',
        def: '',
        sta: '',
        legendary: false,
        aquireable: false,
        spawns: false,
        regional: false,
        raidable: false,
        hatchable: false,
        shiny: false,
        nest: false,
        new_pokemon: false,
        not_gettable: false,
        future_evolve: false,
        full_cp_40: '',
        full_cp_39: ''
      },
      edit_pokemon: {
        pokedex_number: '',
        name: '',
        img: '',
        generation: '',
        evolution_stage: '',
        evolved: false,
        family_id: '',
        cross_gen: false,
        type_1: '',
        type_2: '',
        weather_1: '',
        weather_2: '',
        stat_total: '',
        atk: '',
        def: '',
        sta: '',
        legendary: false,
        aquireable: false,
        spawns: false,
        regional: false,
        raidable: false,
        hatchable: false,
        shiny: false,
        nest: false,
        new_pokemon: false,
        not_gettable: false,
        future_evolve: false,
        full_cp_40: '',
        full_cp_39: ''
      }
    }
  },
  computed: {
    paginatedAndFilteredPokemonList() {
      return this.filteredPokemonList.slice(this.calcOffset, (this.calcOffset + this.pagination.limit));
    },
    filteredPokemonList() {
      if(this.filter_order === 'asc') {
        return this.pokemon.sort((a, b) => {
        if(a[this.filter] < b[this.filter]) { return -1;}
        if(a[this.filter] > b[this.filter]) { return 1;}
        return 0;
      }).filter((item) => {
        return item.name.toLowerCase().match(this.search.toLowerCase());
      })
      }
      if(this.filter_order === 'desc') {
        return this.pokemon.sort((a, b) => {
        if(a[this.filter] < b[this.filter]) { return 1;}
        if(a[this.filter] > b[this.filter]) { return -1;}
        return 0;
      }).filter((item) => {
        return item.name.toLowerCase().match(this.search.toLowerCase());
      })
      }  
    },
    calcOffset() {
      return (this.pagination.page - 1) * this.pagination.limit;
    },
    calcTotalPokemon() {
      return this.filteredPokemonList.length;
    },
    calcLastOffset() {
      return ((this.pagination.page - 1) - 1) * this.pagination.limit;
    },
    calcTotalPages() {
      return Math.ceil(this.calcTotalPokemon / this.pagination.limit);
    },
  },
  methods: {
    getData() {
      axios.get('http://localhost:3030')
      .then(res => this.pokemon = res.data)
      .catch(err => console.log(err));
    },
    goToPreviousPage() {
      this.pagination.page--;
      console.log(this.pagination.page);
    },
    goToNextPage() {
      this.pagination.page++;
      console.log(this.pagination.page);
    },
    async insertNewPokemon() {
      try {
        await axios({
        url: 'http://localhost:3030/create',
        method: 'post',
        data: this.new_pokemon,
      })
      await this.getData();
      this.resetNewPokemonObject();

      } catch(err) {
        console.log(err);
      }
    },
    async updatePokemon() {
     try {
       await axios({
        url: 'http://localhost:3030/update',
        method: 'post',
        data: this.edit_pokemon,
      })
      await this.getData(); 
     
     } catch(err) {
       console.log(err);
     }
    },
    async deletePokemon(_id) {
      try {
        await axios({
        url: 'http://localhost:3030/delete',
        method: 'post',
        data: { _id },
      })
      await this.getData();
      } catch(err) {
        console.log(err)
      }
    },
    updateValueEditPokemon(index) {
        this.edit_pokemon._id = this.filteredPokemonList[index]._id;
        this.edit_pokemon.pokedex_number = this.filteredPokemonList[index].pokedex_number;
        this.edit_pokemon.name = this.filteredPokemonList[index].name;
        this.edit_pokemon.img = this.filteredPokemonList[index].img;
        this.edit_pokemon.generation = this.filteredPokemonList[index].generation;
        this.edit_pokemon.evolution_stage = this.filteredPokemonList[index].evolution_stage;
        this.edit_pokemon.evolved = this.filteredPokemonList[index].evolved;
        this.edit_pokemon.family_id = this.filteredPokemonList[index].family_id;
        this.edit_pokemon.cross_gen = this.filteredPokemonList[index].cross_gen;
        this.edit_pokemon.type_1 = this.filteredPokemonList[index].type_1;
        this.edit_pokemon.type_2 = this.filteredPokemonList[index].type_2;
        this.edit_pokemon.weather_1 = this.filteredPokemonList[index].weather_1;
        this.edit_pokemon.weather_2 = this.filteredPokemonList[index].weather_2;
        this.edit_pokemon.stat_total = this.filteredPokemonList[index].stat_total;
        this.edit_pokemon.atk = this.filteredPokemonList[index].atk;
        this.edit_pokemon.def = this.filteredPokemonList[index].def;
        this.edit_pokemon.sta = this.filteredPokemonList[index].sta;
        this.edit_pokemon.legendary = this.filteredPokemonList[index].legendary;
        this.edit_pokemon.aquireable = this.filteredPokemonList[index].aquireable;
        this.edit_pokemon.spawns = this.filteredPokemonList[index].spawns;
        this.edit_pokemon.regional = this.filteredPokemonList[index].regional;
        this.edit_pokemon.raidable = this.filteredPokemonList[index].raidable;
        this.edit_pokemon.hatchable = this.filteredPokemonList[index].hatchable;
        this.edit_pokemon.shiny = this.filteredPokemonList[index].shiny;
        this.edit_pokemon.nest = this.filteredPokemonList[index].nest;
        this.edit_pokemon.new_pokemon = this.filteredPokemonList[index].new_pokemon;
        this.edit_pokemon.not_gettable = this.filteredPokemonList[index].not_gettable;
        this.edit_pokemon.future_evolve = this.filteredPokemonList[index].future_evolve;
        this.edit_pokemon.full_cp_39 = this.filteredPokemonList[index].full_cp_39;
        this.edit_pokemon.full_cp_40 = this.filteredPokemonList[index].full_cp_40;        
    },
    resetPokemonObject(obj) {
      this[obj] = {
        pokedex_number: '',
        name: '',
        img: '',
        generation: '',
        evolution_stage: '',
        evolved: false,
        family_id: '',
        cross_gen: false,
        type_1: '',
        type_2: '',
        weather_1: '',
        weather_2: '',
        stat_total: '',
        atk: '',
        def: '',
        sta: '',
        legendary: false,
        aquireable: false,
        spawns: false,
        regional: false,
        raidable: false,
        hatchable: false,
        shiny: false,
        nest: false,
        new_pokemon: false,
        not_gettable: false,
        future_evolve: false,
        full_cp_40: '',
        full_cp_39: ''
      }
    }
  },
  watch: {
    filter() {
      this.filter_order = 'asc';
    },
    filter_order() {
      this.pagination.page = 1;
    }
  },
  beforeMount() {
    this.getData();
  }
  
}
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>

