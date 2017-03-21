<template>
    <div v-title="'Me'" class="container mine-index" :class="{'has-bottom':ismine}">
      <my-header icon_right="icon-setting" bgcol="rgba(255,255,255,.3)" :icon_left="ismine?'':'icon-pageback'" @leftClick="onLeftClick"></my-header>
      <div class="myinfo text-center" :style="'background-image:url('+src+');padding-top:'+(ismine?3:1.5)+'rem'">
        <div class="name" v-text="name"></div>
        <div class="info flex">
          <i class="iconfont icon-age" ></i>
          <span>{{age}} age</span>
          <i class="iconfont icon-place" ></i>
          <span>{{place}}</span>
        </div>
        <div class="btns flex" v-if="!ismine">
          <i class="iconfont icon-add" v-if="!isadd" @click="onAddClick"></i>
          <i class="iconfont icon-right active" v-if="isadd"></i>
          <i class="iconfont icon-heart" v-if="!islike" @click="onLikeClick"></i>
          <i class="iconfont icon-xin active" v-if="islike"></i>
          <i class="iconfont icon-msg"></i>
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

      <tabbar :active="3" v-if="ismine"></tabbar>

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
                ismine: false,
                myid: 0,
                lastid: 0,
                name: 'My Name',
                age: 23,
                place: 'Anhui Hefei. China',
                src: require('assets/images/temp/1.jpg'),
                postcount:45,
                followingcount:3245,
                followercount:9595,
                isadd: false,
                islike: false,
            }
        },
        mounted(){
            this.lastid = this.$route.params.userid;
            this.ismine = this.lastid == this.myid;
        },
        watch:{
            '$route' (to, from) {
                this.lastid != to.params.userid && ( this.isadd = false, this.islike = false)
                this.lastid = to.params.userid;
                this.ismine = this.lastid == this.myid;
            }
        },
        methods:{
            onLeftClick(){
                this.$router.back();
            },
            onAddClick(){
                this.isadd = true;
            },
            onLikeClick(){
              this.islike = true;
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
        margin-top: .6rem;
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
      .btns{
        margin-top: .5rem;
        .iconfont{
          width:1rem;
          height:1rem;
          border-radius: 50%;
          border: 1px solid @colorFont;
          font-size: 0;
          color: @colorFont;
          margin: 0 1rem;
          &::before{
            font-size: .6rem;
            line-height: 1rem;
          }
          &.active{
            color: @colorMain;
            background: @colorFont;
          }
        }
      }
    }
  }
</style>
