<script>
  export default {
    name: 'PlantProfile',
    data() {
      return {
        plantid: this.$route.params.plantid,
        type: this.$route.params.type,
        selected: []
      }
    }
  }
</script>

<template>
  <main>
    <b-container>
      <b-row>
        <b-col cols="10">
          <b-button to="/myplants" type="button" class="btn-close"></b-button>
        </b-col>
        <b-col cols="1">
          <b-button to="/myplants/editplant" class="" variant="none"><img :src="`${baseDir}images/pencil.svg`"></b-button>
        </b-col>
      </b-row>
      <b-row>
        <center>
        <b-col>
          <img class="rounded-circle mt-1 img-center" :src="`${baseDir}images/${myplants[this.type]['plant'+this.plantid]['img']}`">
        </b-col>
        </center>
      </b-row>
      <b-row>
        <b-col>
          <h1 class='text-center mt-2'>{{ myplants[this.type]["plant"+this.plantid]['name'] }}</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
            <h5 class = 'text-center'> Birthday: {{myplants[this.type]["plant"+this.plantid]['date']}}</h5>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-card class="m-2">
            <h4>To-Do List:</h4>
            <b-row>
              <b-col cols="12">
                <div class="label-input">
                  <input class="me-2" type="checkbox" id="todo1">
                  <label for="todo1"> <h5>{{myplants[this.type]["plant"+this.plantid]['todo1']}}</h5> </label>
                </div>
              </b-col>
              <b-col cols="12">
                <div class="label-input">
                  <input class="me-2" type="checkbox" id="todo2">
                  <label for="todo2"> <h5> {{myplants[this.type]["plant"+this.plantid]['todo2']}} </h5> </label>
                </div>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-card class = "week m-2">
              <h4>Week at a Glance</h4>
              <center>
              <b-row>
                <b-col class = 'px-1' v-for="day in myplants['Days']">
                  {{ day.weekday }}
                </b-col>
              </b-row>
              <b-row>
                <b-col class='days mt-2 mx-1' v-for="day in myplants['Calendar']" :style="{'background-color': day.completion}">
                   {{ day.dateid }}
                </b-col>
              </b-row>
              </center>
              <b-row>
                <p class="mb-0 mt-2"> <strong> Finish the week strong by finishing your to-dos! </strong> </p>
              </b-row>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-card class="m-2">
            <h4> Description </h4>
            <p class="mb-0"> {{myplants[this.type]["plant"+this.plantid]['description']}} </p>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<style scoped>
.days {
  padding: 20px 10px;
  border-radius: 50%;
  height: 40px;
  width: 60px;
  color: white;
}
.img-center {
  width: 150px;
  height: 150px;
}
</style>
