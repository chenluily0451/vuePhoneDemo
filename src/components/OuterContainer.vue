<template>
  <div class="main">
    <select-component>123</select-component>
  </div>
</template>

<script>

import SelectComponent from  "./SelectComponent";
export default {
  name:'Outer',
  component:{
    SelectComponent
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
