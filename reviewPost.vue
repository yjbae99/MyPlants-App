<script>
import reviewComment from '../components/reviewComment.vue'

export default {
  data: function () {
    return {
      isActive: 'hidden',
      button_text: "Comments"
    }
  },
  props: {
    content: String,
    author: String,
    location: String,
    date: String,
    plant: String,
    id: String,
  },
  components: {
    reviewComment
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
      if (this.button_text == "Comments"){
        this.button_text = "Hide Comments"
      }
      else if (this.button_text == "Hide Comments") {
        this.button_text = "Comments"
      }
    }
  }
}
</script>

<template>
  <b-card bg-variant="default" text-variant="black">
      <b-container>
        <b-row>
          <b-col cols="7">
            <h1>{{author}}</h1>
          </b-col>
          <b-col cols="5">
            <h5> {{date}}</h5>
          </b-col>
        </b-row>

        <b-row class="mb-2">
          <b-col cols="7"> {{plant}}</b-col>
          <b-col cols="5"> {{location}} </b-col>
        </b-row>
        <b-row class="mb-2">
            <b-col cols="12">
              {{content}}
            </b-col>
        </b-row>
        <b-row>
          <b-col offset="4" cols="4">
            <b-button class = "mx-5" variant = "link-dark" @click= toggle > {{button_text}}</b-button>
          </b-col>
          <div :class="{ hidden: isActive}" id="hidden" v-for="comment in reviews[this.plant]['comments']">
            <reviewComment :commentLocation="(comment['location'])" :commentContent="(comment['content'])" :commentAuthor="(comment['author'])" :commentDate="(comment['date'])"/>
          </div>
        </b-row>
      </b-container>
  </b-card>
</template>

<style>
input {
  border: 1px solid black;
  border-radius: 3px;
  padding: 10px;
  font-size: 20px;
}

button {
  color: #ffffff;
  background-color:  #6897BB;
  border-radius: 3px;
  padding: 10px;
  margin-left: 15px;
  font-size: 10px;
}

.hidden{
  display: none;
}
</style>
