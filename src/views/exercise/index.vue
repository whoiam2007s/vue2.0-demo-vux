<template>
    <div v-title="'Exercise'" class="container has-header has-bottom" >
        <my-header icon_left="icon-search" icon_right="icon-running" @rightClick="onRightClick">
            <div slot="title">Traning</div>
        </my-header>

        <exercise-charts :data="charts_data" @onClick="onChartClick"></exercise-charts>

        <div class="content">
            <exercise-item v-for="item in items" :data="item" @itemClick="onItemClick"></exercise-item>
        </div>

        <tabbar :active="0"></tabbar>
    </div>
</template>

<script>
    import MyHeader from 'components/myheader';
    import Tabbar from 'components/tabbar';
    import ExerciseCharts from 'components/exercise/exerciseCharts';
    import ExerciseItem from 'components/exercise/exerciseItem';

    export default {
        components:{
            MyHeader,
            Tabbar,
            ExerciseCharts,
            ExerciseItem,
        },
        data() {
            return {
                charts_data:{
                    time: 58,
                    value : 1962,
                    calory: 96,
                },
                items:[
                    {
                        title: 'Triceps',
                        tip: '19video',
                        star: 2,
                        count: 194283,
                        hsl: 30,
                        img: require('assets/images/exercise/item_bg_1.jpg'),
                        to: 'exercise/detail',
                        type: 'triceps',
                    },
                    {
                        title: 'Chest',
                        tip: '15video',
                        star: 3,
                        count: 215170,
                        hsl: 100,
                        img: require('assets/images/exercise/item_bg_2.jpg'),
                        to: 'exercise/detail',
                        type: 'chest',
                    },
                    {
                        title: 'Back',
                        tip: '35video',
                        star: 2,
                        count: 83071,
                        hsl: 220,
                        img: require('assets/images/exercise/item_bg_3.jpg'),
                        to: 'exercise/detail',
                        type: 'back',
                    },
                ]
            }
        },
        methods: {
            onItemClick(data){
                this.$router.push({
                    name: data.to,
                    params:{type: data.type}
                })
            },
            onRightClick(){
                this.$router.push({
                    name:'run'
                })
            },
            onChartClick(){
                this.$router.push({
                    name: 'training'
                })
            }
        }
    }
</script>

<style lang="less">
</style>
