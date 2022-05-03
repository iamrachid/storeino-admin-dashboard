/*
 * Starter Router
 */

// Vue and Vue Router
import Vue from 'vue'
import Router from 'vue-router'

// Main layouts
import LayoutBackend from '@/layouts/variations/BackendStarter.vue'
import LayoutSimple from '@/layouts/variations/Simple.vue'

// Register Vue Router
Vue.use(Router)

// Frontend Page Example
const Landing = () => import("@/views/starter/Landing.vue")

// Backend Page Example
const Dashboard = () => import("@/views/starter/Dashboard.vue")


// Pages: Auth
const AuthSignIn = () => import(/* webpackChunkName: "auth-signin" */"@/views/pages/auth/SignIn.vue")
const AuthSignUp = () => import(/* webpackChunkName: "auth-signup" */"@/views/pages/auth/SignUp.vue")


const BlockStyles = () => import("@/views/blocks/Styles.vue")
const BlockOptions = () => import("@/views/blocks/Options.vue")
const BlockForms = () => import("@/views/blocks/Forms.vue")
const BlockThemed = () => import("@/views/blocks/Themed.vue")
const BlockApi = () => import("@/views/blocks/Api.vue")


// Router Configuration
export default new Router({
  // linkActiveClass: 'active',
  // linkExactActiveClass: '',
  // scrollBehavior () {
  //   return { x: 0, y: 0 }
  // },
  routes: [
    {
      path: '/',
      redirect: '/landing',
      component: LayoutSimple,
      children: [
        {
          path: '/landing',
          name: 'Landing',
          component: Landing
        }
      ]
    },
    {
      path: '/backend',
      redirect: '/backend/dashboard',
      component: LayoutBackend,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        }
      ]
    },{
      path: '/auth',
      component: LayoutSimple,
      children: [
        {
          path: 'signin',
          name: 'Sign In',
          component: AuthSignIn
        },
        {
          path: 'signup',
          name: 'Sign Up',
          component: AuthSignUp
        }
      ]
    },
    {
      path: '/ blocks',
      redirect: '/blocks/styles',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: 'styles',
          name: 'Block Styles',
          component: BlockStyles
        },
        {
          path: 'options',
          name: 'Block Options',
          component: BlockOptions
        },
        {
          path: 'forms',
          name: 'Block Forms',
          component: BlockForms
        },
        {
          path: 'themed',
          name: 'Block Themed',
          component: BlockThemed
        },
        {
          path: 'api',
          name: 'Block API',
          component: BlockApi
        }
      ]
    }
  ]
})
