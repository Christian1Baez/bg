var myButton = document.getElementById("mi_boton");
var myNum = document.getElementById("mi_numero")
var count = 0;

myButton.onclick = function (){
    count ++;
    myNum.innerHTML = count;
}