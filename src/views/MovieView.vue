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
}

</style>