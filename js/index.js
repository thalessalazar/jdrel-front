$(document).ready(function () {
    cards();

    $("#searchCepBtn").click(function () {
        searchBtn();
    });
});

const cards = () => {
    $.ajax({
        type: "GET",
        url: "http://localhost:3333/api/count/cep/",
        cache: false,
        headers: {
            "Authorization": "Bearer " + $.cookie("token")
        },
        dataType: "json",
        success: function (data) {
            $("#cepTotalBase").html(data.total);
        }
    });

    $.ajax({
        type: "GET",
        url: "http://localhost:3333/api/count/users/",
        cache: false,
        headers: {
            "Authorization": "Bearer " + $.cookie("token")
        },
        dataType: "json",
        success: function (data) {
            $("#userTotalBase").html(data.total);
        }
    });
}

const searchBtn = () => {
    var cep = $("#searchCepInput").val();

    const url = `http://localhost:3333/api/cep/${cep}`;
    console.log(url)

    $.ajax({
        type: "GET",
        url: url,
        cache: false,
        headers: {
            "Authorization": "Bearer " + $.cookie("token")
        },
        dataType: "json",
        success: function (data) {
            console.log(data)

            $("#cepList").html("<span>CEP:</span>" + data.CEP.cep)
            $("#logradouroList").html("<span>Logradouro:</span>" + data.CEP.publicplace);
            $("#complementoList").html("<span>Complemento:</span>" + data.CEP.complement);
            $("#bairroList").html("<span>Bairro:</span>" + data.CEP.neighborhood);
            $("#localidadeList").html("<span>Localidade:</span>" + data.CEP.location);
            $("#ufList").html("<span>UF:</span>" + data.CEP.uf);
            $("#ibgeList").html("<span>IBGE:</span>" + data.CEP.ibge);
            $("#giaList").html("<span>GIA:</span>" + data.CEP.gia);
            $("#dddList").html("<span>DDD:</span>" + data.CEP.ddd);
            $("#siafiList").html("<span>SIAFI:</span>" + data.CEP.siafi);

            if (data.new) {
                cards();
            }
        }, 
        error: function(data) {
            alert("CEP Inválido");
        }
    });
}
