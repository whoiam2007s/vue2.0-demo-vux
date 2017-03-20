<template>
    <div class="calendar text-center">
      <div class="calendar-title flex">
        <div class="flex-item">SUN</div>
        <div class="flex-item">MON</div>
        <div class="flex-item">TUE</div>
        <div class="flex-item">WED</div>
        <div class="flex-item">THU</div>
        <div class="flex-item">FRI</div>
        <div class="flex-item">SAT</div>
      </div>
      <div class="calendar-list flex">
        <div class="cal-item" v-for="n in datafix.begin"></div>
        <div class="cal-item" v-for="item in data">
          <calendar-item :data="item"></calendar-item>
        </div>
        <div class="cal-item" v-for="n in datafix.end"></div>
      </div>
    </div>
</template>

<script>
    import CalendarItem from './calendarItem';

    export default {
        components: {
            CalendarItem,
        },
        props: {
            data: Array,
        },
        data() {
            return {
                datafix:{
                    begin: 0,
                    end: 0,
                }
            }
        },
        mounted(){
            let s = this.data[0].date;
            let e = this.data[this.data.length-1].date;
            this.datafix.begin = this.getDay(s)
            this.datafix.end = this.getDay(e)
        },
        methods:{
            getDay(date){
                return new Date(date).getDay()
            }
        }
    }
</script>

<style lang="less">
  .calendar{
    .calendar-title{
      font-size: 14px;
    }
    .calendar-list{
      flex-wrap: wrap;
      .cal-item{
        width: 1.7rem;
      }
    }
  }
</style>
