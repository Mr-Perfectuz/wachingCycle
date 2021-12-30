var slides = document.querySelector('.slider').children;
var nextSlide = document.querySelector('.slider-btn-left');
var prevSlide = document.querySelector('.slider-btn-right');
var index = 0;

var totalSlides = slides.length;

nextSlide.onclick = function(){
    next("next");
}
prevSlide.onclick = function(){
    next("prev");
}

// function next(direction){
//     if(direction == "next"){
//         index++;
//         if(index==totalSlides){
//             index = 0;
//         }
//     }

//     for(i=0; i<totalSlides.length; i++){
//         slides[i].classList.remove("active");
//     }
//     slides[index].classList.add("passive");
// }