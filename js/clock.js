const clock = document.querySelector("h2.time");
const dayInfo = document.querySelector("h2.day");

function getClock() {
    const date = new Date();
    const month = String(date.getMonth() + 1).padStart(2, 0);
    const day = String(date.getDate()).padStart(2, 0);
    const hours = String(date.getHours()).padStart(2, 0);
    const minutes = String(date.getMinutes()).padStart(2, 0);
    const seconds = String(date.getSeconds()).padStart(2, 0);
    dayInfo.innerText = `${month} / ${day} `;
    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

getClock();
setInterval(getClock, 1000);

//setTimeout(sgetClocko, 5000);
