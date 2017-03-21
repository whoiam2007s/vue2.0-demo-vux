<template>
    <div v-title="'Message'" class="container has-header message-list">
      <my-header icon_left="icon-pageback" @leftClick="onLeftClick">
        <div slot="title">Message</div>
      </my-header>

      <message-item v-for="(item, index) in items" :key="item.id" :data="item" @userclick="onUserClick" @itemClick="onItemClick(item.id)" @delClick="onDelClick(index)"></message-item>

    </div>
</template>

<script>
    import MyHeader from 'components/myheader';
    import MessageItem from 'components/message/messageItem';

    export default {
        components: {
          MyHeader,
          MessageItem,
        },
        props: {},
        data() {
            return {
                items: [
                  {
                      id: 1,
                      type: 0,//user
                      name: 'His Name',
                      headimg: require('assets/images/temp/1.jpg'),
                      message: 'He send me some message.',
                      time: '15:35',
                      count: 15,
                  },
                  {
                      id: 2,
                      type: 0,//user
                      name: 'His Name',
                      headimg: require('assets/images/temp/1.jpg'),
                      message: 'He send me some message.',
                      time: '15:35',
                      count: 15,
                  },
                  {
                      id: 3,
                      type: 0,//user
                      name: 'His Name',
                      headimg: require('assets/images/temp/1.jpg'),
                      message: 'He send me some message.',
                      time: '15:35',
                      count: 15,
                  },
                  {
                      id: 4,
                      type: 1,//likes
                      headimgs: [require('assets/images/temp/1.jpg'),require('assets/images/temp/1.jpg'),require('assets/images/temp/1.jpg')],
                      message: '16 Likes',
                      time: '15:35',
                      count: 16,
                  },
                  {
                      id: 5,
                      type: 2,//system
                      name: 'Vincent White',
                      message: 'System send me some message.',
                      time: '15:35',
                      count: 0,
                  },
                  {
                      id: 6,
                      type: 3,//share
                      headimgs: [require('assets/images/temp/1.jpg'),require('assets/images/temp/1.jpg'),require('assets/images/temp/1.jpg'),require('assets/images/temp/1.jpg'),require('assets/images/temp/1.jpg')],
                      message: '99 Shared',
                      time: '15:35',
                      count: 99,
                  },
                  {
                    id: 7,
                    type: 0,//user
                    name: 'His Name',
                    headimg: require('assets/images/temp/1.jpg'),
                    message: 'He send me some message.',
                    time: '15:35',
                    count: 15,
                  },
                  {
                    id: 8,
                    type: 0,//user
                    name: 'His Name',
                    headimg: require('assets/images/temp/1.jpg'),
                    message: 'He send me some message.',
                    time: '15:35',
                    count: 15,
                  },
                  {
                    id: 9,
                    type: 0,//user
                    name: 'His Name',
                    headimg: require('assets/images/temp/1.jpg'),
                    message: 'He send me some message.',
                    time: '15:35',
                    count: 15,
                  },
                  {
                    id: 10,
                    type: 0,//user
                    name: 'His Name',
                    headimg: require('assets/images/temp/1.jpg'),
                    message: 'He send me some message.',
                    time: '15:35',
                    count: 15,
                  },
                  {
                    id: 11,
                    type: 0,//user
                    name: 'His Name',
                    headimg: require('assets/images/temp/1.jpg'),
                    message: 'He send me some message.',
                    time: '15:35',
                    count: 15,
                  },
                  {
                    id: 12,
                    type: 0,//user
                    name: 'His Name',
                    headimg: require('assets/images/temp/1.jpg'),
                    message: 'He send me some message.',
                    time: '15:35',
                    count: 15,
                  },
                  {
                    id: 13,
                    type: 0,//user
                    name: 'His Name',
                    headimg: require('assets/images/temp/1.jpg'),
                    message: 'He send me some message.',
                    time: '15:35',
                    count: 15,
                  },
                ]
            }
        },
        methods: {
          onLeftClick(){
              this.$router.back();
          },
          onUserClick(){
              this.$router.push({
                  path: '/mine/789/posts'
              })
          },
          onItemClick(id){
              this.$router.push({
                  name: 'message/talking',
                  params: { id }
              })
          },
          onDelClick(index){
              this.items.splice(index, 1)
          }
        }
    }
</script>

<style lang="less">

</style>
