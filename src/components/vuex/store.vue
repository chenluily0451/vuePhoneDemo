<template>

  <div class="main" >
    <h1>State</h1>
    <h3>Vuex 使用单一状态树</h3>
    <p>{{count}}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">—</button>
    </p>

  </div>

</template>

<script>
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  }
})

export default {
  name: 'store',
  data() {
    return {

    }
  },
  computed:{
      count: function(){
          return store.state.count
    }
  },
  methods:{
    increment: function(){
        store.commit('increment')
    },
    decrement: function(){
      store.commit('decrement')
    }
  }
}
</script>

<style scoped lang="scss">
  p{
    font-size: 50px;
  }
</style>

