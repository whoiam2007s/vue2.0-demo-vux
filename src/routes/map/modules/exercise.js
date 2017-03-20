/**
 * Created by Administrator on 2017/1/20.
 */

export default [
    {
        path: '/exercise',
        name:'exercise',
        component: resolve => require(['views/exercise'], resolve)
    },
    {
        path: '/exercise/detail/:type',
        name:'exercise/detail',
        component: resolve => require(['views/exercise/detail'], resolve)
    },
]
