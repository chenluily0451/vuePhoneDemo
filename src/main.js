// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'


Vue.config.productionTip = false


Vue.use(Vuex)

const store =new Vuex.Store({
  state: {
    count: 0,
    welcomeText:'this is welcomeText',
    actionName:'this is actionName',
    lists:[
      {
        id: 1,
        text:'记录一',
        show:true
      },
      {
        id: 2,
        text:'记录二',
        show:true
      },
      {
        id: 3,
        text:'记录三',
        show:true
      },
      {
        id: 4,
        text:'记录四',
        show:false
      },
      {
        id: 5,
        text:'记录五',
        show:true
      }
    ]
  },

  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    welcome: state =>  state.welcomeText = 'WELCOME BACK',
    actionFun:state => state.actionName = 'actionName changed'
  },
  getters: {
    showTrueLists: state => {
      return state.lists.filter(li => li.show === true)
    }
  },
  actions:{
    actionFun(context) {
      setTimeout( ()=>{context.commit('actionFun')},2000 )
    }
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
})





