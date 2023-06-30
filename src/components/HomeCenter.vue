<template>
  <v-container fluid ma-0 pa-16 fill-height class="">
    <v-row>
      <v-col class="text-center">
        <p class="white--text">Technologies</p>
        <v-btn icon @click="show = !show">
          <v-icon class="white--text">{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>

        <v-expand-transition>
          <div v-show="show">
            <v-row>
            <v-col cols="6">
              <v-img
                src="../assets/vue.png"
                class="logoimagecenter mx-auto"
              ></v-img>
            </v-col>
            <v-col cols="6">
              <v-img
                src="../assets/firebase.svg"
                class="logoimagecenter mx-auto"
              ></v-img>
            </v-col>
            </v-row>
          </div>
        </v-expand-transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeCenter",
  data() {
    return {
      show: false,
    };
  },
};
</script>
<style scoped>
.logoimagecenter {
  width: 15%;
}
</style>
