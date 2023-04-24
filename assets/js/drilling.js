
$(document).ready(function () {
    fetch("https://digimon-api.vercel.app/api/digimon")
        .then((response) => response.json())
        .then(function (json) {
            console.log(json)
            datosApi = json
            for (item = 0; item < datosApi.length; item++) {
                console.log(datosApi[item]["name"])
                $("#lista").append("<option>" + datosApi[item]["name"] + "</option>")
            }
        })
    $("#lista").change(function () {
        seleccion = $("#lista option:selected").text()

        for (item of datosApi) {
            if (item["name"] == seleccion) {
                console.log("se llego al item seleccionado")
                $("#row").append(`<div class="card col-sm-1 col-md-6 col-lg-4 col-xl-3 col-xxl-2">
                                <img src=${item["img"]} class="card-img-top">
                                <ul class="list-group list-group-flush">
                                <li class="list-group-item text-center"><b>Nombre</b>
                                <info>${item["name"]}</info></li>
                                <li class="list-group-item text-center"><b>Nivel</b>
                                <info class="${item["level"]}">${item["level"]}</info>
                                </li>
                                </ul>
                                </div>`)

                break
            }
        }
    })
})

