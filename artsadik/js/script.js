$(document).ready(function () {
    $('a#go').click(function (event) {
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function () {
                $('#modal_form')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '40%'}, 200);
            });
    });

    $('#modal_close,#modal_close2, #overlay').click(function () {
        $('#modal_form,#modal_thx')
            .animate({opacity: 0, top: '45%'}, 200,
            function () { // �o��� a���a���
                $(this).css('display', 'none');
                $('#overlay').fadeOut(400);
            }
        );
    });
});