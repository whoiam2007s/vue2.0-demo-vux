<template>
  <div v-title="'Run'" class="container run-index">
    <my-header icon_left="icon-pageback" @leftClick="onLeftClick">
        <div slot="title">Run</div>
    </my-header>

    <div class="run-page flex text-center">
      <div class="range">
        <b v-text="rangeNum"></b>
        <div>Km</div>
      </div>

      <run-charts :data="rundata"></run-charts>

      <div class="btns flex">
        <i class="iconfont icon-music2" @click="onMusicClick"></i>
        <div class="go">GO</div>
        <i class="iconfont icon-place"></i>
      </div>
    </div>

  </div>
</template>

<script>
    import MyHeader from 'components/myheader';
    import RunCharts from 'components/run/runCharts';

    export default {
        components: {
          MyHeader,
          RunCharts,
        },
        props: {},
        data() {
            return {
                range:0,
                rundata:{
                  time: Date.now(),
                  speed : 60,
                  calory: 96,
                }
            }
        },
        computed:{
          rangeNum(){
              return this.range.toFixed(2)
          }
        },
        methods: {
            onLeftClick(){
                this.$router.back()
            },
            onMusicClick(){
                this.$router.push({
                  name: 'music'
                })
            }
        }
    }

</script>

<style lang="less">
  @import "../../assets/less/theme.less";
  .run-page{
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
    .range{
      padding-top: 2rem;
      b{
        font-size: 2.5rem;
        color: @colorFont;
      }
    }
    .btns{
      padding-bottom: 1rem;
      width: 100%;
      justify-content: space-around;
      .iconfont{
        display: inline-block;
        font-size: 0;
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        line-height: 1.6rem;
        border: 2px solid @colorThr;
        color: @colorThr;
        background: @colorFou;
        &::before{
          font-size: .8rem;
        }
      }
      .go{
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        font-size: .6rem;
        line-height: 2.5rem;
        color: @colorFont;
        background: @colorMain;
        box-shadow: 0 0 0 .6rem rgba(253, 78, 103, .2), 0 0 0 1.2rem rgba(253, 78, 103, .2);
      }
    }
  }
</style>
