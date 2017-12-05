<template>
  <div class="main">
      <h1>
        Wishes
      </h1>
    <p>
      <input type="text" placeholder="请选择你的愿望" readonly v-on:focus="isShow">
    </p>
    <check-list></check-list>
  </div>
</template>

<script>
import CheckList from "./CheckList";
export default {
    components : {
        CheckList
    },
    name: 'MainContent',
    methods:{
        isShow:function(){

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input{
    width:100%;
    text-align: center;
    font-size: 1.8rem;
    outline:none;
  }
</style>
