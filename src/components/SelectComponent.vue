<template>
  <div class="main">
    <div class="inputStyle" tabindex="1" @blur="blurFun()" @focus="focusFun()">
        hello
    </div>
    <ul :class="{ open:isopen }" v-for="i in datalist">
      <li>{{i}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SelectComponent',
  data() {
    return {
      isopen:false
    }
  },
  props:['datalist'],
  methods:{
      blurFun:function(){
          this.isopen  = false
      },
      focusFun:function(){
        this.isopen  = true
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
