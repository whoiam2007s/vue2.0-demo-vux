<template>
    <flexbox class="content">
        <flexbox-item>
          <exercise-chart icon="icon-meter" :value="data.speed+''" unit="Km/h"></exercise-chart>
        </flexbox-item>
        <flexbox-item>
            <exercise-chart icon="icon-clock" :value="timeStr" unit="Time"></exercise-chart>
        </flexbox-item>
        <flexbox-item>
            <exercise-chart icon="icon-fire" :value="data.calory+''" unit="Kcal"></exercise-chart>
        </flexbox-item>
    </flexbox>
</template>

<script>
    import ExerciseChart from '../exercise/exerciseChart';
    import { Flexbox, FlexboxItem } from 'vux';

    export default {
        components:{
            Flexbox,
            FlexboxItem,
            ExerciseChart,
        },
        props: {
            data: Object,
        },
        data() {
            return {
                timeStr: '00:00:00',
            }
        },
        created(){
          setInterval(()=>{
              this.timeStr = this.getTime()
          }, 1000)
        },
        methods: {
            getTime(){
              let time = Date.now()-this.data.time;
              return this.formatTime(time)
            },
            formatTime(time){
                time = time/1000;
                let hour = Math.floor(time/(60*60));
                time = time % (60*60);
                let min = Math.floor(time/60);
                let sec = Math.floor(time%60);
                return this.__formatNum(hour)+':'+this.__formatNum(min)+':'+this.__formatNum(sec)
            }
        }
    }
</script>

<style lang="less">

</style>
