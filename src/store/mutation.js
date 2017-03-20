/**
 * Created by Administrator on 2017/1/20.
 */

import storageUtil from 'servers/localStorage';
import * as types from './types';

const mutations = {
    //更新用户信息
    [types.UPDATE_USERINFO](state, data){
        //为了触发Vue的动态更新
        for(let key in data){
            if(state.userInfo[key]){
                state.userInfo[key] = data[key]
            }else{
                Vue.set(state.userInfo, key, data[key])
            }
        }
        //或者,但是这种会触发所有的值更新，所以弃用
        //state = Object.assign({}, state.userInfo, data);
        storageUtil.set('userInfo', state.userInfo, 3600);//本地存储信息1个小时过期
    },
    //设置播放信息
    [types.SET_MUSIC_PLAYING_STATE](state, data){
        state.musicPlayState = Object.assign(state.musicPlayState, data)
    },
    //设置播放事件
    [types.SET_MUSIC_EVENT](state, data){
        state.musicPlayEvent = Object.assign({type: ''}, data)
    },
    //设置播放数据
    [types.SET_MUSIC_DATA](state, data){
        state.musicPlayData = Object.assign(state.musicPlayData, data)
    },
}


export default mutations;
