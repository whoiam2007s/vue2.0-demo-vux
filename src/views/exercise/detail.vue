<template>
    <div v-title="'详情'" class="container has-bottom " >

        <my-header icon_left="icon-pageback" bgcol="rgba(255,255,255,.3)" @leftClick="onBackClick"></my-header>

        <exercise-item :data="item" type="big" ></exercise-item>

        <div class="content" >
            <div class="detail-desc" :class="{'show': is_detail_show}" >
                <p v-text="data.desc" ></p>
                <div class="text-center" >
                    <i class="iconfont icon-morearrow" :class="{'active': is_detail_show}" @click="onMoreClick"></i>
                </div>
            </div>

            <div class="detail-video" v-if="data.videos.length">
                <div>{{__moneyNum(data.videos.length)}} Actions</div>
                <div class="videos inline-row" >
                    <video class="item" v-for="item in data.videos" :src="item.src" :poster="item.img" preload="none" controls></video>
                </div>
            </div>

            <div class="detail-comment">
                <div class="title"><span>{{__moneyNum(data.comments_count)}} </span>comment</div>
                <exercise-comment v-for="item in data.comments" :data="item"></exercise-comment>
            </div>
        </div>

        <div class="detail-start text-center">Start</div>
    </div>
</template>

<script>
    import MyHeader from 'components/myheader';
    import ExerciseItem from 'components/exercise/exerciseItem';
    import ExerciseComment from 'components/exercise/exerciseComment';

    export default {
        components:{
            MyHeader,
            ExerciseItem,
            ExerciseComment,
        },
        data() {
            return {

                is_detail_show: false,
                item:{
                    title: 'Targeting Weak',
                    tip: 'Sports',
                    star: 2,
                    count: 194283,
                    hsl: 30,
                    img: require('assets/images/exercise/item_bg_1.jpg'),
                },
                data:{
                    desc: "This module is only concerned with the mechanisms to connect a browser client to a webpack server & receive updates. It will subscribe to changes from the server and execute those changes using webpack's HMR api. Actually making your application capable of using hot reloading to make seamless changes is out of scope, and usually handled by another library.",
                    videos:[
                        {
                            src: require('assets/video/1.mp4'),
                            img: require('assets/images/temp/2.jpg'),
                        },
                        {
                            src: require('assets/video/1.mp4'),
                            img: require('assets/images/temp/2.jpg'),
                        },
                        {
                            src: require('assets/video/1.mp4'),
                            img: require('assets/images/temp/2.jpg'),
                        },
                        {
                            src: require('assets/video/1.mp4'),
                            img: require('assets/images/temp/2.jpg'),
                        },
                    ],
                    comments_count: 3651352,
                    comments:[
                        {
                            name: 'My Name',
                            headimg: require('assets/images/temp/1.jpg'),
                            time: '12:51',
                            stars: 1552,
                            url: '',
                            text:'Attach files by dragging & dropping, selecting them, or pasting from the clipboard.'
                        },
                        {
                            name: 'His Name',
                            headimg: require('assets/images/temp/1.jpg'),
                            time: '3-15',
                            stars: 235,
                            url: '',
                            text:'Attach files by the clipboard.'
                        },
                        {
                            name: 'It Name',
                            headimg: require('assets/images/temp/1.jpg'),
                            time: '2016',
                            stars: 35,
                            url: '',
                            text:'Attach files by dragging & dropping, selecting them, or pasting from the clipboard, or pasting from the clipboard.'
                        },
                    ]
                }
            }
        },
        methods: {
            onBackClick(){
                this.$router.back();
            },
            onMoreClick(){
                this.is_detail_show = !this.is_detail_show
            }
        }
    }
</script>

<style lang="less">
    @import '../../assets/less/theme.less';
    .detail-desc{
        p{
            max-height: 4.8em;
            overflow: hidden;
        }
        &.show p{
            max-height: none;
        }
        .active{
            display: inline-block;
            transform: rotate(180deg);
        }
    }
    .detail-video{
        color: @colorFont;
        .videos{
            height:4rem;
            white-space: nowrap;
            overflow: auto;
            margin:.2rem 0;
            .item{
                height:100%;
                margin-right: .4rem;
                &:last-child{
                    margin-right: 0;
                }
            }
        }
    }
    .detail-comment{
        .title{
            color: @colorFont;
            span{
                font-size: .8rem;
            }
        }
    }
    .detail-start{
        position: fixed;
        left:0;
        bottom:0;
        width:100%;
        height:1.4rem;
        background: @colorMain;
        z-index:99;
        font-size: .7rem;
        line-height: 1.4rem;
        color: @colorFont;
    }
</style>

