const date=new Date()
const day=date.toLocaleString('en-US',{weekday:'short'})
const dateNum=date.getDate()
const month=date.toLocaleString('en-US',{month:'short'})
const year=date.toLocaleString('en-US',{year:'numeric'})
export const today=`${day} ${dateNum} ${month} ${year}`
  
// console.log(today);