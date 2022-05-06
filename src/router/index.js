/*
 * Default Router
 */

// Vue and Vue Router
import Vue from 'vue'
import Router from 'vue-router'

// Main layout
import Dashboard from "@/views/Dashboard";
import LayoutBackend from "@/layouts/Backend";
import Orders from "@/views/orders/Orders";
import Products from "@/views/products/Products";
import EmptyComponent from "@/layouts/EmptyComponent";
import Categories from "@/views/categories/Categories";
import CategoryAdd from "@/views/categories/CategoryAdd";
import CategoryEdit from "@/views/categories/CategoryEdit";
import Homepage from "@/views/homepage/Homepage";
import Account from "@/views/Account";
import Login from "@/views/Login";

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
          path: 'login',
          name: 'Dashboard',
          component: Login
        },
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
              path: 'account',
              name: 'Account',
              component: Account
            },
            {
              path: 'orders',
              name: 'Orders',
              component: Orders
            },

            {
              path: 'homepage',
              name: 'Homepage',
              component: Homepage
            },
            {
              path: 'products',
              name: 'Products',
              component: Products
            },
            {
              path: 'categories',
              name: 'Categories',
              component: EmptyComponent,
              children: [
                {
                  path: '/',
                  component: Categories,
                },
                {
                  path: 'add',
                  component: CategoryAdd
                },
                {
                  path: ':slug',
                  component: CategoryEdit
                }
              ]
            },

          ]
        }
      ]
    }
  ]
})
