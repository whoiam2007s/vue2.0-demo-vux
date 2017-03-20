<template>
  <div v-title="'Music'" class="container has-header music-index">
    <my-header icon_left="icon-pageback" @leftClick="onLeftClick">
      <div slot="title">Music</div>
    </my-header>

    <music-blks :data="items" @blkClick="onBlkClick"></music-blks>

  </div>
</template>

<script>
  import MyHeader from 'components/myheader';
  import MusicBlks from 'components/music/musicBlks';

  export default {
    components: {
      MyHeader,
      MusicBlks,
    },
    props: {},
    data() {
      return {
        items:[
          {title: 'Fierce', count: 65, bgimg: require('assets/images/exercise/item_bg_1.jpg'),},
          {title: 'Aerobic', count: 70, bgimg: require('assets/images/exercise/item_bg_2.jpg'),},
          {title: 'Relax', count: 32, bgimg: require('assets/images/exercise/item_bg_3.jpg'),},
          {title: 'Yoga', count: 165, bgimg: require('assets/images/temp/1.jpg'),},
          {title: 'Apple Music', count: 95, bgimg: require('assets/images/exercise/item_bg_1.jpg'),},
          {title: 'Electronic', count: 35, bgimg: require('assets/images/exercise/item_bg_2.jpg'),},
          {title: 'Top 100', count: 100, bgimg: require('assets/images/temp/1.jpg'),},
          {title: 'New Songs', count: 48, bgimg: require('assets/images/exercise/item_bg_2.jpg'),},
          {title: 'BillBank', count: 288, bgimg: require('assets/images/exercise/item_bg_1.jpg'),},
        ]
      }
    },
    methods: {
      onLeftClick(){
        this.$router.back()
      },
      onBlkClick(index){
          this.$router.push({
            name:'music/list',
            params: {
                info: this.items[index]
            }
          })
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/theme.less";
  .music-index{ }

</style>
