<template>
    <div class="flex content" @click="onClick">
        <div class="flex-item">
            <exercise-chart icon="icon-clock" :value="data.time+''" unit="Min"></exercise-chart>
        </div>

        <div class="flex-item">
            <exercise-chart icon="icon-meter" :value="data.value+''" unit="Km"></exercise-chart>
        </div>

        <div class="flex-item">
            <exercise-chart icon="icon-fire" :value="data.calory+''" unit="Kcal"></exercise-chart>
        </div>
    </div>
</template>

<script>
    import ExerciseChart from './exerciseChart';

    export default {
        components:{
            ExerciseChart,
        },
        props: {
            data: Object,
        },
        data() {
            return {}
        },
        methods: {
            onClick(){
                this.$emit('onClick')
            }
        }
    }
</script>

<style lang="less">

</style>
