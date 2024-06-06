const times = document.querySelector('#clock')

let date = new Date();

setInterval(function () {

    let date = new Date();
    times.innerHTML = date.toLocaleTimeString();

}, 1000)

