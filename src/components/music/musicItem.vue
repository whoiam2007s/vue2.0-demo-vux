<template>
    <div class="music-item flex" :class="{'active': data.isplay, 'pause':data.ispause}" @click="onItemClick">
      <div class="order" v-text="order+1"></div>
      <div class="flex-item">
        <div class="title text-over" v-text="data.title"></div>
        <div class="tip text-over" v-text="data.singer"></div>
      </div>
      <div class="playsta" v-if="data.isplay"></div>
      <i class="iconfont icon-more"></i>
    </div>
</template>

<script>
    export default {
        components: {},
        props: {
            data: Object,
            order: Number,
        },
        data() {
            return {}
        },
        methods: {
            onItemClick(){
                this.$emit('itemClick')
            }
        }
    }
</script>

<style lang="less">
  @import "../../assets/less/theme.less";
  @keyframes music-play {
    0%, 100%{ transform: translate3d(0, 100%, 0)}
    50%{ transform: translate3d(0, 0, 0)}
  }
  .music-item{
    padding: .4rem;
    border-bottom: 1px solid @colorFou;
    .order{
      font-size: .45rem;
    }
    .flex-item{
      padding: 0 10px;
      .title{
        font-size: .45rem;
        color: @colorFont;
      }
      .tip{
        font-size: .4rem;
      }
    }
    .iconfont::before{
      font-size: .7rem;
    }
    .playsta{
      position: relative;
      width: 2rem;
      height: .8rem;
      overflow: hidden;
      &::before{
        display: block;
        position: absolute;
        left:0;
        top: 0;
        content: "";
        width: .1rem;
        height: .8rem;
        border-radius: 2px;
        box-shadow: .2rem .3rem 0 .5px @colorMain
          ,.5rem 2px 0 .5px @colorMain
          ,.8rem .3rem 0 .5px @colorMain
          ,1.1rem 2px 0 .5px @colorMain
          ,1.4rem .3rem 0 .5px @colorMain;
        animation: music-play .6s 0s infinite;
      }
      &::after{
        display: block;
        position: absolute;
        left:0;
        top: 0;
        content: "";
        width: .1rem;
        height: .8rem;
        border-radius: 2px;
        box-shadow: .2rem 2px 0 .5px @colorMain
          ,.5rem .3rem 0 .5px @colorMain
          ,.8rem 2px  0 .5px @colorMain
          ,1.1rem .3rem 0 .5px @colorMain
          ,1.4rem  2px .5px @colorMain;
        animation: music-play .6s .3s infinite;
      }
    }
    &.active{
      color: @colorMain;
      .title{
        color: @colorMain;
      }
    }
    &.pause{
      .playsta{
        &::before{
          animation: none;
        }
        &::after{
          display: none;
        }
      }
    }
  }
</style>
