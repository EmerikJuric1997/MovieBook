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
import  firebase  from "firebase/compat/app";
import router from "./router";
import FooterComponent from "./components/FooterComponent.vue";


export default {
  name: "App",
  data: () => ({
    isLoggedIn: false
  }),
    methods: {
    signout: function () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("You are signed out.");
          router.push("/");
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
    created: function () {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log(user.email)
          this.isLoggedIn = true;
        } else {
          console.log('No user')
          this.isLoggedIn = false;
        }
      });
  },
  
  components: { NavBar, FooterComponent },
};
</script>
<style scoped>
#app {
  background: #212121;
}
</style>
