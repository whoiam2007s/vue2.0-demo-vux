<template>
    <div v-title="'Discover'" class="container has-header has-bottom discover-index" >
        <my-header icon_left="icon-search" icon_right="icon-ding">
            <div slot="title" class="header-menu">
              <router-link to="./article" tag="span" >Article</router-link>
              <router-link to="./video" tag="span" >Video</router-link>
            </div>
        </my-header>

        <router-view></router-view>

        <tabbar :active="1"></tabbar>

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
        props: {
        },
        data() {
            return {
            }
        },
        methods: {
        }
    }
</script>

<style lang="less">
  @import "../../assets/less/theme.less";
  .header-menu{
      span{
        padding: 0 .5rem;
        font-size: .5rem;
        &.active{
            color: @colorMain;
        }
      }
  }
</style>
