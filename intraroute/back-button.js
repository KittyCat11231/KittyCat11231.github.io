document.getElementById("back-button").addEventListener('click', function() {
    location.reload()
})

document.getElementById("back-button-2").addEventListener('click', function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    location.reload()
})