<template>
    <div class="mine-following content">
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
                      id:11,
                      headimg: require('assets/images/temp/1.jpg'),
                      name: 'My Name',
                      tip: 'Some thing to say',
                      isfollow: 1,
                  },
                  {
                      id:21,
                      headimg: require('assets/images/temp/1.jpg'),
                      name: 'My Name',
                      tip: 'Some thing to say',
                      isfollow: 1,
                  },
                  {
                      id:31,
                      headimg: require('assets/images/temp/1.jpg'),
                      name: 'My Name',
                      tip: 'Some thing to say',
                      isfollow: 1,
                  },
                  {
                      id:41,
                      headimg: require('assets/images/temp/1.jpg'),
                      name: 'My Name',
                      tip: 'Some thing to say',
                      isfollow: 1,
                  },
                  {
                      id:51,
                      headimg: require('assets/images/temp/1.jpg'),
                      name: 'My Name',
                      tip: 'Some thing to say',
                      isfollow: 1,
                  },
                  {
                      id:61,
                      headimg: require('assets/images/temp/1.jpg'),
                      name: 'My Name',
                      tip: 'Some thing to say',
                      isfollow: 1,
                  },
                  {
                      id:71,
                      headimg: require('assets/images/temp/1.jpg'),
                      name: 'My Name',
                      tip: 'Some thing to say',
                      isfollow: 1,
                  },
                  {
                      id:81,
                      headimg: require('assets/images/temp/1.jpg'),
                      name: 'My Name',
                      tip: 'Some thing to say',
                      isfollow: 1,
                  },
                  {
                      id:91,
                      headimg: require('assets/images/temp/1.jpg'),
                      name: 'My Name',
                      tip: 'Some thing to say',
                      isfollow: 1,
                  },
                  {
                      id:10,
                      headimg: require('assets/images/temp/1.jpg'),
                      name: 'My Name',
                      tip: 'Some thing to say',
                      isfollow: 1,
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
  .mine-following{
    .blks{
      margin-top: .4rem;
      &:last-child{
        margin-bottom: .4rem;
      }
    }
  }
</style>
