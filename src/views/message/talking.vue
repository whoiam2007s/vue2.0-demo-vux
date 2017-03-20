<template>
  <div v-title="'Talking'" class="container has-header has-bottom message-talking">
    <my-header icon_left="icon-pageback" @leftClick="onLeftClick">
      <div slot="title">{{hisname}}</div>
    </my-header>

    <talking-item v-for="item in items" :data="item"></talking-item>

    <talking-edit @change="onChange"></talking-edit>

  </div>
</template>

<script>
  import MyHeader from 'components/myheader';
  import TalkingItem from 'components/message/talkingItem';
  import TalkingEdit from 'components/message/talkingEdit';

  export default {
    components: {
      MyHeader,
      TalkingItem,
      TalkingEdit,
    },
    props: {},
    data() {
      return {
          hisname: 'His Name',
          items: [
              {
                  id:1,
                  type: 1,//he
                  headimg: require('assets/images/temp/1.jpg'),
                  message:[
                    {text: 'I have say some thing to you.'},
                    {img: require('assets/images/temp/1.jpg')},
                    {img: require('assets/images/temp/1.jpg')},
                  ],
              },
              {
                  id:2,
                  type: 0,//me
                  headimg: require('assets/images/temp/1.jpg'),
                  message:[
                    {text: 'I have say some thing to you. But you did not say some thing back to me.'},
                  ],
              },
              {
                  id:2,
                  type: 0,//me
                  headimg: require('assets/images/temp/1.jpg'),
                  message:[
                    {text: 'I have say some thing to you. But you did not say some thing back to me.'},
                  ],
              },
              {
                  id:2,
                  type: 0,//me
                  headimg: require('assets/images/temp/1.jpg'),
                  message:[
                    {text: 'I have say some thing to you. But you did not say some thing back to me.'},
                  ],
              },
              {
                  id:3,
                  type: 1,//he
                  headimg: require('assets/images/temp/1.jpg'),
                  message:[
                    {text: 'I have say some thing to you. '},
                  ],
              },
              {
                  id:4,
                  type: 1,//he
                  headimg: require('assets/images/temp/1.jpg'),
                  message:[
                    {text: 'I have say some thing to you. But you did not say some thing back to me. '},
                  ],
              },
              {
                  id:5,
                  type: 1,//he
                  headimg: require('assets/images/temp/1.jpg'),
                  message:[
                    {text: 'I have say some thing to you. '},
                  ],
              },
              {
                  id:6,
                  type: 0,//he
                  headimg: require('assets/images/temp/1.jpg'),
                  message:[
                      {img: require('assets/images/temp/1.jpg')},
                      {img: require('assets/images/temp/1.jpg')},
                  ],
              },
              {
                  id:7,
                  type: 1,//he
                  headimg: require('assets/images/temp/1.jpg'),
                  message:[
                      {text: 'I have say some thing to you. '},
                  ],
              },
          ]
      }
    },
    methods: {
      onLeftClick(){
        this.$router.back();
      },
      onChange(message){
          console.log('message : '+message)
      }
    }
  }
</script>

<style lang="less">

</style>
