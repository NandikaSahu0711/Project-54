

function calculate() {
   var number = Number(document.getElementById("ibox").value);
    var area = number * number;
    document.getElementById("lblarea").innerHTML = area;

    var perimeter = number * 4;
    document.getElementById("lblperi").innerHTML = perimeter;

}
