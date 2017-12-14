<template>

  <div class="main" >
      <p>welcome</p>
      <ul>
        <li>
          <a href="#/checklist" target="_blank">checklist模拟</a>
        </li>
        <li>
          <a href="#/vuex/store" target="_blank">vuex-store</a>
        </li>
      </ul>
  </div>

</template>

<script>
export default {
  name: 'index',
  methods:{

  },
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
  p{
    font-size: 30px;
  }
  ul{
    margin-top: 30px;
    font-size:18px ;
    li{
      border-bottom:1px solid #ccc;
      padding:10px 0;
      a{
        width:100%;
        display: inline-block;
        text-decoration: none;
      }
      &:hover{
        background: pink;
      }
    }

  }
</style>

