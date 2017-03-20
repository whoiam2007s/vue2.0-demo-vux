/**
 * Created by Administrator on 2017/1/20.
 */

import storageUtil from 'servers/localStorage';

const state = {
    userInfo: storageUtil.get('userInfo') || {},
    musicPlayState:{current:0, duration:0},
    musicPlayEvent:{type: ''},
    musicPlayData:{},
}

export default state;

