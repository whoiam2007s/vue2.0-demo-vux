<template>
  <div v-title="'Music List'" class="container has-bottom music-list">
    <my-header icon_left="icon-pageback" bgcol="rgba(255,255,255,.3)" @leftClick="onLeftClick">
      <div slot="title">Music List</div>
    </my-header>

    <music-blk :data="info" v-if="info"></music-blk>

    <music-item v-for="(item, index) in items" :data="item" :order="index" @itemClick="onItemClick(index)"></music-item>

    <music-play :data="playData" :destory="destory" @view="onView" @prev="onPrev" @next="onNext" @play="onPlay" @pause="onPause"></music-play>

    <router-view></router-view>

  </div>
</template>

<script>
    import MyHeader from 'components/myheader';
    import MusicItem from 'components/music/musicItem';
    import MusicBlk from 'components/music/musicBlk';
    import MusicPlay from 'components/music/musicPlay';

    export default {
        components: {
          MyHeader,
          MusicItem,
          MusicBlk,
          MusicPlay,
        },
        props: {},
        data() {
            return {
              lastInd: null,
              info: null,
              playData:null,
              destory: false,
              items:[
                  {
                      id: 1,
                      isplay: false,
                      ispause: false,
                      title: '500 Miles',
                      singer: 'The Singer',
                      img: require('assets/images/exercise/item_bg_1.jpg'),
                      src: require('assets/audio/500miles.mp3'),
                  },
                  {
                      id: 2,
                      isplay: false,
                      ispause: false,
                      title: 'Apologize',
                      singer: 'The Singer',
                     img: require('assets/images/exercise/item_bg_2.jpg'),
                      src: require('assets/audio/apologize.mp3'),
                  },
                  {
                      id: 3,
                      isplay: false,
                      ispause: false,
                      title: '500 Miles',
                      singer: 'The Singer',
                      img: require('assets/images/exercise/item_bg_3.jpg'),
                      src: require('assets/audio/500miles.mp3'),
                  },
                  {
                      id: 4,
                      isplay: false,
                      ispause: false,
                      title: '500 Miles',
                      singer: 'The Singer',
                      img: require('assets/images/temp/1.jpg'),
                      src: require('assets/audio/500miles.mp3'),
                  },
                  {
                      id: 5,
                      isplay: false,
                      ispause: false,
                      title: 'Apologize',
                      singer: 'The Singer',
                      img: require('assets/images/temp/1.jpg'),
                      src: require('assets/audio/apologize.mp3'),
                  },
                  {
                      id: 6,
                      isplay: false,
                      ispause: false,
                      title: '500 Miles',
                      singer: 'The Singer',
                      img: require('assets/images/temp/1.jpg'),
                      src: require('assets/audio/500miles.mp3'),
                  },
                  {
                      id: 7,
                      isplay: false,
                      ispause: false,
                      title: 'Apologize',
                      singer: 'The Singer',
                      img: require('assets/images/temp/1.jpg'),
                      src: require('assets/audio/apologize.mp3'),
                  },
                  {
                      id: 8,
                      isplay: false,
                      ispause: false,
                      title: '500 Miles',
                      singer: 'The Singer',
                      img: require('assets/images/temp/1.jpg'),
                      src: require('assets/audio/500miles.mp3'),
                  },
                  {
                      id: 9,
                      isplay: false,
                      ispause: false,
                      title: 'Apologize',
                      singer: 'The Singer',
                      img: require('assets/images/temp/1.jpg'),
                      src: require('assets/audio/apologize.mp3'),
                  },
                  {
                      id: 10,
                      isplay: false,
                      ispause: false,
                      title: '500 Miles',
                      singer: 'The Singer',
                     img: require('assets/images/temp/1.jpg'),
                      src: require('assets/audio/500miles.mp3'),
                  },
                ]
            }
        },
        mounted(){
            this.info = this.$route.params.info;
        },
        methods: {
            onLeftClick(){
                this.destory = true;
                this.$router.back()
            },
            play(ind){
                this.playData = this.items[ind];
                this.lastInd !== null && (this.items[this.lastInd].isplay = false)
                this.items[ind].isplay = true;
                this.lastInd = ind;
            },
            onItemClick(ind){
                this.play(ind)
            },
            onPrev(){
                let ind = this.lastInd-1;
                ind < 0 && (ind = this.items.length-1);
                this.play(ind)
            },
            onNext(){
                let ind = this.lastInd+1;
                ind >= this.items.length && (ind = 0);
                this.play(ind);
            },
            onPause(){
                console.log(123456)
                this.items[this.lastInd].ispause= true;
                this.$store.commit('set_music_data', {ispause: true})
            },
            onPlay(){
                this.items[this.lastInd].ispause= false;
              this.$store.commit('set_music_data', {ispause: false})
            },
            onView(){
                this.$router.push({
                    name: 'music/view'
                })
                this.$store.commit('set_music_data', this.items[this.lastInd])
            },
        }
    }
</script>

<style lang="less">
  .music-list{
    .music-blk{
      width: 100%;
      height: 6rem;
    }
  }

</style>
