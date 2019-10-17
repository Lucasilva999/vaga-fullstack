<template>
  <div id="app" class="container my-3">
    <h1 class="text-center mb-3">Pokemon List</h1>
    <div class="row mb-5">
      <div class="col text-center">
        <button href="#modal_insert" class="btn btn-primary"
        data-toggle="modal" data-target="#modal_insert">Insert Pokemon!</button>
      </div>
    </div>

    <!-- Modal Insert -->
    <div id="modal_insert" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content">
          ...
        </div>
      </div>
    </div>
    <!-- End of Modal Insert -->

    <div class="row">
      <div class="col-sm-3" v-for="item in pokemon" :key="item._id">
        <div class="card p-2" style="width: 15rem; height:15rem;">
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
      pokemon: [],
      new_pokemon: {
        pokedex_number: '',
        name: '',
        img: '',
        generation: '',
        evolution_stage: '',
        evolved: '',
        family_id: '',
        cross_gen: '',
        type_1: '',
        type_2: '',
        weather_1: '',
        weather_2: '',
        stat_total: '',
        atk: '',
        def: '',
        sta: '',
        legendary: '',
        aquireable: '',
        spawns: '',
        regional: '',
        raidable: '',
        hatchable: '',
        shiny: '',
        nest: '',
        new_pokemon: '',
        not_gettable: '',
        future_evolve: '',
        full_cp_40: '',
        full_cp_39: ''
      }
    }
  },
  methods: {
  
  },
  mounted() {
    axios.get('http://localhost:3030')
    .then(res => this.pokemon = res.data)
    .catch(err => console.log(err));
  },
}
</script>

<style>

</style>
