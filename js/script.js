/*jshint esversion: 6 */
//слайдер фото
var images = ['page2_1.png', 'page2_2.jpg'];

var carusel = document.querySelector('.carusel');
var img = carusel.querySelector('img');

var i = 1;
img.src = "../img/" + images[0];

window.setInterval (function () {
    img.src = "../img/" + images[i];

    i++;
    if (i == images.length) {
        i = 0;
    }
}, 4000);


//открытие блока в click
function openbox(box) {
    display = document.getElementById('box').style.display;
    if(display == "none") {
        document.getElementById('box').style.display = "block";
    } else {
        document.getElementById('box').style.display = 'none';
    }
}








