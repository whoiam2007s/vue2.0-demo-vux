/**
 * Created by Administrator on 2017/1/11.
 */
import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import getters from './getter';
import mutations from './mutation';
import actions from './action';

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});


