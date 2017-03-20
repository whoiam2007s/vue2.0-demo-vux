<template>
  <div class="talking-item" :class="{'mine':data.type==0}">
    <img class="headimg" :src="data.headimg"/>
    <div class="cnt">
      <template v-for="item in data.message">
        <div v-text="item.text" v-if="item.text"/>
        <img :src="item.img" v-if="item.img" />
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {
      data: Object,
    },
    data() {
      return {
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/theme.less";
  .talking-item{
    position: relative;
    padding: 10px 30px;
    .headimg{
      position: absolute;
      top: 15px;
      left: 15px;
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
    }
    .cnt{
      display: inline-block;
      text-align: left;
      padding: 10px 20px;
      border-radius: .6rem;
      background: @colorFou;
      font-size: 0;
      div{
        font-size: 12px;
        line-height: 18px;
        padding: 5px 10px;
      }
      img{
        width: 100px;
        border-radius: 50px;
        margin: 5px;
      }
    }
    &.mine{
      text-align: right;
      .headimg{
        left: auto;
        right: 15px;
      }
    }
  }
</style>
