<template>
  <div class="main" @click="clickFun">
    <select-component :datalist=datalist>123</select-component>
    <p>---------------</p>
    <select-Target :datalist=datalist ref="select">123</select-Target>
  </div>
</template>

<script>

import SelectComponent from  "./SelectComponent";
import SelectTarget from  "./SelectTarget";
export default {
  name:'OuterContainer',
  components:{
    SelectComponent,
    SelectTarget
  },
  data(){
      return{
          datalist:[1,2,3]
      }
  },
  methods:{
    clickFun:function(e){
        console.log(e)
      if(e.target.className !== 'inputStyle'){
        this.$refs['select'].isopen = false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  *{
    font-size: 30px;
  }
  .inputStyle{
    border:1px solid #ccc;
    width:150px;
  }
  ul{
    display: none;
    width:150px;
    border:1px solid #ccc;
    li{
      border-bottom: 1px solid red;
    }
  }
  ul.open{
    display: block;
  }
</style>
