import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Printers from '../views/Printers.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about-DNP',
    name: 'Dnp',
    component: () => import(/* webpackChunkName: 'DNP' */ '../views/DNP.vue'),

  },
  {
    path: '/printers',
    name: "Printers",
    component: Printers,
    children: [
      {
        component: () => import(/* webpackChunkName: 'DS620' */ '../views/DS620.vue'),
        path: 'dnp-printer-ds620',
        name: "DS620"
      },
      {
        component: () => import(/* webpackChunkName: 'DS820' */ '../views/DS820.vue'),
        path: 'dnp-printer-ds820',
        name: "DS820"
      },
      {
        component: () => import(/* webpackChunkName: 'RX1HS' */ '../views/RX1HS.vue'),
        path: 'dnp-printer-rx1hs',
        name: "RX1HS"
      },
      {
        component: () => import(/* webpackChunkName: 'DS40' */ '../views/DS40.vue'),
        path: 'dnp-printer-ds40',
        name: "DS40"
      },
      {
        component: () => import(/* webpackChunkName: 'QW410' */ '../views/QW410.vue'),
        path: 'dnp-printer-qw410',
        name: "QW410"
      },
    ]
  },
  {
    path: '/media',
    name: 'Media',
    component: () => import(/* webpackChunkName: "Media" */ '../views/Media.vue'),
    children: [
      {
        path: ':name',
        name: 'MediaItem',
        component: () => import(/* webpackChunkName: "MediaItem"*/ '../views/MediaItem.vue')
      }
    ]
  },
  {
    path: '/accessories',
    name: 'Accessories',
    component: () => import(/* webpackChunkName: "Accessories" */ '../views/Accessories.vue'),
    children: [
      {
        path: ':name',
        name: 'AccessoriesItem',
        component: () => import(/* webpackChunkName: "AccessoriesItem"*/ '../views/AccessoriesItem.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: "Contact",
    component: Contact
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  // eslint-disable-next-line no-unused-vars
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };  
  },
})

export default router
