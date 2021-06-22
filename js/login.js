"use strict"

$(document).ready(function () {

    $("#error").hide();

    $("#enviar").click(function () {

        const email = $("#email").val();
        const password = $("#password").val();

        $.ajax({
            type: "POST",
            url: "http://localhost:3333/sessions",
            cache: false,
            data: {
                email: email,
                password: password,
            },
            dataType: 'json',
            success: function (data) {
                $.cookie("token", data.token);
                $.cookie("user", JSON.stringify(data.user));
                window.location.href = "/index.html";
            },
            error: function (data) {
                $("#error").html("Usuário ou Senhas inválidos");
                $("#error").show();
            }
        });
    });
});