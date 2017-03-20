<template>
    <div class="exercise-item" :class="{'item-big':type == 'big', 'item-big item-banner':type=='banner'}" :style="'background-image: url('+data.img+')'" @click="onItemClick">
        <div class="info text-center"
             :style ="'background:-webkit-linear-gradient(left, hsla('+hsl2+',50%,50%,.5), hsla('+data.hsl+',50%,50%,.5));'">
           <div class="title" v-text="data.title"></div>
           <div class="tip" v-text="data.tip"></div>
           <div class="float-fixed">
               <div class="fl">
                   <i class="iconfont icon-shandian" v-for="n in 5" :class="{'active':n<=data.star}"></i>
               </div>
               <div class="fr">
                   <span v-text="count+(type=='banner'?'day':'')" ></span>
               </div>
           </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            data: Object,
            type: String,
        },
        data() {
            return {}
        },
        methods: {
            onItemClick(){
                this.$emit('itemClick', this.data)
            }
        },
        computed: {
            count(){
                return this.__moneyNum(this.data.count)
            },
            hsl2(){
                return (this.data.hsl+50)%360
            }
        }
    }
</script>

<style lang="less">
    .exercise-item{
        position: relative;
        background-size: 100% 100%;
        margin:.4rem 0;
        .info{
            position: relative;
            margin-left: 50%;
            padding-top: .8rem;
            clip-path: polygon(30% 0, 100% 0%, 100% 100%, 0 100%);

            .title{
                font-size: .8rem;
                padding-left: 20%;
            }
            .tip{
                font-size: 14px;
                padding-left: 20%;
            }
            .float-fixed{
                font-style: .5rem;
                padding: .3rem .5rem;
            }
            .iconfont{
                font-size: .5rem;
                color: #999;
                &.active{
                    color: #fff;
                }
            }
        }
        &.item-big{
             margin-top: 0;
            .info{
                .title{
                    font-size: .5rem;
                    text-align: right;
                    padding-right: .5rem;
                    padding-top: .3rem;
                }
                .tip{
                    font-size: .5rem;
                    text-align: right;
                    padding-right: .5rem;
                    padding-bottom: .3rem;
                }
            }
        }
        &.item-banner{
          .info{
            padding-top: .5rem;
            clip-path: none;
            margin-left: 0;
            .float-fixed{
              padding-left: 50%;
            }
          }
        }
    }
</style>
