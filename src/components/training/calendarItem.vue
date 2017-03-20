<template>
    <div class="calendar-item text-center" :class="{'active':data.active}">
      <div class="circle"></div>
      <div class="title" v-text="data.title || getDate(data.date)"></div>
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
        methods: {
            getDate(date){
                return (new Date(date)).getDate();
            }
        }
    }
</script>

<style lang="less">
  @import "../../assets/less/theme.less";
  .calendar-item{
    font-size: 0;
    width: 100%;
    padding: .2rem 0;
    .circle{
      width: .3rem;
      height: .3rem;
      border: .2rem solid @colorFont2;
      border-radius: 50%;
      display: inline-block;
    }
    .title{
      font-size: .12px;
      line-height: 20px;
    }
    &.active{
      .circle{
        border-color: @colorMain;
      }
    }
  }
</style>
