<script>
  export default {
    data() {
      return {
        tags: []
      }
    }
  }
</script>

<template>
  <main>
  <b-container>
    <b-row>
      <b-col>
        <b-button to="/myplants" type="button" class="btn-close"></b-button>
      </b-col>
    </b-row>
    <b-row> <center>
      <img class="rounded-circle mt-1 img-center" :src="`${baseDir}images/plant.jpg`">
    </center>
    </b-row>
    <b-form class="m-2">
      <center>
      <b-form-group id="input-group-1" description="Add a profile picture">
        <input type="file" class="form-control form-control-sm w-50" id="input-0">
      </b-form-group>
      </center>
      <b-form-group id="input-group-1" label="Plant Name:" label-for="input-1" >
        <b-form-input id="input-1" type="text" placeholder="Plant name" required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Date Planted:" label-for="input-2">
        <b-form-input id="input-2" type="date" placeholder="Date" required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Plant To-dos:" label-for="tags-basic" description="Enter the daily tasks that are needed to take care of the plant." >
        <b-form-tags id="tags-basic" placeholder="Add daily plant to-do's" v-model="tags"></b-form-tags>
      </b-form-group>
      <b-form-group id="input-group-4" label="Description:" label-for="input-4">
        <b-form-textarea id="input-4" placeholder="Describe your plant!"
        ></b-form-textarea>
      </b-form-group>
      <b-button to="/myplants" style="float:right;" type="submit" variant="primary">Add</b-button>
    </b-form>

  </b-container>
</main>
</template>

<style scoped>
.img-center{
  width: 150px;
  height: 150px;
}
</style>
