<template>
  <div id="app" class="container my-3">
    <h1 class="text-center mb-3">Products List</h1>

        <div class="row justify-content-center mb-5">
          <div class="col-sm-4">
            <input v-model="search" class="form-control" type="text" placeholder="Search...">
          </div>
          <div class="col-sm-2">
            <button href="#modal_insert" class="btn btn-primary"
              data-toggle="modal" data-target="#modal_insert">Insert Product!
            </button>
          </div>
        </div>

    <!-- Modal Insert -->
    <div id="modal_insert" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content mx-3 p-3">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
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
          <button @click="insertNewPokemon" type="button" class="btn btn-primary" data-dismiss="modal">Add Product!</button>
        </div>
        </div>
      </div>
    </div>
    <!-- End of Modal Insert -->

    <div class="row">
      <div class="col-sm-3" v-for="item in filteredPokemonList" :key="item._id">
        <div class="card my-3 p-2 pokemon" style="width: 15rem; height:15rem; border: none;">
        <div class="img-container mx-auto" style="width: 10rem; height:10rem;">
            <img class="card-img-top img-fluid" :src="item.img" :alt="item.name">
        </div>
        <div class="card-body">
            <h5 class="card-title text-center">{{item.name}}</h5>
        </div>
      </div>
      </div>
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
      }
    }
  },
  computed: {
    filteredPokemonList() {
      return this.pokemon.filter((item) => {
        return item.name.toLowerCase().match(this.search.toLowerCase());
      })
    }
  },
  methods: {
    insertNewPokemon() {
      console.log(this.new_pokemon);
      axios({
        url: 'http://localhost:3030/create',
        method: 'post',
        data: this.new_pokemon,
      })
      .catch(err => console.log(err));
    }
  
  },
  mounted() {
    axios.get('http://localhost:3030')
    .then(res => this.pokemon = res.data)
    .catch(err => console.log(err));
  },
}
</script>

<style scoped>

.pokemon:hover {
  cursor: pointer;
}

</style>

