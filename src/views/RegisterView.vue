<template>
  <v-container fluid>
    <v-row class="forma">
      <v-col cols="12">
        <h1 class="heading text-center">REGISTER</h1>
      </v-col>

    </v-row>
    <v-row>
      <v-col cols="10" sm="8" md="6" xl="4" xxl="4" class="mx-auto">
        <v-form>

          <v-text-field
            v-model="email"
            label="E-mail"
            required
            filled
            rounded
            dark
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="Password"
            required
            amber
            darken-1
            filled
            rounded
            dark
          ></v-text-field>
          <v-col class="mx-auto">
            <v-btn color="amber darken-1" @click="signup()" v-if="this.email != '' && this.password != ''">
              Register
            </v-btn>
            <v-btn color="amber lighten-3" class="ml-4" @click="reset()" v-if="this.email != '' || this.password != ''">
              Reset Form
            </v-btn>
          </v-col>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import router from '../router';
export default {
  data: () => ({
    email: "",
    password: "",
  }),

  methods: {
    signup: function() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user)
          router.push("/")
          alert("Account created!")
        })
        .catch((error) => {
          alert("Something went wrong:", error)
          // ..
        });
    },
    reset() {
      this.email = '';
      this.password = '';
    },
  },
};
</script>
<style scoped>
.forma {
  margin-top: 200px;
}
.heading {
  color: rgb(255, 183, 60) !important;
}
</style>