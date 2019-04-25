import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login'
import Layout from '../components/layout/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout,
      children:[
        {
          path: '/shoppguan',
          name: 'shoppguan',
          component:() => import('../view/shoppguan/shoppguan'),
        },
        {
          path: '/actively',
          name: 'actively',
          component:() => import('../view/actively/actively'),
          children:[
            {
              path: '/ActivelyOne',
              name: 'ActivelyOne',
              component:() => import('../view/actively/activelyHuod/ActivelyOne'),
            },
            {
              path: '/ActivelyTwo',
              name: 'ActivelyTwo',
              component:() => import('../view/actively/activelyHuod/ActivelyTwo'),
            },
            {
              path: '/ActivelyThree',
              name: 'ActivelyThree',
              component:() => import('../view/actively/activelyHuod/ActivelyThree'),
            },
          ]
        },
        {
          path: '/behalf',
          name: 'behalf',
          component:() => import('../view/behalf/behalf'),
        },
        {
          path: '/updataVoid',
          name: 'updataVoid',
          component:() => import('../view/updataVoid/updataVoid'),
        },
        {
          path: '/AddSeats',
          name: 'AddSeats',
          component:() => import('../view/AddSeats/AddSeats'),
        },
        {
          path: '/system',
          name: 'system',
          component:() => import('../view/system/system'),
        },
        {
          path: '/ShoppManage',
          name: 'ShoppManage',
          component:() => import('../view/ShoppManage/ShoppManage'),
        }
      ]
    },

  ]
})
