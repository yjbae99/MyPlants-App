<script>
export default {
  data: function () {
    return {
      plant: this.plants["plant"+this.$route.params.plantid],
    }
  }
}
</script>

<template>
  <main>
    <b-container>
      <b-row>
        <b-col cols="10">
          <b-button to="/" type="button" class="btn-close"></b-button>
        </b-col>
        <b-col cols="1">
          <b-dropdown variant="none" size="lg" no-caret>
            <template class="test" #button-content>
              ...
            </template>
            <b-dropdown-item> Add to My Plants</b-dropdown-item>
            <b-dropdown-item> Add to Wishlist </b-dropdown-item>
          </b-dropdown>
        </b-col>
      </b-row>
      <b-row class="p-0 m-0">
        <h1 class="text-center"> {{ plant['name'] }} </h1>
        <h5 class="text-center"> ${{plant['price']}} </h5>
      </b-row>
      <b-row class="p-0 m-0">
        <img class="img-center mx-auto mt-3 mb-5" :src="`${baseDir}images/${plant.id}.jpeg`">
      </b-row>
      <b-row>
        <b-col cols = 1></b-col>
        <b-col cols="4">
          <h5 class="w-100"> Difficulty </h5>
        </b-col>
      </b-row>

      <b-row class = "text-center">
        <b-col cols="1"></b-col>
        <b-col cols="10">
          <b-progress :value="plant['difficulty']" :max="5" show-value="true"> </b-progress>
        </b-col>
      </b-row>

      <b-row class = "mt-2">
        <b-col cols = '1'></b-col>
        <b-col cols="4">
          <h5> Space Needed </h5>
        </b-col>
      </b-row>
      <b-row class = 'text-center'>
        <b-col cols="1"></b-col>
        <b-col cols="10">
          <b-progress :value="plant['space']" :max="5" show-value="true"> </b-progress>
        </b-col>
      </b-row>

      <b-row class="mt-2">
        <b-col cols = '1'></b-col>
        <b-col cols="5">
          <h5> Time Commitment </h5>
        </b-col>
      </b-row>
      <b-row class = 'text-center'>
        <b-col cols='1'></b-col>
        <b-col cols="10">
          <b-progress :value="plant['time']" :max="5" show-value="true"> </b-progress>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="10" offset="1" class = 'mt-2'>
          <div class="progress" style="height: 5px;">
            <div class="progress-bar" role="progressbar" aria-label="Progress" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <h6 class="" style="width: 2rem; height:2rem;">1</h6>
          <h6 class="position-absolute top-0 end-0 mt-1" style="width: 2rem; height:2rem;">5</h6>
        </b-col>
      </b-row>
  </b-container>
  </main>
</template>

<style scoped>
.img-center{
  height: 200px;
  width:200px;
  border-radius: 30px;
}
.progress {
  height: 25px;
  border-radius: 40px;
}
.test{
  font-size: 500pt;
}

</style>
