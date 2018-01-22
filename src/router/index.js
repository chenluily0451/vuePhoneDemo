import Vue from 'vue'
import Router from 'vue-router'
import MainContent from '@/components/MainContent'
import Index from '@/components/Index'
import Store from '@/components/vuex/Store'
import Getter from '@/components/vuex/Getter'
import MutationDemo from '@/components/vuex/MutationDemo'
import Action from '@/components/vuex/Action'
import Container from '@/components/Container'
import Is from '@/components/Is'

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
      name: 'storeBlock',
      component:Store
    },
    {
      path: '/vuex/getter',
      name: 'getter',
      component:Getter
    },
    {
      path: '/vuex/mutation',
      name: 'mutation',
      component:MutationDemo
    },
    {
      path: '/vuex/action',
      name: 'action',
      component:Action
    },
    {
      path: '/slot',
      name: 'Container',
      component:Container
    },
    {
      path: '/is',
      name: 'Is',
      component:Is
    }
  ]
})
