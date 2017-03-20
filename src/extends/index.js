/**
 * Created by Administrator on 2017/1/9.
 */

const MyPlugins = {
    install(_Vue, options){
        if(!_Vue){return false;}

        _Vue && (this.__Vue = _Vue);

        this.addDirectives()
        this.addGlobals()
    },
    addDirectives(){
        this.addDirectiveTitle();
    },
    addDirectiveTitle(){
        this.__Vue.directive('title', {
            inserted:function(el, binding){
                document.title = binding.value;
            }
        });
    },
    addGlobals(){
        this.addGlobalMoneyNum();
        this.addFormatNum();
        this.addFormatTime();
    },
    addGlobalMoneyNum(){
      Object.defineProperty(this.__Vue.prototype, '__moneyNum', {
        get () { return num=>{
            let str = num+'';
            let rst = '', l=str.length;
            for(let i=0; i<l; i++){
              let a = str[i];
              rst += (l-i-1)%3==0&&i<l-1 ? a+',' : a;
            }
            return rst;
          }
        }
      })
    },
    addFormatNum(){
      Object.defineProperty(this.__Vue.prototype, '__formatNum', {
        get () { return (num, len=2)=>{
            num = num+'';
            if(num.length >= len){
              return num
            }else{
              let t = '';
              for(let i=len-num.length; i>0; i--){
                t += '0'
              }
              return t+num
            }
          }
        }
      })
    },
    addFormatTime(){
      Object.defineProperty(this.__Vue.prototype, '__formatTime', {
        get () { return (sec)=>{
            let m = Math.floor(sec/60);
            m = m<10 ? '0'+m : m+'';
            let s = Math.floor(sec-60*m);
            s = s<10 ? '0'+s : s+'';
            return m+':'+s
          }
        }
      })
    },
};

export default MyPlugins;

