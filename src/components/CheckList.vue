<template>

  <div class="main" >
      <div class="checkList" v-bind:class="{'show' : checklistShow}">
          <ul class="toolBar">
              <li class="cancelBtn btn" v-on:click="show">取消</li>
              <li>选择愿望</li>
              <li class="okBtn btn" v-on:click="confirm">确定</li>
          </ul>
          <p class="checkedNum">
            您已选中{{selectedLen}}/{{maxSelect}}
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
      <div class="modal" v-show="checklistShow"></div>
  </div>


</template>

<script>
export default {
  name: 'CheckList',
  data() {
      return {
          items: [
              {
                text:'中彩票500万',
                selected:false
              },
              {
                text:'年轻10岁',
                selected: false
              },
              {
                text:'长高10cm',
                selected:false
              },
              {
                text:'变聪明',
                selected:false
              },
              {
                text:'会9国语言',
                selected:false
              },
              {
                text:'永远不生病',
                selected:false
              },
              {
                text:'有一个完美情人',
                selected:false
              }
          ],
        selectedLen:0,
        checklistShow: false,

  }
  },
  props: {
    maxSelect:{
        type:Number,
        default:3
    }
  },
  methods:{
    selectedItems: function(index){

      if(this.selectedLen > this.maxSelect-1){
          if(this.items[index].selected){
            this.items[index].selected = false
          }else{
            alert('最多选择' + this.maxSelect + '个');
            return false;
          }
      }else{
        this.items[index].selected = !this.items[index].selected;
      }
      this.totalNums();
    },
    totalNums: function(){

        this.selectedLen = 0;
        for(let i = 0; i <this.items.length; i++) {
          if (this.items[i].selected){
            this.selectedLen++
          }
        }

    },
    show: function () {
      this.checklistShow = !this.checklistShow;
    },
    confirm: function(){
        this.show();
        const data = [];
        if(this.selectedLen < 1){
          alert("请选择至少1个")
        }
        for(let i =0; i<this.items.length;i++) {
            if(this.items[i].selected) {
                data.push(
                  {
                    text:this.items[i].text
                  }
                )
            }
        }
      this.$emit('child-data',data);
    }

  },
  mounted(){
    this.totalNums()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  .checkList{
    position: fixed;
    overflow: hidden;
    bottom:0;
    left:0;
    transition: all ease .5s;
    background: #fcfcfc;
    z-index: 100;
    transform: translateY(100%);

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

  .show{
    transform: translateY(0%);
  }
  .modal{
    width:100%;
    height:100%;
    position: fixed;
    z-index: 99;
    background: #000;
    opacity: .6;
    left:0;
    top:0;
  }


</style>
