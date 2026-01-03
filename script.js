const months=["Jan","Feb","Mar","Apr","May","Jun","Jul",
             "Aug","Sep","Oct","Nov",
             "Dec"];

const days=["Sunday","Monday","Tuesday","Wednesday",
           "Thursday","Friday","Saturday"];



const hand=document.querySelector(".hand");
const Hour=document.querySelector(".hour");
const Minute=document.querySelector(".minute");
const Second=document.querySelector(".second");
const Time=document.querySelector(".time");
const datEl=document.querySelector(".date");




function setTime(){
  const time = new Date();
  const month =time.getMonth();
  const day = time.getDay();
  const date=time.getDate()
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  
 Hour.style.transform = `translate(-50%,-100%) rotate(${scale(hours,0, 12,0,360)}deg) `
 
  Minute.style.transform = `translate(-50%,-100%) rotate(${scale(minutes,0, 59,0,360)}deg) `
  
   Second.style.transform = `translate(-50%,-100%) rotate(${scale(seconds,0, 59,0,360)}deg) `
   
   Time.innerHTML=`${hours}:${minutes < 10 ? `0${minutes}` : minutes}`
   
   datEl.innerHTML =`${days[day]},${months[month]} <span class="day">${date}</span>`
   
   
}
 
 const scale =(number, inMin, inMax, outMin, outMax)=> {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  
}
setInterval(setTime,1000);