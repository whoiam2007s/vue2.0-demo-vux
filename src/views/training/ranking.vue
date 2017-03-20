<template>
  <div v-title="'Ranking'" class="container has-header ranking-index">
    <my-header icon_left="icon-pageback" icon_right="icon-share" @leftClick="onLeftClick">
      <div slot="title">Ranking</div>
    </my-header>

    <div>
      <rank-item v-for="item in items" :data="item"></rank-item>
    </div>

  </div>
</template>

<script>
  import MyHeader from 'components/myheader';
  import RankItem from 'components/training/rankItem';

  export default {
    components: {
      MyHeader,
      RankItem,
    },
    props: {},
    data() {
      return {
          items:[
            {order: 1, name:'His Name', info:'119 Km', heart: false, headimg:require('assets/images/temp/1.jpg')},
            {order: 2, name:'His Name', info:'119 Km', heart: true, headimg:require('assets/images/temp/1.jpg')},
            {order: 3, name:'His Name', info:'119 Km', heart: false, headimg:require('assets/images/temp/1.jpg')},
            {order: 4, name:'His Name', info:'119 Km', heart: true, headimg:require('assets/images/temp/1.jpg')},
            {order: 5, name:'His Name', info:'119 Km', heart: true, headimg:require('assets/images/temp/1.jpg')},
            {order: 6, name:'His Name', info:'119 Km', heart: false, headimg:require('assets/images/temp/1.jpg')},
            {order: 7, name:'His Name', info:'119 Km', heart: false, headimg:require('assets/images/temp/1.jpg')},
            {order: 8, name:'His Name', info:'119 Km', heart: false, headimg:require('assets/images/temp/1.jpg')},
            {order: 9, name:'His Name', info:'119 Km', heart: false, headimg:require('assets/images/temp/1.jpg')},
            {order: 10, name:'His Name', info:'119 Km', heart: true, headimg:require('assets/images/temp/1.jpg')},
            {order: 11, name:'His Name', info:'119 Km', heart: true, headimg:require('assets/images/temp/1.jpg')},
            {order: 12, name:'His Name', info:'119 Km', heart: false, headimg:require('assets/images/temp/1.jpg')},
            {order: 13, name:'His Name', info:'119 Km', heart: false, headimg:require('assets/images/temp/1.jpg')},
            {order: 14, name:'His Name', info:'119 Km', heart: false, headimg:require('assets/images/temp/1.jpg')},
          ]
      }
    },
    methods: {
      onLeftClick(){
        this.$router.back()
      },
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/theme.less";
  .ranking-index{

  }
</style>
