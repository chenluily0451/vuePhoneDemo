<template>
  <div class="main">
    <p @click="add">CLICK ME</p>
    <P>{{welText}}</P>

  </div>
</template>
<script>
  import {mapMutations} from 'vuex'

  export default {
    name:'Mutation',
    methods: {
      ...mapMutations(     // ...为对象展开符
        {
          add :'welcome'   // 将 this.add() 映射为 this.$store.commit('welcome')
        }
      )
    },
    computed:{
      welText: function(){
        return this.$store.state.welcomeText
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
