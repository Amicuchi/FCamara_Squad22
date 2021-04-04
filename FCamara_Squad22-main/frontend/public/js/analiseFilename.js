document.querySelector('#residencia').addEventListener('change', function (e) {
    var fileName = document.getElementById("residencia").files[0].name;
    var nextSibling = e.target.nextElementSibling
    nextSibling.innerText = fileName
});

document.querySelector('#renda').addEventListener('change', function (e) {
    var fileName = document.getElementById("renda").files[0].name;
    var nextSibling = e.target.nextElementSibling
    nextSibling.innerText = fileName
});

$("#btn-renda").click(function () {
    $("#renda").trigger('click');
});

$("#btn-residencia").click(function () {
    $("#residencia").trigger('click');
});