const responsive = {
    0:{
        items:0
    },
    320:{
        items: 1
    },
    560:{
        items:1
    },
    800: {
        items: 2
    },
    1200:{
        items:2
    }
}

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });
    // click to scroll top
    $('.move-up span').click(function (){
        $('html, body').animate({
            scrollTop: 0
        }, 1000); 
    })
     // aos instance
     AOS.init();
});