<template>
  <div class="main">
  <p>
    now: {{now}}
  </p>
  <p>
    <input type="text" v-model="question">
  </p>
  <p>
    {{answer}}
  </p>
  <h1 ref="msg">
    {{message}}
  </h1>
    <h1 ref="msg1">
      {{message1}}
    </h1>
    <button @click="changeMsg()">change</button>

  </div>
</template>

<script>
export default {
    data() {
      return {
        question:'',
        answer:'',
        message:'',
        message1:'unused',
      }
    },
    computed:{
      now: function () {
        return new Date().getTime()
      }
    },
    watch:{
        question:function(){
          this.answer = '输入中。。。。'
          this.getAnswer()
        }

    },
    methods:{
        getAnswer :
          _.debounce(function () {
          this.answer = '搜索中'
          this.$axios({
            method : 'get',
            url    : 'https://www.easy-mock.com/mock/5a654e3cd9891651babe284f/example/mock',
          }).then(data=>this.answer = data.data.message)
            .catch(data=>this.answer = 'error')
        },500),
        changeMsg: function(){
          this.message = 'hello world';
          this.$nextTick(()=> {
              this.message1 = this.$refs.msg.innerHTML
          })
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
