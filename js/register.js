"use strict"

$(document).ready(function () {

    $("#error").hide();

    $("#enviar").click(function () {

        const name = $("#exampleFirstName").val();
        const email = $("#exampleInputEmail").val();
        const password = $("#exampleInputPassword").val();
        const confirmPassword = $("#exampleRepeatPassword").val();

        $.ajax({
            type: "POST",
            url: "http://localhost:3333/api/users/",
            cache: false,
            data: {
                name: name,
                email: email,
                password: password,
                passwordConfirmation: confirmPassword,
                status: "ACTIVE",
            },
            dataType: 'json',
            success: function (data) {
                window.location.href = "/login.html";
            },
            error: function (data) {
                $("#error").html("Campos inválidos");
                $("#error").show();
            }
        });
    });
});