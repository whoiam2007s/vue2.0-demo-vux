<template>
    <div class="container has-header music-view" >
      <div class="view-bg" :style="'background-image:url('+getPlayData.img+')'"></div>
      <my-header icon_left="icon-pageback" bgcol="rgba(255,255,255,.3)" @leftClick="onLeftClick">
        <div slot="title" >
          <div class="h-title" v-text="getPlayData.title"></div>
          <div class="h-tip" v-text="getPlayData.singer"></div>
        </div>
      </my-header>
      <div class="view-cnt flex">
        <div class="view-cd" :style="'transform:rotate('+(getPlayCur.current*20)+'deg);-webkit-transform:rotate('+(getPlayCur.current*20)+'deg);'">
          <div :style="'background-image:url('+getPlayData.img+')'"></div>
        </div>

        <div class="view-pro flex">
          <div class="current" v-text="formatSec(getPlayCur.current)"></div>
          <div class="progress flex-item">
            <div class="bar" :style="'left:'+getPlayPro"></div>
            <div class="line" :style="'width:'+getPlayPro"></div>
          </div>
          <div class="duration" v-text="formatSec(getPlayCur.duration)"></div>
        </div>

        <div class="view-btns flex">
          <i class="iconfont icon-prev" @click="onPrev"></i>
          <i class="iconfont icon-play" v-if="ispause" @click="onPlay"></i>
          <i class="iconfont icon-pause" v-if="!ispause" @click="onPause"></i>
          <i class="iconfont icon-next" @click="onNext"></i>
          <div>{{ispause}}</div>
        </div>

      </div>

    </div>
</template>

<script>
    import MyHeader from 'components/myheader';
    export default {
        components: {
            MyHeader
        },
        props: {},
        data() {
            return {
                ispause: false,
                data:{
                    id: 1,
                    isplay: false,
                    ispause: false,
                    title: '500 Miles',
                    singer: 'The Singer',
                    img: require('assets/images/temp/1.jpg'),
                    src: require('assets/audio/500miles.mp3'),
                },
            }
        },
        computed: {
            getPlayPro(){
                let {current, duration} = this.$store.getters.getMusicPlaySta;
                return (duration==0 ? 0 : current/duration)*100+'%'
            },
            getPlayCur(){
                let {current, duration} = this.$store.getters.getMusicPlaySta;
                return {current, duration}
            },
            getPlayData(){
                let data = this.$store.getters.getMusicData;
                this.ispause = data.ispause;
                return data
            }
        },
        methods: {
            onLeftClick(){
                this.$router.back()
            },
            formatSec(sec){
                return this.__formatTime(sec)
            },
            onPlay(){
                this.ispause = false;
                this.$store.commit('set_music_event', {type: 'play'})
            },
            onPause(){
                this.ispause = true;
                this.$store.commit('set_music_event', {type: 'pause'})
            },
            onPrev(){
                this.ispause = false;
                this.$store.commit('set_music_event', {type: 'prev'})
            },
            onNext(){
                this.ispause = false;
                this.$store.commit('set_music_event', {type: 'next'})
            },
        }
    }
</script>

<style lang="less">
  @import "../../assets/less/theme.less";
  .music-view{
    position: fixed;
    left:0;
    top:0;
    right:0;
    height: 100vh;
    z-index: 110;
    background: @colorSec;
    .view-bg{
      position: absolute;
      left:-.5rem;
      top:-.5rem;
      bottom:-.5rem;
      right:-.5rem;
      background-size: cover;
      background-position: center;
      filter: blur(.3rem);
      opacity: .5;
      z-index: 1;
    }

    .h-title{
      color: @colorFont;
      line-height: .55rem;
    }
    .h-tip{
      color: @colorFont;
      font-size: 12px;
      line-height: .45rem;
    }

    .view-cnt{
      position: relative;
      height: 100%;
      z-index: 2;
      flex-direction: column;
      justify-content: space-around;

      .view-cd{
        width:4.5rem;
        height:4.5rem;
        padding: 1.5rem;
        border-radius: 50%;
        font-size: 0;
        box-shadow:
            0 0 0 .5rem #2a2c2b inset
          , 0 0 0 .55rem #171715 inset
          , 0 0 0 .8rem #2a2c2b inset
          , 0 0 0 .9rem #171715 inset
          , 0 0 0 1.3rem #2a2c2b inset
          , 0 0 0 1.35rem #171715 inset
          , 0 0 0 1.5rem #2a2c2b inset;
        border: .2rem solid #171715;
        transition: transform 1s linear;
        -webkit-transition: -webkit-transform 1s linear;
        div{
          width: 4.3rem;
          height: 4.3rem;
          background-size: cover;
          border-radius: 50%;
          border: .1rem solid @colorMain;
        }
      }

      .view-pro{
        width: 11rem;
        padding: .5rem;
        font-size: .4rem;
        color: @colorFont;
        .progress{
          position: relative;
          margin: 0 .2rem;
          height: .2rem;
          border-radius: .1rem;
          background: rgba(0,0,0,.2);
          .line{
            height: .2rem;
            border-radius: .1rem;
            background: @colorMain;
          }
          .bar{
            position: absolute;
            top: -.05rem;
            width: .3rem;
            height: .3rem;
            border-radius: 50%;
            background: @colorFont;
            box-shadow: 0 0 5px 0 @colorMain;
            transform: translate3d(-.1rem, 0, 0);
          }
        }
      }

      .view-btns{
        .iconfont{
          position: relative;
          font-size: 0;
          text-align: center;
          margin-left:.5rem;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          color: @colorFont;
          &::before{
            font-size: 1rem;
            line-height: 2rem;
          }
          &.icon-play{
            border:2px solid @colorFont;
          }
          &.icon-pause{
            border:2px solid @colorFont2;
          }
        }
      }

    }

  }
</style>

