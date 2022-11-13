// SECE SIS
$(document).ready(function() {
    $('.sis-mobile-menu').click(function(event) {
        $('.sis-header').toggleClass('active');
        return false;
    });

    const swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.sis-swiper-button-next',
            prevEl: '.sis-swiper-button-prev',
            dynamicBullets: true
        },
        autoplay: {
            delay: 7000,
            pauseOnMouseEnter: true
        }
    });
});


// scroll to
$(document).on('click', '.scrollTo, .menu-col a', function(event) {
    event.preventDefault();
    var target = $( $(this).attr('href') );
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top-60
        }, 1000);
    }

    return false;
});


