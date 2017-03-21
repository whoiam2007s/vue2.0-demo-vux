<template>
    <div class="friends-item">
      <div class="mine flex" @click="onUserClick">
        <img :src="data.mine.headimg" />
        <div class="flex-item">
          <div class="text-over name" v-text="data.mine.name"></div>
          <div class="text-over" v-text="data.mine.time"></div>
        </div>
        <i class="iconfont icon-more" ></i>
      </div>
      <div class="media">
        <img :src="data.src" v-if="data.src" />
        <slot name="media"></slot>
      </div>
      <div class="info flex">
        <i class="iconfont icon-xin" :class="{'active':likesta==1}" @click="onLikeClick"></i>
        <div class="flex-item inline-row text-over">
          <div class="item" v-for="item in data.likes">
            <img :src="item.headimg" />
          </div>
          <div class="item" v-text="data.likecount+' likes'"></div>
        </div>
        <div class="info-link">
          <i class="iconfont icon-msg"></i>
          <span v-text="data.msgcount"></span>
        </div>
        <div class="info-link">
          <i class="iconfont icon-enter"></i>
          <span v-text="data.viewcount"></span>
        </div>
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
                likesta: 0,
            }
        },
        methods: {
            onLikeClick(){
                this.likesta = 1;
            },
            onUserClick(){
                this.$emit('userclick')
            }
        }
    }
</script>

<style lang="less">
  @import "../../assets/less/theme.less";
  .friends-item{
    background: @colorFiv;
    .mine{
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      padding: 8px;
      img{
        width: 1.4rem;
        height: 1.4rem;
        border-radius: 50%;
        border: 1px solid @colorFou;
        margin-right: .3rem;
      }
      .flex-item{
        font-size: 12px;
        .name{
          font-size: 16px;
          color: @colorFont;
        }
      }
      .iconfont{
        font-size: .8rem;
      }
    }
    .media{
      font-size: 0;
      img{
        width: 100%;
      }
    }
    .info{
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 3px;
      padding: 8px;
      .icon-xin{
        padding: 0 10px;
        &.active{
          color: @colorMain;
        }
      }
      .inline-row{
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
            font-size: 12px;
            width:auto;
            padding: 0 15px;
          }
        }
      }
      .info-link{
        width: 50px;
        color: @colorFont;
        font-size: 12px;
        .iconfont{
          font-size: .5rem;
        }
      }
    }
  }
</style>
