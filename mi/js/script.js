$(document).ready(function () {

    //E-mail Ajax Send
    $("#top-mail").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "./mail.php", //Change
            data: th.serialize()
        }).done(function () {
            alert("Ваше сообщение отправленно!");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

})

;
$(document).ready(function () {

    //E-mail Ajax Send
    $("#footer-mail").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "./mail.php", //Change
            data: th.serialize()
        }).done(function () {
            alert("Ваше сообщение отправленно!");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});


$(document).ready(function () {
    var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i; //name-_09@mail09-.ru
    var mail = $('#topmail');

    mail.blur(function () {
        if (mail.val() != '') {
            if (mail.val().search(pattern) == 0) {

                $('.submit-top').attr('disabled', false);
                mail.removeClass('error').addClass('ok');
            } else {
                $('#valid').text('Не верный Email');
                $('.submit-top').attr('disabled', true);
                mail.addClass('error');
            }
        } else {
            mail.addClass('error');
            $('#submit').attr('disabled', true);
        }
    });
});
$(document).ready(function () {
    var pattern = /^[0-9]{10}$/i; //name-_09@mail09-.ru
    var mail = $('#top-phone');

    mail.blur(function () {
        if (mail.val() != '') {
            if (mail.val().search(pattern) == 0) {

                $('.submit-top').attr('disabled', false);
                mail.removeClass('error').addClass('ok');
            } else {
                $('#valid2').text('Введите телефон формата 9377777777');
                $('.submit-top').attr('disabled', true);
                mail.addClass('error');
            }
        } else {
            mail.addClass('error');
            $('.submit-top').attr('disabled', true);
        }
    });
});
$(document).ready(function () {
    var pattern = /^[0-9]{10}$/i; //name-_09@mail09-.ru
    var mail = $('#bottom-phone');

    mail.blur(function () {
        if (mail.val() != '') {
            if (mail.val().search(pattern) == 0) {

                $('.submit-bottom').attr('disabled', false);
                mail.removeClass('error').addClass('ok');
            } else {
                $('#valid-bottom').text('Введите телефон формата 9377777777');
                $('.submit-bottom').attr('disabled', true);
                mail.addClass('error');
            }
        } else {
            mail.addClass('error');
            $('.submit-top').attr('disabled', true);
        }
    });
});
$(document).ready(function () {
    var $dropdowns = $('#rot-button');
    $dropdowns.click(function () {
        if ($('.har-block').hasClass('active-m')) {
            $('.har-block').toggleClass('active-m');
        } else {
            $('.har-block').removeClass('active-m');
            $('.har-block').toggleClass('active-m');
        }
        if ($('.har-block-back').hasClass('active-b')) {
            $('.har-block-back').toggleClass('active-b');
        } else {
            $('.har-block-back').removeClass('active-b');
            $('.har-block-back').toggleClass('active-b');
        }
        if ($('.har-img').hasClass('active-back')) {
            $('.har-img').toggleClass('active-back');
        } else {
            $('.har-img').removeClass('active-back');
            $('.har-img').toggleClass('active-back');
        }
    });
});


var index = 0;
var links = new Array(
    "./images/rot_img.png",
    "./images/rot_img2.png"
);

function slide(v) {
    var element = document.getElementById("pic");
    index += 1 * v;

    if (index > links.length - 1) index = 0;
    else if (index < 0) index = links.length - 1;
    element.src = links[index];
};

$(document).ready(function () {
    $('a[href^="#"]').click(function () {
//Сохраняем значение атрибута href в переменной:
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    });

});

