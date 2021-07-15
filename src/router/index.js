import Vue from 'vue'
import VueRouter from 'vue-router'
import explore from '../pages/explore.vue'
import homePage from '../pages/home-page.vue'
import gigEdit from '../pages/gig-edit.vue'
import gigDetails from '../pages/gig-details.vue'
import userDetails from '../pages/user-details.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: homePage
  },
  {
    path: '/explore',
    component: explore,
  },
  {
    path: '/gig/edit/:gigId?',
    component: gigEdit
  },
  {
    path: '/gig/:gigId',
    component: gigDetails
  },
  {
    path: '/user/profile',
    component: userDetails
  },
  
]

const router = new VueRouter({
  routes
})

export default router
