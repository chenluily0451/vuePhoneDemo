<template>
  <div id="app" @click="clickRoot">
    <router-view/>
  </div>
</template>

<script>
  export default {
  name: 'app',
  methods:{
    clickRoot(event){
      this.$store.dispatch('watchAction');
    }
  },
  computed:{

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
  body{
    padding:0;
    margin:0;
    font-size: 12px;
    overflow: hidden;
  }
  ul,li,p{
    padding: 0;
    list-style: none;
    margin:0;}
</style>
