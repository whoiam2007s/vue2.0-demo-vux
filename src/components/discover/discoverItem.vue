<template>
    <div class="discover-item">
      <div class="media">
        <img v-if="data.type=='img'" :src="data.src" />
        <video v-if="data.type=='video'" :src="data.src" :poster="data.img" preload="none" controls/>
      </div>
      <div class="info " @click="onShowClick">
        <div :class="{'text-over':!isshow }" v-text="data.title"></div>
        <div :class="{'text-over':!isshow }" v-text="data.desc"></div>
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
                isshow: false,
            }
        },
        methods: {
          onShowClick(){
            this.isshow = true;
          }
        }
    }
</script>

<style lang="less">
  @import '../../assets/less/theme.less';

  .discover-item{
    margin: .3rem 0;
    .media{
      font-size: 0;
      *{
        width: 100%;
      }
    }
    .info{
      font-size: .6rem;
      padding: .2rem .3rem;
      color: @colorFont;
      background: @colorFiv;
      div:nth-child(2){
        font-size: 12px;
        color: @colorFont2;
      }
    }
  }
</style>
