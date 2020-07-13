// Select color input
// Select size input
var form_size = document.getElementById("sizePicker");
form_size.addEventListener("submit", function (event){
   event.preventDefault();
    var height = document.getElementById("inputHeight");
    var width = document.getElementById("inputWidth");
    //console.log(height.value);
    //console.log(width.value);
    var heightvalue = height.value;
    var widthvalue = width.value;
    makeGrid(heightvalue, widthvalue);
});
// When size is submitted by the user, call makeGrid()

function makeGrid(h, w) {

// Your code goes here!
    var table = document.getElementById("pixelCanvas");
    table.innerHTML = '';// old table clears
    for(var i = 0; i < h; i++){
        table.insertAdjacentHTML("afterbegin",'<tr id="tre"></tr>');
        var tre = document.getElementById("tre");
        for(var j = 0; j < w; j++){
            tre.insertAdjacentHTML("afterbegin",'<td></td>');
        }
    }
    table.addEventListener("click", function(event){
        var colorpicker = document.getElementById("colorPicker");
        var color = colorpicker.value;
        var select = event.target;
        select.style.backgroundColor = color;
    });
    


}
