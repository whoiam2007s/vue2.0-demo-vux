<template>
  <div class="mine-followers content">
    <div class="blks" v-for="item in items">
      <follow-item :data="item" @userclick="onUserClick(item.id)"></follow-item>
    </div>
  </div>
</template>

<script>
  import FollowItem from 'components/mine/followItem';

  export default {
    components: {
      FollowItem,
    },
    props: {},
    data() {
      return {
        items: [
          {
            id:1,
            headimg: require('assets/images/temp/1.jpg'),
            name: 'My Name',
            tip: 'Some thing to say',
            isfollow: 0,
          },
          {
            id:2,
            headimg: require('assets/images/temp/1.jpg'),
            name: 'My Name',
            tip: 'Some thing to say',
            isfollow: 0,
          },
          {
            id:3,
            headimg: require('assets/images/temp/1.jpg'),
            name: 'My Name',
            tip: 'Some thing to say',
            isfollow: 0,
          },
          {
            id:4,
            headimg: require('assets/images/temp/1.jpg'),
            name: 'My Name',
            tip: 'Some thing to say',
            isfollow: 0,
          },
          {
            id:5,
            headimg: require('assets/images/temp/1.jpg'),
            name: 'My Name',
            tip: 'Some thing to say',
            isfollow: 0,
          },
          {
            id:6,
            headimg: require('assets/images/temp/1.jpg'),
            name: 'My Name',
            tip: 'Some thing to say',
            isfollow: 0,
          },
          {
            id:7,
            headimg: require('assets/images/temp/1.jpg'),
            name: 'My Name',
            tip: 'Some thing to say',
            isfollow: 0,
          },
          {
            id:8,
            headimg: require('assets/images/temp/1.jpg'),
            name: 'My Name',
            tip: 'Some thing to say',
            isfollow: 0,
          },
          {
            id:9,
            headimg: require('assets/images/temp/1.jpg'),
            name: 'My Name',
            tip: 'Some thing to say',
            isfollow: 0,
          },
        ]
      }
    },
    methods: {
      onUserClick(userid){
        this.$router.push({
          path: `/mine/${userid}/posts`
        })
      }
    }
  }
</script>

<style lang="less">
  .mine-followers{
    .blks{
      margin-top: .4rem;
      &:last-child{
        margin-bottom: .4rem;
      }
    }
  }
</style>
