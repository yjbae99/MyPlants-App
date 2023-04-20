<script>
import navigation from '@/components/nav.vue';
export default {
  components: {
    navigation
  }
}
</script>
<template>
  <main>
    <b-container>
      <b-row>
        <b-col offset="10">
          <b-button to="/myplants/addplant" variant="light"> <h3 class="m-0"> + </h3> </b-button>
        </b-col>
      </b-row>
      <b-row class="">
        <h1 class="text-center">My Plants</h1>
      </b-row>
      <b-row class = 'mt-2'>
        <b-col><h3>Growing:</h3></b-col>
      </b-row>
      <b-row>
        <b-col class="p-2 m-0" cols="4" v-for="myplant in myplants['growing']">
          <b-button :to="`/myplants/growing/${myplant.plantid}`" variant="light" class = 'w-100 p-0"'>
            <img class="rounded-circle mt-1 img-center" :src="`${baseDir}images/${myplant.img}`">
            <p class="text-center"> {{ myplant.name }} </p>
          </b-button>
        </b-col>
      </b-row>
      <b-row class = 'mt-2'>
        <b-col><h3>Wishlist:</h3></b-col>
      </b-row>
      <b-row>
        <b-col class="p-2 m-0" cols="4" v-for="myplant in myplants['wishlist']">
          <b-button :to="`/myplants/wishlist/${myplant.plantid}`" variant="light" class = "w-100 p-0">
            <img class="rounded-circle mt-1 img-center" :src="`${baseDir}images/${myplant.img}`">
            <p class="text-center"> {{ myplant.name }} </p>
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </main>
<navigation></navigation>
</template>

<style scoped>
  .img-center {
    width: 100px;
    height: 100px;
  }
</style>
