$(document).ready(function ($) {

    $( "#ajax-form" ).sisyphus();

    var btn_go = $('#go');
    btn_go.on('click', function () {

        var $url = $('#url'),
            $method = $('#method'),
            $jsonField = $('#field-json'),
            $phpField = $('#field-php'),
            $data = $('#data');

        $jsonField.val('');

        $.ajax({
            url: $url.val(),
            data: ($method.val() === 'GET') ? {} : JSON.parse($data.val()),
            method: $method.val(),
            dataType: 'json',
            //contentType: "application/json",

            success: function (response) {
                $jsonField.val(JSON.stringify(response));
            },
            error: function (error) {
                console.log(error);
            }
        });

    });

});