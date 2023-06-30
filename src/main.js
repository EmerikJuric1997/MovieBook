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
  apiKey: "AIzaSyB99vp5Y2d4hbHO9mrEOx3UaLeiEisffWc",
  authDomain: "moviebook-8cbe1.firebaseapp.com",
  projectId: "moviebook-8cbe1",
  storageBucket: "moviebook-8cbe1.appspot.com",
  messagingSenderId: "704092418982",
  appId: "1:704092418982:web:031d07ceeb3526fd4e9567",
  measurementId: "G-LS5ZHZ76J9"
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
