$(document).ready(function() {

const myTable = $('#pixel_canvas');
// no need for info tags at this point
function setInitialStates(){
    removeAll(["h3", "h4"]);
}
// set an attribute for maximum units
$('#input_height').attr("max","50");
$('#input_width').attr("max","50");

// When size is submitted by the user, call makeGrid()
function makeGrid() {
    // Avoid the creation of repeating elements (h3, h4 tags)
    setInitialStates();

    const tableHeight = $('#input_height').val();
    const tableWidth = $('#input_width').val();

    // clear the old canvas
    myTable.children().remove();

    //Set maximum limit for number inputs
    if(tableHeight>50||tableWidth>50){
        alert("Please Insert a Number Between 1 and 50 for GRID Height & Width");
        // Function the removes the unnecessary info tags (at this point)
        setInitialStates();
        // Reset the input values
        $("form input[type=number]").val("1");
        return true;
    }else {
        // Create the table
        for (let n = 1; n<=tableHeight; n++){
            // Create rows
            myTable.append('<tr></tr>');
            for(let m = 1; m<=tableWidth; m++){
                $('tr').last().append('<td></td>');
            }
        }
    // Add the extra info
    addInfo();
    }
}
// Additional info after creating the grid
function addInfo() {
    $("body").append("<h3>Info:</h3><h4>One click to color the cell<br/>Double click to clear the cell</h4>");
}
// When the user submit the request
$('input[type="submit"]').click(function(event) {
    event.preventDefault();
    // Create the grid
    makeGrid();
});
// Click to select one color and start the drawing
myTable.on("click", "td", function() {
  let colors = $("#colorPicker").val();
  $(this).css("background-color", colors);
});
// Double click to remove color in the cell
myTable.on("dblclick", "td", function() {
  $(this).css("background-color", "");
});
//A simple helper function to remove multiple items
function removeAll(whichOnes){
    for (let q=0; q < whichOnes.length; q++){
        $(whichOnes[q]).remove();
    }
}
// -------------Design preparations
// Change the value of the submit button
$("input[type=submit]").val("Create || Clear");

// Create a wrapper for background gradient
$("body").prepend('<div id="wrapper"></div>');
// Create a paragraph
$("h2").first().after('<p id="tip">Please insert a number between 1 and 50<br/>for GRID Width and Height</p>');

});
