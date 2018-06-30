
var rows;
var columns;

rows = document.getElementById("input_height").value;
columns = document.getElementById("input_width").value;

function gridMaker(){
  var table = document.getElementById("pixelCanvas");
  
  
  for (i = 0; i < rows; i++){
    var createRow;
    createRow = table.insertRow(i);
    createRow.setAttribute("class", "row");
    for (j = 0; j < columns; j++){
      var createColumn;
      createColumn = createRow.insertCell(j);

      createColumn.addEventListener('click', function (columnSelector){
    columnSelector.target.style.backgroundColor = document.getElementById("colorPicker").value;
  });
    }
  }

  

return false;
}
document.getElementById("submit").addEventListener("click", function(pickColors){
  gridMaker();
    pickColors.preventDefault();


});

var click_me= document.getElementById("click_me");
click_me.addEventListener("click", function (){
   this.style.color = "blue";
});