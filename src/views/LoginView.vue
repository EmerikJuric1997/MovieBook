<template>
  <v-container>
    <v-row>
      <v-col cols="4" class="mx-auto">
        <v-form ref="form" lazy-validation class="forma">

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
            :counter="7"
            required
            amber
            darken-1
            filled
            rounded
            dark
          ></v-text-field>
          <v-col class="mx-auto">
            <v-btn color="amber darken-1" @click="login">
              Log in
            </v-btn>
          </v-col>
          <v-col>
              <h4 style="color: grey">Don't have an account yet? <a href="/register" style="color: rgb(255, 208, 0)">Register.</a></h4>
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
    valid: true,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length > 6) || "Password must be more than 6 characters",
    ],
  }),

  methods: {
    login: function() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          console.log(user)
          router.push('/movies')
        },
        (err) => {
          alert(err);
        }
      )
    },
  },
};
</script>
<style scoped>
.forma {
  margin-top: 200px;
}
</style>