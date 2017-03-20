/**
 * Created by Administrator on 2017/1/6.
 */

class tempLoading{
    constructor(){
        this._$toast = null;
        this._init()
    }
    _init(){
        let $toast = document.createElement('div');
        $toast.className = 'loadingToast';
        $toast.style.display = 'none';
        $toast.innerHTML = `<div class="weui-mask_transparent"></div>
            <div class="weui-toast">
            <i class="weui-loading weui-icon_toast"></i>
            <p class="weui-toast__content">数据加载中</p>
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


