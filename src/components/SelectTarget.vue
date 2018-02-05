<template>
  <div class="unique">
    <div class="inputStyle"  @click="clickFun()">
        hello1-{{storeData}}
    </div>
    <ul :class="{ open:isopen }" v-for="i in datalist">
      <li>{{i}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SelectTaregtComponent',
  data() {
    return {
      isopen:false
    }
  },
  props:['datalist'],
  computed:{
    storeData : function(){
        return this.$store.state.watchAction
    }
  },
  props:['datalist'],
  methods:{
      clickFun:function(){

        if(this.isopen){
          this.isopen = false
        }else{
          this.isopen = true
        }
      }

  },
  watch:{
//      'storeData' :function(){
//          if(this.isopen){
//            this.isopen = false;
//          }
//      }
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
