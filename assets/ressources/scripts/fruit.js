const button = document.querySelector(".Learn");

button.addEventListener("click", (e) => {
    e.preventDefault();
    button.classList.add("animate");

    setTimeout(() => {
        button.classList.remove("animate");
    }, 600)
});

// Menu Toggle
let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
menuToggle.onclick = function(){
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

// Change Image on click
function imgSlider(anything) {
    document.querySelector('.fruits').src = anything
}

// Change Background color
function changeBgColor(color) {
    const bg = document.querySelector('.bg');
    bg.style.background = color;
}

// Active Select
let el =document.querySelectorAll('.thumb li');
for (let i = 0; i < el.length; i++) {
    el[i].onclick = function() {
        var c = 0;
        while (c < el.length) {
            el[c++].className = 'check';
        }
        el[i].className = 'check active';
    }
}