<template>
    <div class="rank-item flex">
      <div class="order" v-text="data.order"></div>
      <img :src="data.headimg" />
      <div class="flex-item" v-text="data.name"></div>
      <div class="flex-item text-right" v-text="data.info"></div>
      <i class="iconfont icon-xin" :class="{'active':data.heart}"></i>
    </div>
</template>

<script>
    export default {
        components: {},
        props: {
            data: Object,
        },
        data() {
            return {}
        }
    }
</script>

<style lang="less">
  @import "../../assets/less/theme.less";
  .rank-item{
    height: 2rem;
    font-size: 14px;
    .order{
      font-size: 16px;
      padding-left: .6rem;
      padding-right: .4rem;
    }
    img{
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
    }
    .flex-item{
      padding: 0 .4rem;
    }
    .iconfont{
      font-size: .6rem;
      margin: 0 .6rem;
      &.active{
        color: @colorMain;
      }
    }
    &:nth-child(1){
      .order{
        color: @colorMain;
      }
      .text-right{
        color: @colorMain;
      }
    }
    &:nth-child(2){
      .order{
        color: #ffa417;
      }
      .text-right{
        color: #ffa417;
      }
    }
    &:nth-child(3){
      .order{
        color: #fe7613;
      }
      .text-right{
        color: #fe7613;
      }
    }
  }
</style>

