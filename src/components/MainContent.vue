<template>
  <div class="main">
      <h1>
        Lists
      </h1>
    <div class="line">
      <input type="text" placeholder="请选择你的愿望" readonly v-on:focus="openCheckList" autofocus="true">
      <ol>
        <li v-for="list in childSelectedArray">
          {{list.text}}
        </li>
      </ol>
    </div>

    <check-list ref="checklist" v-on:child-data="showData" v-bind:maxSelect=5></check-list>

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
<style scoped lang="scss">

  ol{
    list-style-type:lower-alpha;
    flex-grow: 0;
  }
  li{
    color: #333;
    font-size: 1rem;
    list-style: circle;
  }

  .line{
    display: flex;
    width: 100vw;
    flex-direction: row;
    vertical-align: top;
    padding: 0 1rem;

    input{
      font-size: 1rem;
      width:8rem;
    }
  }
  .hide{
    display: none;
  }
</style>
