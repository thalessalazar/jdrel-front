// Call the dataTables jQuery plugin
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:3333/api/cep/",
        cache: false,
        headers: {
            "Authorization": "Bearer " + $.cookie("token")
        },
        dataType: "json",
        success: function (data) {
            data.forEach(element => {
                const tr = `
                <tr>
                <td>${element.cep}</td>
                <td>${element.publicplace}</td>
                <td>${element.complement}</td>
                <td>${element.neighborhood}</td>
                <td>${element.location}</td>
                <td>${element.uf}</td>
                <td>${element.ibge}</td>
                <td>${element.ddd}</td>
                <td>${element.gia}</td>
                <td>${element.siafi}</td>
                </tr>`;

                $("#dataTable tbody").append(tr);
            });
            $('#dataTable').DataTable();
        }
    });
    


});
