/*
 * Default Router
 */

// Vue and Vue Router
import Vue from 'vue'
import Router from 'vue-router'

// Main layout
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
const router = new Router({
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
      redirect: '/admin/homepage',
      children: [
        {
          name: 'login',
          path: 'login',
          component: Login
        },
        {
          path: '/admin',
          redirect: '/admin/homepage',
          component: LayoutBackend,
          children: [
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
              component: EmptyComponent,
              children: [
                {
                  name: 'Categories',
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
});

router.beforeEach(async (to,from, next) => {
  if (!localStorage.getItem('user') && to.name !== 'login') {
    next({name: 'login'});
  }
  else {
    next()
  }
});

export default router;
