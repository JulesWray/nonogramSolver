// Use this function to return the value of any input - just use the id / name / class you want to reference as a parameter i.e. getValue('#nonogramRows'):
function getValue (classOrID) {
  var val = document.querySelector(classOrID).value;
  return val;
}

// Same as above, but only for id, and can take some cases that the above won't.
function getValueById (id) {
  var val = document.getElementById(id).value;
  return val
}

// Validates form and checks how many time the form has been submitted.
var submitCounter = 1;
let valid = false;
function check () {
  if (!getValue('#nonogramRows') || !getValue('#nonogramColumns') || !getValue('#numBlockRow') || !getValue('#numBlockColumn') && submitCounter !== 2) {
    alert('Please fill all inputs!');
    valid = false;
    return false;
  } else if (submitCounter !== 2) {
    submitCounter++;
    valid = true;
    return false;
  } else {
    valid = false;
    return true;
  }
}

// Triggers on a validated submit to get form data. Puts data in the rowsColumnsNumsBlocks array, and outputs it legibly in a new div for the user.
let rowsColumnsNumsBlocks = [];
document.getElementById('form').addEventListener(
  'submit',
  function () {
    if (valid == true) {
      rowsColumnsNumsBlocks = [];
      rowsColumnsNumsBlocks.push(getValue('#nonogramRows'));
      rowsColumnsNumsBlocks.push(getValue('#nonogramColumns'));
      rowsColumnsNumsBlocks.push(getValue('#numBlockRow'));
      rowsColumnsNumsBlocks.push(getValue('#numBlockColumn'));
      console.log(rowsColumnsNumsBlocks);
      
      let explainText = 'Here is the top outside of the Nonogram with ' + rowsColumnsNumsBlocks[1] + ' columns of up to ' + rowsColumnsNumsBlocks[3] + ' blocks, and the left outside of the Nonogram with ' + rowsColumnsNumsBlocks[0] + ' rows of up to ' + rowsColumnsNumsBlocks[2] + ' blocks:';
      const newDiv = document.createElement("div");
      const info = document.createTextNode(explainText);
      newDiv.appendChild(info);
      form.appendChild(newDiv);
      const br = document.createElement('br');
      form.appendChild(br);
      newInputs();
    }
  }
)

