let count = 0;

let interval = setInterval(() => {

count += 25;

document.getElementById("students").innerText = count;

if(count >= 1250){
clearInterval(interval);
}

}, 30);