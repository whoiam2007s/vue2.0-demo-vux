<template>
    <flexbox class="myheader content" :gutter="0" justify="space-between" :style="'background:'+bgcol">
        <div class="myheader-icon">
            <i class="iconfont" :class="icon_left" @click="onLeftClick"></i>
        </div>
        <flexbox-item class="myheader-title">
            <slot name="title"></slot>
        </flexbox-item>
        <div class="myheader-icon">
            <i class="iconfont" :class="icon_right" @click="onRightClick"></i>
        </div>
    </flexbox>
</template>


<script>
    import { Flexbox, FlexboxItem } from 'vux';

    export default {
        components:{
            Flexbox,
            FlexboxItem,
        },
        props:{
            bgcol: String,
            title: String,
            icon_left:String,
            icon_right:String,
        },
        data() {
            return {}
        },
        methods: {
            onLeftClick(){
                this.$emit('leftClick')
            },
            onRightClick(){
                this.$emit('rightClick')
            },
        }
    }
</script>

<style lang="less">
    @import "../assets/less/theme.less";
    .myheader{
        position: fixed;
        left:0;
        top:0;
        width:100%;
        height: 1.2rem;
        background: @colorFou;
        color: @colorFont;
        z-index:99;

        .myheader-title{
            font-size: .5rem;
            text-align: center;
        }
        .myheader-icon{
            .iconfont{
                font-size: .7rem;

            }
        }
    }

</style>
