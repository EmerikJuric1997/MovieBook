<template>
  <div class="cardcomponent">
    <v-row>
      <v-col cols="12" class="text-center">
        <v-toolbar dense floating dark rounded>
          <v-text-field
            hide-details
            prepend-icon="mdi-magnify"
            single-line
            placeholder="Search movies.."
            v-model="search"
            @input="searchmovie()"
          ></v-text-field>
        </v-toolbar>
      </v-col>
      <v-container>
      <v-row>
        <v-col
          cols="2"
          v-for="smovie in moviesearch"
          :key="smovie.imdbID"
          class="searchmoviehome align-center mx-auto"
        >
          <v-card rounded class="ma-4" width="200">
            <router-link
              :to="{ name: 'MovieDetails', params: { id: smovie.imdbID } }"
            >
              <v-img :src="smovie.Poster"></v-img>
            </router-link>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="justify-center">
        <v-col cols="6">
          <v-pagination
            v-model="page"
            :length="Math.round(total.totalResults / 10)"
            circle
            v-if="moviesearch"
            dark
            color="amber darken-4"
            @input="changepage()"
            total-visible="7"
          ></v-pagination>
        </v-col>
      </v-row>
            </v-container>
    <v-container v-if="!moviesearch">
      <v-col cols="12">
        <v-sheet
          class="mx-auto transparent"
          elevation="10"
          max-width="1300"
          rounded
        >
          <h3 class="text-left pl-16 pt-10" style="color: white">Marvel</h3>
          <v-slide-group
            v-model="model"
            class="pa-4"
            center-active
            show-arrows
            dark
          >
            <v-slide-item
              v-for="moviem in marvelmovies"
              :key="moviem.imdbID"
              v-slot="{ active, toggle }"
            >
              <v-card rounded class="ma-4" width="200">
                <router-link
                  :to="{ name: 'MovieDetails', params: { id: moviem.imdbID } }"
                >
                  <v-img :src="moviem.Poster"></v-img>
                </router-link>
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                  @click="toggle"
                >
                  <v-scale-transition>
                    <v-icon
                      v-if="active"
                      color="white"
                      size="48"
                      v-text="'mdi-close-circle-outline'"
                    ></v-icon>
                  </v-scale-transition>
                </v-row>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
      <v-col cols="12">
        <v-sheet
          class="mx-auto transparent"
          elevation="10"
          max-width="1300"
          rounded
        >
          <h3 class="text-left pl-16 pt-10" style="color: white">
            Harry Potter
          </h3>
          <v-slide-group
            v-model="model"
            class="pa-4"
            center-active
            show-arrows
            dark
          >
            <v-slide-item
              v-for="moviehp in hpmovies"
              :key="moviehp.imdbID"
              v-slot="{ active, toggle }"
            >
              <v-card rounded class="ma-4" width="200">
                <router-link
                  :to="{ name: 'MovieDetails', params: { id: moviehp.imdbID } }"
                >
                  <v-img :src="moviehp.Poster"></v-img>
                </router-link>
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                  @click="toggle"
                >
                  <v-scale-transition>
                    <v-icon
                      v-if="active"
                      color="white"
                      size="48"
                      v-text="'mdi-close-circle-outline'"
                    ></v-icon>
                  </v-scale-transition>
                </v-row>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
      <v-col cols="12">
        <v-sheet
          class="mx-auto transparent"
          elevation="10"
          max-width="1300"
          rounded
        >
          <h3 class="text-left pl-16 pt-10" style="color: white">
            Lord of the Rings movies
          </h3>
          <v-slide-group
            v-model="model"
            class="pa-4"
            center-active
            show-arrows
            dark
          >
            <v-slide-item
              v-for="movielotr in lotrmovies"
              :key="movielotr.imdbID"
              v-slot="{ active, toggle }"
            >
              <v-card rounded class="ma-4" width="200">
                <router-link
                  :to="{
                    name: 'MovieDetails',
                    params: { id: movielotr.imdbID },
                  }"
                >
                  <v-img :src="movielotr.Poster"></v-img>
                </router-link>
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                  @click="toggle"
                >
                  <v-scale-transition>
                    <v-icon
                      v-if="active"
                      color="white"
                      size="48"
                      v-text="'mdi-close-circle-outline'"
                    ></v-icon>
                  </v-scale-transition>
                </v-row>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
      <v-col cols="12">
        <v-sheet
          class="mx-auto transparent"
          elevation="10"
          max-width="1300"
          rounded
        >
          <h3 class="text-left pl-16 pt-10" style="color: white">
            Star Wars movies
          </h3>
          <v-slide-group
            v-model="model"
            class="pa-4"
            center-active
            show-arrows
            dark
          >
            <v-slide-item
              v-for="moviesw in swmovies"
              :key="moviesw.imdbID"
              v-slot="{ active, toggle }"
            >
              <v-card rounded class="ma-4" width="200">
                <router-link
                  :to="{ name: 'MovieDetails', params: { id: moviesw.imdbID } }"
                >
                  <v-img :src="moviesw.Poster"></v-img>
                </router-link>
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                  @click="toggle"
                >
                  <v-scale-transition>
                    <v-icon
                      v-if="active"
                      color="white"
                      size="48"
                      v-text="'mdi-close-circle-outline'"
                    ></v-icon>
                  </v-scale-transition>
                </v-row>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
      </v-container>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  props: ["moviem"],
  data() {
    return {
      model: null,
      marvelmovies: "",
      lotrmovies: "",
      hpmovies: "",
      swmovies: "",
      search: "",
      moviesearch: "",
      page: 1,
      total: null,
      perpage: 10,
    };
  },
  methods: {
    searchmovie: function () {
      this.axios
        .get(
          "https://www.omdbapi.com/?type=movie&plot=full&apikey=bab6e7fe&s=" +
            this.search +
            "&page=" +
            this.page
        )
        .then((response) => {
          this.moviesearch = response.data.Search;
          this.total = response.data;
        });
    },
    changepage: function (page) {
      this.searchmovie(page);
      console.log(this.page);
    },
  },
  created: function () {
    const api =
      "https://www.omdbapi.com/?s=lord%20of%20the%20rings&type=movie&plot=full&apikey=bab6e7fe";
    this.axios
      .get(
        "https://www.omdbapi.com/?s=marvel&type=movie&plot=full&apikey=bab6e7fe"
      )
      .then((response) => {
        this.marvelmovies = response.data.Search;
        console.log(this.movieshome);
      });
    this.axios
      .get(
        "https://www.omdbapi.com/?s=harry%20potter&type=movie&page=1&apikey=bab6e7fe"
      )
      .then((response) => {
        this.hpmovies = response.data.Search;
        console.log(this.movieshome);
      });
    this.axios.get(api).then((response) => {
      this.lotrmovies = response.data.Search;
      console.log(this.movieshome);
    });
    this.axios
      .get(
        "https://www.omdbapi.com/?s=star%20wars&type=movie&page=1&apikey=bab6e7fe"
      )
      .then((response) => {
        this.swmovies = response.data.Search;
        console.log(this.movieshome);
      });
  },
  components: {},
};
</script>
<style scoped>
.postermarvel {
  width: 50%;
}
.hehe {
  background-color: transparent;
}
.searchmoviehome {
  transition: transform 0.7s;
}
.searchmoviehome:hover {
  transform: scale(1.05);
}
</style>