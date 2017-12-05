<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
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
  }
  ul,li,p{
    padding: 0;
    list-style: none;
    margin:0;}
</style>
