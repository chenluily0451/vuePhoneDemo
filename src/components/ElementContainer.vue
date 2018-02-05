<template>

  <div class="main" id="commonElement">
    <el-container style="min-height:100vh">
      <el-header style="background: #409EFF;position: relative">
        <i class="el-icon-arrow-left icon"></i>
        头部容器
      </el-header>
      <el-main style="background: #e9eef3;padding: 0;">
        <el-carousel :interval="5000" arrow="always" style="height: 200px;">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
        <el-tabs v-model="activeName" type="border-card" class="borderCard">
          <el-tab-pane label="menu1" name="first">
            <el-row>
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <div class="grid-content bg-purple">1</div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple">2</div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple">3</div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple">4</div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="menu2" name="second">menu2</el-tab-pane>
          <el-tab-pane label="menu3" name="third">menu3</el-tab-pane>
          <el-tab-pane label="menu4" name="fourth">menu4</el-tab-pane>
        </el-tabs>
      </el-main>
      <el-footer>底栏容器</el-footer>
    </el-container>
  </div>


</template>
<script>

  export default {
  name: 'AxiosExample',
  data() {
    return {
      activeName: 'first'
    }
  },
  methods:{

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  #commonElement{
    color:#ccc;
    font-size: 28px!important;
    font-family: PingFang SC;

    h3{
      line-height: 130px;
    }
    .icon{
      position: absolute;
      left:10px;
      top:50%;
      transform: translateY(-50%);
      cursor: pointer;
    }

    .is-active{
      border-bottom-color:#409EFF;
    }

    .el-carousel__container{
      height:200px;
    }
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
    .el-tabs__nav{
      float: none;
      font-size: 0;
    }
    .el-tabs__item{
      width:25%;
      vertical-align: top;
    }

    .borderCard{

    }
  }
</style>
