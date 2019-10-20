const secs = document.querySelector('.sec');
const mins = document.querySelector('.min');
const hours = document.querySelector('.hour');
function time(){
    now = new Date();
    const seconds = now.getSeconds();
    const secondsD = ((seconds / 60) *360)+90;
    const getmins = now.getMinutes();
    console.log(mins);
    const gethour = now.getHours();
    const minsD = ((getmins / 60) *360)+90;
    const hoursD = ((gethour / 12) *360)+90;
    secs.style.transform = `rotate(${secondsD}deg)`;
    mins.style.transform = `rotate(${minsD}deg)`;
    hours.style.transform = `rotate(${hoursD}deg)`;
}
setInterval(time,1000);