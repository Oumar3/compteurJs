var start = document.querySelector('.start')
var stop = document.querySelector('.stop')
var p = document.querySelector('p')
// const interval=0
var val = 0
var interval;

if(localStorage.getItem('val')) {
    val = localStorage.getItem('val')
    p.textContent = val;
}


start.addEventListener('click', function () {
    if(!interval){
        interval = setInterval(starte,1000)
    }
})

stop.addEventListener('click', function () {
    clearInterval(interval)
    interval=null
})

function starte() {
    val++
    p.textContent = val;
    localStorage.setItem('val', val);
}