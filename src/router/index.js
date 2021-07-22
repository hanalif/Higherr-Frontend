import Vue from 'vue'
import VueRouter from 'vue-router'
import explore from '../pages/explore.vue'
import homePage from '../pages/home-page.vue'
import gigDetails from '../pages/gig-details.vue'
import userDetails from '../pages/user-details.vue'
import userOrders from '../pages/user-orders.vue'
import chat from '../pages/chat'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/explore',
        component: explore,
    },

    {
        path: '/user/:userId',
        component: userDetails
    },
    {
        path: '/orders',
        component: userOrders
    },
    {
        path: '/gig/:gigId',
        component: gigDetails
    },
    {
        path: '/chat',
        component: chat
    },
]

const router = new VueRouter({
    routes
})

export default router