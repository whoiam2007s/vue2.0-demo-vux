/**
 * Created by Administrator on 2017/1/4.
 */

import urls from 'servers/urls'
import tempLoading from 'utils/tempLoading'
import axios from 'axios'
import { Alert } from 'utils/message'

function getData(type, data){
    let url = urls[type];

    tempLoading.start();
    return new Promise(function(resolve, reject){
        axios.get(url)
            .then(response => {
                tempLoading.end();
                resolve(response.data);
            })
            .catch(function(e){
                tempLoading.end();
                Alert(e.message);
                reject(e.message);
            })
    });
}

export function getHotList(data){
    return getData('hot_list', data);
}