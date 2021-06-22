"use strict"

$(document).ready(function () {
    userConfig();

    $("#logout").click(function () {
        logout();
    });

})

const userConfig = () => {
    const user = JSON.parse($.cookie("user"));
    $("#userName").html(user.name);
}

const logout = () => {
    $.removeCookie("token", { path: "/" });
    $.removeCookie("user", { path: "/" });
    $('#logoutModal').modal('toggle'); 
    window.location.href = "/login.html";
}