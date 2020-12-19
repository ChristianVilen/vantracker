import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import {firestorePlugin} from 'vuefire';
import {ValidationProvider, ValidationObserver, extend} from 'vee-validate';
import {required} from 'vee-validate/dist/rules'
import firebase from "firebase";

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

extend('required', {
  ...required,
  message: 'Syötä {_field_}',
})

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

Vue.use(firestorePlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
