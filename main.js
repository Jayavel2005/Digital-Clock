
const hours = document.querySelector(".js-hours")

function minute(){
    const time = new Date();
    const currentHour = time.getHours();
    const currentMinute = time.getMinutes()
    const currentSeconds = time.getSeconds();
    const day = time.getDay();
    hours.innerHTML = currentHour
    console.log(day);

    
    
}

setInterval(minute,1000)