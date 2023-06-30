<template>
  <v-container class="grey darken-3">
    <v-row>
      <v-col cols="4 image">
        <vs-card-group>
          <vs-card v-for="movie in movieshome" @click="handleClick" :key="movie" type="2" class="imagehome">
            <template #title>
              <h3>{{ movie.Title }}</h3>
            </template>
            <template #img>
              <img :src="movie.Poster"/>
            </template>
            <template #text>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class="bx bx-heart"></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class="bx bx-chat"></i>
                <span class="span"> 54 </span>
              </vs-button>
            </template>
          </vs-card>
        </vs-card-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CardComponent",
  data() {
    return{
      movieshome: [],
    }
  },
  created: function () {
    const api = 'https://www.omdbapi.com/?s=lord%20of%20the%20rings&type=movie&page=1&apikey=bab6e7fe'
    this.axios.get(api).then((response) => {
      this.movieshome = response.data.Search
      console.log(this.movieshome)
})
  },
};
</script>
<style scoped>
.imagehome{ 
  width: 100px !important;
  text-decoration: none;
}
</style>
