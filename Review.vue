<script>
import navigation from '@/components/nav.vue';
import reviewPost from '@/components/reviewPost.vue'
export default {
  components: {
    navigation,
    reviewPost
  }
}
</script>
<template>
  <main>
    <b-container>
    <b-row class="sticky-top mt-1">
      <b-col offset="10">
        <b-button to="/reviews/addreview" variant="light"> <h3 class="m-0"> + </h3> </b-button>
      </b-col>
    </b-row>
    <b-row>
      <h1 class="text-center"> Reviews Feed </h1>
    </b-row>
    <b-row class="m-2">
      <b-col cols="12" class="mb-2">
        <b-form-input class="" id="search" type="search" placeholder="Search"></b-form-input>
      </b-col>
    </b-row>
    <b-row class="m-2">
      <b-col cols="12" v-for="post in reviews">
      <reviewPost class="mb-2" :id="post['originalPost']['id']" :plant="post['originalPost']['name']" :location="post['originalPost']['location']" :content="post['originalPost']['content']" :author="post['originalPost']['author']" :date="post['originalPost']['date']"
      />
      </b-col>
    </b-row>
    </b-container>
  </main>
  <navigation></navigation>
</template>

<style scoped>

</style>
