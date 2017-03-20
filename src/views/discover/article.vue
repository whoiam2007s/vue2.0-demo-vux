<template>
    <div class="discover-article">

      <discover-banner :data="banners"></discover-banner>

      <flexbox class="toplink" :gutter="0">
        <flexbox-item>
          <router-link :to="{ name:'music' }" tag="div" class="text-center">
            <i class="iconfont icon-music"></i>
            <div>Music</div>
          </router-link>
        </flexbox-item>
        <flexbox-item>
          <router-link to="" tag="div" class="text-center">
            <i class="iconfont icon-action"></i>
            <div>Action</div>
          </router-link>
        </flexbox-item>
        <flexbox-item>
          <router-link to="" tag="div" class="text-center">
            <i class="iconfont icon-diet"></i>
            <div>Diet</div>
          </router-link>
        </flexbox-item>
        <flexbox-item>
          <router-link to="" tag="div" class="text-center">
            <i class="iconfont icon-mall"></i>
            <div>Mall</div>
          </router-link>
        </flexbox-item>
      </flexbox>

      <div class="content">
        <discover-item v-for="item in items" :data="item"></discover-item>
      </div>
    </div>
</template>

<script>
    import { Flexbox, FlexboxItem } from 'vux';
    import DiscoverItem from 'components/discover/discoverItem';
    import DiscoverBanner from 'components/discover/discoverBanner';

    export default {
        components: {
          Flexbox,
          FlexboxItem,
          DiscoverItem,
          DiscoverBanner,
        },
        props: {},
        data() {
            return {
                banners:[
                  {
                    title: 'Targeting Weak1',
                    tip: 'Sports',
                    star: 2,
                    count: 6,
                    img: require('assets/images/exercise/item_bg_1.jpg'),
                  },
                  {
                    title: 'Targeting Weak2',
                    tip: 'Sports',
                    star: 3,
                    count: 8,
                    img: require('assets/images/exercise/item_bg_2.jpg'),
                  },
                  {
                    title: 'Targeting Weak3',
                    tip: 'Sports',
                    star: 4,
                    count: 3,
                    img: require('assets/images/exercise/item_bg_3.jpg'),
                  },
                  {
                    title: 'Targeting Weak4',
                    tip: 'Sports',
                    star: 5,
                    count: 15,
                    img: require('assets/images/exercise/item_bg_2.jpg'),
                  },
                  {
                    title: 'Targeting Weak5',
                    tip: 'Sports',
                    star: 5,
                    count: 15,
                    img: require('assets/images/exercise/item_bg_2.jpg'),
                  },
                ],
                items:[
                  {
                      type: 'img',
                      src: require('assets/images/temp/1.jpg'),
                      title: 'wardpeet commented on issue webpack/webpack#4104',
                      desc: 'I have the same issue as @allenwq (Webpack 2.2.1), except I tried to switch order app and vendor in entryproperty. I am getting 3 chunked files: ven',
                      to: null,
                  },
                  {
                      type: 'img',
                      src: require('assets/images/temp/1.jpg'),
                      title: 'wardpeet commented on issue webpack/webpack#4104',
                      desc: 'I have the same issue as @allenwq (Webpack 2.2.1), except I tried to switch order app and vendor in entryproperty. I am getting 3 chunked files: ven',
                      to: null,
                  },
                  {
                      type: 'img',
                      src: require('assets/images/temp/1.jpg'),
                      title: 'wardpeet commented on issue webpack/webpack#4104',
                      desc: 'I have the same issue as @allenwq (Webpack 2.2.1), except I tried to switch order app and vendor in entryproperty. I am getting 3 chunked files: ven',
                      to: null,
                  },
                  {
                      type: 'img',
                      src: require('assets/images/temp/1.jpg'),
                      title: 'wardpeet commented on issue webpack/webpack#4104',
                      desc: 'I have the same issue as @allenwq (Webpack 2.2.1), except I tried to switch order app and vendor in entryproperty. I am getting 3 chunked files: ven',
                      to: null,
                  },
                  {
                      type: 'img',
                      src: require('assets/images/temp/1.jpg'),
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
