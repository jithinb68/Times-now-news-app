import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

import layout from '../layout'
// import PageNotFound from '../components/PageNotFound'

let router = new Router({
    mode: 'history',
    linkExactActiveClass: "active",
    routes: [
        {
            path: '/',
            redirect: '/home',
            component: layout,
            children: [
              {
                path: '/home',
                name: 'home',
                component: () => import('@/views/HomePage/HomePage'),
                meta: {
                  requiresAuth: true
                }
              },
              {
                path: '/readmore',
                name: 'readmore',
                component: () => import('@/views/ReadMore/ReadMore'),
                meta: {
                  requiresAuth: true
                }
              },
              // {
              //   path: '/devices-details',
              //   name: 'devices-details',
              //   component: () => import('@/views/DeviceDetailsPage/DeviceDetailsPage'),
              //   meta: {
              //     requiresAuth: true
              //   }
              // },
              // {
              //   path: '/configuration',
              //   name: 'configuration',
              //   component: () => import('@/views/ConfigurationPage/ConfigurationPage'),
              //   meta: {
              //     requiresAuth: true
              //   }
              // },
              // {
              //   path: '/report',
              //   name: 'report',
              //   component: () => import('@/views/ReportPage/ReportPage'),
              //   meta: {
              //     requiresAuth: true
              //   }
              // }
            ]
        },
        {
            path: '/auth-pages',
            component: {
              render (c) { return c('router-view') }
            },
            children: [
              {
                path: '/login',
                name: 'login',
                component: () => import('@/views/LoginPage/LoginPage'),
              },
              {
                path: '/signup',
                name: 'signup',
                component: () => import('@/views/SignupPage/SignupPage'),
              }
            ]
        },
        {
          path: '/profile',
          component: () => import('@/views/ProfilePage/ProfilePage'),
      },

        // { 
        //   path: "*",
        //   component: PageNotFound
        // }
    ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.profileDetails.password) {
      next({ name: 'login' })
    } else {
      next() // go to wherever I'm going
    }
  } else {
    if (store.state.profileDetails.password) {
      next({ name: 'home' })
    } else {
      next()
    }
  }
})

export default router