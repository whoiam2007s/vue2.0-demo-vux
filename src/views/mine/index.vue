<template>
    <div v-title="'Me'" class="container has-bottom mine-index">
      <my-header icon_right="icon-setting" bgcol="rgba(255,255,255,.3)" ></my-header>
      <div class="myinfo text-center" :style="'background-image:url('+src+')'">
        <div class="name" v-text="name"></div>
        <div class="info flex">
          <i class="iconfont icon-age" ></i>
          <span>{{age}} age</span>
          <i class="iconfont icon-place" ></i>
          <span>{{place}}</span>
        </div>
        <div class="menu flex">
          <router-link class="flex-item" to="./posts" tag="div">
            <div v-text="postcount"></div>
            <span>Posts</span>
          </router-link>
          <router-link class="flex-item" to="./following" tag="div">
            <div v-text="followingcount"></div>
            <span>Following</span>
          </router-link>
          <router-link class="flex-item" to="./followers" tag="div">
            <div v-text="followercount"></div>
            <span>Followers</span>
          </router-link>
        </div>
      </div>

      <router-view></router-view>

      <tabbar :active="3"></tabbar>

    </div>
</template>

<script>
    import MyHeader from 'components/myheader';
    import Tabbar from 'components/tabbar';
    export default {
        components: {
            MyHeader,
            Tabbar,
        },
        props: {},
        data() {
            return {
                name: 'My Name',
                age: 23,
                place: 'Anhui Hefei. China',
                src: require('assets/images/temp/1.jpg'),
                postcount:45,
                followingcount:3245,
                followercount:9595,
            }
        }
    }
</script>

<style lang="less">
  @import "../../assets/less/theme.less";
  .mine-index{
    .myinfo{
      background-size: cover;
      padding-top: 3rem;
      .name{
        font-size: 24px;
        color: @colorFont;
      }
      .info{
        font-size: 12px;
        color: @colorFont;
      }
      .menu{
        margin-top: 1rem;
        .flex-item{
          color: @colorFont;
          padding: 10px 0;
          border-bottom: 3px solid transparent;
          transition: border .3s;
          -webkit-transition: border .3s;
          div{
            font-size: .6rem;
            line-height: .6rem;
          }
          span{
            font-size: 12px;
          }
          &.active{
            border-bottom-color: @colorMain;
          }
        }
      }
    }
  }
</style>
