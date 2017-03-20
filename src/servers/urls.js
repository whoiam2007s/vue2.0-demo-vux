/**
 * Created by Administrator on 2017/1/9.
 */

const HOST = '/api'

const urls = {

}
for(var key in urls){
    urls[key] = HOST +urls[key];
}

export default urls;

