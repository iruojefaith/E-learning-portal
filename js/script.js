
// $(document).ready(function(){
 
//  // owl-crousel for blog
//  $('.owl-carousel').owlCarousel(
//     {
//         loop:true,
//         autoplay: true, //u can use truethen dont add the class benit
//         autoplayTimeout: 3000,
//         dots:false,
//         nav: true,
//     });

// });


//button image carousel in vanilla js

// const carouselSlide = document.querySelector('.carousel-slide');
// const carouselImages = document.querySelectorAll('.carousel-slide img');
// //buttons
// const prevBtn = document.querySelector('#prevbtn');
// const nextBtn = document.querySelector('#nextbtn');

// //counter
// let counter = 1;
// const size = carouselImages[0].clientWidth;

// carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// //Button listeners
// nextBtn.addEventListener('click', () => {
//     if (counter >= carouselImages.length - 1) return;
//     carouselSlide.style.transition = "transform 0.4s ease-in-out";
//     counter++;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// });
// prevBtn.addEventListener('click', () => {
//     if (counter <= 0) return;
//     carouselSlide.style.transition = "transform 0.4s ease-in-out";
//     counter--;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// });

// carouselSlide.addEventListener('transitionend', () => {
//     if (carouselImages[counter].id === 'lastclone') {
//         carouselSlide.style.transition = "none";
//         counter = carouselImages.length - 2;
//         carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     }
//     if (carouselImages[counter].id === 'firstclone') {
//         carouselSlide.style.transition = "none";
//         counter = carouselImages.length - counter;
//         carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     }
// });