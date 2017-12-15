<template>
  <div class="main">
    <p>Action 提交的是 mutation，而不是直接变更状态 </p>
    <p>Action 可以包含任意异步操作</p>
    <button @click="add">click me</button>
    <div>
      {{actionName}}
    </div>
    <input type="text"  v-color-change="'red'" v-focus>
  </div>

</template>

<script>
export default {
  name: 'Action',
  computed:{
    actionName:function(){
      return this.$store.state.actionName
    }
  },
  methods:{
    add:function(){
        this.$store.dispatch('actionFun')       // action 通过dispatch触发
    }
  },
  directives:{
      focus:{
        inserted : function (el) {
          el.focus()
        }
      },
      colorChange:{
        inserted: function(el, binding){
          el.style.color = binding.value
        }
      }
  }
}
</script>
<style scoped lang="scss">
  *{
    font-size: 30px;
  }

</style>
