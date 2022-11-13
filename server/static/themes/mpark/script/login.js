$(window).on("load", function() {
    $('.new-top-carusel-start').addClass("new-top-carusel-start-active");
    $('.car-block').css("display", "block");
    

});


// let Prices = document.querySelectorAll(".price")

// Prices.forEach((item) =>{
//    if(item.children[0].getElementsByTagName("a")){
//    let zbA = item.children[0].getElementsByTagName("a")
//    item.children[0].textContent = zbA.textContent
//    }
// })


$('.conect-input.login_form').submit(function() {
    login_url = '/site/ajax-signin';
    var form = $('.login_form');
    var serializedData = form.serialize();
    $.ajax({
        url: login_url,
        type: "post",
        data: serializedData,
        success: function(response) {

            if ($.type(response) === "string") {
                $('.fastwatchbgc').removeClass('showbgc');
                $('.account.accountshow').removeClass('accountshow');
                $('.user.login').addClass('hidden');
                $('.user-hover-main-block h5').html(response);
                $('.user-hover-information.hidden').removeClass('hidden');
                $('.lap-top-menu-blocks.user.login').addClass('hidden');
                $('.lap-top-menu-blocks.cabinet.hidden').removeClass('hidden');

            } else {
                if (response['loginform-password']) {
                    $('.loginform-password').text(response['loginform-password'][0]);
                } else {
                    $('.loginform-password').text('');
                }
                if (response['loginform-login']) {
                    $('.loginform-login').text(response['loginform-login'][0]);
                } else {
                    $('.loginform-login').text('');
                }
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
            console.log(response);
        }
    });
    return false;
});
$(document).on("beforeSubmit", ".conect-input.register_form", function() {
    signup_url = '/site/ajax-signup';
    var form = $('.conect-input.register_form');
    var serializedData = form.serialize();
    $.ajax({
        url: signup_url,
        type: "post",
        data: serializedData,
        success: function(response) {
            if (response == 1) {
                window.location.href = '/customer/account';
            } else {
                $('.conect-input.register_form').data('requestRunning', false);
                $('.help-block').html('');
                Object.keys(response).forEach(function eachKey(key) {
                    $('.field-' + key + ' .help-block').html(response[key]);
                });

                $('#signupform-verifycode-image').yiiCaptcha('refresh');
            }

        },
        error: function(jqXHR, textStatus, errorThrown) {
            if (textStatus != '') {
                $('.field-signupform-offer .help-block').html('Произошла ошибка регистрации, пожалуйста попробуйте позже или обратитесь в колл центр MediaPark по номеру +998 (71) 203 33 33');
            }
        }
    });
    return false;
});
$(document).on("submit", ".forget_form", function() {
    recover_url = '/site/ajax-password-reset';
    var form = $('.forget_form');
    var serializedData = form.serialize();
    $.ajax({
        url: recover_url,
        type: "post",
        data: serializedData,
        success: function(response) {
            if (response == 1) {
                $('.forget_form').html('<p class="help-block">На указанный логин выслан пароль для входа</p><p><a class="open-registration2" href="#">АВТОРИЗАЦИЯ</a></p>');
            } else {
                Object.keys(response).forEach(function eachKey(key) {
                    $('.passwordresetrequestform-login.help-block').html(response[key]);
                });
            }

        },
        error: function(jqXHR, textStatus, errorThrown) {
            if (textStatus != '') {
            }
        }
    });
    return false;
});

let ZbSlider = document.querySelector(".slider-for-top")

if(ZbSlider){
    $('.slider-for-top').on('init', function(event, slick, currentSlide, nextSlide) {
        const topcarusel3 = document.querySelector(".top-carusel-number-3");
    
    
    
    
        topcarusel3.textContent = slick.slideCount;
    });
    
    $('.fade').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4000,
      });
    
    
    $('.slider-for-top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.slider-nav-top',
        responsive: [{
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
    
    
            }
        }, ]
    });
 
    
    
        const newtopcarusel = document.querySelector(".new-top-carusel-top");
        
        let zabbimg = document.querySelectorAll(".slider-for-top-block");
        
        newtopcarusel.style = `background: linear-gradient( 90deg,${zabbimg[0].dataset.bgcolor} 0%,${zabbimg[0].dataset.bgcolorrgb} 100%);`
    
    $('.slider-for-top').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        newtopcarusel.style = `background: linear-gradient( 90deg,${zabbimg[nextSlide].dataset.bgcolor} 0%,${zabbimg[nextSlide].dataset.bgcolorrgb} 100%);`
    
       
    });
    
    
    
    if ($('.slider-nav-top a').length > 9) {
        var slidesToShow = 9;
    } else {
        var slidesToShow = $('.slider-nav-top a').length * 1 - 1;
    }
    
    
    $('.slider-for-top').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        const topcarusel1 = document.querySelector(".top-carusel-number-1");
    
        topcarusel1.textContent = nextSlide + 1
    
    
    
    
    
    });
    
    
    
    
    
    
        $('.slider-nav-top').slick({
            slidesToShow: slidesToShow,
            slidesToScroll: 1,
            asNavFor: '.slider-for-top',
            dots: false,
            focusOnSelect: true,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [{
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 1,
                        asNavFor: '.slider-for-top',
                        dots: false,
                        focusOnSelect: true,
                        autoplay: true,
                        autoplaySpeed: 5000,
    
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 4,
    
                    }
                },
            ]
    
        });
}


window.onscroll = function() {scrollFunction()};
    
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").classList.add("header-smoll");
  } else {
    document.getElementById("header").classList.remove("header-smoll");
  }
}



$('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-nav').slick('slickGoTo', slideno - 1);
});





var randomColors    = ["green", "red", "white"];
var clrI    = 0;
$('#carousel-example-generic').on('slide.bs.carousel', function(e) {
    $(this).css('background-color', randomColors[clrI]);
    clrI++;
    if(clrI>=randomColors.length) {
        clrI    = 0;
    }
});

function zoom(e){
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX/zoomer.offsetWidth*100
    y = offsetY/zoomer.offsetHeight*100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
  }