// This function creates grids of inputs for the user to input block lengths, using the data from the rowsColumnsNumsBlocks array. It produces 4 types of input boxes - 'first', which is the first block of the row, to give it indentation; 'newInput', which is filler without special characteristics; 'fiveRow/Col', which occurs every 5 rows/columns to make it easier to put in block values; and 'brInput', which is the bottom row of each grid and creates a space below it, so that things aren't jam-packed together.
var numCol = 0;
var numRow = 1000;
function newInputs () {
  for (i=0; i<2; i++) {
    if (i == 0) {
      for (y=0; y<rowsColumnsNumsBlocks[3]; y++) {
        if (y !== rowsColumnsNumsBlocks[3]-1) {
          for (z=0; z<rowsColumnsNumsBlocks[1]; z++) {
            if (z === 0) {
              const first = document.createElement('input');
              first.type = 'number';
              first.className = 'first';
              first.max = rowsColumnsNumsBlocks[0];
              first.style.marginLeft = rowsColumnsNumsBlocks[2]*3+'em';
              first.id = numCol;
              numCol++;
              formal.appendChild(first);            
            } else if (z !== rowsColumnsNumsBlocks[1]-1 && (z + 1) % 5 === 0) {
              const fiveCol = document.createElement('input');
              fiveCol.type = 'number';
              fiveCol.className = 'fiveCol';
              fiveCol.max = rowsColumnsNumsBlocks[0];
              fiveCol.id = numCol;
              numCol++;
              formal.appendChild(fiveCol);
            } else if (z !== rowsColumnsNumsBlocks[1]-1) {
              const newInput = document.createElement('input');
              newInput.type = 'number';
              newInput.className = 'newInput';
              newInput.max = rowsColumnsNumsBlocks[0];
              newInput.id = numCol;
              numCol++;
              formal.appendChild(newInput);
            } else {
              const newInput = document.createElement('input');
              newInput.type = 'number';
              newInput.className = 'newInput';
              newInput.max = rowsColumnsNumsBlocks[0];
              newInput.id = numCol;
              numCol++;
              formal.appendChild(newInput);
              const newBr = document.createElement('br');
              formal.appendChild(newBr);            
            }
          }
        } else {
          for (b=0; b<rowsColumnsNumsBlocks[1]; b++) {
            if (b === 0) {
              const first = document.createElement('input');
              first.type = 'number';
              first.className = 'first';
              first.max = rowsColumnsNumsBlocks[0];
              first.style.marginLeft = rowsColumnsNumsBlocks[2]*3+'em';
              first.id = numCol;
              numCol++;
              formal.appendChild(first);
            } else if (b !== rowsColumnsNumsBlocks[1]-1 && (b + 1) % 5 === 0) {
              const fiveCol = document.createElement('input');
              fiveCol.type = 'number';
              fiveCol.className = 'fiveCol';
              fiveCol.max = rowsColumnsNumsBlocks[0];
              fiveCol.id = numCol;
              numCol++;
              formal.appendChild(fiveCol);            
            } else if (b !== rowsColumnsNumsBlocks[1]-1) {
              const brInput = document.createElement('input');
              brInput.type = 'number';
              brInput.className = 'brInput';
              brInput.max = rowsColumnsNumsBlocks[0];
              brInput.id = numCol;
              numCol++;
              formal.appendChild(brInput);            
            } else {
              const brInput = document.createElement('input');
              brInput.type = 'number';
              brInput.className = 'brInput';
              brInput.max = rowsColumnsNumsBlocks[0];
              brInput.id = numCol;
              numCol++;
              formal.appendChild(brInput);
              const newBr = document.createElement('br');
              formal.appendChild(newBr);
            }
          }
        }
      }
    } else {
      for (j=0; j<rowsColumnsNumsBlocks[0]; j++) {
        if (j !== rowsColumnsNumsBlocks[0]-1 && (j + 1) % 5 === 0) {
          for (x=0; x<rowsColumnsNumsBlocks[2]; x++) {
            if (x !== rowsColumnsNumsBlocks[2]-1) {
              const fiveRow = document.createElement('input');
              fiveRow.type = 'number';
              fiveRow.className = 'fiveRow';
              fiveRow.max = rowsColumnsNumsBlocks[1];
              fiveRow.id = numRow;
              numRow++;
              formal.appendChild(fiveRow);
            } else {
              const fiveRow = document.createElement('input');
              fiveRow.type = 'number';
              fiveRow.className = 'fiveRow';
              fiveRow.max = rowsColumnsNumsBlocks[1];
              fiveRow.id = numRow;
              numRow++;
              formal.appendChild(fiveRow);
              const newBr = document.createElement('br');
              formal.appendChild(newBr);
            }
          }
        } else if (j !== rowsColumnsNumsBlocks[0]-1) {
          for (x=0; x<rowsColumnsNumsBlocks[2]; x++) {
            if (x !== rowsColumnsNumsBlocks[2]-1) {
              const newInput = document.createElement('input');
              newInput.type = 'number';
              newInput.className = 'newInput';
              newInput.max = rowsColumnsNumsBlocks[1];
              newInput.id = numRow;
              numRow++;
              formal.appendChild(newInput);
            } else {
              const newInput = document.createElement('input');
              newInput.type = 'number';
              newInput.className = 'newInput';
              newInput.max = rowsColumnsNumsBlocks[1];
              newInput.id = numRow;
              numRow++;
              formal.appendChild(newInput);
              const newBr = document.createElement('br');
              formal.appendChild(newBr);
            }
          }
        } else {
          for (a=0; a<rowsColumnsNumsBlocks[2]; a++) {
            if (a !== rowsColumnsNumsBlocks[2]-1) {
              const brInput = document.createElement('input');
              brInput.type = 'number';
              brInput.className = 'brInput';
              brInput.max = rowsColumnsNumsBlocks[1];
              brInput.id = numRow;
              numRow++;
              formal.appendChild(brInput);
            } else {
              const brInput = document.createElement('input');
              brInput.type = 'number';
              brInput.className = 'brInput';
              brInput.max = rowsColumnsNumsBlocks[1];
              brInput.id = numRow;
              numRow++;
              formal.appendChild(brInput);
              const newBr = document.createElement('br');
              formal.appendChild(newBr);
              const submit = document.createElement('input');
              submit.type = 'submit';
              submit.className = 'submitInput';
              submit.value = 'Submit - only press this once you have finished filling out the inputs completely!';
              formal.appendChild(submit);
            }
          }
        }
      }
    }
  }
}

