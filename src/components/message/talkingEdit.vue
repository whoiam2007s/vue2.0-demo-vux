<template>
    <div class="talking-edit flex" >
      <i class="iconfont icon-mic"></i>
      <input type="text" class="flex-item" placeholder="Type something to say" @change="onChange" />
      <i class="iconfont icon-emoji"></i>
      <i class="iconfont icon-add2"></i>
    </div>
</template>

<script>
    export default {
        components: {},
        props: {},
        data() {
            return {
                message: '',
            }
        },
        methods: {
            onChange(){
                this.$emit('change', this.message)
            }
        }
    }
</script>

<style lang="less">
  @import "../../assets/less/theme.less";
  .talking-edit{
    position: fixed;
    left:0;
    right:0;
    bottom:0;
    height: 1.4rem;
    background: @colorFou;
    padding: 0 10px;
    .iconfont{
      font-size: .6rem;
      color: @colorFont2;
      padding: 0 8px;
    }
    input{
      font-size: 14px;
      color: @colorFont;
      border: 0;
      background: transparent;
    }
  }
</style>
