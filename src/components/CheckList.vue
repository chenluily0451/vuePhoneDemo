<template>
  <div class="main">
      <div class="checkList">
          <ul class="toolBar">
              <li class="cancelBtn btn">取消</li>
              <li>选择愿望</li>
              <li class="okBtn btn">确定</li>
          </ul>
          <p class="checkedNum">
            您已选中{{selectedLen}}/3
          </p>
        <ul class="list">
          <li v-for="(item,index) in items">
            <label v-on:click="selectedItems(index)">
              <span class="text">{{item.text}}</span>
              <span class="unchecked" v-bind:class="{'checked' :item.selected}"></span>
            </label>
          </li>

        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CheckList',
  data() {
      return {
          items: [
                    {
                      text:'this is text1',
                      selected:false
                    },
                    {
                      text:'this is text2',
                      selected: false
                    },
                    {
                      text:'this is text3',
                      selected:true
                    },
                    {
                      text:'this is text4',
                      selected:false
                    },
                    {
                      text:'this is text5',
                      selected:false
                    },
                    {
                      text:'this is text6',
                      selected:false
                    },
                    {
                      text:'this is text7',
                      selected:false
                    },
                    {
                      text:'this is text8',
                      selected:false
                    },
                    {
                      text:'this is text9',
                      selected:false
                    }
                 ],
        selectedLen:0
  }
  },
  methods:{
    selectedItems: function(index){
      this.items[index].selected = !this.items[index].selected;
      this.totalNums();
    },
    totalNums: function(){
      this.selectedLen = 0;
      for(let i = 0; i <this.items.length; i++) {
        if (this.items[i].selected){
          this.selectedLen++
        }
      }
    }

  },
  mounted(){
    this.totalNums()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .main{
    position: fixed;
    overflow: hidden;
    bottom:0;
    left:0;
    transition: all ease .5s;
    background: #fcfcfc;
    transform: translateY(100%);
  }
  .show{
    transform: translateY(0%);
  }
  .checkList{

    .toolBar{
      width:100vw;
      display: flex;
      border-bottom: 1px solid #cecece;
      li{
        font-weight: bold;
        font-size: 1.1rem;
        padding:.5rem 0;
        &:not(btn){
          flex-grow: 1;
        }
        &.btn{
          width: 1.5rem;
        }
        &.cancelBtn{
          color: #999;
        }
        &.okBtn{
          color: #0d87be;
        }
      }
    }

    .checkedNum{
      margin-top: .5rem;
      font-size: .8rem;
      text-align: right;
      padding-right: .5rem;
    }

    .list{
      padding:.5rem 1rem;
      height:40vh;
      overflow: auto;
      li{
        width:100%;
        border-bottom: 1px solid #eee;
        text-align: left;
        font-size: 1.2rem;
        padding:.5rem 0;
        padding-left: .5rem;

        label{
          display: flex;
          width:100%;

          .text{
            flex-grow: 1;
          }
          span.unchecked{
            width:2rem;
            height:2rem;
            background:url("../assets/unchecked.png") no-repeat center ;
            background-size:100% 100%;
          }
          span.checked{
            width:2rem;
            height:2rem;
            background:url("../assets/checked.jpg") no-repeat center ;
            background-size:100% 100%;

          }
        }
      }
    }
  }


</style>
