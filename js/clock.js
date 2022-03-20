const getName=prompt(`Adınızı yazınız:`)
document.querySelector("#myName").textContent=getName
let time=new Date()
let currentTime=`${time.getDate()}/${time.getMonth()}/${time.getFullYear()}     ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
document.querySelector("#myClock").textContent=currentTime;