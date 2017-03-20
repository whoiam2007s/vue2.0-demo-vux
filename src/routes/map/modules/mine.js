/**
 * Created by Administrator on 2017/1/20.
 */

export default [
    {
        path: '/mine',
        name:'mine',
        component: resolve => require(['views/mine'], resolve),
        children: [
            {
              path: 'posts',
              component: resolve => require(['views/mine/posts'], resolve)
            },
            {
              path: 'following',
              component: resolve => require(['views/mine/following'], resolve)
            },
            {
              path: 'followers',
              component: resolve => require(['views/mine/followers'], resolve)
            },
         ]
    },
]
