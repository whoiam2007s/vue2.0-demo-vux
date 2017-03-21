<template>
    <div class="popular-item">
        <div class="media">
          <img :src="data.src" />
        </div>
        <div class="info flex">
          <div class="title flex-item text-over" v-text="data.title"></div>
          <div class="tip " >FREE</div>
        </div>
        <div class="like flex">
            <div class="flex-item inline-row text-over">
              <div class="item pic" v-for="item in data.likes">
                <img :src="item.headimg" />
              </div>
              <div class="item pic" >
                <div v-text="data.likecount"></div>
              </div>
            </div>
            <div class="inline-row joinbtn" @click="onUserClick">
              <i class="iconfont icon-add item"></i>
              <span class="item">Join</span>
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
            return {}
        },
        methods:{
          onUserClick(){
            this.$emit('userclick')
          }
        }
    }
</script>

<style lang="less">
  @import "../../assets/less/theme.less";
  .popular-item{
    border-radius: 3px;
    overflow: hidden;
    .media{
      font-size: 0;
      img{
        width: 100%;
      }
    }
    .info{
      background: @colorFiv;
      padding: 8px;
      padding-bottom: 4px;
      .title{
        font-size: 20px;
        color: @colorFont;
      }
      .tip{
        font-size: 16px;
        color: @colorMain;
        padding-left: 10px;
      }
    }
    .like{
      padding: 8px;
      padding-top: 0;
      background: @colorFiv;
      .pic{
        width: .5rem;
        font-size: 0;
        img{
          width: .8rem;
          height: .8rem;
          border: 1px solid @colorFont;
          border-radius: 50%;
        }
        div{
          width: .8rem;
          height: .8rem;
          font-size: 12px;
          line-height: .8rem;
          text-align: center;
          color: @colorFont;
          background: @colorMain;
          border: 1px solid @colorMain;
          border-radius: 50%;
        }
      }
      .joinbtn{
        .iconfont{
          font-size: 12px;
          font-weight: bold;
        }
        padding: 2px 15px;
        font-size: 16px;
        line-height: 18px;
        border-radius: 11px;
        background: @colorMain;
        color: @colorFont;
      }
    }
  }
</style>
