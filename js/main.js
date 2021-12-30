var slides = document.querySelector('.slider').children;
var nextSlide = document.querySelector('.slider-btn-left');
var prevSlide = document.querySelector('.slider-btn-right');

var totalSlides = slides.length;

nextSlide.onclick = function(){
    console.log("click");
}