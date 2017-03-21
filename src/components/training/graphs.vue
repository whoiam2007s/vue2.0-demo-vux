<template>
    <div class="training-graphs">
      <svg :width="s_width" :height="s_height" version="1.1"
           xmlns="http://www.w3.org/2000/svg">
        <path :d="bazier_path" style="fill:url(#fillgra);stroke:#fe4a65;stroke-width:2"/>
        <defs>
          <linearGradient id="fillgra" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#fe4a65; stop-opacity:.5"/>
            <stop offset="100%" style="stop-color:#fe4a65; stop-opacity:.1"/>
          </linearGradient>
        </defs>
        <template v-for="(item, index) in items" >
          <circle :cx="index*l_h+l_h" :cy="item.value" r="5" stroke="#fff" stroke-width="3" fill="#fe4a65"/>
          <text :x="index*l_h+l_h" y="90%" fill="#fff" style="font-size:12px">{{item.title}}</text>
        </template>
      </svg>
    </div>
</template>

<script>
    export default {
        components: { },
        props: {
            data: Array,
        },
        data() {
            return {
                bazier_path: '',
                items:[],
                s_width:750,
                s_height:400,
                l_h: 0,
            }
        },
        created(){
            this.s_width = window.screen.availWidth;
            this.s_height = this.s_width*400/750;
            this.l_h = this.s_width/(this.data.length+1);
            this.initData();
        },
        methods: {
            initData(){
                let min=Number.MAX_SAFE_INTEGER, max=Number.MIN_SAFE_INTEGER;
                this.data.map(item=>{
                    item.value > max && (max=item.value);
                    item.value < min && (min=item.value);
                })
                let h = (max-min)*2;
                h = Math.round(h*1.1);
                let base = min-h/2;
                for(let i=0; i<this.data.length; i++){
                    let title = (new Date(this.data[i].date)).getDate();
                    let pos = (this.data[i].value-base)/h*this.s_height;
                    let value = Math.round(this.s_height-(this.data[i].value-base)/h*this.s_height);
                    this.items.push({
                        title, value
                    })
                }
                this.bazier_path = this.getPath();
            },
            getPath(){
                let path = '';
                let fv = this.items[0].value-this.l_h/5;
                path += ' M 0 '+this.s_height+' L 0 '+ fv;
                path += this.getPots(this.l_h, this.items[0].value, 0, fv, true);
                for(let i=1; i<this.items.length; i++){
                    path += this.getPots((i+1)*this.l_h, this.items[i].value)
                }
                path += this.getPots(this.s_width, this.items[this.items.length-1].value-this.l_h/5);
                path += ' L '+this.s_width+' '+this.s_height
                return path;
            },
            getPots(x2, y2, x1, y1, isfirst){
                let l_half = this.l_h/2;
                return isfirst
                  ? ' C '+(x1+l_half)+' '+y1+' '+(x2-l_half)+' '+y2+' '+x2+' '+y2
                  : ' S '+(x2-l_half)+' '+y2+' '+x2+' '+y2
            },
        }
    }
</script>

<style lang="less">
  .training-graphs{
    font-size: 0;
    padding-top: .5rem;
  }
</style>
