/**
 * Created by Administrator on 2017/1/20.
 */

export default [
    {
        path: '/dynamic',
        name:'dynamic',
        component: resolve => require(['views/dynamic'], resolve),
        children: [
            {
              path: 'friends',
              component: resolve => require(['views/dynamic/friends'], resolve)
            },
            {
              path: 'popular',
              component: resolve => require(['views/dynamic/popular'], resolve)
            },
         ]
    },
]
