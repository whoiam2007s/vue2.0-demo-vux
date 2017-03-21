<template>
  <div v-title="'Training'" class="container has-header training-index">
    <my-header icon_left="icon-pageback" icon_right="icon-graph" @leftClick="onLeftClick" @rightClick="onRightClick">
      <div slot="title">Training</div>
    </my-header>

    <exercise-charts :data="charts_data" ></exercise-charts>

    <div class="content" @click="gotoAttendance">
      <div class="float-fixed">
        <div class="fl">Punch card</div>
        <div class="fr">&gt;</div>
      </div>
    </div>

    <calendar :data="calendar_data"></calendar>

    <div class="content" v-for="item in progressItems">
      <progress-item :data="item"></progress-item>
    </div>

    <graphs :data="calendar_data"></graphs>

  </div>
</template>

<script>
  import MyHeader from 'components/myheader';
  import ExerciseCharts from 'components/exercise/exerciseCharts';
  import Calendar from 'components/training/calendar';
  import ProgressItem from 'components/training/progressItem';
  import Graphs from 'components/training/graphs';

  export default {
    components: {
      MyHeader,
      ExerciseCharts,
      Calendar,
      ProgressItem,
      Graphs,
    },
    props: {},
    data() {
      return {
        charts_data:{
          time: 58,
          value : 1962,
          calory: 96,
        },
        calendar_data:[],
        progressItems:[
          {title: "Today's goal", label:'30 min', count: 15, unit: 'min', progress: 52},
          {title: "Week training records", label:'490 min', count: 70, unit: 'min/day', progress: 80},
        ]
      }
    },
    created(){
      let now = new Date();
      let day = now.getDay();
      let y = now.getFullYear(),
          m = now.getMonth(),
          d = now.getDate();
      for(let i=0; i<7; i++){
          this.calendar_data.push({
            date: new Date(y, m, d-day+i),
            active: Math.random() > .5,
            value: Math.round(Math.random()*100+100)
          })
      }
    },
    methods: {
      onLeftClick(){
          this.$router.back()
      },
      onRightClick(){
          this.$router.push({
              name:'ranking'
          })
      },
      gotoAttendance(){
          this.$router.push({
            name:'attendance'
          })
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
  }
</style>
