const buttons = document.querySelectorAll('.box');
const body = document.querySelector("body");

body.addEventListener('click', function (event) {
    // Check if the clicked element is not a box
    if (!event.target.classList.contains('box')) {
        body.style.backgroundColor = 'white';
    }
});


buttons.forEach(function (box) {
    box.addEventListener('click', function (event) {
        switch (event.target.id) {
            case 'red':
                body.style.backgroundColor = event.target.id;
                break;

            case 'orange':
                body.style.backgroundColor = event.target.id;
                break;

            case 'green':
                body.style.backgroundColor = event.target.id;
                break;
            case 'blue':
                body.style.backgroundColor = event.target.id;
                break;
            case 'black':
                body.style.backgroundColor = event.target.id;
                break;
            case 'yellow':
                body.style.backgroundColor = event.target.id;
                break;

        }
    })
});