<template>
  <v-container fluid ma-0 pa-16 fill-height class="headingcontainer">
    <v-row>
      <v-col cols="8" class="text-center pt-15">
        <h1 class="homeheading text-left">EXPLORE</h1>
        <p class="homeparagraph text-left">ALL OF YOUR FAVOURITE MOVIES</p>
        <p class="text-left paragraphheading">
          Films are cultural artifacts created by specific cultures,
          facilitating intercultural dialogue. It is considered to be an
          important art form that provides entertainment and historical value,
          often visually documenting a period of time. The visual basis of the
          medium gives it a universal power of communication, often stretched
          further through the use of dubbing or subtitles to translate the
          dialog into other languages. Just seeing a location in a film is
          linked to higher tourism to that location, demonstrating how powerful
          the suggestive nature of the medium can be.
        </p>
      </v-col>
      <v-col cols="4">
        <v-carousel
          cycle
          height="400"
          hide-delimiter-background
          hide-delimiters
          show-arrows-on-hover
          class="carousel"
          ><v-carousel-item v-for="movie in movieshome" :key="movie">
            <v-img :src="movie.Poster" class="posterhome" rounded> </v-img
          ></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CarouselComponent",
  data() {
    return {
      movieshome: [],
    };
  },
  created: function () {
    const api =
      "https://www.omdbapi.com/?s=potter&type=movie&page=1&apikey=bab6e7fe";
    this.axios.get(api).then((response) => {
      this.movieshome = response.data.Search;
      console.log(this.movieshome);
    });
  },
};
</script>
<style scoped>
.headingcontainer {
  background-image: url("../assets/backgroundhome.png");
}
.carousel {
  width: 260px;
  transition: ease-in;
  transition-duration: 0.1s;
}
.carousel:hover {
  transform: scale(0.97);
}
.posterhome {
  border-radius: 60px;
}
.homeheading {
  font-size: 50px;
  color: white;
}
.homeparagraph {
  font-size: 20px;
  color: rgb(255, 207, 118);
}
.paragraphheading {
  color: rgb(221, 221, 221);
}
</style>