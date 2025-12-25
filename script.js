//SLIDER//

$(document).ready(function () {
    $('.autoplay').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 400,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 400,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: '.prev',
        nextArrow: '.next',

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: true
                }
            }
        ]
    });

});








