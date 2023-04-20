<template>
  <b-navbar class="test fixed-bottom border-top border-dark bg-dark" style="height:75px;" type="light" variant="light">
      <b-navbar-nav class="nav-fill w-100 p-0 m-0">
        <b-nav-item class="p-0 navsvg" to="/myplants"> <center>
            <img style="display:block" width="25" height="25" :src="`${baseDir}images/plant-nav.svg`">
            MyPlants
          </center>
        </b-nav-item>
        <b-nav-item class="p-0 navsvg" to="/"> <center>
            <img style="display:block" width="25" height="25" :src="`${baseDir}images/book-nav.svg`">
            Catalog
            </center>
        </b-nav-item>
        <b-nav-item class="p-0 navsvg" to="/reviews"> <center>
            <img style="display:block" width="25" height="25" :src="`${baseDir}images/review-nav.svg`">
            Reviews
          </center>
        </b-nav-item>
      </b-navbar-nav>
  </b-navbar>
</template>

<style scoped>
.navsvg {
  filter: invert(1);
}
.test{
  z-index: 200;
}
</style>
