/**
 * Created by Administrator on 2017/1/20.
 */

export default [
    {
        path: '/music',
        name:'music',
        component: resolve => require(['views/music'], resolve),
    },
    {
        path: '/music/list',
        name:'music/list',
        component: resolve => require(['views/music/list'], resolve),
        children: [
          {
            path: 'view/',
            name: 'music/view',
            component: resolve => require(['views/music/view'], resolve)
          }
        ]
    },
]
