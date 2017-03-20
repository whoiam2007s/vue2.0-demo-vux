<template>
    <flexbox class="tabbar content " :gutter="0" justify="space-between">
        <flexbox-item class="tabbar-item" :class="{'active':active==0}">
            <div @click="onItemClick(0)">
              <i class="iconfont icon-exercise"></i>
              <div>Exercise</div>
            </div>
        </flexbox-item>
        <flexbox-item class="tabbar-item" :class="{'active':active==1}" >
            <div @click="onItemClick(1)">
                <i class="iconfont icon-discover"></i>
                <div>Discover</div>
            </div>
        </flexbox-item>
        <flexbox-item class="tabbar-item" :class="{'active':active==2}" >
            <div @click="onItemClick(2)">
                <i class="iconfont icon-dynamic"></i>
                <div>Dynamic</div>
            </div>
        </flexbox-item>
        <flexbox-item class="tabbar-item" :class="{'active':active==3}" >
            <div @click="onItemClick(3)">
                <i class="iconfont icon-me"></i>
                <div>Me</div>
            </div>
        </flexbox-item>
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
            active: Number
        },
        data() {
            return {}
        },
        methods: {
            onItemClick(index){
                if(index == this.active){
                    return
                }else{
                    let route_path = '';
                    switch(index){
                        case 0:{
                            route_path = '/exercise'
                            break;
                        }
                        case 1:{
                            route_path = '/discover/article'
                            break;
                        }
                        case 2:{
                            route_path = '/dynamic/friends'
                            break;
                        }
                        case 3:{
                            route_path = '/mine/posts'
                            break;
                        }
                    }
                    route_path && this.$router.push({path: route_path})
                }
            }
        }
    }
</script>

<style lang="less">
    @import "../assets/less/theme.less";
    .tabbar{
        position: fixed;
        left:0;
        bottom:0;
        width:100%;
        height:1.4rem;
        background: @colorFou;
        z-index:99;
        .tabbar-item{
            font-size: 12px;
            line-height: .4rem;
            color: @colorFont2;
            text-align:center;
            .iconfont{
                font-size: .6rem;
                line-height: .7rem;
            }
            &.active{
                color: @colorMain;
            }
        }
    }
</style>
