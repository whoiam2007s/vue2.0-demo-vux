<template>
    <div class="discover-banner" @touchstart="onTouchStart" @touchmove.stop="onTouchMove" @touchend="onTouchEnd" @touchcancel="onTouchEnd">
      <div v-for="item in items" class="banner-item" :style="bannerTranslate(item.index)">
        <exercise-item :data="item" type="banner" :style="bannerScale(item.index)"></exercise-item>
      </div>
    </div>
</template>

<script>
    import exerciseItem from '../exercise/exerciseItem';
    import animate from 'utils/animate';

    export default {
        components: {
            exerciseItem,
        },
        props: {
            data: Array,
        },
        data() {
            return {
                active: 0,
                items: [],
                touchFlag: true,
                touchposx: 0,
                touchactive:0,
            }
        },
        created(){
            if(this.data.length <= 0){return;}
            this.initData(this.data);
            this.width = window.screen.availWidth;
        },
        methods:{
            initData(arr){
                let items = [];
                //items.push(arr.slice(-1)[0]);
                for(let i=0; i<arr.length; i++){
                    items.push(arr[i])
                }
                //items.push(arr.slice(0, 1)[0]);
                for(let i=0; i<items.length; i++){
                    items[i].index = i;
                }
                this.items = items;
                this.len = items.length;
                this.mid = Math.round(this.len/2)-1;
                this.active = this.mid;
            },
            getVirInd(index){
                let active = this.active%this.len;
                let ind = index-active;
                if(ind < -this.mid){
                    ind += this.len
                }else if(ind > this.mid){
                    ind -= this.len
                }
                return ind;
            },
            bannerTranslate(index){
                let ind = this.getVirInd(index);
                let move = ind*100;
                let deg = ind*40;
                return 'transform: translate3d('+move+'%,0,0) rotateY('+deg+'deg); -webkit-transform: translate3d('+move+'%,0,0) rotateY('+deg+'deg)';
            },
            bannerScale(index){
                let ind = this.getVirInd(index);
                let t = Math.abs(ind);
                let scalex = 1-t*.05;
                let scaley = 1-t*.15;
                return 'transform: scale3d('+scalex+', '+scaley+', 1); -webkit-transform: scale3d('+scalex+', '+scaley+', 1)';
            },
            onTouchStart(event){
                this.touchposx = event.touches[0].clientX;
                this.touchactive = this.active || 0;
            },
            onTouchMove(event){
                let move = event.touches[0].clientX-this.touchposx;
                let movepos = move/this.width;
                this.active = this.touchactive-movepos;
            },
            onTouchEnd(event){
                this.touchposx = 0;
                let move = this.active-this.touchactive;
                if(move == 0){return;}
                if(Math.abs(move) > .3){
                    this.bannerMove(this.touchactive, this.active, this.touchactive+move/Math.abs(move)*Math.ceil(Math.abs(move)))
                }else{
                    this.bannerMove(this.touchactive+move/Math.abs(move), this.active, this.touchactive)
                }
            },
            bannerMove(start, current, end){
                animate({
                    start: start,
                    end: end,
                    current: current,
                    duration: 300,//ms
                    callback: val=>{
                        this.active = val;
                    }
                })
            }
        }
    }
</script>

<style lang="less">
  .discover-banner{
    position: relative;
    padding: .4rem 0;
    height: 4.5rem;
    perspective: 500;
    -webkit-perspective: 500;
    .banner-item{
      position: absolute;
      left: 6%;
      width: 88%;
    }
  }
</style>
