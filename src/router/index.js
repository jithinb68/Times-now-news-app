import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import layout from '../layout'
import PageNotFound from '../components/PageNotFound'

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

        { 
          path: "*",
          component: PageNotFound
        }
    ]
})

export default router