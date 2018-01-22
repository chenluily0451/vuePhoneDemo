<template>
  <div class="main">
     <ul>
        <li is="my-li"></li>
        <my-li>loading.....</my-li>
       <li>应当注意，如果使用来自以下来源之一的字符串模板，则没有这些限制：</li>
       <li>script type="text/x-template"</li>
       <li>JavaScript 内联模板字符串</li>
       <li>.vue 组件</li>
     </ul>
    <table>
      <my-row></my-row>
      <tr is="my-row"></tr>

    </table>

  </div>
</template>

<script>
export default {
    components : {
      myLi:{
        template: '<li>this is a li</li>'
      },
      myRow:{
        template:'<tr>this is a tr</tr>'
      }
    },
    data() {
        return {

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  *{
    font-size: 30px;
  }
</style>
