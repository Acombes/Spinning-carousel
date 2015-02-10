(function () {
    var parents = document.getElementsByClassName('carouspin'),
        degree = 0;
    document.getElementById('rotate').addEventListener('click', function () {
        degree += 36;
        Array.prototype.forEach.call(parents, function (element) {
            element.style.transform = "rotateY(" + degree + "deg)";
        });
    });
})();
