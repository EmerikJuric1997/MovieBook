<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4" class="mx-auto">
        <v-form ref="form" v-model="valid" lazy-validation class="forma">

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            filled
            rounded
            dark
          ></v-text-field>

          <v-text-field
            v-model="password"
            :rules="passwordRules"
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
            <v-btn :disabled="!valid" color="amber darken-1" @click="signup">
              Register
            </v-btn>
            <v-btn color="amber lighten-3" class="ml-4" @click="reset">
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
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
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
      this.$refs.form.reset();
    },
  },
};
</script>
<style scoped>
.forma {
  margin-top: 200px;
}
</style>