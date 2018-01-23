<template>

  <div class="main" >
    <p>axios实例（使用easy-mock）</p>
    <p>
      <button @click="getAction()">执行get请求</button>
    </p>
    <p>
      {{getMessage}}
    </p>

    <p>
      <button @click="postAction()">执行post请求</button>
    </p>
    <p>
      {{postMessage}}
    </p>

  </div>


</template>
<script>

  export default {
  name: 'AxiosExample',
  data() {
    return {
        getMessage : '...',
        postMessage : '...'
    }
  },
  methods:{

    getAction() {
      this.$axios({
        method : 'get',
        url    : 'https://www.easy-mock.com/mock/5a654e3cd9891651babe284f/example/mock',
      }).then(data=>this.getMessage = data.data.message);
    },
    postAction() {
      this.$axios({
        method : 'post',
        url    : 'https://www.easy-mock.com/mock/5a654e3cd9891651babe284f/example/post',
        data   : {
            type:1,
            data:'ooo'
        }
      }).then(data=>this.postMessage = data.data.message);
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  p{
    font-size: 30px;
  }

</style>
