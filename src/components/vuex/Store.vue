<template>

  <div class="main" >

    <h1>State</h1>
    <h3>Vuex 使用单一状态树</h3>
    <p>{{count}}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">—</button>
    </p>

  <store-child></store-child>
  </div>


</template>

<script>

import StoreChild from './StoreChild'


export default {
  name:'store',
  computed:{
      count: function(){
          return this.$store.state.count
    }
  },
  components:{
    StoreChild
  },
  methods:{
    increment: function(){
      this.$store.commit('increment')
    },
    decrement: function(){
      this.$store.commit('decrement')
    }
  }

}
</script>

<style scoped lang="scss">
  p{
    font-size: 50px;
  }
</style>

