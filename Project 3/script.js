const days = document.getElementById("days");
const hours =document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const year  = document.getElementById("year");
const loading = document.getElementById("loading");

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear +1} 00:00:00`);

//set background year
year.innerText = currentYear +1;

//update countdown time

function updateCountdown(){
    const currentTime = new Date();
    const diff = newYearTime- currentTime;

    const d = Math.floor(diff / 1000 /60 / 60 / 24 );
    const h = Math.floor(diff / 1000 / 60 / 60)%24;
    const m = Math.floor(diff / 1000 /60) %60;
    const s = Math.floor(diff / 1000)%60;

    //adding the values to the DOM
    days.innerHTML = d;
    hours.innerHTML = h<10 ? "0" + h: h;
    minutes.innerHTML = m < 10 ? "0" + m:m;
    seconds.innerHTML = s < 10 ? "0" + s:s;

}

//keep it running
setInterval(updateCountdown, 1000);
//spinning if
setTimeout(() => {
    loading.remove();
    countdown.style.display ="flex";
}, 1000);

//keep running
setInterval(updateCountdown , 1000)