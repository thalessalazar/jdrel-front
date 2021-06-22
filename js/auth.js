window.onload = validToken();

function validToken() {
    if (!($.cookie("token")) || $.cookie("token") == undefined || $.cookie("token") == null) {
        document.location.href = "/login.html";
    }
}