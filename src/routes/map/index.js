/**
 * Created by Administrator on 2017/1/5.
 */

import login from './modules/login';
import exercise from './modules/exercise';
import discover from './modules/discover';
import dynamic from './modules/dynamic';
import mine from './modules/mine';
import message from './modules/message';
import run from './modules/run';
import music from './modules/music';
import training from './modules/training';

export default [
    ...login,
    ...exercise,
    ...discover,
    ...dynamic,
    ...mine,
    ...message,
    ...run,
    ...music,
    ...training,
    //所有引用的路由，放在这句备注之前，否则会出错
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '*', //其他页面，强制跳转到首页
        redirect: '/'
    },
]
