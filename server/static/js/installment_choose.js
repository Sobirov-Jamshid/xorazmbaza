




let OfferModal = document.querySelector(".offer-modal");

let Close = OfferModal.querySelector(".close");

Close.addEventListener("click", function() {
    OfferModal.classList.remove("open")
})

function formStep(a, b) {
    var csa = "." + a;
    var csb = "." + b;
    $(csa).find(".loader").show();
    setTimeout(function() {
        $(csa).removeClass("active");
        $(csb).addClass("active");
        $(csa).find(".loader").hide();
    }, 750);
}

$(".template_btn.send_offer,.back_to_payment,.back_to_customer").click(function(e) {
    // form = $("#form-checkout"), 
    // form.yiiActiveForm('validateAttribute', 'msordersform-installment_plan');
    formStep($(this).data("csa"), $(this).data("csb"));
});

$(".check-user").click(function(e) {

    var firstName = $("#msordersform-first_name"),
        // lastName = $("#msordersform-last_name"),
        region_id = $("#msordersform-region_id"),
        district_id = $("#msordersform-district_id"),
        email = $("#msordersform-email"),
        phoneM = $("#msordersform-phone_m"),
        form = $("#form-checkout"),
        data = form.data("yiiActiveForm");

    form.yiiActiveForm('validateAttribute', 'msordersform-first_name');
    // form.yiiActiveForm('validateAttribute', 'msordersform-last_name');
    form.yiiActiveForm('validateAttribute', 'msordersform-region_id');
    form.yiiActiveForm('validateAttribute', 'msordersform-district_id');
    form.yiiActiveForm('validateAttribute', 'msordersform-email');
    form.yiiActiveForm('validateAttribute', 'msordersform-phone_m');

    if ($('.installment_choose.active').data('group') == 6 && $(this).data("csa") == 'customer') {
        // console.log($('#msordersform-phone_m').val());
        if ($('#msordersform-phone_m').val() != '') {
            $('.customer.installment6 .loader').show();
            button = $(this);
            $.ajax({
                url: '/installment/default/ajax-intent-phone',
                // type: "post",
                data: {
                    phone: $('#msordersform-phone_m').val()
                },
                success: function(response) {
                    if (response.message == 'success') {
                        if ((firstName.val().length * phoneM.val().length) > 0) {
                            formStep(button.data("csa"), button.data("csb"));
                        }
                    } else {
                        $('#intentMessage').html(response.message + '. <br>Для продолжения введите номер прошедший валидацию и имеющий лимит рассрочки/<br> Также Вы можете пройти регистрацию по <a href="https://intend.uz/">ссылке</a>');
                        $('.customer.installment6 .loader').hide();
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    // console.log(textStatus, errorThrown);
                    // console.log(response);
                },

            });

        }
    } else {

        if ((firstName.val().length * phoneM.val().length) > 0) {
            formStep($(this).data("csa"), $(this).data("csb"));
        }
    }
    /*if((firstName.val().length * lastName.val().length * address.val().length * email.val().length * phoneM.val().length) > 0){*/

});

$(".check-delivery").click(function(e) {
    var delivery = $("#msordersform-delivery_type"),
        address = $("#msordersform-address"),
        form = $("#form-checkout"),
        data = form.data("yiiActiveForm");

    form.yiiActiveForm('validateAttribute', 'msordersform-address');
    form.yiiActiveForm('validateAttribute', 'msordersform-delivery_type');
    form.yiiActiveForm('validateAttribute', 'msordersform-delivery_type');

    // if(delivery.find("input:checked").length*address.val().length){
    //    formStep($(this).data("csa"), $(this).data("csb"));
    // }

});



function deliveryType() {
    let deliveryType = $("#msordersform-delivery_type input[type='radio']:checked").val();

    var delivery = $("#msordersform-delivery_type");
    var text_d = '';
    delivery.find("input").each(function() {
        if ($(this).is(':checked')) {
            text_d = $(this).siblings('label:first').text();
        }
    });
    $('.delivery-info').removeClass("display-none");

    if (deliveryType == 1) {
        $('.delivery-weight').show();
    }

    if (deliveryType == 0) {
        $('.delivery-weight').hide();
    }

    $('.delivery-info .delivery_type').text(text_d);
}

$("#msordersform-delivery_type input[type='radio']").click(function(e) {
    deliveryType();
});

let overlay = $('.overlay');
let region = $('#msordersform-city_id');
region.change(function(e) {
    // overlay.show();
    var url = window.location.pathname;
});


var lang = $("html").attr('lang');
switch (lang) {
    case 'oz-OZ':
        currency_text = ' сўм';
        break;
    case 'uz-UZ':
        currency_text = ' soʼm';
        break;
    case 'ru-RU':
        currency_text = ' сум';
        break;
    default:
        currency_text = ' сум';
}

function paymentInfo() {
    var payment = $(".installment_choose.active");
    var installmentChange = false;
    var product_prices = $("#page_cart .cart_item .cart-product-total .amount");
    var text_d = '';
    var total = $("#page_cart span.customer-amount").data('amount');
    var sub_total = $("#page_cart span.customer-amount").data('amount');
    var total_old = $("#page_cart span.customer-amount").data('amount-old');
    var total_amount_text = $("#page_cart span.amount.customer-amount").text();
    var sub_total_amount_text = total_amount_text;

    payment.find("input").each(function() {

        if ($(this).is(':checked')) {
            text_d = $(this).siblings('label:first').text();
            if ($(this).data('payment') === 'old_price') {
                var selected_installment_plan = $("#msordersform-installment_plan input[name='MsOrdersForm[installment_plan]']:checked").val();
                if (typeof selected_installment_plan === 'undefined') {
                    $("#msordersform-installment_plan .installment_plan_input:first-child input[name='MsOrdersForm[installment_plan]']").prop("checked", true);
                }
                installmentChange = true;

                $(".permonth_payment_row").removeClass("display-none");
                $(".installment_plan_row").removeClass("display-none");
            } else {
                sub_total = total;
                total += ($(this).data('payment') / 100 * total);
                product_prices.each(function() {
                    var cur_price = $(this).data('price');
                    $(this).html(cur_price);
                });
                $(".permonth_payment_row").addClass("display-none");
                $(".installment_plan_row").addClass("display-none");
            }
            if ($(this).data('payment') > 0) {
                $(".payment_percent_row").removeClass("display-none");
            } else {
                $(".payment_percent_row").addClass("display-none");
            }
        }
    });

    console.log(sub_total);

    $(".bottom .checkout-submit").removeClass("display-none");
    $('.payment-info').removeClass("display-none");
    $('.payment-info .payment_info').text(text_d);
    sub_total_amount_text = sub_total.toLocaleString(2) + currency_text;
    total_amount_text = total.toLocaleString(2) + currency_text;
    $("#page_cart span.amount.customer-amount").text(sub_total_amount_text);
    if (installmentChange) {
        installmentPlanChange();
    } else {

        $("#page_cart .order-total span.amount.total-amount").text(total_amount_text);
    }
}


$(".installment_plan_input input[name='MsOrdersForm[installment_plan]']").change(installmentPlanChange);

function installmentPlanChange() {
    var checked = $(".installment_plan_input input[name='MsOrdersForm[installment_plan]']:checked");
    var selected_plan_id = checked.val();
    var plan_text = checked.data('label');
    var installment_price = checked.data('summ');
    var permonth_price = checked.data('permonth');
    $('.installment_plan_row .installment_plan_info').html(plan_text);
    $('.permonth_payment_row .permonth_payment_info').html(Math.floor(permonth_price).toLocaleString(0) + currency_text);
    $('.order-total .amount.total-amount').html(Math.floor(installment_price).toLocaleString(0) + currency_text);
    var plan = checked.val();
    var group = $('.installment_choose.active').data('group');
    var pid = $('.installment_choose.active').data('pid');
    $('.panel-default.customer').removeClass('installment1');
    $('.panel-default.customer').removeClass('installment2');
    $('.panel-default.customer').removeClass('installment3');
    $('.panel-default.customer').removeClass('installment4');
    $('.panel-default.customer').removeClass('installment5');
    $('.panel-default.customer').removeClass('installment6');
    $('.panel-default.customer').addClass('installment' + group);
    if (group == 5) {
        $('.template_btn.send_offer').parent().addClass('hidden');
        $('.btn.template_btn.send_request').parent().removeClass('hidden');
        $('#limit_text').removeClass('hidden');
    } else if (group == 1 || group == 6) {
        $('.btn.template_btn.send_request').parent().addClass('hidden');
        $('.template_btn.send_offer').parent().removeClass('hidden');
        $('#limit_text').addClass('hidden');
    } else {
        $('.template_btn.send_offer').parent().removeClass('hidden');
        $('.btn.template_btn.send_request').parent().removeClass('hidden');
        $('#limit_text').removeClass('hidden');
    }
    if (pid) {
        $('.btn.template_btn.send_request').attr('href', '/installment/group/checkout/' + group + '/' + pid + '?plan=' + plan);
    } else {
        $('.btn.template_btn.send_request').attr('href', '/installment/group/checkout/' + group + '?plan=' + plan);
    }
}
installmentPlanChange();

$(document).on('click', "#msordersform-payment_info input[type='radio']", function(e) {
    paymentInfo();
});


$(document).on('click', ".installment_choose", function(e) {
    $('.installment_choose.active').removeClass('active');
    $(this).addClass('active');
    $('.msordersform-installment_plan').addClass('hide');
    $('#installment' + $(this).data('id')).removeClass('hide');
    $('#installment' + $(this).data('id') + ' .installment_plan_input:last-child input').click();
    $('#msordersform-payment_info').val($(this).data('id'));
    return false;
});



let Pays = document.querySelectorAll(".installment_choose")
let Unired = document.querySelector(".Unired")
let PayVideo = document.querySelector(".pay-video")
let PayTitle = PayVideo.getElementsByTagName("b")
let PaySpan = PayVideo.getElementsByTagName("span")


Pays.forEach((item) => {
    item.addEventListener("click", () => {
      if(item.dataset.group == 1){
        Unired.classList.add("Unired-active")
      }
      else {
        Unired.classList.remove("Unired-active")
      }
      if(item.dataset.group == 6){
        PayVideo.classList.add("pay-InTend")
        PayVideo.classList.remove("pay-Paymart")
        PayTitle[0].textContent = "InTend"
      }
      else if(item.dataset.group == 4){
        PayVideo.classList.add("pay-Paymart")
        PayVideo.classList.remove("pay-InTend")
        PayTitle[0].textContent = "Paymart"
      }
      if(item.dataset.group == 4 || item.dataset.group == 6){
        PaySpan[0].style.display = "block"
      }
      else{
        PayVideo.classList.remove("pay-InTend")
        PayVideo.classList.remove("pay-Paymart")
        PaySpan[0].style.display = "none"
      }
      });
     
})


// $.pjax.reload({
//     type: 'POST',
//     data: { 'city': this.value },
//     url: url,
//     container: "#page_cart",
//     timeout: 0
// }).done(function(data) {
//     deliveryType();
//     paymentInfo();

//     overlay.hide();
// });

deliveryType();
paymentInfo();
$('#installment11 .installment_plan_input:last-child input').click();
var options = {
    width: 400,
    zoomWidth: 500,
    offset: {vertical: 0, horizontal: 10},
    scale: 1.5
}

new ImageZoom(document.getElementById("img-container"), options);







