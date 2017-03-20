/**
 * Created by Administrator on 2017/1/20.
 */

export default [
    {
        path: '/discover',
        name:'discover',
        component: resolve => require(['views/discover'], resolve),
        children: [
            {
              path: 'article',
              component: resolve => require(['views/discover/article'], resolve)
            },
            {
              path: 'video',
              component: resolve => require(['views/discover/video'], resolve)
            },
         ]
    },
]
