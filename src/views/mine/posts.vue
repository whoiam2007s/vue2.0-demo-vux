<template>
    <div class="mine-posts content">
      <div class="blks" v-for="item in items">
        <friends-item :data="item" @userclick="onUserClick">
          <div slot="media" class="posts-media inline-row">
            <div class="posts-item item" v-for="img in item.imgs">
              <img :src="img" />
            </div>
          </div>
        </friends-item>
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
                items: [
                  {
                    id:1,
                    mine:{
                      headimg: require('assets/images/temp/1.jpg'),
                      name: 'My Name',
                      time: '15:32',
                    },
                    imgs: [require('assets/images/temp/1.jpg'), require('assets/images/temp/1.jpg')],
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
                    imgs: [require('assets/images/temp/1.jpg')],
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
                    imgs: [require('assets/images/temp/1.jpg'),require('assets/images/temp/1.jpg'),require('assets/images/temp/1.jpg')],
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
                    imgs: [require('assets/images/temp/1.jpg'),require('assets/images/temp/1.jpg'),require('assets/images/temp/1.jpg')],
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
                    imgs: [require('assets/images/temp/1.jpg'),require('assets/images/temp/1.jpg'),require('assets/images/temp/1.jpg')],
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
                    imgs: [require('assets/images/temp/1.jpg'),require('assets/images/temp/1.jpg'),require('assets/images/temp/1.jpg')],
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
                    path:'/mine/999/posts'
                })
            }
        }
    }
</script>

<style lang="less">
  .mine-posts{
    left:0;
    bottom:0;
    right:0;
    overflow: auto;
    padding-top: .4rem;
    .blks{
      margin-bottom: .4rem;
      .posts-media{
        padding: 0 10px;
      }
      .posts-item{
        width: 33.3333%;
        &:nth-child(1){
          text-align: left;
        }
        &:nth-child(2){
          text-align: center;
        }
        &:nth-child(3){
          text-align: right;
        }
        img{
          width:98%;
        }
      }
    }
  }
</style>
