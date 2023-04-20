<script>
  export default {
    props: {
      commentContent: String,
      commentAuthor: String,
      commentLocation: String,
      commentDate: String,
      commentPlant: String,
  }
  }
</script>

<template>

<b-card bg-variant="default" text-variant="black" class="m-2" >
  <b-card-text>
  <b-container>
    <b-row>
      <b-col> {{commentAuthor}} </b-col>
      <b-col>  {{commentDate}} </b-col>
      <b-col> {{commentLocation}} </b-col>
  </b-row>
  </b-container>

   <p> {{commentContent}}</p>


  </b-card-text>

</b-card>

</template>
