$(document).ready(function () {

    //E-mail Ajax Send
    $("#footer-mail").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "./mail.php", //Change
            data: th.serialize()
        }).done(function () {
            $('#modal_thx')
                .css('display', 'block')
                .animate({opacity: 1, top: '40%'}, 200);
            $('#modal_form,#modal_form')
                .animate({opacity: 0, top: '45%'}, 200,  // ��a��o ������ ��o��a��o��� �a 0 � o��o�������o ����a�� o��o �����
                function(){ // �o��� a���a���
                    $(this).css('display', 'none'); // ���a�� ��� display: none;
                    $('#overlay').fadeOut(400); // �����a�� �o��o���
                }
            );
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});
$(document).ready(function () {

    //E-mail Ajax Send
    $("#vak-form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "./mail.php", //Change
            data: th.serialize()
        }).done(function () {
            $('#modal_thx')
                .css('display', 'block')
                .animate({opacity: 1, top: '40%'}, 200);
            $('#modal_form,#modal_form')
                .animate({opacity: 0, top: '45%'}, 200,  // ��a��o ������ ��o��a��o��� �a 0 � o��o�������o ����a�� o��o �����
                function(){ // �o��� a���a���
                    $(this).css('display', 'none'); // ���a�� ��� display: none;
                    $('#overlay').fadeOut(400); // �����a�� �o��o���
                }
            );
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});





$(document).ready(function() { // ��� �a��� �o��� �a������ ���a����
    $('a#go').click( function(event){ // �o��� ���� �o ������ � id="go"
        event.preventDefault(); // ������a�� ��a��a����� �o�� �������a
        $('#overlay').fadeIn(400, // ��a�a�a ��a��o �o�a���a�� ������ �o��o���
            function(){ // �o��� ���o������ ����������� a���a���
                $('#modal_form')
                    .css('display', 'block') // ����a�� � �o�a���o�o o��a display: none;
                    .animate({opacity: 1, top: '40%'}, 200); // ��a��o ����a����� ��o��a��o��� o��o�������o �o �����a���� ����
            });
    });
    /* �a������ �o�a���o�o o��a, ��� ���a�� �o �� �a�o� �o � o��a��o� �o����� */
    $('#modal_close,#modal_close2, #overlay').click( function(){ // �o��� ���� �o �������� ��� �o��o���
        $('#modal_form,#modal_thx')
            .animate({opacity: 0, top: '45%'}, 200,  // ��a��o ������ ��o��a��o��� �a 0 � o��o�������o ����a�� o��o �����
            function(){ // �o��� a���a���
                $(this).css('display', 'none'); // ���a�� ��� display: none;
                $('#overlay').fadeOut(400); // �����a�� �o��o���
            }
        );
    });
});