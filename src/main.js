import Vue from 'vue'
import app from './App.vue'
import router from './router'
import store from './store'
import './styles/style.scss'



new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app')



 
