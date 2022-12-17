function changeColor(){
    var redInput = document.getElementById("redRange").value;
    var greenInput = document.getElementById("greenRange").value;
    var blueInput = document.getElementById("blueRange").value;

    document.body.style.backgroundColor = "rgb(" + redInput + "," + greenInput + "," + blueInput + ")";
}