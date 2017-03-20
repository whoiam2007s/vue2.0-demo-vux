<template>
  <div class="mine-followers content">
    <div class="blks" v-for="item in items">
      <follow-item :data="item"></follow-item>
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
            id:1,
            headimg: require('assets/images/temp/1.jpg'),
            name: 'My Name',
            tip: 'Some thing to say',
            isfollow: 0,
          },
          {
            id:1,
            headimg: require('assets/images/temp/1.jpg'),
            name: 'My Name',
            tip: 'Some thing to say',
            isfollow: 0,
          },
          {
            id:1,
            headimg: require('assets/images/temp/1.jpg'),
            name: 'My Name',
            tip: 'Some thing to say',
            isfollow: 0,
          },
          {
            id:1,
            headimg: require('assets/images/temp/1.jpg'),
            name: 'My Name',
            tip: 'Some thing to say',
            isfollow: 0,
          },
          {
            id:1,
            headimg: require('assets/images/temp/1.jpg'),
            name: 'My Name',
            tip: 'Some thing to say',
            isfollow: 0,
          },
          {
            id:1,
            headimg: require('assets/images/temp/1.jpg'),
            name: 'My Name',
            tip: 'Some thing to say',
            isfollow: 0,
          },
          {
            id:1,
            headimg: require('assets/images/temp/1.jpg'),
            name: 'My Name',
            tip: 'Some thing to say',
            isfollow: 0,
          },
          {
            id:1,
            headimg: require('assets/images/temp/1.jpg'),
            name: 'My Name',
            tip: 'Some thing to say',
            isfollow: 0,
          },
        ]
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
