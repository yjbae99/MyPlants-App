<script>
import accordionBody from '@/components/accordionBody.vue';
import navigation from '@/components/nav.vue';
export default {
  data() {
    return {
      open: false,
      sort: [{ text: 'Sort by', value: null }, 'ascending', 'descending', 'price', 'difficulty', 'space', 'time'],
      sortid: null,
    };
  },
  components: {
    accordionBody,
    navigation
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  }
}
</script>

<template>
  <main>
    <b-container>
    <b-row class="m-2 mb-3">
      <h1 class="text-center"> Vegetable Catalog </h1>
    </b-row>
    <b-row class="mb-3">
        <b-col cols="5">
          <b-form>
            <input class="form-control" type = "search" placeholder = 'Search ...'>
          </b-form>
        </b-col>
        <b-col cols="5">
          <b-form-select v-model="sortid" id="input-2" :options="sort"
          ></b-form-select>
        </b-col>
        <b-col cols="1"> <center>
          <b-button @click=toggle variant="none" class="">
            <img class="mx-auto" height="25" width="25" :src="`${baseDir}images/filter.svg`">
          </b-button>
          </center>
        </b-col>
    </b-row>
    <div class="slidein p-3" :class="open ? 'open' : ''">
      <b-button @click=toggle type="button" class="btn-close"></b-button>
      <h1 class="m-3"> Filter Vegetables </h1>
      <div class="accordion d-grid gap-2" id="accordionExample">
        <div class="accordion-item">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            Difficulty
          </button>
          <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body d-flex justify-content-evenly">
              <accordionBody></accordionBody>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Space
          </button>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body d-flex justify-content-evenly">
              <accordionBody></accordionBody>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Time
          </button>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body d-flex justify-content-evenly">
              <accordionBody></accordionBody>
            </div>
          </div>
        </div>
      </div>
      <b-button class="mt-2" style="float:right;" @click="toggle"> Apply Filters </b-button>
    </div>
    <b-row>
      <b-col class="p-2 m-0" cols="4" v-for="plant in plants">
        <b-button :to="`/plant/${plant.id}`" variant="light" class="w-100 p-0">
          <img class="rounded-circle mt-1 img-center" :src="`${baseDir}images/${plant.id}.jpeg`">
          <p class="text-center"> {{ plant.name }} </p>
        </b-button>
      </b-col>
    </b-row>
    </b-container>
  </main>
  <navigation></navigation>
</template>

<style scoped>
  .img-center{
    width: 100px;
    height: 100px;
  }
  .slidein {
    width: 350px;
    position: fixed;
    z-index: 100;
    top: 0;
    right: -500px;
    background: #ddd;
    height: 100%;
    box-shadow: 1px 1px 10px rgba(0,0,0,.5);
    transition: all 0.5s ease-in-out;
}
  .open {
    right: 0px;
  }
</style>
