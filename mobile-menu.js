let display = false;

document.getElementById("dropdown-content").classList.add('no-display');

document.getElementById("dropdown-button").addEventListener('click', function () {
    if (display === false) {
        document.getElementById("dropdown-content").classList.remove('no-display');
        display = true;
    } else {
        document.getElementById("dropdown-content").classList.add('no-display');
        display = false;
    }
})

document.getElementById("main-content").addEventListener('click', function () {
    if (display === true) {
        document.getElementById("dropdown-content").classList.add('no-display');
        display = false;
    } 
})