$(document).ready(function () {
    var $dropdowns = $('.cart-img');
    $dropdowns.click(function () {
        if ($('.cart-pop-up').hasClass('active-m')) {
            $('.cart-pop-up').toggleClass('active-m');

        } else {
            $('.cart-pop-up').removeClass('active-m');
            $('.cart-pop-up').toggleClass('active-m');
        }
    });
});

$(document).ready(function () {
    var $dropdowns = $('.close-pop-cart');
    $dropdowns.click(function () {
        if ($('.cart-pop-up').hasClass('active-m')) {
            $('.cart-pop-up').toggleClass('active-m');

        } else {
            $('.cart-pop-up').removeClass('active-m');
            $('.cart-pop-up').toggleClass('active-m');
        }
    });
});