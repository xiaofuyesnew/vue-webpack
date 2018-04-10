import Vue from 'vue'
import App from './App.vue'

const data = {
  pageTitle: 'test',
  greeting: 'Hello',
  name: 'allen'
}

new Vue ({
  el: '#app',
  data: data,
  template: '<App/>',
  components: {
    App
  }
})