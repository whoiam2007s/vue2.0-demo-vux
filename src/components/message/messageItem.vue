<template>
    <div class="message-item flex" :style="moveTranslate()" @touchstart="onTouchStart" @touchmove.stop.prevent="onTouchMove" @touchend="onTouchEnd" @touchcancel="onTouchEnd">
      <div class="head" >
        <img :src="data.headimg" v-if="data.type == 0" />
        <i class="iconfont" :class="headIcon" v-if="data.type!=0"></i>
      </div>
      <div class="cnt flex-item">
        <div class="name" v-if="data.name" v-text="data.name"></div>
        <div class="tip inline-row">
          <div class="item" v-for="item in data.headimgs">
            <img :src="item" />
          </div>
          <div class="item" v-text="data.message"></div>
        </div>
      </div>
      <div class="time">
        <div v-text="data.time"></div>
        <span v-text="data.count" v-if="data.count>0"></span>
      </div>
      <div class="delete" >
        <i class="iconfont icon-del"></i>
      </div>
    </div>
</template>

<script>
    import animate from 'utils/animate';
    export default {
        components: {},
        props: {
            data: Object,
        },
        data() {
            return {
                touchposx: 0,
                movepos: 0,
                lastpos: 0,
                isTouchMove: false,
            }
        },
        computed: {
            headIcon(){
                switch (this.data.type) {
                    case 1 : return 'icon-xin';
                    case 2 : return 'icon-msg';
                    case 3 : return 'icon-enter';
                }
            },
        },
        created(){
          this.width = window.screen.availWidth;
        },
        methods: {
          onItemClick(){
            this.$emit('itemClick')
          },
          onUserClick(){
            this.$emit('userclick')
          },
          onDelClick(){
            this.$emit('delClick')
          },
          moveTranslate(){
              return 'transform: translate3d('+this.movepos+'px,0,0); -webkit-transform: translate3d('+this.movepos+'px,0,0)';
          },
          onTouchStart(event){
              this.touchposx = event.touches[0].clientX;
              this.lastpos = this.movepos*1;
          },
          onTouchMove(event){
              this.isTouchMove = true;
              let move = event.touches[0].clientX-this.touchposx;
              this.movepos = this.lastpos+move;
          },
          onTouchEnd(event){
              if(!this.isTouchMove){
                  if(event.target.className == 'iconfont icon-del' || event.target.className == 'delete'){
                      this.onDelClick()
                  }else if(event.target.tagName.toLowerCase() == 'img'){
                      this.onUserClick()
                  }else{
                    this.onItemClick()
                  }
                  return true;
              }
              this.isTouchMove = false;
              this.touchposx = 0;
              let move = this.movepos-this.lastpos;
              if(move == 0){return}
              let len = move/Math.abs(move)*2/12*this.width;
              if(Math.abs(move) > 40){
                  if(this.lastpos<0 && move<0){
                      this.movePos(-this.width, this.movepos, this.lastpos)
                  }else if(this.lastpos>=0 && move>0){
                    this.movePos(this.width, this.movepos, this.lastpos)
                  }else{
                    this.movePos(this.lastpos, this.movepos, this.lastpos+len)
                  }
              }else{
                  this.movePos(this.lastpos+len, this.movepos, this.lastpos)
              }
          },
          movePos(start, current, end){
              animate({
                  start: start,
                  end: end,
                  current: current,
                  duration: 300,//ms
                  callback: val=>{
                      this.movepos = val;
                  }
              })
          }
        }
    }
</script>

<style lang="less">
  @import "../../assets/less/theme.less";
  .message-item{
    position: relative;
    border-bottom: 1px solid @colorFou;
    .head{
      padding:15px 10px;
      img{
        width:1.2rem;
        height:1.2rem;
        border-radius: 50%;
      }
      .iconfont{
        display: inline-block;
        text-align: center;
        width: 1.2rem;
        height: 1.2rem;
        line-height: 1.2rem;
        font-size: .6rem;
        border-radius: 50%;
        color: @colorFont;
        &.icon-xin{
          background: @colorMain;
        }
        &.icon-msg{
          background: @colorPurple;
        }
        &.icon-enter{
          background: @colorBlue;
        }
      }
    }
    .cnt{
      .name{
        font-size: 16px;
        color: @colorFont;
      }
      .tip{
        .item{
          width: .5rem;
          font-size: 0;
          img{
            width: .8rem;
            height: .8rem;
            border: 1px solid @colorFont;
            border-radius: 50%;
          }
          &:last-child{
            width: auto;
            padding-left: .5rem;
            font-size: 12px;
          }
          &:first-child{
            padding-left: 0;
          }
        }
      }
    }
    .time{
      text-align: right;
      padding-right: 10px;
      span{
        display: inline-block;
        font-size: 12px;
        line-height: 17px;
        border-radius: 8.5px;
        padding: 0 2px;
        min-width: 13px;
        color: @colorFont;
        background: @colorMain;
      }
    }
    .delete{
      position: absolute;
      top:0;
      left: 100%;
      width: 2rem;
      height: 100%;
      background: @colorMain;
      color: @colorFont;
      text-align: center;
      .iconfont::before{
        font-size: .6rem;
        line-height: 2rem;
      }
    }
  }
</style>
