<template>
  <div class="cardcomponent">
    <v-row>
      <v-col cols="6" class="text-center" v-if="movie">
        <v-img :src="movie.Poster" class="mx-auto poster"></v-img>
      </v-col>
      <v-col cols="5" class="roboto">
        <h1 class="text-left whitetext">{{ movie.Title }}</h1>
        <p class="yellowtext">
          Released: <span style="color: rgb(192, 192, 192)">{{ movie.Released }}</span
          >, Lenght: <span style="color: rgb(192, 192, 192)">{{ movie.Runtime }}</span
          >, Genre: <span style="color: rgb(192, 192, 192)">{{ movie.Genre }}</span>
        </p>
        <h3 class="yellowtext">Plot: <span style="color:rgb(192, 192, 192)">{{ movie.Plot }}</span></h3>
        <h4 class="yellowtext">Votes: <span style="color: rgb(192, 192, 192)">{{ movie.imdbVotes }}</span></h4>
        <h4 class="yellowtext">Rating: <span style="color: rgb(192, 192, 192)">{{ movie.imdbRating }}</span></h4>
        <p class="yellowtext">Actors: <span style="color: rgb(192, 192, 192)">{{ movie.Actors }}</span></p>
        <p class="yellowtext">Director: <span style="color: rgb(192, 192, 192)">{{ movie.Director }}</span>, Writer: <span style="color: rgb(192, 192, 192)">{{ movie.Writer }}</span></p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "MovieDetails",
  props: ["id"],
  data() {
    return {
      movie: null,
    };
  },
  mounted() {
    this.axios
      .get("https://www.omdbapi.com/?type=movie&apikey=bab6e7fe&i=" + this.id)
      .then((response) => {
        this.movie = response.data;
        console.log(this.movie);
      });
  },

  components: {},
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200&display=swap");

.yellowtext {
  color: rgb(255, 200, 0);
}
.whitetext {
  color: rgb(192, 192, 192);
}
.roboto {
  font-family: "Plus Jakarta Sans", sans-serif;
}
.postermarvel {
  width: 50%;
}
.cardcomponent {
  padding-top: 200px;
  background-image: url("../assets/backgroundmovies.png");
  padding-bottom: 50px;
}
.poster {
  border-radius: 20px;
  width: 35%;
}
</style>