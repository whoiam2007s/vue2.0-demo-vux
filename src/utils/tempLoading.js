/**
 * Created by Administrator on 2017/1/6.
 */

class tempLoading {
    constructor(){
        this._$toast = null;
        this._init()
    }
    _init(){
        let $toast = document.createElement('div');
        $toast.className = 'loadingToast';
        $toast.style.display = 'none';
        $toast.innerHTML = `<div style="position: fixed;left:0;bottom:0;width:100%;height:1rem;background:rgba(0,0,0,.5);z-index:9999;"></div>
            <div style="color: #fff;line-height: 1rem">加载中...</div>
            </div>`;
        document.body.appendChild($toast);
        this._$toast = $toast;
    }
    start(){
        this._$toast.style.display = 'block';
    }
    end(){
        this._$toast.style.display = 'none';
    }
}
export default new tempLoading()


