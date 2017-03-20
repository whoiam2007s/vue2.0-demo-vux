/**
 * Created by Administrator on 2017/1/20.
 */

export default [
    {
        path: '/training',
        name:'training',
        component: resolve => require(['views/training'], resolve),
    },
    {
        path: '/attendance',
        name:'attendance',
        component: resolve => require(['views/training/attendance'], resolve),
    },
    {
        path: '/ranking',
        name:'ranking',
        component: resolve => require(['views/training/ranking'], resolve),
    },
]