// The generated columns are the first block of inputs that appear and the generated rows are the second.
var finalColArray = [];
var finalRowArray = [];
function format () {

  // Creates 2d array
  // Loops through the columns one by one, and for each column loops through every block in the columns, and uses the id of the block to push the value into dataINeed, which at the end of the inner loop will be pushed into the larger 2d array, dataForThisColumn.
  var colArrayV1 = [];
  for (a=0; a<rowsColumnsNumsBlocks[1]; a++) {
    var dataForThisColumn = [];
    for (b=0; b<rowsColumnsNumsBlocks[3]; b++) {
      var index = (b * rowsColumnsNumsBlocks[1]) + a;
      var dataINeed = getValueById(index);
      dataForThisColumn.push(dataINeed);
    }
    colArrayV1.push(dataForThisColumn);
  }

  // Works much the same way as above, just with a few things switched up.
  var rowArrayV1 = [];
  for (c=0; c<rowsColumnsNumsBlocks[0]; c++) {
    dataForThisRow = [];
    for (d=0; d<rowsColumnsNumsBlocks[2]; d++) {
      var index = (c * rowsColumnsNumsBlocks[2]) + d + 1000;
      var dataINeed = getValueById(index);
      dataForThisRow.push(dataINeed);
    }
    rowArrayV1.push(dataForThisRow);
  }

  // Loops through the 2d arrays, turns the strings in it to integers, and then gets rid of the 0 and NaN values.
  for (e=0; e<rowsColumnsNumsBlocks[1]; e++) {
    var stepOne = colArrayV1[e].map( function (string) {
      return parseInt(string, 10);
    });
    finalStep = stepOne.filter(zero => zero);
    finalColArray.push(finalStep);
  }
 
  for (f=0; f<rowsColumnsNumsBlocks[0]; f++) {
    var stepOne = rowArrayV1[f].map( function (string) {
      return parseInt(string, 10);
    });
    finalStep = stepOne.filter(zero => zero);
    finalRowArray.push(finalStep);
  }
  
  secondChecker();
  return false
}


// ?Maybe create 2d array of just 0s (filled), 1s (possible), and 2s (definitely not) mimicking the final table, so you can represent things and change? 

// Go through each row and column; find difference; update 2d array
// Find difference - add the block numbers together, then add the number of blocks-1, then take that all away from the column/row amount. This gives you how much you need to take away from each block

var totalColArr = [];
var totalRowArr = [];
function secondChecker () {
  
  var checkRowArr = [];
  var checkColArr = [];

  // Sums all of the blocks in each column, and puts them into the check array
  for (i=0; i<finalColArray.length; i++) {
    var totalColumn = 0;
    for (j=0; j<finalColArray[i].length; j++) {
      totalColumn += finalColArray[i][j];
    }
    totalColumn += finalColArray[i].length-1;
    checkColArr.push(totalColumn);
  }

  // Sums all of the blocks in each row, and puts them into the check array
  for (b=0; b<finalRowArray.length; b++) {
    var totalRow = 0;
    for (c=0; c<finalRowArray[b].length; c++) {
      totalRow += finalRowArray[b][c];
    }
    totalRow += finalRowArray[b].length-1;
    checkRowArr.push(totalRow);
  }

  // Checks that the sum of the block lengths in each column does not exceed the number of rows.
  var checkedCheckColArr = true;
  for (a=0; a<checkColArr.length; a++){
    if (checkColArr[a] > rowsColumnsNumsBlocks[0]) {
      alert('The blocks in column ' + (a+1) + ' sum to greater than would fit in this nonogram. Please re-enter them');
      checkColArr.length = 0;
      finalColArray.length = 0;

      // So that you don't get buildup of the row array
      checkRowArr.length = 0;
      finalRowArray.length = 0;
      
      checkedCheckColArr = false;
    }
  }

  // Checks that the sum of the block lengths in each row does not exceed the number of columns.
  var checkedCheckRowArr = true;
  for (d=0; d<checkRowArr.length; d++){
    if (checkRowArr[d] > rowsColumnsNumsBlocks[1]) {
      alert('The blocks in row ' + (d+1) + ' sum to greater than would fit in this nonogram. Please re-enter them');
      checkRowArr.length = 0;
      finalRowArray.length = 0;

      // SO that you don't get buildup of the column array
      checkColArr.length = 0;
      finalColArray.length = 0;
      
      checkedCheckRowArr = false;
    }
  }

  // Puts the column sum block values in a new, better array. The resets of arrays earlier in the code worked if wrong numbers were entered - this works no matter what.
  if (checkedCheckColArr === true) {
    totalColArr.length = 0;
    totalColArr = checkColArr;
  }

  // Puts the row sum block values in a new, better array. The resets of arrays earlier in the code worked if wrong numbers were entered - this works no matter what. 
  if (checkedCheckRowArr === true) {
    totalRowArr.length = 0;
    totalRowArr = checkRowArr;
  }

  console.log(totalRowArr)
  console.log(totalColArr);
} 
