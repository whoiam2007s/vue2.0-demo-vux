<template>
    <div v-title="'Dynamic'" class="container has-header has-bottom dynamic-index" >
        <my-header icon_left="icon-naoling" icon_right="icon-edit" @leftClick="onLeftClick">
            <div slot="title" class="header-menu">
              <router-link to="./friends" tag="span" >Friends</router-link>
              <router-link to="./popular" tag="span" >Popular</router-link>
            </div>
        </my-header>

        <router-view></router-view>

        <tabbar :active="2"></tabbar>

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
            return { }
        },
        methods: {
          onLeftClick(){
              this.$router.push({
                name: 'message'
              })
          }
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
