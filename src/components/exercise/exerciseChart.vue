<template>
    <div class="exercise-chart text-center">
        <div>
            <i class="iconfont" :class="icon"></i>
        </div>
        <div class="value" v-text="value"></div>
        <div class="unit" v-text="unit"></div>
    </div>
</template>

<script>

    export default {
        props: {
            icon: String,
            value: String,
            unit: String,
        },
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style lang="less">
    @import "../../assets/less/theme.less";
    .exercise-chart{
        padding: .5rem 0;
        color: @colorFont2;
        .iconfont{
            font-size: .7rem;
        }
        .value{
            font-size: 1rem;
            color: @colorFont;
        }
        .unit{
            font-size: 12px;
        }
    }
</style>
