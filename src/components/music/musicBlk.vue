<template>
    <div class="music-blk flex" :style="'background-image:url('+data.bgimg+')'" @click="onBlkClick">
      <div class="title" v-text="data.title"></div>
      <div class="count" v-text="data.count+'songs'"></div>
      <div class="cover" :style="'background:-webkit-linear-gradient(left, hsla('+(hsl-60+360)%360+',50%,50%, .5), hsla('+hsl+',50%,50%, .5));'"></div>
    </div>
</template>

<script>
    export default {
        components: {},
        props: {
            data: Object,
            hsl: Number
        },
        data() {
            return {}
        },
        methods:{
          onBlkClick(){
              this.$emit('blkClick')
          }
        }
    }
</script>

<style lang="less">
  @import "../../assets/less/theme.less";
  .music-blk{
    position: relative;
    color: @colorFont;
    background-size: cover;
    flex-direction: column;
    .title{
      position: relative;
      z-index: 2;
      font-size: 20px;
      line-height: 30px;
    }
    .count{
      position: relative;
      z-index: 2;
      font-size: 14px;
    }
    .cover{
      position: absolute;
      z-index: 1;
      left:0;
      top:0;
      bottom:0;
      right:0;
    }
  }
</style>
