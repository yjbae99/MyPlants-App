<script>
  export default {
    data() {
      return {
        form: {
          location: '',
          name: '',
          plants: null,
          text:'',
          value: '5',
          checked: []
        },
        plants: [{ text: 'Select One', value: null }, 'Arugula', 'Asparagus', 'Black Bean', 'Yellow Bean', 'Basil', 'Brocoli', 'Celery', 'Corn', 'Eggplant', 'Kale', 'Pepper', 'Tomato', 'Spinach', 'Beet', 'Brussel Sprouts', 'Carrot', 'Cauliflower', 'Corn', 'Pea', 'Squash', 'Turnip']
      }
    }
  }
</script>
<template>
<main>
    <b-container>
      <b-row>
        <b-col>
          <b-button to="/reviews" type="button" class="btn-close"></b-button>
        </b-col>
      </b-row>
      <b-row class = "m-3">
        <h1 class = "text-center"> Leave a Review</h1>
      </b-row>

      <b-form class="m-2">
        <b-form-group id="input-group-1" label="Your Name:" label-for="input-1">
          <b-form-input id="input-1" v-model="form.name" placeholder="Enter name" required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Plant:" label-for="input-2">
          <b-form-select id="input-2" v-model="form.plants" :options="plants" required
          ></b-form-select>
        </b-form-group>
        <b-form-group id="input-group-3" label="Location:" label-for="input-3">
          <b-form-input id="input-3" v-model="form.location" placeholder="Location"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-4" label="Comment:" label-for="input-4">
          <b-form-textarea id="input-4" placeholder="Add your comment!"
          ></b-form-textarea>
        </b-form-group>

        <b-form-group id="input-group-6" :label="`Level of expertise: ${form.value}`" label-for="input-6" description="Rank your expertise on a scale from 1-10">
          <b-form-input class="form-range" id="input-6" v-model="form.value" type="range" min="0" max="10"></b-form-input>
        </b-form-group>
        <b-button to="/reviews" style="float:right;" type="submit" variant="primary">Post Review</b-button>
      </b-form>
  </b-container>
</main>
</template>

<style scoped>

</style>
