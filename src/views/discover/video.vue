<template>
  <div class="content">
    <discover-item v-for="item in items" :data="item"></discover-item>
  </div>
</template>

<script>
  import DiscoverItem from 'components/discover/discoverItem';

  export default {
    components: {
      DiscoverItem
    },
    props: {},
    data() {
      return {
        items:[
          {
            type: 'video',
            src: require('assets/video/1.mp4'),
            img: require('assets/images/temp/2.jpg'),
            title: 'wardpeet commented on issue webpack/webpack#4104',
            desc: 'I have the same issue as @allenwq (Webpack 2.2.1), except I tried to switch order app and vendor in entryproperty. I am getting 3 chunked files: ven',
            to: null,
          },
          {
            type: 'video',
            src: require('assets/video/1.mp4'),
            img: require('assets/images/temp/2.jpg'),
            title: 'wardpeet commented on issue webpack/webpack#4104',
            desc: 'I have the same issue as @allenwq (Webpack 2.2.1), except I tried to switch order app and vendor in entryproperty. I am getting 3 chunked files: ven',
            to: null,
          },
          {
            type: 'video',
            src: require('assets/video/1.mp4'),
            img: require('assets/images/temp/2.jpg'),
            title: 'wardpeet commented on issue webpack/webpack#4104',
            desc: 'I have the same issue as @allenwq (Webpack 2.2.1), except I tried to switch order app and vendor in entryproperty. I am getting 3 chunked files: ven',
            to: null,
          },
          {
            type: 'video',
            src: require('assets/video/1.mp4'),
            img: require('assets/images/temp/2.jpg'),
            title: 'wardpeet commented on issue webpack/webpack#4104',
            desc: 'I have the same issue as @allenwq (Webpack 2.2.1), except I tried to switch order app and vendor in entryproperty. I am getting 3 chunked files: ven',
            to: null,
          },
          {
            type: 'video',
            src: require('assets/video/1.mp4'),
            img: require('assets/images/temp/2.jpg'),
            title: 'wardpeet commented on issue webpack/webpack#4104',
            desc: 'I have the same issue as @allenwq (Webpack 2.2.1), except I tried to switch order app and vendor in entryproperty. I am getting 3 chunked files: ven',
            to: null,
          },
          {
            type: 'video',
            src: require('assets/video/1.mp4'),
            img: require('assets/images/temp/2.jpg'),
            title: 'wardpeet commented on issue webpack/webpack#4104',
            desc: 'I have the same issue as @allenwq (Webpack 2.2.1), except I tried to switch order app and vendor in entryproperty. I am getting 3 chunked files: ven',
            to: null,
          },
        ]
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/theme.less";
  .discover-article{
    .toplink{
      margin: .5rem 0;
      .text-center{
        .iconfont{
          color: @colorMain;
          font-size: .8rem;
          line-height: .8rem;
        }
        div{
          font-size: 12px;
          line-height: 12px;
        }
      }
    }
  }
</style>
