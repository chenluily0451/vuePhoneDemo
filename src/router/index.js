import Vue from 'vue'
import Router from 'vue-router'
import MainContent from '@/components/MainContent'
import Index from '@/components/Index'
import store from '@/components/vuex/store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component:Index
    },
    {
      path: '/checklist',
      name: 'mainContent',
      component:MainContent
    },
    {
      path: '/vuex/store',
      name: 'store',
      component:store
    }
  ]
})
