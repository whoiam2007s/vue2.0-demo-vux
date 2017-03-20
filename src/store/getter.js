/**
 * Created by Administrator on 2017/1/20.
 */

const getters = {
    getUserName: state => {
        return state.userInfo.username;
    },
    getMusicPlaySta: state => {
        return state.musicPlayState;
    },
    getMusicEvent: state => {
        return state.musicPlayEvent;
    },
    getMusicData: state => {
        return state.musicPlayData;
    }
};

export default getters;
