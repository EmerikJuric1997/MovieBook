<template>
  <div class="center examplex" id="font">
    <vs-navbar
      target-scroll="#padding-scroll-content"
      padding-scroll
      center-collapsed
      v-model="active"
      dark
      text-white
      shadow
      square
    >
      <template #left>
        <a href="/"
          ><img src="../assets/MovieBook.png" height="50px" alt=""
        /></a>
      </template>
      <vs-navbar-item
        :active="active == 'guide'"
        id="guide"
        class="font"
        to="/"
      >
        Home
      </vs-navbar-item>
      <vs-navbar-item
        :active="active == 'docs'"
        id="docs"
        class="font"
        to="/movies"
      >
        Movies
      </vs-navbar-item>
      <vs-navbar-item
        :active="active == 'components'"
        id="components"
        class="font"
        to="/about"
      >
        About
      </vs-navbar-item>
            <vs-navbar-item
        :active="active == 'components'"
        id="components"
        class="font"
        href="https://github.com/EmerikJuric1997/MovieBook"
      >
        Code
      </vs-navbar-item>
      <template #right>
        <vs-button warn class="font" @click="signout" v-if="isLoggedIn != false"
          >Sign out</vs-button
        >
        <vs-button flat warn class="font" to="/login" v-else>Login</vs-button>
        <vs-button warn class="font" to="/register">Get Started</vs-button>
      </template>
    </vs-navbar>
  </div>
</template>
<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import router from "../router";

export default {
  name: "NavBar",
  data() {
    return {
      active: "guide",
      isLoggedIn: false,
    };
  },
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
};

</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");
.font {
  font-family: "Montserrat", sans-serif;
}
</style>