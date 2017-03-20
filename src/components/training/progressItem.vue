<template>
    <div class="progress-item">
      <div class="float-fixed">
        <div class="fl">
          <div class="title" v-text="data.title"></div>
          <div class="label" v-text="data.label"></div>
        </div>
        <div class="fr text-right">
          <div class="count" v-text="data.count"></div>
          <div class="label" v-text="data.unit"></div>
        </div>
      </div>
      <div class="bar">
        <div :style="'width:'+data.progress+'%'"></div>
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
            return {}
        }
    }
</script>

<style lang="less">
  @import "../../assets/less/theme.less";
  .progress-item{
    color: @colorFont;
    .title{
      font-size: .45rem;
      line-height: .8rem;
    }
    .label{
      font-size: .4rem;
      line-height: .6rem;
    }
    .count{
      font-size: .7rem;
      line-height: .8rem;
    }
    .bar{
      position: relative;
      width:100%;
      margin-top: .2rem;
      overflow: hidden;
      height: .1rem;
      border-radius: .1rem;
      background: rgba(255,255,255,.3);
      div{
        height: 100%;
        border-radius: .1rem;
        background: @colorMain;
      }
    }
  }
</style>
