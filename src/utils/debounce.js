// 封装一个函数防抖的方法
export default function(fn, duration){
  let timer = null
  return (...args)=>{
    clearTimeout(timer)
    timer = setTimeout(()=>{
      fn(...args)
    },duration)
  }
}