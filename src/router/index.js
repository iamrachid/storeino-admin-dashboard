/*
 * Default Router
 */

// Vue and Vue Router
import Vue from 'vue'
import Router from 'vue-router'

// Main layout
import Dashboard from "@/views/Dashboard";
import LayoutBackend from "@/layouts/variations/Backend";
import Orders from "@/views/orders/Orders";
import Products from "@/views/products/Products";
import EmptyComponent from "@/layouts/EmptyComponent";

// tabs

// Register Vue Router
Vue.use(Router)

// Router Configuration
export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: '',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
    path: '',
      component: EmptyComponent,
      redirect: '/admin/dashboard',
      children: [
        {
          path: '/admin',
          redirect: '/admin/dashboard',
          component: LayoutBackend,
          children: [
            {
              path: 'dashboard',
              name: 'Dashboard',
              component: Dashboard
            },
            {
              path: 'orders',
              name: 'Orders',
              component: Orders
            },

            {
              path: 'homepage',
              name: 'Homepage',
              component: Dashboard
            },
            {
              path: 'products',
              name: 'Products',
              component: Products
            }
          ]
        }
      ]
    }
  ]
})
