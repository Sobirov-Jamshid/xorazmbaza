




var target = document.querySelector("footer");

var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

function callback(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            scrollToTopBtn.classList.add("showBtn");
        } else {
            scrollToTopBtn.classList.remove("showBtn");
        }
    });
}

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

let observer = new IntersectionObserver(callback);

observer.observe(target);



$('.card-item').slick({ 
    autoplay: false,
    autoplaySpeed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });
$('.card-item').mouseover(function() {
  $(this).slick('play')
});
$('.card-item').mouseout(function() {
  $(this).slick('pause')
});






    $('.forget_pass_link').click(function() {
        $('.forget-password').addClass('forget-password-active');
        $('.account.accountshow').removeClass('accountshow');
        $('.fastwatchbgc').addClass("showbgc");
    });
    $('.forget-password-close').click(function() {
        $('.forget-password').removeClass('forget-password-active');
        $('.fastwatchbgc').removeClass("showbgc");
    });


    $('.Online-modal-button').click(function() {
        $('.Online-modal').addClass('Online-modal-none');
        $('.fastwatchbgc').removeClass("showbgc");
    });


    $('.slick_block').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                }
            },
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 370,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    centerMode: true,
                }
            },

        ]
    });

    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
                breakpoint: 860,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },

        ]
    });

    $('.multiple-items2').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        // autoplay: true,
        // autoplaySpeed: 3000,
        responsive: [{
                breakpoint: 1010,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }

            },


        ]


    });
    $('.slick_block_one').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('.user.login').click(function() {
        $('.account').addClass('accountshow');
        $('.fastwatchbgc').addClass("showbgc");
        return false;
    });
    $('.open-registration,.mobile_register_link').click(function() {
        $('.account.accountshow').removeClass('accountshow');
        $('.forget-password.forget-password-active').removeClass('forget-password-active');
        $('.registration').addClass('registration-show');
    });
    $(document).on("click", '.open-registration2', function() {
        $('.account').addClass('accountshow');
        $('.registration.registration-show').removeClass('registration-show');
        $('.forget-password-active').removeClass('forget-password-active');
    });
    $('.header-information .karzinka').click(function() {
        $('.karzinka-open').addClass('karzinka-open-active');
        $('.fastwatchbgc').addClass("showbgc");
    });
    $('.close-account,.registration-close,.karzinka-open-close').click(function() {
        $('.account.accountshow').removeClass('accountshow');
        $('.fastwatchbgc.showbgc').removeClass('showbgc');
        $('.registration.registration-show').removeClass('registration-show');
        $('.karzinka-open.karzinka-open-active').removeClass('karzinka-open-active');
        $('.buyNowModal').removeClass("active");
    });
    $(document).on("click", '.fastwatchbgc.showbgc', function() {
        $('.registration.registration-show').removeClass('registration-show');
        $('.account.accountshow').removeClass('accountshow');
        $('.fastwatch.show').removeClass('show');
        $('.karzinka-open.karzinka-open-active').removeClass('karzinka-open-active');
        $('.main-menu-of.main-menu-of-active').removeClass('main-menu-of-active');
        $('.tv-menu-block.tv-menu-block-active').removeClass('tv-menu-block-active');
        $('.fastwatchbgc.showbgc').removeClass('showbgc');
        $('.forget-password.forget-password-active').removeClass('forget-password-active');
        $('.typed-elements-open.typed-elements-open-active').removeClass('typed-elements-open-active');
        $('.Online-modal').addClass('Online-modal-none');
        $('.mobil-input-button').removeClass("mobil-input-button-active");
    });

    $(document).on("click", '.mobil-loupe', function() {

        $('.typed-elements-open').toggleClass('typed-elements-open-active');
        $('.fastwatchbgc').toggleClass("showbgc");
        $('.mobil-input-button').toggleClass("mobil-input-button-active");
    });
    $(document).on("click", '.add_to_cart_icon,.add-to-cart,#add_to_cart_button', function() {
        var cartCount = $('.cart_items_count').html();
        $('.cart_items_count').html(cartCount * 1 + 1);

        $.ajax({
            url: '/products/add-to-cart',
            type: "post",
            data: {
                id: $(this).data('product')
            },
            success: function(response) {
                quantityContainer = $(".product-block-scroll").find(".text_quantity[data-id='" + response.id + "']");
                if (quantityContainer.length > 0) {
                    quantityContainer.html(quantityContainer.data('quantity') * 1 + 1);
                    quantityContainer.data('quantity', quantityContainer.data('quantity') * 1 + 1);
                } else {
                    var html = '<div class="product-block product_block_' + response.id + '"><div class="product-block-left-info"><div class="product-block-left-info-img"><img src="' +
                        response.image + '" alt="' +
                        response.name + '"></div></div><div class="product-block-center-info"><a class="name-of-product" href="/products/view/' +
                        response.id + '">' +
                        response.name + '</a><div class="product-block-center-info-bottom"><p class="color-of-product-p">Кол-во:</p><div class="product-number"><span class="karzinka-main-number btn_minus_disabled">-</span><span class="karzinka-main-number product_id_' + response.id + ' text_quantity" data-price="' +
                        response.price + '" data-id="' +
                        response.id + '" data-quantity="1">1</span><span class="karzinka-main-number btn_plus">+</span></div></div></div><div class="product-block-right-info"><span class="product-block-right-info-main-price">' +
                        new Intl.NumberFormat('ru-RU').format(response.price) + ' <i>сум</i></span><span data-id="' +
                        response.id + '" class="product-block-right-delete delete_cart_item">Удалить</span></div></div>';

                    $('.product-block-scroll').append(html);
                    $('.karzinka-open-center').removeClass('hidden');
                    $('.karzinka-open-bottom').removeClass('hidden');
                    $('.karzinka-top-info').html('<h5 class="my-karzinka-h5">Ваша корзина</h5><a class="main-karzinka-a" href="/customer/cart">Перейти в корзину</a>');
                }
                changeCart();

            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }

        });
    });
    $('.add_to_cart_icon,.add-to-cart,#add_to_cart_button').on('click', function() {
        if (window.matchMedia("screen and (min-width: 1010px)").matches) {
            var cart = $('.header-information .karzinka');
        } else {
            var cart = $('.lap-top-menu .karzinka');
        }
        var imgtodrag = $(this).parent().parent().find('.big-img').eq(0);
        if (imgtodrag.length == 0) {
            imgtodrag = $(this).parent().parent().parent().find('.img-responsive').eq(0);
            if (imgtodrag.length == 0) {
                imgtodrag = $('.slick-slide.slick-current.slick-active img').eq(0);
            }
        }
        if (imgtodrag) {
            var imgclone = imgtodrag.clone()
                .offset({
                    top: imgtodrag.offset().top,
                    left: imgtodrag.offset().left
                })
                .css({
                    'opacity': '0.8',
                    'position': 'absolute',
                    'height': '150px',
                    'width': '150px',
                    'z-index': '100'
                })
                .appendTo($('body'))
                .animate({
                    'top': cart.offset().top + 10,
                    'left': cart.offset().left + 10,
                    'width': 75,
                    'height': 75
                }, 1500, 'easeInOutExpo');

            imgclone.animate({
                'width': 0,
                'height': 0
            }, function() {
                $(this).detach()
            });
        }
    });

    function changeCart() {
        var totalCount = 0;
        var totalSumm = 0;
        $('.karzinka-open-start .text_quantity').each(function(i, val) {
            var data = $(this).data();
            totalCount += data.quantity;
            $('.product_price_summ_' + data.id).html(new Intl.NumberFormat('ru-RU').format(data.quantity * data.price) + ' <i>сум</i>');
            totalSumm += data.quantity * data.price;
        });
        $('.totalCount').html(totalCount + ' <i>шт.</i>');
        if (totalCount > 0) {
            $('.cart_items_count').html(totalCount);
            $('.cart_items_count').removeClass('hidden');
        } else {
            $('.cart_items_count').html(totalCount);
            $('.cart_items_count').addClass('hidden');
            $('.page-of-karzinka-main-left').html('<h3>Ваша корзина для покупок пуста</h3>');
        }
        $('.totalSumm').html(new Intl.NumberFormat('ru-RU').format(totalSumm) + ' <i>сум</i>');
    }
    $(document).on("click", '.btn_plus', function() {
        var text_quantity = $(this).parent().find('.text_quantity');
        var data = text_quantity.data();
        quantitySpan = $('.product_id_' + data.id);
        quantitySpan.html(data.quantity + 1);
        quantitySpan.data('quantity', data.quantity + 1);
        changeCart();
        if (data.quantity > 1) {
            quantitySpan.parent().find('.btn_minus_disabled').addClass('btn_minus').removeClass('btn_minus_disabled');
        }
        $.ajax({
            url: '/products/add-to-cart',
            type: "post",
            data: {
                id: data.id,
                value: data.quantity
            },
            success: function(response) {
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
             
            }

        });
        return false;
    });
    $(document).on("click", '.btn_minus', function() {
        var text_quantity = $(this).parent().find('.text_quantity');
        var data = text_quantity.data();
        quantitySpan = $('.product_id_' + data.id);
        quantitySpan.html(data.quantity - 1);
        quantitySpan.data('quantity', data.quantity - 1);
        changeCart();
        $.ajax({
            url: '/customer/cart-item-set-quantity',
            type: "post",
            data: {
                id: data.id,
                value: data.quantity
            },
            success: function(response) {
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
                
            }

        });
        if (data.quantity == 1) {
            quantitySpan.parent().find('.btn_minus').addClass('btn_minus_disabled').removeClass('btn_minus');
            // $(this).addClass('btn_minus_disabled').removeClass('btn_minus');
        }
        /*else {
                   $(this).addClass('btn_minus_disabled').removeClass('btn_minus');
               }*/
        return false;
    });

    $(document).on("click", '.delete_cart_item', function() {
        // console.log($(this).data('id'));
        var deletedItem = $(this);
        $.ajax({
            url: '/customer/cart-item-delete?id=' + deletedItem.data('id'),
            type: "get",
            success: function(response) {
                // console.log(deletedItem);
                $('.product_block_' + deletedItem.data('id')).remove();
                changeCart();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                // console.log(textStatus, errorThrown);
                // console.log(response);
            }

        });

    });

    $('.bestwatch').click(function() {
        productId = $(this).data('id');
        $.ajax({
            url: '/products/fast-view?id=' + productId,
            type: "get",
            success: function(response) {
                

                $('.fastwatchbgc').addClass('showbgc');
                $('.fastwatch').addClass('show');
            },
            error: function(jqXHR, textStatus, errorThrown) {
                // console.log(textStatus, errorThrown);
                // console.log(response);
            }

        });
    });
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        asNavFor: '.slider-nav'

    });
    $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    $('.slider-for2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav2'

    });

     


    
    $('.slider-nav2').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for2',
        dots: false,
        focusOnSelect: true,
    });

    $('.catalog_menu').click(function() {
        $('.main-menu-of').toggleClass('main-menu-of-active');
        $('.fastwatchbgc').addClass("showbgc");
    });
    $('.main_menu_back_link').click(function() {
        $('.main-menu-of').toggleClass('main-menu-of-active')
        $('.fastwatchbgc').removeClass("showbgc");
    });

    $('.tv-menu-block-blocksub.mobil-add-block a').click(function() {
        $('.mobil-add-block-active').removeClass('mobil-add-block-active');
        $('.addblock_active').removeClass('addblock_active');
        $(this).parent().addClass('mobil-add-block-active');
        $('.menu-add-block-' + $(this).data('id')).addClass('addblock_active');
    });


    $('.tv-menu-block-block a').click(function() {

        $('.tv-menu-block-block-1-1-open').removeClass('tv-menu-block-block-1-1-open');
        $('.menu-subblock-active').removeClass('menu-subblock-active');

        $('.mobil-add-block-active').removeClass('mobil-add-block-active');
        $('.addblock_active').removeClass('addblock_active');
        $(this).parent().toggleClass('tv-menu-block-block-1-1-open');
        $('.menu-subblock-' + $(this).data('id')).toggleClass('menu-subblock-active');
    });

    $('.main-menu-of-block a').click(function() {
        $('.tv-menu-block.tv-menu-block-' + $(this).data('id')).addClass('tv-menu-block-active');
    });

    $('.tv-menu-main-block.back_menu a').click(function() {
        $('.tv-menu-block.tv-menu-block-' + $(this).data('id')).removeClass('tv-menu-block-active');
    });

    var yetclocks = document.querySelectorAll('.yet-clock');
    yetclocks.forEach(function(yetclock) {
        yetclock.addEventListener('click', function() {
            yetclocks.forEach(function(yetclock) {
                yetclock.classList.remove('yet-clock-active')
            });
            yetclock.classList.add('yet-clock-active');
        })
    })
    var typed = new Typed('#typedof', {
        strings: ["", "Apple Iphone 13 pro max", "Samsung Galaxy s22", "Apple Watch series 7", "Vivo v23 5G", "Samsung Galaxy Z Fold4"],
        smartBackspace: true,
        attr: 'placeholder',
        loop: true,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 500,
        backSpeed: 40,
        typeSpeed: 40,

    });


    var Lazy = new LazyBlocks({
        elements: document.querySelectorAll('img[data-src]'),
        callback: function(el) {
            el.setAttribute('src', el.getAttribute('data-src'));
            el.removeAttribute('data-src');
        }
    }).execute();


    $('.burger-menu-block').on("click", function() {
        $(this).toggleClass("burger-menu-block-active");
        $('body').toggleClass("body-active");
        $('.menu-burger-block').toggleClass("menu-burger-block-active");
        $('.fastwatchbgc').toggleClass("showbgcmenu");

    });


    
    


    $('.fastwatchbgc').on("click", function() {
        $('.burger-menu-block').removeClass("burger-menu-block-active");
        $('body').removeClass("body-active");
        $('.fastwatchbgc').removeClass("showbgcmenu");
        $('.fastwatchbgc').removeClass("showbgcmenu");
        $('.buyNowModal').removeClass("active");
        $('.menu-burger-block').removeClass("menu-burger-block-active");
        NewModal.classList.remove("new-modal-tel-active");

    });

    $('.goods-section-left-checkbox-block,.filtor-section-main-block input').change(function() {
        var form = $('.filter_form');
        if (form) {
            var val = $(this).val();
            if (val == 'price_asc') {
                $('.filtor-section-price.filtor-section-price2').removeClass('active');
                $('.filtor-section-price.filtor-section-price1').addClass('active');
            }
            if (val == 'price_desc') {
                $('.filtor-section-price.filtor-section-price1').removeClass('active');
                $('.filtor-section-price.filtor-section-price2').addClass('active');
            }
            var serializedData = form.serialize();
            console.log(serializedData);
            document.location.href = '?' + serializedData;
            console.log($('.sort_form').serialize());
        }
        // console.log($('.goods-section-left-checkbox-block input:checked').length);
    });

    $('.center-Catalog-center-information-left-top a').click(function() {
        $('.center-Catalog-center-information-left-top a').removeClass('center-Catalog-center-information-left-top-a-active');
        $(this).addClass('center-Catalog-center-information-left-top-a-active');
        $('.tab-content .active').removeClass('active');
        if ($(this).hasClass('center1')) {
            $('.center-Catalog-center-information-left-top2').addClass('active');
        }
        if ($(this).hasClass('center2')) {
            $('.Catalog-all-main-information').addClass('active');
        }
        if ($(this).hasClass('center3')) {
            $('.Catalog-big-star-block-mains').addClass('active');
        }
        if ($(this).hasClass('center4')) {
            $('.reviewWrapperContent').addClass('active');
        }
        return false;
    });

    $('.Catalog-information-buttom-3').click(function() {
        $('.buyNowModal').addClass('active');
        $('.fastwatchbgc').addClass('showbgc');
        return false;
    });
    $('.open-js-add').click(function() {
        parent = $(this).parent().parent();
        if (parent.hasClass('js-add-active')) {
            $('.js-add-active').removeClass('js-add-active');
        } else {
            $('.js-add-active').removeClass('js-add-active');
            $(this).parent().parent().addClass('js-add-active');
        }
        return false;
    });
    $('.opens-center2').click(function() {
        $('.center2').addClass('center-Catalog-center-information-left-top-a-active');
        $('.Catalog-all-main-information ').addClass('active');
        $('.center1').removeClass('center-Catalog-center-information-left-top-a-active');
        $('.center-Catalog-center-information-left-top2 ').removeClass('active');
        return false;
    });
    


let CallButton = document.querySelector(".call-mudal-button");
let NewModal = document.querySelector(".new-modal-tel");
let ButtonExit = document.querySelector(".new-modal-tel-exit");

CallButton.addEventListener("click", function(){
    NewModal.classList.add("new-modal-tel-active");
    $('.fastwatchbgc').addClass('showbgc');

})
// ButtonExit.addEventListener("click", function(){
//     NewModal.classList.remove("new-modal-tel-active");
//     $('.fastwatchbgc').removeClass('showbgc');
// })

$("#phone").mask("(99) 999-99-99");

let CallMe = document.querySelector('.Call-me');
let TelMain = document.querySelector('.new-modal-tel-main');
let CallTimer = document.querySelector('.Call-timer');

let myFunction = function(){
    CallTimer.classList.remove("Call-timer-none");
    TelMain.classList.add("Tel-main-none");
    var timeleft = 25;
    CallTimer.textContent = 25
    var downloadTimer = setInterval(function(){
    timeleft--;
    CallTimer.textContent = timeleft;
    if(timeleft <= 0)
        clearInterval(downloadTimer);
    },1000);
}



$("#prospects_form").submit(function(e) {
    e.preventDefault(); 
});

