<template>
  <div class="main">
  <p>方法写在全局的getters对象里，通过this.$store获取</p>
  <ul>
    <li v-for="li in dataList">{{li.text}}</li>
  </ul>
  </div>
</template>
<script>
  export default {
      name:'Getter',
      data() {
          return {
              dataList: this.$store.getters.showTrueLists
          }
      }
  }
</script>
<style scoped lang="scss">
  p{
    font-size: 24px;
    margin-bottom: 10px;
  }
  ul{
    font-size: 30px;
  }
</style>
