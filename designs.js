//declare grid size variables
var height, width;

//declare color variable
var color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').on('submit', function (event){

    //prevent default action of submit
    event.preventDefault();

    //clear existing grid dynamically
    $('#pixelCanvas').children().remove();

    // Select size input
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    
    //call makeGrid() function with size inputs as argument
    makeGrid(height, width);
});

/**
* @description Creates a grid
* @constructor
* @param {string} row - The row of the grid
* @param {string} column - The column of the grid
*/
function makeGrid(row, column){

//use nested for loops to create grid
for(let r = 0; r < row; r++){
    
    //append rows to table
    $('#pixelCanvas').append('<tr id = row' + r + '></tr>');
    for(let c = 0; c < column; c++){

         //append columns to rows
       $('#row' + r).append('<td></td>');
    }
}

 //listen for click event
$('td').on('click',function(){

    // Select color input
    color = $('#colorPicker').val();

    /**
    *check if the clicked cell has color
    *if true remove color from the cell
    *if false color the cell
    */
    $(this).attr('style')? $(this).removeAttr('style'): $(this).css('background-color', color);
});
}

