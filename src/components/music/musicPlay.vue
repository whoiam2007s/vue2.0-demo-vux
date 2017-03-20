<template>
    <div class="music-play flex" v-if="data">{{eventChange}}
      <img class="headimg" :src="data.img" @click="onView"/>
      <div class="flex-item">
        <div class="title text-over" v-text="data.title"></div>
        <div class="tip text-over" v-text="data.singer"></div>
      </div>
      <i class="iconfont icon-prev" @click="onPrev"></i>
      <i class="iconfont icon-play" v-if="!play" @click="onPlay">
        <div class="play-pro">
          <div class="play-pro-half"><div :style="getTransform(getPlayPro-.5)"></div></div>
          <div class="play-pro-half"><div :style="getTransform(getPlayPro)"></div></div>
        </div>
      </i>
      <i class="iconfont icon-pause" v-if="play" @click="onPause">
        <div class="play-pro">
          <div class="play-pro-half"><div :style="getTransform(getPlayPro-.5)"></div></div>
          <div class="play-pro-half"><div :style="getTransform(getPlayPro)"></div></div>
        </div>
      </i>
      <i class="iconfont icon-next" @click="onNext"></i>
    </div>
</template>

<script>
   export default {
        components: {},
        props: {
            data: Object,
            destory: Boolean,
        },
        data() {
            return {
                lastdata: {id:null, src:null},
                play: false,
                audio: null,
                eventType:'',
            }
        },
        computed:{
            getPlayPro(){
                let {current, duration} = this.$store.getters.getMusicPlaySta;
                return duration==0 ? 0 : current/duration
            },
            eventChange(){
                let { type } = this.$store.getters.getMusicEvent;
                switch (type){
                  case 'play':
                    this.onPlay();
                      break;
                  case 'pause':
                      this.onPause();
                      break;
                  case 'prev':
                      this.onPrev();
                      break;
                  case 'next':
                      this.onNext();
                      break;
                }
                return '';
            }
        },
        created(){
            !this.audio && (
                this.audio  = new Audio(),
                this.audio.onended = ()=>{
                    this.onNext()
                },
                this.interval = setInterval(()=>{
                    this.play && this.onMove(this.audio.currentTime, this.audio.duration)
                }, 1000))
        },
        watch: {
            data(){
                this.lastdata.src != this.data.src && this.data.isplay && this.onInitPlay()
                this.lastdata.id != this.data.id && this.audio && (this.audio.src = this.data.src)
                this.lastdata = this.data;
                this.$store.commit('set_music_data', this.data)
            },
            destory(){
                this.destory && (this.onDestory(), clearInterval(this.interval))
            },
        },
        methods: {
            getTransform(percent){
                let deg = percent<0 ? -180 : percent>.5 ? 0 : -180+percent*360;
                return 'transform:rotate('+deg+'deg);-webkit-transform:rotate('+deg+'deg);'
            },
            onInitPlay(){
                this.audio && (this.audio.oncanplay = ()=>{
                  this.play = true;
                  this.audio.play();
                  this.$emit('play')
                })
            },
            onView(){
                this.$emit('view')
            },
            onPlay(){
                this.play = true;
                this.audio && this.audio.play();
                this.$emit('play')
            },
            onPause(){
                this.play = false;
                this.audio && this.audio.pause();
                this.$emit('pause')
            },
            onPrev(){
                this.audio && this.audio.pause();
                this.$emit('prev')
            },
            onNext(){
                this.audio && this.audio.pause();
                this.$emit('next')
            },
            onDestory(){
                this.audio && this.audio.pause();
                this.audio = null;
            },
            onMove(current, duration){
              this.$store.commit('set_music_playing_state', {
                current, duration
              })
            }
        }
    }
</script>

<style lang="less">
  @import "../../assets/less/theme.less";

  .music-play{
    position: fixed;
    height: 1.4rem;
    left:0;
    bottom:0;
    right:0;
    background: @colorMain;
    color: @colorFont;
    padding: 0 .4rem;

    .headimg{
      width: 1rem;
      height: 1rem;
      border: 1px solid @colorFont;
      border-radius: 50%;
    }
    .flex-item{
      padding-left:.4rem;
      .title{
        font-size: .4rem;
      }
      .tip{
        font-size: 12px;
      }
    }
    .iconfont{
      position: relative;
      font-size: 0;
      text-align: center;
      margin-left:.5rem;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      &::before{
        font-size: .6rem;
        line-height: 1rem;
      }
      &.icon-play{
        border:1px solid @colorFont;
      }
      &.icon-pause{
        border:1px solid @colorFont2;
      }
    }

    .play-pro{
      position: absolute;
      left:0;
      top:0;
      right:0;
      bottom:0;
      font-size: 0;
      overflow: hidden;
      border-radius: 50%;
      .play-pro-half{
        position: relative;
        display: inline-block;
        width: 50%;
        height: 100%;
        overflow: hidden;
        div{
          height: 100%;
          opacity: .4;
          background: @colorFont;
        }
        &:first-child{
          div{
            transform-origin: 100% 50%;
          }
        }
        &:last-child{
          div{
            transform-origin: 0 50%;
          }
        }
      }
    }
  }
</style>
