<template>
    <div class="popular-index content">
      <div v-for="item in items" class="blks">
        <popular-item :data="item" @userclick="onUserClick"></popular-item>
      </div>
    </div>
</template>

<script>
  import PopularItem from 'components/dynamic/popularItem';
  export default {
        components: {
            PopularItem,
        },
        props: {},
        data() {
            return {
                items:[
                  {
                    id: 1,
                    src: require('assets/images/temp/1.jpg'),
                    title: 'I like this study because Facebook Likes seem kind of innocuous, he said.',
                    likecount: 999,
                    likes: [
                      {headimg: require('assets/images/temp/1.jpg')},
                      {headimg: require('assets/images/temp/1.jpg')},
                      {headimg: require('assets/images/temp/1.jpg')},
                      {headimg: require('assets/images/temp/1.jpg')},
                      {headimg: require('assets/images/temp/1.jpg')},
                    ]
                  },
                  {
                    id: 1,
                    src: require('assets/images/temp/1.jpg'),
                    title: 'I like this study because Facebook Likes seem kind of innocuous, he said.',
                    likecount: 999,
                    likes: [
                      {headimg: require('assets/images/temp/1.jpg')},
                      {headimg: require('assets/images/temp/1.jpg')},
                      {headimg: require('assets/images/temp/1.jpg')},
                      {headimg: require('assets/images/temp/1.jpg')},
                      {headimg: require('assets/images/temp/1.jpg')},
                    ]
                  },
                  {
                    id: 1,
                    src: require('assets/images/temp/1.jpg'),
                    title: 'I like this study because Facebook Likes seem kind of innocuous, he said.',
                    likecount: 999,
                    likes: [
                      {headimg: require('assets/images/temp/1.jpg')},
                      {headimg: require('assets/images/temp/1.jpg')},
                      {headimg: require('assets/images/temp/1.jpg')},
                      {headimg: require('assets/images/temp/1.jpg')},
                      {headimg: require('assets/images/temp/1.jpg')},
                    ]
                  },
                  {
                    id: 1,
                    src: require('assets/images/temp/1.jpg'),
                    title: 'I like this study because Facebook Likes seem kind of innocuous, he said.',
                    likecount: 999,
                    likes: [
                      {headimg: require('assets/images/temp/1.jpg')},
                      {headimg: require('assets/images/temp/1.jpg')},
                      {headimg: require('assets/images/temp/1.jpg')},
                      {headimg: require('assets/images/temp/1.jpg')},
                      {headimg: require('assets/images/temp/1.jpg')},
                    ]
                  },
                ]
            }
        },
        methods: {
            onUserClick(){
                this.$router.push({
                    path: '/mine/456/posts'
                })
            }
        }
    }
</script>

<style lang="less">
  .popular-index{
    .blks{
      margin-top: .4rem;
      &:last-child{
        margin-bottom: .4rem;
      }
    }
  }
</style>
