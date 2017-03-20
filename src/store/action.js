/**
 * Created by Administrator on 2017/1/20.
 */

import * as types from './types';

const actions = {
    [types.UPDATE_USERINFO](context, data){
        //在异步操作的时候需要使用actions，例如axios
        context.commit([types.UPDATE_USERINFO], data);
    },
}

export default actions;
