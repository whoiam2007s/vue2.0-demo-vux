<template>
    <div class="exercise-comment">
        <flexbox :gutter="0">
            <img :src="data.headimg" @click="onUserClick"/>
            <flexbox-item class="info">
                <div @click="onUserClick">{{data.name}}</div>
                <span>{{data.time}}</span>
            </flexbox-item>
            <div class="star">
                <i class="iconfont icon-xin " :class="{'active':starFlag}" @click="onStarClick"></i>
                <span>{{__moneyNum(data.stars)}}</span>
            </div>
            <div class="link">
                <i class="iconfont icon-enter"></i>
            </div>
        </flexbox>
        <div class="text">{{data.text}}</div>
    </div>
</template>

<script>
    import { Flexbox, FlexboxItem } from 'vux';

    export default {
        components:{
            Flexbox,
            FlexboxItem,
        },
        props: {
            data: Object,
        },
        data() {
            return {
                starFlag: false
            }
        },
        methods: {
            onStarClick(){
                this.starFlag = true
            },
            onUserClick(){
                this.$emit('userclick')
            }
        }
    }
</script>

<style lang="less">
    @import "../../assets/less/theme.less";
    .exercise-comment{
        padding:.4rem 0;
        color: @colorFont;
        border-bottom: 1px solid @colorFou;
        img{
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            margin-right: .2rem;
            border: 1px solid @colorFou;
            box-sizing: border-box;
        }
        .info{
            font-size: 14px;
            line-height:18px;
            span{
                font-size: 12px;
                color: @colorFont2;
            }
        }
        .star{
            width: 60px;
            .iconfont{
                font-size: 12px;
                &.active{
                     color: @colorMain;
                }
            }
            span{
                font-size: 12px;
            }
        }
        .link{
            font-size: 14px;
        }
        .text{
            font-size: 12px;
            padding:0 1.2rem;
            color: @colorFont2;
        }
    }
</style>
