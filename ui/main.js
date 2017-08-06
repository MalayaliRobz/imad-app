console.log('Loaded!');

var img = document.getElementById("madi");
var marginLeft1=0;
function moveRight() {
    marginLeft1 =marginLeft1 + 1;
    img.style.marginLeft = marginLeft1 + 'px';
}

img.onclick = function(){
    var interval= setInterval(moveRight,50);
}