/**
 * Created by Administrator on 2017/1/6.
 */

const localStorageUtil = {
    set(name, value, time){
        //time失效时间，以秒为单位，必须为数字
        time = typeof time == 'number' ? time : 302400;//默认一周
        time = new Date().getTime()+time*1000;
        let obj = {
            value: value,
            time: time
        };
        let val = JSON.stringify(obj);
        localStorage.setItem(name, val);
    },
    get(name){
        let val = localStorage.getItem(name);
        if(!val){return null;}
        let obj = JSON.parse(val);
        let time = obj.time;
        return !time
            ? null
            : (new Date().getTime() > time ? (localStorage.removeItem(name), null) : obj.value);
    }
}

export default localStorageUtil;

