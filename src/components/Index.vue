<template>

  <div class="main" id="mainMenu" >
      <p>welcome</p>
      <ul>
        <li>
          <a href="#/checklist" target="_blank">checklist模拟</a>
        </li>
        <li>
          <a href="#/vuex/store" target="_blank">vuex-store</a>
        </li>
        <li>
          <a href="#/vuex/getter" target="_blank">vuex-getter</a>
        </li>
        <li>
          <a href="#/vuex/mutation" target="_blank">vuex-mutation</a>
        </li>
        <li>
          <a href="#/vuex/action" target="_blank">vuex-action</a>
        </li>
        <li>
          <a href="#/slot" target="_blank">具名插槽slot</a>
        </li>
        <li>
          <a href="#/is" target="_blank">is特性</a>
        </li>
        <li>
          <a href="#/axios" target="_blank">axios</a>
        </li>
        <li>
          <a href="#/vs" target="_blank">methods vs computed</a>
        </li>
        <li>
          <a href="#/outer" target="_blank">select组件问题</a>
        </li>
        <li>
          <a href="#/element" target="_blank">element</a>
        </li>
      </ul>
  </div>

</template>

<script>

export default {
  name: 'index'
}
</script>

<style scoped lang="scss">
  #mainMenu{
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
  }

</style>

