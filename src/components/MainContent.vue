<template>
  <div class="main">
      <h1>
        Lists
      </h1>
    <p>
      <input type="text" placeholder="请选择你的愿望" readonly v-on:focus="openCheckList" autofocus="true">
    </p>
    <ol>
      <li v-for="list in childSelectedArray">
          {{list.text}}
      </li>
    </ol>
    <check-list ref="checklist" v-on:child-data="showData"></check-list>

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
      openCheckList:function(){
          this.$refs['checklist'].show()
      },
      showData: function(data){
        this.childSelectedArray = data
      }
    },
    data() {
        return {
            ishow : false,
            childSelectedArray:''
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
  ol{
    list-style-type:lower-alpha
  }
  li{
    color: #333;
    font-size: 1.5rem;
    list-style: circle;
  }

  .hide{
    display: none;
  }
</style>
