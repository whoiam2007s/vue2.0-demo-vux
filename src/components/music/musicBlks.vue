<template>
    <div class="music-blks flex" >
      <music-blk v-for="(item, index) in data" :data="item" :hsl="getHsl(index, data.length)" @blkClick="onBlkClick(index)"></music-blk>
    </div>
</template>

<script>
    import MusicBlk from './musicBlk';
    export default {
        components: {
          MusicBlk,
        },
        props: {
            data: Array,
        },
        data() {
            return {
            }
        },
        methods:{
            getHsl(index, len){
                return Math.round(index/len*360)
            },
            onBlkClick(index){
                this.$emit('blkClick', index)
            }
        }
    }

</script>

<style lang="less">
  @import "../../assets/less/theme.less";
  .music-blks{
    padding: .2rem;
    font-size: 0;
    flex-wrap: wrap;
    justify-content: flex-start;
    .music-blk{
      margin: .2rem;
      width: 5.4rem;
      height: 5.4rem;
    }
  }
</style>
