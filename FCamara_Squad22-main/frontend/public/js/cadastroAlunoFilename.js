document.querySelector('#matricula').addEventListener('change', function (e) {
    var fileName = document.getElementById("matricula").files[0].name;
    var nextSibling = e.target.nextElementSibling
    nextSibling.innerText = fileName
});

document.querySelector('#rg').addEventListener('change', function (e) {
    var fileName = document.getElementById("rg").files[0].name;
    var nextSibling = e.target.nextElementSibling
    nextSibling.innerText = fileName
});

$("#btn-rg").click(function () {
    $("#rg").trigger('click');
});

$("#btn-matricula").click(function () {
    $("#matricula").trigger('click');
});