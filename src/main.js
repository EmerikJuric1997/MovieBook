import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import vuetify from './plugins/vuetify'
import firebase from "firebase/compat/app";
import "firebase/analytics";
import 'firebase/firestore';
import 'firebase/auth';




const firebaseConfig = {

};

// Use this to initialize the firebase App

firebase.initializeApp(firebaseConfig);




firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
          unsubscribe();
          resolve(user);
      }, reject);
  })
};




Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Vuesax, {
  // options here
})
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
