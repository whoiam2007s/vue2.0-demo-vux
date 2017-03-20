/**
 * Created by Administrator on 2017/1/6.
 */
import { NOOP } from 'servers/global';

export function Alert(msg){
        console.log('alert message:'+msg);
}

export function Confirm(msg, callback){
        callback = callback || NOOP;
        console.log('confirm message:'+msg);
}

