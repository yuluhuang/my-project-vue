import Vue from 'vue'
import store from './vuex/store'
import App from './App'
var VueFire = require('vuefire')
var firebase = require('firebase')
var config1 = {
    apiKey: 'AIzaSyC5KhGARCoWCiDfAl49KgH-QEAqbBE7kUk',
    authDomain: 'yuluhuang12.firebaseapp.com',
    databaseURL: 'https://yuluhuang12.firebaseio.com',
    storageBucket: ''
}
Vue.Notes = firebase.initializeApp(config1).database().ref().child('notes')
Vue.use(VueFire)

new Vue({
    store,
    el: 'body',
    components: {
        App
    }
})