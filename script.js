var rood = document.getElementById("rood");
var geel = document.getElementById("geel");
var blauw = document.getElementById("blauw");

rood.innerHTML = str;
geel.innerHTML = str;
blauw.innerHTML = str;

function veranderKleur(color) {
    document.body.style.background = color;
}

var lis = document.getElementsByTagName("li");

function kleuren() {
    if (rood.onclick() = true) {
        veranderKleur('red');
    }
}
kleuren();