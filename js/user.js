// Call the dataTables jQuery plugin
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:3333/api/users/",
        cache: false,
        headers: {
            "Authorization": "Bearer " + $.cookie("token")
        },
        dataType: "json",
        success: function (data) {
            data.forEach(element => {
                const tr = `
                <tr id="e${element.id}">
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.email}</td>
                <td><a class="btn btn-danger" onclick="removeUser(${element.id})"><i class="fa fa-trash"></i></a></td>
                </tr>`;

                $("#dataTable tbody").append(tr);
            });
            $('#dataTable').DataTable();
        }
    });
});

function removeUser(id) {
    const url = `http://localhost:3333/api/users/${id}`;

    $.ajax({
        type: "delete",
        url: url,
        cache: false,
        headers: {
            "Authorization": "Bearer " + $.cookie("token")
        },
        dataType: "json",
        success: function (data) {

        },
    });

    var elem = document.getElementById(`e${id}`);
    elem.parentNode.removeChild(elem);
}

