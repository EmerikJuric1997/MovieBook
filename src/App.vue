<template>
  <v-app>
    <NavBar />
    <v-main>
      <router-view class="routerviewmain"/>
    </v-main>
    <FooterComponent />
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooterComponent from "./components/FooterComponent.vue";


export default {
  name: "App",
  data: () => ({
  }),
  
  components: { NavBar, FooterComponent },
};
</script>
<style scoped>
#app {
  background: #212121;
}
</style>
