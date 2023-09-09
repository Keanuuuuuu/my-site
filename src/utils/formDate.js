export default function(time){
  // 如果time为字符串，加号可以使其变为数字，传入的time是一个时间戳例如："593715273893"
  const date = new Date(+time)
  return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
}