<template>
    <div class="friends-index content">
        <div v-for="item in items" class="blks">
            <friends-item :data="item" @userclick="onUserClick"></friends-item>
        </div>
    </div>
</template>

<script>
    import FriendsItem from 'components/dynamic/friendsItem';

    export default {
        components: {
          FriendsItem,
        },
        props: {},
        data() {
            return {
                items:[
                  {
                      id:1,
                      mine:{
                          headimg: require('assets/images/temp/1.jpg'),
                          name: 'My Name',
                          time: '15:32',
                      },
                      src: require('assets/images/temp/1.jpg'),
                      likes: [
                          {headimg: require('assets/images/temp/1.jpg')},
                          {headimg: require('assets/images/temp/1.jpg')},
                          {headimg: require('assets/images/temp/1.jpg')},
                          {headimg: require('assets/images/temp/1.jpg')},
                          {headimg: require('assets/images/temp/1.jpg')},
                      ],
                      likecount: 565,
                      msgcount: 96,
                      viewcount: 153,
                  },
                  {
                      id:1,
                      mine:{
                          headimg: require('assets/images/temp/1.jpg'),
                          name: 'My Name',
                          time: '15:32',
                      },
                      src: require('assets/images/temp/1.jpg'),
                      likes: [
                          {headimg: require('assets/images/temp/1.jpg')},
                          {headimg: require('assets/images/temp/1.jpg')},
                          {headimg: require('assets/images/temp/1.jpg')},
                          {headimg: require('assets/images/temp/1.jpg')},
                          {headimg: require('assets/images/temp/1.jpg')},
                      ],
                      likecount: 565,
                      msgcount: 96,
                      viewcount: 153,
                  },
                  {
                      id:1,
                      mine:{
                          headimg: require('assets/images/temp/1.jpg'),
                          name: 'My Name',
                          time: '15:32',
                      },
                      src: require('assets/images/temp/1.jpg'),
                      likes: [
                          {headimg: require('assets/images/temp/1.jpg')},
                          {headimg: require('assets/images/temp/1.jpg')},
                          {headimg: require('assets/images/temp/1.jpg')},
                          {headimg: require('assets/images/temp/1.jpg')},
                          {headimg: require('assets/images/temp/1.jpg')},
                      ],
                      likecount: 565,
                      msgcount: 96,
                      viewcount: 153,
                  },
                  {
                      id:1,
                      mine:{
                          headimg: require('assets/images/temp/1.jpg'),
                          name: 'My Name',
                          time: '15:32',
                      },
                      src: require('assets/images/temp/1.jpg'),
                      likes: [
                          {headimg: require('assets/images/temp/1.jpg')},
                          {headimg: require('assets/images/temp/1.jpg')},
                          {headimg: require('assets/images/temp/1.jpg')},
                          {headimg: require('assets/images/temp/1.jpg')},
                          {headimg: require('assets/images/temp/1.jpg')},
                      ],
                      likecount: 565,
                      msgcount: 96,
                      viewcount: 153,
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
  .friends-index{
    .blks{
      margin-top: .4rem;
      &:last-child{
        margin-bottom: .4rem;
      }
    }
  }
</style>
