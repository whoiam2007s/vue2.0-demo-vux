/**
 * Created by Administrator on 2017/3/15.
 */
const animate = function(option){
  let defval = {
    start:0,
    end:0,
    current:0,
    duration: 500,//ms
    callback: function(){},
  };
  Object.assign(defval, option)

  let arrow = defval.start > defval.end;
  if(defval.current == defval.end){
    callback(defval.end)
  }

  let mt =  (defval.end-defval.start)/(defval.duration/50);

  let ani_int = setInterval(()=>{
    if((!arrow && defval.current >= defval.end) || (arrow && defval.current<= defval.end)){
      defval.callback(defval.end);
      clearInterval(ani_int)
    }else{
      defval.current += mt;
      defval.callback(defval.current)
    }
  }, 50)
}
export default animate;
