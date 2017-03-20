<template>
    <div class="follow-item flex">
      <img :src="data.headimg" />
      <div class="flex-item">
        <div class="text-over name" v-text="data.name"></div>
        <div class="text-over " v-text="data.tip"></div>
      </div>
      <div class="btn inline-row text-center" :class="{'disable':isFollow}" @click="onFollowClick">
          <i class="iconfont icon-add item" v-if="!isFollow"></i>
          <span v-text="isFollow ? 'Followed' : 'Follow' "></span>
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
                isfollow: 0,
            }
        },
        computed: {
            isFollow(){
                return this.data.isfollow || this.isfollow;
            }
        },
        methods: {
            onFollowClick(){
                if(this.data.isfollow == 1){
                    return ;
                }
                this.isfollow = 1;
            }
        }
    }
</script>

<style lang="less">
  @import "../../assets/less/theme.less";
  .follow-item{
    img{
      width: 1.4rem;
      height: 1.4rem;
      border-radius: 50%;
      margin-right: .3rem;
    }
    .flex-item{
      font-size: 12px;
      .name{
        font-size: 16px;
        color: @colorFont;
      }
    }
    .btn{
      width: 90px;
      font-size: 14px;
      line-height: 26px;
      border-radius: 13px;
      border: 1px solid @colorMain;
      color: #fff;
      background: @colorMain;
      .iconfont{
        font-size: 0;
        font-weight: bold;
        &::before{
          font-size: 12px;
        }
      }
      &.disable{
        background: transparent;
        color: @colorMain;
      }
    }
  }
</style>
