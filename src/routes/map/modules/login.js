/**
 * Created by Administrator on 2017/1/20.
 */

export default [
    {
        path: '/login',
        name:'login',
        component: resolve => require(['views/login'], resolve)//用这种方法引用组件可实现懒加载
    },
]