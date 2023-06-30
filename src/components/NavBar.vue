<template>
  <div class="center examplex" id="font">
    <vs-navbar padding-scroll center-collapsed dark text-white shadow square class="navbar">
      <template #left>
        <img src="../assets/MovieBook.png" height="50px" alt="" />
      </template>
      <div>
      <vs-navbar-item class="font" to="/">
        Home
      </vs-navbar-item>
      <vs-navbar-item  class="font" to="/movies">
        Movies
      </vs-navbar-item>
      <vs-navbar-item  class="font" to="/about">
        About
      </vs-navbar-item>
      <vs-navbar-item class="font" href="https://github.com/EmerikJuric1997/MovieBook">
        Code
      </vs-navbar-item>
    </div>
      <template #right>
        <vs-button warn class="font" @click="signout" v-if="isLoggedIn != false">Sign out</vs-button>
        <vs-button flat warn class="font" to="/login" v-else>Login</vs-button>
        <vs-button warn class="font" to="/register" v-if="isLoggedIn === false">Register</vs-button>
        <vs-button @click="activeSidebar = !activeSidebar" flat icon warn class="openSidebar">
          ≡
          </vs-button>
      </template>
    </vs-navbar>
    <div class="hidden">
      <vs-sidebar
        :open.sync="this.activeSidebar"
        class="sidebar"
        >
        <vs-sidebar-item class="font">
          <vs-button @click="activeSidebar = !activeSidebar" flat icon warn>
            X
          </vs-button>
      </vs-sidebar-item>
        <vs-sidebar-item  class="font" to="/">
        Home
      </vs-sidebar-item>
      <vs-sidebar-item  class="font" to="/movies">
        Movies
      </vs-sidebar-item>
      <vs-sidebar-item  class="font" to="/about">
        About
      </vs-sidebar-item>
      <vs-sidebar-item class="font" href="https://github.com/EmerikJuric1997/MovieBook">
        Code
      </vs-sidebar-item>
      </vs-sidebar>
    </div>
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
      isLoggedIn: false,
      activeSidebar: false,
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
    checkUser() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      });
    }

  },
  mounted() {
    this.checkUser();
  }
};

</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");

.font {
  font-family: "Montserrat", sans-serif;
}

.examplex {
  display: flex;
}
.sidebar {
  background-color: rgb(44, 44, 44) !important;
  height: 400px !important;
}
.font {
  color: white !important;
}
.openSidebar {
  display: none !important;
  width: 50px;
}
@media only screen and (max-width: 723px) {
  .openSidebar {
    display: flex !important;
    width: 50px !important;
}
}
</style>