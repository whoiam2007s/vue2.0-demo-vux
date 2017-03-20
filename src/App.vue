<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        beforeCreate(){
            //设置rem单位的值
            let width = window.screen.availWidth;
            let rem = width/12;
            document.getElementsByTagName('html')[0].setAttribute('style', 'font-size:'+rem+'px');
            document.body.style.fontSize='14px';
        }
    }
</script>


<style lang="less">
@import '~vux/src/styles/reset.less';
@import 'assets/less/main.less';
</style>

