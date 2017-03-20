<template>
  <div v-title="'Attendance'" class="container has-header training-index">
    <my-header icon_left="icon-pageback" icon_right="icon-share" @leftClick="onLeftClick">
      <div slot="title">Attendance</div>
    </my-header>

    <div class="datetitle content text-center">
      <div v-text="getMonth()"></div>
      <div class="today">Today</div>
    </div>

    <calendar :data="calendar_data"></calendar>

    <div class="content" v-for="item in progressItems">
      <progress-item :data="item"></progress-item>
    </div>


  </div>
</template>

<script>
  import MyHeader from 'components/myheader';
  import Calendar from 'components/training/calendar';
  import ProgressItem from 'components/training/progressItem';

  export default {
    components: {
      MyHeader,
      Calendar,
      ProgressItem,
    },
    props: {},
    data() {
      return {
        calendar_data:[],
        progressItems:[
          {title: "Punch this mounth", label:'28 day', count: 5, unit: 'day', progress: 33},
          {title: "Today's goal", label:'Please Set the target', count: 30, unit: 'min/day', progress: 75},
          {title: "Distance", label:'54 km', count: 3, unit: 'km', progress: 40},
        ]
      }
    },
    created(){
      let now = new Date();
      let y = now.getFullYear(),
          m = now.getMonth();
      let nd = new Date(y, m+1, 1);
      nd.setDate(0);
      let d = nd.getDate();

      for(let i=1; i<=d; i++){
          this.calendar_data.push({
            date: new Date(y, m, i),
            active: Math.random() > .5,
          })
      }

    },
    methods: {
      onLeftClick(){
        this.$router.back()
      },
      getMonth(){
          let now = new Date();
          let y = now.getFullYear(),
              m = now.getMonth()+1;
          return y+'/'+this.__formatNum(m)
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/theme.less";
  .training-index{
    .content{
      padding-top: .4rem;
      padding-bottom: .4rem;
    }
    .datetitle{
      position: relative;
      padding-top: .5rem;
      padding-bottom: .5rem;
      font-size: .5rem;
      color: @colorFont;
      .today{
        position: absolute;
        right: .5rem;
        top: .5rem;
        color: @colorMain;
      }
    }
  }
</style>
