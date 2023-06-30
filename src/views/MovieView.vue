<template>
  <div class="cardcomponent">
    <Movies />
  </div>
</template>

<script>
import Movies from "../components/Movies.vue";
export default {
  name: "HomeView",
  data() {
    return {
      model: null,
      marvelmovies: "",
      lotrmovies: "",
      hpmovies: "",
      swmovies: "",
    };
  },
  created: function () {

  },
  components: { Movies },
};
</script>
<style scoped>
.cardcomponent {
  padding-top: 70px;
  width: 100%;
  padding-left: 0px;
}
@media only screen and (max-width: 723px) {
  .cardcomponent {
  padding-top: 70px;
  width: 96%;
  padding-left: 20px;
}
}
</style>